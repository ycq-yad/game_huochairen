declare namespace qg {
    /*********************************** 基础 ***********************************/

    /** 获取系统信息  */
    export function getSystemInfo(obj: {
        success?: (res: MZSystemInfo | OPSystemInfo | VVSystemInfo) => void, fail?: Function, complete?: Function
    });
    /** qg.getSystemInfo 的同步版本 */
    export function getSystemInfoSync(): MZSystemInfo | OPSystemInfo | VVSystemInfo;
    /** VIVO 获取异形屏缺口高度（竖屏时异形区域高度） */
    export function getNotchHeight(obj: {
        success?: (res: { height: number }) => void, fail?: Function, complete?: Function
    });
    /** VIVO 获取异形屏缺口高度（竖屏时异形区域高度）同步版本 */
    export function getNotchHeightSync(): { height: number };
    /** 
     * OPPO 获取渠道的名称
     * @version 1040
     */
    export function getProvider(): string;
    /** 监听音频中断结束事件 */
    export function onAudioInterruptionEnd(callback: Function);
    /** 取消监听音频中断结束事件 */
    export function offAudioInterruptionEnd(callback: Function);
    /** 监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：电话、音视频播放等。此事件触发后，小游戏内所有音频会暂停 */
    export function onAudioInterruptionBegin(callback: Function);
    /** 取消监听音频因为受到系统占用而被中断开始 */
    export function offAudioInterruptionBegin(callback: Function);
    /** OPPO 监听全局错误事件 */
    export function onError(callback: (res: { location: string, message: string, stack: string }) => void);
    /** VIVO 监听全局错误事件 */
    export function onError(callback: (res: { message: string }) => void);
    /** 取消监听全局错误事件 */
    export function offError(callback: Function);
    /** OPPO 返回小程序启动参数 */
    export function getLaunchOptionsSync(): OPLaunchOptions;
    /** 监听小游戏回到前台的事件 */
    export function onShow(callback: (res: any) => void);
    /** 监听小游戏隐藏到后台事件 */
    export function onHide(callback: Function);
    /** 取消监听小游戏回到前台的事件 */
    export function offShow(callback: Function);
    /** 取消监听小游戏隐藏到后台事件 */
    export function offHide(callback: Function);
    /** 退出当前 OPPO 小游戏 */
    export function exitApplication(obj: {
        data?: string | Object, success?: Function, fail?: Function, complete?: Function
    });
    /** 退出当前 VIVO 小游戏 */
    export function exitApplication();
    /** VIVO 强制游戏重启并使用新版本 */
    export function applyUpdate();
    /** VIVO 监听游戏有版本更新事件 */
    export function onUpdateReady(callback: (res: number) => void);
    /** 
     * VIVO 获取桌面图标是否创建
     * @version 1041
     */
    export function hasShortcutInstalled(obj: { success?: (res: boolean) => void, fail?: Function });
    /** 
     * VIVO 创建桌面图标，每次创建都需要用户授权。两次调用之间的间隔时间是120秒以上
     * @version 1041
     */
    export function installShortcut(obj: { message?: string, success?: Function, fail?: Function, complete?: Function });
    /** 
     * VIVO 判断用户是否通过桌面图标来启动应用
     * @version 1041
     */
    export function isStartupByShortcut(obj: { success?: (res: boolean) => void, fail?: Function });

    /*********************************** 平台能力 ***********************************/

    /** 
     * OPPO 登录接口
     * @version 1040
     */
    export function login(obj: { success?: (res: { data: { token: string } }) => void, fail?: Function, complete?: Function });
    /** 
     * VIVO 登录接口
     * @version 1053
     */
    export function login(obj: { success?: (res: { data: { token: string } }) => void, fail?: Function });
    /** 
     * VIVO 获取用户信息
     * @version 1053
     */
    export function getUserInfo(obj: { success?: (res: { data: VVUserInfo }) => void, fail?: Function });
    /** VIVO 获得用户基本信息 */
    // export function getProfile(obj: { token: string, success?: (res: { data: VVUserInfo }) => void, fail?: Function });
    /** 
     * OPPO 打开另一个小游戏 rpk (不支持跳转 h5 游戏)
     * @version 1050
     */
    export function navigateToMiniGame(obj: {
        success?: (res: { data: { token: string } }) => void, fail?: Function, complete?: Function
    });
    /** 
     * VIVO 唤起分享弹窗
     * @version 1056
     */
    export function share(obj: { success?: Function, fail?: (code: number, message: string) => void, cancel?: Function });

    /*********************************** 渲染 ***********************************/


    /*********************************** 广告服务 ***********************************/

    /**
     * 魅族 创建 banner 广告组件
     * @version 1064
     */
    export function createBannerAd(obj: {
        adUnitId: string, style?: { left: number, top: number, width: number, height: number }
    }): MZBannerAd;
    /**
     * VIVO 创建 banner 广告组件。Banner广告创建间隔不得少于10s。
     * 广告对象长时间不用会被回收，需要重新创建
     * @version 1031
     */
    export function createBannerAd(obj: {
        posId: string, style?: { left?: number, top?: number, width?: number, height?: number }
    }): VVBannerAd;
    // /**
    //  * OPPO 创建 banner 广告组件。旧的，不建议用。
    //  * @version 1031
    //  */
    // export function createBannerAd(obj: { posId: string }): OPBannerAdOld;
    /**
     * OPPO 创建 banner 广告组件。
     * 广告对象长时间不用会被回收，需要重新创建
     * @version 1051
     */
    export function createBannerAd(obj: {
        adUnitId: string, style?: { left?: number, top?: number, width?: number, height?: number }
    }): OPBannerAd;
    /**
     * 魅族 创建插屏广告组件
     * @version 1064
     */
    export function createInsertAd(obj: { adUnitId: string }): MZInsertAd;
    /**
     * VIVO 创建插屏广告组件。插屏广告创建间隔不得少于10s
     * @version 1031
     */
    export function createInterstitialAd(obj: { posId: string }): VVInterstitialAd;
    /**
     * 魅族 创建激励视频广告组件
     * @version 1064
     */
    export function createRewardedVideoAd(obj: { adUnitId: string }): MZRewardedVideoAd;
    /**
     * VIVO 创建激励视频广告组件。视频广告展示间隔不得少于60s
     * @version 1041
     */
    export function createRewardedVideoAd(obj: { posId: string }): VVRewardedVideoAd;
    /**
     * VIVO 创建原生广告组件。视频广告展示间隔不得少于60s
     * @version 1053
     */
    export function createNativeAd(obj: { posId: string }): VVNativeAd;

    /*********************************** 媒体 ***********************************/


    /*********************************** 数据读写 ***********************************/


    /*********************************** 网络 ***********************************/

    /** VIVO 上传文件 */
    export function uploadFile(obj: _VVUploadObj);
    /** VIVO 下载文件 */
    export function download(obj: _VVDownloadObj): VVDownloadTask;
    /** VIVO 发起 HTTPS 网络请求 */
    export function request(obj: _VVRequestObj): VVRequestTask;

    /*********************************** 设备 ***********************************/

    /** 设置是否保持常亮状态 */
    export function setKeepScreenOn(obj: { keepScreenOn: boolean, success?: Function, fail?: Function, complete?: Function });
    /** VIVO 触发较长时间震动，持续400ms */
    export function vibrateLong();
    /** VIVO 触发较短时间震动，持续15ms */
    export function vibrateShort();

    /*********************************** 界面 ***********************************/

    /** VIVO 显示消息提示框 */
    export function showToast(obj: { message: string, duration?: number });
    /** VIVO 显示 loading 提示框 */
    export function showLoading(obj: { message: string, success?: Function, fail?: Function, complete?: Function });
    /** VIVO 隐藏 loading 提示框 */
    export function hideLoading();
    /** VIVO 显示对话框 */
    export function showDialog(obj: {
        title?: string, message?: string, buttons?: Array<{ text: string, color?: string }>,
        success?: (res: { index: number }) => void, fail?: Function, complete?: Function
    });

    /*********************************** 平台工具 ***********************************/

    /** 加快触发 JavaScriptCore 垃圾回收 */
    export function triggerGC();
}

