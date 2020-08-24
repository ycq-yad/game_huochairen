/**
 * 游戏内容常量
 */
export default class GameConst {
    /** 用户基本数据 */
    public static BASE_INFO: string = "BASE_INFO";
    /** 签到数据 */
    public static SIGN_INFO: string = "SIGN_INFO";
    /** 邀请奖励相关数据 */
    public static INVITE_INFO: string = "INVITE_INFO";
    /** 免费体力数据 */
    public static FREE_INFO: string = "FREE_INFO";
    /** 模式关卡数据 */
    public static LEVEL_INFO: string = "LEVEL_INFO";
    /** 颜色数据 */
    public static COLOR_INFO: string = "COLOR_INFO";
    /** 皮肤数据 */
    public static SKIN_INFO: string = "SKIN_INFO";
    /** 画笔数据 */
    public static BRUSH_INFO: string = "BRUSH_INFO";


    /**
     * app 信息 
     * 
     * showCd 兑换码是否显示
     * serverConf (nts 内网测试服)(wts 外网测试服) (wzs 外网正式服)
     * version 版本号  游戏版本大于此版本号 为审核版本 其他的时候正常
     * bannerId 
     * videoId 
     * isOpen 是否开启（代码运行总控制）
     * */
    public static infos: {
        showCd: boolean,
        serverConf: "nts" | "wts" | "wzs",
        version: number,
        bannerId: Array<string>,
        videoId: Array<string>,
        longVideoId: Array<string>,
        intersId: Array<string>,
        isOpen: boolean,
        /** 是否自动录制视频 */
        isAutoMakeVideo: boolean,
        /** 是否停止自动分享视频 */
        isAutoStopShare: boolean,
        /** 广告审核 处理广告审核开关 */
        adConversion: boolean,
        strogeVersion: string,
        selectDoule: boolean,
        /** -1=全模式；0=摔杯达人；1=经典模式；2=划线解密 */
        model: number,
        videoOpen: boolean,
        touchByMistake: boolean
    };
}