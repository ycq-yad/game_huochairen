import SoundManager, { SoundConst } from "../../manager/SoundManager";
import { SignScene } from "./sign/SignScene";
import { PowerScene } from "./power/PowerScene";
import GameEvent from "../../common/GameEvent";
import AnimationManager from "../../manager/AnimationManager";
import { GameData } from "../../common/GameData";
import TextFlow, { Align } from "../../tool/TextFlow";
import { MathUtil } from "../../tool/MathUtil";
import { BrushScene } from "../games/type2/brush/BrushScene";
import { MiniManeger } from "../../minigame/MiniManeger";
import InviteView from "./invite/InviteView";
import GameMgr from "../../manager/GameMgr";

export class HomeScene extends BaseSceneUISkin {
    className_key = "HomeScene";
    public constructor() {
        super();
        this.skin = "skins/uiView/HomeView.json";
    }

    // private img_bg: Laya.Image;
    private box_bg: Laya.Box;
    private img_title: Laya.Image;
    private box_ani: Laya.Box;
    private btn_start: Laya.Button;
    private btn_power: Laya.Button;
    private btn_sign: Laya.Button;
    private btn_skin: Laya.Button;
    private mainSke: Laya.Skeleton;
    private btn_moreGame: Laya.Button;
    private btn_share: Laya.Button;
    private btn_invite: Laya.Button;

    protected childrenCreated() {
        super.childrenCreated();
        let res = ["reward"];
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            res = ["channel", "reward"];
        }
        ResUtil.getIntance().loadGroups(res, () => {
            console.log("懒加载完成");
        });
        if (DeviceUtil.isWXMiniGame()) {
            this.img_title.skin = "resource/assets/imgs/home/main/mianinterface_logo_1_1.png";
        } else {
            this.img_title.skin = "resource/assets/imgs/home/main/mianinterface_logo_1.png";
        }
        if (DeviceUtil.isQQMiniGame()) {
            this.btn_moreGame.visible = this.btn_invite.visible = this.btn_share.visible = true;
            this.btn_power.centerX = -145;
            this.btn_sign.centerX = 145;
        } else {
            // this.btn_power.width = this.btn_sign.width = 258;
            this.btn_power.centerX = -157;
            this.btn_sign.centerX = 156;
        }
        if (GameData.getInstance().isConVersion) {
            this.btn_power.visible = this.btn_sign.visible = false;
            this.btn_invite.visible = this.btn_share.visible = false;
        }

        EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_DRAWER);
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_EXIT_BTN);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    private initView() {
        MiniManeger.instance.showBannerAd(null);
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            GameMgr.instance.topBarIsShow = true;
            GameMgr.instance.bannerIsShow = true;
        }
        // console.log("HomeScene data >>>", this.viewData_);
        SoundManager.instance.playBgMusic(SoundConst.GameBgm2);
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
        AnimationManager.instance.btnScaleAniLoop(this.btn_start, this);
        this.rollBgUglify();
        this.showAniUglify();
        if (GameMgr.instance.autoShowSign) {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(["sign"], () => {
                GameMgr.instance.autoShowSign = false;
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                ViewManager.getInstance().showView(SignScene);
            });
        }
    }

    private addEvent() {
        this.btn_power.on(Laya.Event.CLICK, this, this.onPowerUglify);
        this.btn_sign.on(Laya.Event.CLICK, this, this.onSignUglify);
        this.btn_start.on(Laya.Event.CLICK, this, this.onStartUglify);
        this.btn_skin.on(Laya.Event.CLICK, this, this.onSkinUglify);
        if (DeviceUtil.isQQMiniGame()) {
            this.btn_moreGame.on(Laya.Event.CLICK, this, this.onMoreGame);
            this.btn_invite.on(Laya.Event.CLICK, this, this.onInvite);
            this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
        }
    }

    private rollBgUglify() {
        Laya.timer.loop(50, this.box_bg, () => {
            for (let i = 0; i < 3; i++) {
                let img = <Laya.Image>this.box_bg.getChildAt(i);
                img.y -= 5;
            }
            let start = <Laya.Image>this.box_bg.getChildAt(0);
            let end = <Laya.Image>this.box_bg.getChildAt(2);
            if (start.y <= -1920) {
                this.box_bg.removeChild(start);
                start.y = end.y + 1920;
                this.box_bg.addChild(start);
            }
        });
    }

    private async showAniUglify() {
        if (!this.mainSke) {
            this.mainSke = await AnimationManager.instance.creatBoonAnimation("resource/assets/db/mianinterface.sk");
            // this.box_ani.bgColor = "#6e4e4e";
            this.box_ani.addChild(this.mainSke);
            this.mainSke.scale(2, 2);
            this.mainSke.pos(540, 400);
        }
        this.mainSke.play(0, true);
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_BANNER, this.box_ani);
    }

    private onPowerUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        ResUtil.getIntance().loadGroups(["power"], () => {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            ViewManager.getInstance().showView(PowerScene);
        });
    }

    private onSignUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        ResUtil.getIntance().loadGroups(["sign"], () => {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            ViewManager.getInstance().showView(SignScene);
        });
    }

    private onStartUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        let modelId = GameData.getInstance().modelId;
        let classData: any;
        switch (modelId) {
            case 0:
                classData = { type: 1 };
                break;
        }
        EventMgr.getInstance().sendEvent(GameEvent.CHOOSE_MODEL, { type: modelId, data: classData });
    }

    private onSkinUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        ResUtil.getIntance().loadGroups(["skin2"], () => {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            ViewManager.getInstance().showView(BrushScene, { type: 1 });
        });
    }

    private onMoreGame() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        MiniManeger.instance.showAppBoxAd({});
    }

    private onInvite() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        ResUtil.getIntance().loadGroups(["invite"], () => {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            ViewManager.getInstance().showView(InviteView);
        });
    }

    private onShare() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        MiniManeger.instance.shareAppMessage();
    }

    private removeEvent() {
        this.btn_power.off(Laya.Event.CLICK, this, this.onPowerUglify);
        this.btn_sign.off(Laya.Event.CLICK, this, this.onSignUglify);
        this.btn_start.off(Laya.Event.CLICK, this, this.onStartUglify);
        this.btn_skin.off(Laya.Event.CLICK, this, this.onSkinUglify);
        if (DeviceUtil.isQQMiniGame()) {
            this.btn_moreGame.off(Laya.Event.CLICK, this, this.onMoreGame);
            this.btn_invite.off(Laya.Event.CLICK, this, this.onInvite);
            this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
        }
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        Laya.Tween.clearAll(this.btn_start);
        Laya.timer.clearAll(this.box_bg);
        this.mainSke && this.mainSke.stop();
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_BANNER, this.box_ani);
    }
}