/** 魅族 系统信息 */
declare interface MZSystemInfo {
    /** 版本号 */
    COREVersion: string;
    /** 设备品牌 */
    brand: string;
    /** 当前环境设置的语言 */
    language: string;
    /** 设备型号 */
    model: string;
    /** 设备像素比 */
    pixelRatio: number;
    /** 客户端平台 */
    platform: string;
    /** 平台版本号 */
    platformVersion: number;
    /** 屏幕宽度 */
    screenWidth: number;
    /** 屏幕高度 */
    screenHeight: number;
    /** 操作系统及版本 */
    system: string;
    /** 异型缺口高度 */
    statusBarHeight: number;
}

/** OPPO 系统信息 */
declare interface OPSystemInfo {
    /** 版本号 */
    COREVersion: string;
    /** 设备品牌 */
    brand: string;
    /** 当前环境设置的语言 */
    language: string;
    /** 设备型号 */
    model: string;
    /** 状态栏/异形缺口高度 */
    statusBarHeight: number;
    /** 设备像素比 */
    pixelRatio: number;
    /** 客户端平台 */
    platformVersionName: string;
    /** 平台版本号 */
    platformVersionCode: number;
    /** 屏幕宽度 */
    screenWidth: number;
    /** 屏幕高度 */
    screenHeight: number;
    /** 操作系统及版本 */
    system: string;
    /** 可使用窗口宽度 */
    windowWidth: number;
    /** 可使用窗口高度 */
    windowHeight: number;
}

