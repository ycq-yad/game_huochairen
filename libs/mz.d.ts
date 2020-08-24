declare let mz: mz
declare interface mz {
    /*********************************** 账户服务 ***********************************/

    /**
     * 登录并获取 token和uid 
     */
    login(obj: {
        success?: (res: {
            uid: string, token: string, email: string, flyme: string, icon: string, isDefaultIcon: boolean, nickname: string,
            phone: string, backgroundImage: string, backgroundColor: string
        }) => void,
        fail?: (res: { code: number, msg: string }) => void, complete?: Function
    });
    /**
     * 如果不需要显示用户名称头像等信息，可以直接使用该接口可以完成登录
     */
    getToken(obj: {
        success?: (res: { uid: string, token: string }) => void,
        fail?: (res: { code: number, msg: string }) => void, complete?: Function
    });

    /*********************************** 屏幕适配 ***********************************/


    /*********************************** 支付 ***********************************/


    /*********************************** 网络状态 ***********************************/

    /**
     * 获取网络类型 
     */
    getNetworkType(obj: { success?: (res: { networkType: string }) => void, fail?: Function, complete?: Function });
    /**
     * 监听网络状态变化事件 
     */
    onNetworkStatusChange(callback: (res: { isConnected: boolean, networkType: string }) => void);

    /*********************************** 设备及系统 ***********************************/

