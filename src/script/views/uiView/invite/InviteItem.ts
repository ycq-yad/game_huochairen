import { localData } from "../../../common/GameDataType";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { GameData } from "../../../common/GameData";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";
import GameEvent from "../../../common/GameEvent";
import { MiniManeger } from "../../../minigame/MiniManeger";
import { PopManager } from "../../../manager/PopManager";
import { AwardScene } from "../pop/AwardScene";
import { Prop } from "../../../manager/GameMgr";

export class InviteItem extends BaseSceneUISkin {
    public className_key = "InviteItem";

    private lab_index: Laya.Label;
    private img_null: Laya.Image;
    private img_head: Laya.Image;
    private img_headMask: Laya.Image;
    private box_award1: Laya.Box;
    private btn_get: Laya.Button;
    private img_geted: Laya.Image;
    private lab_tip: Laya.Label;

    public viewData_: localData.InviteData

    constructor(_data: localData.InviteData) {
        super();
        this.viewData_ = _data;
        this.skin = "skins/uiView/invite/InviteItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {

    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 设置数据 */
    public setData(data: localData.InviteData) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
        this.img_null.on(Laya.Event.CLICK, this, this.onInvite);
    }

    /** 初始化页面 */
    private initView() {
        if (!this.viewData_) return;
        let data = this.viewData_;
        this.btn_get.visible = this.lab_tip.visible = this.img_geted.visible = false;
        this.img_headMask.visible = false;
        this.lab_index.text = data.id + "";
        let lab: Laya.Label = <Laya.Label>this.box_award1.getChildAt(2);
        lab.text = "X" + data.reward[0].num;
        if (data.head && data.head != "") {
            this.img_head.skin = data.head;
            this.img_head.mask = this.img_headMask;
        } else {
            this.img_head.skin = "resource/assets/imgs/home/invite/invitation_headportrait.png";
        }

        if (data.lingqued) {//已领取
            this.img_geted.visible = true;
            this.img_null.visible = false;
            this.img_head.visible = true;
        } else {
            if (data.canLingqu) {//可领取
                this.btn_get.visible = true;
                this.img_null.visible = false;
                this.img_head.visible = true;
            } else {
                this.lab_tip.visible = true;
                this.img_null.visible = true;
                this.img_head.visible = false;
            }
        }
    }

    private onGet() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        PopManager.instance.showPopView({
            className: AwardScene,
            data: {
                type: 1,
                data: {
                    id: Prop.Power,
                    num: this.viewData_.reward[0].num,
                    fun: () => {
                        GameData.getInstance().invite.inviteId.push(this.viewData_.id);
                        GameInfoManager.getInstance().saveInfo(GameConst.INVITE_INFO);
                        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_INVITE);
                    }
                }
            }
        });
    }

    private onInvite() {
        MiniManeger.instance.shareAppMessage();
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
        this.img_null.off(Laya.Event.CLICK, this, this.onInvite);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.viewData_ = null;
        this.removeEvent();
    }
}