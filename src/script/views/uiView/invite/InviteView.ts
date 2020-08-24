import { PopBaseScene } from "../../PopBaseScene";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { InviteItem } from "./InviteItem";
import GameEvent from "../../../common/GameEvent";
import { MiniManeger } from "../../../minigame/MiniManeger";
import InviteManager from "../../../manager/InviteManager";

export default class InviteView extends PopBaseScene {
    public className_key = "InviteView";

    private box_content: Laya.Box;
    private btn_close: Laya.Button;
    private panel_invite: Laya.Panel;
    private btn_invite: Laya.Button;

    constructor() {
        super();
        this.skin = "skins/uiView/invite/InviteView.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.panel_invite.removeChildren();
        this.panel_invite.vScrollBarSkin = "";
        this.panel_invite.elasticEnabled = true;
        this.panel_invite.vScrollBar.elasticDistance = 100;
        this.panel_invite.vScrollBar.elasticBackTime = 100;
    }

    /** 添加事件 */
    protected addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_invite.on(Laya.Event.CLICK, this, this.onInvite);
        EventMgr.getInstance().addEvent(GameEvent.REFRESH_INVITE, this, this.refreshUI);
    }

    protected initView() {
        this.showCloseBtn(this.btn_close);
        this.getInvitePlayer();
    }

    /** 获取邀请玩家数据 */
    private getInvitePlayer() {
        InviteManager.getInstance().selectInfo((code) => {
            if (code == '0') {
                this.refreshUI();
            }
        }, this);
    }

    private async refreshUI() {
        let dataArr = await InviteManager.getInstance().getInviteAwardData();
        console.log("InviteView >>>>>>> refreshUI", dataArr);
        for (let i = 0, len = dataArr.length; i < len; i++) {
            let item = <InviteItem>this.panel_invite.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = new InviteItem(dataArr[i]);
                item.x = 0;
                item.y = (138 + 20) * i;
                this.panel_invite.addChild(item);
            }
        }
    }

    private onInvite() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        MiniManeger.instance.shareAppMessage();
    }

    private onClose() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    /** 移除事件 */
    protected removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_invite.off(Laya.Event.CLICK, this, this.onInvite);
        EventMgr.getInstance().removeEvent(GameEvent.REFRESH_INVITE, this, this.refreshUI);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }
}