/** VIVO 系统信息 */
declare interface VVSystemInfo {
    /** 设备品牌 */
    brand: string;
    /** 设备生产商 */
    manufacturer: string;
    /** 设备型号 */
    model: string;
    /** 设备代号 */
    product: string;
    /** 操作系统名称 */
    osType: string;
    /** 操作系统版本名称 */
    osVersionName: string;
    /** 操作系统版本号 */
    osVersionCode: string;
    /** 运行平台版本名称 */
    platformVersionName: string;
    /** 运行平台版本号 */
    platformVersionCode: number;
    /** 当前环境设置的语言 */
    language: string;
    /** 系统地区 */
    region: string;
    /** 屏幕宽度 */
    screenWidth: number;
    /** 屏幕高度 */
    screenHeight: number;
    /** 当前电量，0.0 - 1.0 之间 */
    battery: number;
    /** wifi信号强度，范围0 - 4 */
    wifiSignal: number;
}

/** OPPO 启动信息 */
declare interface OPLaunchOptions {
    /** 启动小游戏的 query 参数 */
    query: Object;
    /** 小游戏启动来源，可能为{} */
    referrerInfo: { package: string, extraData: Object };
}

/** VIVO 用户信息 */
declare interface VVUserInfo {
    openId: string,
    /** 用户昵称 */
    nickName: string;
    /** 用户社区小头像 */
    smallAvatar: string;
    /** 用户社区大头像 */
    biggerAvatar: string;
    /** 用户性别 */
    gender: number;
}

/** 魅族 banner 广告组件 */
declare interface MZBannerAd {
    /**
     * banner 广告组件的样式。
     * style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，
     * 缩放后的真实尺寸需要通过 MZBannerAd.onResize() 事件获得。 
     */
    style: { left: number, top: number, width: number, height: number };
    /** 监听banner 广告加载事件 */
    onLoad(callback: Function);
    /** 监听banner 广告尺寸变化事件 */
    onResize(callback: (res: { width: number, height: number }) => void);
    /** 显示banner广告，需要create成功后才能显示，用户关闭banner后，需要重新create */
    show();
    /** 隐藏 banner 广告 */
    hide();
    /** 监听banner 广告关闭事件 */
    onClose(callback: Function);
    /** 取消监听banner 广告关闭事件 */
    offClose(callback: Function);
    /** 监听banner 广告错误事件 */
    onError(callback: Function);
    /** 取消监听banner 广告错误事件 */
    offError(callback: Function);
    /** 取消监听banner 广告加载事件 */
    offLoad(callback: Function);
    /** 取消监听banner 广告尺寸变化事件 */
    offResize(callback: Function);
}

