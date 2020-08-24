import { PopBaseScene } from "../../PopBaseScene";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { GameData } from "../../../common/GameData";
import GameMgr from "../../../manager/GameMgr";

export class TipScene2 extends PopBaseScene {
    className_key = "TipScene2";
    public constructor(data: { level: number }) {
        super();
        this.viewData_ = data;
        this.skin = "skins/game/type2/TipView2.json";
    }

    public removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            this.hideBanner();
            GameMgr.instance.bannerIsShow = false;
        }
        this.viewData_ = null;
    }

    private onCloseUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    public viewData_: { level: number };

    private btn_close: Laya.Button;
    private img_tips: Laya.Image;

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
    }

    protected initView() {
        if (!this.viewData_) return;
        let data = this.viewData_;
        this.img_tips.skin = "resource/assets/imgs/levels/type2/" + data.level + "/lv_" + data.level + ".png";
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            this.showBanner();
            GameMgr.instance.bannerIsShow = true;
        }
    }
}