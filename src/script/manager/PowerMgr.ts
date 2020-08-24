import { GameData } from "../common/GameData";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import GameEvent from "../common/GameEvent";
import ConfigManager from "./ConfigManager";
import { localData } from "../common/GameDataType";
import SignManager from "./SignManager";
import PatternMgr from "./PatternMgr";

/**
 * 体力管理
 */
export default class PowerMgr {

    private static ins: PowerMgr;
    public static get instance(): PowerMgr {
        if (!PowerMgr.ins) PowerMgr.ins = new PowerMgr();
        return PowerMgr.ins;
    }

    public set power(num) {
        GameData.getInstance().playerData.power = num;
        if (GameData.getInstance().playerData.power > GameData.getInstance().defaultConfigs.maxPower) {
            GameData.getInstance().playerData.power = GameData.getInstance().defaultConfigs.maxPower;
        }
    }
    public get power(): number {
        return GameData.getInstance().playerData.power;
    }

    /**
     * 自然恢复上限
     */
    private powerLimit: number = GameData.getInstance().defaultConfigs.rePowerLimit;

    /**
     * 恢复一点体力所需时间 ms
     */
    private powerRestoreTime = GameData.getInstance().defaultConfigs.rePowerCD * 1000;

    /**
     * 限时恢复体力
     */
    public spaceTimeRestorePowerUglify(): number {
        let showTime = 0;
        if (this.power >= this.powerLimit) {//取消自然恢复
            GameData.getInstance().playerData.lastPowerTime = 0;
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            return showTime;
        } else {
            /** 上一次恢复时间点 ms */
            let powerTime = GameData.getInstance().playerData.lastPowerTime;
            if (powerTime != null && powerTime != 0) {
                let nowTime = new Date().getTime();
                /** 经过时间 ms */
                let disTime = nowTime - powerTime;
                if (disTime >= 0) {
                    let count = Math.floor(disTime / this.powerRestoreTime);//经过时间恢复点数
                    let diffTime = disTime % this.powerRestoreTime;
                    if (count > 0) {
                        this.power += count;
                    }
                    if (this.power >= this.powerLimit) {//取消自然恢复
                        console.warn("体力达自然恢复上限！");
                        // this.power = this.powerLimit;
                        GameData.getInstance().playerData.lastPowerTime = 0;
                    } else {
                        showTime = this.powerRestoreTime - diffTime;
                    }
                }
            } else {
                showTime = this.powerRestoreTime;
                GameData.getInstance().playerData.lastPowerTime = new Date().getTime();
            }
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            return showTime;
        }
    }

    /**
     * 体力值变化
     * @param count 消耗体力传负值
     * @param isNatural 是否是自然回复
     */
    public changePowerUglify(data: { count: number, isNatural?: boolean, success?: Function, fail?: Function }) {
        let count = data.count;
        let isNatural = data.isNatural;
        if (count < 0) {//消耗体力
            if (this.power + count < 0) {
                EventMgr.getInstance().sendEvent(GameEvent.OPEN_BUY_PROP, { type: 1 });
                return;
            } else {
                data.success && data.success();
                if (this.power < this.powerLimit) {
                    this.power += count;
                } else {
                    if (this.power + count < this.powerLimit) {//开始自然恢复
                        console.warn("开始自然恢复");
                        this.power += count;
                        GameData.getInstance().playerData.lastPowerTime = new Date().getTime();
                        EventMgr.getInstance().sendEvent(GameEvent.POWER_REPLY_STATUS, 2);
                    } else {
                        this.power += count;
                    }
                }
            }
        } else {//增加体力
            this.power += count;
            if (this.power >= this.powerLimit) {//取消自然恢复
                console.warn("体力达自然恢复上限！");
                // this.power = this.powerLimit;
                GameData.getInstance().playerData.lastPowerTime = 0;
                EventMgr.getInstance().sendEvent(GameEvent.POWER_REPLY_STATUS, 1);
            } else {
                if (isNatural) {
                    GameData.getInstance().playerData.lastPowerTime = new Date().getTime();
                }
            }
        }
        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
        GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
    }

    /**
     * 判断体力值是否充足
     * @param value 体力值
     */
    public checkPowerIsOrNotEnoughUglify(value: number): boolean {
        let isEnough = value <= this.power ? true : false;
        return isEnough;
    }

    public async getFreePowerDataUglify() {
        let configs = await ConfigManager.instance.getFreePowerConfig();
        let netData = GameData.getInstance().freePower;
        let dataArr: localData.FreePowerData[] = [];
        let totLv = PatternMgr.instance.getTotLevelUglify();
        for (let i = 0, len = configs.length; i < len; i++) {
            const element = configs[i];
            let data = new localData.FreePowerData();
            data.id = element.id;
            data.name = element.name;
            data.rewardNum = element.reward;
            data.icon = element.icon;
            data.param = element.param;
            data.isGeted = !!netData[data.id];
            if (data.id == 1) {
                data.canGet = !SignManager.instance.checkSign();
            } else {
                data.canGet = totLv >= element.param;
            }
            dataArr.push(data);
        }
        return dataArr;
    }
}