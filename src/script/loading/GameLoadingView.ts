import GameEvent from "../common/GameEvent";

/**
 * GamePreLoadingView
 */
export default class GameLoadingView extends BaseSceneUISkin implements ILoadingView {
    public className_key = "GameLoadingView";/** 背景图 */
    private img_bg: Laya.Image;
    /** Icon */
    private img_icon: Laya.Image;
    /** 进度条底板 */
    private img_jdt_db: Laya.Image;
    /** 进度条 */
    private img_jdt: Laya.Image;

    private showAniUglify: Laya.Skeleton;

    private box_loadAni: Laya.Box;
    private loadAni: Laya.Skeleton;

    constructor() {
        super();

        this.width = Laya.stage.width;
        this.height = Laya.stage.height;

        this.img_bg = new Laya.Image();
        this.img_bg.skin = "resource/assets/loading/loading_background_1.png";
        this.addChild(this.img_bg);
        DeviceUtil.adaptationBgImg(this.img_bg);

        // this.img_icon = new Laya.Image();
        // this.img_icon.skin = "resource/assets/loading/loading_people.png";
        // this.img_icon.centerX = -100;
        // this.img_icon.centerY = -380;
        // this.addChild(this.img_icon);

        this.img_jdt_db = new Laya.Image();
        this.img_jdt_db.skin = "resource/assets/loading/loading_baseboard_1.png";
        this.img_jdt_db.sizeGrid = "0,26,0,26";
        this.img_jdt_db.width = 882;
        this.img_jdt_db.height = 54;
        this.img_jdt_db.centerX = 0;
        this.img_jdt_db.centerY = 0;
        this.addChild(this.img_jdt_db);

        this.img_jdt = new Laya.Image();
        this.img_jdt.skin = "resource/assets/loading/loading_baseboard_2.png";
        this.img_jdt.sizeGrid = "0,20,0,20";
        this.img_jdt.width = 500;
        this.img_jdt.height = 40;
        this.img_jdt.x = 5;
        this.img_jdt.centerY = 0;
        this.img_jdt_db.addChild(this.img_jdt);

        let lab = new Laya.Label();
        lab.fontSize = 50;
        lab.font = "SimHei";
        lab.bold = true;
        lab.centerX = 0;
        lab.bottom = -90;
        lab.text = "我来了，我来了……";
        this.img_jdt_db.addChild(lab);

        this.box_loadAni = new Laya.Box();
        this.box_loadAni.width = 150;
        this.box_loadAni.height = 200;
        this.box_loadAni.pos(0, -200);
        // this.box_loadAni.bgColor = "#eeeeee";
        this.img_jdt_db.addChild(this.box_loadAni);

        this.loadAni = new Laya.Skeleton();
        this.loadAni.load("resource/assets/loading/loading.sk", Laya.Handler.create(this, () => {
            this.loadAni.pos(50, 80);
            // this.loadAni.scale(2, 2);
            this.box_loadAni.addChild(this.loadAni);
            this.loadAni.play(0, true);
        }));

        this.progress(1, 100);
    }

    public childrenCreated(): void {

    }

    private box_ani: Laya.Box;

    public showAnimation() {
        // EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
        // //进入游戏
        // this.remove();
        // return;
        this.box_ani = new Laya.Box();
        this.box_ani.width = Laya.stage.width;
        this.box_ani.height = Laya.stage.height;
        this.box_ani.bgColor = "#000000";
        this.addChild(this.box_ani);
        this.showAniUglify = new Laya.Skeleton();
        this.showAniUglify.load("resource/assets/db/opening.sk", Laya.Handler.create(this, () => {
            this.showAniUglify.x = Laya.stage.width / 2;
            this.showAniUglify.y = Laya.stage.height / 2;
            this.showAniUglify.player && this.showAniUglify.player.once(Laya.Event.STOPPED, this, () => {
                console.log("loadAni stop");
                this.box_ani.once(Laya.Event.CLICK, this, () => {
                    console.log("loadAni click");
                    EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
                    //进入游戏
                    this.remove();
                });
            });
            this.showAniUglify.scale(2, 2);
            this.box_ani.addChild(this.showAniUglify);
            this.showAniUglify.play(0, false);
        }));
    }

    public onAwake() {
        super.onAwake();
    }

    public progress(index: number, len: number): void {
        if (this.img_jdt) {
            this.img_jdt.width = 872 * (index / len);
            this.box_loadAni.x = 810 * (index / len);
        }
    }

    public remove() {
        // Laya.timer.clearAll(this);
        // Laya.timer.clearAll(this);
        if (this && this.parent) this.parent.removeChild(this);
        this.box_ani && this.box_ani.offAll();
        this.loadAni && this.loadAni.destroy();
        this.showAniUglify && this.showAniUglify.destroy();
    }
}