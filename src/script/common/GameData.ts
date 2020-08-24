import * as DataType from "./GameDataType";
import GameConst from "./GameConst";

/**
 * 游戏数据缓存
 */
export class GameData {
    private constructor() { }

    private static instance: GameData;
    public static getInstance(): GameData {
        if (!GameData.instance) {
            GameData.instance = new GameData();
        }
        return GameData.instance;
    }

    /** 服务器Http地址（清空服务器数据）*/
    public URL_DELETE_DATA: string = "";
    // public URL_DELETE_DATA_TEST: string = "https://yxtest.32yx.com/DelMiniGameData.fcgi";
    public URL_DELETE_DATA_TEST: string = "https://172.17.3.217:8090/DelMiniGameData.fcgi";

    /** 服务器Http地址（保存数据）*/
    public URL_SAVE_DATA: string = "";
    public URL_SAVE_DATA_TEST: string = "http://172.17.3.217:8090/MiniGameData.fcgi";

    /** 服务器Http地址（排行榜）*/
    public URL_OF_RANK: string = "";
    public URL_OF_RANK_TEST: string = "http://172.17.3.217:8090/MiniGameRank.fcgi";

    /** 服务器Http地址（邀请关联）*/
    public URL_OF_INVITE: string = "";
    public URL_OF_INVITE_TEST: string = "http://172.17.3.217:8090/Invitation.fcgi";

    /** 从服务器获取当前时间戳地址 */
    public URL_TIMESTAMP: string = "";

    /** 服务器Http地址（微信登录请求） */
    public URL_WX_REQ: string = "";
    public URL_WX_REQ_TEST: string = "http://172.17.3.217:8090/MiniGame.fcgi";

    /**
     * 小游戏资源路径根目录
     */
    public MinigameResUrlRoot = '';

    /**
     * 小游戏资源全路径
     */
    public MinigameResAllUrl = '';

    /** 小游戏资源版本号 */
    public resVersion = '1_1/'
    /** 游戏ID */
    public gameId: string = "";

    /** 非正常退出观看视频提示 */
    public videoTips: string = "视频观看完整才能获得奖励哦";

    /** 全面屏偏移量 */
    public fullScreenOffSet = 100;

    /** 
     * 服务类型 
     * (nts 内网测试服)
     * (wts 外网测试服)
     * (wzs 外网正式服)
     * */
    private serverConf_: "nts" | "wts" | "wzs";

    /**
     * 服务类型 只能设置一次 即可修改服务并且指明版本号
     */
    public set serverConf(sc) {
        this.serverConf_ = sc;
        this.initServer();
    }
    /**
     * 初始服务配置
     */
    private initServer(): void {
        switch (GameData.instance.serverConf_) {
            case "nts":
                this.URL_SAVE_DATA = this.URL_SAVE_DATA_TEST;
                this.URL_OF_RANK = this.URL_OF_RANK_TEST;
                this.URL_OF_INVITE = this.URL_OF_INVITE_TEST;
                this.URL_DELETE_DATA = this.URL_DELETE_DATA_TEST;
                break;
            case "wts":

                break;
            case "wzs":

                break;
        }
    }

    /**
     * 当前游戏版本号（大于infos.json中的版本号时，为提审版，提升通过时，修改infos.json中版本号）
     * 必须是数字，1为测试版
     */
    public gameVersion: number = 1001;
    /**
     * 是否提交审核版本
     * 提交审核版本 为true时，关闭分享看视频按钮等，只保留基本游戏功能，应付审核版本
     * false时，正常游戏功能
     */
    public isConVersion = false;
    /**
     * 修改数据信息
     * 如果版本不对应  修改到新数据类型
     * 当前只处理删除
     */
    public strogeVersion = '1001';

    /** 是否测试版本 */
    public isTestVersion = true;
    /**
     * 是否授权后获取openid
     */
    public isGetOpenid = true;
    /** banner */
    public bannerId: Array<string>;
    /** 短视频id */
    public videoId: Array<string>;
    /** 长视频id */
    public longVideoId: Array<string>;
    /** 插屏id */
    public intersId: Array<string>;
    /** 是否维护游戏 */
    public isOpen: boolean;
    /** 广告审核版本 */
    public adConversion: boolean;
    /** 双倍领取是否默认开启 */
    public selectDoule: boolean;
    /** 头条激励视频ID */
    public readonly ttVideoId: string[] = ["9143qof69l9jd53hg1"];
    /** 头条BannerID */
    public readonly ttBannerId: string[] = ["1ona7n89mfb15qklcv"];
    /** -1=全模式；0=摔杯达人；1=经典模式；2=划线解密 */
    public modelId: number = -1;
    /** 视频开关（关闭，用分享代替） */
    public videoOpen: boolean = true;
    /** 误触开关 */
    public touchByMistake: boolean;
    public autoMakeVideo: boolean;
    public bagBtnDelay: number;
    public channel: "duyou";

