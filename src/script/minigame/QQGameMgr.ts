import { MiniManeger } from "./MiniManeger";
import { GameData } from "../common/GameData";
import GameEvent from "../common/GameEvent";
import GameConst from "../common/GameConst";
import InviteManager from "../manager/InviteManager";

/**
 * QQ小游戏管理
 */
export class QQGameMgr extends MiniManeger {
    public constructor() {
        super();
    }

    private appid: string = "1110516131";
    private secret: string = "2mpUZPZkxWa6AwuP";
    private token: string = "8c5d38c8b666d7d95e61bea8333b3eee";
    private url: string = "https://yxtest.32yx.com/QQMiniGame.fcgi";

    public launchOption: QQLaunchOptions;
    public systemInfo: QQSystemInfo;
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
        this.launchOption = qq.getLaunchOptionsSync();
        console.log("launchOption >> ", this.launchOption);
        this.systemInfo = qq.getSystemInfoSync();
        console.log("systemInfo >> ", this.systemInfo);
        qq.setKeepScreenOn({ keepScreenOn: true });
        qq.updateShareMenu({ withShareTicket: true });
        qq.showShareMenu({ withShareTicket: true });
        this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
        qq.onShareAppMessage(() => {
            return this.defaultMssage;
        });
        this.getUpdateManager();
    }

    public onShow(callBack: Function) {
        qq.onShow((res) => {
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
        qq.onHide(() => {
            callBack && callBack();
            this.hideTime = new Date().getTime();
            EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        });
    }

    public onAudioInterruptionBegin(callBack: Function) {
        qq.onAudioInterruptionBegin(() => {
            callBack && callBack();
        });
    }

    public onAudioInterruptionEnd(callBack: Function) {
        qq.onAudioInterruptionEnd(() => {
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
            qq.checkSession({
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
            qq.login({
                success: (res) => {
                    if (res.code) {
                        console.log("code：", res.code);
                        let urlappend = "appid=" + this.appid + "&secret=" + this.secret + "&js_code=" + res.code + "&grant_type=authorization_code";
                        qq.request({
                            url: this.url,
                            method: "POST",
                            data: {
                                msg_type: "10",
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
     * scope.qqrun QQ运动步数，
     * scope.writePhotosAlbum 保存到相册
     * @param scope 需要查询权限的 scope
     */
    public queryAuthorization(scope: string): Promise<boolean> {
        return new Promise((resolve) => {
            qq.getSetting({
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
    public getUserInfo(): Promise<QQUserInfo> {
        return new Promise((resolve) => {
            qq.getUserInfo({
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
    public createUserInfoButton(): Promise<QQUserInfo> {
        return new Promise((resolve, reject) => {
            console.log("创建用户信息授权按钮");
            let button = qq.createUserInfoButton({
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
        GameData.getInstance().userInfo.nick = info.nickName;
        GameData.getInstance().userInfo.avatarUrl = info.avatarUrl;
        GameData.getInstance().userInfo.sex = info.gender;
        this.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
        this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
        InviteManager.getInstance().judgeInvite();
        qq.onShareAppMessage(() => {
            return this.defaultMssage;
        });
    }

    /** 获取全局唯一的版本更新管理器，用于管理小程序更新 */
    private getUpdateManager() {
        let updateManager = qq.getUpdateManager();
        updateManager.onCheckForUpdate((res) => {
            console.log("是否有新版本:", res);
        });
        updateManager.onUpdateReady(() => {
            qq.showModal({
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
        "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/qq_res/share1.jpg",
        "query": ""
    }

    public shareInfo = [
        {
            "title": "魔性火柴人在线涂鸦！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/qq_res/share1.jpg",
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
        qq.shareAppMessage(data.message);
    }

    /**************************************** 广告 ****************************************/

    private videoAd: QQRewardedVideoAd;
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
        qq.showLoading({ title: "广告加载中", mask: true });

        if (!this.videoAd) {
            let adId = videoId[Math.floor(Math.random() * videoId.length)];
            this.videoAd = qq.createRewardedVideoAd({
                adUnitId: adId
            });
            this.videoAd.onLoad((res) => {
                console.log("激励视频广告 加载完成", res);
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
            qq.hideLoading({});
        };
        let errorCall = (err) => {
            console.warn("激励视频广告 错误", err);
            data.errorFun && data.errorFun(err);
            this.videoAd.offClose(closeCall);
            this.videoAd.offError(errorCall);
            qq.hideLoading({});
        };

        this.videoAd.onClose(closeCall);
        this.videoAd.onError(errorCall);

        this.videoAd.load().then(() => {
            console.log("激励视频广告 加载成功");
            this.videoAd.show().then(() => {
                console.log("激励视频广告 显示成功");
                qq.hideLoading({});
            }).catch(err => {
                console.warn("激励视频广告 显示失败", err);
                errorCall(err);
            });
        }).catch(err => {
            console.warn("激励视频广告 加载失败", err);
            errorCall(err);
        });
    }

    private bannerAd: QQBannerAd;
    private clearBannerFun: Function;
    public canShowBanner = true;
    /** 显示banner */
    public showBannerAd(offset: { w: number, h: number, callback?: Function }) {
        let bannerId = this.infos.bannerId;
        if (!this.infos.bannerOpen || bannerId.length <= 0) return;
        this.canShowBanner = true;
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
            let bannerAd = qq.createBannerAd({
                adUnitId: adId,
                style: { top: 0, left: 0, width: 300, height: 50 }
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

    /** 隐藏banner */
    public hideBanner() {
        console.log("隐藏banner");
        this.bannerAd && this.bannerAd.hide();
        this.canShowBanner = false;
    }

    /** 销毁banner */
    public destoryBanner() {
        this.clearBannerFun && this.clearBannerFun();
        this.clearBannerFun = null;
        this.bannerAd && this.bannerAd.destroy();
        this.bannerAd = null;
    }

    private insertAd: QQInterstitialAd;
    /** 显示插屏广告 */
    public showInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        if (this.compareVersion(this.systemInfo.SDKVersion, "1.12.0") >= 0) {
            let intersId = this.infos.intersId;
            if (!this.infos.intersOpen || intersId.length <= 0) {
                data.closeFun && data.closeFun();
                return;
            }
            let adId = intersId[Math.floor(Math.random() * intersId.length)];
            console.log("创建插屏广告组件-->", adId);
            let createCall = () => {
                this.insertAd = qq.createInterstitialAd({
                    adUnitId: adId
                });
                this.insertAd.onError(errorCall);
                this.insertAd.onLoad(loadCall);
            }
            let loadCall = (res) => {
                console.log("插屏广告 加载成功", res);
                this.insertAd.offError(errorCall);
                this.insertAd.offLoad(loadCall);
                showCall();
            }
            let showCall = () => {
                this.insertAd.show().then(() => {
                    console.log("插屏广告 显示成功");
                    data.successFun && data.successFun();
                }).catch(err => {
                    console.warn("插屏广告 显示失败", err);
                    errorCall(err);
                });
            }
            let closeCall = (res) => {
                console.log("插屏广告关闭", res);
                data.closeFun && data.closeFun();
                this.insertAd.offError(errorCall);
                this.insertAd.offClose(closeCall);
                // this.insertAd.destroy && this.insertAd.destroy();
            }
            let errorCall = (err) => {
                console.log("插屏广告错误", err);
                data.errorFun && data.errorFun();
                this.insertAd.offError(errorCall);
                this.insertAd.offClose(closeCall);
                this.insertAd.destroy && this.insertAd.destroy();
                this.insertAd = null;
            };
            if (!this.insertAd) {
                createCall();
            } else {
                showCall();
            }
            this.insertAd.onClose(closeCall);


            // this.insertAd = qq.createInterstitialAd({
            //     adUnitId: adId
            // });
            // let closeCall = (res) => {
            //     console.log("插屏广告关闭", res);
            //     data.closeFun && data.closeFun();
            //     this.insertAd.offError(errorCall);
            //     this.insertAd.offClose(closeCall);
            //     this.insertAd.destroy && this.insertAd.destroy();
            // }
            // let errorCall = (err) => {
            //     console.log("插屏广告错误", err);
            //     data.errorFun && data.errorFun();
            //     this.insertAd.offError(errorCall);
            //     this.insertAd.offClose(closeCall);
            //     this.insertAd.destroy && this.insertAd.destroy();
            // };
            // this.insertAd.onError(errorCall);
            // this.insertAd.onClose(closeCall);
            // this.insertAd.load().then(() => {
            //     console.log("插屏广告 加载成功");
            //     this.insertAd.show().then(() => {
            //         console.log("插屏广告 显示成功");
            //         data.successFun && data.successFun();
            //     }).catch(err => {
            //         console.warn("插屏广告 显示失败", err);
            //         errorCall(err);
            //     });
            // }).catch((err) => {
            //     console.warn("插屏广告 加载失败", err);
            //     errorCall(err);
            // });
        } else {
            qq.showModal({
                title: "提示",
                content: "当前QQ版本过低，无法使用插屏广告，请升级到最新QQ版本后重试。"
            });
        }
    }

    private appBoxAd: QQAppBox;
    /** 显示盒子广告 */
    public showAppBoxAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        if (this.compareVersion(this.systemInfo.SDKVersion, "1.7.1") >= 0) {
            let appBoxId = this.infos.appBoxId;
            if (!this.infos.appBoxOpen || appBoxId.length <= 0) {
                data.closeFun && data.closeFun();
                return;
            }
            let adId = appBoxId[Math.floor(Math.random() * appBoxId.length)];
            if (!this.appBoxAd) {
                console.log("创建盒子广告组件-->", adId);
                this.appBoxAd = qq.createAppBox({ adUnitId: adId });
            }
            let closeCall = (res) => {
                console.log("盒子广告关闭", res);
                data.closeFun && data.closeFun();
                this.appBoxAd.offClose(closeCall);
                // this.appBoxAd.destroy && this.appBoxAd.destroy();
            }
            let errorCall = (err) => {
                console.log("盒子广告错误", err);
                data.errorFun && data.errorFun();
                this.appBoxAd.offClose(closeCall);
                this.appBoxAd.destroy && this.appBoxAd.destroy();
                this.appBoxAd = null;
            };
            this.appBoxAd.onClose(closeCall);
            this.appBoxAd.load().then(() => {
                console.log("盒子广告 加载成功");
                this.appBoxAd.show().then(() => {
                    console.log("盒子广告 显示成功");
                    data.successFun && data.successFun();
                }).catch(err => {
                    console.warn("盒子广告 显示失败", err);
                    errorCall(err);
                });
            }).catch((err) => {
                console.warn("盒子广告 加载失败", err);
                errorCall(err);
            });
        } else {
            qq.showModal({
                title: "提示",
                content: "当前QQ版本过低，无法使用盒子广告，请升级到最新QQ版本后重试。"
            });
        }
    }

    /**************************************** 其他 ****************************************/

    /** 短震动 */
    public vibrateShort(data: { complete?: Function }) {
        if (!GameData.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isQQMiniGame()) {
            qq.vibrateShort(data);
        }
    }

    /** 长震动 */
    public vibrateLong() {
        if (!GameData.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isQQMiniGame()) {
            qq.vibrateLong({});
        }
    }

    /**************************************** 开放域 ****************************************/
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