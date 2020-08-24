declare let tt: tt
declare interface tt {
    /*********************************** 渲染 ***********************************/

    /**
     * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 
     * @version 1.31.0
     */
    createCanvas(): TTCanvas;
    /**
     * 加载自定义字体文件
     * @version 1.23.0
     */
    loadFont(path: string): string;
    /**
     * 可以修改渲染帧率，有效范围 1 - 60
     * @version 1.15.0
     */
    setPreferredFramesPerSecond(fps: number);
    /**
     * 创建一个图片对象
     * @version 1.31.0
     */
    createImage(): TTImage;

    /*********************************** 设备 ***********************************/

    /**
     * 监听加速度数据事件 
     */
    onAccelerometerChange(callback: (res: { x: number, y: number, z: number }) => void);
    /**
     * 开始监听加速度数据 
     */
    startAccelerometer(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止监听加速度数据 
     */
    stopAccelerometer(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取系统剪贴板的内容 
     */
    getClipboardData(obj: { success?: (res: { data: string }) => void, fail?: Function, complete?: Function });
    /**
     * 设置系统剪贴板的内容 
     */
    setClipboardData(obj: { data: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听罗盘数据变化事件 
     */
    onCompassChange(callback: (res: { direction: number }) => void);
    /**
     * 开始监听罗盘数据 
     */
    startCompass(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止监听罗盘数据 
     */
    stopCompass(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取网络类型 
     */
    getNetworkType(obj: { success?: (res: { networkType: string }) => void, fail?: Function, complete?: Function });
    /**
     * 监听网络状态变化事件 
     */
    onNetworkStatusChange(callback: (res: { networkType: string }) => void);
    /**
     * 设置是否保持常亮状态 
     */
    setKeepScreenOn(obj: { keepScreenOn?: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 使手机发生较长时间的振动（400 ms) 
     */
    vibrateLong(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     */
    vibrateShort(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取设备电量 
     */
    getBatteryInfo(obj: { success?: (res: { level: string, isCharging: boolean }) => void, fail?: Function, complete?: Function });
    /**
     * tt.getBatteryInfo 的同步版本。 在 iOS 上不可用
     */
    getBatteryInfoSync(): { level: string, isCharging: boolean };
    /**
     * 扫描二维码并返回扫描结果
     */
    scanCode(obj: { success?: (res: { result: string }) => void, fail?: Function, complete?: Function });

    /*********************************** 文件 ***********************************/

    /**
     * 获取全局唯一的文件管理器 
     */
    getFileSystemManager(): TTFileSystemManager;

    /*********************************** 位置 ***********************************/

    /**
     * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
     */
    getLocation(obj: _TTGetLocationObj);

    /*********************************** 媒体 ***********************************/

    /**
     * 创建内部 audio 上下文 TTInnerAudioContext 对象 
     */
    createInnerAudioContext(): TTInnerAudioContext;
    /**
     * 从本地相册选择图片或使用相机拍照。
     * 该 API 需要用户授权方可调用
     */
    chooseImage(obj: _TTChooseImageObj);
    /**
     * 预览一组图片 
     */
    previewImage(obj: { urls: Array<string>, current?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 保存图片到系统相册
     * 该 API 需要用户授权方可调用
     */
    saveImageToPhotosAlbum(obj: { filePath: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取图片信息
     */
    getImageInfo(obj: {
        src: string, success?: (res: { width: number, height: number, type: string }) => void, fail?: Function, complete?: Function
    });
    /**
     * 获取全局唯一的 TTGameRecorderManager 
     */
    getGameRecorderManager(): TTGameRecorderManager;
    /**
     * 创建相机
     */
    createCamera(): TTCamera;
    /**
     * 获取全局唯一的录音管理器 TTRecorderManager 
     */
    getRecorderManager(): TTRecorderManager;

    /*********************************** 网络 ***********************************/

    /**
     * 下载文件资源到本地 
     */
    downloadFile(obj: _TTDownloadObj): TTDownloadTask;
    /**
     * 发起 HTTPS 网络请求 
     */
    request(obj: _TTRequestObj): TTRequestTask;
    /**
     * 将本地资源上传到服务器 
     */
    uploadFile(obj: _TTUploadObj): TTUploadTask;
    /**
     * 创建一个 WebSocket 连接 
     */
    connectSocket(obj: _TTSocketObj): TTSocketTask;

    /*********************************** 转发 ***********************************/

    /**
     * 显示当前页面的转发按钮 
     */
    showShareMenu(obj: { withShareTicket: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 隐藏转发按钮 
     */
    hideShareMenu(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听用户点击右上角菜单的「转发」按钮时触发的事件 
     */
    onShareAppMessage(callback: (res: { channel?: string }) => {
        title?: string, imageUrl?: string, query?: string, extra?: { videoPath?: string, videoTopics?: Array<string>, createChallenge?: boolean }
    });
    /**
     * 取消监听用户点击右上角菜单的「转发」按钮时触发的事件
     */
    offShareAppMessage(callback: Function);
    /**
     * 主动拉起转发
     */
    shareAppMessage(obj: {
        channel?: string, templateId?: string, desc?: string, title?: string, imageUrl?: string, query?: string,
        extra?: { withVideoId?: boolean, videoPath?: string, videoTopics?: Array<string>, createChallenge?: boolean },
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 分享录屏
     */
    shareVideo(obj: {
        title?: string, videoPath: string, query?: string, success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 跳转到分享的视频播放页面 
     */
    navigateToVideoView(obj: { videoId: string, success?: Function, fail?: Function, complete?: Function });

    /*********************************** 数据缓存 ***********************************/

    /**
     * 清理本地数据缓存 
     */
    clearStorage(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * tt.clearStorage 的同步版本 
     */
    clearStorageSync();
    /**
     * 从本地缓存中异步获取指定 key 的内容 
     */
    getStorage(obj: {
        key: string, success?: (res: { data: any }) => void, fail?: Function, complete?: Function
    });
    /**
     * tt.getStorage 的同步版本 
     */
    getStorageSync(key: string): any;
    /**
     * 异步获取当前storage的相关信息 
     */
    getStorageInfo(obj: {
        success?: (res: { keys: Array<string>, currentSize: number, limitSize: number }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * tt.getStorageInfo 的同步版本 
     */
    getStorageInfoSync(): { keys: Array<string>, currentSize: number, limitSize: number };
    /**
     * 从本地缓存中移除指定 key 
     */
    removeStorage(obj: { key: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * tt.removeStorage 的同步版本 
     */
    removeStorageSync(key: string);
    /**
     * 将数据存储在本地缓存中指定的 key 中 
     */
    setStorage(obj: { key: string, data: any, success?: Function, fail?: Function, complete?: Function });
    /**
     * tt.setStorage 的同步版本 
     */
    setStorageSync(key: string, data: any);

    /*********************************** 系统 ***********************************/

    /**
     * 退出当前小游戏 
     */
    exitMiniProgram(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 返回小程序启动参数 
     */
    getLaunchOptionsSync(): TTLaunchOptions;
    /**
     * 监听小游戏回到前台的事件 
     */
    onShow(callback: (res: TTLaunchOptions) => void);
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
     * tt.getSystemInfo 的同步版本 
     */
    getSystemInfoSync(): TTSystemInfo;
    /**
     * 获取系统信息 
     */
    getSystemInfo(obj: { success?: (res: TTSystemInfo) => void, fail?: Function, complete?: Function });
    /**
     * 监听开始触摸事件 
     */
    onTouchStart(callback: (res: { touches: Array<TTTouch>, changedTouches: Array<TTTouch>, timeStamp: number }) => void);
    /**
     * 监听触点移动事件 
     */
    onTouchMove(callback: (res: { touches: Array<TTTouch>, changedTouches: Array<TTTouch>, timeStamp: number }) => void);
    /**
     * 监听触摸结束事件 
     */
    onTouchEnd(callback: (res: { touches: Array<TTTouch>, changedTouches: Array<TTTouch>, timeStamp: number }) => void);
    /**
     * 监听触点失效事件 
     */
    onTouchCancel(callback: (res: { touches: Array<TTTouch>, changedTouches: Array<TTTouch>, timeStamp: number }) => void);
    /**
     * 取消监听开始触摸事件 
     */
    offTouchStart(callback: Function);
    /**
     * 取消监听触点移动事件 
     */
    offTouchMove(callback: Function);
    /**
     * 取消监听触摸结束事件 
     */
    offTouchEnd(callback: Function);
    /**
     * 取消监听触点失效事件 
     */
    offTouchCancel(callback: Function);

    /*********************************** 界面 ***********************************/

    /**
     * 显示消息提示框 
     */
    showToast(obj: {
        title: string, icon?: string, duration?: number, success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 显示模态对话框 
     */
    showModal(obj: {
        title?: string, content?: string, confirmText?: string, showCancel?: boolean, cancelText?: string,
        success?: (res: { confirm: boolean, cancel: boolean }) => void, fail?: Function, complete?: Function
    });
    /**
     * 显示 loading 提示框
     */
    showLoading(obj: { title: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 隐藏 loading 提示框
     */
    hideLoading(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * ​显示操作菜单 
     */
    showActionSheet(obj: {
        itemList: Array<string>, success?: (res: { tapIndex: number }) => void, fail?: Function, complete?: Function
    });
    /**
     * 隐藏消息提示框
     */
    hideToast(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 在小程序内调起关注小程序的引导组件，用于引导用户关注小程序
     * @version 1.41.0 
     */
    showFavoriteGuide(obj: {
        type?: string, content?: string, position?: string, success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 显示键盘 
     */
    showKeyboard(obj: {
        defaultValue: string, maxLength: number, multiple: boolean, confirmHold: boolean,
        confirmType: string, success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 更新键盘输入框内容
     */
    updateKeyboard(obj: { value: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 隐藏键盘 
     */
    hideKeyboard(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听监听键盘收起的事件 
     */
    onKeyboardComplete(callback: (res: { value: string }) => void);
    /**
     * 监听用户点击键盘 Confirm 按钮时的事件 
     */
    onKeyboardConfirm(callback: (res: { value: string }) => void);
    /**
     * 监听键盘输入事件 
     */
    onKeyboardInput(callback: (res: { value: Object }) => void);
    /**
     * 取消监听键盘输入事件 
     */
    offKeyboardInput(callback: Function);
    /**
     * 取消监听用户点击键盘 Confirm 按钮时的事件 
     */
    offKeyboardConfirm(callback: Function);
    /**
     * 取消监听监听键盘收起的事件 
     */
    offKeyboardComplete(callback: Function);
    /**
     * 获取菜单按钮的布局置信息
     */
    getMenuButtonLayout(): TTMenuButtonBoundary;

    /*********************************** 支付 ***********************************/

    /**
     * 发起支付。调用该方法时，需要保证用户已经登录。可以调用checkSession检测用户登录状态
     * @version 1.5.3
     */
    requestGamePayment(obj: _GamePaymentObj);

    /*********************************** Worker ***********************************/

    /**
     * 创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 Worker.terminate
     */
    createWorker(scriptPath: string): TTWorker;

    /*********************************** 更新 ***********************************/

    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新
     * @version 1.9.0
     */
    getUpdateManager(): TTUpdateManager;

    /*********************************** 性能 ***********************************/

    /**
     * 获取性能管理器
     * @version 1.15.0
     */
    getPerformance(): TTPerformance;
    /**
     * 监听内存不足告警事件
     * @version 1.28.0
     */
    onMemoryWarning(callback: Function);
    /**
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）
     * @version 1.15.0
     */
    triggerGC();

    /*********************************** 开放接口 ***********************************/

    /**
     * 调用接口获取登录凭证（code） 
     */
    login(obj: {
        force?: boolean, success?: (res: { code: string, anonymousCode: string, isLogin: boolean }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * 检查登录态是否过期 
     */
    checkSession(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取已登录用户的基本信息或特殊信息。
     * 本 API 需要用户授权方可调用；本 API 依赖于 login，请确保调用前已经调用了该 API
     */
    getUserInfo(obj: _TTGetUserInfoObj);
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
     */
    getSetting(obj: {
        success?: (res: { authSetting: TTAuthSetting }) => void, fail?: Function, complete?: Function
    });
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
     */
    openSetting(obj: {
        success?: (res: { authSetting: TTAuthSetting }) => void, fail?: Function, complete?: Function
    });
    /**
     * 提前向用户发起授权请求 
     */
    authorize(obj: { scope: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 自定义分析数据上报接口。使用前，需要在小程序管理后台事件中新建事件，配置好事件名与字段
     * @version 1.8.0
     */
    reportAnalytics(eventName: string, obj: Object);
    /**
     * 创建关注头条号按钮。暂时只支持在今日头条 App 上使用
     * @version 1.19.0
     */
    createFollowButton(obj: { type: string, image?: string, style: TTButtonStyle }): TTFollowButton;
    /**
     * 查看用户是否已关注头条号
     * @version 1.19.0
     */
    checkFollowState(obj: { success?: (res: { result: boolean }) => void, fail?: Function, complete?: Function });
    /**
     * 创建更多游戏按钮。用户点击该按钮后，会跳转到小游戏盒子，盒子中包含预先配置的小游戏列表以及其他更多游戏。
     * 不支持小游戏盒子的宿主端点击后会展示“更多游戏”弹窗
     * @version 1.23.0
     */
    createMoreGamesButton(obj: _TTCreateMoreGamesButtonObj): TTMoreGamesButton;
    /**
     * 弹出小游戏盒子界面，盒子中包含开发者预先配置的小游戏列表，以及其他游戏推荐。仅 Android 支持，iOS 不支持。
     * 不支持小游戏盒子的宿主端点击后会展示“更多游戏”弹窗
     * @version 1.33.0
     */
    showMoreGamesModal(obj: _TTShowMoreGamesModalObj);
    /**
     * 监听跳转到其它游戏的事件。
     * 该 API 在以下宿主端包括头条，头条 Lite，西瓜，抖音，抖音 Lite，皮皮虾，火山已被废弃，请使用tt.onNavigateToMiniGameBox代替。
     * 在不支持游戏盒子的宿主端仍可用
     * @version 1.33.0
     */
    onNavigateToMiniProgram(callback: (res: { errCode: number, errMsg: string, from: string }) => void);
    /**
     * 取消监听跳转到其他游戏的事件。
     * 该 API 在以下宿主端包括头条，头条 Lite，西瓜，抖音，抖音 Lite，皮皮虾，火山已被废弃，请使用tt.offNavigateToMiniGameBox代替。
     * 在不支持游戏盒子的宿主端仍可用
     * @version 1.33.0
     */
    offNavigateToMiniProgram(callback?: Function);
    /**
     * 监听跳转到小游戏盒子的事件。
     * @version 1.67.0
     */
    onNavigateToMiniGameBox(callback: (res: { errCode: number, errMsg: string }) => void);
    /**
     * 取消监听跳转到小游戏盒子的事件。
     * @version 1.67.0
     */
    offNavigateToMiniGameBox(callback?: Function);
    /**
     * 监听更多游戏弹窗的关闭事件。
     * 该 API 在以下宿主端包括头条，头条 Lite，西瓜，抖音，抖音 Lite，皮皮虾，火山已被废弃。
     * 在不支持游戏盒子的宿主端仍可用
     * @version 1.33.0
     */
    onMoreGamesModalClose(callback: Function);
    /**
     * 取消监听关闭更多游戏弹框的事件。
     * 该 API 在以下宿主端包括头条，头条 Lite，西瓜，抖音，抖音 Lite，皮皮虾，火山已被废弃。
     * 在不支持游戏盒子的宿主端仍可用
     * @version 1.33.0
     */
    offMoreGamesModalClose(callback?: Function);
    /**
     * 创建更多游戏 banner。用户点击后会跳转小游戏盒子，盒子中包含预先配置的小游戏列表。
     * 仅 Android 客户端支持，iOS 不支持
     * @version 1.67.0
     */
    createMoreGamesBanner(obj: {
        type: { left: number, top: number, width: number, verticalAlign?: string, horizontalAlign?: string },
        appLaunchOptions: Array<{ appId: string, query?: string, extraData?: Object }>
    }): TTMoreGamesBanner;
    /**
     * 设置更多游戏配置，用于更新小游戏固定的菜单按钮跳转更多游戏的配置，
     * 调用该 api 会同时更新游戏按钮，更多游戏 banner 和右上角固定的盒子按钮的配置。
     * 仅 Android 客户端支持，iOS 不支持
     * @version 1.67.0
     */
    setMoreGamesInfo(obj: { appLaunchOptions: Array<{ appId: string, query?: string, extraData?: Object }> });
    /**
     * 获取开放数据域 
     */
    getOpenDataContext(): TTOpenDataContext;
    /**
     * 监听主域发送的消息 
     */
    onMessage(callback: Function);
    /**
     * 根据关系类型获取与当前用户相关的其他用户托管数据。
     * 该接口只可在开放数据域下使用 在主域下使用 tt.login 确认当前用户登录后才能使用
     */
    getCloudStorageByRelation(obj: {
        type: string, keyList: Array<string>, extra?: { sortKey: string, groupId: string },
        success?: (res: { data: Array<TTUserGameData> }) => void, fail?: Function, complete?: Function
    });
    /**
     * 对用户托管数据进行写数据操作 
     */
    setUserCloudStorage(obj: { KVDataList: Array<TTKVData>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用 
     */
    getUserCloudStorage(obj: {
        keyList: Array<string>, success?: (res: { data: Array<TTKVData> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 删除用户托管数据当中对应 key 的数据 
     */
    removeUserCloudStorage(obj: { keyList: Array<string>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取主域和开放数据域共享的 sharedCanvas。只有开放数据域能调用
     */
    getSharedCanvas(): TTCanvas;
    /**
     * 设置用户分组
     */
    setUserGroup(obj: { groupId: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 创建客服按钮。
     * @version 1.55.0
     */
    createContactButton(obj: { type: string, image?: string, text?: string, style: TTButtonStyle }): TTContactButton;

    /*********************************** 广告 ***********************************/

    /**
     * 创建激励视频广告组件
     */
    createRewardedVideoAd(obj: { adUnitId: string }): TTRewardedVideoAd;
    /**
     * 创建 banner 广告组件。抖音暂不支持
     */
    createBannerAd(obj: {
        adUnitId: string, adIntervals?: number, style?: { left: number, top: number, width: number }
    }): TTBannerAd;
    /**
     * 创建插屏广告组件。目前该能力只支持竖屏版小游戏。抖音、今日头条极速版暂不支持
     */
    createInterstitialAd(obj: { adUnitId: string }): TTInterstitialAd;
}

/**
 * 画布对象
 */
declare interface TTCanvas {
    /**
     * 画布的宽度 
     */
    width: number;
    /**
     * 画布的高度 
     */
    height: number;
    /**
     * 获取画布对象的绘图上下文 
     */
    getContext(contextType: string): TTRenderingContext;
    /**
     * 把画布上的绘制内容以一个 data URI 的格式返回 
     */
    toDataURL(): string;
    /**
     * 主动释放 canvas 的资源，释放后绑定的 context 将无法使用
     */
    dispose();
    /**
     * 将当前 TTCanvas 保存为一个临时文件。 
     */
    toTempFilePath(obj: {
        x?: number, y?: number, width?: number, height?: number, destWidth?: number, destHeight?: number,
        fileType?: string, quality?: number, success?: (res: { tempFilePath: string }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * TTCanvas.toTempFilePath 的同步版本 
     */
    toTempFilePathSync(obj: {
        x?: number, y?: number, width?: number, height?: number,
        destWidth?: number, destHeight?: number, fileType?: string, quality?: number
    }): string;
}

/**
 * 画布对象的绘图上下文 
 */
declare interface TTRenderingContext {
}

/**
 * 图片对象 
 */
declare interface TTImage {
    /**
     * 图片的 URL 
     */
    src: string;
    /**
     * 图片的真实宽度 
     */
    width: number;
    /**
     * 图片的真实高度 
     */
    height: number;
    /**
     * 图片加载完成后触发的回调函数 
     */
    onload: Function;
    /**
     * 图片加载发生错误后触发的回调函数 
     */
    onerror: Function;
}

/**
 * 文件管理器
 */
declare interface TTFileSystemManager {
    /**
     * 判断文件/目录是否存在 
     */
    access(obj: { path: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function });
    /**
     * TTFileSystemManager.access 的同步版本 
     */
    accessSync(path: string);
    /**
     * 复制文件 
     */
    copyFile(obj: {
        srcPath: string, destPath: string, success?: Function,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.copyFile 的同步版本 
     */
    copyFileSync(srcPath: string, destPath: string);
    /**
     * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 
     */
    getFileInfo(obj: {
        filePath: string, success?: (res: { size: number }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * 获取该小程序下已保存的本地缓存文件列表 
     */
    getSavedFileList(obj: {
        success?: (res: { fileList: Array<{ filePath: string, size: number, createTime: number }> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 创建目录 
     */
    mkdir(obj: {
        dirPath: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.mkdir 的同步版本 
     */
    mkdirSync(dirPath: string);
    /**
     * 读取目录内文件列表 
     */
    readdir(obj: {
        dirPath: string, success?: (res: { files: Array<string> }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.readdir 的同步版本 
     */
    readdirSync(dirPath: string): Array<string>;
    /**
     * 读取本地文件内容 
     */
    readFile(obj: {
        filePath: string, encoding?: string, success?: (res: { data: string | ArrayBuffer }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.readFile 的同步版本 
     */
    readFileSync(filePath: string, encoding?: string): string | ArrayBuffer;
    /**
     * 删除该小程序下已保存的本地缓存文件 
     */
    removeSavedFile(obj: {
        filePath: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * 重命名文件。可以把文件从 oldPath 移动到 newPath 
     */
    rename(obj: {
        oldPath: string, newPath: string, success?: Function,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.rename 的同步版本 
     */
    renameSync(oldPath: string, newPath: string);
    /**
     * 删除目录 
     */
    rmdir(obj: {
        dirPath: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.rmdir 的同步版本 
     */
    rmdirSync(dirPath: string);
    /**
     * 保存临时文件到本地 
     */
    saveFile(obj: {
        tempFilePath: string, filePath?: string, success?: (res: { savedFilePath: string }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.saveFile 的同步版本 
     */
    saveFileSync(tempFilePath: string, filePath: string): string;
    /**
     * 删除文件 
     */
    unlink(obj: { filePath: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function });
    /**
     * TTFileSystemManager.unlink 的同步版本 
     */
    unlinkSync(filePath: string);
    /**
     * 解压文件 
     */
    unzip(obj: {
        zipFilePath: string, targetPath: string, success?: Function,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * 写文件 
     */
    writeFile(obj: {
        filePath: string, data: string | ArrayBuffer, encoding?: string,
        success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.writeFile 的同步版本 
     */
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding: string);
    /**
     * 获取文件 TTStats 对象 
     */
    stat(obj: {
        path: string, success?: (res: { stats: TTStats }) => void, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.stat 的同步版本 
     */
    statSync(path: string): TTStats;
    /**
     * 在文件结尾追加内容。暂未支持
     */
    appendFile(obj: {
        filePath: string, data: string | ArrayBuffer, encoding?: string,
        success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * TTFileSystemManager.appendFile 的同步版本。暂未支持
     */
    appendFileSync(filePath: string, data: string | ArrayBuffer, encoding: string);
}

/**
 * 描述文件状态的对象
 */
declare interface TTStats {
    /**
     * 文件的类型和存取的权限，对应 POSIX stat.st_mode 
     */
    mode: string;
    /**
     * 文件大小，单位：B，对应 POSIX stat.st_size 
     */
    size: number;
    /**
     * 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime 
     */
    lastAccessedTime: number;
    /**
     * 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime 
     */
    lastModifiedTime: number;
    /**
     * 判断当前文件是否一个目录 
     */
    isDirectory(): boolean;
    /**
     * 判断当前文件是否一个普通文件 
     */
    isFile(): boolean;
}

/**
 * TTInnerAudioContext 实例
 */
declare interface TTInnerAudioContext {
    /**
     * 音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID 
     */
    src: string;
    /**
     * 是否自动开始播放，默认为 false 
     */
    autoplay: boolean;
    /**
     * 是否循环播放，默认为 false 
     */
    loop: boolean;
    /**
     * 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
     */
    obeyMuteSwitch: boolean;
    /**
     * 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读）
     */
    duration: number;
    /**
     * 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） 
     */
    currentTime: number;
    /**
     * 当前是是否暂停或停止状态（只读） 
     */
    paused: boolean;
    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）
     */
    buffered: number;
    /**
     * 音量。范围 0~1。默认为 1
     */
    volume: number;
    /**
     * 播放 
     */
    play();
    /**
     * 跳转到指定位置 
     */
    seek(position: number);
    /**
     * 暂停 
     */
    pause();
    /**
     * 停止 
     */
    stop();
    /**
     * 销毁当前实例 
     */
    destroy();
    /**
     * 取消监听音频进入可以播放状态的事件
     */
    offCanplay(callback: Function);
    /**
     * 取消监听音频播放事件
     */
    offPlay(callback: Function);
    /**
     * 取消监听音频进行跳转操作的事件
     */
    offSeeking(callback: Function);
    /**
     * 取消监听音频完成跳转操作的事件
     */
    offSeeked(callback: Function);
    /**
     * 取消监听音频暂停事件
     */
    offPause(callback: Function);
    /**
     * 取消监听音频停止事件
     */
    offStop(callback: Function);
    /**
     * 取消监听音频自然播放至结束的事件
     */
    offEnded(callback: Function);
    /**
     * 取消监听音频播放错误事件
     */
    offError(callback: Function);
    /**
     * 取消监听音频播放进度更新事件
     */
    offTimeUpdate(callback: Function);
    /**
     * 取消监听音频加载中事件
     */
    offWaiting(callback: Function);
    /**
     * 监听音频进入可以播放状态的事件 
     */
    onCanplay(callback: Function);
    /**
     * 监听音频播放事件 
     */
    onPlay(callback: Function);
    /**
     * 监听音频进行跳转操作的事件 
     */
    onSeeking(callback: Function);
    /**
     * 监听音频完成跳转操作的事件 
     */
    onSeeked(callback: Function);
    /**
     * 监听音频暂停事件 
     */
    onPause(callback: Function);
    /**
     * 监听音频停止事件 
     */
    onStop(callback: Function);
    /**
     * 监听音频自然播放至结束的事件 
     */
    onEnded(callback: Function);
    /**
     * 监听音频播放错误事件 
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 监听音频加载中事件 
     */
    onWaiting(callback: Function);
    /**
     * 监听音频播放进度更新事件 
     */
    onTimeUpdate(callback: Function);
}

/**
 * 全局唯一的录屏管理器
 */
declare interface TTGameRecorderManager {
    /**
     * 开始录屏 
     */
    start(obj: { duration?: number });
    /**
     * 监听录屏开始事件 
     */
    onStart(callback: Function);
    /**
     * 记录精彩的视频片段，调用时必须是正在录屏，以调用时的录屏时刻为基准，指定前 x 秒，后 y 秒为将要裁剪的片段，
     * 可以多次调用，记录不同时刻。在结束录屏时，可以调用 clipVideo 接口剪辑并合成记录的片段 
     */
    recordClip(obj: {
        timeRange?: Array<number>, success?: (res: { index: number }) => void, fail?: Function, complete?: Function
    });
    /**
     * 剪辑精彩的视频片段
     */
    recordClip(obj: {
        path: string, timeRange?: Array<number>, clipRange?: Array<number>,
        success?: (res: { videoPath: string }) => void, fail?: Function
    });
    /**
     * 暂停录屏 
     */
    pause();
    /**
     * 监听录屏暂停事件 
     */
    onPause(callback: Function);
    /**
     * 继续录屏 
     */
    resume();
    /**
     * 监听录屏继续事件 
     */
    onResume(callback: Function);
    /**
     * 停止录屏 
     */
    stop();
    /**
     * 监听录屏结束事件 
     */
    onStop(callback: (res: { videoPath: string }) => void);
    /**
     * 监听录屏错误事件 
     */
    onError(callback: (res: { errMsg: string }) => void);
    /**
     * 监听录屏中断开始
     */
    onInterruptionBegin(callback: Function);
    /**
     * 监听录屏中断结束
     */
    onInterruptionEnd(callback: Function);
}

/**
 * 相机对象
 */
declare interface TTCamera {
    /**
     * 启动摄像头 
     */
    start(face: string, beautify: boolean);
    /**
     * 暂停摄像头视频录制
     */
    pause();
    /**
     * 重新开始摄像头视频录制
     */
    resume();
    /**
     * 设置美颜参数 
     */
    setBeautifyParam(whiten: number, smoothen: number, enlargeEye: number, slimFace: number);
    /**
     * 销毁摄像头实例
     */
    destroy();
}

/**
 * 全局唯一的录音管理器
 */
declare interface TTRecorderManager {
    /**
     * 开始录音 
     */
    start(obj: _TTStartRecordObj);
    /**
     * 暂停录音 
     */
    pause();
    /**
     * 继续录音 
     */
    resume();
    /**
     * 停止录音 
     */
    stop();
    /**
     * 监听录音开始事件 
     */
    onStart(callback: Function);
    /**
     * 监听录音暂停事件 
     */
    onPause(callback: Function);
    /**
     * 监听录音继续事件 
     */
    onResume(callback: Function);
    /**
     * 监听录音结束事件 
     */
    onStop(callback: (res: { tempFilePath: string }) => void);
    /**
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件
     */
    onFrameRecorded(callback: (res: { frameBuffer: ArrayBuffer, isLastFrame: boolean }) => void);
    /**
     * 监听录音错误事件 
     */
    onError(callback: (res: { errMsg: string }) => void);
}

/**
 * 一个可以监听下载进度变化事件，以及取消下载任务的对象
 */
declare interface TTDownloadTask {
    /**
     * 中断下载任务
     */
    abort();
    /**
     * 监听下载进度变化事件
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void);
}

/**
 * 网络请求任务对象
 */
declare interface TTRequestTask {
    /**
     * 中断请求任务
     */
    abort();
}

/**
 * 一个可以监听上传进度变化事件，以及取消上传任务的对象
 */
declare interface TTUploadTask {
    /**
     * 中断上传任务 
     */
    abort();
    /**
     * 监听上传进度变化事件
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesSent: number, totalBytesExpectedToSend: number }) => void);
}

/**
 * WebSocket 任务，可通过 tt.connectSocket() 接口创建返回
 */
declare interface TTSocketTask {
    /**
     * 通过 WebSocket 连接发送数据 
     */
    send(obj: { data: string | ArrayBuffer, success?: Function, fail?: Function, complete?: Function });
    /**
     * 关闭 WebSocket 连接 
     */
    close(obj: { code?: number, reason?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听WebSocket 连接打开事件 
     */
    onOpen(callback: (res: { header: Object }) => void);
    /**
     * 监听WebSocket 连接关闭事件 
     */
    onClose(callback: Function);
    /**
     * 监听WebSocket 错误事件 
     */
    onError(callback: (res: { errMsg: string }) => void);
    /**
     * 监听WebSocket 接受到服务器的消息事件 
     */
    onMessage(callback: (res: { data: string | ArrayBuffer }) => void);
}

/**
 * 启动信息
 */
declare interface TTLaunchOptions {
    /**
     * 启动小游戏的 query 参数
     */
    query: Object;
    /**
     * 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。
     */
    referrerInfo: { appId: string, extraData: Object };
}

/**
 * 系统信息
 */
declare interface TTSystemInfo {
    /**
     * 操作系统及版本
     */
    system: string;
    /**
     * 操作系统类型
     */
    platform: string;
    /**
     * 设备品牌
     */
    brand: string;
    /**
     * 设备型号
     */
    model: string;
    /**
     * 宿主 App 版本号（宿主指今日头条、抖音等）
     */
    version: string;
    /**
     * 宿主 APP 名称
     */
    appName: string;
    /**
     * 客户端基础库版本
     */
    SDKVersion: string;
    /**
     * 屏幕宽度，单位px
     */
    screenWidth: number;
    /**
     * 屏幕高度，单位px
     */
    screenHeight: number;
    /**
     * 可使用窗口宽度，单位px
     */
    windowWidth: number;
    /**
     * 可使用窗口高度，单位px
     */
    windowHeight: number;
    /**
     * 设备像素比
     */
    pixelRatio: number;
    /**
     * 在竖屏正方向下的安全区域
     * @version 1.51.0
     */
    safeArea: Object;
}

/**
 * 在触控设备上的触摸点 
 */
declare interface TTTouch {
    /**
     * TTTouch 对象的唯一标识符，只读属性。
     * 一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。
     * 可以根据它来判断跟踪的是否是同一次触摸过程。 
     */
    identifier: number;
    /**
     * 触点相对于屏幕左边沿的 X 坐标。 
     */
    screenX: number;
    /**
     * 触点相对于屏幕上边沿的 Y 坐标。 
     */
    screenY: number;
}

/**
 * 菜单按钮的布局位置信息
 */
declare interface TTMenuButtonBoundary {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}

/**
 * Worker 对象
 */
declare interface TTWorker {
    /**
     * 监听主线程/Worker 线程向当前线程发送的消息的事件 
     */
    onMessage(callback: (res: { message: Object }) => void);
    /**
     * 向主线程/Worker 线程发送的消息 
     */
    postMessage(message: Object);
    /**
     * 结束当前 Worker 线程 
     */
    terminate();
}

/**
 * 版本更新管理器
 */
declare interface TTUpdateManager {
    /**
     * 应用更新包并重启 
     */
    applyUpdate();
    /**
     * 监听检查更新结果回调 
     */
    onCheckForUpdate(callback: Function);
    /**
     * 监听更新包下载失败回调 
     */
    onUpdateFailed(callback: Function);
    /**
     * 监听更新包下载成功回调 
     */
    onUpdateReady(callback: Function);
}

/**
 * 性能管理器
 */
declare interface TTPerformance {
    /**
     * 可以获取当前时间以微秒为单位的时间戳 
     */
    now(): number;
}

/**
 * 用户信息 
 */
declare interface TTUserInfo {
    /**
     * 用户昵称 
     */
    nickName: string;
    /**
     * 用户头像 
     */
    avatarUrl: string;
    /**
     * 用户性别 
     */
    gender: number;
    /**
     * 用户所在国家 
     */
    country: string;
    /**
     * 用户所在省份 
     */
    province: string;
    /**
     * 用户所在城市 
     */
    city: string;
    /**
     * 用户语言，目前为空
     */
    language: string;
    /**
     * 用户 openId
     */
    openId?: string;
}

/**
 * 用户授权设置信息 
 */
declare interface TTAuthSetting {
    /**
     * 是否授权用户信息，对应接口 tt.getUserInfo
     */
    "scope.userInfo": boolean;
    /**
     * 是否授权地理位置，对应接口 tt.getLocation
     */
    "scope.userLocation": boolean;
    /**
     * 是否授权通讯地址，对应接口 tt.chooseAddress
     */
    "scope.address": boolean;
    /**
     * 是否授权录音功能，对应接口 tt.getRecorderManager.start
     */
    "scope.record": boolean;
    /**
     * 是否授权保存到相册 tt.saveImageToPhotosAlbum, tt.saveVideoToPhotosAlbum
     */
    "scope.album": boolean;
    /**
     * 是否授权摄像头 对应接口 tt.scanCode，tt.chooseImage，tt.chooseVideo
     */
    "scope.camera": boolean;
}

/**
 * 按钮Style
 */
declare interface TTButtonStyle {
    left: number;
    top: number;
    width: number;
    height: number;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    textAlign: string;
    fontSize: number;
    lineHeight: number;
    textColor: string;
}

/**
 * 关注按钮对象
 */
declare interface TTFollowButton {
    /**
     * 销毁按钮 
     */
    destroy();
    /**
     * 隐藏按钮 
     */
    hide();
    /**
     * 移除 onTap 绑定的监听函数 
     */
    offTap(callback: Function);
    /**
     * 监听按钮点击事件 
     */
    onTap(callback: Function);
    /**
     * 显示按钮 
     */
    show();
}

/**
 * 更多游戏按钮对象
 */
declare interface TTMoreGamesButton {
    /**
     * 销毁按钮 
     */
    destroy();
    /**
     * 隐藏按钮 
     */
    hide();
    /**
     * 移除 onTap 绑定的监听函数 
     */
    offTap(callback: Function);
    /**
     * 监听按钮点击事件 
     */
    onTap(callback: Function);
    /**
     * 显示按钮 
     */
    show();
}

/**
 * MoreGamesBanner 对象
 */
declare interface TTMoreGamesBanner {
    /**
     * 显示 banner 
     */
    show();
    /**
     * 隐藏 banner 
     */
    hide();
    /**
     * Banner 大小调整回调 可以在 onResize 根据 banner 大小 调整 banner 的定位。 
     */
    onResize(callback: Function);
    /**
     * 监听点击 banner 事件
     */
    onTap(callback: Function);
    /**
     * 取消监听 Banner 大小调整回调
     */
    offTap(callback: Function);
    /**
     * 取消监听点击 banner 事件
     */
    offResize(callback: Function);
    /**
     * 监听异常事件
     */
    onError(callback: Function);
    /**
     * 取消监听异常事件
     */
    offError(callback: Function);
}

/**
 * 开放数据域对象
 */
declare interface TTOpenDataContext {
    /**
     * 开放数据域和主域共享的 sharedCanvas 
     */
    canvas: TTCanvas;
    /**
     * 向开放数据域发送消息 
     */
    postMessage(message: Object);
}

/**
 * 用户数据
 */
declare interface TTUserGameData {
    /**
     * 用户的头像 url 
     */
    avatarUrl: string;
    /**
     * 用户的昵称 
     */
    nickname: string;
    /**
     * 用户的 openid 
     */
    openid: string;
    /**
     * 用户的托管 KV 数据列表 
     */
    KVDataList: Array<TTKVData>;
}

/**
 * 托管的 KV 数据 
 */
declare interface TTKVData {
    /**
     * 数据的 key 
     */
    key: string;
    /**
     * 数据的 value 
     */
    value: string;
}

/**
 * ContactButton 对象
 */
declare interface TTContactButton {
    /**
     * 销毁按钮 
     */
    destroy();
    /**
     * 隐藏按钮 
     */
    hide();
    /**
     * 移除 onTap 绑定的监听函数 
     */
    offTap(callback: Function);
    /**
     * 监听按钮点击事件 
     */
    onTap(callback: Function);
    /**
     * 显示按钮 
     */
    show();
}

/**
 * 激励视频广告组件
 */
declare interface TTRewardedVideoAd {
    /**
     * 显示激励视频广告 
     */
    show(): Promise<any>;
    /**
     * 监听激励视频广告加载事件 
     */
    onLoad(callback: Function);
    /**
     * 取消监听激励视频广告加载事件 
     */
    offLoad(callback: Function);
    /**
     * 加载激励视频广告
     */
    load(): Promise<any>;
    /**
     * 监听激励视频错误事件 
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 取消监听激励视频错误事件 
     */
    offError(callback: Function);
    /**
     * 监听用户点击 关闭广告 按钮的事件 
     */
    onClose(callback: (res: { isEnded: boolean }) => void);
    /**
     * 取消监听用户点击 关闭广告 按钮的事件 
     */
    offClose(callback: Function);
}

/**
 * banner 广告组件
 */
declare interface TTBannerAd {
    /**
     * banner 广告组件的样式。
     * style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，
     * 缩放后的真实尺寸需要通过 TTBannerAd.onResize() 事件获得。 
     */
    style: { left: number, top: number, width: number, height: number };
    /**
     * 显示 banner 广告。
     * 必须调用 BannerAd.onLoad 监听广告素材成功拉取后才能调用 BannerAd.show()，否则广告将无法及时展示
     */
    show(): Promise<any>;
    /**
     * 隐藏 banner 广告 
     */
    hide();
    /**
     * 监听banner 广告加载事件 
     */
    onLoad(callback: Function);
    /**
     * 取消监听banner 广告加载事件 
     */
    offLoad(callback: Function);
    /**
     * 监听banner 广告错误事件 
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 取消监听banner 广告错误事件 
     */
    offError(callback: Function);
    /**
     * 监听banner 广告尺寸变化事件 
     */
    onResize(callback: (res: { width: number, height: number }) => void);
    /**
     * 取消监听banner 广告尺寸变化事件 
     */
    offResize(callback: Function);
    /**
     * 销毁 banner 广告 
     */
    destroy();
}

/**
 * 插屏广告组件
 */
declare interface TTInterstitialAd {
    /**
     * 显示插屏广告
     */
    show(): Promise<any>;
    /**
     * 加载插屏广告 
     */
    load(): Promise<any>;
    /**
     * 销毁插屏广告实例
     */
    destroy();
    /**
     * 监听插屏广告关闭事件
     */
    onClose(callback: Function);
    /**
     * 监听插屏错误事件 
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 监听插屏广告加载事件 
     */
    onLoad(callback: Function);
    /**
     * 取消监听插屏广告关闭事件
     */
    offClose(callback: Function);
    /**
     * 取消监听插屏错误事件 
     */
    offError(callback: Function);
    /**
     * 取消监听插屏广告加载事件 
     */
    offLoad(callback: Function);
}

interface _TTGetLocationObj {
    /**
     * 指定坐标系类型，可以是 "wgs84" 或 "gcj02"
     * @default "wgs84"
     */
    type?: string;
    success?: (res: {
        latitude: number, longitude: number, altitude: number, accuracy: number, speed: number,
        verticalAccuracy: number, horizontalAccuracy: number, city: string
    }) => void;
    fail?: Function;
    complete?: Function;
}

interface _TTChooseImageObj {
    /**
     * 最多可以选择的图片张数
     * @default 9
     */
    count?: number;
    /**
     * 选择图片的来源
     * @default ["album", "camera"]
     */
    sourceType: Array<string>;
    success?: (res: { tempFilePaths: Array<string>, tempFiles: Array<{ path: string, size: number }> }) => void;
    fail?: Function;
    complete?: Function;
}

interface _TTStartRecordObj {
    /**
     * 录音的时长，单位 ms，最大值 600000（10 分钟）
     * @default 60000
     */
    duration?: number;
    /**
     * 采样率
     * @default 8000
     */
    sampleRate?: number;
    /**
     * 录音通道数	
     * @default 1
     */
    numberOfChannels?: number;
    /**
     * 编码码率	
     * @default 48000
     */
    encodeBitRate?: number;
    /**
     * 指定帧大小，单位 KB
     */
    frameSize?: number;
}

interface _TTDownloadObj {
    /** 
     * 下载资源的 url
     */
    url: string;
    /** 
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: Object;
    success?: (res: { tempFilePath: string, statusCode: number }) => void;
    fail?: Function;
    complete?: Function;
}

interface _TTRequestObj {
    /** 
     * 开发者服务器接口地址
     */
    url: string;
    /** 
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: Object;
    /** 
     * HTTP 请求方法
     * @default "GET"
     */
    method?: string;
    /** 
     * 请求的参数
     */
    data?: any;
    /** 
     * 返回的数据格式
     * @default "json"
     */
    dataType?: string;
    /** 
     * 响应的数据类型
     * @default "text"
     */
    responseType?: string;
    success?: (res: { data: any, statusCode: number, header: Object }) => void;
    fail?: Function;
    complete?: Function;
}

interface _TTUploadObj {
    /** 
     * 开发者服务器地址
     */
    url: string;
    /** 
     * 要上传文件资源的路径 (本地路径)
     */
    filePath: string;
    /** 
     * 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
     */
    name: string;
    /** 
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: Object;
    /** 
     * HTTP 请求中其他额外的 form data
     */
    formData?: Object;
    success?: (res: { data: string, statusCode: number }) => void;
    fail?: Function;
    complete?: Function;
}

interface _TTSocketObj {
    /** 
     * 开发者服务器 wss 接口地址
     */
    url: string;
    /** 
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: Object;
    /** 
     * 子协议数组
     */
    protocols?: Array<string>;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _GamePaymentObj {
    /**
     * 支付的类型，不同的支付类型有各自额外要传的附加参数。
     */
    mode: string;
    /**
     * 环境配置
     */
    env: number;
    /**
     * 币种
     */
    currencyType: string;
    /**
     * 申请接入时的平台
     */
    platform: string;
    /**
     * 购买数量
     */
    buyQuantity: number;
    /**
     * 游戏服务器大区 id，游戏不分大区则默认填写"1"
     */
    zoneId?: string;
    /**
     * 开发者自定义唯一订单号
     */
    customId?: string;
    /**
     * 开发者自定义其他信息
     */
    extraInfo?: Object;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _TTGetUserInfoObj {
    /**
     * 是否需要返回敏感数据
     */
    withCredentials?: boolean;
    success?: (res: { userInfo: TTUserInfo, rawData: string, signature: string, encryptedData: string, iv: string }) => void;
    fail?: Function;
    complete?: Function;
}

interface _TTCreateMoreGamesButtonObj {
    /** 
     * 按钮的类型，取值 image 或 text
     */
    type: string;
    /** 
     * 按钮的背景图片
     */
    image?: string;
    /** 
     * 按钮上的文本内容
     * @default "更多游戏"
     */
    text?: string;
    /** 
     * 按钮的样式
     */
    style: TTButtonStyle;
    /** 
     * 小游戏的启动参数
     */
    appLaunchOptions: Array<{ appId: string, query?: string, extraData?: Object }>;
    /**
     * 跳转小游戏时的回调函数（ 废弃）
     */
    onNavigateToMiniGame?: Function;
    /**
     * 跳转到小游戏盒子时的回调函数
     * @version 1.67.0
     */
    onNavigateToMiniGameBox?: (res: { errCode: number, errMsg: string }) => void;
    /**
     * 点击互跳按钮的跳转行为
     * @version 1.61.0
     */
    actionType?: string;
}

interface _TTShowMoreGamesModalObj {
    /** 
     * 小游戏的启动参数
     */
    appLaunchOptions: Array<{ appId: string, query?: string, extraData?: Object }>;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

/**
 * 取消由 requestAnimationFrame 添加到计划中的动画帧请求 
 */
declare function cancelAnimationFrame(requestID: number): void;
/**
 * 在下次进行重绘时执行 
 */
declare function requestAnimationFrame(callback: Function): number;
/**
 * 取消由 setInterval 设置的定时器 
 */
declare function clearInterval(intervalID: number): void;
/**
 * 取消由 setTimeout 设置的定时器 
 */
declare function clearTimeout(timeoutID: number): void;
/**
 * 设定一个定时器 
 */
declare function setInterval(callback: Function, delay: number, rest: any): number;
/**
 * 设定一个定时器 
 */
declare function setTimeout(callback: Function, delay: number, rest: any): number;

// /**
//  * 向调试面板中打印日志。console 是一个全局对象，可以直接访问
//  */
// declare interface console {
//     /**
//      * 向调试面板中打印 debug 日志 
//      */
//     debug();
//     /**
//      * 向调试面板中打印 error 日志 
//      */
//     error();
//     /**
//      * 在调试面板中创建一个新的分组 
//      */
//     group(label: string);
//     /**
//      * 结束由 console.group 创建的分组 
//      */
//     groupEnd();
//     /**
//      * 向调试面板中打印 info 日志 
//      */
//     info();
//     /**
//      * 向调试面板中打印 log 日志 
//      */
//     log();
//     /**
//      * 向调试面板中打印 warn 日志 
//      */
//     warn();
// }