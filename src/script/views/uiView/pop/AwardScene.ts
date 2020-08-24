import { PopLastScene } from "../../PopLastScene";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { MiniManeger } from "../../../minigame/MiniManeger";
import GameMgr, { Prop } from "../../../manager/GameMgr";
import AnimationManager from "../../../manager/AnimationManager";
import { GameData } from "../../../common/GameData";
import GameEvent from "../../../common/GameEvent";

export class AwardScene extends PopLastScene {
    className_key = "AwardScene";
    public constructor(data_: { type: number, data: any }) {
        super();
        this.viewData_ = data_;
        this.skin = "skins/uiView/pop/AwardView.json";
    }

    /** 移除事件 */
    protected removeEvent() {
        this.btn_get.off(Laya.Event.CLICK, this, this.onVideoUglify);
        this.lab_get.off(Laya.Event.CLICK, this, this.onGetUglify);
        this.btn_open.off(Laya.Event.CLICK, this, this.onOpenUglify);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_BOX, this.box_moreGame);
        if (this.viewData_.type == 1) {//获得奖励
        } else {
            // this.hideBanner();
        }
        this.viewData_ = null;
        Laya.Tween.clearAll(this.img_light);
        Laya.Tween.clearAll(this.btn_get);
        Laya.Tween.clearAll(this.btn_open);
    }

    private onVideoUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        let self = this;
        self.grp_center.mouseEnabled = false;
        if (GameData.getInstance().videoOpen) {
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    self.getAwardUglify(2);
                },
                failFun: () => {
                    self.grp_center.mouseEnabled = true;
                },
                errorFun: () => {
                    self.grp_center.mouseEnabled = true;
                }
            });
        } else {
            MiniManeger.instance.shareAppMessage({
                sucFun: () => {
                    self.getAwardUglify(2);
                },
                failFun: () => {
                    self.grp_center.mouseEnabled = true;
                }
            });
        }
    }

    private onGetUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.getAwardUglify(1);
    }

    private getAwardUglify(mult: number) {
        let data = this.viewData_;
        if (data.type == 1) {//获得奖励
            GameMgr.instance.updateBaseData(data.data.id, data.data.num * mult);
            if (data.data && data.data.fun) data.data.fun();
        }
        this.grp_center.mouseEnabled = true;
        this.removeSelf();
    }

    private clickCount: number = 0;

    private onOpenUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        Laya.timer.clear(this, this.onTimerUglify);
        this.clickCount++;
        this.progressUglify();
        let viewData = this.viewData_.data;
        if (this.clickCount >= 10) {
            this.btn_open.mouseEnabled = false;
            this.btn_open.visible = false;
            Laya.timer.once(GameData.getInstance().bagBtnDelay, this, () => {
                this.removeSelf();
                ViewManager.getInstance().showView(AwardScene, {
                    type: 1,
                    data: {
                        id: Prop.Power,
                        num: GameData.getInstance().defaultConfigs.powerBag,
                        fun: viewData.fun,
                        flag: true
                    }
                });
            });
        } else {
            Laya.timer.loop(700, this, this.onTimerUglify);
            if (this.clickCount == 6) {
                if (this.flag) {
                    this.btn_open.visible = false;
                    if (DeviceUtil.isMZMiniGame()) {
                        MiniManeger.instance.showBannerAdSp();
                    } else {
                        this.showBanner();
                        GameMgr.instance.bannerIsShow = true;
                    }
                    Laya.Tween.to(this.btn_open, { bottom: 425 }, 500, null, Laya.Handler.create(this, () => {
                        this.btn_open.visible = true;
                    }));
                }
                this.flag = false;
            }
        }
    }

    private onTimerUglify() {
        this.clickCount--;
        this.progressUglify();
        if (this.clickCount <= 0) {
            Laya.timer.clear(this, this.onTimerUglify);
        }
    }

    private progressUglify() {
        this.img_prog.width = 840 * this.clickCount / 10;
        this.img_expression.skin = this.clickCount % 2 ? "resource/assets/imgs/home/reward/reward_icon_2.png" : "resource/assets/imgs/home/reward/reward_icon_3.png";
    }

    private box_content: Laya.Box;
    private img_light: Laya.Image;
    private lab_title: Laya.Label;
    private lab_num: Laya.Label;
    private img_icon: Laya.Image;
    private img_expression: Laya.Image;
    private img_progdb: Laya.Image;
    private img_prog: Laya.Image;
    private lab_get: Laya.Label;
    private btn_get: Laya.Button;
    private btn_open: Laya.Button;
    private box_moreGame: Laya.Box;

    /** type(1=获得奖励；2=体力书包) */
    public viewData_: { type: number, data: any };
    private flag = false;

    protected childrenCreated() {
        super.childrenCreated();
        this.grp_center.width = Laya.stage.width;
        this.grp_center.height = Laya.stage.height;
        if (GameData.getInstance().videoOpen) {
            (<Laya.Image>this.btn_get.getChildByName("icon")).skin = "resource/assets/imgs/public/game_icon_4.png";
        } else {
            (<Laya.Image>this.btn_get.getChildByName("icon")).skin = "resource/assets/imgs/public/settlement_icon_5.png";
        }
    }

    /** 添加事件 */
    protected addEvent() {
        this.btn_get.on(Laya.Event.CLICK, this, this.onVideoUglify);
        this.lab_get.on(Laya.Event.CLICK, this, this.onGetUglify);
        this.btn_open.on(Laya.Event.CLICK, this, this.onOpenUglify);
    }

    protected async initView() {
        // console.log("AwardScene >>> initView", this.viewData_);
        if (!this.viewData_) return;
        this.btn_get.visible = this.btn_open.visible = this.lab_get.visible = false;
        this.lab_num.visible = this.img_expression.visible = this.img_progdb.visible = false;
        AnimationManager.instance.runaroundTween(this.img_light, this);
        let data = this.viewData_;
        if (data.type == 1) {//获得奖励
            // this.showBanner();
            this.lab_title.text = "获得奖励";
            this.img_icon.skin = GameMgr.instance.getIconUrlById(data.data.id);
            this.img_icon.scale(3, 3);
            this.lab_num.visible = true;
            this.lab_num.text = "+" + data.data.num;
            this.btn_get.visible = true;
            this.showCloseBtn(this.lab_get);
            AnimationManager.instance.btnScaleAniLoop(this.btn_get, this);
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_BOX, this.box_moreGame);
            if (DeviceUtil.isWXMiniGame() && GameData.getInstance().touchByMistake) {
                this.hideBanner();
                GameMgr.instance.bannerIsShow = false;
                this.btn_get.bottom = 100;
                this.lab_get.bottom = 25;
                Laya.timer.once(1000, this, () => {
                    this.showBanner();
                    GameMgr.instance.bannerIsShow = true;
                    Laya.Tween.to(this.btn_get, { bottom: 425 }, 500);
                    Laya.Tween.to(this.lab_get, { bottom: 350 }, 500);
                });
            }
        } else {//体力书包
            this.lab_title.text = "体力书包";
            this.img_icon.skin = "resource/assets/imgs/home/reward/reward_icon_1.png";
            this.img_icon.scale(1.5, 1.5);
            this.img_expression.visible = true;
            this.img_progdb.visible = true;
            this.clickCount = 0;
            this.progressUglify();
            this.btn_open.bottom = 100;
            this.btn_open.visible = true;
            this.btn_open.mouseEnabled = true;
            if (DeviceUtil.isMZMiniGame() && GameData.getInstance().touchByMistake) {
                this.flag = true;
                this.hideBanner();
                this.btn_open.bottom = 100;
                this.btn_open.visible = false;
                await MiniManeger.instance.createBanner();
                this.btn_open.visible = true;
            } else if (
                (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame() || DeviceUtil.isWXMiniGame()) &&
                GameData.getInstance().touchByMistake
            ) {
                this.flag = true;
                this.hideBanner();
                GameMgr.instance.bannerIsShow = false;
                this.btn_open.bottom = 100;
            } else {
                this.flag = false;
                this.btn_open.bottom = 425;
                // this.showBanner();
            }
        }
    }
}