/**
 * bLib create success !!!
 * author com.ecy.syy
 * time 2020-4-16 10:39:40
 */
/**
 * 内容常量
 */
declare class BaseConst {
    /**
     * app 信息
     *
     * miniZipUrl 小游戏下载zip地址
     * miniZipVersion 小游戏zip的版本号
     * appinfo app简介 版本号等
     * serverConf (nts 内网测试服)(wts 外网测试服) (wzs 外网正式服)
     * */
    static infos: BaseInfosData;
}
/**
 * 基础节点，
 */
declare abstract class BaseContent {
    /**
     *
     * @param data
     * width 宽
     * height高
     * exportSceneToJson 兼容微信不支持加载scene后缀场景，设置为true，则会把scene加载替换为json
     */
    constructor(data: {
        width: number;
        height: number;
        exportSceneToJson: boolean;
    });
    /**
     * 初始debug
     *
     * @param url
     */
    protected initDebug(url?: string): Promise<void>;
    /**
     * 初始化游戏
     * @param data
     * width 宽
     * height高
     * exportSceneToJson 兼容微信不支持加载scene后缀场景，设置为true，则会把scene加载替换为json
     */
    private initGame;
    /**
     * 初始化各个显示层级
     */
    private initLayer;
    /**
     * 初始化 配置工具 后期会去enableFileConfig
     *
     * @param infosUrl infos.json资源地址
     */
    protected initInfos(infosUrl: string): void;
    /**
     * 启用文件配置
     *
     * 将去加载 fileconfig.json 并启用
     */
    protected abstract enableFileConfig(): any;
    /**
     *  启用文件配置
     *
     * 将在完成后加载资源loadRes
     * @param resUrl 资源地址前缀
     */
    protected loadFileConfig(resUrl: string): void;
    /**
     * 加载资源
     */
    protected abstract loadRes(): any;
}
/**
 * 一些固定的配置
 */
declare class BaseInfosData {
    /**
     * miniZipUrl 小游戏下载zip地址
     */
    miniZipUrl: string;
    /**
     * miniZipVersion 小游戏zip的版本号
     */
    miniZipVersion: string;
    /**
     * appinfo app简介 版本号等
     */
    appResInfo: string;
    /**
     * serverConf (nts 内网测试服)(wts 外网测试服) (wzs 外网正式服)
     */
    serverConf: "nts" | "wts" | "wzs";
    /**
     * 游戏是否开启
     */
    isOpen: boolean;
    /**
     * 游戏id
     */
    gameId: string;
    /**
     * 平台
     */
    platform: string;
    /**
     * 版本关键值
     */
    versionCode: string;
    /**
     * 校验值
     */
    token: string;
    /**
     * 游戏的其他配置根据游戏自定义内容
     *
     * 例如是否开启支付，使用某些功能的配置
     */
    gameInfo: any;
}
/**
 * 文本处理(模拟富文本)
 *
 */
declare class BaseLabel extends Laya.Box {
    constructor(data: Array<{
        text?: string;
        font?: string;
        align?: string;
        bgColor?: string;
        bold?: boolean;
        borderColor?: string;
        color?: string;
        fontSize?: number;
        italic?: boolean;
        leading?: string;
        stroke?: number;
        strokeColor?: string;
        underline?: boolean;
        underlineColor?: string;
    }>);
    desHeight: number;
    private initView;
    private createLabel;
}
/**
 * 弹窗的动画进入类型
 */
declare class BasePopAnimationEnterType {
    /**
     * 缩放模式 由小到大
     */
    static SCALE_MODE: string;
    /**
     * 缩放模式 由大到小 透明度由 0 到 1
     */
    static SCALE_MODE_BACK: string;
    /**
     * 缩放模式 由大到小 scale 0-1.5 => 1.5-1
     */
    static SCALE_MODE_BACK_MORE: string;
    /**
     * 正常模式
     */
    static NOMORL_MODE: string;
}
/**
 * 抽象 基础UI--使用皮肤下 模拟egret的皮肤模式
 */
