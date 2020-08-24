import { GameData } from "../common/GameData";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import ConfigManager from "./ConfigManager";
import { localData } from "../common/GameDataType";
import { PatternConfig } from "../common/GameConfigType";

export default class PatternMgr {

    private constructor() {
    }

    private static ins: PatternMgr;
    public static get instance(): PatternMgr {
        if (!PatternMgr.ins) PatternMgr.ins = new PatternMgr();
        return PatternMgr.ins;
    }

    public async getLevelData2Uglify() {
        let configs = await ConfigManager.instance.getPatternConfig();
        let config: PatternConfig = configs["103"];
        let netData = GameData.getInstance().level["103"];
        let dataArr: localData.LevelData2[] = [];
        for (let i = 0; i < config.maxnum; i++) {
            // const element = netData.lv[i + 1];
            let data = new localData.LevelData2();
            data.id = i + 1;
            data.unlock = data.id <= netData.curLv;
            data.isCur = data.id == netData.passLv + 1;
            dataArr.push(data);
        }
        return dataArr;
    }

    public async getPatternConfBySort(sort: number): Promise<PatternConfig> {
        let configs = await ConfigManager.instance.getPatternConfig();
        for (let key in configs) {
            const element = configs[key];
            if (element.sort == sort) {
                return element;
            }
        }
    }

    public getTotLevelUglify() {
        let data = GameData.getInstance().level;
        let num = 0;
        for (let key in data) {
            if (data[key].passLv) num += data[key].passLv;
        }
        return num;
    }

    public async unlockPatternUglify(curPattern: number, curLv: number) {
        let configs = await ConfigManager.instance.getPatternConfig();
        let config: PatternConfig = configs[curPattern];
        if (curLv < config.openLN) return;
        let nextP = await this.getPatternConfBySort(config.sort + 1);
        if (!nextP) return;
        let pattern = nextP.ID;
        if (GameData.getInstance().level[pattern]) return;
        switch (pattern) {
            case 101:
                GameData.getInstance().level[pattern] = { passLv: 0, curLv: 1 };
                break;
            case 102:
                GameData.getInstance().level[pattern] = { passLv: 0, curLv: 1, lv: { 1: { star: 0 } } };
                break;
            case 103:
                GameData.getInstance().level[pattern] = { passLv: 0, curLv: 1 };
                break;
        }
        // GameInfoManager.getInstance().saveInfo(GameConst.LEVEL_INFO);
    }

    public async updateLevelUglify(data: { pattern: number, curLv: number, star?: number }) {
        let configs = await ConfigManager.instance.getPatternConfig();
        let config: PatternConfig = configs[data.pattern];
        let next = data.curLv + 1;
        if (next > config.maxnum) {
            next = config.maxnum;
        }
        switch (data.pattern) {
            case 101:
            case 103:
                let pa1 = GameData.getInstance().level[data.pattern];
                if (data.curLv > pa1.passLv)
                    GameData.getInstance().level[data.pattern] = { passLv: data.curLv, curLv: next };
                break;
            case 102:
                let pa2 = GameData.getInstance().level[data.pattern];
                pa2.passLv = data.curLv;
                pa2.curLv = next;
                if (pa2.lv[data.curLv]) {
                    if (data.star > pa2.lv[data.curLv].star)
                        pa2.lv[data.curLv].star = data.star;
                } else {
                    pa2.lv[data.curLv] = { star: data.star };
                }
                if (!pa2.lv[next]) pa2.lv[next] = { star: 0 };
                GameData.getInstance().level[data.pattern] = pa2;
                break;
            // case 103:
            //     GameData.getInstance().level[data.pattern] = { passLv: data.curLv, curLv: next };
            //     break;
        }
        await this.unlockPatternUglify(data.pattern, data.curLv);
        GameInfoManager.getInstance().saveInfo(GameConst.LEVEL_INFO);
        return next;
    }
}
window['PatternMgr'] = PatternMgr;