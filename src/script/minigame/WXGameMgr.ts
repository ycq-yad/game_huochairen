import { MiniManeger } from "./MiniManeger";
import { GameData } from "../common/GameData";
import GameEvent from "../common/GameEvent";
import GameConst from "../common/GameConst";
import InviteManager from "../manager/InviteManager";

/**
 * 微信小游戏管理
 */
export class WXGameMgr extends MiniManeger {
    public constructor() {
        super();
    }

    private appid: string = "wx2947380262b38961";
    private secret: string = "2b7eb6a3f2f385fc2e2e8625aa642b95";
    private url: string = "https://yxtest.32yx.com/MiniGame.fcgi";

    public launchOption: WXLaunchOptions;
    public systemInfo: WXSystemInfo;
    /** 进入后台的时间戳 */
    public hideTime = 0;
    /** 进入前台的时间戳 */
    public showTime = 0;
    /** 分享成功回调的等待时间 */
    private sucTime: number = 3000;
    private shareSucFun: Function;
    private shareFailFun: Function;
    private thisObj: any;

    /** 初始化小游戏 */
    public initMiniGame() {
        this.launchOption = wx.getLaunchOptionsSync();
        console.log("launchOption >> ", this.launchOption);
        this.systemInfo = wx.getSystemInfoSync();
        console.log("systemInfo >> ", this.systemInfo);
        wx.setKeepScreenOn({ keepScreenOn: true });
        wx.updateShareMenu({ withShareTicket: true });
        wx.showShareMenu({ withShareTicket: true });
        this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
        wx.onShareAppMessage(() => {
            return this.defaultMssage;
        });
        this.getUpdateManager();
        Laya.timer.once(10000, this, () => {
            console.log("加速回收---");
            wx.triggerGC();
        });
    }

    public onShow(callBack: Function) {
        wx.onShow((res) => {
            callBack && callBack(res);
            this.showTime = new Date().getTime();
            if (this.showTime - this.hideTime >= this.sucTime) {
                this.shareSucFun && this.shareSucFun.call(this.thisObj);
            } else {
                this.shareFailFun && this.shareFailFun.call(this.thisObj);
            }
            this.shareSucFun = null;
            this.shareFailFun = null;
            this.thisObj = null;
            EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
        });
    }

    public onHide(callBack: Function) {
        wx.onHide(() => {
            callBack && callBack();
            this.hideTime = new Date().getTime();
            EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        });
    }

    public onAudioInterruptionBegin(callBack: Function) {
        wx.onAudioInterruptionBegin(() => {
            callBack && callBack();
        });
    }

    public onAudioInterruptionEnd(callBack: Function) {
        wx.onAudioInterruptionEnd(() => {
            callBack && callBack();
        });
    }

    public loginGame() {
        return new Promise((resolve, reject) => {
            this.login().then((res) => {
                res = JSON.parse(res);
                GameData.getInstance().userInfo.openId = res.openid;
                GameData.getInstance().userInfo.sessionKey = res.session_key;
                this.initUserInfo();
                resolve();
            }).catch((err) => {
                reject();
            });
        });
    }

    /** 检查登录态是否过期 */
    public checkSession(): Promise<boolean> {
        return new Promise((resolve) => {
            wx.checkSession({
                success: (res) => {
                    console.log("session未过期", res);
                    resolve(false);
                },
                fail: (res) => {
                    console.log("session已过期，需要重新登录", res);
                    resolve(true);
                }
            });
        });
    }

    /** 登录 */
    public login(): Promise<any> {
        return new Promise((resolve, reject) => {
            wx.login({
                success: (res) => {
                    if (res.code) {
                        console.log("code：", res.code);
                        let urlappend = "appid=" + this.appid + "&secret=" + this.secret + "&js_code=" + res.code + "&grant_type=authorization_code";
                        wx.request({
                            url: this.url,
                            method: "POST",
                            data: {
                                msg_type: "1",
                                msg_data: {
                                    url_append: urlappend,
                                }
                            },
                            success: (res2) => {
                                console.log("getsisson 返回：", res2);
                                resolve(res2.data.msg_data);
                            },
                            fail: (res3) => {
                                console.warn("网络请求失败：", res3);
                                reject();
                            }
                        });
                    } else {
                        console.warn("登录失败：", res);
                        reject();
                    }
                },
                fail: (err) => {
                    console.log("login调用失败", err);
                    reject();
                }
            });
        });
    }

