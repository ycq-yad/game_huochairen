import { GameData } from "../../../common/GameData";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { BrushScene } from "./brush/BrushScene";
import Type2GameLineToolMgr, { LinePoints } from "../../Type2GameLineToolMgr";
import SkinMgr from "../../../manager/SkinMgr";
import GameEvent from "../../../common/GameEvent";
import { MiniManeger } from "../../../minigame/MiniManeger";
import ConfigManager from "../../../manager/ConfigManager";
import { TipScene2 } from "./TipScene2";
import { ImageCheckUtil } from "../../../tool/ImageCheckUtil";
import AnimationManager from "../../../manager/AnimationManager";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameMgr from "../../../manager/GameMgr";

export class GameSceneType2 extends BaseSceneUISkin {
    className_key = "GameSceneType2";
    public constructor(data: { level: number }) {
        super();
        this.viewData_ = data;
        this.skin = "levels/type2/Type2GameScene.json";
    }

    private removeEvent() {
        this.btn_back.off(Laya.Event.CLICK, this, this.onBackUglify);
        this.btn_skin.off(Laya.Event.CLICK, this, this.onSkinUglify);
        this.btn_clear.off(Laya.Event.CLICK, this, this.onClearUglify);
        this.btn_tip.off(Laya.Event.CLICK, this, this.onTipUglify);
        this.btn_pass.off(Laya.Event.CLICK, this, this.onPassUglify);
        this.btn_record.off(Laya.Event.CLICK, this, this.onRecord);
        this.box_draw.off(Laya.Event.CLICK, this, this.onDraw);
        EventMgr.getInstance().removeEvent(GameEvent.USE_BRUSH, this, this.updateBrush);
        EventMgr.getInstance().removeEvent(GameEvent.Type2Next, this, this.onNextUglify);
        EventMgr.getInstance().removeEvent(GameEvent.Type2Restart, this, this.onRestartUglify);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.viewData_ = null;
        this.clearUglify();
        if (this.levelSke) {
            this.levelSke.offAll();
            this.levelSke.removeSelf();
            this.levelSke = null;
        }
        if (this.starSke) {
            this.starSke.offAll();
            this.starSke.removeSelf();
            this.starSke = null;
        }
        EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_BANNER, this.box_banner);
    }

    private initView() {
        this.mouseEnabled = true;
        if (!this.grpDraw) {
            this.grpDraw = new Laya.Sprite();
            this.img_baseBoard.addChild(this.grpDraw);
        }
        this.img_baseBoard.visible = false;
        this.grpDraw.visible = false;
        this.deltaY = (Laya.stage.height - 1044 - 60);
        this.deltaX = (Laya.stage.width - 1036) / 2;
        this.startGame();
        this.updateBrush();
    }

    private async startGame() {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            MiniManeger.instance.hideBanner();
            this.box_banner.visible = true;
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_BANNER, this.box_banner);
            GameMgr.instance.topBarIsShow = false;
            GameMgr.instance.bannerIsShow = false;
        }
        if (DeviceUtil.isTTMiniGame()) {
            MiniManeger.instance.hideBanner();
        }
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        this.clearUglify();
        await this.updateLevel();
        this.addTemplate();
        this.mouseEnabled = true;
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
        this.initRecord();
    }

    private initRecord() {
        if (DeviceUtil.isTTMiniGame()) {
            this.btn_record.visible = true;
            this.isRecord = false;
            if (GameData.getInstance().autoMakeVideo) {
                this.startGameRecord();
            } else {
                this.btn_record.skin = "resource/assets/imgs/public/lz1.png";
                (<Laya.Label>this.btn_record.getChildByName("lab")).text = "录制";
            }
        } else {
            this.btn_record.visible = false;
        }
    }

    private isRecord = false;
    private onRecord() {
        let lab = <Laya.Label>this.btn_record.getChildByName("lab");
        if (!this.isRecord) {
            this.startGameRecord();
        } else {
            this.stopGameRecord();
        }
    }

    private startGameRecord() {
        let lab = <Laya.Label>this.btn_record.getChildByName("lab");
        if (!this.isRecord) {//录制中
            this.isRecord = true;
            this.btn_record.skin = "resource/assets/imgs/public/lz2.png";
            lab.text = "录制中";
            MiniManeger.instance.startGameRecord({
                startFun: () => { },
                stopFun: () => {
                    this.isRecord = false;
                    lab.text = "录制";
                    this.btn_record.skin = "resource/assets/imgs/public/lz1.png";
                }
            });
        }
    }

    private stopGameRecord(force: boolean = false) {
        MiniManeger.instance.stopGameRecord(force);
    }

    /** 添加模板线段 */
    private addTemplate() {
        this.registPointsUglify();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownUglify);
    }

    /** 注册线段数据 */
    private registPointsUglify() {
        Type2GameLineToolMgr.getInstance().addLinesPoints([{ name: "templat_0", points: this.levelConf.points }]);
    }

    private async updateBrush() {
        let data = await SkinMgr.instance.getCurBrushDataUglify();
        if (!data) return;
        this.img_baseBoard.skin = "resource/assets/imgs/game/type2/brushs/" + data.icon + ".png";
        // this.img_baseBoard.skin = "resource/assets/imgs/game/type2/brushs/brush_brush_9.png";
    }

    private async updateLevel() {
        this.levelConf = await ConfigManager.instance.getLevelConf2(this.viewData_.level);
        console.log("关卡配置", this.levelConf);
        this.lab_level.text = "关卡" + this.viewData_.level;
        this.lab_title.text = this.levelConf.title;
        this.showLevelAni();
        // MiniManeger.instance.showBannerAd(null);
    }

    private showLevelAni() {
        let url = "resource/assets/imgs/levels/type2/" + this.viewData_.level + "/level" + this.viewData_.level + ".sk";
        if (!this.levelSke) {
            this.levelSke = new Laya.Skeleton();
            this.box_ani.addChild(this.levelSke);
            // this.box_ani.bgColor = "#6e4e4e";
        }
        this.levelSke.load(url, Laya.Handler.create(this, () => {
            if (!this.levelSke.player) return;
            this.levelSke.player.playbackRate = 1;
            this.levelSke.scale(this.levelConf.idle.scaleX, this.levelConf.idle.scaleY);
            this.levelSke.pos(this.levelConf.idle.x, this.levelConf.idle.y);
            this.box_ani.visible = true;
            this.levelSke.play(this.levelConf.idle.name, this.levelConf.idle.loop);
        }));
    }

    private showStarAni() {
        return new Promise(async resolve => {
            if (!this.starSke) {
                this.starSke = await AnimationManager.instance.creatBoonAnimation("resource/assets/imgs/levels/type2/type2_star.sk");
                if (!this.starSke) resolve();
                // this.starSke.scale(2, 2);
            }
            this.box_ani.addChild(this.starSke);
            this.starSke.pos(this.levelConf.star.x, this.levelConf.star.y);
            this.starSke.player.once(Laya.Event.STOPPED, this, () => {
                this.starSke.visible = false;
                this.starSke.removeSelf();
                resolve();
            });
            this.starSke.visible = true;
            this.starSke.play(0, false);
        });
    }

    private clearUglify() {
        this.btn_pass.visible = false;
        Laya.Tween.clearAll(this.btn_pass);
        this.btn_pass.scale(1, 1);
        this.btn_back.visible = this.btn_skin.visible = this.btn_tip.visible = this.btn_clear.visible = true;
        this.currDraw = null;
        this.grpDraw.removeChildren();
        this.currentAllPoints = [];
        this.img_baseBoard.visible = false;
        this.img_baseBoard.mask = null;
        this.timer.clearAll(this);
        this.lab_tip.text = "";
        this.isSuccess = false;
        this.isEnd = false;
    }

    private onMouseDownUglify(evt: Laya.Event) {
        // console.log(evt);
        if (evt.target != this.box_draw) return;
        this.timer.clearAll(this);
        if (!this.isSuccess) this.lab_tip.text = "绘图中";
        this.currentPoints = [];

        this.currentPoints.push(evt.stageX - this.deltaX);
        this.currentPoints.push(evt.stageY - this.deltaY);

        this.currDraw = new Laya.Sprite();
        this.grpDraw.addChild(this.currDraw);

        this.drawLinesUglify();
        this.img_baseBoard.visible = true;
        this.img_baseBoard.mask = this.grpDraw;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveUglify);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpUglify);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUpUglify);
    }

    private playSound: boolean = false;

    private onMouseMoveUglify(evt: Laya.Event) {
        if (evt.target != this.box_draw) return;
        if (!this.playSound) {
            this.playSound = true;
            SoundManager.instance.playEffect(SoundConst.Huaxian);
        }
        this.currentPoints.push(evt.stageX - this.deltaX);
        this.currentPoints.push(evt.stageY - this.deltaY);
        this.drawLinesUglify();
    }

    /** 绘制当前线段 */
    private drawLinesUglify() {
        this.grpDraw.graphics.clear();
        this.currDraw.graphics.clear();
        this.currDraw.graphics.drawLines(0, 0, this.currentPoints, this.curentLineColor, 10);
    }

    private onMouseUpUglify(evt: Laya.Event): void {
        // if (evt.target != this.box_draw) return;
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveUglify);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpUglify);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUpUglify);
        this.playSound = false;
        this.addCurrentLine();
    }

    /** 添加当前线段的数据 */
    private addCurrentLine() {
        let itemLine = new LinePoints();
        itemLine.name = "templat_" + this.currentAllPoints.length;
        itemLine.points = this.currentPoints;
        this.currentAllPoints.push(itemLine);
        console.log("添加当前线段的数据 >>>", this.currentAllPoints);
        if (this.isSuccess) {
            this.timer.once(2000, this, this.gameOverUglify, [3]);
        } else {
            this.lab_tip.text = "校验中";
            this.timer.once(2000, this, this.onCheckUglify);
        }
    }

    private isSuccess: boolean = false;
    private isEnd: boolean = false;

    private onCheckUglify() {
        let isSuc = Type2GameLineToolMgr.getInstance().checkAllLinesPoints(this.currentAllPoints, this.levelConf.perset);
        console.log("校验 >>>", this.currentAllPoints, isSuc);
        if (isSuc) {
            // 校验成功
            this.checkSucc();
        } else {
            this.isSuccess = false;
            this.lab_tip.text = "校验失败";
        }
    }

    private async checkSucc() {
        this.isSuccess = true;
        this.lab_tip.text = "校验成功";
        this.btn_back.visible = this.btn_skin.visible = this.btn_tip.visible = this.btn_clear.visible = false;
        this.btn_pass.visible = true;
        EffectUtil.showScaleFix(this.btn_pass, 1.2, 500, true);
        await this.showStarAni();
        this.levelSke.stop();
        this.levelSke.player.once(Laya.Event.STOPPED, this, () => {
            // this.levelSke.removeSelf();
            !this.isEnd && this.timer.once(2000, this, this.gameOverUglify, [2]);
        });
        this.levelSke.play(this.levelConf.succ.name, this.levelConf.succ.loop);
    }

    // private img_check: Laya.Image;
    // private async onCheck() {
    //     // Type2GameLineToolMgr.getInstance().test(this);

    //     let points: number[] = [];
    //     for (let i = 0, len = this.currentAllPoints.length; i < len; i++) {
    //         points = points.concat(this.currentAllPoints[i].points);
    //     }
    //     let pointsX: number[] = [];
    //     let pointsY: number[] = [];
    //     for (let i = 0, len = points.length; i < len; i += 2) {
    //         pointsX.push(points[i]);
    //         pointsY.push(points[i + 1]);
    //     }

    //     // let url = "resource/assets/imgs/levels/type2/" + this.viewData_.level + "/lv_" + this.viewData_.level + ".png";
    //     let url = "resource/assets/imgs/levels/type2/1/level_button_1.png";
    //     let imgData = await ImageCheckUtil.compressImg(url);
    //     console.log("imgData >>>", imgData);
    //     // let grayImgData = ImageCheckUtil.createGrayscale(imgData);
    //     // console.log("grayImgData >>>", grayImgData);
    //     // let hash = ImageCheckUtil.getHashFingerprint(grayImgData);
    //     // console.log("平均hash >>>", hash);
    //     // let ghash = ImageCheckUtil.getPHashFingerprint(grayImgData);
    //     // console.log("感知ghash >>>", ghash);
    //     // let chash = ImageCheckUtil.getColorHash(grayImgData);
    //     // console.log("颜色hash >>>", chash);

    //     // let url2 = "resource/assets/imgs/levels/type2/2/lv_2.png";
    //     let url2 = "resource/assets/imgs/levels/type2/1/level_button_2.png";
    //     let imgData2 = await ImageCheckUtil.compressImg(url2);
    //     console.log("imgData2 >>>", imgData2);
    //     // let grayImgData2 = ImageCheckUtil.createGrayscale(imgData2);
    //     // console.log("grayImgData2 >>>", grayImgData2);
    //     // let hash2 = ImageCheckUtil.getHashFingerprint(grayImgData2);
    //     // console.log("平均hash2 >>>", hash);
    //     // let ghash2 = ImageCheckUtil.getPHashFingerprint(grayImgData2);
    //     // console.log("感知ghash2 >>>", ghash2);
    //     // let chash2 = ImageCheckUtil.getColorHash(grayImgData2);
    //     // console.log("颜色hash2 >>>", chash2);

    //     // for (let index = 0; index < 10; index++) {
    //     //     chash[index] = 200
    //     // }
    //     // let chashcheck = ImageCheckUtil.cosineSimilarity(chash, chash2);
    //     // console.log("颜色分布校验>>>", chashcheck);
    //     let chashcheck2 = ImageCheckUtil.aaaaaa(imgData, imgData2);
    //     console.log("内容特征校验>>>", chashcheck2);

    //     console.log("draw", this.currDraw);
    //     Laya.stage.addChild(this.currDraw);
    //     let offsetXMin: number = Math.min(...pointsX);
    //     let offsetYMin: number = Math.min(...pointsY);
    //     let offsetXMax: number = Math.max(...pointsX);
    //     let offsetYMax: number = Math.max(...pointsY);
    //     let drawW = offsetXMax - offsetXMin;
    //     let drawH = offsetYMax - offsetYMin;
    //     console.log("offset", offsetXMin, offsetYMin, offsetXMax, offsetYMax, drawW, drawH);
    //     let bounds = this.currDraw.getSelfBounds();
    //     let texture1 = this.currDraw.drawToTexture(drawW, drawH, -bounds.x + this.currDraw.x, -bounds.y + this.currDraw.y);
    //     let img2 = new Laya.Image();
    //     img2.source = texture1;
    //     img2.pos(50, 800);
    //     img2.size(texture1.width, texture1.height);
    //     Laya.stage.addChild(img2);
    //     console.log("img2", img2);

    //     let chashcheck3 = await ImageCheckUtil.checkImgAndTextureByaaa("resource/assets/imgs/levels/type2/1/lv_1.png", texture1);
    //     console.log("内容特征校验>>>", chashcheck3);


    //     return;
    //     Laya.loader.load(url, Laya.Handler.create(this, (texture2) => {
    //         if (!this.img_check) this.img_check = new Laya.Image();
    //         // this.img_check.skin = url;
    //         this.img_check.source = texture2;
    //         console.log("img_check", this.img_check);
    //         // this.img_check.size(drawW, drawH);
    //         // let htmlCanvas: Laya.HTMLCanvas = this.currDraw.drawToCanvas(this.img_check.width, this.img_check.height, 0, 0);
    //         // let texture2 = this.img_check.source;
    //         // texture2.width = drawW;
    //         // texture2.height = drawH;
    //         // let texture2 = htmlCanvas.getTexture();
    //         // this.img_check.pos(500, 800);
    //         // Laya.stage.addChild(this.img_check);
    //         console.log("img1", this.img_check);
    //         let sp = new Laya.Sprite();
    //         texture2 = sp.graphics.drawImage(this.img_check.source, 8, 8).texture;


    //         console.log("draw", this.currDraw);
    //         Laya.stage.addChild(this.currDraw);
    //         let offsetXMin: number = Math.min(...pointsX);
    //         let offsetYMin: number = Math.min(...pointsY);
    //         let offsetXMax: number = Math.max(...pointsX);
    //         let offsetYMax: number = Math.max(...pointsY);
    //         let drawW = offsetXMax - offsetXMin;
    //         let drawH = offsetYMax - offsetYMin;
    //         console.log("offset", offsetXMin, offsetYMin, offsetXMax, offsetYMax, drawW, drawH);
    //         let bounds = this.currDraw.getSelfBounds();
    //         let texture1 = this.currDraw.drawToTexture(this.img_check.width, this.img_check.height, -bounds.x + this.currDraw.x, -bounds.y + this.currDraw.y);
    //         // let texture1 = this.currDraw.drawToTexture(this.img_check.width, this.img_check.height, offsetXMin, offsetYMin);
    //         let img2 = new Laya.Image();
    //         img2.source = texture1;
    //         img2.pos(50, 800);
    //         img2.size(texture1.width, texture1.height);
    //         Laya.stage.addChild(img2);
    //         console.log("img2", img2);



    //         console.log("111", texture1);
    //         console.log("222", texture2);
    //         let isSuc1 = Type2GameLineToolMgr.getInstance().searchTexture1(texture1, texture2);
    //         console.log("校验111 >>>", isSuc1);
    //         if (isSuc1 >= 80) {
    //             this.lab_tip.text = "校验成功";
    //             // 校验成功
    //             Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    //             EventMgr.getInstance().sendEvent(GameEvent.Type2GameOver, { level: this.viewData_.level });
    //         } else {
    //             this.lab_tip.text = "校验失败";
    //         }
    //     }));



    //     // let isSuc = Type2GameLineToolMgr.getInstance().checkAllLinesPoints(this.currentAllPoints, this.levelConf.perset);
    //     // console.log("校验 >>>", this.currentAllPoints, isSuc);
    //     // console.log("点 >>>", JSON.stringify(this.currentAllPoints[0].points));
    //     // if (isSuc) {
    //     //     this.lab_tip.text = "校验成功";
    //     //     // 校验成功
    //     //     Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    //     //     EventMgr.getInstance().sendEvent(GameEvent.Type2GameOver, { level: this.viewData_.level });
    //     // } else {
    //     //     this.lab_tip.text = "校验失败";
    //     // }
    // }

    private onNextUglify(data: { level: number }) {
        console.log("下一关 >>>", data);
        this.viewData_.level = data.level;
        this.startGame();
    }

    private onRestartUglify() {
        console.log("重玩");
        this.startGame();
    }

    private onBackUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.stopGameRecord(true);
        EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
        // if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
        //     EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_RANDOM, {
        //         backFun: () => {
        //             EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
        //         }
        //     });
        // } else {
        //     EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
        // }
    }

    private onSkinUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        ViewManager.getInstance().showView(BrushScene, { type: 2 });
    }

    private onClearUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        // this.checkSucc();
        this.clearUglify();
    }

    private onTipUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        if (GameData.getInstance().videoOpen) {
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    ViewManager.getInstance().showView(TipScene2, { level: this.viewData_.level });
                },
                failFun: () => {
                },
                errorFun: () => {
                }
            });
        } else {
            MiniManeger.instance.shareAppMessage({
                sucFun: () => {
                    ViewManager.getInstance().showView(TipScene2, { level: this.viewData_.level });
                },
                failFun: () => {
                }
            });
        }
    }

    private onPassUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.gameOverUglify(1);
    }

    private gameOverUglify(id) {
        console.log("游戏结束", id);
        this.isEnd = true;
        this.timer.clearAll(this);
        this.mouseEnabled = false;
        this.stopGameRecord(true);
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownUglify);
        EventMgr.getInstance().sendEvent(GameEvent.Type2GameOver, { level: this.viewData_.level });
        this.box_ani.visible = false;
        GameInfoManager.getInstance().saveLevelDataById(this.viewData_.level, this.currentAllPoints);
    }

    private onDraw() {
        //null Function
    }

    public viewData_: { level: number };

    private img_bg: Laya.Image;
    private box_game: Laya.Box;
    private box_ani: Laya.Box;
    private box_draw: Laya.Box;
    private img_drawbg: Laya.Image;
    private img_baseBoard: Laya.Image;
    private img_tipbox: Laya.Image;
    private lab_tip: Laya.Label;
    private lab_title: Laya.Label;
    private box_pop: Laya.Box;
    private btn_back: Laya.Button;
    private lab_level: Laya.Label;
    private btn_skin: Laya.Button;
    private btn_clear: Laya.Button;
    private btn_tip: Laya.Button;
    private btn_pass: Laya.Button;
    private btn_record: Laya.Button;
    private levelSke: Laya.Skeleton;
    private starSke: Laya.Skeleton;
    private box_banner: Laya.Box;

    private levelConf: any;
    private grpDraw: Laya.Sprite;
    /** 当前的一个线段 */
    private currentPoints: number[];
    /** 当前的画线 */
    private currDraw: Laya.Sprite;
    /** 当前的所有线段 */
    private currentAllPoints: LinePoints[] = [];
    /** 当前绘制线颜色 */
    private curentLineColor: string = "#ff0000";
    private deltaY: number = 0;
    private deltaX: number = 0;

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        if (DeviceUtil.getIsIphoneX()) {
            this.btn_back.top += GameData.getInstance().fullScreenOffSet;
            this.lab_level.top += GameData.getInstance().fullScreenOffSet;
        }
        if (GameData.getInstance().isConVersion) {
            this.btn_tip.visible = this.btn_skin.visible = false;
        }
        if (GameData.getInstance().videoOpen) {
            (<Laya.Image>this.btn_tip.getChildByName("icon")).skin = "resource/assets/imgs/public/game_icon_4.png";
        } else {
            (<Laya.Image>this.btn_tip.getChildByName("icon")).skin = "resource/assets/imgs/public/settlement_icon_5.png";
        }
        if (DeviceUtil.isTTMiniGame()) {
            this.img_tipbox.bottom = 80;
            this.btn_clear.bottom = 150;
            this.btn_tip.bottom = 150;
        }
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            // this.initView();
            this.addEvent();
        }
    }

    public setData(data) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    private addEvent() {
        this.btn_back.on(Laya.Event.CLICK, this, this.onBackUglify);
        this.btn_skin.on(Laya.Event.CLICK, this, this.onSkinUglify);
        this.btn_clear.on(Laya.Event.CLICK, this, this.onClearUglify);
        this.btn_tip.on(Laya.Event.CLICK, this, this.onTipUglify);
        this.btn_pass.on(Laya.Event.CLICK, this, this.onPassUglify);
        this.btn_record.on(Laya.Event.CLICK, this, this.onRecord);
        this.box_draw.on(Laya.Event.CLICK, this, this.onDraw);
        EventMgr.getInstance().addEvent(GameEvent.USE_BRUSH, this, this.updateBrush);
        EventMgr.getInstance().addEvent(GameEvent.Type2Next, this, this.onNextUglify);
        EventMgr.getInstance().addEvent(GameEvent.Type2Restart, this, this.onRestartUglify);
    }
}