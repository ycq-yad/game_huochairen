import AnimationManager from "../../../manager/AnimationManager";
import { DYMoreGameDrawerItem } from "./DYMoreGameDrawerItem";
import DYChannelMgr from "../../../manager/channel/DYChannelMgr";

/**
 * 嘟游渠道 更多游戏-抽屉
 */
export class DYMoreGameDrawer extends BaseSceneUISkin {
    public className_key = "DYMoreGameDrawer";

    public constructor() {
        super();
        this.name = "DYMoreGameDrawer";
        this.skin = "skins/channel/duyou/DYMoreGameDrawer.json";
    }

    // 必备组件
    private box_db: Laya.Box;
    private box_content: Laya.Box;
    private btn_switch: Laya.Button;
    private img_tips_p: Laya.Image;
    private panel_list: Laya.Panel;
    private box_game1: Laya.Box;
    private box_game2: Laya.Box;

    private isShow: boolean = false;
    private isPlaying: boolean = false;
    private autoMove: boolean = true;

    protected childrenCreated() {
        super.childrenCreated();
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
        this.box_db.width = Laya.stage.width;
        this.box_db.height = Laya.stage.height;
        this.mouseThrough = true;
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
        this.btn_switch.on(Laya.Event.CLICK, this, this.onSwitch);
        this.box_db.on(Laya.Event.CLICK, this, this.onSwitch);
        this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
    }

    /** 初始化页面 */
    private initView() {
        this.box_db.visible = false;
        this.isPlaying = false;
        this.btn_switch.skin = "resource/assets/channel/duyou/game_button_2.png";
        this.box_content.right = -713;
        this.isShow = false;
        this.img_tips_p.visible = true;
        AnimationManager.instance.tipPointShake(this.img_tips_p, true);
    }

    private onSwitch() {
        // console.log("onSwitch", this.isPlaying);
        if (this.isPlaying) return;
        this.isShow = !this.isShow;
        this.switchShow(this.isShow);
    }

    public switchShow(show: boolean, time = 300) {
        if (this.isPlaying) return;
        this.isShow = show;
        this.isPlaying = true;
        if (this.isShow) {
            this.box_db.visible = true;
            Laya.Tween.to(this.box_content, { right: 0 }, time, null, Laya.Handler.create(this, () => {
                this.initList();
                this.btn_switch.skin = "resource/assets/channel/duyou/game_button_3.png";
                this.img_tips_p.visible = false;
                this.isPlaying = false;
            }));
        } else {
            Laya.Tween.to(this.box_content, { right: -713 }, time, null, Laya.Handler.create(this, () => {
                Laya.timer.clearAll(this);
                this.btn_switch.skin = "resource/assets/channel/duyou/game_button_2.png";
                this.box_db.visible = false;
                this.img_tips_p.visible = true;
                this.isPlaying = false;
            }));
        }
    }

    /** 初始化显示列表 */
    private initList() {
        let nXStart = 0;
        let nYStart = 0;
        let nCount = 3;
        let aryInfo: number[] = [];
        aryInfo = DYChannelMgr.instance.getRandomIndex(12);
        this.box_game1.removeChildren();
        this.box_game1.y = 0;
        for (let i = 0; i < aryInfo.length; ++i) {
            let item: DYMoreGameDrawerItem = <DYMoreGameDrawerItem>this.box_game1.getChildAt(i);
            if (item) {
                item.setData(aryInfo[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameDrawerItem", DYMoreGameDrawerItem);
                item.setData(aryInfo[i]);
                let nAddX = Math.floor(i % nCount);
                let nYAdd = Math.floor(i / nCount);
                item.x = nXStart + item.width * nAddX + 15 * nAddX;
                item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                this.box_game1.addChild(item);
                this.box_game1.height = item.y + item.height + 10;
            }
        }
        this.box_game2.y = this.box_game1.height;
        this.box_game2.removeChildren();
        for (let i = 0; i < aryInfo.length; ++i) {
            let item: DYMoreGameDrawerItem = <DYMoreGameDrawerItem>this.box_game2.getChildAt(i);
            if (item) {
                item.setData(aryInfo[i]);
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameDrawerItem", DYMoreGameDrawerItem);
                item.setData(aryInfo[i]);
                let nAddX = Math.floor(i % nCount);
                let nYAdd = Math.floor(i / nCount);
                item.x = nXStart + item.width * nAddX + 15 * nAddX;
                item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                this.box_game2.addChild(item);
                this.box_game2.height = item.y + item.height + 10;
            }
        }

        if (aryInfo.length) {
            this.autoMove = true;
            Laya.timer.frameLoop(1, this, this.onMove);
        }
        // 每次使用后刷新下游戏列表
        DYChannelMgr.instance.refreshGameList();
    }

    // private getRandomIndex(nMax: number): number[] {
    //     if (!DYChannelMgr.instance.moreGameList || DYChannelMgr.instance.moreGameList.length <= 0) {
    //         return [];
    //     }
    //     let nRandom = Utils.random(0, DYChannelMgr.instance.moreGameList.length - 1);
    //     let nCount = DYChannelMgr.instance.moreGameList.length % 3;
    //     if (nCount > 0) {
    //         nCount = 3 - nCount;
    //     }

    //     nCount = DYChannelMgr.instance.moreGameList.length + nCount;
    //     if (nCount <= nMax) {
    //         nCount = nMax;
    //     }
    //     let aryInfo: number[] = [];
    //     for (let i = 0; i < nCount; ++i) {
    //         aryInfo.push(nRandom);
    //         nRandom += 1;
    //         if (nRandom >= DYChannelMgr.instance.moreGameList.length) {
    //             nRandom = 0;
    //         }
    //     }
    //     return aryInfo;
    // }

    private onMove() {
        if (!this.autoMove) return;
        let nHight = this.box_game1.height;
        this.box_game2.y -= 1.5;
        this.box_game1.y -= 1.5;
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

    /**
     * 移除事件
     */
    private removeEvent() {
        this.btn_switch.off(Laya.Event.CLICK, this, this.onSwitch);
        this.box_db.off(Laya.Event.CLICK, this, this.onSwitch);
        this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.isPlaying = false;
        this.isShow = false;
        Laya.timer.clearAll(this);
        AnimationManager.instance.tipPointShake(this.img_tips_p, false);
    }
}