import GameEvent from "../common/GameEvent";
import GameLoadingView from "../loading/GameLoadingView";
import GameBufferLoading from "../loading/GameBufferLoading";
import { TopBar } from "../views/uiView/TopBar";
import { PopManager } from "./PopManager";
import { BuyPropScene } from "../views/uiView/pop/BuyPropScene";
import { HomeScene } from "../views/uiView/HomeScene";
import { GameData } from "../common/GameData";
import { SettlementScene2 } from "../views/games/type2/SettlementScene2";
import { GameSceneType2 } from "../views/games/type2/GameSceneType2";
import { ChooseScene2 } from "../views/games/type2/choose/ChooseScene2";
import { AwardScene } from "../views/uiView/pop/AwardScene";
import { DYMoreGameDrawer } from "../views/channel/duyou/DYMoreGameDrawer";
import DYChannelMgr from "./channel/DYChannelMgr";
import { DYMoreGameBanner } from "../views/channel/duyou/DYMoreGameBanner";
import { DYMoreGameRandom } from "../views/channel/duyou/DYMoreGameRandom";
import { DYMoreGameBox } from "../views/channel/duyou/DYMoreGameBox";
import { DYSettlementScene2 } from "../views/games/type2/DYSettlementScene2";
import { DYMoreGameHot } from "../views/channel/duyou/DYMoreGameHot";
import { DYMyGameList } from "../views/channel/duyou/DYMyGameList";
import { MiniManeger } from "../minigame/MiniManeger";
import GameMgr from "./GameMgr";
import { DYExitBtn } from "../views/channel/duyou/DYExitBtn";

/**
 * 此单例尽量避免调用
 */
export default class ViewMgr {

    private constructor() {
        this.addEvent();
    }

    private static ins: ViewMgr;
    public static get instance(): ViewMgr {
        if (!ViewMgr.ins) ViewMgr.ins = new ViewMgr();
        return ViewMgr.ins;
    }

