export module localData {

    export class SignData {
        /** ID */
        id: number;
        name: string;
        /** 是否已签到 */
        isSigned: boolean;
        /** 是否可签到 */
        canSign: boolean;
        /** 签到奖励物品 */
        reward: { type: number, num: number }[];
    }

    export class InviteData {
        id: number;
        head: string;
        /**奖励值 type:1->钥匙 num:奖励数值 */
        reward: {
            type: number,
            num: number
        }[];
        /**是否已领取 */
        lingqued: boolean;
        /**能否领取 */
        canLingqu: boolean;
    }

    /** 提示红点事件数据体 */
    export class TipsPointData {
        /** 类型 */
        type: number;
        /** 是否显示提示 */
        show: boolean;
    }

    export class FreePowerData {
        id: number;
        name: string;
        /** 奖励数量 */
        rewardNum: number;
        /** 是否已领取 */
        isGeted: boolean;
        /** 是否可领取 */
        canGet: boolean;
        icon: string;
        /** 条件参数 */
        param: number;
    }

    export class PatternData {
        id: number;
        name: string;
        sort: number;
        openLN: number;
        maxnum: number;
        resource: string;
        unlock: boolean;
        /** 当前已通关关卡数 */
        curnum: number;
    }

    export class ColorData {
        id: number;
        use: boolean;
        unlock: boolean;
        icon: string;
        color: string;
        weight: number;
    }

    export class SkinData {
        id: number;
        use: boolean;
        unlock: boolean;
        icon: string;
        group: string;
        price: number;
        try: boolean;
    }

    export class BrushData {
        id: number;
        use: boolean;
        unlock: boolean;
        icon: string;
        weight: number;
    }

    export class LevelData0 {
        id: number;
        unlock: boolean;
        isCur: boolean;
        star: number;
    }

    export class LevelData2 {
        id: number;
        unlock: boolean;
        isCur: boolean;
    }
}

export module netData {

    /** 用户信息结构体 */
    export class UserInfos {
        openId: string = "";
        /** 昵称 */
        nick: string = "";
        /** 头像地址 */
        avatarUrl: string = "";
        /** 性别 */
        sex: number = 0;
        sessionKey: string = "";
        accessToken: string = "";
    }

    /** 玩家数据 */
    export class PlayerData {
        /** 上次登录时间 */
        public loginTime: number = null;
        /** 金币 默认0 */
        public gold: number = 0;
        /** 体力 */
        public power: number = 5;
        /** 上一次恢复时间点 ms */
        public lastPowerTime: number = null;
        /** 分享录屏次数 */
        public shareVideoCount: number = 0;
        /** 登录游戏次数 */
        public loginCount: number = 0;
    }

    /** 签到 */
    export class SignIn {
        /** 累计签到次数 */
        total_count: number = 0;
        /** 最近签到时刻 ms */
        timeStamp: number = null;
        // /** 已签到轮次 （7天一轮，四轮一循环）*/
        // rotations: number = 0;
    }

    /** 邀请奖励相关 */
    export class Invite {
        /** 已经领取过邀请奖励的id数组 */
        public inviteId: number[] = [];
        // /** 当前已领取邀请奖励轮次 */
        // public count: number = 0;
        // /** 是否领取过一轮邀请完成大奖 */
        // public lingqued: boolean = false;
    }

    /**
	 * 邀请人信息
	 */
    export class Inviter {
        public nick: string;
        public openId: string;
    }

    export class Color {
        owns: number[] = [1];
        using: number = 1;
    }

    export class Skin {
        owns: number[] = [1];
        using: number = 1;
    }

    export class Brush {
        owns: number[] = [1];
        using: number = 1;
    }
}