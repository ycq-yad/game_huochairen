import { PopBaseScene } from "../../../PopBaseScene";
import { localData } from "../../../../common/GameDataType";
import GameEvent from "../../../../common/GameEvent";
import SkinMgr from "../../../../manager/SkinMgr";
import BrushItem from "./BrushItem";
import { GameData } from "../../../../common/GameData";
import SoundManager, { SoundConst } from "../../../../manager/SoundManager";
import GameMgr, { Prop } from "../../../../manager/GameMgr";
import { ArrayUtil } from "../../../../tool/ArrayUtil";
import { MiniManeger } from "../../../../minigame/MiniManeger";
import { PageRadio } from "./PageRadio";

export class BrushScene extends PopBaseScene {
    className_key = "BrushScene";
    protected showEnterType: BasePopAnimationEnterType = null;
    constructor(data: { type: number }) {
        super();
        this.viewData_ = data;
        this.skin = "skins/game/type2/brush/BrushView.json";
    }

    protected removeEvent() {
        this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
        this.btn_gold.off(Laya.Event.CLICK, this, this.onGoldUglify);
        this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
        this.box_brush.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.box_brush.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.box_brush.off(Laya.Event.MOUSE_OUT, this, this.mouseUp);
        EventMgr.getInstance().removeEvent(GameEvent.USE_BRUSH, this, this.useBrush);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        if (this.viewData_.type == 1) {
            // this.hideBanner();
            EventMgr.getInstance().sendEvent(GameEvent.CHANGE_POS, { _x: 30, _y: 30 });
        } else {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                this.hideBanner();
                GameMgr.instance.topBarIsShow = false;
                GameMgr.instance.bannerIsShow = false;
            }
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
        }
        this.brushData = null;
        this.viewData_ = null;
    }

    protected async initView() {
        if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) this.showInsertAd();
        if (this.viewData_.type == 1) {

        } else if (this.viewData_.type == 2) {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                this.showBanner();
                GameMgr.instance.topBarIsShow = true;
                GameMgr.instance.bannerIsShow = true;
            }
        }
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
        EventMgr.getInstance().sendEvent(GameEvent.CHANGE_POS, { _x: 30, _y: 30 });
        this.lab_test.visible = false;
        this.img_baseBoard.visible = true;
        this.img_baseBoard.mask = this.lab_test;
        let lab = <Laya.Label>this.btn_gold.getChildByName("num");
        lab.text = "+" + GameData.getInstance().defaultConfigs.videoBuyGold;
        await this.refreshUIUglify();
        this.refreshPageUglify();
        this.updateBrushUglify();
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

    private async updateBrushUglify() {
        let data = await SkinMgr.instance.getCurBrushDataUglify();
        if (!data) return;
        this.img_baseBoard.skin = "resource/assets/imgs/game/type2/brushs/" + data.icon + ".png";
    }

    private async refreshUIUglify() {
        this.brushData = await SkinMgr.instance.getBrushDataUglify();
        // console.log("BrushScene >>>>>>> initView", this.brushData);
        this.maxPage = Math.ceil(this.brushData.length / 9);
        for (let i = 0; i < this.maxPage; i++) {
            let box: Laya.Box = <Laya.Box>this.box_brush.getChildAt(i);
            if (!box) {
                box = new Laya.Box();
                box.size(773, 700);
                box.x = (773 + 20) * i;
                this.box_brush.addChild(box);
            }
        }
        let start = (this.curPage - 1) * 9;
        this.curPageArr = this.brushData.slice(start, start + 9);
        this.weightArr = [];
        this.lockArr = [];
        let box: Laya.Box = <Laya.Box>this.box_brush.getChildAt(this.curPage - 1);
        for (let i = 0, len = this.curPageArr.length; i < len; i++) {
            let data: localData.BrushData = this.curPageArr[i];
            if (!data.unlock) {
                this.weightArr.push(data.weight);
                this.lockArr.push(data);
            }
            let item = <BrushItem>box.getChildAt(i);
            if (item) {
                item.setData(data);
            } else {
                item = new BrushItem(data);
                item.x = (i % 3) * (209 + 73);
                item.y = Math.floor(i / 3) * (230 + 5);
                box.addChild(item);
            }
        }
        this.refreshBtnUglify();
    }

    private refreshBtnUglify() {
        if (this.lockArr.length) {
            this.btn_comp.visible = false;
            this.btn_get.visible = true;
            let lab = <Laya.Label>this.btn_get.getChildByName("num");
            lab.text = GameData.getInstance().defaultConfigs.unlockCost2 + "";
            this.price = GameData.getInstance().defaultConfigs.unlockCost2;
        } else {
            this.btn_comp.visible = true;
            this.btn_get.visible = false;
            this.btn_comp.disabled = true;
        }
    }

    private refreshPageUglify() {
        if (!this.com_page) {
            this.com_page = new PageRadio(this.maxPage, 30);
            this.com_page.centerX = 0;
            this.com_page.y = 1350;
            this.box_content.addChild(this.com_page);
        }
        this.com_page.selectIndex = this.curPage - 1;
    }

    private onGet() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        if (this.price <= GameData.getInstance().playerData.gold) {
            GameMgr.instance.updateBaseData(Prop.Gold, -this.price);
            this.enableView(false);
            let randIndex = ArrayUtil.getIndexByWeight(this.weightArr);
            this.aniArr = [];
            console.log("随机到的画笔 = ", this.lockArr[randIndex]);
            let len = this.curPageArr.length;
            for (let i = 0; i < len - 1; i++) {
                let index1 = this.getIndexByRandom();
                this.aniArr.push(index1);
            }
            this.aniArr.push(randIndex);
            console.log("this.aniArr ->", this.aniArr);
            this.playAnimation().then(() => {
                this.aniArr = [];
                let data = this.lockArr[randIndex];
                SkinMgr.instance.unlockBrushUglify(data.id);
                this.refreshUIUglify();
                this.enableView(true);
            });
        } else {
            TipsManager.getInstance().showDefaultTips("金币不足");
        }
    }

    private playAnimation(): Promise<any> {
        return new Promise<any>((resolve) => {
            let index = 0;
            let len = this.aniArr.length;
            let box = <Laya.Box>this.box_brush.getChildAt(this.curPage - 1);
            (<BrushItem>box.getChildAt(this.aniArr[index])).showOrHideMask(true);
            Laya.timer.loop(150, this.box_brush, () => {
                (<BrushItem>box.getChildAt(this.aniArr[index])).showOrHideMask(false);
                index++;
                if (index > len - 1) {
                    Laya.timer.clearAll(this.box_brush);
                    resolve();
                } else {
                    (<BrushItem>box.getChildAt(this.aniArr[index])).showOrHideMask(true);
                }
            });
        });
    }

    private getIndexByRandom(): number {
        let len = this.curPageArr.length;
        let index = Math.floor(Math.random() * len);
        let isHas: boolean = false;
        for (let i = 0; i < this.aniArr.length; i++) {
            if (index == this.aniArr[i]) {
                isHas = true;
                break;
            }
        }
        if (!isHas) {
            return index;
        } else {
            return this.getIndexByRandom();
        }
    }

    private mouseDown(evt) {
        if (this.isPlaying || this.maxPage == 1) return;
        this.box_brush.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.box_brush.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
        this.startX = evt.stageX;
    }

    private mouseUp(evt) {
        if (this.isPlaying || !this.startX) return;
        this.box_brush.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.box_brush.off(Laya.Event.MOUSE_OUT, this, this.mouseUp);
        let a: number = evt.stageX - this.startX;
        this.startX = null;
        if (a > 0 && Math.abs(a) >= 100) {//向右滑动
            if (this.curPage == 1) return;
            this.listAni(1);
        } else if (a < 0 && Math.abs(a) >= 100) {//向左滑动
            if (this.curPage == this.maxPage) return;
            this.listAni(-1);
        }
    }

    /** 列表动画 
	 * @param direction 为1：列表右移；为-1：列表左移
	 */
    private async listAni(direction: number, time = 300) {
        this.isPlaying = true;
        this.enableView(false);
        this.curPage += direction * -1;
        await this.refreshUIUglify();
        await Promise.all(Array(...Array(this.maxPage)).map((v, i) => {
            return this.singleAni(i, direction, time);
        }));
        this.refreshPageUglify();
        this.isPlaying = false;
        this.enableView(true);
    }

    /** 单个动画
     *  @param index 列表项下标
     *  @param direction 为1：列表右移；为-1：列表左移
     */
    private singleAni(index: number, direction: number, time: number) {
        return new Promise(resolve => {
            let item = <Laya.Box>this.box_brush.getChildAt(index);
            let pos = { x: item.x + this.distance * direction };
            Laya.Tween.to(item, pos, time, null, Laya.Handler.create(this, () => {
                resolve();
            }));
        });
    }

    private useBrush() {
        this.refreshUIUglify();
        this.updateBrushUglify();
    }

    private onGoldUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.enableView(false);
        if (GameData.getInstance().videoOpen) {
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.videoBuyGold);
                    this.enableView(true);
                },
                failFun: () => {
                    this.enableView(true);
                },
                errorFun: () => {
                    this.enableView(true);
                }
            });
        } else {
            MiniManeger.instance.shareAppMessage({
                sucFun: () => {
                    GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.videoBuyGold);
                    this.enableView(true);
                },
                failFun: () => {
                    this.enableView(true);
                }
            });
        }
    }

    private onCloseUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    /** type=1 选关界面进入 type=2 游戏界面进入 */
    public viewData_: { type: number };

    private img_bg: Laya.Image;
    private box_content: Laya.Box;
    private box_draw: Laya.Box;
    private img_drawbg: Laya.Image;
    private img_baseBoard: Laya.Image;
    private lab_test: Laya.Label;
    private box_brush: Laya.Box;
    private btn_gold: Laya.Button;
    private btn_get: Laya.Button;
    private btn_comp: Laya.Button;
    private btn_close: Laya.Button;
    private com_page: PageRadio;

    private brushData: any;
    private curPage: number = 1;
    private maxPage: number = 3;
    private aniArr: Array<number> = [];
    private lockArr: Array<localData.BrushData> = [];
    private curPageArr: Array<localData.BrushData> = [];
    private weightArr: Array<number> = [];
    private isPlaying: boolean = false;
    private startX: number;
    private distance: number = 773 + 20;
    private price: number = 100;

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.box_brush.scrollRect = new Laya.Rectangle(0, 0, 773, 700);
        if (GameData.getInstance().videoOpen) {
            (<Laya.Image>this.btn_gold.getChildByName("icon")).skin = "resource/assets/imgs/public/game_icon_4.png";
        } else {
            (<Laya.Image>this.btn_gold.getChildByName("icon")).skin = "resource/assets/imgs/public/settlement_icon_5.png";
        }
    }

    protected addEvent() {
        this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
        this.btn_gold.on(Laya.Event.CLICK, this, this.onGoldUglify);
        this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
        this.box_brush.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        EventMgr.getInstance().addEvent(GameEvent.USE_BRUSH, this, this.useBrush);
    }
}