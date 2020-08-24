// import { MiniManeger, MoreSomeAppInfo } from "../../minigame/MiniManeger";

// /**
//  * 斗鱼banner位置
//  * 因为抖音无banner广告
//  */
// export class DouyinBanner extends Laya.Box {
//     public constructor() {
//         super();
//         this.size(900, 200);
//         this.initView();
//     }
//     public icon_bg: Laya.Image;

//     public item_box: Laya.Box;

//     public game_list: Laya.List;

//     public initView() {
//         if (this.icon_bg == null) {
//             this.icon_bg = new Laya.Image();
//             this.icon_bg.skin = 'resource/assets/img/platform/diban_2.png';
//             this.icon_bg.sizeGrid = '26,23,21,27';
//             this.icon_bg.size(900, 200)
//             this.addChild(this.icon_bg);
//         }
//         if (this.item_box == null) {
//             this.item_box = new Laya.Box();
//             this.item_box.centerX = this.item_box.centerY = 0;
//             this.icon_bg.addChild(this.item_box);
//         }
//         if (this.game_list == null) {
//             this.game_list = new Laya.List();
//             this.game_list.size(880, 180);
//             this.game_list.centerX = 0;
//             this.game_list.centerY = 0;
//             this.game_list.itemRender = BannerItem;
//             this.game_list.hScrollBarSkin = "";
//             this.game_list.spaceX = 10;
//             this.icon_bg.addChild(this.game_list)
//         }
//         this.initList();
//     }

//     public initList() {
//         let moreSomeAppInfos = MiniManeger.instance.moreSomeAppInfos;
//         // let len = moreSomeAppInfos.length;
//         this.game_list.array = moreSomeAppInfos;
//     }

//     public removeSelf() {
//         return super.removeSelf();
//     }
// }



// export class BannerItem extends Laya.Box {
//     public constructor(data: MoreSomeAppInfo) {
//         super();
//         this.itemData_ = data;
//         this.size(135, 180);
//         this.on(Laya.Event.CLICK, this, this.click);

//     }

//     /**背景 */
//     protected bg_: Laya.Image;
//     /**icon 显示图 */
//     protected icon_: Laya.Image;
//     protected iconMask_: Laya.Image;
//     /**名称 */
//     protected name_txt: Laya.Label;
//     /**数据 */
//     protected itemData_: MoreSomeAppInfo;
//     private initView() {

//         // this.dataChange(this.itemData_)

//     }

//     /**
//      * 设置数据
//      * @param data 
//      */
//     public dataChange(data: MoreSomeAppInfo): void {
//         this.itemData_ = data;
//         if (this.bg_ == null) {
//             this.bg_ = new Laya.Image();
//             this.bg_.skin = 'resource/assets/img/platform/diban_3.png';
//             this.bg_.sizeGrid = '11,14,12,9';;
//             this.bg_.size(135, 180);
//             this.addChild(this.bg_);
//         }
//         if (this.name_txt == null) {
//             this.name_txt = new Laya.Label();
//             this.name_txt.fontSize = 25;
//             this.name_txt.width = 80;

//             this.name_txt.centerX = 0;
//             this.name_txt.color = '#000000';
//             this.name_txt.y = 140;
//             this.bg_.addChild(this.name_txt);
//         }
//         if (this.icon_ == null) {
//             this.icon_ = new Laya.Image();
//             this.icon_.centerX = 0;
//             this.icon_.y = 5;
//             this.icon_.size(120, 120);
//             this.bg_.addChild(this.icon_);
//         }
//         if (this.iconMask_ == null) {
//             this.iconMask_ = new Laya.Image();
//             this.iconMask_.size(120, 120);
//             this.iconMask_.skin = 'resource/assets/img/platfrom/diban_3.png';
//             this.icon_.addChild(this.iconMask_);
//         }
//         //
//         this.itemData_ = data;
//         this.icon_.skin = data.icon;
//         // //
//         // if (this.iconMask_) {
//         //     this.icon_.mask = this.iconMask_;
//         //     this.icon_.mask.visible = false;
//         // }
//         if (this.name_txt) {
//             data.title = data.title.substr(0, 4)
//             this.name_txt.text = data.title;
//         }
//     }
//     public set dataSource(value) {
//         if (!value)
//             return;
//         this.dataChange(value);

//     }


//     /**
//      * 点击
//      */
//     protected click(): void {
//         // console.log("click  ", JSON.stringify(this.itemData_));
//         if (!DeviceUtil.isTTMiniGame()) return;
//         console.log("go game info ", this.itemData_);
//         // platform.navigateToMiniProgram(this.itemData_.id);
//         MiniManeger.instance.showMoreGamesModal();
//     }
// }