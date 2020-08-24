import DYChannelMgr, { MoreGameInfo } from "../../../manager/channel/DYChannelMgr";
import { DYMyGameListItem } from "./DYMyGameListItem";
import GameEvent from "../../../common/GameEvent";

/**
 * 嘟游渠道 更多游戏-我的小游戏列表
 */
export class DYMyGameList extends BaseSceneUISkin {
    public className_key = "DYMyGameList";

    public constructor(data: { showFun?: Function, backFun?: Function }) {
        super();
        this.viewData_ = data;
        this.name = "DYMyGameList";
        this.skin = "skins/channel/duyou/DYMyGameList.json";
    }

    public viewData_: { showFun?: Function, backFun?: Function };
    // 必备组件
    private panel_list: Laya.Panel;
    private lab_title: Laya.Label;
    private btn_back: Laya.Button;

    private itemH: number = 200;
    private maxCount: number;
    private dataArr: Array<MoreGameInfo>;
    private autoMove: boolean = true;
    private speed: number = 2;
    private dir: number = -1;

    protected childrenCreated() {
        super.childrenCreated();
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
        this.addEvent();
        this.initView();
    }

    /** 设置数据 */
    public setData(data: { showFun?: Function, backFun?: Function }) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.addEvent();
            this.initView();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
    }

    /** 初始化页面 */
    private initView() {
        this.viewData_.showFun && this.viewData_.showFun();
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_EXIT_BTN);
        let canuseHeight: number = Laya.stage.height - 280 - 20;
        this.panel_list.height = canuseHeight;
        this.maxCount = Math.ceil(canuseHeight / this.itemH);
        this.dataArr = DYChannelMgr.instance.moreGameList;
        console.log(this.dataArr);
        //初始化条目
        let didnex: number = 0;
        this.panel_list.removeChildren();
        for (let i: number = 0; i < this.maxCount + 1; i++) {
            let item: DYMyGameListItem = Laya.Pool.getItemByClass("DYMyGameListItem", DYMyGameListItem);
            item.index = didnex;
            item.zOrder = 0;
            item.setData(this.dataArr[item.index]);
            didnex++;
            if (didnex >= this.dataArr.length) {
                didnex = 0;
            }
            item.y = i * this.itemH;
            this.panel_list.addChild(item);
        }

        this.autoMove = true;
        Laya.timer.frameLoop(1, this, this.onMove);
        // 每次使用后刷新下游戏列表
        DYChannelMgr.instance.refreshGameList();
    }

    private onMove(dt): void {
        if (!this.autoMove) return;
        for (let i: number = 0; i < this.panel_list.numChildren; i++) {
            let item: DYMyGameListItem = <DYMyGameListItem>this.panel_list.getChildAt(i);
            item.y += this.speed * this.dir;
        }
        this.refresh();
    }

    private refresh() {
        let startItem: DYMyGameListItem = <DYMyGameListItem>this.panel_list.getChildAt(0);
        let lastItem: DYMyGameListItem = <DYMyGameListItem>this.panel_list.getChildAt(this.maxCount);
        if (this.dir == -1) {//向上
            if (startItem.y < -this.itemH) {
                startItem.y = lastItem.y + lastItem.height;
                startItem.zOrder = lastItem.zOrder + 1;
                startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                startItem.setData(this.dataArr[startItem.index]);
            }
        } else {//向下
            if (lastItem.y > this.maxCount * this.itemH) {
                lastItem.y = startItem.y - startItem.height;
                lastItem.zOrder = startItem.zOrder - 1;
                lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                lastItem.setData(this.dataArr[lastItem.index]);
            }
        }
    }

    private getUpIndexforCurIndex(index: number): number {
        if (index >= this.dataArr.length || index < 0) return 0;
        return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
    }

    private getDownIndexforCurIndex(index: number): number {
        if (index >= this.dataArr.length || index < 0) return 0;
        return index + 1 < this.dataArr.length ? index + 1 : 0;
    }

    private stx: number;
    private sty: number;
    private onMousedown(evt: Laya.Event) {
        this.autoMove = false;
        this.stx = evt.stageX;
        this.sty = evt.stageY;

        let mouseMove = (evt1: Laya.Event) => {
            let dy: number = evt1.stageY - this.sty;
            for (let i: number = 0; i < this.panel_list.numChildren; i++) {
                let item: DYMyGameListItem = <DYMyGameListItem>this.panel_list.getChildAt(i);
                item.y += dy;
            }
            this.sty = evt1.stageY;
            this.dir = dy > 0 ? 1 : -1;
            this.refresh();
        }
        let mouseUp = (evt1: Laya.Event) => {
            this.panel_list.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.off(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.off(Laya.Event.MOUSE_OUT, this, mouseUp);
            this.dir = -1;
            this.autoMove = true;
        }
        this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
        this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
        this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
    }

    private onBack() {
        this.viewData_.backFun && this.viewData_.backFun();
        this.removeSelf();
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.viewData_ = null;
        Laya.timer.clearAll(this);
        this.panel_list.removeChildren();
    }
}