    /**
     * 退出游戏
     * @version 1060
     */
    exitGame();
    /**
     * 监听小游戏回到前台的事件 
     */
    onShow(callback: Function);
    /**
     * 监听小游戏隐藏到后台事件 
     */
    onHide(callback: Function);
    /**
     * 取消监听小游戏回到前台的事件 
     */
    offShow(callback: Function);
    /**
     * 取消监听小游戏隐藏到后台事件 
     */
    offHide(callback: Function);
    /**
     * 获取设备识别码 
     */
    getIMEI(obj: { success?: (res: { imei: string }) => void, fail?: Function });
    /**
     * 获取系统剪贴板的内容 
     */
    getClipboardData(obj: { success?: (res: { data: string }) => void, fail?: Function, complete?: Function });
    /**
     * 设置系统剪贴板的内容 
     */
    setClipboardData(obj: { data: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 使手机发生较长时间的振动（400 ms) 
     */
    vibrateLong(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 使手机发生较短时间的振动（15 ms）
     */
    vibrateShort(obj: { success?: Function, fail?: Function, complete?: Function });

    /*********************************** 渲染 ***********************************/

    /**
     * 加载自定义字体文件 
     */
    loadFont(fontFamily: string, path: string);

    /*********************************** 界面 ***********************************/

    /**
     * 显示消息提示框
     * @version 1048
     */
    showToast(obj: { message: string, duration: number });
    /**
     * 显示键盘 
     * @version 1053
     */
    showKeyboard(obj: {
        defaultValue: string, maxLength: number, multiple: boolean, confirmHold: boolean, confirmType: string, inputType?: string
    });
    /**
     * 监听用户点击键盘 Confirm 按钮时的事件
     * @version 1053
     */
    onKeyboardConfirm(callback: (res: { value: string }) => void);
    /**
     * 隐藏键盘 
     * @version 1053
     */
    hideKeyboard();
}

// declare let qg: qg
// declare interface qg {
//     /*********************************** 广告服务 ***********************************/

//     /**
//      * 创建 banner 广告组件
//      * @version 1064
//      */
//     createBannerAd(obj: {
//         adUnitId: string, style?: { left: number, top: number, width: number, height: number }
//     }): MZBannerAd;
//     /**
//      * 创建激励视频广告组件
//      * @version 1064
//      */
//     createRewardedVideoAd(obj: { adUnitId: string }): MZRewardedVideoAd;
//     /**
//      * 创建插屏广告组件
//      * @version 1064
//      */
//     createInsertAd(obj: { adUnitId: string }): MZInsertAd;

//     /*********************************** 设备及系统 ***********************************/

//     /**
//      * 获取系统信息 
//      */
//     getSystemInfo(obj: { success?: (res: MZSystemInfo) => void, fail?: Function, complete?: Function });
//     /**
//      * qg.getSystemInfo 的同步版本 
//      */
//     getSystemInfoSync(): MZSystemInfo;
// }

// /**
//  * banner 广告组件
//  */
// declare interface MZBannerAd {
//     /**
//      * banner 广告组件的样式。
//      * style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，
//      * 缩放后的真实尺寸需要通过 MZBannerAd.onResize() 事件获得。 
//      */
//     style: { left: number, top: number, width: number, height: number, realWidth: number, realHeight: number };
//     /**
//      * 监听banner 广告加载事件 
//      */
//     onLoad(callback: Function);
//     /**
//      * 监听banner 广告尺寸变化事件
//      */
//     onResize(callback: (res: { width: number, height: number }) => void);
//     /**
//      * 显示banner广告，需要create成功后才能显示，用户关闭banner后，需要重新create
//      */
//     show();
//     /**
//      * 隐藏 banner 广告 
//      */
//     hide();
//     /**
//      * 监听banner 广告关闭事件
//      */
//     onClose(callback: Function);
//     /**
//      * 取消监听banner 广告关闭事件
//      */
//     offClose(callback: Function);
//     /**
//      * 监听banner 广告错误事件 
//      */
//     onError(callback: Function);
//     /**
//      * 取消监听banner 广告错误事件 
//      */
//     offError(callback: Function);
//     /**
//      * 取消监听banner 广告加载事件 
//      */
//     offLoad(callback: Function);
//     /**
//      * 取消监听banner 广告尺寸变化事件 
//      */
//     offResize(callback: Function);
// }

// /**
//  * 激励视频广告组件
//  */
// declare interface MZRewardedVideoAd {
//     /**
//      * 显示激励视频广告 
//      */
//     show();
//     /**
//      * 加载激励视频广告
//      */
//     load();
//     /**
//      * 监听激励视频广告加载事件，在onLoad回调后调用show
//      */
//     onLoad(callback: Function);
//     /**
//      * 取消监听激励视频广告加载事件 
//      */
//     offLoad(callback: Function);
//     /**
//      * 设置视频奖励发放回调
//      */
//     onRewarded(callback: Function);
//     /**
//      * 移除视频奖励发放回调
//      */
//     offRewarded(callback: Function);
//     /**
//      * 监听激励视频错误事件 
//      */
//     onError(callback: Function);
//     /**
//      * 取消监听激励视频错误事件 
//      */
//     offError(callback: Function);
//     /**
//      * 监听激励视频⼴告关闭事件,通常只有在广告播放完后才会出现关闭按钮，
//      * 如果视频下载异常，会直接显示关闭按钮，此时不会回调onRewarded,建议在onClose回调里面也加入奖励发放，避免奖励无法发放。
//      */
//     onClose(callback: Function);
//     /**
//      * 取消监听用户点击 关闭广告 按钮的事件 
//      */
//     offClose(callback: Function);
// }

// /**
//  * 插屏广告组件
//  */
// declare interface MZInsertAd {
//     /**
//      * 显示插屏广告
//      */
//     show();
//     /**
//      * 加载插屏广告 
//      */
//     load();
//     /**
//      * 监听插屏广告加载事件 
//      */
//     onLoad(callback: Function);
//     /**
//      * 取消监听插屏广告加载事件 
//      */
//     offLoad(callback: Function);
//     /**
//      * 监听插屏错误事件 
//      */
//     onError(callback: Function);
//     /**
//      * 取消监听插屏错误事件 
//      */
//     offError(callback: Function);
//     /**
//      * 监听插屏广告关闭事件
//      */
//     onClose(callback: Function);
//     /**
//      * 取消监听插屏广告关闭事件
//      */
//     offClose(callback: Function);
// }

// /**
//  * 系统信息
//  */
// declare interface MZSystemInfo {
//     /**
//      * 版本号
//      */
//     COREVersion: string;
//     /**
//      * 设备品牌
//      */
//     brand: string;
//     /**
//      * 当前环境设置的语言
//      */
//     language: string;
//     /**
//      * 设备型号
//      */
//     model: string;
//     /**
//      * 设备像素比
//      */
//     pixelRatio: number;
//     /**
//      * 客户端平台
//      */
//     platform: string;
//     /**
//      * 平台版本号
//      */
//     platformVersion: number;
//     /**
//      * 屏幕宽度，单位px
//      */
//     screenWidth: number;
//     /**
//      * 屏幕高度，单位px
//      */
//     screenHeight: number;
//     /**
//      * 操作系统及版本
//      */
//     system: string;
//     /**
//      * 异型缺口高度
//      */
//     statusBarHeight: number;
// }