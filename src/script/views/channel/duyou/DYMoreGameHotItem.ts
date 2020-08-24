import DYChannelMgr, { MoreGameInfo } from "../../../manager/channel/DYChannelMgr";
import GameEvent from "../../../common/GameEvent";

/**
 * 嘟游渠道 更多游戏-热门游戏盒子Item
 */
export class DYMoreGameHotItem extends Laya.Box {
    public className_key = "DYMoreGameHotItem";

    public constructor(data_?: number) {
        super();
        this.data = data_;
        this.size(465, 538);
        this.createUI();
    }

    // 必备组件
    private img_db: Laya.Image;
    private img_icon: Laya.Image;
    private lab_name: Laya.Label;

    /** 数据源 */
    public data: number;
    private gameInfo: MoreGameInfo;

    private createUI() {
        this.img_db = new Laya.Image();
        this.img_db.sizeGrid = "15,15,95,15";
        this.img_db.skin = "resource/assets/channel/duyou/box_baseboard_1.png";
        this.img_db.size(465, 538);
        this.addChild(this.img_db);

        this.img_icon = new Laya.Image();
        this.img_icon.centerX = 0;
        this.img_icon.y = 12;
        this.img_icon.size(440, 440);
        this.addChild(this.img_icon);

        this.lab_name = new Laya.Label();
        this.lab_name.font = "SimHei";
        this.lab_name.fontSize = 45;
        this.lab_name.color = "#ffffff";
        this.lab_name.centerX = 0;
        this.lab_name.y = 475;
        this.addChild(this.lab_name);
    }

    public setData(data_: number) {
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
        let data = this.data;
        if (data < 0 || data >= DYChannelMgr.instance.moreGameList.length) {
            data = DYChannelMgr.instance.moreGameList.length - 1;
            if (data < 0) return;
        }
        let gameInfo = DYChannelMgr.instance.moreGameList[data];
        this.lab_name.text = gameInfo.name;
        this.img_icon.skin = gameInfo.ad_img;
        this.gameInfo = gameInfo;
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
        if (!this.gameInfo) return;
        let data = this.gameInfo;
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

    /**
     * 移除事件
     */
    private removeEvent() {
        // this.off(Laya.Event.ADDED, this, this.onAddStage);
        this.off(Laya.Event.REMOVED, this, this.onRemoved);
        this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        this.removeEvent();
        this.data = null;
        this.gameInfo = null;
        Laya.Pool.recover("DYMoreGameHotItem", this);
    }
}