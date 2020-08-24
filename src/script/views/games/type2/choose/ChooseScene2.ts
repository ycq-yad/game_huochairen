import { PopBaseScene } from "../../../PopBaseScene";
import { localData } from "../../../../common/GameDataType";
import GameEvent from "../../../../common/GameEvent";
import ChooseItem2 from "./ChooseItem2";
import SoundManager, { SoundConst } from "../../../../manager/SoundManager";
import PatternMgr from "../../../../manager/PatternMgr";
import { BrushScene } from "../brush/BrushScene";
import PowerMgr from "../../../../manager/PowerMgr";
import { GameData } from "../../../../common/GameData";
import { MiniManeger } from "../../../../minigame/MiniManeger";

export class ChooseScene2 extends PopBaseScene {
    className_key = "ChooseScene2";
    protected showEnterType: BasePopAnimationEnterType = null;
    constructor() {
        super();
        this.skin = "skins/game/type2/choose/ChooseView2.json";
    }

    protected removeEvent() {
        this.btn_last.off(Laya.Event.CLICK, this, this.onLast);
        this.btn_next.off(Laya.Event.CLICK, this, this.onNext);
        this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
        this.btn_skin.off(Laya.Event.CLICK, this, this.onSkinUglify);
        this.box_level.off(Laya.Event.MOUSE_DOWN, this, this.mouseDownUglify);
        this.box_level.off(Laya.Event.MOUSE_UP, this, this.mouseUpUglify);
        this.box_level.off(Laya.Event.MOUSE_OUT, this, this.mouseUpUglify);
        EventMgr.getInstance().removeEvent(GameEvent.Type2Select, this, this.enterGameUglify);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        // this.hideBanner();
        this.levelData = null;
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
        if (!this.levelData) {
            this.levelData = await PatternMgr.instance.getLevelData2Uglify();
            this.maxPage = Math.ceil(this.levelData.length / 10);
            for (let i = 0; i < this.maxPage; i++) {
                let box: Laya.Box = <Laya.Box>this.box_level.getChildAt(i);
                if (!box) {
                    box = new Laya.Box();
                    box.size(975, 397);
                    box.x = (975 + 20) * i;
                    this.box_level.addChild(box);
                }
            }
            // console.log("ChooseView >>>>>>> initView", this.levelData);
        }
        let start = (this.curPage - 1) * 10;
        let dataArr = this.levelData.slice(start, start + 10);
        // console.log("ChooseView >>>>>>> initView", this.curPage, dataArr);
        let box: Laya.Box = <Laya.Box>this.box_level.getChildAt(this.curPage - 1);
        for (let i = 0, len = dataArr.length; i < len; i++) {
            let data: localData.LevelData2 = dataArr[i];
            let item = <ChooseItem2>box.getChildAt(i);
            if (item) {
                item.setData(data);
            } else {
                item = new ChooseItem2(data);
                item.x = (i % 5) * (179 + 20);
                item.y = Math.floor(i / 5) * (180 + 37);
                box.addChild(item);
            }
        }
        this.refreshBtnUglify();
        this.showLevelAniUglify();
    }

    private refreshBtnUglify() {
        this.btn_last.disabled = this.curPage == 1;
        this.btn_next.disabled = this.curPage == this.maxPage;
    }

    private showLevelAniUglify() {
        let lv = 1 + 10 * (this.curPage - 1);
        let url = "resource/assets/imgs/levels/type2/" + lv + "/level" + lv + ".sk";
        if (!this.levelSke) {
            this.levelSke = new Laya.Skeleton();
            this.box_ani.addChild(this.levelSke);
            // this.box_ani.bgColor = "#6e4e4e";
        }
        this.levelSke.load(url, Laya.Handler.create(this, () => {
            if (!this.levelSke.player) return;
            this.levelSke.player.playbackRate = 1;
            this.levelSke.scale(1, 1);
            this.levelSke.pos(390, 330);
            this.box_ani.visible = true;
            this.levelSke.play(0, true);
        }));
    }

    private onLast() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.listAni(1);
    }

    private onNext() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.listAni(-1);
    }

    private onCloseUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    private onSkinUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        ResUtil.getIntance().loadGroups(["skin2"], () => {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            ViewManager.getInstance().showView(BrushScene, { type: 1 });
        });
    }

    private mouseDownUglify(evt) {
        if (this.isPlaying || this.maxPage == 1) return;
        this.box_level.on(Laya.Event.MOUSE_UP, this, this.mouseUpUglify);
        this.box_level.on(Laya.Event.MOUSE_OUT, this, this.mouseUpUglify);
        this.startX = evt.stageX;
    }

    private mouseUpUglify(evt) {
        if (this.isPlaying || !this.startX) return;
        this.box_level.off(Laya.Event.MOUSE_UP, this, this.mouseUpUglify);
        this.box_level.off(Laya.Event.MOUSE_OUT, this, this.mouseUpUglify);
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
        this.isPlaying = false;
        this.enableView(true);
    }

    /** 单个动画
     *  @param index 列表项下标
     *  @param direction 为1：列表右移；为-1：列表左移
     */
    private singleAni(index: number, direction: number, time: number) {
        return new Promise(resolve => {
            let item = <Laya.Box>this.box_level.getChildAt(index);
            let pos = { x: item.x + this.distance * direction };
            Laya.Tween.to(item, pos, time, null, Laya.Handler.create(this, () => {
                resolve();
            }));
        });
    }

    private enterGameUglify(data: number) {
        PowerMgr.instance.changePowerUglify({
            count: -GameData.getInstance().defaultConfigs.powerCost,
            success: () => {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                ResUtil.getIntance().loadGroups(["game2", "skin2"], () => {
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                    EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "GameSceneType2", data: { level: data } });
                    this.removeSelf();
                });
            }
        });
    }

    private img_bg: Laya.Image;
    private box_ani: Laya.Box;
    private box_level: Laya.Box;
    private btn_last: Laya.Button;
    private btn_next: Laya.Button;
    private btn_close: Laya.Button;
    private btn_skin: Laya.Button;
    private levelSke: Laya.Skeleton;

    private levelData: localData.LevelData2[];
    private curPage: number = 1;
    private maxPage: number = 3;
    private isPlaying: boolean = false;
    private startX: number;
    private distance: number = 975 + 20;

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.box_level.scrollRect = new Laya.Rectangle(0, 0, 975, 397);
        this.box_ani.scrollRect = new Laya.Rectangle(0, 0, 770, 650);
    }

    protected addEvent() {
        this.btn_last.on(Laya.Event.CLICK, this, this.onLast);
        this.btn_next.on(Laya.Event.CLICK, this, this.onNext);
        this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
        this.btn_skin.on(Laya.Event.CLICK, this, this.onSkinUglify);
        // this.box_level.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        EventMgr.getInstance().addEvent(GameEvent.Type2Select, this, this.enterGameUglify);
    }

    protected initView() {
        if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) this.showInsertAd();
        if (GameData.getInstance().isConVersion) {
            this.btn_skin.visible = false;
        }
        // this.showBanner();
        this.refreshUIUglify();
    }
}