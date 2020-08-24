import GameEvent from "../common/GameEvent";
import { MiniManeger } from "../minigame/MiniManeger";

export class PopBaseScene extends BaseSceneUISkinPopView {
    className_key = 'PopBaseScene';

    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;

    protected childrenCreated() {
        super.childrenCreated();
        this.showBackType = null;
        this.initView();
        this.addEvent();
    }

    public onAddStage() {
        super.onAddStage();
        // this.pauseTime();
        if (this.isCreate) {
            // this.initView();
            // this.addEvent();
        }
        // this.off(Laya.Event.ADDED, this, this.onAddStage);
    }

    public setData(data: any) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    protected pauseTime() {
        EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
    }

    protected initView() {

    }

    protected addEvent() {

    }

    protected isResume: boolean = true;

    protected resumeTime() {
        this.isResume && EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
    }

    public removeSelf() {
        Laya.timer.clearAll(this);
        let node = super.removeSelf();
        // this.resumeTime();
        return node;
    }

    protected removeEvent() {

    }

    protected enableView(enable: boolean) {
        this.mouseEnabled = enable;
        ViewManager.getInstance().popLayer["mouseThrough"] = enable;
        // this.grp_center.mouseEnabled = enable;
    }

    protected showCloseBtn(target: Laya.UIComponent) {
        target.visible = false;
        Laya.timer.once(3000, this, () => {
            target.visible = true;
        });
    }

    protected showBanner() {
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isMZMiniGame()) {
            let phone = MiniManeger.instance.systemInfo;
            let offset = { w: phone.screenWidth / 2, h: phone.screenHeight }
            MiniManeger.instance.showBannerAd(offset);
        }
    }

    protected hideBanner() {
        MiniManeger.instance.hideBanner();
    }
}