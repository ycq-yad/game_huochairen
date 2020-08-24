import { localData } from "../../../common/GameDataType";
import GameMgr from "../../../manager/GameMgr";

export class SignItem extends BaseSceneUISkin {
    className_key = "SignItem";
    public constructor(data: localData.SignData) {
        super();
        this.viewData_ = data;
        this.skin = "skins/uiView/sign/SignItem.json";
    }

    public onRemoved() {
        super.onRemoved();
        this.viewData_ = null;
    }

    /** 设置数据 */
    public setData(data: localData.SignData) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    private initView() {
        if (!this.viewData_) return;
        // console.log("SignItem >>> initView", this.viewData_);
        let data = this.viewData_;
        this.img_signed.visible = data.isSigned;
        this.lab_day.text = data.name;
        this.box_award1.visible = this.box_award2.visible = false;
        this.box_can.visible = data.canSign;
        if (data.id < 7) {
            this.size(255, 290);
            this.box_can.size(210, 290);
            this.img_bg.skin = data.canSign ? "resource/assets/imgs/home/sign/sign_baseboard_4.png" : "resource/assets/imgs/home/sign/sign_baseboard_3.png";
            this.box_award1.visible = true;
            let img_icon = <Laya.Image>this.box_award1.getChildByName("img_icon");
            img_icon.skin = GameMgr.instance.getIconUrlById(data.reward[0].type);
            (<Laya.Label>this.box_award1.getChildByName("lab_num")).text = "+" + data.reward[0].num;
        } else {
            this.size(790, 290);
            this.box_can.size(550, 290);
            this.img_bg.skin = data.canSign ? "resource/assets/imgs/home/sign/sign_baseboard_6.png" : "resource/assets/imgs/home/sign/sign_baseboard_5.png";
            this.box_award2.visible = true;
            data.reward.forEach((v, i) => {
                let img_icon = <Laya.Image>this.box_award2.getChildByName("img_icon" + (i + 1));
                let lab_num = <Laya.Label>this.box_award2.getChildByName("lab_num" + (i + 1));
                img_icon.skin = GameMgr.instance.getIconUrlById(v.type);
                lab_num.text = "+" + v.num;
            });
        }
    }

    private img_bg: Laya.Image;
    private box_award1: Laya.Box;
    private box_award2: Laya.Box;
    private box_can: Laya.Box;
    private lab_day: Laya.Label;
    private img_signed: Laya.Image;

    public viewData_: localData.SignData;

    public adaptationStage() {

    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
        }
    }
}