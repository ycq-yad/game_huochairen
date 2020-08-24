

import { GameData } from "../common/GameData";
import WebSocketMgr from "net/WebSocketMgr";
import BufferLoadingManger from "manager/BufferLoadingManger";
import { DeviceUtil } from "utils/DeviceUtil";


/**
 * 网络 目前主要管理回调
 */
export default class NetMgr {
    private static instance_: NetMgr;
    public static getInstance(): NetMgr {
        if (!NetMgr.instance_) {
            NetMgr.instance_ = new NetMgr();
        }
        return NetMgr.instance_;
    }

    constructor() {
        this.msgBackFuncs = {};
    }

    /**游戏逻辑使用的网络方式 */
    public gameLocgicNetType: "ws" | "http" = "ws";

    /**
     * 消息管理对象
     */
    public msgBackFuncs: any;

    /**
     * 当消息回来时候
     * @param data 
     */
    public onMessage(dataObj: any): void {
        let msg_type = dataObj.msg_type;
        if (NetMgr.getInstance().msgBackFuncs["call_" + msg_type]) {
            NetMgr.getInstance().msgBackFuncs["call_" + msg_type](dataObj);
        }
    }

    /**
     * 初始
     */
    public init(): void {
        if (WebSocketMgr.getInstance().socket_) {
            return
        }
        console.log("初始网络-websocket--");

        WebSocketMgr.getInstance().init();
        WebSocketMgr.getInstance().url_ = GameData.getInstance().socketUrl;
        WebSocketMgr.getInstance().heartbeatData = JSON.stringify(
            {
                "msg_type": "62",
                "msg_data": {
                    "gameid": GameData.getInstance().gameId,	//游戏ID
                    "openid": "",		//账号唯一标识
                    "platform": GameData.getInstance().platformCode,     //平台编号
                }
            }
        );
        WebSocketMgr.getInstance().onOpen = function () {
            if (NetMgr.getInstance().fristOpen) {
                NetMgr.getInstance().fristOpen();
                NetMgr.getInstance().fristOpen = null;
            }
            BufferLoadingManger.getInstance().hiddBuffer();
        }
        WebSocketMgr.getInstance().onClose = function () {
            BufferLoadingManger.getInstance().showBuffer();
        }
        WebSocketMgr.getInstance().onMessage = this.onMessage;
        BufferLoadingManger.getInstance().showBuffer();
        WebSocketMgr.getInstance().connect();
    }

    /**
     * 首次开启网络
     */
    public fristOpen: Function;

    /**
     * 发送消息
     * @param data 
     */
    public send(data: any, msg_type: string, callFunc: Function = null): void {
        if (DeviceUtil.isNative()) {
            console.log("socket send : " + JSON.stringify(data));
        } else {
            console.log("socket send : ", data);
        }
        if (callFunc) {
            NetMgr.getInstance().msgBackFuncs["call_" + msg_type] = callFunc;
        }
        WebSocketMgr.getInstance().send(JSON.stringify(data));
    }

}