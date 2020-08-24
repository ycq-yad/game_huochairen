import { MiniManeger } from "./MiniManeger";
import GameEvent from "../common/GameEvent";
import { GameData } from "../common/GameData";

/**
 * 魅族小游戏管理
 */
export class MZGameMgr extends MiniManeger {

    private url: string = "https://yxtest.32yx.com/MZMiniGame.fcgi";

    public systemInfo: MZSystemInfo;
    /** 进入后台的时间戳 */
    public hideTime = 0;
    /** 进入前台的时间戳 */
    public showTime = 0;

    /** 初始化小游戏 */
    public initMiniGame() {
        this.systemInfo = <MZSystemInfo>qg.getSystemInfoSync();
        console.log("systemInfo >> ", this.systemInfo);
    }

    public onShow(callBack: Function) {
        mz.onShow((res) => {
            callBack && callBack(res);
            this.showTime = new Date().getTime();
            EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
        });
    }

    public onHide(callBack: Function) {
        mz.onHide(() => {
            callBack && callBack();
            this.hideTime = new Date().getTime();
            EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        });
    }

    public loginGame() {
        return new Promise((resolve, reject) => {
            this.login().then((res) => {
                res = JSON.parse(res);
                console.log("loginGame success ", res);
                // "{"code":"200","message":"","redirect":"","value":{"clientId":"KzA76k3lBCYDqKTy6VYvb9WR6QSUWVGJ","icon":"https://image.meizu.com/image/uc/16b0181757f1412bb513d58800d1a686z?t=946656000000","nickname":"用户676662596","scope":"basic","userId":169165649}}"
                GameData.getInstance().userInfo.openId = res.value.clientId;
                GameData.getInstance().userInfo.nick = res.value.nickname;
                GameData.getInstance().userInfo.avatarUrl = res.value.icon;
                resolve();
            }).catch((err) => {
                this.getToken().then(res => {
                    res = JSON.parse(res);
                    console.log("loginGame success ", res);
                    GameData.getInstance().userInfo.openId = res.value.clientId;
                    GameData.getInstance().userInfo.nick = res.value.nickname;
                    GameData.getInstance().userInfo.avatarUrl = res.value.icon;
                    resolve();
                }).catch(err => {
                    reject();
                });
            });
        });
    }

    /** 登录 */
    public login(): Promise<any> {
        return new Promise((resolve, reject) => {
            mz.login({
                success: (res) => {
                    console.log("login success ", res);
                    if (res.token) {
                        let urlappend = "access_token=" + res.token;
                        let data = {
                            msg_type: "10",
                            msg_data: {
                                url_append: urlappend,
                            }
                        }
                        HttpMgr.getInstance().sendHttp(this.url, data, (res) => {
                            console.log("getsisson 返回：", res);
                            resolve(res.msg_data);
                        }, (err) => {
                            console.warn("网络请求失败：", err);
                            reject();
                        }, "post");
                    } else {
                        console.warn("登录失败：", res);
                        reject();
                    }
                },
                fail: (res) => {
                    console.warn("login fail ", res);
                    switch (res.code) {
                        case 4:
                            console.log("用户取消登录");
                            break;
                        case 20:
                            console.log("用户拒绝授权");
                            break;
                    }
                    reject();
                }
            });
        });
    }

    public getToken(): Promise<any> {
        return new Promise((resolve, reject) => {
            mz.getToken({
                success: (res) => {
                    console.log("getToken success ", res);
                    if (res.token) {
                        let urlappend = "access_token=" + res.token;
                        let data = {
                            msg_type: "10",
                            msg_data: {
                                url_append: urlappend,
                            }
                        }
                        HttpMgr.getInstance().sendHttp(this.url, data, (res) => {
                            console.log("getsisson 返回：", res);
                            resolve(res.msg_data);
                        }, (err) => {
                            console.warn("网络请求失败：", err);
                            reject();
                        }, "post");
                    } else {
                        console.warn("登录失败：", res);
                        reject();
                    }
                },
                fail: (res) => {
                    console.warn("getToken fail ", res);
                    switch (res.code) {
                        case 4:
                            console.log("用户取消登录");
                            break;
                        case 20:
                            console.log("用户拒绝授权");
                            break;
                    }
                    reject();
                }
            });
        });
    }

