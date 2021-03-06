/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.skins {
    export class HorizontalSkinViewUI extends Laya.Scene {
		public bg_img:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/HorizontalSkinView");
        }
    }
    REG("ui.skins.HorizontalSkinViewUI",HorizontalSkinViewUI);
    export class VerticalSkinViewUI extends Laya.Scene {
		public ban_img:Laya.Image;
		public insert:Laya.Label;
		public ok:Laya.Label;
		public check:Laya.Label;
		public reSet:Laya.Label;
		public target_spr:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/VerticalSkinView");
        }
    }
    REG("ui.skins.VerticalSkinViewUI",VerticalSkinViewUI);
}
export module ui.skins.uiView {
    export class HomeViewUI extends Laya.Scene {
		public box_bg:Laya.Box;
		public img_title:Laya.Image;
		public box_ani:Laya.Box;
		public btn_start:Laya.Button;
		public btn_power:Laya.Button;
		public btn_sign:Laya.Button;
		public btn_skin:Laya.Button;
		public btn_moreGame:Laya.Button;
		public btn_share:Laya.Button;
		public btn_invite:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/HomeView");
        }
    }
    REG("ui.skins.uiView.HomeViewUI",HomeViewUI);
    export class TopBarUI extends Laya.Scene {
		public lab_power:Laya.Label;
		public btn_power:Laya.Button;
		public lab_time:Laya.Label;
		public lab_gold:Laya.Label;
		public btn_gold:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/TopBar");
        }
    }
    REG("ui.skins.uiView.TopBarUI",TopBarUI);
}
export module ui.skins.uiView.invite {
    export class InviteItemUI extends Laya.Scene {
		public lab_index:Laya.Label;
		public img_null:Laya.Image;
		public img_head:Laya.Image;
		public img_headMask:Laya.Image;
		public box_award1:Laya.Box;
		public btn_get:Laya.Button;
		public img_geted:Laya.Image;
		public lab_tip:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/invite/InviteItem");
        }
    }
    REG("ui.skins.uiView.invite.InviteItemUI",InviteItemUI);
    export class InviteViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public box_content:Laya.Box;
		public btn_close:Laya.Button;
		public panel_invite:Laya.Panel;
		public btn_invite:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/invite/InviteView");
        }
    }
    REG("ui.skins.uiView.invite.InviteViewUI",InviteViewUI);
}
export module ui.skins.uiView.pop {
    export class AwardViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public box_content:Laya.Box;
		public img_light:Laya.Image;
		public lab_title:Laya.Label;
		public lab_num:Laya.Label;
		public img_icon:Laya.Image;
		public img_expression:Laya.Image;
		public img_progdb:Laya.Image;
		public img_prog:Laya.Image;
		public box_moreGame:Laya.Box;
		public lab_get:Laya.Label;
		public btn_get:Laya.Button;
		public btn_open:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/pop/AwardView");
        }
    }
    REG("ui.skins.uiView.pop.AwardViewUI",AwardViewUI);
    export class BuyPropViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public box_content:Laya.Box;
		public img_bg:Laya.Image;
		public btn_close:Laya.Button;
		public lab_title:Laya.Label;
		public lab_num:Laya.Label;
		public img_icon:Laya.Image;
		public btn_get:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/pop/BuyPropView");
        }
    }
    REG("ui.skins.uiView.pop.BuyPropViewUI",BuyPropViewUI);
}
export module ui.skins.uiView.power {
    export class PowerItemUI extends Laya.Scene {
		public img_bg:Laya.Image;
		public img_icon:Laya.Image;
		public lab_name:Laya.Label;
		public lab_num:Laya.Label;
		public btn_get:Laya.Button;
		public img_geted:Laya.Image;
		public lab_tip:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/power/PowerItem");
        }
    }
    REG("ui.skins.uiView.power.PowerItemUI",PowerItemUI);
    export class PowerViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public box_content:Laya.Box;
		public btn_close:Laya.Button;
		public panel_free:Laya.Panel;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/power/PowerView");
        }
    }
    REG("ui.skins.uiView.power.PowerViewUI",PowerViewUI);
}
export module ui.skins.uiView.sign {
    export class SignItemUI extends Laya.Scene {
		public img_bg:Laya.Image;
		public box_award1:Laya.Box;
		public box_award2:Laya.Box;
		public box_can:Laya.Box;
		public lab_day:Laya.Label;
		public img_signed:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/sign/SignItem");
        }
    }
    REG("ui.skins.uiView.sign.SignItemUI",SignItemUI);
    export class SignViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public box_content:Laya.Box;
		public btn_close:Laya.Button;
		public box_sign:Laya.Box;
		public box_double:Laya.Box;
		public img_select:Laya.Image;
		public btn_sign:Laya.Button;
		public lab_tip:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/uiView/sign/SignView");
        }
    }
    REG("ui.skins.uiView.sign.SignViewUI",SignViewUI);
}