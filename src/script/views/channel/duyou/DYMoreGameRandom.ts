import { DYMoreGameRandomItem } from "./DYMoreGameRandomItem";
import DYChannelMgr, { MoreGameInfo } from "../../../manager/channel/DYChannelMgr";
import GameEvent from "../../../common/GameEvent";

/**
 * 嘟游渠道 更多游戏-随机
 */
export class DYMoreGameRandom extends BaseSceneUISkin {
    public className_key = "DYMoreGameRandom";

    public constructor(data: { showFun?: Function, backFun?: Function, continueFun?: Function, first?: boolean }) {
        super();
        this.viewData_ = data;
        this.name = "DYMoreGameRandom";
        this.skin = "skins/channel/duyou/DYMoreGameRandom.json";
    }

    public viewData_: { showFun?: Function, backFun?: Function, continueFun?: Function, first?: boolean };
    // 必备组件
    private img_bg: Laya.Image;
    private btn_back: Laya.Button;
    private panel_list: Laya.Panel;
    private box_game1: Laya.Box;
    private box_game2: Laya.Box;
    private btn_continue: Laya.Button;
    private btn_random: Laya.Button;

    private autoMove: boolean = true;

    protected childrenCreated() {
        super.childrenCreated();
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
        this.btn_random.visible = false;
        this.addEvent();
        this.initView(this.viewData_.first);
    }

    /** 设置数据 */
    public setData(data: { showFun?: Function, backFun?: Function, continueFun?: Function, first?: boolean }) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.addEvent();
            this.initView(data.first);
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
        this.btn_continue.on(Laya.Event.CLICK, this, this.onContinue);
        this.btn_random.on(Laya.Event.CLICK, this, this.onRandom);
        this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
    }

    /** 初始化页面 */
    private initView(init: boolean) {
        this.viewData_.showFun && this.viewData_.showFun();
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_EXIT_BTN);
        if (!init) {
            this.btn_random.visible = true;
            Laya.timer.once(5000, this, () => {
                this.btn_random.visible = false;
            });
        }
        let nXStart = 0;
        let nYStart = 0;
        let nCount = 3;
        let aryInfo: number[] = [];
        aryInfo = DYChannelMgr.instance.getRandomIndex(18);
        this.box_game1.removeChildren();
        this.box_game1.y = 0;
        for (let i = 0; i < aryInfo.length; ++i) {
            let item: DYMoreGameRandomItem = <DYMoreGameRandomItem>this.box_game1.getChildAt(i);
            if (item) {
                item.setData(aryInfo[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameRandomItem", DYMoreGameRandomItem);
                item.setData(aryInfo[i]);
                let nAddX = Math.floor(i % nCount);
                let nYAdd = Math.floor(i / nCount);
                item.x = nXStart + item.width * nAddX + 30 * nAddX;
                item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                this.box_game1.addChild(item);
                this.box_game1.height = item.y + item.height + 10;
            }
        }
        this.box_game2.y = this.box_game1.height;
        this.box_game2.removeChildren();
        for (let i = 0; i < aryInfo.length; ++i) {
            let item: DYMoreGameRandomItem = <DYMoreGameRandomItem>this.box_game2.getChildAt(i);
            if (item) {
                item.setData(aryInfo[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameRandomItem", DYMoreGameRandomItem);
                item.setData(aryInfo[i]);
                let nAddX = Math.floor(i % nCount);
                let nYAdd = Math.floor(i / nCount);
                item.x = nXStart + item.width * nAddX + 30 * nAddX;
                item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                this.box_game2.addChild(item);
                this.box_game2.height = item.y + item.height + 10;
            }
        }

        this.autoMove = true;
        Laya.timer.frameLoop(1, this, this.onMove);
        // 每次使用后刷新下游戏列表
        DYChannelMgr.instance.refreshGameList();
    }

    private onMove() {
        if (!this.autoMove) return;
        let nHight = this.box_game1.height;
        this.box_game2.y -= 2;
        this.box_game1.y -= 2;
        if (this.box_game1.y <= -nHight) {
            this.box_game1.y = this.box_game2.y + nHight;
        }
        if (this.box_game2.y <= -nHight) {
            this.box_game2.y = this.box_game1.y + nHight;
        }
    }

    private nStartY: number = 0;
    private onMousedown(evt: Laya.Event) {
        this.autoMove = false;
        this.nStartY = evt.currentTarget.mouseY;
        let self = this;
        let mouseMove = (evt1: Laya.Event) => {
            let nYTemp = self.nStartY - evt1.currentTarget.mouseY;
            self.box_game1.y -= nYTemp;
            self.box_game2.y -= nYTemp;
            self.nStartY = evt1.currentTarget.mouseY;

            if (self.box_game1.y >= 0 && self.box_game2.y >= 0) {
                self.box_game1.y = 0;
                self.box_game2.y = self.box_game1.height;
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

    private onBack() {
        this.viewData_.backFun && this.viewData_.backFun();
        // this.removeSelf();
    }

    private onContinue() {
        this.viewData_.continueFun && this.viewData_.continueFun();
        this.removeSelf();
    }

    private onRandom() {
        let dataArr = DYChannelMgr.instance.moreGameList;
        if (dataArr.length <= 0) return;
        let index = Utils.getRandom(0, dataArr.length - 1);
        let data = dataArr[index];
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
            }
        };
        wx.navigateToMiniProgram(obj);
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
        this.btn_continue.off(Laya.Event.CLICK, this, this.onContinue);
        this.btn_random.off(Laya.Event.CLICK, this, this.onRandom);
        this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.viewData_ = null;
        Laya.timer.clearAll(this);
    }
}