    /** 初始玩家信息 拉取授权等 */
    public async initUserInfo() {
        // let info = await this.getUserInfo();
        // if (!info) await this.createUserInfoButton();
        // GameData.instance.userInfo.nick = info.nickName;
        // GameData.instance.userInfo.avatarUrl = info.avatarUrl;
    }

    /**************************************** 广告 ****************************************/

    public videoAd: MZRewardedVideoAd;
    /** 播放视频广告 **/
    public playViderAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean, sceneKey?: string }) {
        if (!DeviceUtil.isMZMiniGame()) {
            data.successFun && data.successFun();
            return;
        }
        let videoId = GameData.getInstance().videoId;
        if (videoId.length <= 0) {
            TipsManager.getInstance().showDefaultTips("开发中");
            data.errorFun && data.errorFun();
            return;
        }

        if (!this.videoAd) {
            let adId = videoId[Math.floor(Math.random() * videoId.length)];
            this.videoAd = qg.createRewardedVideoAd({
                adUnitId: adId
            });
            this.videoAd.onLoad((res) => {
                console.log("激励视频广告 加载成功", res);
                this.videoAd.show();
            });
        }
        let onCloseCall = (res) => {
            console.log("激励视频广告 关闭", res);
            data.successFun && data.successFun();
            this.videoAd.offClose(onCloseCall);
            this.videoAd.offError(onErrorCall);
        };
        let onErrorCall = (err) => {
            console.warn("激励视频广告 onError", err);
            data.errorFun && data.errorFun(err);
            this.videoAd.offClose(onCloseCall);
            this.videoAd.offError(onErrorCall);
        };

        this.videoAd.onClose(onCloseCall);
        this.videoAd.onError(onErrorCall);

        this.videoAd.load();
    }

    public bannerAd: MZBannerAd;
    public canShowBanner = true;
    private clearBannerFun: Function;
    /** 特殊处理  展示广告 */
    public async createBanner() {
        return new Promise<any>((resolve) => {
            this.canShowBanner = true;
            let bannerId = GameData.getInstance().bannerId;
            if (bannerId.length <= 0) {
                resolve(null);
                return;
            }
            let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            console.log("创建 banner 广告组件-->", adId);
            let phone = this.systemInfo;
            let w = phone.screenWidth;
            let h = phone.screenHeight;
            let top = h - 161 - 30;
            let bannerAd = qg.createBannerAd({
                adUnitId: adId,
                style: { top: top, left: 0, width: w, height: 60 }
            });
            let errorFun = (err) => {
                console.warn("banner 广告 onError ", err);
                resolve(null);
            }
            let closeFun = (err) => {
                console.log("banner 广告 onClose ", err);
            }
            let resizeFun = (res) => {
                bannerAd.style.left = (w - res.width) / 2;
                bannerAd.style.height = res.height + 20;
                bannerAd.style.top = h - res.height - 30;
                console.log("banner 广告 onResize ", res, bannerAd);
            }
            let loadFun = (res) => {
                console.log("banner 广告 onLoad 成功", res);
                this.bannerAd = bannerAd;
                resolve(bannerAd);
            }
            bannerAd.onLoad(loadFun);
            bannerAd.onResize(resizeFun);
            bannerAd.onError(errorFun);
            bannerAd.onClose(closeFun);
            this.clearBannerFun = () => {
                if (this.bannerAd) {
                    this.bannerAd.offLoad(loadFun);
                    this.bannerAd.offResize(resizeFun);
                    this.bannerAd.offError(errorFun);
                    this.bannerAd.offClose(closeFun);
                }
            }
        });
    }

    /** 特殊处理 显示banner */
    public showBannerAdSp() {
        if (this.canShowBanner && this.bannerAd) {
            this.bannerAd.show();
        }
    }

    /** 显示banner */
    public showBannerAd(offset: { w: number, h: number, callback?: Function }) {
        this.canShowBanner = true;
        let bannerId = GameData.getInstance().bannerId;
        if (bannerId.length <= 0) return;
        let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
        console.log("创建 banner 广告组件-->", adId);
        let phone = this.systemInfo;
        let w = phone.screenWidth;
        let h = phone.screenHeight;
        let top = h - 161 - 30;
        this.bannerAd = qg.createBannerAd({
            adUnitId: adId,
            style: { top: top, left: 0, width: w, height: 60 }
        });
        let errorFun = (err) => {
            console.warn("banner 广告 onError ", err);
        }
        let closeFun = (err) => {
            console.log("banner 广告 onClose ", err);
        }
        let resizeFun = (res) => {
            this.bannerAd.style.left = (w - res.width) / 2;
            this.bannerAd.style.height = res.height + 20;
            this.bannerAd.style.top = h - res.height - 30;
            console.log("banner 广告 onResize ", res, this.bannerAd);
        }
        let loadFun = (res) => {
            console.log("banner 广告 onLoad 成功", res);
            this.bannerAd.show();
            if (!this.canShowBanner) {
                this.bannerAd.hide();
            }
            if (offset) {
                offset.callback && offset.callback();
            }
        }
        this.bannerAd.onLoad(loadFun);
        this.bannerAd.onResize(resizeFun);
        this.bannerAd.onError(errorFun);
        this.bannerAd.onClose(closeFun);
        this.clearBannerFun = () => {
            if (this.bannerAd) {
                this.bannerAd.offLoad(loadFun);
                this.bannerAd.offResize(resizeFun);
                this.bannerAd.offError(errorFun);
                this.bannerAd.offClose(closeFun);
            }
        }
        // console.log("显示 banner 广告组件-->", this.bannerAd);
    }

    /** 隐藏banner */
    public hideBanner() {
        console.log("隐藏 banner 广告组件-->");
        this.clearBannerFun && this.clearBannerFun();
        this.clearBannerFun = null;
        this.bannerAd && this.bannerAd.hide();
        this.canShowBanner = false;
    }

    private insertAd: MZInsertAd;
    /** 显示插屏广告 */
    public showInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        this.canShowBanner = true;
        let intersId = GameData.getInstance().intersId;
        if (intersId.length <= 0) return;

        let adId = intersId[Math.floor(Math.random() * intersId.length)];
        console.log("创建插屏广告组件-->", adId);
        if (!this.insertAd) {
            this.insertAd = qg.createInsertAd({
                adUnitId: adId
            });
            this.insertAd.onLoad(() => {
                console.log("插屏广告 显示成功");
                this.insertAd.show();
                data.successFun && data.successFun();
            });
        }
        let closeCall = (res) => {
            console.log("插屏广告关闭", res);
            data.closeFun && data.closeFun();
            this.insertAd.offError(errorCall);
            this.insertAd.offClose(closeCall);
        }
        let errorCall = (err) => {
            console.log("插屏广告错误", err);
            data.errorFun && data.errorFun();
            this.insertAd.offError(errorCall);
            this.insertAd.offClose(closeCall);
        };
        this.insertAd.onError(errorCall);
        this.insertAd.onClose(closeCall);

        this.insertAd.load();
    }

    /**************************************** 其他 ****************************************/

    /** 短震动 */
    public vibrateShort(data: { complete?: Function }) {
        if (!GameData.getInstance().shakeIsOpen) return;
        mz.vibrateShort({});
    }

    /** 长震动 */
    public vibrateLong() {
        if (!GameData.getInstance().shakeIsOpen) return;
        mz.vibrateLong({});
    }
}