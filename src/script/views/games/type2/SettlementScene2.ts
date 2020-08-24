import { PopBaseScene } from "../../PopBaseScene";
import { GameData } from "../../../common/GameData";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { MiniManeger } from "../../../minigame/MiniManeger";
import GameMgr, { Prop } from "../../../manager/GameMgr";
import GameEvent from "../../../common/GameEvent";
import PatternMgr from "../../../manager/PatternMgr";
import AnimationManager from "../../../manager/AnimationManager";
import PowerMgr from "../../../manager/PowerMgr";

export class SettlementScene2 extends PopBaseScene {
    className_key = "SettlementScene2";
    protected showEnterType: BasePopAnimationEnterType = null;
    public constructor(data: { level: number }) {
        super();
        this.viewData_ = data;
        this.skin = "skins/game/type2/SettlementView2.json";
    }

    public removeEvent() {
        this.btn_home.off(Laya.Event.CLICK, this, this.onHomeUglify);
        this.box_double.off(Laya.Event.CLICK, this, this.onSelect);
        this.btn_restart.off(Laya.Event.CLICK, this, this.onRestartUglify);
        this.btn_get.off(Laya.Event.CLICK, this, this.onGetUglify);
        this.btn_shareVideo.off(Laya.Event.CLICK, this, this.onShareVideo);
        this.btn_next.off(Laya.Event.CLICK, this, this.onNextUglify);
        if (DeviceUtil.isQQMiniGame()) this.btn_moreGame.off(Laya.Event.CLICK, this, this.onMoreGame);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        // this.hideBanner();
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
        this.viewData_ = null;
    }

    protected async initView() {
        this.hideBanner();
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
        EventMgr.getInstance().sendEvent(GameEvent.CHANGE_POS, { _x: 30, _y: 30 });
        SoundManager.instance.playEffect(SoundConst.Win2);
        if (!this.viewData_) return;
        let data = this.viewData_;
        this.btn_get.visible = true;
        if (DeviceUtil.isQQMiniGame()) this.btn_moreGame.visible = false;
        this.btn_restart.visible = this.btn_next.visible = false;
        this.lab_award.text = "+" + GameData.getInstance().defaultConfigs.passGold2;

        if (DeviceUtil.isTTMiniGame()) {
            this.btn_shareVideo.visible = true;
            this.btn_shareVideo.disabled = false;
            (<Laya.Label>this.btn_shareVideo.getChildByName("num")).text = "+" + GameData.getInstance().defaultConfigs.shareRecordAward;
            this.btn_get.centerX = -220;
        } else {
            this.btn_shareVideo.visible = false;
            this.btn_get.centerX = 0;
        }
        if (GameData.getInstance().isConVersion || !GameData.getInstance().videoOpen) {
            this.showDouble(false);
            this.box_double.visible = false;
        } else {
            this.box_double.visible = true;
            this.showDouble(GameData.getInstance().selectDoule);
        }
        this.nextId = await PatternMgr.instance.updateLevelUglify({ pattern: 103, curLv: data.level });
        if (DeviceUtil.isMZMiniGame() && GameData.getInstance().touchByMistake) {
            this.box_double.y = 46;
            this.box_bottom.bottom = 150;
            await MiniManeger.instance.createBanner();
            Laya.timer.once(1000, this, () => {
                MiniManeger.instance.showBannerAdSp();
                Laya.Tween.to(this.box_bottom, { bottom: 400 }, 500);
            });
        } else if (
            (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) &&
            GameData.getInstance().touchByMistake
        ) {
            this.box_double.y = 46;
            this.box_bottom.bottom = 150;
            Laya.timer.once(1500, this, () => {
                this.showBanner();
                Laya.Tween.to(this.box_bottom, { bottom: 400 }, 500);
            });
        } else {
            this.box_double.y = 0;
            this.box_bottom.bottom = 400;
            this.showBanner();
        }
        this.showLevelAniUglify();
        this.showAniUglify();
    }

    private showLevelAniUglify() {
        let lv = this.nextId;
        if (this.viewData_.level == lv) {
            this.lab_tip.visible = true;
            this.box_lvAni.visible = false;
        } else {
            this.lab_tip.visible = false;
            let url = "resource/assets/imgs/levels/type2/" + lv + "/level" + lv + ".sk";
            if (!this.levelSke) {
                this.levelSke = new Laya.Skeleton();
                this.box_lvAni.addChild(this.levelSke);
                // this.box_lvAni.bgColor = "#6e4e4e";
            }
            this.levelSke.load(url, Laya.Handler.create(this, () => {
                if (!this.levelSke.player) return;
                this.levelSke.player.playbackRate = 1;
                this.levelSke.scale(1, 1);
                this.levelSke.pos(390, 350);
                this.box_lvAni.visible = true;
                this.levelSke.play(0, true);
            }));
        }
    }

