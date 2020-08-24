export type PlatformInfos = {
    bannerId: Array<string>,
    videoId: Array<string>,
    longVideoId: Array<string>,
    intersId: Array<string>,
    gridId: Array<string>,
    nativeId: Array<string>,
    appBoxId: Array<string>,
    bannerOpen: boolean,
    videoOpen: boolean,
    intersOpen: boolean,
    gridOpen: boolean,
    nativeOpen: boolean,
    appBoxOpen: boolean,
    autoMakeVideo: boolean,
    autoShareVideo: boolean,
    autoTipInstallShortcut: boolean,
    nativeTouchByMistake: number
};

/** 签到配置数据结构 */
export type SignConfig = {
    id: number;
    /** 名字 */
    name: string;
    /** 奖励 */
    reward: { type: number, num: number }[];
    /** 描述 */
    info: string;
}

/** 邀请配置数据结构 */
export type InviteConfig = {
    id: number;
    name: any;
    /**奖励值 */
    reward: {
        type: number,
        num: number
    }[];
}

/** 免费体力配置数据结构 */
export type FreePowerConfig = {
    id: number;
    /** 名字 */
    name: string;
    /** 1=签到；2=通关 */
    type: string;
    /** 奖励 */
    reward: number;
    /** 条件参数 */
    param: number;
    icon: string;
}

/** 关卡模式配置数据结构 */
export type PatternConfig = {
    ID: number;
    /** 名字 */
    name: string;
    /** 模式排序 */
    sort: number;
    /** 开启条件 */
    openLN: number;
    /** 最大关卡数 */
    maxnum: number;
    resource: string;
}

/** 颜色配置数据结构 */
export type ColorConfig = {
    id: number;
    color: string;
    resource: string;
    weight: number;
}

/** 皮肤配置数据结构 */
export type SkinConfig = {
    id: number;
    group: string;
    price: number;
    icon: string;
}

/** 画笔配置数据结构 */
export type BrushConfig = {
    ID: number;
    icon: string;
    weight: number;
}