    public initConfig(res) {
        GameConst.infos = res// JSON.parse(res + "");
        GameData.getInstance().gameId = res.gameId;
        GameData.getInstance().modelId = GameConst.infos.model;
        GameData.getInstance().channel = res.channel;
        if (DeviceUtil.isMiniGame()) {
            GameData.getInstance().serverConf = GameConst.infos.serverConf;
        } else {
            GameData.getInstance().serverConf = "nts";
        }
        if (GameData.getInstance().gameVersion > GameConst.infos.version) {
            GameData.getInstance().isConVersion = true;
        } else {
            GameData.getInstance().isConVersion = false;
        }
        GameData.getInstance().bagBtnDelay = res.bagBtnDelay ? res.bagBtnDelay : 0;
        GameData.getInstance().isTestVersion = GameData.getInstance().gameVersion == 1;
        GameData.getInstance().bannerId = GameConst.infos.bannerId;
        GameData.getInstance().videoId = GameConst.infos.videoId;
        GameData.getInstance().longVideoId = GameConst.infos.longVideoId;
        GameData.getInstance().intersId = GameConst.infos.intersId;
        GameData.getInstance().isOpen = GameConst.infos.isOpen;
        GameData.getInstance().strogeVersion = GameConst.infos.strogeVersion;
        GameData.getInstance().adConversion = GameConst.infos.adConversion;
        GameData.getInstance().selectDoule = GameConst.infos.selectDoule;
        GameData.getInstance().videoOpen = GameConst.infos.videoOpen;
        GameData.getInstance().touchByMistake = GameConst.infos.touchByMistake;
        GameData.getInstance().autoMakeVideo = res.autoMakeVideo;
        if (DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
            GameData.getInstance().isTestVersion = res.testVersion;
            GameData.getInstance().isConVersion = res.reviewVersion;
        }
    }

    public enterGameInfo: any;

    private _shakeIsOpen: boolean = true;
    /** 震动状态 */
    public set shakeIsOpen(isOpen: boolean) {
        this._shakeIsOpen = isOpen;
    }
    public get shakeIsOpen(): boolean {
        return this._shakeIsOpen;
    }

    /** 用户基本信息 */
    public userInfo: DataType.netData.UserInfos = new DataType.netData.UserInfos();

    private _playerData: DataType.netData.PlayerData = new DataType.netData.PlayerData();
    /** 玩家基础数据 */
    public set playerData(value) {
        value.loginTime && (this._playerData.loginTime = value.loginTime);
        value.gold && (this._playerData.gold = value.gold);
        value.power && (this._playerData.power = value.power);
        this._playerData.lastPowerTime = value.lastPowerTime;
        this._playerData.shareVideoCount = value.shareVideoCount;
        value.loginCount && (this._playerData.loginCount = value.loginCount);
    }
    public get playerData(): DataType.netData.PlayerData {
        return this._playerData;
    }

    /** 签到相关数据 */
    public signIn: DataType.netData.SignIn = new DataType.netData.SignIn();

    /** 邀请相关数据 */
    public invite: DataType.netData.Invite = new DataType.netData.Invite();

    /** 免费体力 */
    public freePower = {};

    public level = {
        "103": { passLv: 0, curLv: 1 }
    }

    public color: DataType.netData.Color = new DataType.netData.Color();

    public skin: DataType.netData.Skin = new DataType.netData.Skin();

    public brush: DataType.netData.Brush = new DataType.netData.Brush();;

    /**
     * 默认配置
     */
    public defaultConfigs = {
        /** 体力初始默认值 */
        defaultPower: 5,
        /** 每n秒恢复1体力（不分线上线下，配置单位：秒） */
        rePowerCD: 300,
        /** 体力自然恢复上限 */
        rePowerLimit: 5,
        /** 体力上限 */
        maxPower: 99,
        /** 看视频买体力 */
        videoBuyPower: 2,
        /** 看视频买金币 */
        videoBuyGold: 200,
        /** 体力书包 */
        powerBag: 1,
        /** 摔杯达人通关奖励 */
        passGold0: 50,
        /** 经典模式通关奖励 */
        passGold1: 50,
        /** 智力划线通关奖励 */
        passGold2: 50,
        shareRecordAward: 100,
        /** 皮肤试用生效关卡数 */
        skinTryCount: 1,
        /** 智力划线解锁画笔花费金币  */
        unlockCost2: 500,
        starTipSec: 8,
        powerCost: 1
    }
}