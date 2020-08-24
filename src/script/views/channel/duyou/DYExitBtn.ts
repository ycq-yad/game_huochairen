import GameEvent from "../../../common/GameEvent";
import { MiniManeger } from "../../../minigame/MiniManeger";
import GameMgr from "../../../manager/GameMgr";

/**
 * 嘟游渠道 顶部退出按钮
 */
export class DYExitBtn extends Laya.Box {
    public className_key = "DYExitBtn";

    public constructor() {
        super();
        this.size(260, 86);
        this.createUI();
        this.addEvent();
    }

    // 必备组件
    private img_icon: Laya.Image;

    private createUI() {
        this.img_icon = new Laya.Image();
        this.img_icon.skin = "resource/assets/channel/duyou/game_button.png";
        this.img_icon.size(260, 86);
        this.addChild(this.img_icon);
    }

    // public setData(data_: number) {
    //     this.data = data_;
    //     this.addEvent();
    //     this.initView();
    // }

    /** 添加事件 */
    private addEvent() {
        this.on(Laya.Event.CLICK, this, this.onClick);
        this.on(Laya.Event.REMOVED, this, this.onRemoved);
    }

    /** 初始化页面 */
    private initView() {

    }

    private onClick() {
        EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_LIST, {
            showFun: () => {
                this.visible = false;
                EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
                EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
                MiniManeger.instance.hideBanner();
            },
            backFun: () => {
                this.visible = true;
                EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_DRAWER);
                GameMgr.instance.topBarIsShow && EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
                GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
            }
        });
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        // this.off(Laya.Event.ADDED, this, this.onAddStage);
        this.off(Laya.Event.REMOVED, this, this.onRemoved);
        this.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        this.removeEvent();
    }
}