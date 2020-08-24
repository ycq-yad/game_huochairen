declare let qq: qq
declare interface qq {
    /*********************************** 基础 ***********************************/

    /**
     * qq.getSystemInfo 的同步版本 
     */
    getSystemInfoSync(): QQSystemInfo;
    /**
     * 获取系统信息 
     */
    getSystemInfo(obj: { success?: (res: QQSystemInfo) => void, fail?: Function, complete?: Function });
    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新
     */
    getUpdateManager(): QQUpdateManager;
    /**
     * 监听小游戏回到前台的事件 
     */
    onShow(callback: (res: QQLaunchOptions) => void);
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
     * 返回小程序启动参数 
     */
    getLaunchOptionsSync(): QQLaunchOptions;
    /**
     * 退出当前小游戏 
     */
    exitMiniProgram(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听全局错误事件 
     */
    onError(callback: (res: { message: string, stack: string }) => void);
    /**
     * 监听音频中断结束事件
     */
    onAudioInterruptionEnd(callback: Function);
    /**
     * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、QQ语音聊天、QQ视频聊天。此事件触发后，小程序内所有音频会暂停
     */
    onAudioInterruptionBegin(callback: Function);
    /**
     * 取消监听全局错误事件 
     */
    offError(callback: Function);
    /**
     * 取消监听音频中断结束事件
     */
    offAudioInterruptionEnd(callback: Function);
    /**
     * 取消监听音频因为受到系统占用而被中断开始事件
     */
    offAudioInterruptionBegin(callback: Function);
    /**
     * 监听开始触摸事件 
     */
    onTouchStart(callback: (res: { touches: Array<QQTouch>, changedTouches: Array<QQTouch>, timeStamp: number }) => void);
    /**
     * 监听触点移动事件 
     */
    onTouchMove(callback: (res: { touches: Array<QQTouch>, changedTouches: Array<QQTouch>, timeStamp: number }) => void);
    /**
     * 监听触摸结束事件 
     */
    onTouchEnd(callback: (res: { touches: Array<QQTouch>, changedTouches: Array<QQTouch>, timeStamp: number }) => void);
    /**
     * 监听触点失效事件 
     */
    onTouchCancel(callback: (res: { touches: Array<QQTouch>, changedTouches: Array<QQTouch>, timeStamp: number }) => void);
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
    /**
     * 触发分包加载
     */
    loadSubpackage(obj: { name: string, success: Function, fail: Function, complete: Function }): QQLoadSubpackageTask;
    /**
     * 设置是否打开调试开关。此开关对正式版也能生效。
     */
    setEnableDebug(obj: { enableDebug: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取小程序运行环境，运行开发版或预览版小程序返回"develop",体验版返回"trial",除此之外其它环境均返回"release"
     * @version 1.7.1
     */
    getEnvVersion();

    /*********************************** 渲染 ***********************************/

    /**
     * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 
     */
    createCanvas(): QQCanvas;
    /**
     * 可以修改渲染帧率，有效范围 1 - 60
     */
    setPreferredFramesPerSecond(fps: number);
    /**
     * 加载自定义字体文件 
     */
    loadFont(path: string): string;
    /**
     * 获取一行文本的行高 
     */
    getTextLineHeight(obj: {
        fontStyle?: string, fontWeight?: string, fontSize?: number, fontFamily: string,
        text: string, success?: Function, fail?: Function, complete?: Function;
    }): number;
    /**
     * 创建一个图片对象 
     */
    createImage(): QQImage;
    /**
     * 为提升3D游戏性能，我们新增了 WebGLPlus 相关接口。
     * 通过 qq.webglPlus 获取 WebglPlus 单例对象，以进行动画、裁剪等高性能计算调用，只允许在主域调用。
     * 从基础库1.8.0、LayaAir2.3.0版本后开始支持
     * @version 1.8.0
     */
    webglPlus(): QQWebGLPlus;

    /*********************************** 广告 ***********************************/

    /**
     * 创建激励视频广告组件
     */
    createRewardedVideoAd(obj: { adUnitId: string }): QQRewardedVideoAd;
    /**
     * 创建 banner 广告组件。首次调用需填写 left 和 top 值才能正确展示，如需改变位置可再动态调整
     */
    createBannerAd(obj: {
        adUnitId: string, style: { left: number, top: number, width: number, height: number }, testDemoType?: string
    }): QQBannerAd;
    /**
     * 创建广告盒子组件
     * @version 1.7.1
     */
    createAppBox(obj: { adUnitId: string }): QQAppBox;
    /**
     * 创建插屏广告组件
     * @version 1.12.0
     */
    createInterstitialAd(obj: { adUnitId: string }): QQInterstitialAd;
    /**
     * 创建积木广告组件
     * @version 1.15.0
     */
    createBlockAd(obj: { adUnitId: string, style: { left: number, top: number }, size: number, orientation: string }): QQBlockAd;

    /*********************************** 界面 ***********************************/

    /**
     * 显示消息提示框 
     */
    showToast(obj: {
        title: string, icon?: string, image?: string, duration?: number, mask?: boolean,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 显示模态对话框 
     */
    showModal(obj: {
        title: string, content: string, showCancel?: boolean, cancelText?: string, cancelColor?: string,
        confirmText?: string, confirmColor?: string, success?: (res: { confirm: boolean, cancel: boolean }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 显示 loading 提示框
     */
    showLoading(obj: { title: string, mask?: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 隐藏 loading 提示框
     */
    hideLoading(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 隐藏消息提示框
     */
    hideToast(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * ​显示操作菜单 
     */
    showActionSheet(obj: {
        itemList: Array<string>, itemColor?: string,
        success?: (res: { tapIndex: number }) => void, fail?: Function, complete?: Function
    });
    /**
     * 更新键盘输入框内容
     */
    updateKeyboard(obj: { value: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 显示键盘 
     */
    showKeyboard(obj: {
        defaultValue: string, maxLength: number, multiple: boolean, confirmHold: boolean,
        confirmType: string, success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 监听键盘输入事件 
     */
    onKeyboardInput(callback: (res: { value: Object }) => void);
    /**
     * 监听用户点击键盘 Confirm 按钮时的事件 
     */
    onKeyboardConfirm(callback: (res: { value: string }) => void);
    /**
     * 监听监听键盘收起的事件 
     */
    onKeyboardComplete(callback: (res: { value: string }) => void);
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
     * 隐藏键盘 
     */
    hideKeyboard(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取菜单按钮的布局置信息。坐标信息以屏幕左上角为原点
     */
    getMenuButtonBoundingClientRect(): QQMenuButtonBoundary;
    /**
     * 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏 
     */
    setStatusBarStyle(obj: { style: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 取消监听窗口尺寸变化事件 
     */
    offWindowResize(callback: Function);
    /**
     * 监听窗口尺寸变化事件 
     */
    onWindowResize(callback: (res: { windowWidth: number, windowHeight: number }) => void);

    /*********************************** 网络 ***********************************/

    /**
     * 发起 HTTPS 网络请求 
     */
    request(obj: _QQRequestObj): QQRequestTask;
    /**
     * 下载文件资源到本地 
     */
    downloadFile(obj: _QQDownloadObj): QQDownloadTask;
    /**
     * 将本地资源上传到服务器 
     */
    uploadFile(obj: _QQUploadObj): QQUploadTask;
    /**
     * 创建一个 UDP Socket 实例
     * @version 1.6.9
     */
    createUDPSocket(): QQUDPSocket;
    /**
     * 通过 WebSocket 连接发送数据 
     */
    sendSocketMessage(obj: { data: string | ArrayBuffer, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听WebSocket 连接打开事件 
     */
    onSocketOpen(callback: (res: { header: Object }) => void);
    /**
     * 监听WebSocket 接受到服务器的消息事件 
     */
    onSocketMessage(callback: (res: { data: string | ArrayBuffer }) => void);
    /**
     * 监听WebSocket 错误事件 
     */
    onSocketError(callback: Function);
    /**
     * 监听WebSocket 连接关闭事件 
     */
    onSocketClose(callback: Function);
    /**
     * 创建一个 WebSocket 连接 
     */
    connectSocket(obj: _QQSocketObj): QQSocketTask;
    /**
     * 关闭 WeSocket 连接 
     */
    closeSocket(obj: { code?: number, reason?: string, success?: Function, fail?: Function, complete?: Function });

    /*********************************** 转发 ***********************************/

    /**
     * 更新转发属性 
     */
    updateShareMenu(obj: _QQUpdateShareMenuObj);
    /**
     * 显示当前页面的转发按钮 
     */
    showShareMenu(obj: {
        showShareItems?: Array<string>, withShareTicket?: boolean,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 主动拉起转发。可以选择不同的转发目标类型 
     */
    shareAppMessage(obj: _QQShareAppMessageObj);
    /**
     * 监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件
     */
    onShareAppMessage(callback: () => { title: string, imageUrl: string, query: string });
    /**
     * 取消监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件
     */
    offShareAppMessage(callback: Function);
    /**
     * 隐藏"转发"、"分享到空间"按钮 
     */
    hideShareMenu(obj: { hideShareItems?: Array<string>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取转发详细信息 
     */
    getShareInfo(obj: _QQGetShareInfoObj);
    /**
     * 发送实时组队消息接口。
     * 调用此接口前，请务必确保您已接入实时组队消息能力，否则调用无效，具体接入方法请查看文档
     * @version 1.15.0
     */
    shareInvite(obj: { success?: Function, fail?: (res: { errCode: number, errMsg: string }) => void, complete?: Function });

    /*********************************** 虚拟支付 ***********************************/

    /**
     * 发起米大师支付 
     */
    requestMidasPayment(obj: _QQMidasPaymentObj);

    /*********************************** 离线模式 ***********************************/

    /**
     * 记录离线资源状态 
     */
    recordOffLineResourceState(obj: { isComplete?: boolean, success?: Function, fail?: Function, complete?: Function });

    /*********************************** 数据缓存 ***********************************/

    /**
     * 清理本地数据缓存 
     */
    clearStorage(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * qq.clearStorage 的同步版本 
     */
    clearStorageSync();
    /**
     * 从本地缓存中异步获取指定 key 的内容 
     */
    getStorage(obj: {
        key: string, success?: (res: { data: any }) => void, fail?: Function, complete?: Function
    });
    /**
     * 异步获取当前storage的相关信息 
     */
    getStorageInfo(obj: {
        success?: (res: { keys: Array<string>, currentSize: number, limitSize: number }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * qq.getStorageInfo 的同步版本 
     */
    getStorageInfoSync(): { keys: Array<string>, currentSize: number, limitSize: number };
    /**
     * qq.getStorage 的同步版本 
     */
    getStorageSync(key: string): any;
    /**
     * 从本地缓存中移除指定 key 
     */
    removeStorage(obj: { key: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * qq.removeStorage 的同步版本 
     */
    removeStorageSync(key: string);
    /**
     * 将数据存储在本地缓存中指定的 key 中 
     */
    setStorage(obj: { key: string, data: any, success?: Function, fail?: Function, complete?: Function });
    /**
     * qq.setStorage 的同步版本 
     */
    setStorageSync(key: string, data: any);

    /*********************************** 媒体 ***********************************/

    /**
     * 设置 QQInnerAudioContext 的播放选项
     */
    setInnerAudioOption(obj: {
        mixWithOther?: boolean, obeyMuteSwitch?: boolean, success?: Function,
        fail?: Function, complete?: Function
    });
    /**
     * 获取当前支持的音频输入源
     */
    getAvailableAudioSources(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 创建内部 audio 上下文 QQInnerAudioContext 对象 
     */
    createInnerAudioContext(): QQInnerAudioContext;
    /**
     * 保存图片到系统相册
     * 调用前需要 用户授权 scope.writePhotosAlbum
     */
    saveImageToPhotosAlbum(obj: { filePath: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作
     */
    previewImage(obj: { urls: Array<string>, current?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 从本地相册选择图片或使用相机拍照 
     */
    chooseImage(obj: _QQChooseImageObj);
    /**
     * 获取全局唯一的录音管理器 QQRecorderManager 
     */
    getRecorderManager(): QQRecorderManager;
    /**
     * 创建视频 
     */
    createVideo(obj: _QQCreateVideoObj): QQVideo;

    /*********************************** 位置 ***********************************/

    /**
     * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
     * 调用前需要 用户授权 scope.userLocation
     */
    getLocation(obj: _QQGetLocationObj);

    /*********************************** 文件 ***********************************/

    /**
     * 获取全局唯一的文件管理器 
     */
    getFileSystemManager(): QQFileSystemManager;

    /*********************************** 开放接口 ***********************************/

    /**
     * 获取用户信息
     * 调用前需要 用户授权 scope.userInfo
     */
    getUserInfo(obj: _QQGetUserInfoObj);
    /**
     * 创建用户信息按钮 
     */
    createUserInfoButton(obj: _QQUserInfoButtonObj): QQUserInfoButton;
    /**
     * 检查登录态是否过期 
     */
    checkSession(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 调用接口获取登录凭证（code） 
     */
    login(obj: { timeout?: number, success?: (res: { code: string }) => void, fail?: Function, complete?: Function });
    /**
     * 提前向用户发起授权请求 
     */
    authorize(obj: { scope: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 对用户托管数据进行写数据操作 
     */
    setUserCloudStorage(obj: { KVDataList: Array<QQKVData>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 删除用户托管数据当中对应 key 的数据 
     */
    removeUserCloudStorage(obj: { keyList: Array<string>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
     */
    getUserCloudStorage(obj: {
        keyList: Array<string>, success?: (res: { KVDataList: Array<QQKVData> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取主域和开放数据域共享的 sharedCanvas。只有开放数据域能调用
     */
    getSharedCanvas(): QQCanvas;
    /**
     * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口只可在开放数据域下使用 
     */
    getGroupCloudStorage(obj: {
        shareTicket: string, keyList: Array<string>,
        success?: (res: { data: Array<QQUserGameData> }) => void, fail?: Function, complete?: Function
    });
    /**
     * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用 
     */
    getFriendCloudStorage(obj: {
        keyList: Array<string>, success?: (res: { data: Array<QQUserGameData> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 在无须用户授权的情况下，批量获取用户信息。该接口只在开放数据域下可用
     */
    getUserInfo(obj: {
        openIdList?: Array<string>, lang?: string, success?: (res: { data: Array<QQUserInfo> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取开放数据域 
     */
    getOpenDataContext(): QQOpenDataContext;
    /**
     * 监听主域发送的消息 
     */
    onMessage(callback: Function);
    /**
     * 创建打开意见反馈页面的按钮 
     */
    createFeedbackButton(obj: { type: string, text?: string, image?: string, style: QQButtonStyle }): QQFeedbackButton;
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
     */
    openSetting(obj: {
        success?: (res: { authSetting: QQAuthSetting }) => void, fail?: Function, complete?: Function
    });
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
     */
    getSetting(obj: {
        success?: (res: { authSetting: QQAuthSetting }) => void, fail?: Function, complete?: Function
    });
    /**
     * 创建打开设置页面的按钮
     */
    createOpenSettingButton(obj: { type: string, text?: string, image?: string, style: QQButtonStyle }): QQOpenSettingButton;
    /**
     * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。
     * 开发者需要在管理端申请开通，目前功能正在内测中，满足内测资格即可在开发者管理端看到开通入口
     */
    openCustomerServiceConversation(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取用户过去三十天QQ运动步数。需要先调用 qq.login 接口
     * 调用前需要 用户授权 scope.qqrun
     * @version 1.7.1
     */
    getQQRunData(obj: {
        success?: (res: { encryptedData: string, iv: string }) => void, fail?: Function, complete?: Function
    });
    /**
     * 创建打开添加好友页面的按钮 
     */
    createAddFriendButton(obj: {
        type: string, text?: string, image?: string, style: QQButtonStyle, openid: string
    }): QQAddFriendButton;
    /**
     * 根据是否带有 tmplIds 参数分为 一次性订阅 和 长期订阅：
     * 长期订阅： 向用户发起主动订阅小程序授权请求，调用后会弹窗询问用户是否同意长期订阅消息。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
     * 一次性订阅： 向用户发起一次性订阅消息授权请求，调用后会弹窗询问用户是否同意一次性订阅消息。无论用户之前是否同意授权，下次都会出现弹窗。
     * 后续如果需要修改订阅状态，可通过 qq.openSetting(Object object)跳转至设置页面，让用户手动修改
     */
    subscribeAppMsg(obj: { tmplIds?: Array<string>, subscribe: boolean, success?: Function, fail?: Function });
    /**
     * 添加彩签
     * @version 1.10.0
     */
    addColorSign(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 判断是否已在彩签内
     * @version 1.16.0
     */
    isColorSignExistSync(): boolean;
    /**
     * 打开公众号资料卡，可以通过publicId参数设定需要打开的公众号资料卡的号码，
     * 同时game.json中必须配置publicIdList（目前只能配置1个），表明可以打开的公众号资料卡的号码
     * @version 1.12.0
     */
    openPublicProfile(obj: { publicId: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 呼起群资料卡页面，可以通过groupId属性设定需要打开的群资料卡的群号，
     * 同时game.json中必须配置groupIdList（数量不超过10个），表明可以打开群资料卡的群号
     * @version 1.4.7
     */
    openGroupProfile(obj: { groupId: string, success?: Function, fail?: Function, complete?: Function });

    /*********************************** 设备 ***********************************/

    /**
     * 获取设备电量 
     */
    getBatteryInfo(obj: { success?: (res: { level: string, isCharging: boolean }) => void, fail?: Function, complete?: Function });
    /**
     * qq.getBatteryInfo 的同步版本。 在 iOS 上不可用
     */
    getBatteryInfoSync(): { level: string, isCharging: boolean };
    /**
     * 获取系统剪贴板的内容 
     */
    getClipboardData(obj: { success?: (res: { data: string }) => void, fail?: Function, complete?: Function });
    /**
     * 设置系统剪贴板的内容 
     */
    setClipboardData(obj: { data: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取网络类型 
     */
    getNetworkType(obj: { success?: (res: { networkType: string }) => void, fail?: Function, complete?: Function });
    /**
     * 监听网络状态变化事件 
     */
    onNetworkStatusChange(callback: (res: { isConnected: boolean, networkType: string }) => void);
    /**
     * 获取屏幕亮度 
     */
    getScreenBrightness(obj: { success?: (res: { value: number }) => void, fail?: Function, complete?: Function });
    /**
     * 设置是否保持常亮状态 
     */
    setKeepScreenOn(obj: { keepScreenOn: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 设置屏幕亮度 
     */
    setScreenBrightness(obj: { value: number, success?: Function, fail?: Function, complete?: Function });
    /**
     * 取消监听横竖屏切换事件 
     */
    offDeviceOrientationChange(callback: Function);
    /**
     * 监听横竖屏切换事件 
     */
    onDeviceOrientationChange(callback: (res: { value: string }) => void);
    /**
     * 开始监听加速度数据 
     */
    startAccelerometer(obj: { interval?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止监听加速度数据 
     */
    stopAccelerometer(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听加速度数据事件 
     */
    onAccelerometerChange(callback: (res: { x: number, y: number, z: number }) => void);
    /**
     * 停止监听罗盘数据 
     */
    stopCompass(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 开始监听罗盘数据 
     */
    startCompass(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听罗盘数据变化事件 
     */
    onCompassChange(callback: (res: { direction: number, accuracy: number | string }) => void);
    /**
     * 停止监听设备方向的变化 
     */
    stopDeviceMotionListening(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 开始监听设备方向的变化 
     */
    startDeviceMotionListening(obj: { interval?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听设备方向变化事件 
     */
    onDeviceMotionChange(callback: (res: { alpha: number, beta: number, gamma: number }) => void);
    /**
     * 停止监听陀螺仪数据 
     */
    stopGyroscope(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 开始监听陀螺仪数据 
     */
    startGyroscope(obj: { interval?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听陀螺仪数据变化事件 
     */
    onGyroscopeChange(callback: (res: { x: number, y: number, z: number }) => void);
    /**
     * 使手机发生较长时间的振动（400 ms) 
     */
    vibrateLong(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     */
    vibrateShort(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 在手机桌面上添加该小程序的快捷启动图标
     * @version 1.7.1
     */
    saveAppToDesktop(obj: { success?: Function, fail?: Function, complete?: Function });

    /*********************************** Worker ***********************************/

    /**
     * 创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 Worker.terminate
     */
    createWorker(scriptPath: string): QQWorker;

    /*********************************** QQ群 ***********************************/

    /**
     * 获取群相关信息
     * @version 1.6.2
     */
    getGroupInfo(obj: {
        entryDataHash: string, success?: (res: { isGroupManager: boolean }) => void, fail?: Function, complete?: Function
    });
    /**
     * 在群中打开小程序时群管理员可打开群公告页面
     * @version 1.6.2
     */
    openGroupNotice(obj: { entryDataHash: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 在群中打开小程序时群管理员可打开群提醒页面
     * @version 1.6.2
     */
    openGroupRemind(obj: { entryDataHash: string, success?: Function, fail?: Function, complete?: Function });

    /*********************************** 微端 ***********************************/

    /**
     * 判断是否安装了小游戏对应的微端，Android客户端版本8.3.9、基础库1.16.0开始支持
     * @version 1.16.0
     */
    isMicroAppInstalled(obj: { success?: (res: { installed: boolean }) => void, fail?: Function, complete?: Function });
}

/**
 * 系统信息
 */
declare interface QQSystemInfo {
    /**
     * 设备品牌
     */
    brand: string;
    /**
     * 设备型号
     */
    model: string;
    /**
     * 设备像素比
     */
    pixelRatio: number;
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
     * 状态栏的高度，单位px
     */
    statusBarHeight: number;
    /**
     * QQ设置的语言
     */
    language: string;
    /**
     * QQ版本号
     */
    version: string;
    /**
     * 操作系统及版本
     */
    system: string;
    /**
     * 客户端平台
     */
    platform: string;
    /**
     * 用户字体大小（单位px）。以QQ客户端「我-设置-通用-字体大小」中的设置为准
     */
    fontSizeSetting: number;
    /**
     * 客户端基础库版本
     */
    SDKVersion: string;
    /**
     * 设备性能等级（仅Android小游戏）。
     * 取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
     */
    benchmarkLevel: number;
    /**
     * 允许QQ使用相册的开关（仅 iOS 有效）
     */
    albumAuthorized: boolean;
    /**
     * 允许QQ使用摄像头的开关
     */
    cameraAuthorized: boolean;
    /**
     * 允许QQ使用定位的开关
     */
    locationAuthorized: boolean;
    /**
     * 允许QQ使用麦克风的开关
     */
    microphoneAuthorized: boolean;
    /**
     * 允许QQ通知的开关（仅 iOS 有效）
     */
    notificationAuthorized: boolean;
    /**
     * 允许QQ通知带有提醒的开关（仅 iOS 有效）
     */
    notificationAlertAuthorized: boolean;
    /**
     * 允许QQ通知带有标记的开关（仅 iOS 有效）
     */
    notificationBadgeAuthorized: boolean;
    /**
     * 允许QQ通知带有声音的开关（仅 iOS 有效）
     */
    notificationSoundAuthorized: boolean;
    /**
     * 蓝牙的系统开关
     */
    bluetoothEnabled: boolean;
    /**
     * 地理位置的系统开关
     */
    locationEnabled: boolean;
    /**
     * Wi-Fi 的系统开关
     */
    wifiEnabled: boolean;
    /**
     * 右上角胶囊位置 (仅Android小游戏)
     */
    navbarPosition: { marginTop: number, navbarHeight: number, marginRight: number, navbarWidth: number };
}

/**
 * 启动信息
 */
declare interface QQLaunchOptions {
    /**
     * 启动小游戏的场景值
     */
    scene: string | number;
    /**
     * 启动小游戏的 query 参数
     */
    query: Object;
    /**
     * shareTicket
     */
    shareTicket: string;
    /**
     * 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。
     */
    referrerInfo: { appId: string, extraData: Object };
    /**
     * 群入口信息，通过群应用商店打开、群分享卡片打开的小程序可获得
     */
    entryDataHash: string;
}

/**
 * 版本更新管理器
 */
declare interface QQUpdateManager {
    /**
     * 强制小程序重启并使用新版本 
     */
    applyUpdate();
    /**
     * 监听向QQ后台请求检查更新结果事件 
     */
    onCheckForUpdate(callback: (res: { hasUpdate: boolean }) => void);
    /**
     * 监听小程序更新失败事件 
     */
    onUpdateFailed(callback: Function);
    /**
     * 监听小程序有版本更新事件 
     */
    onUpdateReady(callback: Function);
}

/**
 * 在触控设备上的触摸点 
 */
declare interface QQTouch {
    /**
     * QQTouch 对象的唯一标识符，只读属性。
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
 * 加载分包任务实例，用于获取分包加载状态
 */
declare interface QQLoadSubpackageTask {
    /**
     * 监听分包加载进度变化事件
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void);
}

/**
 * 画布对象
 */
declare interface QQCanvas {
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
    getContext(contextType: string, contextAttributes: {
        antialias?: boolean, preserveDrawingBuffer?: boolean, antialiasSamples?: number
    }): QQRenderingContext;
    /**
     * 把画布上的绘制内容以一个 data URI 的格式返回 
     */
    toDataURL(): string;
    /**
     * 将当前 QQCanvas 保存为一个临时文件。
     */
    toTempFilePath(obj: {
        x?: number, y?: number, width?: number, height?: number, destWidth?: number, destHeight?: number,
        fileType?: string, quality?: number, success?: (res: { tempFilePath: string }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * QQCanvas.toTempFilePath 的同步版本 
     */
    toTempFilePathSync(obj: {
        x?: number, y?: number, width?: number, height?: number,
        destWidth?: number, destHeight?: number, fileType?: string, quality?: number
    }): string;
}

/**
 * 画布对象的绘图上下文 
 */
declare interface QQRenderingContext {
}

/**
 * 图片对象 
 */
declare interface QQImage {
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
 * WebGL高性能渲染运算对象
 */
declare interface QQWebGLPlus {

}

/**
 * 激励视频广告组件
 */
declare interface QQRewardedVideoAd {
    /**
     * 加载激励视频广告
     */
    load(): Promise<any>;
    /**
     * 显示激励视频广告 
     */
    show(): Promise<any>;
    /**
     * 监听用户点击 关闭广告 按钮的事件 
     */
    onClose(callback: (res: { isEnded: boolean }) => void);
    /**
     * 监听激励视频错误事件 
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 监听激励视频广告加载事件 
     */
    onLoad(callback: Function);
    /**
     * 取消监听用户点击 关闭广告 按钮的事件 
     */
    offClose(callback: Function);
    /**
     * 取消监听激励视频错误事件 
     */
    offError(callback: Function);
    /**
     * 取消监听激励视频广告加载事件 
     */
    offLoad(callback: Function);
}

/**
 * banner 广告组件
 */
declare interface QQBannerAd {
    /**
     * banner 广告组件的样式。
     * style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，
     * 缩放后的真实尺寸需要通过 QQBannerAd.onResize() 事件获得。 
     */
    style: { left: number, top: number, width: number, height: number, realWidth: number, realHeight: number };
    /**
     * 显示 banner 广告 
     */
    show(): Promise<any>;
    /**
     * 销毁 banner 广告 
     */
    destroy();
    /**
     * 隐藏 banner 广告 
     */
    hide();
    /**
     * 取消监听banner 广告错误事件 
     */
    offError(callback: Function);
    /**
     * 取消监听banner 广告加载事件 
     */
    offLoad(callback: Function);
    /**
     * 取消监听banner 广告尺寸变化事件 
     */
    offResize(callback: Function);
    /**
     * 监听banner 广告错误事件 
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 监听banner 广告加载事件 
     */
    onLoad(callback: Function);
    /**
     * 监听banner 广告尺寸变化事件 
     */
    onResize(callback: (res: { width: number, height: number }) => void);
}

/**
 * 广告盒子组件
 */
declare interface QQAppBox {
    /**
     * 加载广告盒子
     */
    load(): Promise<any>;
    /**
     * 显示广告盒子 
     */
    show(): Promise<any>;
    /**
     * 销毁广告盒子，销毁后才能重新创建
     */
    destroy(): Promise<any>;
    /**
     * 监听用户点击 关闭广告 按钮的事件
     */
    onClose(callback: Function);
    /**
     * 取消监听用户点击 关闭广告 按钮的事件
     */
    offClose(callback: Function);
}

/**
 * 插屏广告组件
 */
declare interface QQInterstitialAd {
    /**
     * 加载插屏广告 
     */
    load(): Promise<any>;
    /**
     * 显示插屏广告
     */
    show(): Promise<any>;
    /**
     * 销毁插屏广告实例；
     * 注意：安卓中调destroy接口销毁实例，广告界面仍需手动点击关闭按钮关闭
     */
    destroy(): Promise<any>;
    /**
     * 监听用户点击 关闭广告 按钮的事件
     */
    onClose(callback: Function);
    /**
     * 取消监听用户点击 关闭广告 按钮的事件
     */
    offClose(callback: Function);
    /**
     * 监听插屏广告加载事件 
     */
    onLoad(callback: Function);
    /**
     * 取消监听插屏广告加载事件 
     */
    offLoad(callback: Function);
    /**
     * 监听插屏错误事件 
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 取消监听插屏错误事件 
     */
    offError(callback: Function);
}

/**
 * 积木广告组件
 */
declare interface QQBlockAd {
    /**
     * 积木广告组件的样式。
     * style 上的属性的值仅为开发者设置的值，积木广告会根据开发者设置的广告个数来决定广告尺寸，
     * 真实尺寸需要通过 QQBlockAd.onResize() 事件获得
     */
    style: { left: number, top: number };
    /**
     * 显示积木广告
     */
    show(): Promise<any>;
    /**
     * 监听积木广告尺寸大小事件
     */
    onResize(callback: (res: { width: number, height: number }) => void);
    /**
     * 监听积木广告加载事件
     */
    onLoad(callback: Function);
    /**
     * 监听积木广告错误事件
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 取消监听积木广告尺寸变化事件
     */
    offResize(callback: Function);
    /**
     * 取消监听积木广告加载事件
     */
    offLoad(callback: Function);
    /**
     * 取消监听积木广告错误事件
     */
    offError(callback: Function);
    /**
     * 销毁积木广告
     */
    destroy();
    /**
     * 隐藏积木广告 （安卓8.3.9版本支持，目前请销毁后重新创建）
     */
    hide();
}

/**
 * 菜单按钮的布局位置信息
 */
declare interface QQMenuButtonBoundary {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}

/**
 * 网络请求任务对象
 */
declare interface QQRequestTask {
    /**
     * 中断请求任务
     */
    abort();
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     */
    onHeadersReceived(callback: (res: { header: Object }) => void);
    /**
     * 取消监听 HTTP Response Header 事件
     */
    offHeadersReceived(callback: Function);
}

/**
 * 一个可以监听下载进度变化事件，以及取消下载任务的对象
 */
declare interface QQDownloadTask {
    /**
     * 中断下载任务
     */
    abort();
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     */
    onHeadersReceived(callback: (res: { header: Object }) => void);
    /**
     * 取消监听 HTTP Response Header 事件
     */
    offHeadersReceived(callback: Function);
    /**
     * 监听下载进度变化事件
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void);
    /**
     * 取消监听下载进度变化事件
     */
    offProgressUpdate(callback: Function);
}

/**
 * 一个可以监听上传进度变化事件，以及取消上传任务的对象
 */
declare interface QQUploadTask {
    /**
     * 中断上传任务 
     */
    abort();
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     */
    onHeadersReceived(callback: (res: { header: Object }) => void);
    /**
     * 取消监听 HTTP Response Header 事件
     */
    offHeadersReceived(callback: Function);
    /**
     * 监听上传进度变化事件
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesSent: number, totalBytesExpectedToSend: number }) => void);
    /**
     * 取消监听上传进度变化事件
     */
    offProgressUpdate(callback: Function);
}

/**
 * 一个 UDP Socket 实例，默认使用 IPv4 协议
 */
declare interface QQUDPSocket {
    /**
     * 绑定一个系统随机分配的可用端口
     */
    bind(): number;
    /**
     * 关闭 UDP Socket 实例，相当于销毁 
     */
    close();
    /**
     * 向指定的 IP 和 port 发送消息 
     */
    send(obj: { address: string, port: number, message: string | ArrayBuffer, offset?: number, length?: number });
    /**
     * 取消监听关闭事件
     */
    offClose(callback: Function);
    /**
     * 取消监听错误事件
     */
    offError(callback: Function);
    /**
     * 取消监听开始监听数据包消息的事件
     */
    offListening(callback: Function);
    /**
     * 取消监听收到消息的事件
     */
    offMessage(callback: Function);
    /**
     * 监听关闭事件
     */
    onClose(callback: Function);
    /**
     * 监听错误事件 
     */
    onError(callback: (res: { errMsg: string }) => void);
    /**
     * 监听开始监听数据包消息的事件
     */
    onListening(callback: Function);
    /**
     * 监听收到消息的事件 
     */
    onMessage(callback: (res: {
        message: ArrayBuffer, remoteInfo: { address: string, family: string, port: number, size: number }
    }) => void);
}

/**
 * WebSocket 任务，可通过 qq.connectSocket() 接口创建返回
 */
declare interface QQSocketTask {
    /**
     * 关闭 WebSocket 连接 
     */
    close(obj: { code?: number, reason?: string, success?: Function, fail?: Function, complete?: Function });
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
    /**
     * 监听WebSocket 连接打开事件 
     */
    onOpen(callback: (res: { header: Object }) => void);
    /**
     * 通过 WebSocket 连接发送数据 
     */
    send(obj: { data: string | ArrayBuffer, success?: Function, fail?: Function, complete?: Function });
}

/**
 * QQInnerAudioContext 实例
 */
declare interface QQInnerAudioContext {
    /**
     * 音频资源的地址，用于直接播放。支持云文件ID 
     */
    src: string;
    /**
     * 开始播放的位置（单位：s），默认为 0 
     */
    startTime: number;
    /**
     * 是否自动开始播放，默认为 false 
     */
    autoplay: boolean;
    /**
     * 是否循环播放，默认为 false 
     */
    loop: boolean;
    /**
     * 音量。范围 0~1。默认为 1
     */
    volume: number;
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
     * 销毁当前实例 
     */
    destroy();
    /**
     * 取消监听音频进入可以播放状态的事件
     */
    offCanplay(callback: Function);
    /**
     * 取消监听音频自然播放至结束的事件
     */
    offEnded(callback: Function);
    /**
     * 取消监听音频播放错误事件
     */
    offError(callback: Function);
    /**
     * 取消监听音频暂停事件
     */
    offPause(callback: Function);
    /**
     * 取消监听音频播放事件
     */
    offPlay(callback: Function);
    /**
     * 取消监听音频完成跳转操作的事件
     */
    offSeeked(callback: Function);
    /**
     * 取消监听音频进行跳转操作的事件
     */
    offSeeking(callback: Function);
    /**
     * 取消监听音频停止事件
     */
    offStop(callback: Function);
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
     * 监听音频自然播放至结束的事件 
     */
    onEnded(callback: Function);
    /**
     * 监听音频播放错误事件 
     */
    onError(callback: (res: { errCode: number }) => void);
    /**
     * 监听音频暂停事件 
     */
    onPause(callback: Function);
    /**
     * 监听音频播放事件 
     */
    onPlay(callback: Function);
    /**
     * 监听音频完成跳转操作的事件 
     */
    onSeeked(callback: Function);
    /**
     * 监听音频进行跳转操作的事件 
     */
    onSeeking(callback: Function);
    /**
     * 监听音频停止事件 
     */
    onStop(callback: Function);
    /**
     * 监听音频播放进度更新事件 
     */
    onTimeUpdate(callback: Function);
    /**
     * 监听音频加载中事件 
     */
    onWaiting(callback: Function);
    /**
     * 暂停 
     */
    pause();
    /**
     * 播放 
     */
    play();
    /**
     * 跳转到指定位置 
     */
    seek(position: number);
    /**
     * 停止 
     */
    stop();
}

/**
 * 全局唯一的录音管理器
 */
declare interface QQRecorderManager {
    /**
     * 监听录音错误事件 
     */
    onError(callback: (res: { errMsg: string }) => void);
    /**
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件
     */
    onFrameRecorded(callback: (res: { frameBuffer: ArrayBuffer, isLastFrame: boolean }) => void);
    /**
     * 监听录音因为受到系统占用而被中断开始事件。
     * 以下场景会触发此事件：QQ语音聊天、QQ视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
     */
    onInterruptionBegin(callback: Function);
    /**
     * 监听录音中断结束事件
     */
    onInterruptionEnd(callback: Function);
    /**
     * 监听录音暂停事件 
     */
    onPause(callback: Function);
    /**
     * 监听录音继续事件 
     */
    onResume(callback: Function);
    /**
     * 监听录音开始事件 
     */
    onStart(callback: Function);
    /**
     * 监听录音结束事件 
     */
    onStop(callback: (res: { tempFilePath: string }) => void);
    /**
     * 暂停录音 
     */
    pause();
    /**
     * 继续录音 
     */
    resume();
    /**
     * 开始录音 
     */
    start(obj: _QQStartRecordObj);
    /**
     * 停止录音 
     */
    stop();
}

/**
 * 视频对象
 */
declare interface QQVideo {
    /**
     * 视频的左上角横坐标 
     */
    x: number;
    /**
     * 视频的左上角纵坐标 
     */
    y: number;
    /**
     * 视频的宽度 
     */
    width: number;
    /**
     * 视频的高度 
     */
    height: number;
    /**
     * 视频的资源地址 
     */
    src: string;
    /**
     * 视频的封面 
     */
    poster: string;
    /**
     * 视频的初始播放位置，单位为 s 秒 
     */
    initialTime: number;
    /**
     * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5 
     */
    playbackRate: number;
    /**
     * 视频是否为直播 
     */
    live: boolean;
    /**
     * 视频的缩放模式 
     */
    objectFit: string;
    /**
     * 视频是否显示控件 
     */
    controls: boolean;
    /**
     * 视频是否自动播放 
     */
    autoplay: boolean;
    /**
     * 视频是否是否循环播放 
     */
    loop: boolean;
    /**
     * 视频是否禁音播放 
     */
    muted: boolean;
    /**
     * 是否启用手势控制播放进度 
     */
    enableProgressGesture: boolean;
    /**
     * 是否显示视频中央的播放按钮 
     */
    showCenterPlayBtn: boolean;
    /**
     * 视频由于需要缓冲下一帧而停止时触发的回调函数 
     */
    onwaiting: Function;
    /**
     * 视频开始播放时触发的回调函数 
     */
    onplay: Function;
    /**
     * 视频暂停时触发的回调函数 
     */
    onpause: Function;
    /**
     * 视频播放到末尾时触发的回调函数 
     */
    onended: Function;
    /**
     * 每当视频播放进度更新时触发的回调函数 
     */
    ontimeupdate: Function;
    /**
     * 视频发生错误时触发的回调函数 
     */
    onerror: Function;
    /**
     * 销毁视频 
     */
    destroy();
    /**
     * 视频退出全屏 
     */
    exitFullScreen(): Promise<any>;
    /**
     * 取消监听视频播放到末尾事件 
     */
    offEnded(callback: Function);
    /**
     * 取消监听视频错误事件 
     */
    offError(callback: Function);
    /**
     * 取消监听视频暂停事件 
     */
    offPause(callback: Function);
    /**
     * 取消监听视频播放事件 
     */
    offPlay(callback: Function);
    /**
     * 取消监听视频播放进度更新事件 
     */
    offTimeUpdate(callback: Function);
    /**
     * 取消监听视频缓冲事件 
     */
    offWaiting(callback: Function);
    /**
     * 监听视频播放到末尾事件 
     */
    onEnded(callback: Function);
    /**
     * 监听视频错误事件 
     */
    onError(callback: (res: { errMsg: string }) => void);
    /**
     * 监听视频暂停事件 
     */
    onPause(callback: Function);
    /**
     * 监听视频播放事件 
     */
    onPlay(callback: Function);
    /**
     * 监听视频播放进度更新事件 
     */
    onTimeUpdate(callback: (res: { position: number, duration: number }) => void);
    /**
     * 监听视频缓冲事件 
     */
    onWaiting(callback: Function);
    /**
     * 暂停视频 
     */
    pause(): Promise<any>;
    /**
     * 播放视频 
     */
    play(): Promise<any>;
    /**
     * 视频全屏 
     */
    requestFullScreen(direction: number): Promise<any>;
    /**
     * 视频跳转 
     */
    seek(time: number): Promise<any>;
    /**
     * 停止视频 
     */
    stop(): Promise<any>;
}

/**
 * 文件管理器
 */
declare interface QQFileSystemManager {
    /**
     * 判断文件/目录是否存在 
     */
    access(obj: { path: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function });
    /**
     * QQFileSystemManager.access 的同步版本 
     */
    accessSync(path: string);
    /**
     * 在文件结尾追加内容
     */
    appendFile(obj: {
        filePath: string, data: string | ArrayBuffer, encoding?: string,
        success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * QQFileSystemManager.appendFile 的同步版本
     */
    appendFileSync(filePath: string, data: string | ArrayBuffer, encoding: string);
    /**
     * 复制文件 
     */
    copyFile(obj: {
        srcPath: string, destPath: string, success?: Function,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * QQFileSystemManager.copyFile 的同步版本 
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
        dirPath: string, recursive?: boolean, success?: Function,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * QQFileSystemManager.mkdir 的同步版本 
     */
    mkdirSync(dirPath: string, recursive: boolean);
    /**
     * 读取目录内文件列表 
     */
    readdir(obj: {
        dirPath: string, success?: (res: { files: Array<string> }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * QQFileSystemManager.readdir 的同步版本 
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
     * QQFileSystemManager.readFile 的同步版本 
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
     * QQFileSystemManager.rename 的同步版本 
     */
    renameSync(oldPath: string, newPath: string);
    /**
     * 删除目录 
     */
    rmdir(obj: {
        dirPath: string, recursive?: boolean, success?: Function,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * QQFileSystemManager.rmdir 的同步版本 
     */
    rmdirSync(dirPath: string, recursive: boolean);
    /**
     * 保存临时文件到本地 
     */
    saveFile(obj: {
        tempFilePath: string, filePath?: string, success?: (res: { savedFilePath: string }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * QQFileSystemManager.saveFile 的同步版本 
     */
    saveFileSync(tempFilePath: string, filePath: string): string;
    /**
     * 获取文件 QQStats 对象 
     */
    stat(obj: {
        path: string, recursive?: boolean, success?: (res: { stats: QQStats | Object }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * QQFileSystemManager.stat 的同步版本 
     */
    statSync(path: string, recursive: boolean): QQStats | Object;
    /**
     * 删除文件 
     */
    unlink(obj: { filePath: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function });
    /**
     * QQFileSystemManager.unlink 的同步版本 
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
     * QQFileSystemManager.writeFile 的同步版本 
     */
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding: string);
}

/**
 * 描述文件状态的对象
 */
declare interface QQStats {
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
 * 用户信息 
 */
declare interface QQUserInfo {
    /**
     * 用户昵称 
     */
    nickName: string;
    /**
     * 用户头像图片的 URL。
     * URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。
     * 若用户更换头像，原有头像 URL 将失效。 
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
     * 显示 country，province，city 所用的语言 
     */
    language: string;
    /**
     * 用户 openId
     */
    openId?: string;
}

/**
 * 按钮Style
 */
declare interface QQButtonStyle {
    left: number;
    top: number;
    width: number;
    height: number;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    borderRadius: number;
    color: string;
    textAlign: string;
    fontSize: number;
    lineHeight: number
}

/**
 * 用户信息按钮
 */
declare interface QQUserInfoButton {
    /**
     * 按钮的类型 
     */
    type: string;
    /**
     * 按钮上的文本，仅当 type 为 text 时有效 
     */
    text: string;
    /**
     * 按钮的背景图片，仅当 type 为 image 时有效 
     */
    image: string;
    /**
     * 按钮的样式 
     */
    style: QQButtonStyle;
    /**
     * 销毁用户信息按钮 
     */
    destroy();
    /**
     * 隐藏用户信息按钮 
     */
    hide();
    /**
     * 取消监听用户信息按钮的点击事件 
     */
    offTap(callback: Function);
    /**
     * 监听用户信息按钮的点击事件 
     */
    onTap(callback: (res: {
        userInfo: QQUserInfo, rawData: string, signature: string, encryptedData: string, iv: string
    }) => void);
    /**
     * 显示用户信息按钮 
     */
    show();
}

/**
 * 托管的 KV 数据 
 */
declare interface QQKVData {
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
 * 托管数据 
 */
declare interface QQUserGameData {
    /**
     * 用户的QQ头像 url 
     */
    avatarUrl: string;
    /**
     * 用户的QQ昵称 
     */
    nickname: string;
    /**
     * 用户的 openid 
     */
    openid: string;
    /**
     * 用户的托管 KV 数据列表 
     */
    KVDataList: Array<QQKVData>;
}

/**
 * 开放数据域对象
 */
declare interface QQOpenDataContext {
    /**
     * 开放数据域和主域共享的 sharedCanvas 
     */
    canvas: QQCanvas;
    /**
     * 向开放数据域发送消息 
     */
    postMessage(message: Object);
}

/**
 * 用户点击后打开意见反馈页面的按钮
 */
declare interface QQFeedbackButton {
    /**
     * 按钮的类型 
     */
    type: string;
    /**
     * 按钮上的文本，仅当 type 为 text 时有效 
     */
    text: string;
    /**
     * 按钮的背景图片，仅当 type 为 image 时有效 
     */
    image: string;
    /**
     * 按钮的样式 
     */
    style: QQButtonStyle;
    /**
     * 销毁意见反馈按钮 
     */
    destroy();
    /**
     * 隐藏意见反馈按钮 
     */
    hide();
    /**
     * 取消监听意见反馈按钮的点击事件 
     */
    offTap(callback: Function);
    /**
     * 监听意见反馈按钮的点击事件 
     */
    onTap(callback: Function);
    /**
     * 显示意见反馈按钮 
     */
    show();
}

/**
 * 用户点击后打开设置页面的按钮
 */
declare interface QQOpenSettingButton {
    /**
     * 按钮的类型 
     */
    type: string;
    /**
     * 按钮上的文本，仅当 type 为 text 时有效 
     */
    text: string;
    /**
     * 按钮的背景图片，仅当 type 为 image 时有效 
     */
    image: string;
    /**
     * 按钮的样式 
     */
    style: QQButtonStyle;
    /**
     * 销毁打开设置页面按钮 
     */
    destroy();
    /**
     * 隐藏打开设置页面按钮 
     */
    hide();
    /**
     * 取消监听设置页面按钮的点击事件 
     */
    offTap(callback: Function);
    /**
     * 监听设置页面按钮的点击事件 
     */
    onTap(callback: Function);
    /**
     * 显示打开设置页面按钮 
     */
    show();
}

/**
 * 用户授权设置信息 
 */
declare interface QQAuthSetting {
    /**
     * 是否授权用户信息，对应接口 qq.getUserInfo
     */
    "scope.userInfo": boolean;
    /**
     * 是否授权地理位置，对应接口 qq.getLocation
     */
    "scope.userLocation": boolean;
    /**
     * 是否授权QQ运动步数，对应接口 qq.getQQRunData
     */
    "scope.qqrun": boolean;
    /**
     * 是否授权保存到相册，对应接口 qq.saveImageToPhotosAlbum
     */
    "scope.writePhotosAlbum": boolean;
    /**
     * 是否授权订阅消息（833以下版本使用scope.appMsgSubscribed，833及以上版本使用setting.appMsgSubscribed），
     * 对应接口 qq.subscribeAppMsg
     */
    "setting.appMsgSubscribed": boolean;
}

/**
 * 打开添加好友页面的按钮
 */
declare interface QQAddFriendButton {
    /**
     * 好友的openid 
     */
    openid: string;
    /**
     * 按钮的类型 
     */
    type: string;
    /**
     * 按钮上的文本，仅当 type 为 text 时有效 
     */
    text: string;
    /**
     * 按钮的背景图片，仅当 type 为 image 时有效 
     */
    image: string;
    /**
     * 按钮的样式 
     */
    style: QQButtonStyle;
    /**
     * 销毁打开设置页面按钮 
     */
    destroy();
    /**
     * 隐藏打开设置页面按钮 
     */
    hide();
    /**
     * 取消监听设置页面按钮的点击事件 
     */
    offTap(callback: Function);
    /**
     * 监听设置页面按钮的点击事件 
     */
    onTap(callback: Function);
    /**
     * 显示打开设置页面按钮 
     */
    show();
}

/**
 * Worker 对象
 */
declare interface QQWorker {
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

interface _QQRequestObj {
    /** 
     * 开发者服务器接口地址
     */
    url: string;
    /** 
     * 请求的参数
     */
    data?: string | Object | ArrayBuffer;
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

interface _QQDownloadObj {
    /** 
     * 下载资源的 url
     */
    url: string;
    /** 
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: Object;
    /** 
     * 指定文件下载后存储的路径 (本地路径)
     */
    filePath?: string;
    success?: (res: { tempFilePath: string, statusCode: number }) => void;
    fail?: Function;
    complete?: Function;
}

interface _QQUploadObj {
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

interface _QQSocketObj {
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
    /** 
     * 建立 TCP 连接的时候的 TCP_NODELAY 设置
     * @default false
     */
    tcpNoDelay?: boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _QQUpdateShareMenuObj {
    /** 
     * 是否使用带 shareTicket 的转发
     * @version 1.4.7
     * @default false
     */
    withShareTicket?: boolean;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _QQShareAppMessageObj {
    /** 
     * 转发标题，不传则默认使用当前小游戏的昵称
     */
    title?: string;
    /** 
     * 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4
     */
    imageUrl?: string;
    /** 
     * 查询字符串
     */
    query?: string;
    /** 
     * 转发目标类型，不设该属性默认拉起手q通讯录
     * @version 1.8.5
     */
    shareAppType?: string;
    /** 
     * 监听用户点击页面内转发按钮的，只有带上该参数，才支持快速分享
     * @version 1.6.3
     */
    entryDataHash?: string;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _QQGetShareInfoObj {
    /** 
     * shareTicket;
     * Android从基础库1.2.0版本、iOS从基础库1.4.7版本开始支持
     */
    shareTicket: string;
    /** 
     * 超时时间，单位 ms
     */
    timeout?: number;
    success?: (res: { errMsg: string, encryptedData: string, iv: string }) => void;
    fail?: Function;
    complete?: Function;
}

interface _QQMidasPaymentObj {
    /**
     * 商品预下单获取的预下单id
     */
    prepayId: string;
    /**
     * 金币数 商品预下单时填写的金币数量
     */
    starCurrency: number;
    /**
     * 环境配置。Android客户端8.1.3版本开始支持
     * @default 0
     */
    setEnv?: number;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _QQChooseImageObj {
    /**
     * 最多可以选择的图片张数
     * @default 9
     */
    count?: number;
    /**
     * 所选的图片的尺寸
     * @default ["original", "compressed"]
     */
    sizeType?: Array<string>;
    /**
     * 选择图片的来源
     * @default ["album", "camera"]
     */
    sourceType: Array<string>;
    success?: (res: { tempFilePaths: Array<string>, tempFiles: Array<{ path: string, size: number }> }) => void;
    fail?: Function;
    complete?: Function;
}

interface _QQStartRecordObj {
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
     * @default 2
     */
    numberOfChannels?: number;
    /**
     * 编码码率	
     * @default 48000
     */
    encodeBitRate?: number;
    /**
     * 音频格式
     * @default "aac"
     */
    format: string;
    /**
     * 指定帧大小，单位 KB
     */
    frameSize?: number;
    /**
     * 指定录音的音频输入源，可通过 qq.getAvailableAudioSources() 获取当前可用的音频源
     * @default "auto"
     */
    audioSource?: string;
}

interface _QQCreateVideoObj {
    /**
     * 视频的左上角横坐标
     * @default 0
     */
    x?: number;
    /**
     * 视频的左上角纵坐标
     * @default 0
     */
    y?: number;
    /**
     * 视频的宽度
     * @default 300
     */
    width?: number;
    /**
     * 视频的高度
     * @default 150
     */
    height?: number;
    /**
     * 视频的资源地址
     */
    src: string;
    /**
     * 视频的封面
     */
    poster: string;
    /**
     * 视频的初始播放位置，单位为 s 秒
     * @default 0
     */
    initialTime?: number;
    /**
     * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5	
     * @default 1.0
     */
    playbackRate?: number;
    /**
     * 视频是否为直播	
     * @default false
     */
    live?: boolean;
    /**
     * 视频的缩放模式
     * @default "contain"
     */
    objectFit?: string;
    /**
     * 视频是否显示控件	
     * @default true
     */
    controls?: boolean;
    /**
     * 视频是否自动播放	
     * @default false
     */
    autoplay?: boolean;
    /**
     * 视频是否是否循环播放	
     * @default false
     */
    loop?: boolean;
    /**
     * 视频是否禁音播放	
     * @default false
     */
    muted?: boolean;
    /**
     * 是否启用手势控制播放进度	
     * @default false
     */
    enableProgressGesture?: boolean;
    /**
     * 是否显示视频中央的播放按钮
     * @default false
     */
    showCenterPlayBtn?: boolean;
}

interface _QQGetLocationObj {
    /**
     * wgs84 返回 gps 坐标，gcj02 返回可用于 qq.openLocation 的坐标
     * @default "wgs84"
     */
    type?: string;
    /**
     * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
     * @default false
     */
    altitude?: boolean;
    success?: (res: {
        latitude: number, longitude: number, speed: number, accuracy: number, altitude: number,
        verticalAccuracy: number, horizontalAccuracy: number
    }) => void;
    fail?: Function;
    complete?: Function;
}

interface _QQGetUserInfoObj {
    /**
     * 是否带上登录态信息。
     * 当 withCredentials 为 true 时，要求此前有调用过 qq.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；
     * 当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
     */
    withCredentials?: boolean;
    /**
     * 显示用户信息的语言
     * @default "en"
     */
    lang?: string;
    success?: (res: { userInfo: QQUserInfo, rawData: string, signature: string, encryptedData: string, iv: string }) => void;
    fail?: Function;
    complete?: Function;
}

interface _QQUserInfoButtonObj {
    /**
     * 是否带上登录态信息。
     * 当 withCredentials 为 true 时，要求此前有调用过 qq.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；
     * 当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
     */
    withCredentials: boolean;
    /**
     * 按钮的类型
     */
    type: string;
    /**
     * 按钮上的文本，仅当 type 为 text 时有效
     */
    text?: string;
    /**
     * 按钮的背景图片，仅当 type 为 image 时有效
     */
    image?: string;
    /**
     * 按钮的样式
     */
    style: QQButtonStyle;
    /**
     * 描述用户信息的语言
     * @default "en"
     */
    lang?: string;
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