    private async showAniUglify() {
        if (!this.succSke) {
            // this.box_ani.bgColor = "#6e4e4e";
            this.succSke = await AnimationManager.instance.creatBoonAnimation("resource/assets/db/victory1.sk");
            this.box_ani.addChild(this.succSke);
            this.succSke.scale(2, 2);
            this.succSke.pos(540, 400);
        }
        this.box_ani.visible = true;
        this.succSke.player.once(Laya.Event.STOPPED, this, () => {
            this.box_ani.visible = false;
        });
        this.succSke.play(0, false);
    }

    private onHomeUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
        this.removeSelf();
    }

    private onSelect() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        if (this.img_select.visible) {
            this.showDouble(false);
        } else {
            this.showDouble(true);
        }
    }

    private showDouble(show: boolean) {
        this.img_select.visible = show;
        let mult = show ? 2 : 1;
        this.lab_award.text = "+" + GameData.getInstance().defaultConfigs.passGold1 * mult;
    }

    private onGetUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        if (this.img_select.visible) {
            this.enableView(false);
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    this.getAwardUglify(2);
                    this.enableView(true);
                },
                failFun: () => {
                    this.enableView(true);
                },
                errorFun: () => {
                    this.enableView(true);
                }
            });
        } else {
            this.getAwardUglify(1);
        }
    }

    private getAwardUglify(mult: number) {
        GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.passGold1 * mult);
        this.btn_get.visible = this.box_double.visible = false;
        this.btn_shareVideo.visible = false;
        if (DeviceUtil.isQQMiniGame()) this.btn_moreGame.visible = true;
        this.btn_restart.visible = this.btn_next.visible = true;
    }

    private onRestartUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) {
            this.enableView(false);
            MiniManeger.instance.showInsertAd({
                successFun: () => {
                    // this.enableView(true);
                },
                closeFun: () => {
                    this.enableView(true);
                    this.restartFun();
                },
                errorFun: () => {
                    this.enableView(true);
                    this.restartFun();
                }
            });
        } else {
            this.restartFun();
        }
    }

    private restartFun() {
        PowerMgr.instance.changePowerUglify({
            count: -GameData.getInstance().defaultConfigs.powerCost,
            success: () => {
                // let next = await PatternMgr.instance.updateLevel({ pattern: 102, curLv: this.viewData_.level, star: this.viewData_.star });
                EventMgr.getInstance().sendEvent(GameEvent.Type2Restart);
                EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
                // this.hideBanner();
                this.removeSelf();
            }
        });
    }

    private onShareVideo() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.enableView(false);
        MiniManeger.instance.shareGameVideo({
            successFun: () => {
                GameData.getInstance().playerData.shareVideoCount += 1;
                GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.shareRecordAward);
                this.btn_shareVideo.disabled = true;
                this.enableView(true);
            },
            failFun: () => {
                this.enableView(true);
            },
            errorFun: () => {
                this.enableView(true);
            }
        });
    }

    private onNextUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) {
            this.enableView(false);
            MiniManeger.instance.showInsertAd({
                successFun: () => {
                    // this.enableView(true);
                },
                closeFun: () => {
                    this.enableView(true);
                    this.nextFun();
                },
                errorFun: () => {
                    this.enableView(true);
                    this.nextFun();
                }
            });
        } else {
            this.nextFun();
        }
    }

    private nextFun() {
        PowerMgr.instance.changePowerUglify({
            count: -GameData.getInstance().defaultConfigs.powerCost,
            success: () => {
                // let next = await PatternMgr.instance.updateLevel({ pattern: 103, curLv: this.viewData_.level });
                EventMgr.getInstance().sendEvent(GameEvent.Type2Next, { level: this.nextId });
                // this.hideBanner();
                this.removeSelf();
            }
        });
    }

    private onMoreGame() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        MiniManeger.instance.showAppBoxAd({});
    }

    public viewData_: { level: number };

    private img_bg: Laya.Image;
    private box_lvAni: Laya.Box;
    private lab_tip: Laya.Label;
    private btn_home: Laya.Button;
    private lab_award: Laya.Label;
    private box_double: Laya.Box;
    private box_bottom: Laya.Box;
    private img_select: Laya.Image;
    private btn_restart: Laya.Button;
    private btn_get: Laya.Button;
    private btn_shareVideo: Laya.Button;
    private btn_next: Laya.Button;
    private box_ani: Laya.Box;
    private succSke: Laya.Skeleton;
    private levelSke: Laya.Skeleton;
    private btn_moreGame: Laya.Button;

    private nextId: number;

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.box_lvAni.scrollRect = new Laya.Rectangle(0, 0, 770, 650);
    }

    protected addEvent() {
        this.btn_home.on(Laya.Event.CLICK, this, this.onHomeUglify);
        this.box_double.on(Laya.Event.CLICK, this, this.onSelect);
        this.btn_restart.on(Laya.Event.CLICK, this, this.onRestartUglify);
        this.btn_get.on(Laya.Event.CLICK, this, this.onGetUglify);
        this.btn_shareVideo.on(Laya.Event.CLICK, this, this.onShareVideo);
        this.btn_next.on(Laya.Event.CLICK, this, this.onNextUglify);
        if (DeviceUtil.isQQMiniGame()) this.btn_moreGame.on(Laya.Event.CLICK, this, this.onMoreGame);
    }
}