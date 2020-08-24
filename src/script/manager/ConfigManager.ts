
import * as ConfigType from "../common/GameConfigType";
import { GameData } from "../common/GameData";
import { MiniManeger } from "../minigame/MiniManeger";

/**
 * 配置管理
 */
export default class ConfigManager {

    private static ins: ConfigManager;
    public static get instance(): ConfigManager {
        if (!ConfigManager.ins) ConfigManager.ins = new ConfigManager();
        return ConfigManager.ins;
    }

    public randomVersion = "";
    private constructor() {
        if (!DeviceUtil.isNative()) {
            this.randomVersion = "?v=" + new Date().getTime();
        }
    }

    private readonly URL = "resource/assets/configs/";

    // 读取配置表 ----------------------------------------------------------------------------------

    /** 签到配置 */
    private signConfig: ConfigType.SignConfig[];
    /** 获取签到配置表 */
    public async getSignConfig(): Promise<ConfigType.SignConfig[]> {
        if (!this.signConfig) {
            this.signConfig = <ConfigType.SignConfig[]>(await this.loadCongigs(this.URL + "SignConfig.json"));
        }
        return this.signConfig;
    }

    /** 邀请配置 */
    private inviteConfig: ConfigType.InviteConfig[];
    /** 获取邀请配置表 */
    public async getInviteConfig(): Promise<ConfigType.InviteConfig[]> {
        if (!this.inviteConfig) {
            this.inviteConfig = <ConfigType.InviteConfig[]>(await this.loadCongigs(this.URL + "InviteConfig.json"));
        }
        return this.inviteConfig;
    }

    /** 免费体力配置 */
    private freePowerConfig: ConfigType.FreePowerConfig[];
    /** 获取免费体力配置表 */
    public async getFreePowerConfig(): Promise<ConfigType.FreePowerConfig[]> {
        if (!this.freePowerConfig) {
            this.freePowerConfig = <ConfigType.FreePowerConfig[]>(await this.loadCongigs(this.URL + "FreePowerConfig.json"));
        }
        return this.freePowerConfig;
    }

    /** 关卡模式配置 */
    private patternConfig: any;
    /** 获取关卡模式配置表 */
    public async getPatternConfig(): Promise<any> {
        if (!this.patternConfig) {
            // this.patternConfig = <ConfigType.PatternConfig[]>(await this.loadCongigs(this.URL + "PatternConfig.json"));
            let configs = <ConfigType.PatternConfig[]>(await this.loadCongigs(this.URL + "PatternConfig.json"));
            configs.sort((a, b) => {
                return a.sort - b.sort;
            });
            this.patternConfig = this.arrToObjById(configs);
        }
        return this.patternConfig;
    }

    /** 颜色配置 */
    private colorConfig: any;
    /** 获取颜色配置表 */
    public async getColorConfig(): Promise<any> {
        if (!this.colorConfig) {
            this.colorConfig = this.arrToObjById(await this.loadCongigs(this.URL + "ColorConfig.json"));
        }
        return this.colorConfig;
    }

    /** 颜色价格配置 */
    private colorPriceConfig: any;
    /** 获取颜色价格配置表 */
    public async getColorPriceConfig(): Promise<any> {
        if (!this.colorPriceConfig) {
            this.colorPriceConfig = this.arrToObjById(await this.loadCongigs(this.URL + "ColorPriceConfig.json"));
        }
        return this.colorPriceConfig;
    }

    /** 视频颜色配置 */
    private videoColorConfig: any;
    /** 获取视频颜色配置表 */
    public async getVideoColorConfig(): Promise<any> {
        if (!this.videoColorConfig) {
            this.videoColorConfig = this.arrToObjById(await this.loadCongigs(this.URL + "VideoColorConfig.json"));
        }
        return this.videoColorConfig;
    }

    /** 皮肤配置 */
    private skinConfig: any;
    /** 获取皮肤配置表 */
    public async getSkinConfig(): Promise<any> {
        if (!this.skinConfig) {
            this.skinConfig = this.arrToObjById(await this.loadCongigs(this.URL + "SkinConfig.json"));
        }
        return this.skinConfig;
    }

    /** 画笔配置 */
    private brushConfig: any;
    /** 获取画笔配置表 */
    public async getBrushConfig(): Promise<any> {
        if (!this.brushConfig) {
            this.brushConfig = this.arrToObjById(await this.loadCongigs(this.URL + "BrushConfig.json"));
        }
        return this.brushConfig;
    }

    /////////////////////////////////// 经典模式——教师 //////////////////////////////////////
    /** 龙骨动画配置 */
    private aniConf: any;
    /** 获取龙骨动画配置表 */
    public async getAniConf(): Promise<any> {
        if (!this.aniConf) {
            this.aniConf = await this.loadCongigs(this.URL + "game/type1/" + "aniConf.json");
        }
        return this.aniConf;
    }

    /** 关卡配置 */
    private levelConf: any;
    /** 获取关卡配置表 */
    public async getLevelConf(level: number): Promise<any> {
        this.levelConf = await this.loadCongigs(this.URL + "game/type1/" + "level" + level + ".json");
        return this.levelConf;
    }

    /** 关卡配置 */
    private levelConf2: any;
    /** 获取关卡配置表 */
    public async getLevelConf2(level: number): Promise<any> {
        this.levelConf2 = await this.loadCongigs(this.URL + "game/type2/" + "level" + level + ".json");
        return this.levelConf2;
    }

    /**
     * 初始化配置文件
     */
    public initConfigs() {
        return new Promise(async resolve => {
            // let conf = await this.loadCongigs("configs/configs.json");
            // // console.log("111", conf);
            // this._inviteConfig = conf.invite;
            // this.signConfig = conf.sign;
            // MiniManeger.instance.shareInfo = conf.shareInfo;
            await this.initConfig();
            resolve();
        });
    }

    public async initConfig() {
        let conf = await this.loadCongigs("configs/configs.json");
        GameData.getInstance().defaultConfigs = conf.gameConf;
        MiniManeger.instance.shareInfo = conf.shareInfo;
    }

    public loadCongigs(url): Promise<any> {
        return new Promise((resolve) => {
            let jsonUrl = url;
            Laya.loader.load(jsonUrl + this.randomVersion, Laya.Handler.create(this, (res) => {
                resolve(Utils.copy(res))
            }));
        });
    }

    private arrToObjById(arr: Array<any>): any {
        let obj = {};
        if (arr == null) return obj;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id) {//存在id的时候
                obj[arr[i].id] = arr[i]
            } else if (arr[i].ID) {
                obj[arr[i].ID] = arr[i]
            } else if (arr[i].itemid) {//存在其他
                obj[arr[i].itemid] = arr[i]
            }
        }
        return obj
    }
}
