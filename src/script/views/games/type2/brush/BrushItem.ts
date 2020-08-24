import { localData } from "../../../../common/GameDataType";
import SoundManager, { SoundConst } from "../../../../manager/SoundManager";
import GameEvent from "../../../../common/GameEvent";
import SkinMgr from "../../../../manager/SkinMgr";

export default class BrushItem extends BaseSceneUISkin {
    public className_key = "BrushItem";
    constructor(_data: localData.BrushData) {
        super();
        this.viewData_ = _data;
        this.skin = "skins/game/type2/brush/BrushItem.json";
    }

    public onRemoved() {
        super.onRemoved();
        this.off(Laya.Event.CLICK, this, this.onUse);
        this.viewData_ = null;
    }

    private initView() {
        if (!this.viewData_) return;
        let data = this.viewData_;
        this.off(Laya.Event.CLICK, this, this.onUse);
        this.img_mask.visible = false;
        this.img_brush.skin = data.unlock ? "resource/assets/imgs/game/type2/brush/brush_brush/" + data.icon + "_2.png" : "resource/assets/imgs/game/type2/brush/brush_brush/" + data.icon + "_1.png";
        this.img_bg.skin = data.unlock ? "resource/assets/imgs/game/type2/brush/brush_baseboard_2.png" : "resource/assets/imgs/game/type2/brush/brush_baseboard_4.png";
        this.btn_use.visible = data.use;
        if (data.unlock) this.on(Laya.Event.CLICK, this, this.onUse);
    }

    public showOrHideMask(isShow: boolean) {
        this.img_mask.visible = isShow;
    }

    private onUse() {
        if (this.viewData_.use) return;
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        SkinMgr.instance.useBrushUglify(this.viewData_.id);
        EventMgr.getInstance().sendEvent(GameEvent.USE_BRUSH);
    }

    private img_bg: Laya.Image;
    private img_mask: Laya.Image;
    private img_brush: Laya.Image;
    private btn_use: Laya.Button;

    public viewData_: localData.BrushData;

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

    public setData(data: localData.BrushData) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }
}