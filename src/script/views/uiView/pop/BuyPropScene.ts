import { PopLastScene } from "../../PopLastScene";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { MiniManeger } from "../../../minigame/MiniManeger";
import { GameData } from "../../../common/GameData";
import GameEvent from "../../../common/GameEvent";
import GameMgr, { Prop } from "../../../manager/GameMgr";

export class BuyPropScene extends PopLastScene {
    className_key = "BuyPropScene";
    public constructor(data_: { type: number }) {
        super();
        this.viewData_ = data_;
        this.skin = "skins/uiView/pop/BuyPropView.json";
    }

    /** 移除事件 */
    protected removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
        this.btn_get.off(Laya.Event.CLICK, this, this.onGetUglify);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        // this.hideBanner();
        this.viewData_ = null;
    }

    private showInsertAd() {
        MiniManeger.instance.showInsertAd({
            successFun: () => {

            },
            closeFun: () => {

            },
            errorFun: () => {

            }
        });
    }

    private onGetUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        let self = this;
        self.grp_center.mouseEnabled = false;
        if (GameData.getInstance().videoOpen || DeviceUtil.isMZMiniGame()) {
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    self.getAwardUglify();
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
                    self.getAwardUglify();
                },
                failFun: () => {
                    self.grp_center.mouseEnabled = true;
                }
            });
        }
    }

    private getAwardUglify() {
        let data = this.viewData_;
        if (data.type == 1) {//体力
            GameMgr.instance.updateBaseData(Prop.Power, GameData.getInstance().defaultConfigs.videoBuyPower);
        } else {//金币
            GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.videoBuyGold);
        }
        this.grp_center.mouseEnabled = true;
    }

    private onCloseUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
        EventMgr.getInstance().sendEvent(GameEvent.ENABLED_TOP, true);
        this.removeSelf();
    }

    private box_content: Laya.Box;
    private img_bg: Laya.Image;
    private btn_close: Laya.Button;
    private lab_title: Laya.Label;
    private lab_num: Laya.Label;
    private img_icon: Laya.Image;
    private btn_get: Laya.Button;

    /** type(1=体力；2=金币) */
    public viewData_: { type: number };

    protected childrenCreated() {
        super.childrenCreated();
        if (GameData.getInstance().videoOpen) {
            (<Laya.Image>this.btn_get.getChildByName("icon")).skin = "resource/assets/imgs/public/game_icon_4.png";
        } else {
            (<Laya.Image>this.btn_get.getChildByName("icon")).skin = "resource/assets/imgs/public/settlement_icon_5.png";
        }
    }

    /** 添加事件 */
    protected addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
        this.btn_get.on(Laya.Event.CLICK, this, this.onGetUglify);
    }

    protected initView() {
        if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) this.showInsertAd();
        this.showCloseBtn(this.btn_close);
        // this.showBanner();
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
        EventMgr.getInstance().sendEvent(GameEvent.ENABLED_TOP, false);
        // console.log("BuyPropScene >>> initView", this.viewData_);
        if (!this.viewData_) return;
        let data = this.viewData_;
        if (data.type == 1) {//体力
            this.img_bg.skin = "resource/assets/imgs/home/main/buy_baseboard_1.png";
            this.lab_title.text = "来点体力吧！";
            this.img_icon.skin = "resource/assets/imgs/public/mianinterface_icon_1.png";
            this.lab_num.text = "+" + GameData.getInstance().defaultConfigs.videoBuyPower;
        } else {//金币
            this.img_bg.skin = "resource/assets/imgs/home/main/buy_baseboard_2.png";
            this.lab_title.text = "来点金币吧！";
            this.img_icon.skin = "resource/assets/imgs/public/mianinterface_icon_2.png";
            this.lab_num.text = "+" + GameData.getInstance().defaultConfigs.videoBuyGold;
        }
    }
}