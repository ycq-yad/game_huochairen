/**
 * GameBufferLoading
 */
export default class GameBufferLoading extends Laya.Sprite {
    public className_key = "GameBufferLoading";

    private bg_img: Laya.Image;
    private img_font: Laya.Image;
    private img_icon: Laya.Image;
    private img_circle: Laya.Image;

    /** 背景图片资源名 */
    protected bg_img_res: string = "game_panel_db_png";

    constructor() {
        super();
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
        this.init();
    }

    private init(): void {
        if (!this.bg_img) {
            this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
            this.bg_img.sizeGrid = "3,3,2,2";
            this.bg_img.width = this.width; this.bg_img.height = this.height;
            this.bg_img.alpha = 0.7;
            this.addChild(this.bg_img);
            this.mouseEnabled = true;
            this.bg_img.mouseEnabled = true;
            this.bg_img.mouseThrough = false;
        }

        // if (!this.img_icon) {
        //     this.img_icon = new Laya.Image();
        //     this.img_icon.skin = "resource/assets/loading/loading_tb.png";
        //     this.img_icon.anchorX = this.img_icon.anchorY = 0.5;
        //     this.img_icon.centerX = this.img_icon.centerY = 0;
        //     this.addChild(this.img_icon);
        // }

        if (!this.img_circle) {
            this.img_circle = new Laya.Image();
            this.img_circle.skin = "resource/assets/loading/loading_circle.png";
            this.img_circle.anchorX = this.img_circle.anchorY = 0.5;
            this.img_circle.centerX = this.img_circle.centerY = 0;
            this.addChild(this.img_circle);
        }

        /*    if (!this.img_font) {
               this.img_font = new Laya.Image();
               this.img_font.skin = "resource/assets/loading/loading_zi.png";
               this.img_font.centerX = 0;
               this.img_font.centerY = 200;
               this.addChild(this.img_font);
           } */
    }

    private setLabelInfo(info: string) {

    }

    public onShow(): void {
        if (this.img_circle) {
            this.img_circle.rotation = 0;
            Laya.Tween.to(this.img_circle, { rotation: 360 }, 500, null, Laya.Handler.create(this, this.onShow));
        }
    }

    public onHidd(): void {
        if (this.img_circle) {
            Laya.Tween.clearAll(this.img_circle);
        }
    }
}