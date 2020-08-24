import SoundManager, { SoundConst } from "../../manager/SoundManager";
import { GameData } from "../../common/GameData";
import PowerMgr from "../../manager/PowerMgr";
import GameEvent from "../../common/GameEvent";

export class TopBar extends BaseSceneUISkin {
    className_key = "TopBar";
    public constructor() {
        super();
        this.name = "TopBar";
        this.skin = "skins/uiView/TopBar.json";
    }

    private lab_power: Laya.Label;
    private btn_power: Laya.Button;
    private lab_time: Laya.Label;
    private lab_gold: Laya.Label;
    private btn_gold: Laya.Button;

    private surplusTime: number;

    public adaptationStage() {
        this.size(580, 77);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    private addEvent() {
        this.btn_power.on(Laya.Event.CLICK, this, this.onPower);
        this.btn_gold.on(Laya.Event.CLICK, this, this.onGold);
        EventMgr.getInstance().addEvent(GameEvent.REFRESH_TOP, this, this.refresh);
        EventMgr.getInstance().addEvent(GameEvent.POWER_REPLY_STATUS, this, this.updataShow);
        EventMgr.getInstance().addEvent(GameEvent.ONSHOW, this, this.updatePower);
    }

    private initView() {
        this.pos(30, 30);
        if (DeviceUtil.getIsIphoneX()) this.y += GameData.getInstance().fullScreenOffSet;
        this.updatePower();
        this.refresh();
    }

    private refresh() {
        this.lab_power.text = PowerMgr.instance.power + "/" + GameData.getInstance().defaultConfigs.rePowerLimit;
        this.lab_gold.text = GameData.getInstance().playerData.gold + "";
    }

    private updatePower() {
        let surTime = PowerMgr.instance.spaceTimeRestorePowerUglify();
        this.surplusTime = Math.floor(surTime / 1000);
        console.log("updatePower", this.surplusTime);
        if (this.surplusTime) {
            this.lab_time.text = Utils.formatTime(this.surplusTime);
            this.downTime();
        } else {
            Laya.timer.clearAll(this);
            this.lab_time.text = "";
        }
    }

    private downTime() {
        Laya.timer.clearAll(this);
        Laya.timer.loop(1000, this, () => {
            this.surplusTime--;
            if (this.surplusTime) {
                this.lab_time.text = Utils.formatTime(this.surplusTime);
            } else {
                this.lab_time.text = "";
                Laya.timer.clearAll(this);
                PowerMgr.instance.changePowerUglify({ count: 1, isNatural: true });
                this.updatePower();
            }
        });
    }

    /**
     * 
     * @param type 1:停止回复；2:开始回复
     */
    private updataShow(type: number) {
        if (type == 1) {
            this.lab_time.text = "";
            Laya.timer.clearAll(this);
        } else {
            this.updatePower();
        }
    }

    private onPower() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.OPEN_BUY_PROP, { type: 1 });
    }

    private onGold() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.OPEN_BUY_PROP, { type: 2 });
    }

    private removeEvent() {
        this.btn_power.off(Laya.Event.CLICK, this, this.onPower);
        this.btn_gold.off(Laya.Event.CLICK, this, this.onGold);
        EventMgr.getInstance().removeEvent(GameEvent.REFRESH_TOP, this, this.refresh);
        EventMgr.getInstance().removeEvent(GameEvent.POWER_REPLY_STATUS, this, this.updataShow);
        EventMgr.getInstance().removeEvent(GameEvent.ONSHOW, this, this.updatePower);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }
}