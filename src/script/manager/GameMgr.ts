import { GameData } from "../common/GameData";
import GameEvent from "../common/GameEvent";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import PowerMgr from "./PowerMgr";
import ConfigManager from "./ConfigManager";
import { localData } from "../common/GameDataType";
import { PatternConfig } from "../common/GameConfigType";
import SignManager from "./SignManager";

export enum Prop {
    Power = 1001,
    Gold = 1002
}

/**
 * 管理器  处理一般数据
 */
export default class GameMgr {

    private constructor() {
    }

    private static ins: GameMgr;
    public static get instance(): GameMgr {
        if (!GameMgr.ins) GameMgr.ins = new GameMgr();
        return GameMgr.ins;
    }

    public autoShowSign: boolean = false;
    /** 记录跳转小游戏点击取消打开全屏游戏盒子时topBar是否处于显示状态 */
    public topBarIsShow: boolean = true;
    /** 记录跳转小游戏点击取消打开全屏游戏盒子时banner是否处于显示状态 */
    public bannerIsShow: boolean = true;

    public initData() {
        return new Promise(resolve => {
            GameData.getInstance().playerData.loginCount += 1;
            let curTime = (new Date()).getTime();
            let isOneDay = Utils.judgeIsOnTheSameDay(GameData.getInstance().playerData.loginTime, curTime);
            if (!isOneDay) {
                let canSign = SignManager.instance.checkSign();
                // this.autoShowSign = canSign;
                GameData.getInstance().playerData.loginTime = curTime;
                GameData.getInstance().freePower[1] = false;
                GameData.getInstance().playerData.shareVideoCount = 0;
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            }
            resolve();
        });
    }

    /**
     * 更新玩家基本数据
     * @param id id
     * @param value 变化值
     */
    public updateBaseData(id: number, value: number) {
        switch (id) {
            case Prop.Gold://金币
                GameData.getInstance().playerData.gold += value;
                if (GameData.getInstance().playerData.gold >= Number.MAX_VALUE) {
                    GameData.getInstance().playerData.gold = Number.MAX_VALUE;
                }
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                break;
            case Prop.Power:
                PowerMgr.instance.changePowerUglify({ count: value });
                break;
            default:
                console.warn("参数错误 ->", id);
        }
        // console.log("更新玩家基本数据 >>> ", GameData.getInstance().playerData);
    }

    public getIconUrlById(id: number): string {
        if (id == Prop.Power) {
            return "resource/assets/imgs/public/mianinterface_icon_1.png";
        } else if (id == Prop.Gold) {
            return "resource/assets/imgs/public/mianinterface_icon_2.png";
        }
        return "";
    }
}
window['GameMgr'] = GameMgr;