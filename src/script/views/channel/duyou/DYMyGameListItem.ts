import DYChannelMgr, { MoreGameInfo } from "../../../manager/channel/DYChannelMgr";
import GameEvent from "../../../common/GameEvent";

/**
 * 嘟游渠道 更多游戏-我的小游戏列表Item
 */
export class DYMyGameListItem extends BaseSceneUISkin {
    public className_key = "DYMyGameListItem";

    public constructor(data_?: MoreGameInfo) {
        super();
        this.viewData_ = data_;
        this.skin = "skins/channel/duyou/DYMyGameListItem.json";
    }

    // 必备组件
    private img_icon: Laya.Image;
    private lab_title: Laya.Label;
    private img_hot: Laya.Image;
    private lab_desc: Laya.Label;
    private btn_play: Laya.Button;

    public index: number = 0;
    public viewData_: MoreGameInfo;

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
    public setData(data: MoreGameInfo) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_play.on(Laya.Event.CLICK, this, this.onPlay);
    }

    /** 初始化页面 */
    private initView() {
        if (!this.viewData_) return;
        let data = this.viewData_;
        this.img_icon.skin = data.ad_img;
        this.lab_title.text = data.name;
        this.lab_desc.text = Math.ceil(Math.random() * 100000) + "人正在玩";
        this.img_hot.visible = Math.random() > 0.5 ? true : false;
    }

    private onPlay() {
        if (!this.viewData_) return;
        let data = this.viewData_;
        DYChannelMgr.instance.clickGame(data.ad_id);
        let obj = {
            appId: data.ad_appid,
            path: data.url,
            success: () => {
                console.log("navigateToMiniProgram success!");
                DYChannelMgr.instance.toGame(data.ad_id);
            },
            fail: (e) => {
                console.log("navigateToMiniProgram fail", e);
                EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, false);
            }
        };
        wx.navigateToMiniProgram(obj);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_play.off(Laya.Event.CLICK, this, this.onPlay);
    }

    /** 当从父节点移除时候 */
    public onRemoved() {
        super.onRemoved();
        this.viewData_ = null;
        this.removeEvent();
        Laya.Pool.recover("DYMyGameListItem", this);
    }
}