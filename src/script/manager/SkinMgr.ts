import ConfigManager from "./ConfigManager";
import { GameData } from "../common/GameData";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import { SkinConfig, ColorConfig, BrushConfig } from "../common/GameConfigType";
import { localData } from "../common/GameDataType";
import { ArrayUtil } from "../tool/ArrayUtil";

export default class SkinMgr {

    private static ins: SkinMgr;
    public static get instance(): SkinMgr {
        if (!SkinMgr.ins) SkinMgr.ins = new SkinMgr();
        return SkinMgr.ins;
    }

    /***************************************** 画线解谜 *****************************************/

    public async getBrushDataUglify() {
        let configs = await ConfigManager.instance.getBrushConfig();
        let netData = GameData.getInstance().brush;
        let dataArr: localData.BrushData[] = [];
        for (let key in configs) {
            let config: BrushConfig = configs[key];
            let data: localData.BrushData = {
                id: config.ID,
                icon: config.icon,
                unlock: netData.owns.indexOf(config.ID) > -1,
                use: netData.using == config.ID,
                weight: config.weight
            };
            dataArr.push(data);
        }
        return dataArr;
    }

    /**
     * 使用画笔
     * @param id ID
     */
    public useBrushUglify(id: number) {
        GameData.getInstance().brush.using = id;
        GameInfoManager.getInstance().saveInfo(GameConst.BRUSH_INFO);
    }

    /**
     * 解锁画笔
     * @param id ID
     */
    public unlockBrushUglify(id: number) {
        GameData.getInstance().brush.owns.push(id);
        GameInfoManager.getInstance().saveInfo(GameConst.BRUSH_INFO);
    }

    public async getCurBrushDataUglify(): Promise<BrushConfig> {
        let configs = await ConfigManager.instance.getBrushConfig();
        return configs[GameData.getInstance().brush.using];
    }
}