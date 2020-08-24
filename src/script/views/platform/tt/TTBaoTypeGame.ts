// import { MoreSomeAppInfo, MiniManeger } from "../../minigame/MiniManeger";


// /**
//  * 头条 爆款游戏
//  * 
//  * 下图页面右上方为爆款游戏位置，调用接口为 B，该位置每隔 2 秒轮播，加入抖动等特效。
//  */
// export default class TTBaoTypeGame extends BaseSceneUISkin {
//     public className_key = "TTBaoTypeGame";

//     /**切换时间 */
//     public changeTime: number = 30000;

//     /**icon 显示图 */
//     protected icon_: Laya.Image;
//     protected iconMask_: Laya.Image;
//     /**名称 */
//     protected name_txt: Laya.Label;

//     /**红点 */
//     private dot_: Laya.Image;

//     /**
//      * 数据源
//      */
//     private listdata_: MoreSomeAppInfo[];

//     constructor(skin: string, listData_: MoreSomeAppInfo[]) {
//         super();
//         this.listdata_ = listData_;
//         this.skin = skin;
//     }

//     public adaptationStage() {

//     }
//     protected childrenCreated(): void {
//         super.childrenCreated();
//         this.setDatas(this.listdata_);
//         this.on(Laya.Event.CLICK, this, this.toGame);
//     }

//     /**
//      *  跳转游戏
//      */
//     protected toGame(): void {
//         if (!DeviceUtil.isTTMiniGame()) return;
//         console.log("go game info ", this.itemData_);
//         // platform.navigateToMiniProgram(this.itemData_.id);
//         MiniManeger.instance.showMoreGamesModal();
//     }

//     /**
//      * 设置数据源
//      * 
//      * @param datas 
//      */
//     public setDatas(datas: MoreSomeAppInfo[]): void {
//         if (datas) {
//             this.listdata_ = datas;
//         }
//         this.onEnable();
//     }

//     public onEnable(): void {
//         if (this.isCreate) {
//             this.changeShow();
//             Laya.timer.clear(this, this.changeShow);
//             Laya.timer.loop(this.changeTime, this, this.changeShow);
//         }
//     }

//     public onDisable(): void {
//         if (this.isCreate) {
//             Laya.timer.clear(this, this.changeShow);
//         }
//     }

//     /**
//      * 抖动
//      */
//     private shake(): void {
//         let rota = 5;
//         Laya.Tween.clearAll(this);
//         Laya.Tween.to(this, { rotation: rota }, 50);
//         Laya.Tween.to(this, { rotation: -rota }, 100, null, null, 50);
//         Laya.Tween.to(this, { rotation: rota }, 100, null, null, 150);
//         Laya.Tween.to(this, { rotation: -rota }, 100, null, null, 250);
//         Laya.Tween.to(this, { rotation: 0 }, 50, null, null, 350);
//     }

//     /**指标 */
//     private index: number = 0;

//     /**数据 */
//     protected itemData_: MoreSomeAppInfo;

//     /**修改数据 */
//     private changeShow(): void {
//         if (this.listdata_) {
//             this.index++;
//             this.index %= this.listdata_.length;
//             this.itemData_ = this.listdata_[this.index];
//         }
//         this.dataChange(this.itemData_);
//         Laya.timer.clear(this, this.shake);
//         Laya.timer.loop(1000, this, this.shake);
//     }

//     /**
//      * 设置数据
//      * @param data 
//      */
//     public dataChange(data: MoreSomeAppInfo): void {
//         //
//         this.itemData_ = data;
//         this.icon_.skin = data.icon;
//         //
//         if (this.iconMask_) {
//             this.icon_.mask = this.iconMask_;
//             this.icon_.mask.visible = false;
//         }
//         if (this.name_txt) {
//             this.name_txt.text = data.title;
//         }
//     }

//     /**销毁 */
//     public destroy(): void {
//         super.destroy(true);
//         this.offAll();
//         Laya.timer.clear(this, this.changeShow);
//     }
// }