declare abstract class BaseSceneUISkin extends Laya.Scene {
    /**
     * 切记注意是""
     */
    abstract className_key: string;
    /**界面数据 */
    viewData_: any;
    /**
     * 皮肤路径
     */
    private skin_;
    /**
     * 皮肤路径
     */
    /**
    * 皮肤路径
    */
    protected skin: any;
    /**
     * 加载并设置皮肤
     */
    private loadSkin;
    /**
     * 适配舞台，将此视图对象适配到舞台尺寸
     */
    protected adaptationStage(): void;
    constructor(data?: any);
    /**
     * 添加到父节点
     */
    onAddStage(): void;
    /**
     * 当从父节点移除时候
     */
    onRemoved(): void;
    /**
     * 初始化数据
     * data   界面数据
     */
    setData(data: any): void;
    /**
     * 初始化节点创建完成 使用皮肤配置时候调用
     */
    protected childrenCreated(): void;
    /**
     * 是否创建完成
     */
    protected isCreate: Boolean;
    /**
     * 销毁时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onDestroy(): void;
}
/**
 * 弹窗 抽象 基础UI--使用皮肤下 模拟egret的皮肤模式
 */
declare abstract class BaseSceneUISkinPopView extends BaseSceneUISkin {
    abstract className_key: string;
    /**
     * 默认的显示进入和消失时间
     *
     * 200ms
     */
    static defaultSshowEnterBackAniTime: number;
    /**
    * 背景的图片 例如蒙层
    */
    protected bg_img: Laya.Image;
    /**
     * 背景图片资源名
     */
    protected bg_img_res: string;
    /**
     * 中心组 参与界面的效果
     */
    protected grp_center: Laya.Box;
    /**
     * 进入类型动画
     */
    protected showEnterType: BasePopAnimationEnterType;
    /**
     * 退出类型动画--默认与进入动画对应
     */
    protected showBackType: BasePopAnimationEnterType;
    constructor(data?: any);
    /**
     * 初始化节点创建完成 使用皮肤配置时候调用
     */
    protected childrenCreated(): void;
    /**
     * 添加到父节点
     */
    onAddStage(): void;
    /**
     * 进入方式
     */
    protected showEnterAnimation(): void;
    /**
     * 退出方式
     */
    protected showOutAnimation(): void;
    /**
     * 移除自己
     */
    removeUs(): void;
    /**
     * 销毁时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onDestroy(): void;
}
/**
 * 提示效果
 */
declare class BaseTips extends Laya.Sprite {
    constructor();
    /**
     * 默认的tips的背景资源
     *
     * default skin =  "resource/assets/base/tips_mengban.png"
     */
    static bg_msg_skin: string;
    /**
     * 类键名
     */
    className_key: string;
    /**
     * 文本信息
     */
    private txt_msg;
    /**
     * 背景
     */
    private bg_msg;
    init(text: string, fontSize?: number): void;
    /**
     * 显示动画
     */
    showAnimation(): void;
    /**
     * 移除
     */
    removeSelf(): any;
    /**
     * 当销毁时候
     */
    onDestroy(): void;
}
/**
 * 抽象 基础UI--使用皮肤下 模拟egret的皮肤模式
 *
 * 自定义提示内容
 */
declare abstract class BaseTipsUISkin extends BaseSceneUISkin {
    /**
     * 初始化提示内容
     * @param text
     */
    abstract init(text: string): void;
    /**
     * 显示动画
     *
     * 默认向上移动淡出（弹出框）
     */
    protected showAnimation(): void;
    /**
     * 移除
     */
    removeSelf(): any;
}
/**
 * 位图字 工具
 */
declare class BitmapLabelUtils {
    constructor();
    /**
     * 设置文本显示
     */
    static setLabel(label: Laya.Sprite, text: string, prefix: string, gap: number, suffix?: string, textAlgin?: "center" | "left" | "right"): void;
}
/**
 * 自定义跟踪飞行组件
 *
 * 当到达目标附近回调方法 toTargetCall() 组件自动销毁
 */
declare class CustomFlyComponent extends Laya.Script {
    /**
     * 飞行速度
     */
    speed: number;
    /**
     * 飞行的目标
     */
    target: Laya.Sprite;
    /**
     * 绑定的节点
     */
    private content;
    constructor();
    onAwake(): void;
    onUpdate(): void;
    /**到达目标的回调对象 */
    callObj: any;
    /**回调函数 传入回调对象 */
    toTargetCall(obj: any): void;
}
/**
 * 带缩放效果 组件
 */
declare class CustomScaleComponent extends Laya.Script {
    scale_: number;
    defaultScale_: number;
    private content;
    constructor();
    onAwake(): void;
    _onAdded(): void;
    onEnable(): void;
    _onDisable(): void;
    private isInit;
    /**
     * 初始化设定
     */
    private init;
    /**
     * 当移除舞台时候
     */
    private onRemoved;
    /**
     * 添加事件
     */
    private addEvent;
    /**
     * 移除事件
     */
    private removeEvent;
    /**
     * 点下
     */
    protected mouseDown(): void;
    /**
     * 移开
     */
    private mouseOut;
    /**
     * 松开
     */
    private mouseUp;
    /**
     * 当销毁组件时候
     */
    onDestroy(): void;
}
/**
 * 百页窗口模式
 *
 * 目前默认 500 毫秒时间
 */
declare class HundredPagesWindowView extends Laya.Sprite {
    /**
     * 动画时间
     */
    protected animationTime: number;
    /**
     * 百页高度
     */
    protected rectH: number;
    constructor();
    /**计算的个数 */
    private len;
    /**
     * 初始化
     */
    private initView;
    /**
     * 开启
     * @param caller
     * @param method
     */
    open(caller?: any, method?: Function): void;
    /**
     * 关闭
     * @param caller
     * @param method
     */
    close(caller?: any, method?: Function): void;
}
/**
 * lodingView 的接口
 */
declare abstract class ILoadingView extends Laya.Node {
    /**
     * 加载中
     *
     * @param index
     */
    abstract progress(index: number, len: number): any;
    /**
     * 移除
     */
    abstract remove(): any;
}
/**
 * buffer页面loading管理工具
 */
declare class BufferLoadingManger {
    private static ins;
    static getInstance(): BufferLoadingManger;
    constructor();
    /**
     * 显示层
     */
    bufferGroup: Laya.Sprite;
    /**
     * 所有的buffer
     */
    buffers: any;
    /**
     * 注册某个buffer页面
     *
     * @param key
     * @param bufferLoading
     */
    registerOneBuffer(key: string, bufferLoading: Laya.Node): void;
    /**
     * 显示某个buffer页面
     *
     * 回调 buffer.onShow();
     * @param key defualt  BufferLoading
     */
    showBuffer(key?: string, info?: string): void;
    /**
     * 隐藏某个buffer页面
     *
     * 回调 buffer.onHidd();
     * @param key defualt  BufferLoading
     */
    hiddBuffer(key?: string): void;
    /**
     * 销毁某个buffer页面
     *
     * 回调 buffer.onDestroy();
     * @param key
     */
    destroyBuffer(key: string): void;
}
/**
 * 场景管理器
 */
declare class SceneManager {
    constructor();
    private static ins;
    static getInstance(): SceneManager;
    /**
     * 场景节点
     */
    sceneLayer: Laya.Node;
    /**
     * 场景遮挡节点
     */
    sceneMaskLayer: Laya.Node;
    /**
     * 当前界面的主场景
     */
    currentScene: BaseSceneUISkin;
    /**
     * 上一个场景
     */
    lastScene: BaseSceneUISkin;
    /**
     * 增加游戏场景
     */
    openGameScene(className: any, viewData?: any): void;
    /**
     * 获取一个场景实列
     *
     * @param name
     */
    getGameSceneByName(name: string): BaseSceneUISkin;
    /**
     * 打开一个场景
     *
     * @param scene
     */
    openSceneInstance(scene: Laya.Node): void;
    /**
     * 回收场景
     *
     * @param scene
     */
    private recoverBaseScene;
}
/**
 * 提示管理工具
 */
declare class TipsManager {
    constructor();
    private static ins;
    static getInstance(): TipsManager;
    /**
     * 显示默认提示的字体大小
     */
    showDefualtTipsFontSize: number;
    /**
     * 提示层
     */
    tipLayer: Laya.Node;
    /**
     * 显示一个提示
     *
     * @param text
     * @param isShowAnimation 是否显示动画
     */
    showDefaultTips(text: string, isShowAnimation?: boolean): void;
    /**
     * 显示一个自定义的提示
     *
     * @param class 自定义提示构造类名
     * @param text 提示内容
     *
     */
    showTips(className: any, text: string): void;
    /**
     * 显示一个提示
     *
     * @param data
     */
    showTipInstance(object: BaseTips): void;
    /**
     * 移除一个提示实列
     *
     * @param object
     */
    removeTips(object: BaseTips): void;
}
/**
 * 视图弹窗管理工具
 */
declare class ViewManager {
    private static ins;
    static getInstance(): ViewManager;
    /**
     * 弹窗节点
     */
    popLayer: Laya.Node;
    constructor();
    private _views;
    /**
     * 所有的唯一弹窗显示总体
     */
    readonly views: {};
    /**
     * 显示一个界面弹窗
     *
     * @param className 类名
     * @param data 数据源
     * @param only  是否唯一显示弹框
     */
    showView(className: any, data?: any, only?: boolean): BaseSceneUISkinPopView;
    /**
     * 移除一个弹窗
     *
     * @param instance
     */
    removeViewInstance(instance: any): void;
    /**
     * 检测弹窗是否显示
     *
     * @param name
     */
    popViewIsPop(name: string): boolean;
    /**
     * 显示弹窗实例
     */
    showViewInstance(pop: any): void;
    /**
     * 销毁所有显示弹窗
     */
    destoryAllPopViews(): void;
    /**
     * 销毁一个弹窗
     *
     * @param panel 弹窗对象
     */
    destroyPopView(panel: BaseSceneUISkinPopView): void;
    /**
     * 移除所有显示弹窗
     */
    closeAllPopViews(): void;
    /**
     * 是否已经存在View
     *
     * @param {any} viewKey 唯一标识
     * @return {boolean}
     */
    isExists(viewKey: any): boolean;
}
/**
 * http 管理网络工具
 */
declare class HttpMgr {
    private static instance_;
    static getInstance(): HttpMgr;
    constructor();
    /**
     * 是否打印日志
     */
    printLog: boolean;
    /**
     * 默认超时限制
     */
    defaultTimeOut: number;
    /**
     * 发送消息 JSON 字符串通讯
     *
     * @param url 请求链接 url
     * @param data 请求数据 默认空
     * @param secces 成功返回 回调
     * @param fail 失败返回 回调
     * @param type 请求类型 默认post
     * @param responseType 返回值类型 默认 text
     */
    sendHttp(url: string, data?: any, secces?: Function, fail?: Function, type?: "post" | "get", responseType?: string): void;
}
/**
 * websocket管理工具
 */
declare class WebSocketMgr {
    private static instance_;
    static getInstance(): WebSocketMgr;
    constructor();
    /**通讯实列*/
    socket_: Laya.Socket;
    /**通讯地址 */
    url_: string;
    /**
     * 链接间隔时间
     * 默认 2000毫秒
     */
    connetWaitTime: number;
    /**
     * 心跳间隔时间
     * 默认 10000毫秒
     */
    heartbeatWaitTime: number;
    /**
     * 心跳数据格式
     */
    heartbeatData: string;
    /**
     * 断线链接次数
     * 默认 5次
     */
    connetTime: number;
    /**当前链接次数 */
    private currentConnectTime;
    /**当开启时候 */
    onOpen: Function;
    /**当关闭时候 */
    onClose: Function;
    /**当消息来时候 */
    onMessage: Function;
    /**
     * 初始化
     */
    init(): void;
    /**
     * 增加监听
     */
    private addEvent;
    /**
     * 移除监听
     */
    private removeEvent;
    /**
     * 链接
     */
    connect(): void;
    /**
     * 通讯打开
     */
    private socketOpen;
    /**是否存活 */
    private isLive;
    /**
     * 开始心跳
     */
    private starHeartbeat;
    /**
     * 关闭通讯
     */
    close(): void;
    /**
     * 停止心跳
     */
    private stopHeartbeat;
    /**
     * 开始重连
     */
    private startRefuseConnect;
    /**
     * 停止重连
     */
    private stopRefuseConnect;
    /**
     * 通讯关闭
     */
    private socketClose;
    /**
     * 通讯异常
     */
    private socketError;
    /**
     * 将utf8 bytearray 转字符串 unicode
     * @param utf8Bytes
     */
    private utf8ByteToUnicodeStr;
    /**
     * 当消息来时候
     * @param data
     */
    private socketMessage;
    /**
     * 发送消息
     * @param data
     */
    send(data: any): boolean;
}
/**
 * 适配 尺寸 工具
 */
declare class AdaptationUtil {
    /**
     * 适配某个物体在父节点
     *
     * 能全部放入显示 会有黑边
     *
     * @param obj 需要适配的对象
     * @param parent 适配对象父级
     * @param scaleFormat 适配比例 默认1
     */
    static adaptationObj(obj: Laya.Sprite, parent: Laya.Sprite, scaleFormat?: number): void;
    /**
     * 适配某个物体在父节点
     *
     * 能全部放入显示 不会有黑边 但是会有些看不见
     *
     * @param obj 需要适配的对象
     * @param parent 适配对象父级
     * @param scaleFormat 适配比例 默认1
     */
    static adaptationMaxObj(obj: Laya.Sprite, parent: Laya.Sprite, scaleFormat?: number): void;
}
/**
 * 播放工具
 */
declare class AnimatorUtls {
    /**
     * 3d 动画按照帧播放
     *
     * @param dis 增加进度值
     * @param animator 播放的播放器
     * @param playStates 播放状态
     */
    static playSTREF(dis: number, animator: Laya.Animator, playStates: Laya.AnimatorState): {
        curent: number;
        max: number;
    };
    /**
     * 强制刷新骨骼
     * 例如对骨骼做操作了后
     * @param ani_Ske
     */
    static refulshSKE(ani_Ske: Laya.Skeleton): void;
}
/**
 * 描述AStar中的节点
 */
declare class ANode {
    point: Point;
    father: ANode;
    g: number;
    h: number;
    constructor(point: Point, endPoint: Point, g?: number);
}
/**
 * 二维数组
 */
declare class Array2D {
    data: number[][];
    default_num: number;
    w: number;
    h: number;
    /**
     *
     * @param w 行
     * @param h 列
     * @param num 默认数值0
     */
    constructor(w: number, h: number, num?: number);
    /**
     * 打印
     */
    showArray2D(): void;
}
/**
 *  功能：
        创建AStar对象，进行寻路
    参数：
        map2d:Array2D类型的地图数组
        startPoint:Point类型的寻路起点
        endPoint:Point类型的寻路终点
        passTag:int类型的可行走标记（若地图数据!=passTag即为障碍）0为可行
 */
declare class AStar {
    map2d: Array2D;
    startPoint: Point;
    endPoint: Point;
    passTag: number;
    /**开启表 */
    openList: ANode[];
    /**关闭表 */
    closeList: ANode[];
    /**
     *
     * @param map2d Array2D类型的地图数组
     * @param startPoint Point类型的寻路起点
     * @param endPoint Point类型的寻路终点
     * @param passTag int类型的可行走标记（若地图数据!=passTag即为障碍）0为可行
     */
    constructor(map2d: Array2D, startPoint: Point, endPoint: Point, passTag?: number);
    /**
     * 获得openList中F值最小的节点
     */
    getMinNode(): ANode;
    /**判断point是否在关闭表中*/
    pointInCloseList(point: any): boolean;
    /**判断point是否在开启表中*/
    pointInOpenList(point: any): ANode;
    /**判断终点是否在关闭表中*/
    endPointInCloseList(): ANode;
    /**搜索节点周围的点*/
    searchNear(minF: ANode, offsetX: number, offsetY: number, isPassTag?: boolean): any;
    /**
     * 开始寻路
     */
    start(isPassTag?: boolean): Point[];
}
/**
 * A星算法工具类
 */
declare class AStarUtils {
    /**
     * 地图矩阵
     */
    map2d: Array2D;
    constructor();
    private static instance_;
    static getInstance(): AStarUtils;
    /**
     * 设置2d地图数据
     * r  行
     * c  列
     * ObsArr 障碍物数组
     */
    setMap2d(r: number, c: number, ObsArr: number[][]): void;
    showArray2D(): void;
    /**
      * 设置2d地图数据障碍物
      * ObsArr 障碍物数组
      */
    setMapObsArr(ObsArr: number[][]): void;
    removeMapObsArr(ObsArr: number[][]): void;
    /**
     * 清理地图2d数据
     */
    clearMap2d(): void;
    /**
     * 获取路径
     */
    getPath(startPoint: Point, endPoint: Point, isPassTag?: boolean): Point[];
    /**
     * 测试
     */
    static test(): void;
}
/**
 * 点
 */
declare class Point {
    /**
     * 列
     */
    c: number;
    /**
     * 行
     */
    r: number;
    constructor(c: number, r: number);
    eq(other: Point): boolean;
}
/**
 * 类工具
 */
declare class ClassUtils {
    /**
     * 获取类键值
     * @param className
     */
    static getClassKey(className: any, className_key?: string): string;
}
/**
 * 设备工具
 */
declare class DeviceUtil {
    /**
     * 适配场景中的背景图片
     *
     * @param bg 背景图片
     * @param sence 场景
     */
    static adaptationBgImg(bg: Laya.Image): void;
    /**
     * 获取最大缩放比例
     *
     * @param defaultSize 默认尺寸
     * @param size 变动尺寸
     */
    static getMaxScale(defaultSize: {
        w: number;
        h: number;
    }, size: {
        w: number;
        h: number;
    }): number;
    private static scale;
    /**
     * 获取缩放量
     * 支持 SCALE_SHOWALL  SCALE_FIXED_WIDTH SCALE_FIXED_HEIGHT
     *
     * @param defaultSize
     */
    static getScalePix(defaultSize?: {
        w: number;
        h: number;
    }): number;
    /**设计尺寸 */
    static defaultSize: {
        w: number;
        h: number;
    };
    private static pix;
    /**
     * 获取偏移量
     *
     * 支持 SCALE_SHOWALL  SCALE_FIXED_WIDTH SCALE_FIXED_HEIGHT
     */
    static getAutoPix(defaultSize?: {
        w: number;
        h: number;
    }): {
        x: number;
        y: number;
    };
    /**
     * 是否是iphone X
     * 目前主要用分辨率来判断
     */
    static getIsIphoneX(): boolean;
    /**
     * 震动 屏幕
     */
    static shockScreen(rota?: number, frame?: number): void;
    /**
     * 自动适配舞台
     *
     * pc 上 SCALE_SHOWALL
     * mobile 上 SCALE_FIXED_WIDTH
     *
     * 屏幕方向 none
     */
    static autoStageScaleMode(): void;
    /**
     * 是否在native中
     */
    static isNative(): boolean;
    /**
     * 是否在小游戏平台
     *
     * wx qq tt vivo oppo uc baidu
     */
    static isMiniGame(): boolean;
    /**
     * 是否在微信MiniGame中
     */
    static isWXMiniGame(): boolean;
    /**
     * 是否在QQMiniGame中
     */
    static isQQMiniGame(): boolean;
    /**
     * 是否在头条游戏
     */
    static isTTMiniGame(): boolean;
    /**
     * 是否在vivo游戏
     */
    static isVIVOMiniGame(): boolean;
    /**
     * 是否在oppo游戏
     */
    static isOPPOMiniGame(): boolean;
    /**
     * 是否在百度游戏
     */
    static isBAIDUMiniGame(): boolean;
    /**
     * 是否在魅族游戏
     */
    static isMZMiniGame(): boolean;
    /**
     * 是否在IOS设备中
     */
    static isIOS(): boolean;
    /**
     * 是否在Android设备中
     */
    static isAndroid(): boolean;
    /**
     * 是否在pc
     */
    static isOnPC(): boolean;
    /**
     * 是否在UC小游戏
     */
    static isUCMiniGame(): boolean;
    /**
     * 获取设备号
     */
    static getDeviceNo(): string;
}
/**
 * 特效工具
 *
 * 抖动
 * 向上移动淡出
 * 文本数字增减效果
 * 开始闪烁
 */
declare class EffectUtil {
    /**
     * 类似mac上图标上下抖动的效果
     *
     * @param {Sprite} obj 抖动对象
     * @param {number} initY 要抖动的对象的初始Y值，原始位置
     * @param {Function} callback 抖动动画完成回调函数
     * @param {any} thisObj 回调函数this对象
     * @param {any[]} args 回调函数args
     */
    static macIconShake(obj: Laya.Sprite, initY: number, callback?: Function, thisObj?: any, args?: any[]): void;
    /**
     * 向上移动淡出（弹出框）
     *
     * @param {Sprite} obj 淡出对象
     * @param {number} time 淡出时间
     * @param {Function} ease 淡出函数
     * @param {Function} method 淡出完成回调函数
     * @param {any} thisObj 回调函数this对象
     * @param {Array} arrData 回调传参
     */
    static flowOut(obj: any, time: number, ease: any, method: Function, delay: any, thisObj?: any, arrData?: any): void;
    /**
     * 向上移动一段后 淡出（弹出框）
     *
     * @param {Sprite} obj 淡出对象
     * @param {number} time 淡出时间 500ms 7/3
     * @param {Function} ease 淡出函数
     * @param {Function} method 淡出完成回调函数
     * @param {any} thisObj 回调函数this对象
     * @param {Array} arrData 回调传参
     */
    static flowMoveOut(obj: any, time?: number, ease?: any, method?: Function, delay?: number, thisObj?: any, arrData?: any[]): void;
    /**
     * 文本数字增减效果
     *
     * @param {number} startNum 开始数值
     * @param {number} endNum 渐变到的数值
     * @param {Function} callback 淡出完成回调函数
     * @param {any} thisObj 回调函数this对象
     */
    static flowNum(startNum: number, endNum: number, callback: Function, thisObj: any, completeCallBack: Function): void;
    /**
     * 开始闪烁
     *
     * @param {Sprite} obj
     * @param {number} alphaTime 闪烁频率
     */
    static startFlicker(obj: Laya.Sprite, alphaTime?: number): void;
    /**
     * 停止动画所有动画后容器位置初始化到原位，否则可能出现位置改变的bug
     *
     * @param {Sprite} obj
     * @param {number} xPos
     * @param {number} yPos
     */
    static stopEffect(obj: Laya.Sprite, xPos?: number, yPos?: number): void;
    /**
     * 缩放效果
     * @param spr
     * @param scale 1.3
     * @param time 1000ms
     * @param isLoop true
     */
    static showScaleFix(spr: Laya.Sprite, scale?: number, time?: number, isLoop?: boolean): void;
    /**
     * 摇晃效果
     *
     * @param spr 摇晃的对象
     * @param duc 幅度角度 默认10度
     * @param time 摇晃的整体时间 1：2：1 默认400ms
     * @param intervalTime null 间隔时间在此运行 -1不间隔时间继续循环 0或null 不循环 大于0表示间隔多时间继续
     * @param onceCall 单次结束回调
     */
    static showWobbleEff(spr: Laya.Sprite, duc?: number, time?: number, intervalTime?: number, onceCall?: Function): void;
    /**
     * 上下移动效果
     * @param spr
     * @param len
     * @param time 1000ms
     * @param isLoop true
     */
    static showUpDown(spr: Laya.Sprite, len: number, time?: number, isLoop?: boolean): void;
    /**
     * 先向上飞行一段距离在掉落并且会弹两下
     * @param spr
     * @param len 300 向上飞行的高度
     * @param durtion 500 默认的单次飞行时间向上或是向下
     * @param intervalTime null 间隔时间在此运行 -1不间隔时间继续循环 0或null 不循环 大于0表示间隔多时间继续
     * @param onceCall 单次结束回调
     */
    static toUpDownAni(spr: Laya.Sprite, len?: number, durtion?: number, intervalTime?: number, onceCall?: Function): void;
    /**
     * 模拟收缩向上飞行一段距离在掉落并且会弹两下
     * [切记 需要将锚点提前设置到中间下方点 配合使用]
     * @param spr
     * @param scale 0.5 收缩比例
     * @param len 300 向上飞行的高度
     * @param durtion 1000 [0.3,0.4,0.4] 收缩 上飞 下降比例 分总时间
     * @param intervalTime null 间隔时间在此运行 -1不间隔时间继续循环 0或null 不循环 大于0表示间隔多时间继续
     * @param onceCall 单次结束回调
     */
    static imitateUpDown(spr: Laya.Sprite, scale?: number, len?: number, durtion?: number, intervalTime?: number, onceCall?: Function): void;
}
/**
 * 自定义 事件管理 工具
 */
declare class EventMgr extends Laya.EventDispatcher {
    private static _instance;
    static getInstance(): EventMgr;
    constructor();
    /**
     * 添加监听
     *
     * @param eventType 事件类型
     * @param obj 监听对象
     * @param callFunc 监听函数
     */
    addEvent(eventType: string, obj: any, callFunc: Function): void;
    /**
     * 移除监听
     *
     * @param eventType 事件类型
     * @param obj 监听对象
     * @param callFunc 监听函数
     */
    removeEvent(eventType: string, obj: any, callFunc: Function): void;
    /**
     * 发送事件
     *
     * @param eventType 事件类型
     * @param args 传入参数
     */
    sendEvent(eventType: string, ...args: any[]): void;
}
declare class Md5 {
    static hashStr(str: string, raw?: boolean): string;
    static hashAsciiStr(str: string, raw?: boolean): string;
    private static stateIdentity;
    private static buffer32Identity;
    private static hexChars;
    private static hexOut;
    private static onePassHasher;
    private static _hex;
    private static _md5cycle;
    private _dataLength;
    private _bufferLength;
    private _state;
    private _buffer;
    private _buffer8;
    private _buffer32;
    constructor();
    start(): this;
    appendStr(str: string): this;
    appendAsciiStr(str: string): this;
    appendByteArray(input: Uint8Array): this;
    getState(): {
        buffer: any;
        buflen: number;
        length: number;
        state: number[];
    };
    setState(state: any): void;
    end(raw?: boolean): string;
}
/**
 * 数值工具
 */
declare class NumberTool {
    /**
     * 获取随机整数 getRandomInt(3,6)返回3~6之间的任意整数
     * @param start 起始值
     * @param end 终止值
     * @returns 随机整数
     */
    static getRandomInt(start: number, end: number): number;
    /**
     *  阿拉伯数字转换成中文数字
     *
     * @param num
     */
    static formatCapital(num: number): string;
    /**
     * 当数字超过10万时，将数字进行转换。例如10万的金币，"117315"转换成"11.73万"。
     * @param num 待转换数字
     * @return 转换结果
     */
    static formatMoney(num: number): string;
    /**
     * 获取分数的k，b单位str
     *
     * @param num 待转换数字
     * 1.2K 23M
     */
    static getSoceNumberStr(numS: number): string;
    /**
     * 获取数字k效果 。例如112000->112k 1000->1000  10000->10k
     *
     * @param num 待转换数字
     */
    static getSoceNumberStrType_K(num: number): string;
    /**
     * 三位分割
     *
     * 1234567  -> 1,234,567
     *
     * @param numS 待转换数字
     */
    static getThreeTypeNumberStr(numS: number): string;
    /**
     * num 不超过3位数
     * 补齐三位数 12->012 1->001
     *
     * @param num 待转换数字
     *
     */
    static getThreeNumStr(num: number): string;
    /**
     * 获取时间字符串 00:00
     *
     * @param timeNum 待转换数字
     *
     */
    static getShowTime(timeNum: number): string;
    /**
     * 获取时间字符串 00:00:00
     *
     * @param timeNum 待转换数字
     *
     */
    static getShowTimeTwo(timeNum: number): string;
    /**
     * 获取时间字符串 10天02时27分23秒
     * 传入秒数
     *
     * @param timeNum 待转换数字
     *
     */
    static getShowTimeThree(timeNum: number): string;
}
/**
 * 位置转换工具
 */
declare class PosTool {
    /**[SixGod]
     * 世界坐标转屏幕坐标
     *
     * @param {Laya.Camera} camera   参照相机
     * @param {Laya.Vector3} point   需要转换的点
     */
    static worldToScreen2(camera: Laya.Camera, point: Laya.Vector3): Laya.Vector3;
    /**[SixGod]
     * 屏幕坐标转世界坐标
     *
     * @param {Laya.Camera} camera  参照相机
     * @param {Laya.Vector3} point  需要转换的点
     */
    static screenToWorld(camera: Laya.Camera, point: Laya.Vector3): Laya.Vector3;
    /**[SixGod]
     * 获取三维场景和屏幕比例
     *
     * @param {Number} width     宽
     * @param {Number} height    长
     */
    static getScreenScale(width: number, height: number): Laya.Vector3;
    /**[SixGod]
     * 获取相机在 distance距离的截面右下角世界坐标位置
     *
     * @param {Laya.Transform3D} transform    相机Transform3D
     * @param {Number} distance     距离
     * @param {Number} width        宽度
     * @param {Number} height       长度
     */
    static getLowerLeft(transform: Laya.Transform3D, distance: number, width: number, height: number): Laya.Vector3;
    /**[SixGod]
     * 世界坐标转相对坐标
     *
     * @param {Laya.Transform3D} origin   camera.transform
     * @param {Laya.Vector3} point      需要转换的点
     */
    static inverseTransformPoint(origin: Laya.Transform3D, point: Laya.Vector3): Laya.Vector3;
    /**[SixGod]
     * 相对坐标转世界坐标
     *
     * @param {Laya.Transform3D} origin   camera.transform
     * @param {Laya.Vector3} point      需要转换的点
     */
    static transformPoint(origin: Laya.Transform3D, point: Laya.Vector3): Laya.Vector3;
    /**[SixGod]
     * 向量投影长度, 向量CA 在向量 CB 上的投影长度
     *
     * @param {Laya.Vector3} A
     * @param {Laya.Vector3} C
     * @param {Laya.Vector3} B
     */
    static projectDistance(A: Laya.Vector3, C: Laya.Vector3, B: Laya.Vector3): number;
    /**[SixGod]
     * 向量夹角
     *
     * @param {Laya.Vector3} ma 向量A
     * @param {Laya.Vector3} mb 向量B
     */
    static angle2Vector(ma: Laya.Vector3, mb: Laya.Vector3): number;
}
/**
 * 资源加载工具
 */
declare class ResUtil {
    private static instance_;
    static getIntance(): ResUtil;
    constructor();
    defaultOriginUrl: string;
    /**
     * 校验path
     * @param url
     */
    getOriginUrlPath(url: string): string;
    /**
     * 增加资源前缀
     * @param fix
     */
    addVersionPrefix(fix: string): void;
    /**
     * 资源配置文件
     */
    private resConfig;
    /**
     * 存储每一个资源的 key和value
     */
    private resKeyValues;
    /**
     * 存储组名对应的一些资源
     */
    private groupsResKeys;
    /**
     * 加载resconfig文件
     *
     * @param resUrl res.json路径
     */
    loadRESConfig(resUrl?: string): Promise<void>;
    /**
     * 加载组
     *
     * @param groups 一些组
     * @param complet 加载完成时候
     * @param progress 加载过程中
     */
    loadGroups(groups: string[], complet?: Function, progress?: Function): void;
    private isSuccGroupNames;
    /**
     * 对应组资源是否加载
     * @param group
     */
    groupIsLoad(group: string): boolean;
    /**
     * 获取一些组还没加载的组
     * @param groups
     */
    getGroupsNotLoadArr(groups: string[]): string[];
    /**
     * 加载一些资源组
     *
     * @param resInfos
     * @param complet
     * @param progress
     */
    private loadResByResInfos;
    /**
     * 异步加载一个资源
     *
     * @param resInfo
     * @param priority
     */
    private asyncLoadResByResInfo;
    /**
     * 异步加载一个资源
     *
     * @param url
     * @param priority
     */
    asyncLoadResByURL(url: string, priority?: number): Promise<any>;
    /**
     * 异步创建一个资源
     *
     * @param url
     */
    asyncCreateRes(url: string): Promise<any>;
    /**
     * 根据组获取资源配置情况
     *
     * @param group
     */
    private getGroupResInfosByGroupName;
    /**
     * 根据资源名获取一个资源配置
     *
     * 目前支持 image json font sound 待类型扩展
     * @param name
     */
    getResInfoByName(name: string, group?: string): any;
    /**
     * 根据组名获取资源量
     *
     * @param group
     */
    private getKeysByGroup;
    /**
     * 销毁一个些组资源
     *
     * @param groups 组名s
     */
    destoryGroupArr(groups: string[]): void;
    /**
     * 销毁一个组资源
     *
     * @param group 组名
     */
    destoryGroup(group: string): void;
    /**
     * 获取一个资源
     *
     * @param key
     */
    getRES<T>(key: string): T;
    /**
     * 异步加载一个资源s
     *
     * @param url
     */
    getAsyncRESByUrl<T>(url: string): Promise<T>;
    /**
     * 异步加载一个资源
     *
     * @param key
     */
    getAsyncRES<T>(key: string): Promise<T>;
    /**
     * 加载一个资源
     *
     * @param resUrl 资源路径
     * @param type 资源类型
     * @param complet 加载完成
     */
    private loadOneRes;
    /****************************************3D************************************************** */
    /**
     * 根据url 和name获取一个模型
     */
    getModelByUrlAndName(url: string, name: string): Promise<Laya.Sprite3D>;
    /****************************************************************************************** */
    /**
    * 加载资源
    * @param {Array} resource: [{type: , url: }]
    * @param {Function} onResourceLoadComplete
    * @param {Function} onResourceLoadProgress
    * @param {any} onResourceLoadTarget
    */
    loadResource(resource: any, onResourceLoadComplete: any, onResourceLoadProgress: any, onResourceLoadTarget: any): void;
    /**
     * 获取资源加载地址
     * @param {string} host 一类型资源放置位置
     * @param {string} name 资源名字
     * @param {string} resType 资源类型，默认png（png|jpg|sk|fnt|txt|json|mp4|mp3|wav）
     */
    getUrl(host: any, name: any, resType?: string): string;
    /**
     * 异步加载json文件
     * @param jsonUrl
     */
    asyncLoadJSON(jsonUrl: string): Promise<void>;
    thmsConfig: any;
    /**
     * 加载皮肤文件
     */
    loadThms(thmUrl: string): Promise<void>;
}
/**
 * 常用工具库
 */
declare class Utils {
    constructor();
    /**
     * 指定截取字符长度，返回截取后的显示字符
     *
     * @param {string} str
     * @param {number} cutNum
     * @returns {string}
     */
    static cutOutStr(str: string, cutNum: number): string;
    /****************************** Number工具 ******************************/
    /**
    * 获取从min-max之间的值
    *
    * @param min
    * @param max
    */
    static random(min: number, max: number): number;
    /**
     * 获取随机整数 getRandomInt(3,6)返回3~6之间的任意整数 向上取整的
     * @param start 起始值
     * @param end 终止值
     * @returns 随机整数
     */
    static getRandomInCeil(start: any, end: any): any;
    /**
     * 将一个数分成几份
     *
     * @param total
     * @param len
     */
    static getRandomArr(total: number, len: number): number[];
    /**
     * 获取[start，end]的随机数，包含start，end
     *
     * @param start 起始值
     * @param end 结束值
     */
    static getRandom(start: number, end: number): number;
    /**
     * 精确到小数点后多少位（舍尾）
     *
     * @param {number} 精确值
     * @param {number} 精确位数
     * @return {number}
     * */
    static exactCount(exactValue: number, count?: number): number;
    /**
    * 获取一个区间的随机数 (from, end)
    * @param {number} from 最小值
    * @param {number} end 最大值
    * @returns {number}
    */
    static limit(from: number, end: number): number;
    /****************************** Time工具 ******************************/
    /**
     * 格式化时间获取 00:00:00
     * @param {number} time 时间戳差 秒
     */
    static formatTime(time: number): string;
    /**
     * 格式化时间获取 00天00时00分
     * @param {number} time 时间戳差 秒
     */
    static formatTime2(time: number): string;
    /**
     * 使用时间返回所需要的字符串格式"2016年06月12日"
     * @param {number} time 时间戳
     * @param {string} fmt 指定返回格式 "yyyy年MM月dd日" 或者 "yyyy-MM-dd hh:mm:ss" 或者 "dd-MM-yyyy hh:mm:ss"
     * @return {string} 指定指点格式字符串
     */
    static millisecondsToDate(time: number, fmt: string): string;
    /**
     * 比较两个时间戳是否处于同一天
     *
     * @param lastTime 时间戳1 毫秒
     * @param nowTime 时间戳2 毫秒
     */
    static judgeIsOnTheSameDay(lastTime: number, nowTime: number): boolean;
    /****************************** URL工具 ******************************/
    /**
     * 在url中获取参数值
     *
     * @param name 参数名
     */
    static getQueryString(name: string): string;
    /****************************** Array工具 ******************************/
    /**
     * 打乱数组中的元素
     *
     * @param {Array} arr
     */
    static upset(arr: any[]): void;
    /**
     * 在一个数组中随机获取一个元素
     *
     * @param {Array} arr 数组
     * @returns 随机出来的结果
     */
    static randomArray(arr: any): any;
    /**
     * 剔除 某个数组中的元素
     *
     * @param arr 原数组
     * @param ruleParam 剔除元素
     * @param outNull 是否排除null元素
     * @param ruleIndexArr 剔除位置下标
     * @param ruleType 根据属性剔除元素，属性名
     * @param ruleParameterValue 根据属性剔除元素，属性值
    */
    static ruleOutType(arr: any[], ruleParam: any, outNull: boolean, ruleIndexArr?: number[], rpType?: string, rPValue?: any): any[];
    /****************************** Object工具 ******************************/
    /**
     * 取出obj的长度
     * 元素数目
     */
    static getObjLength(map: any): number;
    /**
     * 复制一组数据(简单Object、string、number、Array、boolean)；
     * 不可复制显示对象和Function
     *
     * @param obj
     */
    static copy<T>(obj: T): T;
    /**
     * 将对象转换为get参数的url类型例如 {a:1,b:2} => "a=1&b=2"
     * 注意只能是一级的参数query
     *
     * @param query
     */
    static querStr(query: any): string;
    /****************************** 其他工具 ******************************/
    /**
     * 计算角度  offRoa=0时   是与x正方向的夹角(二维平面)
     *
     * @param px
     * @param py
     * @param mx
     * @param my
     * @returns angle  返回的是一个角度
     */
    static getOffestAngle(px: number, py: number, mx: number, my: number, offRoa?: number): number;
    /**
     * 弧度制转换为角度值
     *
     * @param {number} radian
     * @returns {number}
     */
    static getAngle(radian: number): number;
    /**
     * 角度值转换为弧度制
     *
     * @param {number} angle
     */
    static getRadian(angle: number): number;
    /**
     * 获取两点间弧度
     * @param {Point} p1
     * @param {Point} p2
     * @returns {number}
     */
    static getRadianTwoPoint(p1: {
        x: number;
        y: number;
    }, p2: {
        x: number;
        y: number;
    }): number;
    /**
     * 获取两点间旋转角度（顺时针）
     *
     * @param {Point} p1
     * @param {Point} p2
     * @returns {number}
     */
    static getAngleTwoPoint(p1: {
        x: number;
        y: number;
    }, p2: {
        x: number;
        y: number;
    }): number;
    /**
     * 获取两点间距离
     *
     * @param {Point} p1
     * @param {Point} p2
     * @returns {number}
     */
    static getDistance(p1: {
        x: number;
        y: number;
    }, p2: {
        x: number;
        y: number;
    }): number;
    /**
     * 计算速度移动方向
     *
     * @param startPoint
     * @param endPoint
     * @param speed
     */
    static getRunDirection(startPoint: {
        x: number;
        y: number;
    }, endPoint: {
        x: number;
        y: number;
    }, speed?: number): number[];
    /**
     * 将角度转换到0-360
     *
     * @param angle
     */
    static randomTo360(angle: number): number;
    /*********************************向量相关  待运用测试 */
    /**
     * 求向量模
     *
     * @param v
     */
    static getVertorModel(v: {
        x: number;
        y: number;
    }): number;
    /**
     * 求向量模向量
     *
     * @param v
     * @param isNewVertor 是否创建新向量返回
     */
    static getModelVertor(v: {
        x: number;
        y: number;
    }, isNewVertor?: boolean): {
        x: number;
        y: number;
    };
    /**
     * 求向量垂直模向量
     *
     * @param v
     */
    static getVerticalVertor(v: {
        x: number;
        y: number;
    }): {
        x: number;
        y: number;
    }[];
    /**
     * 向量点乘数
     *
     * @param v
     * @param num
     * @param isNewVertor 是否创建新向量返回
     */
    static vertorMultiplyNumber(v: {
        x: number;
        y: number;
    }, num: number, isNewVertor?: boolean): {
        x: number;
        y: number;
    };
}
/**
 * 百页窗口模式
 *
 * 目前默认 500 毫秒时间
 */
declare class RectViewLoad extends Laya.Sprite {
    /**
     * 动画时间
     */
    protected animationTime: number;
    /**
     * 百页高度
     */
    protected rectH: number;
    constructor();
    /**计算的个数 */
    private len;
    /**
     * 初始化
     */
    private initView;
    /**
     * 开启
     * @param caller
     * @param method
     */
    open(caller?: any, method?: Function): void;
    /**
     * 关闭
     * @param caller
     * @param method
     */
    close(caller?: any, method?: Function): void;
}
/**
 * 窗口管理工具
 *
 * 目前支持
 *
 * 百叶窗模式
 */
declare class ViewLoadTools {
    private static instance_;
    static getInstance(): ViewLoadTools;
    /**百页窗口实体 */
    private com_RectViewLoad;
    /**
     * 百叶窗切换场景
     *
     * @param complete 窗口切换完成调用
     */
    showRectViewLoadSwitchScene(complete?: Function, content?: Laya.Node): void;
    /**
     * 关闭百叶窗
     *
     * @param complete
     */
    closeRectViewLoad(complete?: Function): void;
}
