import { localData } from "../../../../common/GameDataType";
import SoundManager, { SoundConst } from "../../../../manager/SoundManager";
import GameEvent from "../../../../common/GameEvent";
import { LinePoints } from "../../../Type2GameLineToolMgr";
import GameInfoManager from "../../../../manager/GameInfoManager";

export default class ChooseItem2 extends BaseSceneUISkin {
    public className_key = "ChooseItem2";
    constructor(_data: localData.LevelData2) {
        super();
        this.viewData_ = _data;
        this.skin = "skins/game/type2/choose/ChooseItem2.json";
    }

    public onRemoved() {
        super.onRemoved();
        this.off(Laya.Event.CLICK, this, this.onSelect);
        this.viewData_ = null;
    }

    private initView() {
        if (!this.viewData_) return;
        let data = this.viewData_;
        this.off(Laya.Event.CLICK, this, this.onSelect);
        this.img_pass.visible = this.box_draw.visible = false;
        this.lab_level.text = data.id + "";
        this.img_bg.skin = data.unlock ? "resource/assets/imgs/game/type2/chapter2/checkpoint_baseboard_3.png" : "resource/assets/imgs/game/type2/chapter2/checkpoint_baseboard_4.png";
        this.img_title.skin = data.unlock ? "resource/assets/imgs/game/type2/chapter2/checkpoint_db2.png" : "resource/assets/imgs/game/type2/chapter2/checkpoint_db1.png";
        this.img_lock.visible = !data.unlock;
        if (data.unlock) {
            if (!data.isCur) {
                this.img_pass.visible = this.box_draw.visible = true;
                this.drawData = GameInfoManager.getInstance().selectLevelDataById(data.id);
                this.onDraw();
            }
            this.on(Laya.Event.CLICK, this, this.onSelect);
        } else {

        }
    }

    private onDraw() {
        if (!this.drawData) return;
        if (!this.sp) {
            this.sp = new Laya.Sprite();
            this.box_draw.addChild(this.sp);
        } else {
            this.sp.graphics.clear();
        }
        //
        let arr: Array<number> = [];
        this.drawData.forEach(item => {
            let sx: number = this.box_draw.width / 1036;
            let sy: number = this.box_draw.height / 1044;
            let tempArr: Array<number> = [];
            for (let i = 0; i < item.points.length; i += 2) {
                tempArr.push(Math.round(item.points[i] * sx));
                tempArr.push(Math.round(item.points[i + 1] * sy));
            }
            this.sp.graphics.drawLines(0, 0, tempArr, "#000000", 4);
        });
    }

    private onSelect() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.Type2Select, this.viewData_.id);
    }

    private img_bg: Laya.Image;
    private img_title: Laya.Image;
    private img_pass: Laya.Image;
    private box_draw: Laya.Box;
    private lab_level: Laya.Label;
    private img_lock: Laya.Image;
    private sp: Laya.Sprite;

    public viewData_: localData.LevelData2;
    private drawData: Array<LinePoints>;

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        // this.size(208, 208);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
        }
    }

    public setData(data: localData.LevelData2) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }
}