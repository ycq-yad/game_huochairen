import { PopBaseScene } from "../../PopBaseScene";
import { localData } from "../../../common/GameDataType";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import PowerMgr from "../../../manager/PowerMgr";
import { PowerItem } from "./PowerItem";
import GameEvent from "../../../common/GameEvent";
import { MiniManeger } from "../../../minigame/MiniManeger";

export class PowerScene extends PopBaseScene {
    className_key = "PowerScene";
    public constructor() {
        super();
        this.skin = "skins/uiView/power/PowerView.json";
    }

    /** 移除事件 */
    protected removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
        EventMgr.getInstance().removeEvent(GameEvent.REFRESH_FREE_POWER, this, this.refreshUIUglify);
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

    private async refreshUIUglify() {
        let dataArr: Array<localData.FreePowerData> = await PowerMgr.instance.getFreePowerDataUglify();
        this.viewData_ = dataArr;
        let count = dataArr.length;
        for (let i = 0; i < count; i++) {
            let item = <PowerItem>this.panel_free.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = new PowerItem(dataArr[i]);
                item.y = (27 + 138) * i;
                this.panel_free.addChild(item);
            }
        }
    }

    private onCloseUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    private box_content: Laya.Box;
    private btn_close: Laya.Button;
    private panel_free: Laya.Panel;

    protected childrenCreated() {
        super.childrenCreated();
        this.panel_free.vScrollBarSkin = "";
    }

    /** 添加事件 */
    protected addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
        EventMgr.getInstance().addEvent(GameEvent.REFRESH_FREE_POWER, this, this.refreshUIUglify);
    }

    protected initView() {
        if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) this.showInsertAd();
        this.showCloseBtn(this.btn_close);
        // this.showBanner();
        this.refreshUIUglify();
    }
}