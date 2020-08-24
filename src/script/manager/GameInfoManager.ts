import { GameData } from "../common/GameData";
import CommonTool from "../tool/CommonTool";
import GameConst from "../common/GameConst";
import { LinePoints } from "../views/Type2GameLineToolMgr";

/**
 * 游戏数据管理
 */
export default class GameInfoManager {
    private static instance_: GameInfoManager;
    public static getInstance(): GameInfoManager {
        if (!GameInfoManager.instance_) {
            GameInfoManager.instance_ = new GameInfoManager();
        }
        return GameInfoManager.instance_;
    }

    /** 请求连接 */
    private URL: string = GameData.getInstance().URL_SAVE_DATA;

    /**
     * 获取当前时间戳 ms
     */
    public getTimeStamp(callF?: Function): void {
        let timeStamp: number;
        let _url: string = GameData.getInstance().URL_TIMESTAMP;
        HttpMgr.getInstance().sendHttp(_url, null, (e) => {
            timeStamp = e * 1000;
            console.log("获取当前时间戳成功 ->", timeStamp);
            if (callF) callF(timeStamp);
        }, (e) => { });
    }

    /**
     * 查询数据
     * @param key 数据key
     * @param isUseNet 是否使用网络
     */
    public selectInfo(key: string, isUseNet = false) {
        return new Promise(async (resolve, reject) => {
            let data;
            if (isUseNet) {
                data = await this.selectInfoByNet(key);
            } else {
                let onlykey = key + "_" + GameData.getInstance().userInfo.openId;
                let str = Laya.LocalStorage.getItem(onlykey);
                if (str) {
                    data = this.decodeData(str, key)
                    console.log(`查询键为 ${key} 的数据成功 ->`, data);
                }
            }
            resolve(data);
        });
    }

    /**
     * 查询数据通过网络
     * @param key 目标数据唯一标识
     * @param callF 回调函数
     */
    public selectInfoByNet(key: string, callF?: Function, isLoading: boolean = true) {
        return new Promise((resolve, reject) => {
            // isLoading && GameManager.instance.showBufferLoading();
            let gameId: string = GameData.getInstance().gameId;
            let openId: string = GameData.getInstance().userInfo.openId + "_" + key;
            let msg: { msg_type: string, msg_data: { gameid: string, saveid: string } } = {
                msg_type: "6",
                msg_data: {
                    gameid: gameId,
                    saveid: openId
                }
            };
            // console.log(`开始查询键为 ${key} 的数据 ->`, msg);
            HttpMgr.getInstance().sendHttp(this.URL, msg, (e) => {
                // isLoading && GameManager.instance.hiddeBufferLoading();
                let code: string = e.msg_data.error_code;
                let data;
                if (code == "0") {
                    console.log(`查询键为 ${key} 的数据成功 ->`, e.msg_data);
                    data = this.decodeData(e.msg_data.saveinfo, key);
                } else {
                    let str: string = CommonTool.errorCodeTable[code];
                    console.warn(`查询键为 ${key} 的数据失败:` + str);
                }
                if (callF) {
                    let obj: { code: string, key: string } = { code: code, key: key };
                    callF(obj);
                }
                resolve(data);
            }, (e) => { resolve(null) });
        });
    }

    /**
     * 保存数据
     * @param key 数据key
     * @param isUseNet 是否使用网络
     */
    public saveInfo(key: string, isUseNet = false) {
        if (isUseNet) {//保存至网络
            this.saveInfoToNet(key);
        } else {
            let str: string = this.encodeData(key);
            let onlykey = key + "_" + GameData.getInstance().userInfo.openId;
            Laya.LocalStorage.setItem(onlykey, str);
            if (key != GameConst.BASE_INFO) {
                console.log(`保存键为 ${key} 的数据成功 ->`);
            }
        }
    }

    /**
     * 保存数据到网络
     * @param key 目标数据唯一标识
     * @param callF 回调函数
     */
    private async saveInfoToNet(key: string, callF?: Function) {
        await new Promise((res, rej) => {
            let str: string = this.encodeData(key);
            let gameId: string = GameData.getInstance().gameId;
            let openId: string = GameData.getInstance().userInfo.openId + "_" + key;
            let msg: { msg_type: string, msg_data: { gameid: string, saveid: string, saveinfo: string } } = {
                msg_type: "8",
                msg_data: {
                    "gameid": gameId,
                    "saveid": openId,
                    "saveinfo": str
                }
            };

            // console.log(`开始保存键为 ${key} 的数据 ->`, msg);
            HttpMgr.getInstance().sendHttp(this.URL, msg, (e) => {
                let code: string = e.msg_data.error_code;
                if (code == "0") {
                    console.log(`保存键为 ${key} 的数据成功 ->`, e.msg_data);
                } else {
                    let str: string = CommonTool.errorCodeTable[code];
                    console.warn(`保存键为 ${key} 的数据失败：` + str);
                }
                if (callF) {
                    let obj: { code: string, key: string } = { code: code, key: key };
                    callF(obj);
                }
                res();
            }, (e) => { res(); });
        });
    }

