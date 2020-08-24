import { MiniManeger } from "./MiniManeger";
import { GameData } from "../common/GameData";
import GameEvent from "../common/GameEvent";
import GameConst from "../common/GameConst";
// import { DouyinBanner } from "../view/platform/tt/DouyinBanner";

/**
 * 头条小游戏管理器
 */
export class TTGameMgr extends MiniManeger {
    public constructor() {
        super();
        this.initGameRecordListener();
    }

    private appid: string = "ttab04ddb9343eae0c";
    private secret: string = "96041680ac7134161d59d18faec128ce44f4cbfb";
    private url: string = "https://yxtest.32yx.com/MiniGame.fcgi";

    public launchOption: TTLaunchOptions;
    public systemInfo: TTSystemInfo;
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
        this.launchOption = tt.getLaunchOptionsSync();
        console.log("launchOption >> ", this.launchOption);
        this.systemInfo = tt.getSystemInfoSync();
        console.log("systemInfo >> ", this.systemInfo);
        tt.setKeepScreenOn({ keepScreenOn: true });
        tt.showShareMenu({ withShareTicket: true });
        tt.onShareAppMessage(() => {
            return this.defaultMssage;
        });
        this.getUpdateManager();
        this.initMoreGameAppInfos();
        Laya.timer.once(10000, this, () => {
            console.log("加速回收---");
            tt.triggerGC();
        });
    }

    public onShow(callBack: Function) {
        tt.onShow((res) => {
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
        tt.onHide(() => {
            callBack && callBack();
            this.hideTime = new Date().getTime();
            EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        });
    }

    public loginGame() {
        return new Promise((resolve, reject) => {
            this.login().then(async (res) => {
                res = JSON.parse(res);
                GameData.getInstance().userInfo.openId = res.openid;
                GameData.getInstance().userInfo.sessionKey = res.session_key;
                await this.initUserInfo();
                resolve();
            }).catch((err) => {
                // reject();
                resolve();
            });
        });
    }

    // public loginGame() {
    //     return new Promise(async (resolve, reject) => {
    //         let checkSession = await this.checkSession();
    //         if (checkSession) {
    //             this.login().then(async (res) => {
    //                 res = JSON.parse(res);
    //                 GameData.getInstance().userInfo.openId = res.openid;
    //                 GameData.getInstance().userInfo.sessionKey = res.session_key;
    //                 await this.initUserInfo();
    //                 resolve();
    //             }).catch((err) => {
    //                 resolve();
    //                 // reject();
    //             });
    //         } else {
    //             await this.initUserInfo();
    //             resolve();
    //         }
    //     });
    // }

    /** 检查登录态是否过期 */
    public checkSession(): Promise<boolean> {
        return new Promise((resolve) => {
            tt.checkSession({
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
            tt.login({
                force: false,
                success: (res) => {
                    if (res.code) {
                        console.log("code：", res.code);
                        let urlappend = "appid=" + this.appid + "&secret=" + this.secret + "&code=" + res.code + "&anonymous_code=" + res.anonymousCode;
                        tt.request({
                            url: this.url,
                            method: "POST",
                            data: {
                                msg_type: "5",
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
                        // TipsManager.getInstance().showDefaultTips("登录失败");
                        reject();
                    }
                },
                fail: (err) => {
                    console.warn("login调用失败", err);
                    reject();
                }
            });
        });
    }

    /**
     * 查询是否授权过
     * scope.userInfo 用户信息，
     * scope.userLocation 地理位置，
     * scope.album 保存到相册，
     * scope.camera 摄像头
     * @param scope 需要查询权限的 scope
     */
    public queryAuthorization(scope: string): Promise<boolean> {
        return new Promise((resolve) => {
            tt.getSetting({
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
    public getUserInfo(): Promise<TTUserInfo> {
        return new Promise((resolve) => {
            tt.getUserInfo({
                withCredentials: false,
                success: (res) => {
                    console.log("获取用户信息成功！", res);
                    resolve(res.userInfo);
                },
                fail: (res) => {
                    console.warn("用户未授权", res);
                    resolve(null);
                }
            });
        });
    }

    /** 初始玩家信息 拉取授权等 */
    public async initUserInfo() {
        let info = await this.getUserInfo();
        console.log("获取用户的基本信息:", info);
        if (info) {
            GameData.getInstance().userInfo.nick = info.nickName;
            GameData.getInstance().userInfo.avatarUrl = info.avatarUrl;
            GameData.getInstance().userInfo.sex = info.gender;
            this.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
            tt.onShareAppMessage(() => {
                return this.defaultMssage;
            });
        }
    }

    /** 获取全局唯一的版本更新管理器，用于管理小程序更新 */
    private getUpdateManager() {
        let updateManager = tt.getUpdateManager();
        updateManager.onCheckForUpdate((res) => {
            console.log("是否有新版本:", res);
        });
        updateManager.onUpdateReady(() => {
            tt.showModal({
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
        "title": "我被卡在了第一关，快来帮帮我",
        "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/wx_res/share1.jpg",
        "query": ""
    }

    public shareInfo = [
        {
            "title": "我被卡在了第一关，快来帮帮我",
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
        tt.shareAppMessage(data.message);
    }

    /**************************************** 广告 ****************************************/

    private videoAd: TTRewardedVideoAd;
    /** 播放视频广告 **/
    public playViderAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean }) {
        let videoId = this.infos.videoId;
        if (data.isLongVideo) {
            videoId = this.infos.longVideoId;
        }
        if (videoId.length <= 0) {
            TipsManager.getInstance().showDefaultTips("开发中");
            data.errorFun && data.errorFun();
            return;
        }
        tt.showLoading({ title: "广告加载中" });

        if (!this.videoAd) {
            let adId = videoId[Math.floor(Math.random() * videoId.length)];
            this.videoAd = tt.createRewardedVideoAd({
                adUnitId: adId
            });
            this.videoAd.onLoad((res) => {
                console.log("激励视频广告 加载成功", res);
            });
        }
        let closeCall = (res) => {
            console.log("激励视频广告 关闭", res);
            if (res.isEnded) {//正常关闭
                data.successFun && data.successFun();
            } else {
                data.failFun && data.failFun();
            }
            this.videoAd.offClose(closeCall);
            this.videoAd.offError(errorCall);
            tt.hideLoading({});
        };
        let errorCall = (err) => {
            console.warn("激励视频广告 错误", err);
            data.errorFun && data.errorFun(err);
            this.videoAd.offClose(closeCall);
            this.videoAd.offError(errorCall);
            tt.hideLoading({});
        };

        this.videoAd.onClose(closeCall);
        this.videoAd.onError(errorCall);

        this.videoAd.load().then(() => {
            console.log("激励视频广告 加载成功");
            this.videoAd.show().then(() => {
                console.log("激励视频广告 显示成功");
                tt.hideLoading({});
            }).catch(err => {
                console.warn("激励视频广告 显示失败", err);
                errorCall(err);
            });
        }).catch(err => {
            console.warn("激励视频广告 加载失败", err);
            errorCall(err);
        });
    }

    private bannerAd: TTBannerAd;
    private clearBannerFun: Function;
    public canShowBanner = true;
    /** 显示banner */
    public showBannerAd(offset: { w: number, h: number, callback?: Function }) {
        if (!this.infos.bannerOpen) return;
        if (this.getAppName() == "Douyin") {
            // this.showDouyinBanner(offset);
            return;
        }
        this.canShowBanner = true;
        let bannerId = this.infos.bannerId;
        if (bannerId.length <= 0) return;
        let errorFun = (err) => {
            console.warn("banner 广告 onError ", err);
        }
        let createFun = () => {
            let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            console.log("创建 banner 广告组件-->", adId);
            let phone = this.systemInfo;
            let w = phone.windowWidth;
            let h = phone.windowHeight;
            this.clearBannerFun && this.clearBannerFun();
            this.clearBannerFun = null;
            let bannerAd = tt.createBannerAd({
                adUnitId: adId,
                adIntervals: 60,
                style: { top: 0, left: 0, width: 200 }
            });
            let resizeFun = (res) => {
                bannerAd.style.left = (w - res.width) / 2;
                bannerAd.style.top = h - res.height;
                console.log("banner 广告 onResize ", res, bannerAd);
            }
            let loadFun = (res) => {
                console.log("banner 广告 onLoad 成功", res);
                this.bannerAd = bannerAd;
                this.bannerAd.offLoad(loadFun);
                this.bannerAd.offError(errorFun);
                showFun();
            }
            bannerAd.onError(errorFun);
            bannerAd.onLoad(loadFun);
            bannerAd.onResize(resizeFun);
            this.clearBannerFun = () => {
                if (this.bannerAd) {
                    this.bannerAd.offLoad(loadFun);
                    this.bannerAd.offResize(resizeFun);
                    this.bannerAd.offError(resizeFun);
                }
            }
        }
        let showFun = () => {
            if (this.canShowBanner) {
                this.bannerAd.show().then(() => {
                    console.log("banner广告展示完成");
                    if (offset) {
                        offset.callback && offset.callback();
                    }
                }).catch(err => {
                    errorFun(err);
                });
            } else {
                this.bannerAd.hide();
            }
        }
        if (!this.bannerAd) {
            createFun();
        } else {
            showFun();
        }
    }

    // /** 抖音banner */
    // private douyinBanner: DouyinBanner;
    // private showDouyinBanner(offset: { w: number, h: number, callback?: Function }) {
    //     this.canShowBanner = true;
    //     if (this.moreGameAppInfos && this.moreGameAppInfos.length > 0) {
    //         this.douyinBanner = <DouyinBanner>Laya.stage.getChildByName("DouyinBanner");
    //         if (!this.douyinBanner) {
    //             this.douyinBanner = new DouyinBanner();
    //             this.douyinBanner.name = "DouyinBanner";
    //         } else {
    //             this.douyinBanner.removeSelf();
    //         }
    //         this.douyinBanner.bottom = 30;
    //         let phone = this.systemInfo;
    //         if (offset) {
    //             // let wids = offset.w / phone.screenWidth * Laya.stage.width;
    //             // this.douyinBanner.x = wids - this.douyinBanner.width / 2;
    //         } else {
    //             this.douyinBanner.x = Laya.stage.width - this.douyinBanner.width / 2;
    //         }
    //         Laya.stage.addChild(this.douyinBanner);
    //     }
    // }

    /** 隐藏banner */
    public hideBanner() {
        this.bannerAd && this.bannerAd.hide();
        this.canShowBanner = false;
        // this.douyinBanner && this.douyinBanner.removeSelf();
    }

    /** 销毁banner */
    public destoryBanner() {
        this.bannerAd && this.bannerAd.destroy();
        // this.douyinBanner && this.douyinBanner.removeSelf();
        this.clearBannerFun && this.clearBannerFun();
        this.clearBannerFun = null;
    }

    private insertAd: TTInterstitialAd;
    /** 显示插屏广告 */
    public showInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        // IOS和横屏暂不支持
        if (DeviceUtil.isIOS() || window["screenOrientation"].indexOf("landscape") > -1) {
            data.closeFun && data.closeFun();
            return;
        }
        if (this.getAppName() == "Toutiao" && this.infos.intersOpen) {
            let intersId = this.infos.intersId;
            if (intersId.length <= 0) return;

            let adId = intersId[Math.floor(Math.random() * intersId.length)];
            console.log("创建插屏广告组件-->", adId);
            this.insertAd = tt.createInterstitialAd({
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
        } else {
            data.closeFun && data.closeFun();
        }
    }

    /**************************************** 录屏 ****************************************/

    private gameRecorder: TTGameRecorderManager;
    /** 最大录制时间 default 120s */
    public maxMakeVideoTime: number = 120;
    /** 录屏起始时间 */
    private startTime = 0;
    /** 计时值 */
    private indexTime: number;
    /** 是否录制中 */
    private isRecording: boolean;
    /** 临时的录制的视频地址 */
    private tempVideoPath: string;
    /** 录屏结束回调 */
    private recordStopFun: Function;

    /** 设置头条视频录制监听 */
    private initGameRecordListener() {
        if (!this.gameRecorder) this.gameRecorder = tt.getGameRecorderManager();
        this.gameRecorder.onStart(res => {
            console.log("录屏开始:", res);
            this.startTime = (new Date()).getTime();
        });
        this.gameRecorder.onStop(res => {
            console.log("录屏结束:", res);
            this.recordStopFun && this.recordStopFun();
            this.recordStopFun = null;
            let now = (new Date()).getTime();
            if (now - this.startTime <= 3000) {
                this.tempVideoPath = null;
                tt.showModal({
                    title: "系统提示", content: "需要录制3秒以上哟", showCancel: false, cancelText: "", confirmText: "确定",
                    success: () => {

                    }
                });
                return;
            }
            this.tempVideoPath = res.videoPath;
        });
        this.gameRecorder.onError((err) => {
            console.log("录屏错误:", err);
        });
        this.gameRecorder.onPause((res) => {
            console.log("录屏已暂停:", res);
        });
        this.gameRecorder.onResume((res) => {
            console.log("录屏已恢复:", res);
        });
        this.gameRecorder.onInterruptionBegin(() => {
            this.gameRecorder.pause();
        });
        this.gameRecorder.onInterruptionEnd(() => {
            this.gameRecorder.resume();
        });
    }

    /** 开始录制 */
    public startGameRecord(data: { startFun?: Function, stopFun?: Function }) {
        if (!DeviceUtil.isTTMiniGame() || this.isRecording) return;
        if (!this.gameRecorder) this.initGameRecordListener();
        this.tempVideoPath = null;
        this.recordStopFun = data.stopFun;
        this.isRecording = true;
        this.indexTime = 0;
        this.gameRecorder.start({ duration: this.maxMakeVideoTime });
        Laya.timer.loop(1000, this, this.loopTime);
    }

    private loopTime() {
        this.indexTime++;
        if (this.indexTime >= this.maxMakeVideoTime) {
            console.log("录制结束");
            this.stopGameRecord();
        }
    }

    /** 停止录制 */
    public stopGameRecord(force: boolean = false) {
        console.log("stopGameRecord  录制时长：", this.indexTime);
        if (this.isRecording) {
            if (force) {
                Laya.timer.clear(this, this.loopTime);
                this.isRecording = false;
                this.gameRecorder.stop();
                return;
            }
            if (this.indexTime <= 3) {
                TipsManager.getInstance().showDefaultTips("录制视频时间不能小于3秒哦!");
                this.tempVideoPath = null;
                return;
            }
            Laya.timer.clear(this, this.loopTime);
            this.isRecording = false;
            this.gameRecorder.stop();
        }
    }

    /** 分享录屏 */
    public shareGameVideo(data?: { successFun?: Function, failFun?: Function, errorFun?: Function }) {
        if (!DeviceUtil.isTTMiniGame()) return;
        if (!this.tempVideoPath || this.tempVideoPath.length == 0) {
            data.failFun && data.failFun();
            TipsManager.getInstance().showDefaultTips("暂未录制视频哦!");
            return;
        }
        if (!data) data = {};
        console.log("分享游戏视频--");
        tt.shareAppMessage({
            channel: "video",
            title: "火柴人之奇葩画",
            desc: "火柴人之奇葩画",
            imageUrl: "",
            templateId: "",
            query: "openId=" + GameData.getInstance().userInfo.openId + "&nick=" + GameData.getInstance().userInfo.nick,
            extra: {
                videoPath: this.tempVideoPath
            },
            success: () => {
                console.log("分享视频成功");
                data.successFun && data.successFun();
            },
            fail: (err) => {
                console.log("分享视频失败", err);
                data.failFun && data.failFun();
                TipsManager.getInstance().showDefaultTips("视频分享失败！");
            }
        });
        // tt.shareVideo({
        //     title: "火柴人之奇葩画",
        //     videoPath: this.tempVideoPath,
        //     query: "openId=" + GameData.getInstance().userInfo.openId + "&nick=" + GameData.getInstance().userInfo.nick,
        //     success: () => {
        //         console.log("分享视频成功");
        //         data.successFun && data.successFun();
        //     },
        //     fail: (err) => {
        //         console.log("分享视频失败", err);
        //         data.failFun && data.failFun();
        //         TipsManager.getInstance().showDefaultTips("视频分享失败！");
        //     }
        // });
    }

    /**************************************** 其他 ****************************************/

    /** 短震动 */
    public vibrateShort(data: { complete?: Function }) {
        if (!GameData.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isTTMiniGame()) {
            tt.vibrateShort(data);
        }
    }

    /** 长震动 */
    public vibrateLong() {
        if (!GameData.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isTTMiniGame()) {
            tt.vibrateLong({});
        }
    }

    private initMoreGameAppInfos() {
        this.moreGameAppInfos = [];
        let res = [
            { "appid": "tt5c622adfc34851be", "title": "杠精大乱斗", "icon": "https://hs.yz061.com/res/down/public/icon/cd/pole_jump.png" },
            { "appid": "tt4e7138ccd15b7caa", "title": "巴掌王3D", "icon": "https://hs.yz061.com/res/down/public/icon/cd/slap_king.png" },
            { "appid": "tt7e0808b5e1224cd6", "title": "穿越空间", "icon": "https://hs.yz061.com/res/down/public/icon/cd/cykj.png" },
            { "appid": "tt9c09eab4032391c1", "title": "消消来了", "icon": "https://hs.yz061.com/res/down/public/icon/cd/xxll.jpg" },
            { "appid": "tt18956e2887bf2f24", "title": "篮球大作战", "icon": "https://hs.yz061.com/res/down/public/icon/cd/kltl.jpg" },
            { "appid": "ttfdfc8b4162d6c8ab", "title": "萌兵战争", "icon": "https://hs.yz061.com/res/down/public/icon/cd/mbzz.jpg" },
            { "appid": "tte3a3951e7c899dfd", "title": "疯狂跳床", "icon": "https://hs.yz061.com/res/down/public/icon/cd/jump.png" },
            { "appid": "tt546f22d2cb457cd0", "title": "超级购物狂", "icon": "https://hs.yz061.com/res/down/public/icon/cd/crazy_shopping.jpg" },
            { "appid": "tt8c7bfac613516af9", "title": "快来划水", "icon": "https://hs.yz061.com/res/down/public/icon/cd/klhs.jpg" },
            { "appid": "ttce8db83051a7f459", "title": "春节小火车", "icon": "https://hs.yz061.com/res/down/public/icon/cd/train.jpg" },
        ]
        for (let i = 0, len = res.length; i < len; i++) {
            if (res[i].appid != this.appid) {
                this.moreGameAppInfos.push(res[i]);
            }
        }
    }

    /** 显示更多游戏，需要提前设置 moreSomeAppInfos */
    public showMoreGamesModal(data?: { sucFun?: Function, closeFun?: Function }) {
        if (!data) data = {};
        let appLaunchOptions = [];
        for (let i = 0, len = this.moreGameAppInfos.length; i < len; i++) {
            appLaunchOptions.push({
                appId: this.moreGameAppInfos[i].appid,
                query: "",
                extraData: {}
            });
        }
        let onMoreGamesModalClose = () => {
            this.moreGamesIsShow = false;
            data.closeFun && data.closeFun();
            tt.offNavigateToMiniProgram();
            tt.offMoreGamesModalClose();
        }
        let onNavigateToMiniProgram = (res) => {
            console.log("跳转", res);
        }
        tt.onMoreGamesModalClose(onMoreGamesModalClose);
        tt.onNavigateToMiniProgram(onNavigateToMiniProgram);
        tt.showMoreGamesModal({
            appLaunchOptions: appLaunchOptions,
            success: (res) => {
                console.log("success", res);
                this.moreGamesIsShow = true;
                data.sucFun && data.sucFun();
            },
            fail: (res) => {
                console.log("fail", res.errMsg);
            }
        });
    }

    public showMoreGame(data: { parent: Laya.Sprite, moreGame: any }) {
        // return new Promise((resolve) => {
        //     if (!DeviceUtil.isTTMiniGame()) {
        //         resolve(null)
        //         return;
        //     } else {
        //         if (MiniManeger.instance.appName() == "XiGua" && GameData.getInstance().isConVersion) {//西瓜视频暂时没有更多游戏--只是再提审的时候禁用
        //         } else {
        //             //爆款
        //             data.moreGame = new TTBaoTypeGame("home/tt/TTBaoTypeGame.json", MiniManeger.instance.moreSomeAppInfos);
        //             data.parent.addChild(data.moreGame);
        //             data.moreGame.x = data.moreGame.width / 2 + 30;
        //             data.moreGame.y = Laya.stage.height - (DeviceUtil.getIsIphoneX() ? 400 : 300) - data.moreGame.height / 2 - 25;
        //             // tthotType = tthotType;
        //         }
        //     }
        //     resolve(data.moreGame)
        // })
    }

    /**
     * 获取app平台
     * Toutiao 今日头条
     * Douyin 抖音
     * XiGua 西瓜视频
     * news_article_lite 头条极速版
     * devtools 开发者工具
     */
    private getAppName(): "Toutiao" | "Douyin" | "XiGua" | "news_article_lite" | "devtools" {
        if (!this.systemInfo) this.systemInfo = tt.getSystemInfoSync();
        return (this.systemInfo.appName as ("Toutiao" | "Douyin" | "XiGua" | "news_article_lite" | "devtools"));
    }
}