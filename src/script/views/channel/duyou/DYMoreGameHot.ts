import { DYMoreGameHotItem } from "./DYMoreGameHotItem";
import DYChannelMgr, { MoreGameInfo } from "../../../manager/channel/DYChannelMgr";
import GameEvent from "../../../common/GameEvent";

/**
 * 嘟游渠道 更多游戏-热门
 */
export class DYMoreGameHot extends BaseSceneUISkin {
    public className_key = "DYMoreGameHot";

    public constructor(data: { showFun?: Function, backFun?: Function }) {
        super();
        this.viewData_ = data;
        this.name = "DYMoreGameHot";
        this.skin = "skins/channel/duyou/DYMoreGameHot.json";
    }

    public viewData_: { showFun?: Function, backFun?: Function };
    // 必备组件
    private img_bg: Laya.Image;
    private btn_back: Laya.Button;
    private panel_list: Laya.Panel;
    private panel_game1: Laya.Panel;
    private panel_game2: Laya.Panel;

    private autoMove: boolean = true;

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
        this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
        this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
    }

    /** 初始化页面 */
    private initView() {
        this.viewData_.showFun && this.viewData_.showFun();
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_EXIT_BTN);
        this.btn_back.visible = false;
        Laya.timer.once(3000, this, () => {
            this.btn_back.visible = true;
        });

        let nXStart = 0;
        let nYStart = 0;
        let nCount = 2;
        let aryInfo: number[] = [];
        aryInfo = DYChannelMgr.instance.getRandomIndex(18);
        this.panel_game1.removeChildren();
        this.panel_game1.y = 0;
        for (let i = 0; i < aryInfo.length; ++i) {
            let item: DYMoreGameHotItem = <DYMoreGameHotItem>this.panel_game1.getChildAt(i);
            if (item) {
                item.setData(aryInfo[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameHotItem", DYMoreGameHotItem);
                item.setData(aryInfo[i]);
                let nAddX = Math.floor(i % nCount);
                let nYAdd = Math.floor(i / nCount);
                item.x = nXStart + item.width * nAddX + 50 * nAddX;
                item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                this.panel_game1.addChild(item);
                this.panel_game1.height = item.y + item.height + 10;
            }
        }
        this.panel_game2.y = this.panel_game1.height;
        this.panel_game2.removeChildren();
        for (let i = 0; i < aryInfo.length; ++i) {
            let item: DYMoreGameHotItem = <DYMoreGameHotItem>this.panel_game2.getChildAt(i);
            if (item) {
                item.setData(aryInfo[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameHotItem", DYMoreGameHotItem);
                item.setData(aryInfo[i]);
                let nAddX = Math.floor(i % nCount);
                let nYAdd = Math.floor(i / nCount);
                item.x = nXStart + item.width * nAddX + 50 * nAddX;
                item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                this.panel_game2.addChild(item);
                this.panel_game2.height = item.y + item.height + 10;
            }
        }

        this.autoMove = true;
        Laya.timer.frameLoop(1, this, this.onMove);
        // 每次使用后刷新下游戏列表
        DYChannelMgr.instance.refreshGameList();
    }

    private onMove() {
        if (!this.autoMove) return;
        let nHight = this.panel_game1.height;
        this.panel_game2.y -= 2;
        this.panel_game1.y -= 2;
        if (this.panel_game1.y <= -nHight) {
            this.panel_game1.y = this.panel_game2.y + nHight;
        }
        if (this.panel_game2.y <= -nHight) {
            this.panel_game2.y = this.panel_game1.y + nHight;
        }
    }

    private nStartY: number = 0;
    private onMousedown(evt: Laya.Event) {
        this.autoMove = false;
        this.nStartY = evt.currentTarget.mouseY;
        let self = this;
        let mouseMove = (evt1: Laya.Event) => {
            let nYTemp = self.nStartY - evt1.currentTarget.mouseY;
            self.panel_game1.y -= nYTemp;
            self.panel_game2.y -= nYTemp;
            self.nStartY = evt1.currentTarget.mouseY;

            if (self.panel_game1.y >= 0 && self.panel_game2.y >= 0) {
                self.panel_game1.y = 0;
                self.panel_game2.y = self.panel_game1.height;
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
        this.removeSelf();
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
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