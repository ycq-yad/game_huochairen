import DYChannelMgr, { MoreGameInfo } from "../../../manager/channel/DYChannelMgr";
import GameEvent from "../../../common/GameEvent";
import GameMgr from "../../../manager/GameMgr";

/**
 * 嘟游渠道 更多游戏-轮播banner
 */
export class DYMoreGameBanner extends BaseSceneUISkin {
    public className_key = "DYMoreGameBanner";

    public constructor() {
        super();
        this.name = "DYMoreGameBanner";
        this.skin = "skins/channel/duyou/DYMoreGameBanner.json";
    }

    // 必备组件
    private panel_list: Laya.Panel;
    private box_view1: Laya.Box;
    private box_view2: Laya.Box;
    private itemW: number = 250;

    private autoMove: boolean = true;

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {

    }

    /** 添加到父节点 */
    public onAddStage() {
        if (this.isCreate) {
            this.addEvent();
            this.initView();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
    }

    /** 初始化页面 */
    private initView() {
        // GameMgr.instance.topBarIsShow = true;
        // GameMgr.instance.bannerIsShow = true;
        let dataArr = DYChannelMgr.instance.moreGameList;
        this.box_view1.x = 0;
        this.box_view1.removeChildren();
        let len = dataArr.length
        for (let i = 0; i < len; i++) {
            let item: DYMoreGameBannerItem = <DYMoreGameBannerItem>this.box_view1.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameBannerItem", DYMoreGameBannerItem);
                item.setData(dataArr[i]);
                item.x = (this.itemW + 20) * i;
                this.box_view1.addChild(item);
            }
        }
        this.box_view1.width = (this.itemW + 20) * len;

        this.box_view2.x = this.box_view1.width;
        this.box_view2.removeChildren();
        for (let i = 0; i < len; i++) {
            let item: DYMoreGameBannerItem = <DYMoreGameBannerItem>this.box_view2.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameBannerItem", DYMoreGameBannerItem);
                item.setData(dataArr[i]);
                item.x = (this.itemW + 20) * i;
                this.box_view2.addChild(item);
            }
        }
        this.box_view2.width = (this.itemW + 20) * len;

        if (len) {
            this.autoMove = true;
            Laya.timer.frameLoop(1, this, this.onMove);
        }
        // // 每次使用后刷新下游戏列表
        // DYChannelMgr.instance.refreshGameList();
    }

    private onMove() {
        if (!this.autoMove) return;
        let nWidth = this.box_view1.width;
        this.box_view2.x -= 2;
        this.box_view1.x -= 2;
        if (this.box_view1.x <= -nWidth) {
            this.box_view1.x = this.box_view2.x + nWidth;
        }
        if (this.box_view2.x <= -nWidth) {
            this.box_view2.x = this.box_view1.x + nWidth;
        }
    }

    private nStartX: number = 0;
    private onMousedown(evt: Laya.Event) {
        this.autoMove = false;
        this.nStartX = evt.currentTarget.mouseX;
        let self = this;
        let mouseMove = (evt1: Laya.Event) => {
            let nXTemp = self.nStartX - evt1.currentTarget.mouseX;
            self.box_view1.x -= nXTemp;
            self.box_view2.x -= nXTemp;
            self.nStartX = evt1.currentTarget.mouseX;

            if (self.box_view1.x >= 0 && self.box_view2.x >= 0) {
                self.box_view1.x = 0;
                self.box_view2.x = self.box_view1.width;
            }
        }
        let mouseUp = (evt1: Laya.Event) => {
            this.panel_list.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.off(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.off(Laya.Event.MOUSE_OUT, this, mouseUp);
            this.autoMove = true;
        }

        this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
        this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
        this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        Laya.timer.clearAll(this);
    }
}

/**
 * 嘟游渠道 更多游戏-轮播bannerItem
 */
class DYMoreGameBannerItem extends Laya.Box {
    public className_key = "DYMoreGameBannerItem";

    public constructor(data_?: MoreGameInfo) {
        super();
        this.data = data_;
        this.size(250, 250);
        this.createUI();
    }

    // 必备组件
    // private img_db: Laya.Image;
    private img_icon: Laya.Image;
    // private lab_name: Laya.Label;

    /** 数据源 */
    public data: MoreGameInfo;

    private createUI() {
        // this.img_db = new Laya.Image();
        // this.img_db.sizeGrid = "15,15,95,15";
        // this.img_db.skin = "resource/assets/channel/duyou/box_baseboard_1.png";
        // this.img_db.size(320, 390);
        // this.addChild(this.img_db);

        this.img_icon = new Laya.Image();
        this.img_icon.centerX = 0;
        this.img_icon.y = 0;
        this.img_icon.size(250, 250);
        this.addChild(this.img_icon);

        // this.lab_name = new Laya.Label();
        // this.lab_name.font = "SimHei";
        // this.lab_name.fontSize = 40;
        // this.lab_name.color = "#ffffff";
        // this.lab_name.centerX = 0;
        // this.lab_name.y = 325;
        // this.addChild(this.lab_name);
    }

    public setData(data_: MoreGameInfo) {
        this.data = data_;
        this.addEvent();
        this.initView();
    }

    /** 添加事件 */
    private addEvent() {
        this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.on(Laya.Event.REMOVED, this, this.onRemoved);
    }

    /** 初始化页面 */
    private initView() {
        if (!this.data) return;
        let data = this.data;
        // this.lab_name.text = gameInfo.name;
        this.img_icon.skin = data.ad_img;
        // this.lab_name.text = Utils.cutOutStr1(data.title, 5);
    }

    private onMouseDown() {
        let startTime = (new Date()).getTime();
        let mouseUp = (evt: Laya.Event) => {
            let endTime = (new Date()).getTime();
            if (endTime - startTime <= 150) {
                this.onPlay();
            }
            this.off(Laya.Event.MOUSE_UP, this, mouseUp);
            this.off(Laya.Event.MOUSE_OUT, this, mouseOut);
        }
        let mouseOut = (evt: Laya.Event) => {
        }
        this.on(Laya.Event.MOUSE_UP, this, mouseUp);
        this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
    }

    private onPlay() {
        if (!this.data) return;
        let data = this.data;
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
                EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, true);
            }
        };
        wx.navigateToMiniProgram(obj);
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.off(Laya.Event.REMOVED, this, this.onRemoved);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        this.removeEvent();
        this.data = null;
        Laya.Pool.recover("DYMoreGameBannerItem", this);
    }
}