    /** 添加事件 */
    private addEvent() {
        EventMgr.getInstance().addEvent(GameEvent.BUFFER_LOAD, this, this.bufferLoading);
        EventMgr.getInstance().addEvent(GameEvent.SHOW_TOP, this, this.showTopBar);
        EventMgr.getInstance().addEvent(GameEvent.HIDE_TOP, this, this.hideTopBar);
        EventMgr.getInstance().addEvent(GameEvent.CHANGE_POS, this, this.changePos);
        EventMgr.getInstance().addEvent(GameEvent.ENABLED_TOP, this, this.enabledTopBar);
        EventMgr.getInstance().addEvent(GameEvent.OPEN_BUY_PROP, this, this.openBuyProp);
        EventMgr.getInstance().addEvent(GameEvent.OPEN_SCENE, this, this.openScene);
        EventMgr.getInstance().addEvent(GameEvent.Type2GameOver, this, this.gameOver2);
        EventMgr.getInstance().addEvent(GameEvent.CHOOSE_MODEL, this, this.chooseModel);

        EventMgr.getInstance().addEvent(GameEvent.SHOW_GAME_DRAWER, this, this.showMoreGamesDrawer);
        EventMgr.getInstance().addEvent(GameEvent.HIDE_GAME_DRAWER, this, this.hideMoreGamesDrawer);
        EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_DRAWER, this, this.openMoreGamesDrawer);
        EventMgr.getInstance().addEvent(GameEvent.SHOW_GAME_BANNER, this, this.showMoreGamesBanner);
        EventMgr.getInstance().addEvent(GameEvent.HIDE_GAME_BANNER, this, this.hideMoreGamesBanner);
        EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_RANDOM, this, this.openMoreGamesRandom);
        EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_HOT, this, this.openMoreGamesHot);
        EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_LIST, this, this.openMyGamesList);
        EventMgr.getInstance().addEvent(GameEvent.SHOW_GAME_BOX, this, this.showMoreGamesBox);
        EventMgr.getInstance().addEvent(GameEvent.HIDE_GAME_BOX, this, this.hideMoreGamesBox);
        EventMgr.getInstance().addEvent(GameEvent.NAV_GAME_FAIL, this, this.navigateToGameFail);
        EventMgr.getInstance().addEvent(GameEvent.SHOW_EXIT_BTN, this, this.showExitBtn);
        EventMgr.getInstance().addEvent(GameEvent.HIDE_EXIT_BTN, this, this.hideExitBtn);
    }

    public loadingView: GameLoadingView;

    /** 注册默认bufferloading界面 */
    public registerBufferLoading(): void {
        BufferLoadingManger.getInstance().registerOneBuffer("GameBufferLoading", new GameBufferLoading());
    }

    private bufferLoading(show: boolean) {
        if (show) {
            this.showBufferLoading();
        } else {
            this.hiddeBufferLoading();
        }
    }

    /** 显示默认的buffer页面 */
    private showBufferLoading(info: string = ""): void {
        BufferLoadingManger.getInstance().showBuffer("GameBufferLoading", info);
        Laya.timer.clear(this, this.hiddeBufferLoading)
        Laya.timer.once(60000, this, this.hiddeBufferLoading);
        BufferLoadingManger.getInstance().bufferGroup.mouseThrough = false;
    }

    /** 关闭默认的buffer页面 */
    private hiddeBufferLoading(): void {
        Laya.timer.clear(this, this.hiddeBufferLoading)
        BufferLoadingManger.getInstance().hiddBuffer("GameBufferLoading");
        BufferLoadingManger.getInstance().bufferGroup.mouseEnabled = true;
        BufferLoadingManger.getInstance().bufferGroup.mouseThrough = true;
    }

    private com_topBar: TopBar;
    private showTopBar() {
        // if (!BufferLoadingManger.getInstance().bufferGroup.getChildByName("TopBar")) {
        //     BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_topBar);
        // }
        if (!this.com_topBar) {
            this.com_topBar = new TopBar();
            BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_topBar);
        }
        this.com_topBar.visible = true;
    }

    private enabledTopBar(mouseEnabled: boolean = true) {
        this.com_topBar.mouseEnabled = mouseEnabled;
    }

    private changePos(pos: { _x: number, _y: number }) {
        this.com_topBar.pos(pos._x, pos._y);
        if (DeviceUtil.getIsIphoneX()) this.com_topBar.y += GameData.getInstance().fullScreenOffSet;
    }

    private hideTopBar() {
        if (this.com_topBar) {
            this.com_topBar.visible = false;
        }
    }

    private openScene(evt: { name: string, data: any }) {
        ViewManager.getInstance().popLayer.removeChildren();
        switch (evt.name) {
            case "HomeScene":
                this.openHome(evt.data);
                break;
            case "GameSceneType2":
                this.opneGameViewType2(evt.data);
                break;
        }
    }

    private openHome(data: any) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            SceneManager.getInstance().openGameScene(HomeScene, data);
            if (GameData.getInstance().playerData.loginCount > 1 && !GameData.getInstance().isConVersion) {
                let power = () => {
                    this.closeMoreGamesDrawer(0);
                    PopManager.instance.showPopView({//4、弹体力书包页面
                        className: AwardScene,
                        data: {
                            type: 2,
                            data: {
                                fun: () => {//5、我的盒子页面
                                    this.openMyGamesList({
                                        showFun: () => {
                                            this.hideTopBar();
                                            MiniManeger.instance.hideBanner();
                                        },
                                        backFun: () => {
                                            this.showMoreGamesDrawer();
                                            this.showExitBtn();
                                            GameMgr.instance.topBarIsShow && this.showTopBar();
                                            GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
                                            this.openMoreGamesDrawer();//6、弹导出抽屉页
                                            // SceneManager.getInstance().openGameScene(HomeScene, data);//7、返回首页
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
                this.openMoreGamesRandom({//1、弹随机盒子页
                    showFun: () => {
                        this.hideTopBar();
                        MiniManeger.instance.hideBanner();
                    },
                    backFun: () => {
                        this.openMyGamesList({ only: true });
                    },
                    continueFun: () => {
                        this.openMoreGamesDrawer();//2、弹导出抽屉页
                        GameMgr.instance.topBarIsShow && this.showTopBar();
                        GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
                        this.showExitBtn();
                        Laya.timer.once(300, this, () => {//3、自动弹视频广告
                            MiniManeger.instance.playViderAd({
                                successFun: () => {
                                    power();
                                },
                                failFun: () => {
                                    power();
                                },
                                errorFun: () => {
                                    power();
                                }
                            });
                        });
                    }
                });
            } else {
                // SceneManager.getInstance().openGameScene(HomeScene, data);
            }
        } else {
            SceneManager.getInstance().openGameScene(HomeScene, data);
        }
    }

    private opneGameViewType2(data) {
        this.hideTopBar();
        let lv;
        if (DeviceUtil.isOnPC()) lv = parseInt(Utils.getQueryString("lv"));
        if (!lv) lv = data.level;
        SceneManager.getInstance().openGameScene(GameSceneType2, { level: lv });
    }

    private openBuyProp(data: { type: number }) {
        PopManager.instance.showPopView({ className: BuyPropScene, data: { type: data.type } });
    }

    private chooseModel(data_: { type: number, data: any }) {
        let group = [];
        let className: any;
        let classData: any;
        switch (data_.type) {
            case 2:
                group = ["choose2"];
                className = ChooseScene2;
                break;
            default:
        }
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        ResUtil.getIntance().loadGroups(group, () => {
            ViewManager.getInstance().showView(className, classData);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
        });
    }

    private gameOver2(data: { level: number }) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            this.DYGameOver2(data);
        } else {
            if (GameData.getInstance().isConVersion) {
                ViewManager.getInstance().showView(SettlementScene2, data);
            } else {
                if (data.level % 2 == 0) {
                    PopManager.instance.showPopView({
                        className: AwardScene,
                        data: {
                            type: 2,
                            data: {
                                fun: () => {
                                    ViewManager.getInstance().showView(SettlementScene2, data);
                                }
                            }
                        }
                    });
                } else {
                    ViewManager.getInstance().showView(SettlementScene2, data);
                }
            }
        }
    }
    private DYGameOver2(data: { level: number }) {
        let fun = () => {
            if (GameData.getInstance().isConVersion) {
                ViewManager.getInstance().showView(DYSettlementScene2, data);
            } else {
                if (data.level >= 3) {
                    PopManager.instance.showPopView({
                        className: AwardScene,
                        data: {
                            type: 2,
                            data: {
                                fun: () => {
                                    ViewManager.getInstance().showView(DYSettlementScene2, data);
                                }
                            }
                        }
                    });
                } else {
                    ViewManager.getInstance().showView(DYSettlementScene2, data);
                }
            }
        }
        if (data.level >= 3) {
            this.openMyGamesList({
                backFun: () => {
                    this.showMoreGamesDrawer();
                    this.showExitBtn();
                    fun();
                }
            });
        } else {
            fun();
        }
    }

    private com_moreGamesDrawer: DYMoreGameDrawer;
    private async showMoreGamesDrawer() {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (!this.com_moreGamesDrawer) {
                await DYChannelMgr.instance.refreshGameList(false);
                this.com_moreGamesDrawer = new DYMoreGameDrawer();
                BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_moreGamesDrawer);
            }
            this.com_moreGamesDrawer.visible = true;
        }
    }
    private hideMoreGamesDrawer() {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (this.com_moreGamesDrawer) {
                this.com_moreGamesDrawer.visible = false;
                this.com_moreGamesDrawer.switchShow(false, 0);
            }
        }
    }
    private openMoreGamesDrawer() {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (this.com_moreGamesDrawer) {
                this.com_moreGamesDrawer.visible = true;
                this.com_moreGamesDrawer.switchShow(true);
            }
        }
    }
    private closeMoreGamesDrawer(time?: number) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (this.com_moreGamesDrawer) {
                this.com_moreGamesDrawer.switchShow(false, time);
            }
        }
    }

    private com_moreGamesBanner: DYMoreGameBanner;
    private async showMoreGamesBanner(parent: Laya.Sprite) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (!this.com_moreGamesBanner) {
                await DYChannelMgr.instance.refreshGameList(false);
                this.com_moreGamesBanner = new DYMoreGameBanner();
            }
            if (!parent.getChildByName("DYMoreGameBanner")) {
                parent.addChild(this.com_moreGamesBanner);
            }
        }
    }
    private hideMoreGamesBanner(parent: Laya.Sprite) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (parent.getChildByName("DYMoreGameBanner") && this.com_moreGamesBanner) {
                parent.removeChild(this.com_moreGamesBanner);
            }
        }
    }

    private firstOpenMoreGamesRandom: boolean = true;
    private async openMoreGamesRandom(data?: { showFun?: Function, backFun?: Function, continueFun?: Function, only?: boolean }) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            await DYChannelMgr.instance.refreshGameList(false);
            if (!data) data = {};
            if (!data.only) data.only = false;
            data["first"] = this.firstOpenMoreGamesRandom;
            ViewManager.getInstance().showView(DYMoreGameRandom, data, data.only);
            this.firstOpenMoreGamesRandom = false;
        }
    }

    private async openMoreGamesHot(data?: { showFun?: Function, backFun?: Function, only?: boolean }) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            await DYChannelMgr.instance.refreshGameList(false);
            if (!data) data = {};
            if (!data.only) data.only = false;
            ViewManager.getInstance().showView(DYMoreGameHot, data, data.only);
        }
    }

    private async openMyGamesList(data?: { showFun?: Function, backFun?: Function, only?: boolean }) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            await DYChannelMgr.instance.refreshGameList(false);
            if (!data) data = {};
            if (!data.only) data.only = false;
            ViewManager.getInstance().showView(DYMyGameList, data, data.only);
        }
    }

    private com_moreGamesBox: DYMoreGameBox;
    private async showMoreGamesBox(parent: Laya.Sprite) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (!this.com_moreGamesBox) {
                await DYChannelMgr.instance.refreshGameList(false);
                this.com_moreGamesBox = new DYMoreGameBox();
            }
            if (!parent.getChildByName("DYMoreGameBox")) {
                parent.addChild(this.com_moreGamesBox);
            }
        }
    }
    private hideMoreGamesBox(parent: Laya.Sprite) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            if (parent.getChildByName("DYMoreGameBox") && this.com_moreGamesBox) {
                parent.removeChild(this.com_moreGamesBox);
            }
        }
    }

    private navigateToGameFail(unit: boolean) {
        this.openMoreGamesRandom({
            showFun: () => {
                this.hideTopBar();
                MiniManeger.instance.hideBanner();
            },
            backFun: () => {
                this.openMyGamesList({ only: true });
            },
            continueFun: () => {
                if (unit) {
                    GameMgr.instance.topBarIsShow && this.showTopBar();
                    GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
                    this.showExitBtn();
                    this.showMoreGamesDrawer();
                }
            },
            only: !unit
        });
    }

    private com_exitBtn: DYExitBtn;
    private showExitBtn() {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            let launch: WXLaunchOptions = MiniManeger.instance.launchOption;
            if (launch && launch.scene == 1037) {//小程序打开小程序
                if (!this.com_exitBtn) {
                    let systemInfo: WXSystemInfo = MiniManeger.instance.systemInfo;
                    let rect = wx.getMenuButtonBoundingClientRect();
                    console.log("显示退出按钮", rect, systemInfo);
                    let x = systemInfo.pixelRatio * rect.left * Laya.stage.width / Laya.Browser.width;
                    let y = systemInfo.pixelRatio * (rect.top + rect.height) * Laya.stage.height / Laya.Browser.height + 10;
                    this.com_exitBtn = new DYExitBtn();
                    this.com_exitBtn.pos(x, y);
                    BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_exitBtn);
                }
                this.com_exitBtn.visible = true;
            }
        }
    }
    private hideExitBtn() {
        if (this.com_exitBtn) {
            this.com_exitBtn.visible = false;
        }
    }
}
window['ViewMgr'] = ViewMgr;