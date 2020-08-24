import { localData } from "../../../common/GameDataType";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import GameEvent from "../../../common/GameEvent";
import PowerMgr from "../../../manager/PowerMgr";
import { GameData } from "../../../common/GameData";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";
import { PopManager } from "../../../manager/PopManager";
import { AwardScene } from "../pop/AwardScene";
import { Prop } from "../../../manager/GameMgr";

export class PowerItem extends BaseSceneUISkin {
    className_key = "PowerItem";
    public constructor(data: localData.FreePowerData) {
        super();
        this.viewData_ = data;
        this.skin = "skins/uiView/power/PowerItem.json";
    }

    private removeEvent() {
        this.btn_get.off(Laya.Event.CLICK, this, this.onGetUglify);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.viewData_ = null;
    }

    /** 设置数据 */
    public setData(data: localData.FreePowerData) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    private initView() {
        if (!this.viewData_) return;
        // console.log("PowerItem >>> initView", this.viewData_);
        let data = this.viewData_;
        this.img_icon.skin = data.id == 1 ? "resource/assets/imgs/home/main/mianinterface_icon_3.png" : "resource/assets/imgs/home/power/" + data.icon + ".png";
        this.lab_name.text = data.name;
        this.lab_num.text = "+" + data.rewardNum;
        this.btn_get.visible = false;
        this.img_geted.visible = this.lab_tip.visible = false;
        if (data.isGeted) {
            if (data.id == 1) {
                this.lab_tip.visible = true;
            } else {
                this.img_geted.visible = true;
            }
        } else {
            this.btn_get.visible = true;
            let desc = <Laya.Label>this.btn_get.getChildByName("desc");
            if (data.canGet) {
                this.btn_get.skin = "resource/assets/imgs/public/free_button_1.png";
                desc.text = "领取";
                this.btn_get.mouseEnabled = true;
            } else {
                this.btn_get.skin = "resource/assets/imgs/public/free_button_2.png";
                desc.text = "未完成";
                this.btn_get.mouseEnabled = false;
            }
        }
    }

    private onGetUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        PopManager.instance.showPopView({
            className: AwardScene,
            data: {
                type: 1,
                data: {
                    id: Prop.Power,
                    num: this.viewData_.rewardNum,
                    fun: () => {
                        GameData.getInstance().freePower[this.viewData_.id] = true;
                        GameInfoManager.getInstance().saveInfo(GameConst.FREE_INFO);
                        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_FREE_POWER);
                    }
                }
            }
        });
    }

    private img_bg: Laya.Image;
    private img_icon: Laya.Image;
    private lab_name: Laya.Label;
    private lab_num: Laya.Label;
    private btn_get: Laya.Button;
    private img_geted: Laya.Image;
    private lab_tip: Laya.Label;

    public viewData_: localData.FreePowerData;

    public adaptationStage() {

    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    private addEvent() {
        this.btn_get.on(Laya.Event.CLICK, this, this.onGetUglify);
    }
}