/** VIVO banner 广告组件 */
declare interface VVBannerAd {
    // style: { left: number, top: number, width: number, height: number };
    /** 显示banner广告 */
    show(): Promise<any>;
    /** 隐藏banner广告 */
    hide();
    /** 销毁组件，释放资源 */
    destroy();
    /** 监听banner广告加载结束事件 */
    onLoad(callback: Function);
    /** 取消监听banner广告加载结束事件 */
    offLoad(callback: Function);
    /** 监听banner广告关闭事件 */
    onClose(callback: Function);
    /** 取消监听banner广告关闭事件 */
    offClose(callback: Function);
    /** 监听banner 广告错误事件 */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /** 取消监听banner 广告错误事件 */
    offError(callback: Function);
    /** 监听banner 广告尺寸变化事件 */
    onSize(callback: (res: { width: number, height: number }) => void);
    /** 取消监听banner 广告尺寸变化事件 */
    offSize(callback: Function);
}

/** OPPO banner 广告组件 */
declare interface OPBannerAd {
    /** 修改广告的展示位置，参数必须保证广告能够在屏幕完全展示，否则设置不生效 */
    style: { left: number, top: number, width: number, height: number };
    /** 调用 show 方法请求展示 banner */
    show(): Promise<any>;
    /** 隐藏 banner, 出错的时候回调 onError */
    hide();
    /** 设置 banner 隐藏回调，用户手动点击 banner 页面上的关闭按钮也会回调到这里 */
    onHide(callback: Function);
    /** 移除 banner 隐藏回调 */
    offHide(callback: Function);
    /** 设置 banner 成功展示回调 */
    onLoad(callback: Function);
    /** 移除 banner 加载成功回调 */
    offLoad(callback: Function);
    /** 监听banner 广告错误事件 */
    onError(callback: Function);
    /** 取消监听banner 广告错误事件 */
    offError(callback: Function);
    /** 监听banner 广告尺寸变化事件 */
    onResize(callback: (res: { width: number, height: number }) => void);
    /** 取消监听banner 广告尺寸变化事件 */
    offResize(callback: Function);
    /** 销毁组件，释放资源 */
    destroy();
}

/** 魅族 插屏广告组件 */
declare interface MZInsertAd {
    /** 显示插屏广告 */
    show();
    /** 加载插屏广告 */
    load();
    /** 监听插屏广告加载事件 */
    onLoad(callback: Function);
    /** 取消监听插屏广告加载事件 */
    offLoad(callback: Function);
    /** 监听插屏错误事件 */
    onError(callback: Function);
    /** 取消监听插屏错误事件 */
    offError(callback: Function);
    /** 监听插屏广告关闭事件 */
    onClose(callback: Function);
    /** 取消监听插屏广告关闭事件 */
    offClose(callback: Function);
}

/** VIVO 插屏广告组件 */
declare interface VVInterstitialAd {
    /** 显示插屏广告 */
    show(): Promise<any>;
    /** 监听插屏广告加载结束事件 */
    onLoad(callback: Function);
    /** 取消监听插屏广告加载结束事件 */
    offLoad(callback: Function);
    /** 监听插屏广告关闭事件 */
    onClose(callback: Function);
    /** 取消监听插屏广告关闭事件 */
    offClose(callback: Function);
    /** 监听插屏错误事件 */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /** 取消监听插屏错误事件 */
    offError(callback: Function);
}

/** 魅族 激励视频广告组件 */
declare interface MZRewardedVideoAd {
    /** 显示激励视频广告 */
    show();
    /** 加载激励视频广告 */
    load();
    /** 监听激励视频广告加载事件，在onLoad回调后调用show */
    onLoad(callback: Function);
    /** 取消监听激励视频广告加载事件 */
    offLoad(callback: Function);
    /** 设置视频奖励发放回调 */
    onRewarded(callback: Function);
    /** 移除视频奖励发放回调 */
    offRewarded(callback: Function);
    /** 监听激励视频错误事件 */
    onError(callback: Function);
    /** 取消监听激励视频错误事件 */
    offError(callback: Function);
    /**
     * 监听激励视频⼴告关闭事件,通常只有在广告播放完后才会出现关闭按钮，
     * 如果视频下载异常，会直接显示关闭按钮，此时不会回调onRewarded,建议在onClose回调里面也加入奖励发放，避免奖励无法发放。
     */
    onClose(callback: Function);
    /** 取消监听用户点击 关闭广告 按钮的事件 */
    offClose(callback: Function);
}