    /**
     * 查询是否授权过
     * scope.userInfo 用户信息，
     * scope.userLocation 地理位置，
     * scope.werun 微信运动步数，
     * scope.writePhotosAlbum 保存到相册
     * @param scope 需要查询权限的 scope
     */
    public queryAuthorization(scope: string): Promise<boolean> {
        return new Promise((resolve) => {
            wx.getSetting({
                success: (res) => {
                    if (res.authSetting[scope]) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                fail: (res) => {
                    resolve(false);
                }
            });
        });
    }

    /** 获取用户信息 */
    public getUserInfo(): Promise<WXUserInfo> {
        return new Promise((resolve) => {
            wx.getUserInfo({
                withCredentials: false,
                lang: 'zh_CN',
                success: (res) => {
                    console.log("获取用户信息成功！", res);
                    resolve(res.userInfo);
                },
                fail: (res) => {
                    console.log("用户未授权", res);
                    resolve(null);
                }
            });
        });
    }

    /** 创建用户信息授权按钮 */
    public createUserInfoButton(): Promise<WXUserInfo> {
        return new Promise((resolve, reject) => {
            console.log("创建用户信息授权按钮");
            let button = wx.createUserInfoButton({
                type: "text",
                text: "",
                style: {
                    left: -300,
                    top: 0,
                    width: 2000,
                    height: 4000,
                    backgroundColor: "#00000000",
                    borderColor: "#00000000",
                    borderWidth: 1,
                    borderRadius: 1,
                    color: "#00000000",
                    textAlign: 'center',
                    fontSize: 16,
                    lineHeight: 40
                },
                withCredentials: false,
                lang: 'zh_CN'
            });
            button.onTap((res) => {
                console.log("用户授权成功！", res);
                button.destroy();
                resolve(res.userInfo);
            });
        });
    }

    /** 初始玩家信息 拉取授权等 */
    public async initUserInfo() {
        let info = await this.getUserInfo();
        if (!info) info = await this.createUserInfoButton();
        console.log("获取用户的基本信息:", info);
        GameData.getInstance().userInfo.nick = info.nickName;
        GameData.getInstance().userInfo.avatarUrl = info.avatarUrl;
        GameData.getInstance().userInfo.sex = info.gender;
        this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
        this.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
        // InviteManager.getInstance().judgeInvite();
        wx.onShareAppMessage(() => {
            return this.defaultMssage;
        });
    }

    /** 获取全局唯一的版本更新管理器，用于管理小程序更新 */
    private getUpdateManager() {
        let updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate((res) => {
            console.log("是否有新版本:", res);
        });
        updateManager.onUpdateReady(() => {
            wx.showModal({
                title: "更新提示",
                showCancel: false,
                content: "新版本已经准备好，是否重启应用？",
                success: (res) => {
                    res.confirm && updateManager.applyUpdate();
                }
            });
        });
        updateManager.onUpdateFailed((err) => {
            console.warn("新版本更新失败:", err);
        });
    }

    /**************************************** 分享 ****************************************/

    private defaultMssage = {
        "title": "魔性火柴人在线涂鸦！",
        "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/wx_res/share1.jpg",
        "query": ""
    }

    public shareInfo = [
        {
            "title": "魔性火柴人在线涂鸦！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/wx_res/share1.jpg",
            "query": ""
        }
    ]

    /** 得到分享配置 */
    private getShareInfo(query: Object): any {
        let shareInfo = this.shareInfo;
        let info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
        if (query) {
            let openId: string = GameData.getInstance().userInfo.openId;
            query["openid"] = openId;
        }
        info.imageUrl = info.imageUrl + "?v=" + new Date().getTime();
        info.query = Utils.querStr(query);
        return info;
    }

    /**
     * 分享处理
     * @param data 
     */
    public shareAppMessage(data?: { message?: any, thisObj?: any, sucFun?: Function, failFun?: Function, time?: number }) {
        if (!data) data = {};
        this.shareSucFun = data.sucFun;
        this.shareFailFun = () => {
            TipsManager.getInstance().showDefaultTips("分享失败，请分享到群里");
            data.failFun && data.failFun();;
        }
        this.thisObj = data.thisObj;
        this.sucTime = data.time || this.sucTime;
        if (!data.message) {
            data.message = this.getShareInfo({});
        }
        wx.shareAppMessage(data.message);
    }

    /**************************************** 广告 ****************************************/

    private videoAd: WXRewardedVideoAd;
    /** 播放视频广告 **/
    public playViderAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean, sceneKey?: string }) {
        if (!this.infos.videoOpen) {
            data.errorFun && data.errorFun();
            return;
        }
        let videoId = this.infos.videoId;
        if (data.isLongVideo) {
            videoId = this.infos.longVideoId;
        }
        if (videoId.length <= 0) {
            TipsManager.getInstance().showDefaultTips("开发中");
            data.errorFun && data.errorFun();
            return;
        }
        wx.showLoading({ title: "广告加载中", mask: true });
        let createCall = () => {
            let adId = videoId[Math.floor(Math.random() * videoId.length)];
            this.videoAd = wx.createRewardedVideoAd({
                adUnitId: adId
            });
            this.videoAd.onError(errorCall);
            this.videoAd.onLoad(loadCall);
            this.videoAd.onClose(closeCall);
        }
        let loadCall = (res) => {
            console.log("激励视频广告 加载成功", res);
            this.videoAd.offError(errorCall);
            this.videoAd.offLoad(loadCall);
            showCall(false);
        }
        let closeCall = (res) => {
            console.log("激励视频广告 关闭", res);
            if (res && res.isEnded) {//正常关闭
                data.successFun && data.successFun();
            } else {
                data.failFun && data.failFun();
            }
            this.videoAd.offClose(closeCall);
            this.videoAd.offError(errorCall);
            this.videoAd.offLoad(loadCall);
            // wx.hideLoading({});
        };
        let errorCall = (err) => {
            console.warn("激励视频广告 错误", err);
            data.errorFun && data.errorFun(err);
            this.videoAd.offClose(closeCall);
            this.videoAd.offError(errorCall);
            this.videoAd.offLoad(loadCall);
            this.videoAd.destroy && this.videoAd.destroy();
            this.videoAd = null;
            wx.hideLoading({});
        };
        let showCall = (reload: boolean) => {
            let fun = () => {
                this.videoAd.show().then(() => {
                    console.log("激励视频广告 显示成功");
                    wx.hideLoading({});
                }).catch(err => {
                    errorCall(err);
                });
            }
            if (reload) {
                this.videoAd.load().then(() => {
                    console.log("激励视频广告 加载成功");
                    fun();
                }).catch(err => {
                    errorCall(err);
                });
            } else {
                fun();
            }
        }
        if (!this.videoAd) {
            createCall();
        } else {
            this.videoAd.onClose(closeCall);
            showCall(true);
        }
    }

    private bannerAd: WXBannerAd;
    public canShowBanner = true;
    /** 显示banner */
    public showBannerAd(offset: { w: number, h: number, callback?: Function }) {
        let bannerId = this.infos.bannerId;
        if (!this.infos.bannerOpen || bannerId.length <= 0) return;
        this.canShowBanner = true;
        if (!this.bannerAd) {
            let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            console.log("创建 banner 广告组件-->", adId);
            let phone = this.systemInfo;
            let w = phone.windowWidth;
            let h = phone.windowHeight;
            this.bannerAd = wx.createBannerAd({
                adUnitId: adId,
                adIntervals: 30,
                style: { top: 0, left: 0, width: 300, height: 50 }
            });
            this.bannerAd.onResize((res) => {
                this.bannerAd.style.left = (w - res.width) / 2;
                this.bannerAd.style.top = h - res.height;
                console.log("banner 广告 onResize ", res, this.bannerAd);
            });

            this.bannerAd.onError((err) => {
                console.warn("banner 广告 onError ", err);
            });
            this.bannerAd.hide();
        }
        this.bannerAd.show();
        if (!this.canShowBanner) {
            this.bannerAd.hide();
        }
        if (offset) {
            // this.bannerAd.style.left = (offset.w - this.bannerAd.style.realWidth) / 2;
            // this.bannerAd.style.top = offset.h - this.bannerAd.style.realHeight;
            offset.callback && offset.callback();
        }
    }

    /** 隐藏banner */
    public hideBanner() {
        this.bannerAd && this.bannerAd.hide();
        this.canShowBanner = false;
    }

    /** 销毁banner */
    public destoryBanner() {
        this.bannerAd && this.bannerAd.destroy();
        this.bannerAd = null;
        this.canShowBanner = false;
    }

    private insertAd: WXInterstitialAd;
    /** 显示插屏广告 */
    public showInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        let intersId = this.infos.intersId;
        if (!this.infos.intersOpen || intersId.length <= 0) {
            data.closeFun && data.closeFun();
            return;
        }
        let adId = intersId[Math.floor(Math.random() * intersId.length)];
        console.log("创建插屏广告组件-->", adId);
        this.insertAd = wx.createInterstitialAd({
            adUnitId: adId
        });
        let closeCall = (res) => {
            console.log("插屏广告关闭", res);
            data.closeFun && data.closeFun();
            this.insertAd.offError(errorCall);
            this.insertAd.offClose(closeCall);
            this.insertAd.destroy && this.insertAd.destroy();
        }
        let errorCall = (err) => {
            console.log("插屏广告错误", err);
            data.errorFun && data.errorFun();
            this.insertAd.offError(errorCall);
            this.insertAd.offClose(closeCall);
            this.insertAd.destroy && this.insertAd.destroy();
        };
        this.insertAd.onError(errorCall);
        this.insertAd.onClose(closeCall);
        this.insertAd.load().then(() => {
            console.log("插屏广告 加载成功");
            this.insertAd.show().then(() => {
                console.log("插屏广告 显示成功");
                data.successFun && data.successFun();
            }).catch(err => {
                console.warn("插屏广告 显示失败", err);
                errorCall(err);
            });
        }).catch((err) => {
            console.warn("插屏广告 加载失败", err);
            errorCall(err);
        });
    }

    private gridAd: WXGridAd;
    /** 显示格子广告 */
    public showGridAd() {
        if (this.compareVersion(this.systemInfo.SDKVersion, "2.9.2") >= 0) {
            let gridId = this.infos.gridId;
            if (gridId.length <= 0) return;
            let adId = gridId[Math.floor(Math.random() * gridId.length)];
            console.log("创建格子广告组件-->", adId);
            this.gridAd = wx.createGridAd({
                adUnitId: adId,
                adTheme: "black",
                gridCount: 5,
                style: { left: 0, top: 0, width: 100, height: 100 }
            });
            this.gridAd.onError((err) => {
                console.log("格子广告错误", err);
            });
            this.gridAd.onResize((res) => {
                // this.bannerAd.style.left = (w - res.width) / 2;
                // this.bannerAd.style.top = h - res.height;
                console.log("格子广告onResize ", res, this.gridAd);
            });
            this.gridAd.show().then(() => {
                console.log("格子广告 显示成功");
            }).catch(err => {
                console.warn("格子广告 显示失败", err);
            });
        } else {
            wx.showModal({
                title: "提示",
                content: "当前微信版本过低，无法使用格子广告，请升级到最新微信版本后重试。"
            });
        }
    }

    /** 隐藏格子广告 */
    public hideGridAd() {
        if (this.gridAd) {
            this.gridAd.hide();
            // this.gridAd.destroy();
        }
    }

    /**************************************** 其他 ****************************************/

    /** 短震动 */
    public vibrateShort(data: { complete?: Function }) {
        if (!GameData.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isWXMiniGame()) {
            wx.vibrateShort(data);
        }
    }

    /** 长震动 */
    public vibrateLong() {
        if (!GameData.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isWXMiniGame()) {
            wx.vibrateLong({});
        }
    }

    // /**
    //  * 适配添加到我的小程序
    //  * @param collec_img 
    //  * @param stage 
    //  */
    // public adaptImgToClientRect(collec_img: Laya.Image, stage: Laya.Stage) {
    //     if (lib.util.DeviceUtil.isWXMiniGame()) {
    //         let systemInfo = platform.getSystemInfoSync();
    //         let screenHeight = systemInfo['screenHeight'];
    //         let screenWidth = systemInfo['screenWidth'];
    //         let rect = platform.getMenuButtonBoundingClientRect();
    //         // collec_img.anchorY = 0.5;
    //         collec_img.top = stage.height * (rect['top'] / screenHeight);
    //         collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
    //     }
    // }

    /**************************************** 开放域 ****************************************/

    /** 发送数据到开放域 */
    public sendDataToOpen(data: { cmd: string, data: any }) {
        Laya.MiniAdpter.window.wx.postMessage(data);
    }

    /**
     * 
     * @param data 
     */
    public removeOpenData(data: { parent: Laya.Sprite }) {
        let wxOpenData: Laya.WXOpenDataViewer = <Laya.WXOpenDataViewer>data.parent.getChildByName("wxOpenData");
        this.sendDataToOpen({ cmd: 'close', data: null });
        if (wxOpenData) {
            wxOpenData.removeSelf();
            wxOpenData.destroy();
            wxOpenData = null;
        }
    }
    /**
     * 增加到微信开放域
     * @param data 
     */
    public addOpenData(data: { parent: Laya.Sprite, x?: number, y?: number, width: number, height: number, left?: number, right?: number, top?: number, bottom?: number, isCenter?: boolean }) {
        let shareData = this.getShareInfo({ id: GameData.getInstance().userInfo.openId })
        this.sendDataToOpen({ cmd: "share", data: JSON.stringify(shareData) });
        let wxOpenData: Laya.WXOpenDataViewer = data.parent.getChildByName('wxOpenData') as Laya.WXOpenDataViewer;
        if (wxOpenData) {
            wxOpenData.removeSelf();
            wxOpenData.destroy();
            wxOpenData = null;
        }
        wxOpenData = new Laya.WXOpenDataViewer();
        wxOpenData.name = 'wxOpenData';
        wxOpenData.x = data.x || 0;
        wxOpenData.y = data.y || 0;
        wxOpenData.width = data.width;
        wxOpenData.height = data.height;
        if (data.isCenter) {
            wxOpenData.centerX = 0;
            wxOpenData.centerY = 0;
        } else {
            if (data.left != null) {
                wxOpenData.left = data.left;
            }
            if (data.right != null) {
                wxOpenData.right = data.right;
            }
            if (data.top != null) {
                wxOpenData.top = data.top;
            }
            if (data.bottom != null) {
                wxOpenData.bottom = data.bottom;
            }
        }
        if (data.parent) {
            data.parent.addChild(wxOpenData);
        }
        return wxOpenData;
    }
}
const AdErrCode = {
    1000: "后端接口调用失败",
    1001: "参数错误",
    1002: "广告单元无效",
    1003: "内部错误",
    1004: "无合适的广告",
    1005: "广告组件审核中",
    1006: "广告组件被驳回",
    1007: "广告组件被封禁",
    1008: "广告单元已关闭"
}