export default class GameEvent {
    /** 游戏暂停 */
    public static ONHIDE: string = "ONHIDE";
    /** 游戏激活 */
    public static ONSHOW: string = "ONSHOW";
    /** BufferLoad */
    public static BUFFER_LOAD: string = "BUFFER_LOAD";
    /** 提示红点事件 */
    public static TIPS_POINT: string = "TIPS_POINT";
    /** 刷新顶栏 */
    public static REFRESH_TOP: string = "REFRESH_TOP";
    /** 显示顶栏 */
    public static SHOW_TOP: string = "SHOW_TOP";
    /** 隐藏顶栏 */
    public static HIDE_TOP: string = "HIDE_TOP";
    /** 顶栏是否可点击 */
    public static ENABLED_TOP: string = "ENABLED_TOP";
    /** 体力回复状态（开始or停止） */
    public static POWER_REPLY_STATUS: string = "POWER_REPLY_STATUS";
    /** 刷新免费体力 */
    public static REFRESH_FREE_POWER: string = "REFRESH_FREE_POWER";
    /** 刷新邀请界面 */
    public static REFRESH_INVITE: string = "REFRESH_INVITE";
    /** 打开购买道具弹窗 */
    public static OPEN_BUY_PROP: string = "OPEN_BUY_PROP";
    /** 切换至某个场景 */
    public static OPEN_SCENE: string = "OPEN_SCENE";
    /** 修改TopBar坐标 */
    public static CHANGE_POS: string = "CHANGE_POS";
    /** 选模式 */
    public static CHOOSE_MODEL: string = "CHOOSE_MODEL";

    /** 显示更多游戏抽屉 */
    public static SHOW_GAME_DRAWER: string = "SHOW_GAME_DRAWER";
    /** 隐藏更多游戏抽屉 */
    public static HIDE_GAME_DRAWER: string = "HIDE_GAME_DRAWER";
    /** 打开更多游戏抽屉 */
    public static OPEN_GAME_DRAWER: string = "OPEN_GAME_DRAWER";
    /** 显示更多游戏Banner */
    public static SHOW_GAME_BANNER: string = "SHOW_GAME_BANNER";
    /** 隐藏更多游戏Banner */
    public static HIDE_GAME_BANNER: string = "HIDE_GAME_BANNER";
    /** 打开更多游戏随机盒子 */
    public static OPEN_GAME_RANDOM: string = "OPEN_GAME_RANDOM";
    /** 打开更多游戏热门盒子 */
    public static OPEN_GAME_HOT: string = "OPEN_GAME_HOT";
    /** 打开更多游戏我的列表 */
    public static OPEN_GAME_LIST: string = "OPEN_GAME_LIST";
    /** 显示更多游戏页面内盒子 */
    public static SHOW_GAME_BOX: string = "SHOW_GAME_BOX";
    /** 隐藏更多游戏页面内盒子 */
    public static HIDE_GAME_BOX: string = "HIDE_GAME_BOX";
    /** 跳转到小游戏失败 */
    public static NAV_GAME_FAIL: string = "NAV_GAME_FAIL";
    /** 显示顶部退出按钮 */
    public static SHOW_EXIT_BTN: string = "SHOW_EXIT_BTN";
    /** 隐藏顶部退出按钮 */
    public static HIDE_EXIT_BTN: string = "HIDE_EXIT_BTN";

    ///////////////////////////////////////智力划线///////////////////////////////////////

    /** 使用画笔 */
    public static USE_BRUSH: string = "USE_BRUSH";
    /** 选关 */
    public static Type2Select: string = "Type2Select";
    /** 重新开始 */
    public static Type2Restart: string = "Type2Restart";
    /** 下一关 */
    public static Type2Next: string = "Type2Next";
    /** 游戏结束 */
    public static Type2GameOver = "Type2GameOver";
}
window['GameEvent'] = GameEvent;