/** VIVO 激励视频广告组件 */
declare interface VVRewardedVideoAd {
    /** 显示激励视频广告，每条广告只能播放一次，播放完成后即失效，需要调用 RewardedVideoAd.load()加载新广告才能继续播放 */
    show(): Promise<any>;
    /** 加载激励视频广告 */
    load(): Promise<any>;
    /** 监听激励视频广告加载事件 */
    onLoad(callback: Function);
    /** 取消监听激励视频广告加载事件 */
    offLoad(callback: Function);
    /** 监听激励视频错误事件 */
    onError(callback: Function);
    /** 取消监听激励视频错误事件 */
    offError(callback: Function);
    /** 监听用户点击 关闭广告 按钮的事件 */
    onClose(callback: (res: { isEnded: boolean }) => void);
    /** 取消监听用户点击 关闭广告 按钮的事件 */
    offClose(callback: Function);
}

/** VIVO 原生广告组件 */
declare interface VVNativeAd {
    /** 加载原生广告，获取广告数据，成功回调 onLoad，失败回调 onError */
    load(): Promise<any>;
    /** 上报广告曝光 */
    reportAdShow(obj: { adId: string });
    /** 上报广告点击 */
    reportAdClick(obj: { adId: string });
    /** 监听原生广告加载事件 */
    onLoad(callback: (res: { adList: Array<VVNativeAdInfo> }) => void);
    /** 取消监听原生广告加载事件 */
    offLoad(callback: Function);
    /** 监听原生广告错误事件 */
    onError(callback: Function);
    /** 取消监听原生广告错误事件 */
    offError(callback: Function);
}

/** VIVO 原生广告信息 */
declare interface VVNativeAdInfo {
    /** 广告标识，用来上报曝光与点击 */
    adId: string;
    /** 广告标题 */
    title: string;
    /** 广告描述 */
    desc: string;
    /** 推广应用的Icon图标 */
    icon: string;
    /** 广告图片 */
    imgUrlList: Array<string>;
    /** 广告标签图片 */
    logoUrl: string;
    /** 点击按钮文本描述 */
    clickBtnTxt: string;
    /** 获取广告类型，取值说明：0：混合 */
    creativeType: number;
    /** 获取广告点击之后的交互类型，取值说明： 1：网址类 2：应用下载类 8：快应用生态应用 */
    interactionType: number;
}

/** VIVO 一个可以监听下载进度变化事件，以及取消下载任务的对象 */
declare interface VVDownloadTask {
    /** 中断下载任务 */
    abort();
    /** 监听下载进度变化事件 */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void);
}

/**
 * VIVO 网络请求任务对象
 */
declare interface VVRequestTask {
    /** 中断请求任务 */
    abort();
}

interface _VVUploadObj {
    /** 上传url */
    url: string;
    /** 请求的header，会将其所有属性设置到请求的header部分。useragent设置无效 */
    header?: Object;
    /** 默认为POST */
    method?: string;
    /** 需要上传的文件列表，使用multipart/form-data方式提交 */
    files: Array<{ filename?: string, name?: string, uri: string, type?: string }>;
    /** HTTP请求中其他额外的form data */
    data?: Array<{ name: string, value: string }>;
    success?: (code: number, data: string, headers: Object) => void;
    fail?: Function;
    complete?: Function;
}

interface _VVDownloadObj {
    /** 下载资源的 url */
    url: string;
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header: Object;
    /** 
     * 文件的md5值，可校验文件的完整性
     * @version 1054
     */
    md5?: string;
    success?: (res: { tempFilePath: string, statusCode: number }) => void;
    fail?: Function;
    complete?: Function;
}

interface _VVRequestObj {
    /** 开发者服务器接口地址 */
    url: string;
    /** 请求的header */
    header?: Object;
    /** HTTP 请求方法，默认为GET */
    method?: string;
    /** 请求的参数 */
    data?: string;
    /** 返回的数据格式，可以是：json、arraybuffer、text，默认为 json */
    dataType?: string;
    success?: (res: { data: any, header: Object, statusCode: number }) => void;
    fail?: Function;
    complete?: Function;
}