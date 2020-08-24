import { PlatformInfos } from "../common/GameConfigType";


export class MiniManeger {

    public static ins: MiniManeger;
    public static get instance(): MiniManeger {
        // if (MiniManeger.ins == null) {
        //     if (DeviceUtil.isWXMiniGame()) {
        //         MiniManeger.ins = new MiniWeChatGameManager();
        //     } else if (DeviceUtil.isTTMiniGame()) {
        //         MiniManeger.ins = new MiniTTGameManager()
        //     }
        //     else {
        //         MiniManeger.ins = new MiniWeChatGameManager();
        //     }

        // }

        return MiniManeger.ins;
    }
    /** 小游戏启动参数 */
    public launchOption: any;
    /** 小游戏系统信息 */
    public systemInfo: any;
    /** 不同平台的基本配置数据 */
    public infos: PlatformInfos;

    protected compareVersion(v1: string, v2: string) {
        let v1Arr = v1.split(".");
        let v2Arr = v2.split(".");
        const len = Math.max(v1Arr.length, v2Arr.length);

        while (v1Arr.length < len) {
            v1Arr.push("0");
        }
        while (v2Arr.length < len) {
            v2Arr.push("0");
        }

        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1Arr[i]);
            const num2 = parseInt(v2Arr[i]);
            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    }

    /**
     * 初始化小游戏
     */
    public initMiniGame() {
        // platform.onHide(onHide);

    }
    /** 登录游戏 */
    public async loginGame(): Promise<any> { }
    /** 登录 */
    public async login(): Promise<any> { }

    public async getToken(): Promise<any> { }
    /**
     * 获取用户信息
     */
    public async getUserInfo(): Promise<any> {
    }

    /**
     * 出事玩家信息  拉取授权等
     * 
     * 暂定返回用户信息
     */
    public async initUserInfo() {
    }

    /**
     * 创建用户按钮的尺寸大小
     * @param percentTop  按钮距离上面位置的比列
     * @param pectendSize  按钮尺寸大小占设计大小的比例
     * @param percentLeft  按钮距离左边位置的比列
     */
    public userButtonSize(percentTop: number, pectendSize: number, percentLeft: number) {

        ////自行处理
    }
    /**
     * 
     * @param style 
     */
    public async createUserButton(style: {
        left: number, top: number, width: number, height: number,
        alpha?, lineHeight?, color?, textAlign?, fontSize?, borderRadius?, backgroundColor?
    }, isFullScene: boolean = false): Promise<any> {


    }

    /**
     * 进入后台的时间戳
     */
    public hideTime = 0;
    /**
     * 进入前天的时间戳
     */
    public showTime = 0;
    public onShow(callBack: Function) {

    }

    public onHide(callBack: Function) {

    }

    public onAudioInterruptionBegin(callBack: Function) {

    }

    public onAudioInterruptionEnd(callBack: Function) {

    }

    // /**
    //  * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
    //  */
    // public getUpdateManager() {

    // }

    /****************************************分享************************************/

    // public defaultMssage: any = {

    // }

    public shareInfo = [

    ]


    // /**
    //  * 
    //  * @param query 得到分享配置
    //  */
    // public getShareInfo(query: Object): any {

    // }

    /**
     * 分享处理
     * @param data 
     */
    public shareAppMessage(data?: { message?: any, thisObj?: any, sucFun?: Function, failFun?: Function, time?: number }) {

    }

    // public shareSucful: Function;

    // public shareFailful: Function;

    // public thisObj: any;
    /**
    //  * 分享成功回调的等待时间
    //  */
    // public sucTime: number = 0;

    /**********************************************广告*****************************************/


    /**
  * 播放视频广告
  * 
  */
    public playViderAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean, sceneKey?: string }) {
        data.successFun && data.successFun();
    }
    // public bannerAd: any;
    public canShowBanner = true;
    public async createBanner() {

    }
    /** 特殊处理 显示banner */
    public showBannerAdSp() {

    }
    /**
     * 显示banner
     */
    public showBannerAd(offset: { w: number, h: number, callback?: Function }) {

    }

    /**
     * 隐藏banner
     */
    public hideBanner() {

    }

    /** 显示插屏广告 */
    public showInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        data.closeFun && data.closeFun();
    }

    /** 显示盒子广告 */
    public showAppBoxAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        data.closeFun && data.closeFun();
    }


    /**
     * 短震动
     */
    public vibrateShort(data: { complete?: Function }) {

    }
    /**
     * 长震动
     */
    public vibrateLong() {

    }

    /**
     * 适配添加到我的小程序
     * @param collec_img 
     * @param stage 
     */
    public adaptImgToClientRect(collec_img: Laya.Image, stage: Laya.Stage) {

    }

    /**
     * 发送到开放数据
     */
    public sendDataToWxOpen(data: { cmd: string, data: any }) {


    }

    /**
     * 
     * @param data 
     */
    public removeOpenData(data: { parent: Laya.Sprite }) {

    }
    /**
     * 增加到微信开放域
     * @param data 
     */
    public addOpenWxData(data: { x?: number, y?: number, width: number, height: number, left?: number, right?: number, top?: number, bottom?: number, parent: Laya.Sprite, isCenter?: boolean }) {

    }
    /**************************************** 头条 ****************************************/

    /** 最大录制时间 default 120s */
    public maxMakeVideoTime: number = 120;
    /** 开始录制 */
    public startGameRecord(data: { startFun?: Function, stopFun?: Function }) { }
    /** 停止录制 */
    public stopGameRecord(force: boolean = false) { }
    /** 分享录屏 */
    public shareGameVideo(data?: { successFun?: Function, failFun?: Function, errorFun?: Function }) { }

    /** 头条 更多游戏数据 */
    public moreGameAppInfos: MoreSomeAppInfo[];
    /** 头条 更多游戏是否显示中 */
    public moreGamesIsShow: boolean = false;
    /** 头条 显示更多游戏，需要提前设置 moreSomeAppInfos */
    public showMoreGamesModal(data?: { sucFun?: Function, closeFun?: Function }) { }

    public showMoreGame(data: { parent: Laya.Sprite, moreGame: any }) { }
}
/**
 * 更多游戏需要跳转的单个数据
 */
export class MoreSomeAppInfo {
    /**icon url */
    icon: string;
    title: string;
    appid: string;
}