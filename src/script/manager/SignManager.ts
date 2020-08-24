import { GameData } from "../common/GameData";
import * as DataType from "../common/GameDataType";
import ConfigManager from "./ConfigManager";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";

/**
 * 签到管理工具
 */
export default class SignManager {
    private constructor() {
    }

    private static ins: SignManager;
    public static get instance(): SignManager {
        if (SignManager.ins == null) {
            SignManager.ins = new SignManager();
        }
        return SignManager.ins;
    }

    /** 获取签到数据 */
    public async getSignDataUglify() {
        let signConfig = await ConfigManager.instance.getSignConfig();
        let signIn = GameData.getInstance().signIn;
        let curCanSign = this.checkSign();
        let len = signConfig.length;
        if (curCanSign) {
            if (signIn.total_count >= len) {
                signIn.total_count = 0;
            }
            GameData.getInstance().signIn = signIn;
        }
        let dataArr: DataType.localData.SignData[] = [];
        for (let i = 0; i < len; i++) {
            let sign = signConfig[i];
            let canSign = false;
            let signed = false;
            if (i == signIn.total_count && curCanSign) canSign = true;
            if (i < signIn.total_count) signed = true;
            let data: DataType.localData.SignData = new DataType.localData.SignData();
            data.id = sign.id;
            data.name = sign.name;
            data.reward = sign.reward;
            data.canSign = canSign;
            data.isSigned = signed;
            dataArr.push(data);
        }
        return dataArr;
    }

    /** 检查当前能否签到 */
    public checkSign() {
        let signIn = GameData.getInstance().signIn;
        let lastTime = signIn.timeStamp;
        let currTime = (new Date()).getTime();
        let isOneDay = Utils.judgeIsOnTheSameDay(lastTime, currTime);
        return !isOneDay;
    }

    public updateSignDay() {
        GameData.getInstance().signIn.timeStamp += 24 * 3600 * 1000;
        GameInfoManager.getInstance().saveInfo(GameConst.SIGN_INFO);
    }
}
window["SignManager"] = SignManager;