    /** 进游戏查询玩家游戏相关数据 */
    public selectAllGameInfo(canUseNet = false) {
        return new Promise(async res => {
            if (canUseNet) {
                await this.selectSingleInfo(GameConst.BASE_INFO, false);
                await this.selectSingleInfo(GameConst.SIGN_INFO, false);
                await this.selectSingleInfo(GameConst.INVITE_INFO, false);
                await this.selectSingleInfo(GameConst.FREE_INFO, false);
                await this.selectSingleInfo(GameConst.LEVEL_INFO, false);
                await this.selectSingleInfo(GameConst.COLOR_INFO, false);
                await this.selectSingleInfo(GameConst.SKIN_INFO, false);
                await this.selectSingleInfo(GameConst.BRUSH_INFO, false);
            } else {
                await this.selectInfo(GameConst.BASE_INFO);
                await this.selectInfo(GameConst.SIGN_INFO);
                await this.selectInfo(GameConst.INVITE_INFO);
                await this.selectInfo(GameConst.FREE_INFO);
                await this.selectInfo(GameConst.LEVEL_INFO);
                await this.selectInfo(GameConst.COLOR_INFO);
                await this.selectInfo(GameConst.SKIN_INFO);
                await this.selectInfo(GameConst.BRUSH_INFO);
            }
            res();
        });
    }

    /** 查询单条数据 没有就保存至服务器 */
    public selectSingleInfo(key: string, isLoading: boolean = true) {
        return new Promise((res) => {
            this.selectInfoByNet(key, (obj) => {
                if (obj.code == "0") {
                    res(obj.code);
                } else if (obj.code == "6" || obj.code == "25") {
                    this.saveInfoToNet(key, (obj1) => {
                        if (obj1.code != "0") {
                            let str: string = CommonTool.errorCodeTable[obj1.code];
                            // viewTool.TipsUtil.getIntance().showTip(str);
                        }
                        res(obj1.code);
                    });
                } else {
                    let str: string = CommonTool.errorCodeTable[obj.code];
                    // viewTool.TipsUtil.getIntance().showTip(str);
                    res(obj.code);
                }
            }, isLoading);
        });
    }

    /**
     * 删除数据
     * 1：清理排行榜数据
     * 2：清理保存的玩家数据
     * 3：清理榜单信息
     */
    public async deleteData() {
        for (let i = 1; i <= 3; i++) {
            let msg_data = {
                "msg_type": "18",
                "msg_data": {
                    "gameid": GameData.getInstance().gameId,
                    "datatype": i + ""
                }
            };

            // 清空时注意请求地址
            await HttpMgr.getInstance().sendHttp(GameData.getInstance().URL_DELETE_DATA, msg_data, () => {
                console.log("清理数据成功...");
            });
            // await HttpMgr.getInstance().sendHttp("https://yxtest.32yx.com/DelMiniGameData.fcgi", msg_data, () => {
            //     console.log("清理数据成功...");
            // });
        }
    }

    /**
     * 解析数据
     * @param data 字符串数据体
     * @param key 目标数据唯一标识
     */
    private decodeData(data: string, key: string) {
        let obj: any = JSON.parse(data);
        // console.log(`解析键为 ${key} 的数据 ->`, obj);
        if (obj) {
            switch (key) {
                case GameConst.BASE_INFO:
                    GameData.getInstance().playerData = obj;
                    break;
                case GameConst.SIGN_INFO:
                    GameData.getInstance().signIn = obj;
                    break;
                case GameConst.INVITE_INFO:
                    GameData.getInstance().invite = obj;
                    break;
                case GameConst.FREE_INFO:
                    GameData.getInstance().freePower = obj;
                    break;
                case GameConst.LEVEL_INFO:
                    GameData.getInstance().level = obj;
                    break;
                case GameConst.COLOR_INFO:
                    GameData.getInstance().color = obj;
                    break;
                case GameConst.SKIN_INFO:
                    GameData.getInstance().skin = obj;
                    break;
                case GameConst.BRUSH_INFO:
                    GameData.getInstance().brush = obj;
                    break;
            }
        }
        return obj;
    }

    /**
     * 编译数据
     */
    private encodeData(key: string): string {
        let obj: any;
        switch (key) {
            case GameConst.BASE_INFO:
                obj = GameData.getInstance().playerData;
                break;
            case GameConst.SIGN_INFO:
                obj = GameData.getInstance().signIn;
                break;
            case GameConst.INVITE_INFO:
                obj = GameData.getInstance().invite;
                break;
            case GameConst.FREE_INFO:
                obj = GameData.getInstance().freePower;
                break;
            case GameConst.LEVEL_INFO:
                obj = GameData.getInstance().level;
                break;
            case GameConst.COLOR_INFO:
                obj = GameData.getInstance().color;
                break;
            case GameConst.SKIN_INFO:
                obj = GameData.getInstance().skin;
                break;
            case GameConst.BRUSH_INFO:
                obj = GameData.getInstance().brush;
                break;
        }

        if (key != GameConst.BASE_INFO) {
            console.log(`编译键为 ${key} 的数据 ->`, obj);
        }
        let str: string = JSON.stringify(obj);
        return str;
    }

    /**
     * 获取某个关卡的绘制数据
     * @param level 
     */
    public selectLevelDataById(level: number): Array<LinePoints> {
        let onlykey = "Level_" + level + "_" + GameData.getInstance().userInfo.openId;
        let str = Laya.LocalStorage.getItem(onlykey);
        if (str) {
            return JSON.parse(str);
        } else {
            return null;
        }
    }

    /**
     * 保存某个关卡的绘制数据
     * @param level 
     * @param arr 
     */
    public saveLevelDataById(level: number, arr: Array<LinePoints>) {
        let onlykey = "Level_" + level + "_" + GameData.getInstance().userInfo.openId;
        let str = JSON.stringify(arr);
        Laya.LocalStorage.setItem(onlykey, str);
        console.log(`保存成功${level}`);
    }
}