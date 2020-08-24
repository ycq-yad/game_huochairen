import { PopBaseScene } from "../../PopBaseScene";
import { localData } from "../../../common/GameDataType";
import SignManager from "../../../manager/SignManager";
import { GameData } from "../../../common/GameData";
import { MiniManeger } from "../../../minigame/MiniManeger";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { SignItem } from "./SignItem";
import AnimationManager from "../../../manager/AnimationManager";
import GameMgr from "../../../manager/GameMgr";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";

export class SignScene extends PopBaseScene {
    className_key = "SignScene";
    public constructor() {
        super();
        this.skin = "skins/uiView/sign/SignView.json";
    }

    /** 移除事件 */
    protected removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
        this.btn_sign.off(Laya.Event.CLICK, this, this.onSignUglify);
        this.box_double.off(Laya.Event.CLICK, this, this.onSelectUglify);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        // this.hideBanner();
        Laya.Tween.clearAll(this.btn_sign);
    }

    private refreshStateUglify() {
        let curCanSign = SignManager.instance.checkSign();
        if (curCanSign) {
            this.btn_sign.visible = true;
            this.lab_tip.visible = false;
            if (GameData.getInstance().isConVersion || !GameData.getInstance().videoOpen) {
                this.showDoubleUglify(false);
                this.box_double.visible = false;
            } else {
                this.box_double.visible = true;
                this.showDoubleUglify(GameData.getInstance().selectDoule);
                AnimationManager.instance.btnScaleAniLoop(this.btn_sign, this);
            }
        } else {
            this.btn_sign.visible = this.box_double.visible = false;
            this.lab_tip.visible = true;
            Laya.Tween.clearAll(this.btn_sign);
        }
    }

    private async refreshSignUglify() {
        let signData: Array<localData.SignData> = await SignManager.instance.getSignDataUglify();
        this.signData = signData;
        let box_sign = this.box_sign;
        let count = signData.length;
        for (let i = 0; i < count; i++) {
            let item = <SignItem>this.box_sign.getChildAt(i);
            if (item) {
                item.setData(this.signData[i]);
            } else {
                item = new SignItem(this.signData[i]);
                item.x = this.pointArr[i][0];
                item.y = this.pointArr[i][1];
                this.box_sign.addChild(item);
            }
        }
    }

    private showDoubleUglify(show: boolean) {
        this.img_select.visible = show;
        let desc = <Laya.Label>this.btn_sign.getChildByName("desc");
        desc.text = show ? "双倍奖励" : "单倍奖励";
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

    private onSignUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        let self = this;
        if (self.img_select.visible) {
            self.grp_center.mouseEnabled = false;
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    self.getAwardUglify(2);
                },
                failFun: () => {
                    self.grp_center.mouseEnabled = true;
                },
                errorFun: () => {
                    self.grp_center.mouseEnabled = true;
                }
            });
        } else {
            self.getAwardUglify(1);
        }
    }

    private getAwardUglify(mul: number = 1) {
        for (let index = 0; index < this.signData.length; index++) {
            const element = this.signData[index];
            if (element.canSign) {
                let data = element;
                data.reward.forEach(v => {
                    let awardId = v.type;
                    if (awardId < 10000) {//基础物品
                        GameMgr.instance.updateBaseData(awardId, v.num * mul);
                    }
                });
                GameData.getInstance().signIn.timeStamp = (new Date()).getTime();
                GameData.getInstance().signIn.total_count += 1;
                GameInfoManager.getInstance().saveInfo(GameConst.SIGN_INFO);
                break;
            }
        }
        this.initView();
        this.grp_center.mouseEnabled = true;
    }

    private onSelectUglify() {
        // SoundManager.instance.playEffect(SoundConst.BtnClick);
        if (this.img_select.visible) {
            this.showDoubleUglify(false);
        } else {
            this.showDoubleUglify(true);
        }
    }

    private onCloseUglify() {
        SoundManager.instance.playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    private box_content: Laya.Box;
    private btn_close: Laya.Button;
    private box_sign: Laya.Box;
    private box_double: Laya.Box;
    private img_select: Laya.Image;
    private btn_sign: Laya.Button;
    private lab_tip: Laya.Label;

    private pointArr = [[0, 0], [260, 0], [520, 0], [0, 303], [260, 303], [520, 303], [0, 603]];
    private signData: Array<localData.SignData> = [];

    protected childrenCreated() {
        super.childrenCreated();
    }

    /** 添加事件 */
    protected addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
        this.btn_sign.on(Laya.Event.CLICK, this, this.onSignUglify);
        this.box_double.on(Laya.Event.CLICK, this, this.onSelectUglify);
    }

    protected initView() {
        if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) this.showInsertAd();
        this.showCloseBtn(this.btn_close);
        // this.showBanner();
        this.refreshSignUglify();
        this.refreshStateUglify();
    }
}