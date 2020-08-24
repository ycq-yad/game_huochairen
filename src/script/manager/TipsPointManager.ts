import SignManager from "./SignManager";
import { localData } from "../common/GameDataType";
import GameEvent from "../common/GameEvent";
import { GameData } from "../common/GameData";

/**
 * 提示点系统枚举类型
 */
export enum TipsPointEnum {
    /** 签到提醒 */
    Sign = 9001,
}

/**
 * 提示红点系统
 */
export default class TipsPointManager {
    private constructor() {

    }

    private static ins: TipsPointManager;
    public static get instance(): TipsPointManager {
        if (!this.ins) {
            this.ins = new TipsPointManager();
        }
        return this.ins;
    }

    /**
     * 获取提示点状态
     * @param type 类型
     */
    public getPointStatus(type: TipsPointEnum) {
        switch (type) {
            case TipsPointEnum.Sign:
                this.checkSignIn();
                break;
        }
    }

    private checkSignIn() {
        let data = SignManager.instance.checkSign();
        let obj: localData.TipsPointData = {
            type: TipsPointEnum.Sign,
            show: false
        };
        if (data) obj.show = true;
        EventMgr.getInstance().sendEvent(GameEvent.TIPS_POINT, obj);
    }
}