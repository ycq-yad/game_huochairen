export class PageRadio extends Laya.Box {

    private box_radio: Laya.Box;

    private radioNum: number;

    private space: number = 0;

    private _selectIndex: number = 0;
    public get selectIndex() {
        return this._selectIndex;
    }
    public set selectIndex(value: number) {
        this._selectIndex = value;
        this.updateSelectIndex();
    }

    constructor(num: number, space: number) {
        super();
        this.radioNum = num;
        this.space = space;
        this.initView();
    }

    private initView() {
        for (let i = 0; i < this.radioNum; i++) {
            let box_radio = new Laya.Box();
            box_radio.size(39, 38);
            let selectImg = new Laya.Image();
            selectImg.skin = this.selectIndex == i ? "resource/assets/imgs/game/type2/brush/brush_round_1.png" : "resource/assets/imgs/game/type2/brush/brush_round_2.png";
            selectImg.autoSize = true;
            box_radio.addChild(selectImg);
            selectImg.centerX = selectImg.centerY = 0;
            box_radio.x = 0 + (this.space + 39) * i;
            this.addChild(box_radio);
        }
    }

    private updateSelectIndex() {
        for (let i = 0; i < this.numChildren; i++) {
            let box_radio = this.getChildAt(i);
            let selectImg = <Laya.Image>box_radio.getChildAt(0);
            selectImg.skin = this.selectIndex == i ? "resource/assets/imgs/game/type2/brush/brush_round_1.png" : "resource/assets/imgs/game/type2/brush/brush_round_2.png";
        }
    }
}