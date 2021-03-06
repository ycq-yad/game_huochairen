declare let wx: wx
declare interface wx {
    /*********************************** 基础 ***********************************/

    /**
     * wx.getSystemInfo 的同步版本 
     */
    getSystemInfoSync(): WXSystemInfo;
    /**
     * 获取系统信息 
     */
    getSystemInfo(obj: { success?: (res: WXSystemInfo) => void, fail?: Function, complete?: Function });
    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新
     * @version 1.9.90
     */
    getUpdateManager(): WXUpdateManager;
    /**
     * 监听小游戏回到前台的事件 
     */
    onShow(callback: (res: WXLaunchOptions) => void);
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
    getLaunchOptionsSync(): WXLaunchOptions;
    /**
     * 退出当前小游戏 
     */
    exitMiniProgram(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听未处理的 Promise 拒绝事件。安卓平台暂时不会派发该事件
     * @version 2.10.0
     */
    onUnhandledRejection(callback: (res: { reason: string, promise: string }) => void);
    /**
     * 监听全局错误事件 
     */
    onError(callback: (res: { message: string, stack: string }) => void);
    /**
     * 监听音频中断结束事件
     * @version 1.8.0
     */
    onAudioInterruptionEnd(callback: Function);
    /**
     * 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     * @version 1.8.0
     */
    onAudioInterruptionBegin(callback: Function);
    /**
     * 取消监听未处理的 Promise 拒绝事件
     * @version 2.10.0
     */
    offUnhandledRejection(callback: Function);
    /**
     * 取消监听全局错误事件 
     */
    offError(callback: Function);
    /**
     * 取消监听音频中断结束事件
     * @version 1.8.0
     */
    offAudioInterruptionEnd(callback: Function);
    /**
     * 取消监听音频因为受到系统占用而被中断开始事件
     * @version 1.8.0
     */
    offAudioInterruptionBegin(callback: Function);
    /**
     * 监听开始触摸事件 
     */
    onTouchStart(callback: (res: { touches: Array<WXTouch>, changedTouches: Array<WXTouch>, timeStamp: number }) => void);
    /**
     * 监听触点移动事件 
     */
    onTouchMove(callback: (res: { touches: Array<WXTouch>, changedTouches: Array<WXTouch>, timeStamp: number }) => void);
    /**
     * 监听触摸结束事件 
     */
    onTouchEnd(callback: (res: { touches: Array<WXTouch>, changedTouches: Array<WXTouch>, timeStamp: number }) => void);
    /**
     * 监听触点失效事件 
     */
    onTouchCancel(callback: (res: { touches: Array<WXTouch>, changedTouches: Array<WXTouch>, timeStamp: number }) => void);
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
     * 监听键盘按键弹起事件，仅适用于 PC 平台
     * @version 2.10.1
     */
    onKeyUp(callback: (res: { key: string, code: string, timeStamp: number }) => void);
    /**
     * 监听键盘按键按下事件，仅适用于 PC 平台
     * @version 2.10.1
     */
    onKeyDown(callback: (res: { key: string, code: string, timeStamp: number }) => void);
    /**
     * 取消监听键盘按键弹起事件
     * @version 2.10.1
     */
    offKeyUp(callback: Function);
    /**
     * 取消监听键盘按键按下事件
     * @version 2.10.1
     */
    offKeyDown(callback: Function);
    /**
     * 监听鼠标按键弹起事件
     */
    onMouseUp(callback: (res: { x: number, y: number, button: number, timeStamp: number }) => void);
    /**
     * 监听鼠标移动事件
     */
    onMouseMove(callback: (res: { x: number, y: number, timeStamp: number }) => void);
    /**
     * 监听鼠标按键按下事件
     */
    onMouseDown(callback: (res: { x: number, y: number, button: number, timeStamp: number }) => void);
    /**
     * 取消监听鼠标按键弹起事件
     */
    offMouseUp(callback: Function);
    /**
     * 取消监听鼠标移动事件
     */
    offMouseMove(callback: Function);
    /**
     * 取消监听鼠标按键按下事件
     */
    offMouseDown(callback: Function);
    /**
     * 监听鼠标滚轮事件
     */
    onWheel(callback: (res: { deltaX: number, deltaY: number, deltaZ: number, x: number, y: number, timeStamp: number }) => void);
    /**
     * 取消监听鼠标滚轮事件
     */
    offWheel(callback: Function);
    /**
     * 加快触发 JavaScriptCore 垃圾回收（Garbage Collection） 
     */
    triggerGC();
    /**
     * 小程序测速上报。使用前，需要在小程序管理后台配置
     * @version 2.10.0
     */
    reportPerformance<T>(id: number, value: number, dimensions?: string | Array<T>);
    /**
     * 标记自定义场景
     */
    markScene(sceneId: number);
    /**
     * 获取性能管理器 
     */
    getPerformance(): WXPerformance;
    /**
     * 触发分包加载
     * @version 2.1.0
     */
    loadSubpackage(obj: { name: string, success: Function, fail: Function, complete: Function }): WXLoadSubpackageTask;
    /**
     * 设置是否打开调试开关。此开关对正式版也能生效。
     * @version 1.4.0
     */
    setEnableDebug(obj: { enableDebug: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取日志管理器对象。
     * @version 2.1.0
     */
    getLogManager(obj: { level?: number }): WXLogManager;

    /*********************************** 渲染 ***********************************/

    /**
     * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。 
     */
    createCanvas(): WXCanvas;
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
    createImage(): WXImage;
    /**
     * 加载自定义光标，仅支持 PC 平台
     * @version 2.10.1
     */
    setCursor(path: string): boolean;

    /*********************************** 广告 ***********************************/

    /**
     * 创建激励视频广告组件
     * @version 2.0.4
     */
    createRewardedVideoAd(obj: { adUnitId: string, multiton?: boolean }): WXRewardedVideoAd;
    /**
     * 创建插屏广告组件
     * @version 2.6.0
     */
    createInterstitialAd(obj: { adUnitId: string }): WXInterstitialAd;
    /**
     * 创建 grid(格子) 广告组件
     * @version 2.9.2
     */
    createGridAd(obj: {
        adUnitId: string, adIntervals?: number,
        style: { left: number, top: number, width: number, height: number }, adTheme: string, gridCount: number
    }): WXGridAd;
    /**
     * 创建 banner 广告组件
     * @version 2.0.4
     */
    createBannerAd(obj: {
        adUnitId: string, adIntervals?: number,
        style: { left: number, top: number, width: number, height: number }
    }): WXBannerAd;

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
        title?: string, content?: string, showCancel?: boolean, cancelText?: string, cancelColor?: string,
        confirmText?: string, confirmColor?: string, success?: (res: { confirm: boolean, cancel: boolean }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 显示 loading 提示框
     * @version 1.1.0
     */
    showLoading(obj: { title: string, mask?: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 隐藏 loading 提示框
     * @version 1.1.0
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
     * @version 2.1.0
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
     * 动态设置通过右上角按钮拉起的菜单的样式 
     */
    setMenuStyle(obj: { style: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取菜单按钮的布局置信息。坐标信息以屏幕左上角为原点
     * @version 2.1.0
     */
    getMenuButtonBoundingClientRect(): WXMenuButtonBoundary;
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
    request(obj: _RequestObj): WXRequestTask;
    /**
     * 下载文件资源到本地 
     */
    downloadFile(obj: _DownloadObj): WXDownloadTask;
    /**
     * 将本地资源上传到服务器 
     */
    uploadFile(obj: _UploadObj): WXUploadTask;
    /**
     * 通过 WebSocket 连接发送数据 
     */
    sendSocketMessage(obj: { data: string | ArrayBuffer, success?: Function, fail?: Function, complete?: Function });
    /**
     * 关闭 WeSocket 连接 
     */
    closeSocket(obj: { code?: number, reason?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 创建一个 WebSocket 连接 
     */
    connectSocket(obj: _SocketObj): WXSocketTask;
    /**
     * 监听WebSocket 连接关闭事件 
     */
    onSocketClose(callback: (res: { code: number, reason: string }) => void);
    /**
     * 监听WebSocket 错误事件 
     */
    onSocketError(callback: (res: { errMsg: string }) => void);
    /**
     * 监听WebSocket 接受到服务器的消息事件 
     */
    onSocketMessage(callback: (res: { data: string | ArrayBuffer }) => void);
    /**
     * 监听WebSocket 连接打开事件 
     */
    onSocketOpen(callback: (res: { header: Object }) => void);
    /**
     * 创建一个 UDP Socket 实例
     * @version 2.7.0
     */
    createUDPSocket(): WXUDPSocket;

    /*********************************** 转发 ***********************************/

    /**
     * 更新转发属性 
     */
    updateShareMenu(obj: _UpdateShareMenuObj);
    /**
     * 显示当前页面的转发按钮 
     */
    showShareMenu(obj: { withShareTicket?: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 主动拉起转发，进入选择通讯录界面 
     */
    shareAppMessage(obj: { title?: string, imageUrl?: string, query?: string, imageUrlId?: string });
    /**
     * 设置 wx.shareMessageToFriend 接口 query 字段的值
     */
    setMessageToFriendQuery(obj: { shareMessageToFriendScene: number }): boolean;
    /**
     * 监听主域接收 wx.shareMessageToFriend 接口的成功失败通知
     * @version 2.9.4
     */
    onShareMessageToFriend(callback: (res: { success: boolean, errMsg: string }) => void);
    /**
     * 监听用户点击右上角菜单的「转发」按钮时触发的事件 
     */
    onShareAppMessage(callback: () => { title: string, imageUrl: string, query: string, imageUrlId?: string });
    /**
     * 监听用户点击菜单「收藏」按钮时触发的事件（安卓7.0.15起支持，iOS 暂不支持）
     * @version 2.10.3
     */
    onAddToFavorites(callback: (res: { title: string, imageUrl: string, query: string, disableForward: boolean }) => void);
    /**
     * 取消监听用户点击右上角菜单的「转发」按钮时触发的事件
     */
    offShareAppMessage(callback: Function);
    /**
     * 取消监听用户点击菜单「收藏」按钮时触发的事件
     * @version 2.10.3
     */
    offAddToFavorites(callback: Function);
    /**
     * 隐藏转发按钮 
     */
    hideShareMenu(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取转发详细信息 
     */
    getShareInfo(obj: _GetShareInfoObj);

    /*********************************** 虚拟支付 ***********************************/

    /**
     * 发起米大师支付 
     */
    requestMidasPayment(obj: _MidasPaymentObj);

    /*********************************** 数据缓存 ***********************************/

    /**
     * 清理本地数据缓存 
     */
    clearStorage(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * wx.clearStorage 的同步版本 
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
     * wx.getStorageInfo 的同步版本 
     */
    getStorageInfoSync(): { keys: Array<string>, currentSize: number, limitSize: number };
    /**
     * wx.getStorage 的同步版本 
     */
    getStorageSync(key: string): any;
    /**
     * 从本地缓存中移除指定 key 
     */
    removeStorage(obj: { key: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * wx.removeStorage 的同步版本 
     */
    removeStorageSync(key: string);
    /**
     * 将数据存储在本地缓存中指定的 key 中 
     */
    setStorage(obj: { key: string, data: any, success?: Function, fail?: Function, complete?: Function });
    /**
     * wx.setStorage 的同步版本 
     */
    setStorageSync(key: string, data: any);

    /*********************************** 媒体 ***********************************/

    /**
     * 创建内部 audio 上下文 WXInnerAudioContext 对象 
     */
    createInnerAudioContext(): WXInnerAudioContext;
    /**
     * 获取当前支持的音频输入源
     * @version 2.1.0
     */
    getAvailableAudioSources(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 设置 WXInnerAudioContext 的播放选项
     * @version 2.3.0
     */
    setInnerAudioOption(obj: {
        mixWithOther?: boolean, obeyMuteSwitch?: boolean, success?: Function,
        fail?: Function, complete?: Function
    });
    /**
     * 从本地相册选择图片或使用相机拍照 
     */
    chooseImage(obj: _ChooseImageObj);
    /**
     * 在新页面中全屏预览图片 
     */
    previewImage(obj: { urls: Array<string>, current?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 保存图片到系统相册
     * 调用前需要 用户授权 scope.writePhotosAlbum
     */
    saveImageToPhotosAlbum(obj: { filePath: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取全局唯一的录音管理器 WXRecorderManager 
     */
    getRecorderManager(): WXRecorderManager;
    /**
     * 创建视频 
     */
    createVideo(obj: _CreateVideoObj): WXVideo;
    /**
     * 创建相机
     * @version 2.9.0 
     */
    createCamera(obj: _CreateCameraObj): WXCamera;
    /**
     * 创建视频解码器，可逐帧获取解码后的数据
     * @version 2.11.1 
     */
    createVideoDecoder(): WXVideoDecoder;
    /**
     * 更新实时语音静音设置
     * @version 2.7.0
     */
    updateVoIPChatMuteConfig(obj: {
        muteConfig: { muteMicrophone: boolean, muteEarphone: boolean },
        handsFree?: boolean, success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调
     * @version 2.7.0
     */
    onVoIPChatSpeakersChanged(callback: (res: { openIdList: Array<String>, errCode: number, errMsg: string }) => void);
    /**
     * 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调
     * @version 2.7.0
     */
    onVoIPChatMembersChanged(callback: (res: { openIdList: Array<String>, errCode: number, errMsg: string }) => void);
    /**
     * 监听被动断开实时语音通话事件。包括小游戏切入后端时断开
     * @version 2.7.0
     */
    onVoIPChatInterrupted(callback: (res: { errCode: number, errMsg: string }) => void);
    /**
     * 取消监听实时语音通话成员通话状态变化事件
     * @version 2.9.0
     */
    offVoIPChatSpeakersChanged(callback: Function);
    /**
     * 取消监听实时语音通话成员在线状态变化事件
     * @version 2.9.0
     */
    offVoIPChatMembersChanged(callback: Function);
    /**
     * 取消监听被动断开实时语音通话事件
     * @version 2.9.0
     */
    offVoIPChatInterrupted(callback: Function);
    /**
     * 加入 (创建) 实时语音通话
     * 调用前需要 用户授权 scope.record
     * @version 2.7.0
     */
    joinVoIPChat(obj: _JoinVoIPChatObj);
    /**
     * 退出（销毁）实时语音通话
     * @version 2.7.0
     */
    exitVoIPChat(obj: { success?: Function, fail?: Function, complete?: Function });

    /*********************************** 位置 ***********************************/

    /**
     * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。
     * 开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。地图相关使用的坐标格式应为 gcj02
     * 调用前需要 用户授权 scope.userLocation
     */
    getLocation(obj: _GetLocationObj);

    /*********************************** 文件 ***********************************/

    /**
     * 保存文件系统的文件到用户磁盘，仅在 PC 端支持
     * @version 2.11.0
     */
    saveFileToDisk(obj: { filePath: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取全局唯一的文件管理器 
     */
    getFileSystemManager(): WXFileSystemManager;

    /*********************************** 开放接口 ***********************************/

    /**
     * 打开另一个小程序 
     */
    navigateToMiniProgram(obj: {
        appId: string, path?: string, extraData?: Object, envVersion?: string,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 获取用户信息
     * 调用前需要 用户授权 scope.userInfo
     */
    getUserInfo(obj: _GetUserInfoObj);
    /**
     * 创建用户信息按钮 
     */
    createUserInfoButton(obj: _UserInfoButtonObj): WXUserInfoButton;
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
     * 给指定的好友分享游戏信息，该接口只可在开放数据域下使用。
     * 接收者打开之后，可以用 wx.modifyFriendInteractiveStorage 传入参数 quiet=true 发起一次无需弹框确认的好友互动
     * @version 2.9.0
     */
    shareMessageToFriend(obj: {
        openId: string, title?: string, imageUrl?: string, imageUrlId?: string,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 对用户托管数据进行写数据操作 
     */
    setUserCloudStorage(obj: { KVDataList: Array<WXKVData>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 删除用户托管数据当中对应 key 的数据 
     */
    removeUserCloudStorage(obj: { keyList: Array<string>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用
     * @version 2.9.0
     */
    onInteractiveStorageModified(callback: Function);
    /**
     * 修改好友的互动型托管数据，该接口只可在开放数据域下使用
     * @version 2.7.7
     */
    modifyFriendInteractiveStorage(obj: _ModifyFriendInteractiveStorageObj);
    /**
     * 获取当前用户互动型托管数据对应 key 的数据
     * @version 2.7.7
     */
    getUserInteractiveStorage(obj: {
        keyList: Array<string>, success?: (res: { encryptedData: string, cloudID: string }) => void,
        fail?: (res: { errMsg: string, errCode: number }) => void, complete?: Function
    });
    /**
     * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用 
     */
    getUserCloudStorage(obj: {
        keyList: Array<string>, success?: (res: { KVDataList: Array<WXKVData> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取主域和开放数据域共享的 sharedCanvas。只有开放数据域能调用
     */
    getSharedCanvas(): WXCanvas;
    /**
     * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友，此接口只能在开放数据域中使用
     * @version 2.9.0
     */
    getPotentialFriendList(obj: {
        success?: (res: { list: Array<WXFriendInfo> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取群信息。小游戏通过群分享卡片打开的情况下才可以调用。该接口只可在开放数据域下使用
     * @version 2.10.1
     */
    getGroupInfo(obj: { openGId: string, success?: (res: { name: string }) => void, fail?: Function, complete?: Function });
    /**
     * 获取群同玩成员的游戏数据。小游戏通过群分享卡片打开的情况下才可以调用。该接口只可在开放数据域下使用 
     */
    getGroupCloudStorage(obj: {
        shareTicket: string, keyList: Array<string>,
        success?: (res: { data: Array<WXUserGameData> }) => void, fail?: Function, complete?: Function
    });
    /**
     * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用 
     */
    getFriendCloudStorage(obj: {
        keyList: Array<string>, success?: (res: { data: Array<WXUserGameData> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 在无须用户授权的情况下，批量获取用户信息，仅支持获取自己和好友的用户信息。该接口只在开放数据域下可用
     */
    getUserInfo(obj: {
        openIdList?: Array<string>, lang?: string, success?: (res: { data: Array<WXUserInfo> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取开放数据域 
     */
    getOpenDataContext(): OpenDataContext;
    /**
     * 监听主域发送的消息 
     */
    onMessage(callback: Function);
    /**
     * 根据用户当天游戏时间判断用户是否需要休息 
     */
    checkIsUserAdvisedToRest(obj: {
        todayPlayedTime: number, success?: (res: { result: boolean }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 创建打开意见反馈页面的按钮 
     */
    createFeedbackButton(obj: { type: string, text?: string, image?: string, style: WXButtonStyle }): FeedbackButton;
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
     * 2.3.0 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息
     */
    openSetting(obj: {
        withSubscriptions?: boolean,
        success?: (res: { authSetting: AuthSetting, subscriptionsSetting: SubscriptionsSetting }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
     */
    getSetting(obj: {
        withSubscriptions?: boolean,
        success?: (res: { authSetting: AuthSetting, subscriptionsSetting: SubscriptionsSetting }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 创建打开设置页面的按钮
     * @version 2.0.7
     */
    createOpenSettingButton(obj: { type: string, text?: string, image?: string, style: WXButtonStyle }): OpenSettingButton;
    /**
     * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈 
     */
    createGameClubButton(obj: { type: string, text?: string, image?: string, style: WXButtonStyle, icon: string }): GameClubButton;
    /**
     * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用 
     */
    openCustomerServiceConversation(obj: {
        sessionFrom?: string, showMessageCard?: boolean, sendMessageTitle?: string,
        sendMessagePath?: string, sendMessageImg?: string, success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 获取用户过去三十天微信运动步数。需要先调用 wx.login 接口
     * 调用前需要 用户授权 scope.werun
     */
    getWeRunData(obj: {
        success?: (res: { encryptedData: string, iv: string, cloudID: string }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 查看微信卡包中的卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用
     * @version 2.5.0
     */
    openCard(obj: { cardList: Array<{ cardId: string, code: string }>, success?: Function, fail?: Function, complete?: Function });
    /**
     * 批量添加卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用
     * @version 2.5.0
     */
    addCard(obj: {
        cardList: Array<{ cardId: string, cardExt: string }>,
        success?: (res: { cardList: Array<{ cardId: string, code: string, cardExt: string, isSuccess: boolean }> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 自定义业务数据监控上报接口
     * @version 2.1.2
     */
    reportMonitor(name: string, value: string);
    /**
     * 调起小游戏系统订阅消息界面，返回用户订阅消息的操作结果
     * @version 2.9.4
     */
    requestSubscribeSystemMessage(obj: {
        msgTypeList: Array<string>, success?: (res: { errMsg: string }) => void,
        fail?: (res: { errMsg: string, errCode: number }) => void, complete?: Function
    });
    /**
     * 调起客户端小游戏订阅消息界面，返回用户订阅消息的操作结果
     * @version 2.4.4
     */
    requestSubscribeMessage(obj: {
        tmplIds: Array<string>, success?: (res: { errMsg: string }) => void,
        fail?: (res: { errMsg: string, errCode: number }) => void, complete?: Function
    });

    /*********************************** 设备 ***********************************/

    /**
     * 监听当前外围设备被连接或断开连接事件
     * @version 2.10.3
     */
    onBLEPeripheralConnectionStateChanged(callback: (res: { deviceId: string, serverId: string, connected: boolean }) => void);
    /**
     * 取消监听当前外围设备被连接或断开连接事件
     * @version 2.10.3
     */
    offBLEPeripheralConnectionStateChanged(callback: Function);
    /**
     * 建立本地作为外围设备的服务端，可创建多个
     * @version 2.10.3
     */
    createBLEPeripheralServer(obj: {
        success?: (res: { server: BLEPeripheralServer }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 停止搜索附近的 iBeacon 设备
     * @version 2.9.2
     */
    stopBeaconDiscovery(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 开始搜索附近的 iBeacon 设备
     * @version 2.9.2
     */
    startBeaconDiscovery(obj: {
        uuids: Array<string>; ignoreBluetoothAvailable?: boolean,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 监听 iBeacon 设备更新事件，仅能注册一个监听
     * @version 2.9.2
     */
    onBeaconUpdate(callback: (res: { beacons: Array<IBeaconInfo> }) => void);
    /**
     * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
     * @version 2.9.2
     */
    onBeaconServiceChange(callback: (res: { available: boolean, discovering: boolean }) => void);
    /**
     * 取消监听 iBeacon 设备更新事件
     * @version 2.9.2
     */
    offBeaconUpdate(callback: Function);
    /**
     * 取消监听 iBeacon 服务状态变化事件
     * @version 2.9.2
     */
    offBeaconServiceChange(callback: Function);
    /**
     * 获取所有已搜索到的 iBeacon 设备
     * @version 2.9.2
     */
    getBeacons(obj: { success?: (res: { beacons: Array<IBeaconInfo> }) => void, fail?: Function, complete?: Function });
    /**
     * 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用
     * @version 2.9.2
     */
    writeBLECharacteristicValue(obj: {
        deviceId: string, serviceId: string, characteristicId: string, value: ArrayBuffer,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 设置蓝牙最大传输单元。
     * 需在 wx.createBLEConnection调用成功后调用，mtu 设置范围 (22,512)。安卓5.1以上有效
     * @version 2.11.0
     */
    setBLEMTU(obj: { deviceId: string, mtu: number, success?: Function, fail?: Function, complete?: Function });
    /**
     * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用
     * @version 2.9.2
     */
    readBLECharacteristicValue(obj: {
        deviceId: string, serviceId: string, characteristicId: string,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
     * @version 2.9.2
     */
    onBLEConnectionStateChange(callback: (res: { deviceId: string, connected: boolean }) => void);
    /**
     * 监听低功耗蓝牙设备的特征值变化事件。
     * 必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification
     * @version 2.9.2
     */
    onBLECharacteristicValueChange(callback: (res: {
        deviceId: string, serviceId: string,
        characteristicId: string, value: ArrayBuffer
    }) => void);
    /**
     * 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。
     * 注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用
     * @version 2.9.2
     */
    notifyBLECharacteristicValueChange(obj: {
        deviceId: string, serviceId: string, characteristicId: string, state: boolean,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 获取蓝牙设备所有服务(service)
     * @version 2.9.2
     */
    getBLEDeviceServices(obj: {
        deviceId: string,
        success?: (res: { services: Array<{ uuid: string, isPrimary: boolean }> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取蓝牙设备的信号强度
     * @version 2.11.0
     */
    getBLEDeviceRSSI(obj: {
        deviceId: string, success?: (res: { RSSI: number }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取蓝牙设备某个服务中所有特征值(characteristic)
     * @version 2.9.2
     */
    getBLEDeviceCharacteristics(obj: {
        deviceId: string, serviceId: string,
        success?: (res: {
            characteristics: Array<{
                uuid: string,
                properties: { write: boolean; read: boolean, notify: boolean, indicate: boolean }
            }>
        }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 连接低功耗蓝牙设备
     * @version 2.9.2
     */
    createBLEConnection(obj: {
        deviceId: string, timeout?: number,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 断开与低功耗蓝牙设备的连接
     * @version 2.9.2
     */
    closeBLEConnection(obj: { deviceId: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止搜寻附近的蓝牙外围设备
     * @version 2.9.2
     */
    stopBluetoothDevicesDiscovery(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 开始搜寻附近的蓝牙外围设备
     * @version 2.9.2
     */
    startBluetoothDevicesDiscovery(obj: {
        services?: Array<string>, allowDuplicatesKey?: boolean, interval?: number, powerLevel?: number,
        success?: Function, fail?: Function, complete?: Function
    });
    /**
     * 初始化蓝牙模块。iOS 上开启主机/丛机模式时需分别调用一次，指定对应的 mode
     * @version 2.9.2
     */
    openBluetoothAdapter(obj: { mode?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听寻找到新设备的事件
     * @version 2.9.2
     */
    onBluetoothDeviceFound(callback: (res: {
        devices: Array<{
            name: string, deviceId: string, RSSI: number, advertisData: ArrayBuffer,
            advertisServiceUUIDs: Array<string>, localName: string, serviceData: Object
        }>
    }) => void);
    /**
     * 监听蓝牙适配器状态变化事件
     * @version 2.9.2
     */
    onBluetoothAdapterStateChange(callback: (res: { available: boolean, discovering: boolean }) => void);
    /**
     * 根据 uuid 获取处于已连接状态的设备
     * @version 2.9.2
     */
    getConnectedBluetoothDevices(obj: {
        services: Array<string>,
        success?: (res: { devices: Array<{ name: string, deviceId: string }> }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备
     * @version 2.9.2
     */
    getBluetoothDevices(obj: {
        success?: (res: {
            devices: Array<{
                name: string, deviceId: string, RSSI: number, advertisData: ArrayBuffer,
                advertisServiceUUIDs: Array<string>, localName: string, serviceData: Object
            }>
        }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * 获取本机蓝牙适配器状态
     * @version 2.9.2
     */
    getBluetoothAdapterState(obj: {
        success?: (res: { discovering: boolean, available: boolean }) => void, fail?: Function, complete?: Function
    });
    /**
     * 关闭蓝牙模块
     * @version 2.9.2
     */
    closeBluetoothAdapter(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 获取设备电量 
     */
    getBatteryInfo(obj: { success?: (res: { level: string, isCharging: boolean }) => void, fail?: Function, complete?: Function });
    /**
     * wx.getBatteryInfo 的同步版本。 在 iOS 上不可用
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
     * 取消监听网络状态变化事件，参数为空，则取消所有的事件监听
     * @version 2.9.3 
     */
    offNetworkStatusChange(callback: Function);
    /**
     * 监听网络状态变化事件 
     */
    onNetworkStatusChange(callback: (res: { isConnected: boolean, networkType: string }) => void);
    /**
     * 获取屏幕亮度 
     */
    getScreenBrightness(obj: { success?: (res: { value: number }) => void, fail?: Function, complete?: Function });
    /**
     * 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
     * @version 2.8.1
     */
    onUserCaptureScreen(callback: Function);
    /**
     * 设置是否保持常亮状态 
     */
    setKeepScreenOn(obj: { keepScreenOn: boolean, success?: Function, fail?: Function, complete?: Function });
    /**
     * 设置屏幕亮度 
     */
    setScreenBrightness(obj: { value: number, success?: Function, fail?: Function, complete?: Function });
    /**
     * 取消监听加速度数据事件，参数为空，则取消所有的事件监听
     * @version 2.9.3
     */
    offAccelerometerChange(callback: Function);
    /**
     * 监听加速度数据事件 
     */
    onAccelerometerChange(callback: (res: { x: number, y: number, z: number }) => void);
    /**
     * 开始监听加速度数据 
     */
    startAccelerometer(obj: { interval?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止监听加速度数据 
     */
    stopAccelerometer(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听
     * @version 2.9.3
     */
    offCompassChange(callback: Function);
    /**
     * 监听罗盘数据变化事件 
     */
    onCompassChange(callback: (res: { direction: number, accuracy: number | string }) => void);
    /**
     * 开始监听罗盘数据 
     */
    startCompass(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止监听罗盘数据 
     */
    stopCompass(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听
     * @version 2.9.3
     */
    offDeviceMotionChange(callback: Function);
    /**
     * 监听设备方向变化事件 
     */
    onDeviceMotionChange(callback: (res: { alpha: number, beta: number, gamma: number }) => void);
    /**
     * 开始监听设备方向的变化 
     */
    startDeviceMotionListening(obj: { interval?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止监听设备方向的变化 
     */
    stopDeviceMotionListening(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 取消监听横竖屏切换事件 
     */
    offDeviceOrientationChange(callback: Function);
    /**
     * 监听横竖屏切换事件 
     */
    onDeviceOrientationChange(callback: (res: { value: string }) => void);
    /**
     * 取消监听陀螺仪数据变化事件
     * @version 2.9.3
     */
    offGyroscopeChange(callback: Function);
    /**
     * 监听陀螺仪数据变化事件 
     */
    onGyroscopeChange(callback: (res: { x: number, y: number, z: number }) => void);
    /**
     * 开始监听陀螺仪数据 
     */
    startGyroscope(obj: { interval?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 停止监听陀螺仪数据 
     */
    stopGyroscope(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 取消监听内存不足告警事件
     * @version 2.9.0
     */
    offMemoryWarning(callback: Function);
    /**
     * 监听内存不足告警事件 
     */
    onMemoryWarning(callback: (res: { level: number }) => void);
    /**
     * 使手机发生较长时间的振动（400 ms) 
     */
    vibrateLong(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
     */
    vibrateShort(obj: { success?: Function, fail?: Function, complete?: Function });

    /*********************************** Worker ***********************************/

    /**
     * 创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 Worker.terminate
     */
    createWorker(scriptPath: string): WXWorker;

    /*********************************** 游戏服务 ***********************************/

    /**
     * 获取全局唯一的游戏服务管理器
     * @version 2.8.0
     */
    getGameServerManager(): GameServerManager;

    /*********************************** 游戏时局回放 ***********************************/

    /**
     * 获取全局唯一的游戏画面录制对象
     * @version 2.8.0
     */
    getGameRecorder(): GameRecorder;
    /**
     * 创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享
     * @version 2.8.0
     */
    createGameRecorderShareButton(obj: _CreateGameRecorderShareButtonObj): GameRecorderShareButton;

    /*********************************** 推荐组件 ***********************************/

    /**
     * 创建小游戏推荐弹窗组件
     * @version 2.7.5
     */
    createGamePortal(obj: { adUnitId: string }): GamePortal;
    /**
     * 创建小游戏推荐icon组件
     * @version 2.8.3
     */
    createGameIcon(obj: { adUnitId: string, count: number, style: Array<any> }, styleItem: _GameIconItemStyleObj): GameIcon;
    /**
     * 创建小游戏推荐banner组件
     * @version 2.7.5
     */
    createGameBanner(obj: { adUnitId: string, style: { left: number, top: number } }): GameBanner;

    /*********************************** 第三方平台 ***********************************/

    /**
     * wx.getExtConfig 的同步版本
     * @version 2.8.3
     */
    getExtConfigSync(): Object;
    /**
     * 获取第三方平台自定义的数据字段
     * @version 2.8.3
     */
    getExtConfigSync(obj: { success?: (res: { extConfig: Object }) => void, fail?: Function, complete?: Function });
}

/**
 * 系统信息
 */
declare interface WXSystemInfo {
    /**
     * 设备品牌
     * @version 1.5.0
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
     * @version 1.1.0
     */
    screenWidth: number;
    /**
     * 屏幕高度，单位px
     * @version 1.1.0
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
     * @version 1.9.0
     */
    statusBarHeight: number;
    /**
     * 微信设置的语言
     */
    language: string;
    /**
     * 微信版本号
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
     * 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准
     * @version 1.5.0
     */
    fontSizeSetting: number;
    /**
     * 客户端基础库版本
     * @version 1.1.0
     */
    SDKVersion: string;
    /**
     * 设备性能等级（仅Android小游戏）。
     * 取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）
     * @version 1.8.0
     */
    benchmarkLevel: number;
    /**
     * 允许微信使用相册的开关（仅 iOS 有效）
     * @version 2.6.0
     */
    albumAuthorized: boolean;
    /**
     * 允许微信使用摄像头的开关
     * @version 2.6.0
     */
    cameraAuthorized: boolean;
    /**
     * 允许微信使用定位的开关
     * @version 2.6.0
     */
    locationAuthorized: boolean;
    /**
     * 允许微信使用麦克风的开关
     * @version 2.6.0
     */
    microphoneAuthorized: boolean;
    /**
     * 允许微信通知的开关
     * @version 2.6.0
     */
    notificationAuthorized: boolean;
    /**
     * 允许微信通知带有提醒的开关（仅 iOS 有效）
     * @version 2.6.0
     */
    notificationAlertAuthorized: boolean;
    /**
     * 允许微信通知带有标记的开关（仅 iOS 有效）
     * @version 2.6.0
     */
    notificationBadgeAuthorized: boolean;
    /**
     * 允许微信通知带有声音的开关（仅 iOS 有效）
     * @version 2.6.0
     */
    notificationSoundAuthorized: boolean;
    /**
     * 蓝牙的系统开关
     * @version 2.6.0
     */
    bluetoothEnabled: boolean;
    /**
     * 地理位置的系统开关
     * @version 2.6.0
     */
    locationEnabled: boolean;
    /**
     * Wi-Fi 的系统开关
     * @version 2.6.0
     */
    wifiEnabled: boolean;
    /**
     * 在竖屏正方向下的安全区域
     * @version 2.7.0
     */
    safeArea: Object;
    /**
     * 系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏）
     * @version 2.11.0
     */
    theme: string;
}

/**
 * 启动信息
 */
declare interface WXLaunchOptions {
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
}

/**
 * 版本更新管理器
 */
declare interface WXUpdateManager {
    /**
     * 强制小程序重启并使用新版本 
     */
    applyUpdate();
    /**
     * 监听向微信后台请求检查更新结果事件 
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
declare interface WXTouch {
    /**
     * WXTouch 对象的唯一标识符，只读属性。
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
    /**
     * 触点相对于屏幕左边沿的 X 坐标。 
     */
    clientX: number;
    /**
     * 触点相对于屏幕上边沿的 Y 坐标。 
     */
    clientY: number;
}

/**
 * 性能管理器
 */
declare interface WXPerformance {
    /**
     * 可以获取当前时间以微秒为单位的时间戳 
     */
    now(): number;
}

/**
 * 加载分包任务实例，用于获取分包加载状态
 */
declare interface WXLoadSubpackageTask {
    /**
     * 监听分包加载进度变化事件
     * @version 2.1.0
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void);
}

/**
 * 日志管理器实例
 */
declare interface WXLogManager {
    debug(msg?: any, ...args: Array<any>);
    info(msg?: any, ...args: Array<any>);
    log(msg?: any, ...args: Array<any>);
    warn(msg?: any, ...args: Array<any>);
}

/**
 * 画布对象
 */
declare interface WXCanvas {
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
        antialias?: boolean, preserveDrawingBuffer?: boolean, antialiasSamples?: number, alpha?: number
    }): WXRenderingContext;
    /**
     * 把画布上的绘制内容以一个 data URI 的格式返回 
     */
    toDataURL(): string;
    /**
     * 将当前 WXCanvas 保存为一个临时文件。
     * 如果使用了开放数据域，则生成后的文件仅能被用于以下接口：wx.saveImageToPhotosAlbum、wx.shareAppMessage、wx.onShareAppMessage 
     */
    toTempFilePath(obj: {
        x?: number, y?: number, width?: number, height?: number, destWidth?: number, destHeight?: number,
        fileType?: string, quality?: number, success?: (res: { tempFilePath: string }) => void,
        fail?: Function, complete?: Function
    });
    /**
     * WXCanvas.toTempFilePath 的同步版本 
     */
    toTempFilePathSync(obj: {
        x?: number, y?: number, width?: number, height?: number,
        destWidth?: number, destHeight?: number, fileType?: string, quality?: number
    }): string;
}

/**
 * 画布对象的绘图上下文 
 */
declare interface WXRenderingContext {
}

/**
 * 图片对象 
 */
declare interface WXImage {
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
 * 激励视频广告组件
 */
declare interface WXRewardedVideoAd {
    /**
     * 销毁激励视频广告实例
     * @version 2.8.0 
     */
    destroy();
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
 * 插屏广告组件
 */
declare interface WXInterstitialAd {
    /**
     * 销毁插屏广告实例
     * @version 2.8.0 
     */
    destroy();
    /**
     * 加载插屏广告 
     */
    load(): Promise<any>;
    /**
     * 显示插屏广告
     */
    show(): Promise<any>;
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

/**
 * grid(格子) 广告组件
 */
declare interface WXGridAd {
    /**
     * grid(格子) 广告广告组件的样式。
     * style 上的属性的值仅为开发者设置的grid(格子) 广告) 广告会根据开发者设置的宽度进行等比缩放，
     * 缩放后的真实尺寸需要通过 WXGridAd.onResize() 事件获得
     */
    style: { left: number, top: number, width: number, height: number, realWidth: number, realHeight: number };
    /**
     * grid(格子) 广告广告组件的主题，提供 white black 两种主题选择
     */
    adTheme: string;
    /**
     * grid(格子) 广告组件的格子个数，可设置爱5，8两种格子个数样式，默认值为5
     */
    gridCount: number;
    /**
     * 销毁 grid(格子) 广告
     */
    destroy();
    /**
     * 隐藏 grid(格子) 广告
     */
    hide();
    /**
     * 显示 grid(格子) 广告
     */
    show(): Promise<any>;
    /**
     * 监听 grid(格子) 广告尺寸变化事件
     */
    onResize(callback: (res: { width: number, height: number }) => void);
    /**
     * 监听 grid(格子) 广告加载事件
     */
    onLoad(callback: Function);
    /**
     * 监听 grid(格子) 广告错误事件
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 取消监听 grid(格子) 广告尺寸变化事件
     */
    offResize(callback: Function);
    /**
     * 取消监听 grid(格子) 广告错误事件 
     */
    offError(callback: Function);
    /**
     * 取消监听 grid(格子) 广告加载事件 
     */
    offLoad(callback: Function);
}

/**
 * banner 广告组件
 */
declare interface WXBannerAd {
    /**
     * banner 广告组件的样式。
     * style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，
     * 缩放后的真实尺寸需要通过 WXBannerAd.onResize() 事件获得。 
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
 * 菜单按钮的布局位置信息
 */
declare interface WXMenuButtonBoundary {
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
declare interface WXRequestTask {
    /**
     * 中断请求任务
     * @version 1.4.0
     */
    abort();
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @version 2.1.0
     */
    onHeadersReceived(callback: (res: { header: Object }) => void);
    /**
     * 取消监听 HTTP Response Header 事件
     * @version 2.1.0
     */
    offHeadersReceived(callback: Function);
}

/**
 * 一个可以监听下载进度变化事件，以及取消下载任务的对象
 */
declare interface WXDownloadTask {
    /**
     * 中断下载任务
     * @version 1.4.0
     */
    abort();
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @version 2.1.0
     */
    onHeadersReceived(callback: (res: { header: Object }) => void);
    /**
     * 取消监听 HTTP Response Header 事件
     * @version 2.1.0
     */
    offHeadersReceived(callback: Function);
    /**
     * 监听下载进度变化事件
     * @version 1.4.0
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void);
    /**
     * 取消监听下载进度变化事件
     * @version 1.4.0
     */
    offProgressUpdate(callback: Function);
}

/**
 * 一个可以监听上传进度变化事件，以及取消上传任务的对象
 */
declare interface WXUploadTask {
    /**
     * 中断上传任务 
     */
    abort();
    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     * @version 2.1.0
     */
    onHeadersReceived(callback: (res: { header: Object }) => void);
    /**
     * 取消监听 HTTP Response Header 事件
     * @version 2.1.0
     */
    offHeadersReceived(callback: Function);
    /**
     * 监听上传进度变化事件
     * @version 1.4.0
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesSent: number, totalBytesExpectedToSend: number }) => void);
    /**
     * 取消监听上传进度变化事件
     * @version 2.1.0
     */
    offProgressUpdate(callback: Function);
}

/**
 * WebSocket 任务，可通过 wx.connectSocket() 接口创建返回
 */
declare interface WXSocketTask {
    /**
     * 关闭 WebSocket 连接 
     */
    close(obj: { code?: number, reason?: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听WebSocket 连接关闭事件 
     */
    onClose(callback: (res: { code: number, reason: string }) => void);
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
    onOpen(callback: (res: { header: Object, profile: Object }) => void);
    /**
     * 通过 WebSocket 连接发送数据 
     */
    send(obj: { data: string | ArrayBuffer, success?: Function, fail?: Function, complete?: Function });
}

/**
 * 一个 UDP Socket 实例，默认使用 IPv4 协议
 */
declare interface WXUDPSocket {
    /**
     * 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号
     */
    bind(port?: number): number;
    /**
     * 关闭 UDP Socket 实例，相当于销毁 
     */
    close();
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
    /**
     * 向指定的 IP 和 port 发送消息 
     */
    send(obj: { address: string, port: number, message: string | ArrayBuffer, offset?: number, length?: number });
}

/**
 * WXInnerAudioContext 实例
 */
declare interface WXInnerAudioContext {
    /**
     * 音频资源的地址，用于直接播放。2.2.3 开始支持云文件ID 
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
     * 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
     * 从 2.3.0 版本开始此参数不生效，使用 wx.setInnerAudioOption 接口统一设置
     */
    obeyMuteSwitch: boolean;
    /**
     * 音量。范围 0~1。默认为 1
     * @version 1.9.90
     */
    volume: number;
    /**
     * 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本）
     * @version 2.11.0
     */
    playbackRate: number;
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
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
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
declare interface WXRecorderManager {
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
     * 以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
     * @version 2.3.0
     */
    onInterruptionBegin(callback: Function);
    /**
     * 监听录音中断结束事件
     * @version 2.3.0
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
    onStop(callback: (res: { tempFilePath: string, duration: number, fileSize: number }) => void);
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
    start(obj: _StartRecordObj);
    /**
     * 停止录音 
     */
    stop();
}

/**
 * 视频对象
 */
declare interface WXVideo {
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
     * 视频是否遵从系统静音开关设置（仅iOS）
     * @version 2.4.0 
     */
    obeyMuteSwitch: boolean;
    /**
     * 是否启用手势控制播放进度 
     */
    enableProgressGesture: boolean;
    /**
     * 是否开启双击播放的手势 
     */
    enablePlayGesture: boolean;
    /**
     * 是否显示视频中央的播放按钮 
     */
    showCenterPlayBtn: boolean;
    /**
     * 视频由于需要缓冲下一帧而停止时触发的回调函数 
     */
    onwaiting: Function;
    /**
     * 视频下载（缓冲）时周期性触发的回调函数 
     */
    onprogress: Function;
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
     * 取消监听视频下载（缓冲）事件 
     */
    offProgress(callback: Function);
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
     * 监听视频下载（缓冲）事件 
     */
    onProgress(callback: (res: { buffered: number, duration: number }) => void);
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
 * 相机对象
 */
declare interface WXCamera {
    /**
     * 相机的左上角横坐标 
     */
    x: number;
    /**
     * 相机的左上角纵坐标 
     */
    y: number;
    /**
     * 相机的宽度 
     */
    width: number;
    /**
     * 相机的高度 
     */
    height: number;
    /**
     * 摄像头朝向 
     */
    devicePosition: string;
    /**
     * 闪光灯，值为 auto, on, off 
     */
    flash: string;
    /**
     * 帧数据图像尺寸，值为 small, medium, large
     */
    size: string;
    /**
     * 关闭监听帧数据
     */
    closeFrameChange();
    /**
     * 销毁相机
     */
    destroy();
    /**
     * 开启监听帧数据
     */
    listenFrameChange();
    /**
     * 监听用户不允许授权使用摄像头的情况 
     */
    onAuthCancel(callback: Function);
    /**
     * 监听摄像头实时帧数据
     */
    onCameraFrame(callback: (res: { width: number, height: number, data: ArrayBuffer }) => void);
    /**
     * 监听摄像头非正常终止事件，如退出后台等情况 
     */
    onStop(callback: Function);
    /**
     * 开始录像 
     */
    startRecord(): Promise<any>;
    /**
     * 结束录像，成功则返回封面与视频 
     */
    stopRecord(compressed: boolean): Promise<{ tempThumbPath: string, tempVideoPath: string }>;
    /**
     * 拍照，可指定质量，成功则返回图片 
     */
    takePhoto(quality: string): Promise<{ tempImagePath: string, width: number, height: number }>;
}

/**
 * 视频解码器，可以进行视频解码相关操作，逐帧获取解码数据
 */
declare interface WXVideoDecoder {
    /**
     * 获取下一帧的解码数据
     */
    getFrameData(): { width: number, height: number, data: ArrayBuffer, pkPts: number, pkDts: number };
    /**
     * 取消监听录制事件。当对应事件触发时，该回调函数不再执行
     */
    off(eventName: string, callback: Function);
    /**
     * 注册监听录制事件的回调函数。当对应事件触发时，回调函数会被执行
     */
    on(eventName: string, callback: Function);
    /**
     * 移除解码器 
     */
    remove();
    /**
     * 跳到某个时间点解码
     */
    seek(position: number);
    /**
     * 开始解码 
     */
    start(obj: { source: string, mode?: number });
    /**
     * 停止解码 
     */
    stop();
}

/**
 * 文件管理器
 */
declare interface WXFileSystemManager {
    /**
     * 判断文件/目录是否存在 
     */
    access(obj: { path: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function });
    /**
     * WXFileSystemManager.access 的同步版本 
     */
    accessSync(path: string);
    /**
     * 在文件结尾追加内容
     * @version 2.1.0
     */
    appendFile(obj: {
        filePath: string, data: string | ArrayBuffer, encoding?: string,
        success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * WXFileSystemManager.appendFile 的同步版本
     * @version 2.1.0
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
     * WXFileSystemManager.copyFile 的同步版本 
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
     * WXFileSystemManager.mkdir 的同步版本 
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
     * WXFileSystemManager.readdir 的同步版本 
     */
    readdirSync(dirPath: string): Array<string>;
    /**
     * 读取本地文件内容 
     */
    readFile(obj: {
        filePath: string, encoding?: string, position?: string, length?: string,
        success?: (res: { data: string | ArrayBuffer }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * WXFileSystemManager.readFile 的同步版本 
     */
    readFileSync(filePath: string, encoding?: string, position?: string, length?: string): string | ArrayBuffer;
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
     * WXFileSystemManager.rename 的同步版本 
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
     * WXFileSystemManager.rmdir 的同步版本 
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
     * WXFileSystemManager.saveFile 的同步版本 
     */
    saveFileSync(tempFilePath: string, filePath: string): string;
    /**
     * 获取文件 WXStats 对象 
     */
    stat(obj: {
        path: string, recursive?: boolean, success?: (res: { stats: WXStats | Object }) => void,
        fail?: (res: { errMsg: string }) => void, complete?: Function
    });
    /**
     * WXFileSystemManager.stat 的同步版本 
     */
    statSync(path: string, recursive: boolean): WXStats | Object;
    /**
     * 删除文件 
     */
    unlink(obj: { filePath: string, success?: Function, fail?: (res: { errMsg: string }) => void, complete?: Function });
    /**
     * WXFileSystemManager.unlink 的同步版本 
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
     * WXFileSystemManager.writeFile 的同步版本 
     */
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding: string);
}

/**
 * 描述文件状态的对象
 */
declare interface WXStats {
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
declare interface WXUserInfo {
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
declare interface WXButtonStyle {
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
declare interface WXUserInfoButton {
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
    style: WXButtonStyle;
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
        userInfo: WXUserInfo, rawData: string, signature: string, encryptedData: string, iv: string
    }) => void);
    /**
     * 显示用户信息按钮 
     */
    show();
}

/**
 * 托管的 KV 数据 
 */
declare interface WXKVData {
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
 * 好友信息 
 */
declare interface WXFriendInfo {
    /**
     * 用户的微信头像 url
     */
    avatarUrl: string;
    /**
     * 用户的微信昵称 
     */
    nickname: string;
    /**
     * 用户的openid
     */
    openid: string;
}

/**
 * 托管数据 
 */
declare interface WXUserGameData {
    /**
     * 用户的微信头像 url 
     */
    avatarUrl: string;
    /**
     * 用户的微信昵称 
     */
    nickname: string;
    /**
     * 用户的 openid 
     */
    openid: string;
    /**
     * 用户的托管 KV 数据列表 
     */
    KVDataList: Array<WXKVData>;
}

/**
 * 开放数据域对象
 */
declare interface OpenDataContext {
    /**
     * 开放数据域和主域共享的 sharedCanvas 
     */
    canvas: WXCanvas;
    /**
     * 向开放数据域发送消息 
     */
    postMessage(message: Object);
}

/**
 * 用户点击后打开意见反馈页面的按钮
 */
declare interface FeedbackButton {
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
    style: WXButtonStyle;
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
declare interface OpenSettingButton {
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
    style: WXButtonStyle;
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
declare interface AuthSetting {
    /**
     * 是否授权用户信息，对应接口 wx.getUserInfo
     */
    "scope.userInfo": boolean;
    /**
     * 是否授权地理位置，对应接口 wx.getLocation
     */
    "scope.userLocation": boolean;
    /**
     * 是否授权微信运动步数，对应接口 wx.getWeRunData
     */
    "scope.werun": boolean;
    /**
     * 是否授权保存到相册，对应接口 wx.saveImageToPhotosAlbum
     */
    "scope.writePhotosAlbum": boolean;
}

/**
 * 订阅消息设置 
 */
declare interface SubscriptionsSetting {
    /**
     * 订阅消息总开关
     */
    mainSwitch: boolean;
    /**
     * 每一项订阅消息的订阅状态
     */
    itemSettings: Object;
}

/**
 * 游戏圈按钮
 */
declare interface GameClubButton {
    /**
     * 游戏圈按钮的图标，仅当 type 参数为 image 时有效
     */
    icon: string;
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
    style: WXButtonStyle;
    /**
     * 销毁游戏圈按钮 
     */
    destroy();
    /**
     * 隐藏游戏圈按钮 
     */
    hide();
    /**
     * 取消监听游戏圈按钮的点击事件 
     */
    offTap(callback: Function);
    /**
     * 监听游戏圈按钮的点击事件 
     */
    onTap(callback: Function);
    /**
     * 显示游戏圈按钮 
     */
    show();
}

/**
 * 外围设备的服务端
 */
declare interface BLEPeripheralServer {
    /**
     * 往指定特征值写入数据，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅 
     */
    writeCharacteristicValue(obj: { serviceId: string, characteristicId: string, value: ArrayBuffer, needNotify: boolean, callbackId?: number });
    /**
     * 停止广播 
     */
    stopAdvertising(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 开始广播本地创建的外围设备 
     */
    startAdvertising(obj: { advertiseRequest: { connectable?: boolean, deviceName?: string, serviceUuids?: Array<string>, manufacturerData?: Array<{ manufacturerId: string, manufacturerSpecificData?: ArrayBuffer }> }, powerLevel?: string });
    /**
     * 移除服务 
     */
    removeService(obj: { serviceId: string, success?: Function, fail?: Function, complete?: Function });
    /**
     * 监听已连接的设备请求写当前外围设备的特征值事件。
     * 收到该消息后需要立刻调用 writeCharacteristicValue 写回数据，否则主机不会收到响应 
     */
    onCharacteristicWriteRequest(callback: (res: { serviceId: string, characteristicId: string, callbackId: number, value: ArrayBuffer }) => void);
    /**
     * 监听已连接的设备请求读当前外围设备的特征值事件。
     * 收到该消息后需要立刻调用 writeCharacteristicValue 写回数据，否则主机不会收到响应
     */
    onCharacteristicReadRequest(callback: (res: { serviceId: string, characteristicId: string, callbackId: number }) => void);
    /**
     * 取消监听已连接的设备请求写当前外围设备的特征值事件
     */
    offCharacteristicWriteRequest(callback: Function);
    /**
     * 取消监听已连接的设备请求读当前外围设备的特征值事件
     */
    offCharacteristicReadRequest(callback: Function);
    /**
     * 添加服务
     */
    addService(obj: _AddServiceObj);
}

/**
 * IBeaconInfo
 */
declare interface IBeaconInfo {
    /**
     * iBeacon 设备广播的 uuid
     */
    uuid: string;
    /**
     * iBeacon 设备的主 id 
     */
    major: string;
    /**
     * iBeacon 设备的次 id 
     */
    minor: string;
    /**
     * 表示设备距离的枚举值 
     */
    proximity: number;
    /**
     * iBeacon 设备的距离 
     */
    accuracy: number;
    /**
     * 表示设备的信号强度 
     */
    rssi: number;
}

/**
 * Worker 对象
 */
declare interface WXWorker {
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
 * 游戏服务管理器
 */
declare interface GameServerManager {
    /**
     * 在房间内广播
     */
    broadcastInRoom(obj: {
        msg: string, toPosNumList: Array<number>, success?: Function, fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 玩家换座位
     */
    changeSeat(obj: { posNum: number, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 创建游戏房间
     */
    createRoom(obj: {
        maxMemberNum: number, startPercent?: number, needUserInfo?: boolean, gameLastTime?: number,
        roomExtInfo?: string, memberExtInfo?: string, needGameSeed?: boolean,
        success?: (res: { data: { accessInfo: string, clientId: number } }) => void, fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 结束帧同步
     */
    endGame(obj: { success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 结束游戏状态同步服务
     */
    endStateService(obj: { success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 获取所有好友的在线状态及信息（该接口需要在开放数据域使用）
     * @version 2.9.4
     */
    getFriendsStateData(obj: {
        success?: (res: {
            list: Array<{
                userState: string, sysState: number, openid: string,
                nickName: string, avatarUrl: string, gender: number
            }>
        }) => void, fail?: Function, complete?: Function
    });
    /**
     * 获取最近参与房间的 accessInfo
     */
    getLastRoomInfo(obj: {
        success?: (res: { data: _LastRoomInfoObj }) => void, fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 补帧，补帧区间为 [beginFrameId, endFrameId)，即左闭右合
     */
    getLostFrames(obj: {
        beginFrameId: number, endFrameId: number,
        success?: (res: { data: { frameList: Array<Frame> } }) => void, fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 获取房间详情
     */
    getRoomInfo(obj: {
        success?: (res: { data: { roomInfo: _RoomInfoObj } }) => void, fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 邀请好友，该好友的系统状态必须为在线（该接口需要在开放数据域使用）
     * @version 2.9.4
     */
    inviteFriend(obj: { openId: string, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 加入游戏房间
     */
    joinRoom(obj: {
        accessInfo: string, memberExtInfo?: string,
        success?: (res: { data: { myPos: number, clientId: number } }) => void, fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 把一名玩家踢出房间（仅房主有权限）
     */
    kickoutMember(obj: { kickoutPos: number, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 登录游戏服务
     */
    login(): Promise<any>;
    /**
     * 登出游戏服务
     */
    logout(): Promise<any>;
    /**
     * 普通成员退出房间
     */
    memberLeaveRoom(obj: { accessInfo: string, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 取消监听自己被踢出当前房间
     */
    offBeKickedOut(callback: Function);
    /**
     * 取消监听收到同个房间内的广播消息
     */
    offBroadcast(callback: Function);
    /**
     * 取消监听断开连接，收到此事件
     */
    offDisconnect(callback: Function);
    /**
     * 取消监听帧同步游戏结束
     */
    offGameEnd(callback: Function);
    /**
     * 取消监听帧同步游戏开始
     */
    offGameStart(callback: Function);
    /**
     * 取消监听接收邀请，当用户确认邀请之后会收到此事件
     * @version 2.9.4
     */
    offInvite(callback: Function);
    /**
     * 取消监听帧同步出错
     * @version 2.11.2
     */
    offLockStepError(callback: Function);
    /**
     * 取消监听用户登出游戏服务事件
     */
    offLogout(callback: Function);
    /**
     * 取消监听房间信息更新
     */
    offRoomInfoChange(callback: Function);
    /**
     * 取消监听好友在线状态变更（该接口需要在开放数据域使用）
     * @version 2.9.4
     */
    offStateUpdate(callback: Function);
    /**
     * 取消监听收到同个房间的帧同步消息
     */
    offSyncFrame(callback: Function);
    /**
     * 监听自己被踢出当前房间
     */
    onBeKickedOut(callback: (res: { res: Object }) => void);
    /**
     * 监听收到同个房间内的广播消息
     */
    onBroadcast(callback: (res: { msg: string }) => void);
    /**
     * 监听断开连接，收到此事件后，需要调用 GameServerManager.reconnect 进行重连
     */
    onDisconnect(callback: (res: { res: { type: string } }) => void);
    /**
     * 监听帧同步游戏结束
     */
    onGameEnd(callback: (res: { gameAccessInfo: string }) => void);
    /**
     * 监听帧同步游戏开始
     */
    onGameStart(callback: Function);
    /**
     * 监听接收邀请，当用户确认邀请之后会收到此事件
     * @version 2.9.4
     */
    onInvite(callback: (res: { res: Object, openId: string, data: string }) => void);
    /**
     * 监听帧同步出错
     * @version 2.11.2
     */
    onLockStepError(callback: (res: { errCode: number, errMsg: string }) => void);
    /**
     * 监听用户登出游戏服务事件，可能是主动登出也可能是其他原因被动登出
     */
    onLogout(callback: Function);
    /**
     * 监听房间信息更新
     */
    onRoomInfoChange(callback: (res: { res: _RoomInfoObj }) => void);
    /**
     * 监听好友在线状态变更（该接口需要在开放数据域使用）
     * @version 2.9.4
     */
    onStateUpdate(callback: (res: { res: { userState: string, openId: string, sysState: number } }) => void);
    /**
     * 监听收到同个房间的帧同步消息
     */
    onSyncFrame(callback: (res: { frameId: number, actionList: Array<string> | Array<ArrayBuffer> }) => void);
    /**
     * 房主退出房间
     */
    ownerLeaveRoom(obj: {
        accessInfo: string, assignOwnerToPosNum?: boolean, assignToMinPosNum?: boolean,
        success?: Function, fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 重连游戏服务
     */
    reconnect(obj: {
        accessInfo: string, success?: (res: { data: { maxFrameId: Array<Frame> } }) => void,
        fail?: Function, complete?: Function
    }): Promise<any>;
    /**
     * 重启游戏并进入"组队中"的状态
     */
    restart(obj: { success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 设置邀请好友附带的数据
     * @version 2.9.4
     */
    setInviteData(data: string): boolean;
    /**
     * 更新玩家状态信息
     * @version 2.9.4
     */
    setState(obj: { userState: string, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 启动帧同步
     */
    startGame(obj: { success?: Function, fail?: Function, complete?: Function });
    /**
     * 开启状态管理服务，只有开启状态管理服务，才能获取在线好友列表以及接收好友邀请
     * @version 2.9.4
     */
    startStateService(obj: { userState: string, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 更新玩家准备信息
     */
    updateReadyStatus(obj: { accessInfo: string, isReady: boolean, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
    /**
     * 上传游戏帧
     */
    uploadFrame(obj: { actionList: Array<string> | Array<ArrayBuffer>, success?: Function, fail?: Function, complete?: Function }): Promise<any>;
}

/**
 * 
 */
declare interface Frame {

}

/**
 * 游戏画面录制对象
 */
declare interface GameRecorder {
    /**
     * 放弃录制游戏画面。此时已经录制的内容会被丢弃
     */
    abort(): Promise<any>;
    /**
     * 获取是否支持调节录制视频的播放速率
     * @version 2.10.0
     */
    isAtempoSupported(): boolean;
    /**
     * 获取是否支持录制游戏画面
     */
    isFrameSupported(): boolean;
    /**
     * 获取是否在录制游戏画面的同时支持录制游戏音频的信息
     */
    isSoundSupported(): boolean;
    /**
     * 获取是否支持调节录制视频的音量
     * @version 2.10.0
     */
    isVolumeSupported(): boolean;
    /**
     * 取消监听录制事件
     */
    off(event: string, callback: Function);
    /**
     * 注册监听录制事件的回调函数
     */
    on(event: string, callback: (res: Object) => void);
    /**
     * 暂停录制游戏画面
     */
    pause(): Promise<any>;
    /**
     * 恢复录制游戏画面
     */
    resume(): Promise<any>;
    /**
     * 开始录制游戏画面
     */
    start(obj: { fps?: number, duration?: number, bitrate?: number, gop?: number, hookBgm?: boolean });
    /**
     * 结束录制游戏画面。结束录制后可以发起分享
     */
    stop(): Promise<any>;
}

/**
 * 游戏对局回放分享按钮。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享
 */
declare interface GameRecorderShareButton {
    style: _GameRecorderShareButtonObj;
    icon: string;
    image: string;
    text: string;
    share: _GameRecorderShareObj;
    /**
     * 隐藏游戏对局回放分享按钮
     */
    hide();
    /**
     * 取消监听游戏对局回放分享按钮的点击事件
     */
    offTap(callback: Function);
    /**
     * 监听游戏对局回放分享按钮的点击事件。只有当分享由于非用户取消的原因失败时，该事件的回调函数才会执行
     */
    onTap(callback: Function);
    /**
     * 显示游戏对局回放分享按钮
     */
    show();
}

/**
 * 小游戏推荐弹窗组件
 */
declare interface GamePortal {
    /**
     * 销毁小游戏推荐弹窗组件，组件销毁后，组件的方法和事件都将失效
     */
    destroy(): Promise<any>;
    /**
     * 小游戏推荐弹窗组件加载数据接口
     */
    load(): Promise<any>;
    /**
     * 取消监听小游戏推荐弹窗组件的关闭事件
     */
    offClose(callback: Function);
    /**
     * 取消监听小游戏推荐弹窗组件加载错误事件
     */
    offError(callback: Function);
    /**
     * 取消监听小游戏推荐弹窗组件的数据加载成功事件
     */
    offLoad(callback: Function);
    /**
     * 监听小游戏推荐弹窗组件的关闭事件
     */
    onClose(callback: Function);
    /**
     * 监听小游戏推荐弹窗组件加载错误事件
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 监听小游戏推荐弹窗组件的数据加载成功事件
     */
    onLoad(callback: Function);
    /**
     * 显示小游戏推荐弹窗组件
     */
    show(): Promise<any>;
}

/**
 * 小游戏推荐icon组件
 */
declare interface GameIcon {
    isDestroyed: boolean;
    icons: Array<any>;
    iconItem: _GameIconItemStyleObj;
    /**
     * 销毁小游戏推荐icon组件，组件销毁后所有方法和事件都将失效
     */
    destroy(): Promise<any>;
    /**
     * 隐藏小游戏推荐icon组件
     */
    hide(): Promise<any>;
    /**
     * 小游戏推荐icon组件加载数据接口
     */
    load(): Promise<any>;
    /**
     * 取消监听小游戏推荐icon组件位置或者尺寸改变事件
     */
    offResize(callback: Function);
    /**
     * 取消监听小游戏推荐icon组件加载错误事件
     */
    offError(callback: Function);
    /**
     * 取消监听小游戏推荐icon组件加载成功事件
     */
    offLoad(callback: Function);
    /**
     * 监听小游戏推荐icon组件位置或者尺寸改变事件
     */
    onResize(callback: Function);
    /**
     * 监听小游戏推荐icon组件加载错误事件
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 监听小游戏推荐icon组件加载成功事件
     */
    onLoad(callback: Function);
    /**
     * 显示小游戏推荐icon组件
     */
    show(): Promise<any>;
}

/**
 * 小游戏推荐banner组件
 */
declare interface GameBanner {
    isDestroyed: boolean;
    style: { left: number; top: number };
    /**
     * 销毁小游戏推荐banner组件，组件销毁后所有方法和事件都将失效
     */
    destroy(): Promise<any>;
    /**
     * 隐藏小游戏推荐banner组件
     */
    hide(): Promise<any>;
    /**
     * 取消监听小游戏推荐banner组件位置或者尺寸改变事件
     */
    offResize(callback: Function);
    /**
     * 取消监听小游戏推荐banner组件加载错误事件
     */
    offError(callback: Function);
    /**
     * 取消监听小游戏推荐banner组件加载成功事件
     */
    offLoad(callback: Function);
    /**
     * 监听小游戏推荐banner组件位置或者尺寸改变事件
     */
    onResize(callback: Function);
    /**
     * 监听小游戏推荐banner组件加载错误事件
     */
    onError(callback: (res: { errMsg: string, errCode: number }) => void);
    /**
     * 监听小游戏推荐banner组件加载成功事件
     */
    onLoad(callback: Function);
    /**
     * 显示小游戏推荐banner组件
     */
    show(): Promise<any>;
}

interface _RequestObj {
    /** 
     * 开发者服务器接口地址
     */
    url: string;
    /** 
     * 请求的参数
     */
    data?: any;
    /** 
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: Object;
    /** 
     * 超时时间，单位为毫秒
     * @version 2.10.0
     */
    timeout?: number;
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
     * @version 1.7.0
     * @default "text"
     */
    responseType?: string;
    /** 
     * 开启 http2
     * @version 2.10.4
     * @default false
     */
    enableHttp2?: boolean;
    /** 
     * 开启 quic
     * @version 2.10.4
     * @default false
     */
    enableQuic?: boolean;
    /** 
     * 开启 cache
     * @version 2.10.4
     * @default false
     */
    enableCache?: boolean;
    success?: (res: { data: any, statusCode: number, header: Object, cookies: Array<string>, profile: Object }) => void;
    fail?: Function;
    complete?: Function;
}

interface _DownloadObj {
    /** 
     * 下载资源的 url
     */
    url: string;
    /** 
     * 设置请求的 header，header 中不能设置 Referer
     */
    header?: Object;
    /** 
     * 超时时间，单位为毫秒
     * @version 2.10.0
     */
    timeout?: number;
    /** 
     * 指定文件下载后存储的路径 (本地路径)
     * @version 1.8.0
     */
    filePath?: string;
    success?: (res: { tempFilePath: string, filePath: string, statusCode: number, profile: Object }) => void;
    fail?: Function;
    complete?: Function;
}

interface _UploadObj {
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
    /** 
     * 超时时间，单位为毫秒
     * @version 2.10.0
     */
    timeout?: number;
    success?: (res: { data: string, statusCode: number }) => void;
    fail?: Function;
    complete?: Function;
}

interface _SocketObj {
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
     * @version 1.4.0
     */
    protocols?: Array<string>;
    /** 
     * 建立 TCP 连接的时候的 TCP_NODELAY 设置
     * @version 2.4.0
     * @default false
     */
    tcpNoDelay?: boolean;
    /** 
     * 是否开启压缩扩展
     * @version 2.8.0
     * @default false
     */
    perMessageDeflate?: boolean;
    /** 
     * 超时时间，单位为毫秒
     * @version 2.10.0
     */
    timeout?: number;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _UpdateShareMenuObj {
    /** 
     * 是否使用带 shareTicket 的转发
     * @default false
     */
    withShareTicket?: boolean;
    /** 
     * 是否是动态消息
     * @version 2.4.0
     * @default false
     */
    isUpdatableMessage?: boolean;
    /** 
     * 动态消息的 activityId。通过 updatableMessage.createActivityId 接口获取
     * @version 2.4.0
     */
    activityId?: string;
    /** 
     * 群待办消息的id，通过toDoActivityId可以把多个群待办消息聚合为同一个。通过 updatableMessage.createActivityId 接口获取
     * @version 2.1.0
     */
    toDoActivityId?: string;
    /** 
     * 动态消息的模板信息
     * @version 2.4.0
     */
    templateInfo?: { parameterList: Array<{ name: string, value: string }> };
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _GetShareInfoObj {
    /** 
     * shareTicket
     */
    shareTicket: string;
    /** 
     * 超时时间，单位 ms
     * @version 1.9.90
     */
    timeout?: number;
    success?: (res: { errMsg: string, encryptedData: string, iv: string, cloudID: string }) => void;
    fail?: Function;
    complete?: Function;
}

interface _MidasPaymentObj {
    /**
     * 支付的类型，不同的支付类型有各自额外要传的附加参数。
     */
    mode: string;
    /**
     * 环境配置
     * @default 0
     */
    env?: number;
    /**
     * 在米大师侧申请的应用 id
     */
    offerId: string;
    /**
     * 币种
     */
    currencyType: string;
    /**
     * 申请接入时的平台，platform 与应用id有关
     */
    platform?: string;
    /**
     * 购买数量。mode=game 时必填
     */
    buyQuantity?: number;
    /**
     * 分区 ID
     * @default "1"
     */
    zoneId?: string;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _ChooseImageObj {
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

interface _StartRecordObj {
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
     * 指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源
     * @version 2.1.0
     * @default "auto"
     */
    audioSource?: string;
}

interface _CreateVideoObj {
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
    poster?: string;
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
     * 视频是否遵循系统静音开关设置（仅iOS）
     * @version 2.4.0	
     * @default false
     */
    obeyMuteSwitch?: boolean;
    /**
     * 是否启用手势控制播放进度	
     * @default true
     */
    enableProgressGesture?: boolean;
    /**
     * 是否开启双击播放的手势	
     * @default false
     */
    enablePlayGesture?: boolean;
    /**
     * 是否显示视频中央的播放按钮
     * @default true
     */
    showCenterPlayBtn?: boolean;
    /**
     * 视频是否显示在游戏画布之下（配合 Canvas.getContext('webgl', {alpha: true}) 使主屏canvas实现透明效果）
     * @version 2.11.0
     * @default false
     */
    underGameView?: boolean;
}

interface _CreateCameraObj {
    /**
     * 相机的左上角横坐标
     * @default 0
     */
    x?: number;
    /**
     * 相机的左上角纵坐标
     * @default 0
     */
    y?: number;
    /**
     * 相机的宽度
     * @default 300
     */
    width?: number;
    /**
     * 相机的高度
     * @default 150
     */
    height?: number;
    /**
     * 摄像头朝向，值为 front, back
     * @default "back"
     */
    devicePosition?: string;
    /**
     * 闪光灯，值为 auto, on, off
     * @default "auto"
     */
    flash?: string;
    /**
     * 帧数据图像尺寸，值为 small, medium, large
     * @default "small"
     */
    size?: string;
    success?: Function;
    fail?: Function;
    complete?: Function;
}

interface _JoinVoIPChatObj {
    /**
     * 签名，用于验证小游戏的身份
     */
    signature: string;
    /**
     * 验证所需的随机字符串
     */
    nonceStr: string;
    /**
     * 验证所需的时间戳
     */
    timeStamp: number;
    /**
     * 小游戏内此房间/群聊的 ID。同一时刻传入相同 groupId 的用户会进入到同个实时语音房间
     */
    groupId: string;
    /**
     * 静音设置
     */
    muteConfig?: { muteMicrophone: boolean, muteEarphone: boolean };
    /**
     * 语音通话是否免提
     * @version 2.10.4
     * @default true
     */
    handsFree?: boolean;
    success?: (res: { openIdList: Array<string>, errCode: number, errMsg: string }) => void;
    fail?: Function;
    complete?: Function;
}

interface _GetLocationObj {
    /**
     * wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
     * @default "wgs84"
     */
    type?: string;
    /**
     * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
     * @default false
     */
    altitude?: boolean;
    /**
     * 开启高精度定位
     * @version 2.9.0
     * @default false
     */
    isHighAccuracy?: boolean;
    /**
     * 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果
     * @version 2.9.0
     */
    highAccuracyExpireTime?: number;
    success?: (res: {
        latitude: number, longitude: number, speed: number, accuracy: number, altitude: number,
        verticalAccuracy: number, horizontalAccuracy: number
    }) => void;
    fail?: Function;
    complete?: Function;
}

interface _GetUserInfoObj {
    /**
     * 是否带上登录态信息。
     * 当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；
     * 当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
     */
    withCredentials?: boolean;
    /**
     * 显示用户信息的语言
     * @default "en"
     */
    lang?: string;
    success?: (res: { userInfo: WXUserInfo, rawData: string, signature: string, encryptedData: string, iv: string, cloudID: string }) => void;
    fail?: Function;
    complete?: Function;
}

interface _UserInfoButtonObj {
    /**
     * 是否带上登录态信息。
     * 当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；
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
    style: WXButtonStyle;
    /**
     * 描述用户信息的语言
     * @default "en"
     */
    lang?: string;
}

interface _ModifyFriendInteractiveStorageObj {
    /**
     * 需要修改的数据的 key，目前可以为 '1' - '50'
     */
    key: string;
    /**
     * 需要修改的数值，目前只能为 1
     */
    opNum: number;
    /**
     * 修改类型
     */
    operation: string;
    /**
     * 目标好友的 openId
     */
    toUser?: string;
    /**
     * 分享标题，如果设置了这个值，则在交互成功后自动询问用户是否分享给好友（需要配置模板规则）
     * @version 2.9.0
     */
    title?: string;
    /**
     * 分享图片地址
     * @version 2.9.0
     */
    imageUrl?: string;
    /**
     * 分享图片 ID
     * @version 2.9.0
     */
    imageUrlId?: string;
    /**
     * 是否静默修改（不弹框）
     * @default false
     */
    quiet?: boolean;
    success?: Function;
    fail?: (res: { errMsg: string, errCode: number }) => void;
    complete?: Function;
}

interface _AddServiceObj {
    /**
     * 描述service的Object
     */
    service: {
        uuid: string;
        characteristics: Array<{
            uuid: string;
            properties?: {
                write?: boolean;
                read?: boolean;
                notify?: boolean;
                indicate?: boolean;
            };
            permission?: {
                readable?: boolean;
                writeable?: boolean;
                readEncryptionRequired?: boolean;
                writeEncryptionRequired?: boolean;
            };
            value?: ArrayBuffer;
            descriptors?: Array<{
                uuid: string;
                permission?: {
                    write?: boolean;
                    read?: boolean;
                };
                value: ArrayBuffer;
            }>;
        }>;
    };
    success?: Function;
    fail?: (res: { errMsg: string, errCode: number }) => void;
    complete?: Function;
}

interface _LastRoomInfoObj {
    /** 最近参与房间的 accessInfo */
    accessInfo: string;
    /** 最近参与房间的详细信息 */
    roomInfo: _RoomInfoObj;
}

interface _RoomInfoObj {
    /** 小游戏 appId */
    appId: string;
    /** 房间 ID */
    roomIdStr: number;
    /** 房间状态 */
    roomState: number;
    /** 房间最多可容纳人数 */
    maxMemberNum: number;
    /** 创建时间 */
    createTimestamp: number;
    /** 最近更新时间 */
    updateTimestamp: number;
    /** 游戏下发帧的时间间隔，单位 ms */
    gameTick: number;
    /** 需要满足百分比的玩家都发送了开始指令才能启动游戏。有效范围 0~100 */
    startPercent: number;
    /** 游戏自定义的关于房间的扩展信息 */
    roomExtInfo: string;
    /** 游戏对局时长，单位 s */
    gameLastTime: number;
    /** UDP可靠性策略， 0：全冗余 N：固定冗余N帧 */
    udpReliabilityStrategy: number;
    /** 成员列表 */
    memberList: Array<{
        /** 玩家准备状态 */
        isReady: boolean;
        /** 角色 */
        role: number;
        /** 座位号，从 0 开始 */
        posNum: number;
        /** 头像 URL（房间 needUserInfo 为 true 时才会有） */
        headimg: string;
        /** 用户昵称（房间 needUserInfo 为 true 时才会有） */
        nickname: string;
        /** 用户在房间内的唯一标识 */
        clientId: number;
        /** 是否已做好游戏开始准备（调用过 startGame） */
        enableToStart: boolean;
        /** 游戏自定义的关于成员的扩展信息 */
        memberExtInfo: string;
    }>;
    /** 游戏随机种子 */
    seed: string;
}

interface _CreateGameRecorderShareButtonObj {
    /** 按钮的样式 */
    style: _GameRecorderShareButtonObj;
    /** 图标的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标 */
    icon?: string;
    /** 按钮的背景图片的 url。支持 http/https 开头的网络资源和 wxfile:// 开头的本地资源。如果不设置则使用默认图标 */
    image?: string;
    /** 按钮的文本 */
    text?: string;
    /** 对局回放的分享参数 */
    share: _GameRecorderShareObj;
}

interface _GameRecorderShareButtonObj {
    left?: number;
    top?: number;
    /** 按钮的高度，最小 40 逻辑像素 */
    height?: number;
    /** 图标和文本之间的距离，最小 8 逻辑像素 */
    iconMarginRight?: number;
    /** 文本的字体大小。最小 17，最大 22 */
    fontSize?: number;
    color?: string;
    /** 按钮的左内边距，最小 16 逻辑像素 */
    paddingLeft?: number;
    /** 按钮的右内边距，最小 16 逻辑像素 */
    paddingRight?: number;
}

interface _GameRecorderShareObj {
    /** 分享的对局回放打开后跳转小游戏的 query */
    query: string;
    title?: {
        template?: string;
        data?: Object;
    };
    /** 对局回放的按钮 */
    button?: {
        template?: string;
    };
    /** 对局回放背景音乐的地址。必须是一个代码包文件路径或者 wxfile:// 文件路径，不支持 http/https 开头的 url */
    bgm: string;
    /** 对局回放的剪辑区间，是一个二维数组，单位 ms（毫秒） */
    timeRange: Array<Array<number>>;
    volume?: number;
    /** 对局回放的播放速率 */
    atempo?: number;
    /** 如果原始视频文件中有音频，是否与新传入的bgm混音，默认为false，表示不混音，只保留一个音轨，值为true时表示原始音频与传入的bgm混音 */
    audioMix?: boolean;
}

interface _GameIconItemStyleObj {
    appNameHidden: boolean;
    color: string;
    size: number;
    borderWidth: number;
    borderColor: string;
    left: number;
    top: number;
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