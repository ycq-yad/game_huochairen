(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var CommonScaleComplenet = (function (_super) {
        __extends(CommonScaleComplenet, _super);
        function CommonScaleComplenet() {
            return _super.call(this) || this;
        }
        return CommonScaleComplenet;
    }(CustomScaleComponent));

    var GameConfig = (function () {
        function GameConfig() {
        }
        GameConfig.init = function () {
            var reg = Laya.ClassUtils.regClass;
            reg("script/common/CommonScaleComplenet.ts", CommonScaleComplenet);
        };
        GameConfig.width = 1080;
        GameConfig.height = 1920;
        GameConfig.scaleMode = "fixedwidth";
        GameConfig.screenMode = "none";
        GameConfig.alignV = "top";
        GameConfig.alignH = "left";
        GameConfig.startScene = "skins/channel/duyou/DYMoreGameRandom.scene";
        GameConfig.sceneRoot = "";
        GameConfig.debug = false;
        GameConfig.stat = false;
        GameConfig.physicsDebug = false;
        GameConfig.exportSceneToJson = true;
        return GameConfig;
    }());
    GameConfig.init();

    var GameEvent = (function () {
        function GameEvent() {
        }
        GameEvent.ONHIDE = "ONHIDE";
        GameEvent.ONSHOW = "ONSHOW";
        GameEvent.BUFFER_LOAD = "BUFFER_LOAD";
        GameEvent.TIPS_POINT = "TIPS_POINT";
        GameEvent.REFRESH_TOP = "REFRESH_TOP";
        GameEvent.SHOW_TOP = "SHOW_TOP";
        GameEvent.HIDE_TOP = "HIDE_TOP";
        GameEvent.ENABLED_TOP = "ENABLED_TOP";
        GameEvent.POWER_REPLY_STATUS = "POWER_REPLY_STATUS";
        GameEvent.REFRESH_FREE_POWER = "REFRESH_FREE_POWER";
        GameEvent.REFRESH_INVITE = "REFRESH_INVITE";
        GameEvent.OPEN_BUY_PROP = "OPEN_BUY_PROP";
        GameEvent.OPEN_SCENE = "OPEN_SCENE";
        GameEvent.CHANGE_POS = "CHANGE_POS";
        GameEvent.CHOOSE_MODEL = "CHOOSE_MODEL";
        GameEvent.SHOW_GAME_DRAWER = "SHOW_GAME_DRAWER";
        GameEvent.HIDE_GAME_DRAWER = "HIDE_GAME_DRAWER";
        GameEvent.OPEN_GAME_DRAWER = "OPEN_GAME_DRAWER";
        GameEvent.SHOW_GAME_BANNER = "SHOW_GAME_BANNER";
        GameEvent.HIDE_GAME_BANNER = "HIDE_GAME_BANNER";
        GameEvent.OPEN_GAME_RANDOM = "OPEN_GAME_RANDOM";
        GameEvent.OPEN_GAME_HOT = "OPEN_GAME_HOT";
        GameEvent.OPEN_GAME_LIST = "OPEN_GAME_LIST";
        GameEvent.SHOW_GAME_BOX = "SHOW_GAME_BOX";
        GameEvent.HIDE_GAME_BOX = "HIDE_GAME_BOX";
        GameEvent.NAV_GAME_FAIL = "NAV_GAME_FAIL";
        GameEvent.SHOW_EXIT_BTN = "SHOW_EXIT_BTN";
        GameEvent.HIDE_EXIT_BTN = "HIDE_EXIT_BTN";
        GameEvent.USE_BRUSH = "USE_BRUSH";
        GameEvent.Type2Select = "Type2Select";
        GameEvent.Type2Restart = "Type2Restart";
        GameEvent.Type2Next = "Type2Next";
        GameEvent.Type2GameOver = "Type2GameOver";
        return GameEvent;
    }());
    window['GameEvent'] = GameEvent;

    var GameBufferLoading = (function (_super) {
        __extends(GameBufferLoading, _super);
        function GameBufferLoading() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameBufferLoading";
            _this.bg_img_res = "game_panel_db_png";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.init();
            return _this;
        }
        GameBufferLoading.prototype.init = function () {
            if (!this.bg_img) {
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.bg_img.alpha = 0.7;
                this.addChild(this.bg_img);
                this.mouseEnabled = true;
                this.bg_img.mouseEnabled = true;
                this.bg_img.mouseThrough = false;
            }
            if (!this.img_circle) {
                this.img_circle = new Laya.Image();
                this.img_circle.skin = "resource/assets/loading/loading_circle.png";
                this.img_circle.anchorX = this.img_circle.anchorY = 0.5;
                this.img_circle.centerX = this.img_circle.centerY = 0;
                this.addChild(this.img_circle);
            }
        };
        GameBufferLoading.prototype.setLabelInfo = function (info) {
        };
        GameBufferLoading.prototype.onShow = function () {
            if (this.img_circle) {
                this.img_circle.rotation = 0;
                Laya.Tween.to(this.img_circle, { rotation: 360 }, 500, null, Laya.Handler.create(this, this.onShow));
            }
        };
        GameBufferLoading.prototype.onHidd = function () {
            if (this.img_circle) {
                Laya.Tween.clearAll(this.img_circle);
            }
        };
        return GameBufferLoading;
    }(Laya.Sprite));

    var SoundManager = (function () {
        function SoundManager() {
            this._musicOpen = true;
            this._soundOpen = true;
        }
        Object.defineProperty(SoundManager, "instance", {
            get: function () {
                if (!SoundManager.ins)
                    SoundManager.ins = new SoundManager();
                return SoundManager.ins;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager.prototype, "musicOpen", {
            get: function () {
                return this._musicOpen;
            },
            set: function (value) {
                this._musicOpen = value;
                if (value) {
                    this.playBgMusic(this.curBgMusic);
                }
                else {
                    this.stopBgMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundManager.prototype, "soundOpen", {
            get: function () {
                return this._soundOpen;
            },
            set: function (_soundOpen) {
                this._soundOpen = _soundOpen;
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.prototype.playBgMusic = function (soundName) {
            return __awaiter(this, void 0, void 0, function () {
                var _url, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log("开始播放Bgm...", soundName, this.curBgMusic);
                            if (!this._musicOpen)
                                return [2];
                            if (!soundName && !this.curBgMusic)
                                return [2];
                            if (!soundName) return [3, 2];
                            this.curBgMusic = soundName;
                            _url = ResUtil.getIntance().defaultOriginUrl + "resource/assets/sound/" + this.curBgMusic + ".mp3";
                            _a = this;
                            return [4, Laya.SoundManager.playMusic(_url, 0)];
                        case 1:
                            _a.soundChannel = _b.sent();
                            return [3, 3];
                        case 2:
                            if (this.soundChannel)
                                this.soundChannel.resume();
                            _b.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        SoundManager.prototype.pauseBgMusic = function () {
            if (this.soundChannel)
                this.soundChannel.pause();
        };
        SoundManager.prototype.stopBgMusic = function () {
            console.log("停止播放Bgm...");
            if (this.soundChannel)
                this.soundChannel.stop();
        };
        SoundManager.prototype.playEffect = function (soundName) {
            if (!this._soundOpen || !soundName)
                return;
            var _url;
            if (DeviceUtil.isNative()) {
                _url = "resource/assets/sound/ogg/" + soundName + ".ogg";
            }
            else {
                _url = "resource/assets/sound/" + soundName + ".mp3";
            }
            Laya.SoundManager.playSound(_url, 1);
        };
        return SoundManager;
    }());
    var SoundConst;
    (function (SoundConst) {
        SoundConst["HomeBgm"] = "";
        SoundConst["BtnClick"] = "button";
        SoundConst["GameBgm2"] = "bg";
        SoundConst["Huaxian"] = "huaxian";
        SoundConst["Win2"] = "win";
    })(SoundConst || (SoundConst = {}));

    var localData;
    (function (localData) {
        var SignData = (function () {
            function SignData() {
            }
            return SignData;
        }());
        localData.SignData = SignData;
        var InviteData = (function () {
            function InviteData() {
            }
            return InviteData;
        }());
        localData.InviteData = InviteData;
        var TipsPointData = (function () {
            function TipsPointData() {
            }
            return TipsPointData;
        }());
        localData.TipsPointData = TipsPointData;
        var FreePowerData = (function () {
            function FreePowerData() {
            }
            return FreePowerData;
        }());
        localData.FreePowerData = FreePowerData;
        var PatternData = (function () {
            function PatternData() {
            }
            return PatternData;
        }());
        localData.PatternData = PatternData;
        var ColorData = (function () {
            function ColorData() {
            }
            return ColorData;
        }());
        localData.ColorData = ColorData;
        var SkinData = (function () {
            function SkinData() {
            }
            return SkinData;
        }());
        localData.SkinData = SkinData;
        var BrushData = (function () {
            function BrushData() {
            }
            return BrushData;
        }());
        localData.BrushData = BrushData;
        var LevelData0 = (function () {
            function LevelData0() {
            }
            return LevelData0;
        }());
        localData.LevelData0 = LevelData0;
        var LevelData2 = (function () {
            function LevelData2() {
            }
            return LevelData2;
        }());
        localData.LevelData2 = LevelData2;
    })(localData || (localData = {}));
    var netData;
    (function (netData) {
        var UserInfos = (function () {
            function UserInfos() {
                this.openId = "";
                this.nick = "";
                this.avatarUrl = "";
                this.sex = 0;
                this.sessionKey = "";
                this.accessToken = "";
            }
            return UserInfos;
        }());
        netData.UserInfos = UserInfos;
        var PlayerData = (function () {
            function PlayerData() {
                this.loginTime = null;
                this.gold = 0;
                this.power = 5;
                this.lastPowerTime = null;
                this.shareVideoCount = 0;
                this.loginCount = 0;
            }
            return PlayerData;
        }());
        netData.PlayerData = PlayerData;
        var SignIn = (function () {
            function SignIn() {
                this.total_count = 0;
                this.timeStamp = null;
            }
            return SignIn;
        }());
        netData.SignIn = SignIn;
        var Invite = (function () {
            function Invite() {
                this.inviteId = [];
            }
            return Invite;
        }());
        netData.Invite = Invite;
        var Inviter = (function () {
            function Inviter() {
            }
            return Inviter;
        }());
        netData.Inviter = Inviter;
        var Color = (function () {
            function Color() {
                this.owns = [1];
                this.using = 1;
            }
            return Color;
        }());
        netData.Color = Color;
        var Skin = (function () {
            function Skin() {
                this.owns = [1];
                this.using = 1;
            }
            return Skin;
        }());
        netData.Skin = Skin;
        var Brush = (function () {
            function Brush() {
                this.owns = [1];
                this.using = 1;
            }
            return Brush;
        }());
        netData.Brush = Brush;
    })(netData || (netData = {}));

    var GameConst = (function () {
        function GameConst() {
        }
        GameConst.BASE_INFO = "BASE_INFO";
        GameConst.SIGN_INFO = "SIGN_INFO";
        GameConst.INVITE_INFO = "INVITE_INFO";
        GameConst.FREE_INFO = "FREE_INFO";
        GameConst.LEVEL_INFO = "LEVEL_INFO";
        GameConst.COLOR_INFO = "COLOR_INFO";
        GameConst.SKIN_INFO = "SKIN_INFO";
        GameConst.BRUSH_INFO = "BRUSH_INFO";
        return GameConst;
    }());

    var GameData = (function () {
        function GameData() {
            this.URL_DELETE_DATA = "";
            this.URL_DELETE_DATA_TEST = "https://172.17.3.217:8090/DelMiniGameData.fcgi";
            this.URL_SAVE_DATA = "";
            this.URL_SAVE_DATA_TEST = "http://172.17.3.217:8090/MiniGameData.fcgi";
            this.URL_OF_RANK = "";
            this.URL_OF_RANK_TEST = "http://172.17.3.217:8090/MiniGameRank.fcgi";
            this.URL_OF_INVITE = "";
            this.URL_OF_INVITE_TEST = "http://172.17.3.217:8090/Invitation.fcgi";
            this.URL_TIMESTAMP = "";
            this.URL_WX_REQ = "";
            this.URL_WX_REQ_TEST = "http://172.17.3.217:8090/MiniGame.fcgi";
            this.MinigameResUrlRoot = '';
            this.MinigameResAllUrl = '';
            this.resVersion = '1_1/';
            this.gameId = "";
            this.videoTips = "视频观看完整才能获得奖励哦";
            this.fullScreenOffSet = 100;
            this.gameVersion = 1001;
            this.isConVersion = false;
            this.strogeVersion = '1001';
            this.isTestVersion = true;
            this.isGetOpenid = true;
            this.ttVideoId = ["9143qof69l9jd53hg1"];
            this.ttBannerId = ["1ona7n89mfb15qklcv"];
            this.modelId = -1;
            this.videoOpen = true;
            this._shakeIsOpen = true;
            this.userInfo = new netData.UserInfos();
            this._playerData = new netData.PlayerData();
            this.signIn = new netData.SignIn();
            this.invite = new netData.Invite();
            this.freePower = {};
            this.level = {
                "103": { passLv: 0, curLv: 1 }
            };
            this.color = new netData.Color();
            this.skin = new netData.Skin();
            this.brush = new netData.Brush();
            this.defaultConfigs = {
                defaultPower: 5,
                rePowerCD: 300,
                rePowerLimit: 5,
                maxPower: 99,
                videoBuyPower: 2,
                videoBuyGold: 200,
                powerBag: 1,
                passGold0: 50,
                passGold1: 50,
                passGold2: 50,
                shareRecordAward: 100,
                skinTryCount: 1,
                unlockCost2: 500,
                starTipSec: 8,
                powerCost: 1
            };
        }
        GameData.getInstance = function () {
            if (!GameData.instance) {
                GameData.instance = new GameData();
            }
            return GameData.instance;
        };
        Object.defineProperty(GameData.prototype, "serverConf", {
            set: function (sc) {
                this.serverConf_ = sc;
                this.initServer();
            },
            enumerable: true,
            configurable: true
        });
        GameData.prototype.initServer = function () {
            switch (GameData.instance.serverConf_) {
                case "nts":
                    this.URL_SAVE_DATA = this.URL_SAVE_DATA_TEST;
                    this.URL_OF_RANK = this.URL_OF_RANK_TEST;
                    this.URL_OF_INVITE = this.URL_OF_INVITE_TEST;
                    this.URL_DELETE_DATA = this.URL_DELETE_DATA_TEST;
                    break;
                case "wts":
                    break;
                case "wzs":
                    break;
            }
        };
        GameData.prototype.initConfig = function (res) {
            GameConst.infos = res;
            GameData.getInstance().gameId = res.gameId;
            GameData.getInstance().modelId = GameConst.infos.model;
            GameData.getInstance().channel = res.channel;
            if (DeviceUtil.isMiniGame()) {
                GameData.getInstance().serverConf = GameConst.infos.serverConf;
            }
            else {
                GameData.getInstance().serverConf = "nts";
            }
            if (GameData.getInstance().gameVersion > GameConst.infos.version) {
                GameData.getInstance().isConVersion = true;
            }
            else {
                GameData.getInstance().isConVersion = false;
            }
            GameData.getInstance().bagBtnDelay = res.bagBtnDelay ? res.bagBtnDelay : 0;
            GameData.getInstance().isTestVersion = GameData.getInstance().gameVersion == 1;
            GameData.getInstance().bannerId = GameConst.infos.bannerId;
            GameData.getInstance().videoId = GameConst.infos.videoId;
            GameData.getInstance().longVideoId = GameConst.infos.longVideoId;
            GameData.getInstance().intersId = GameConst.infos.intersId;
            GameData.getInstance().isOpen = GameConst.infos.isOpen;
            GameData.getInstance().strogeVersion = GameConst.infos.strogeVersion;
            GameData.getInstance().adConversion = GameConst.infos.adConversion;
            GameData.getInstance().selectDoule = GameConst.infos.selectDoule;
            GameData.getInstance().videoOpen = GameConst.infos.videoOpen;
            GameData.getInstance().touchByMistake = GameConst.infos.touchByMistake;
            GameData.getInstance().autoMakeVideo = res.autoMakeVideo;
            if (DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                GameData.getInstance().isTestVersion = res.testVersion;
                GameData.getInstance().isConVersion = res.reviewVersion;
            }
        };
        Object.defineProperty(GameData.prototype, "shakeIsOpen", {
            get: function () {
                return this._shakeIsOpen;
            },
            set: function (isOpen) {
                this._shakeIsOpen = isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameData.prototype, "playerData", {
            get: function () {
                return this._playerData;
            },
            set: function (value) {
                value.loginTime && (this._playerData.loginTime = value.loginTime);
                value.gold && (this._playerData.gold = value.gold);
                value.power && (this._playerData.power = value.power);
                this._playerData.lastPowerTime = value.lastPowerTime;
                this._playerData.shareVideoCount = value.shareVideoCount;
                value.loginCount && (this._playerData.loginCount = value.loginCount);
            },
            enumerable: true,
            configurable: true
        });
        return GameData;
    }());

    var CommonTool = (function () {
        function CommonTool() {
        }
        CommonTool.errorCodeTable = {
            1: "解析数据异常",
            2: "服务器内部错误",
            3: "数据库处理超时",
            4: "数据插入失败",
            5: "查询操作错误",
            6: "数据库没有该数据",
            7: "数据库数据不存在",
            8: "操作频繁",
            9: "名次传递错误",
            10: "没有rankid",
            11: "没有游戏id",
            12: "没有Session_Id",
            13: "没有Session_Key",
            14: "Session_Id超时",
            15: "Session_Id加密错误",
            16: "Session_Id解密失败",
            17: "Session_Id不匹配",
            18: "token验证失败",
            19: "没有保存Id",
            20: "参数错误",
            21: "没有分数",
            22: "数据更新失败",
            23: "数据删除失败",
            24: "无效的游戏Id",
            25: "无存储信息数据"
        };
        return CommonTool;
    }());

    var GameInfoManager = (function () {
        function GameInfoManager() {
            this.URL = GameData.getInstance().URL_SAVE_DATA;
        }
        GameInfoManager.getInstance = function () {
            if (!GameInfoManager.instance_) {
                GameInfoManager.instance_ = new GameInfoManager();
            }
            return GameInfoManager.instance_;
        };
        GameInfoManager.prototype.getTimeStamp = function (callF) {
            var timeStamp;
            var _url = GameData.getInstance().URL_TIMESTAMP;
            HttpMgr.getInstance().sendHttp(_url, null, function (e) {
                timeStamp = e * 1000;
                console.log("获取当前时间戳成功 ->", timeStamp);
                if (callF)
                    callF(timeStamp);
            }, function (e) { });
        };
        GameInfoManager.prototype.selectInfo = function (key, isUseNet) {
            var _this = this;
            if (isUseNet === void 0) { isUseNet = false; }
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var data, onlykey, str;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isUseNet) return [3, 2];
                            return [4, this.selectInfoByNet(key)];
                        case 1:
                            data = _a.sent();
                            return [3, 3];
                        case 2:
                            onlykey = key + "_" + GameData.getInstance().userInfo.openId;
                            str = Laya.LocalStorage.getItem(onlykey);
                            if (str) {
                                data = this.decodeData(str, key);
                                console.log("\u67E5\u8BE2\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->", data);
                            }
                            _a.label = 3;
                        case 3:
                            resolve(data);
                            return [2];
                    }
                });
            }); });
        };
        GameInfoManager.prototype.selectInfoByNet = function (key, callF, isLoading) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var gameId = GameData.getInstance().gameId;
                var openId = GameData.getInstance().userInfo.openId + "_" + key;
                var msg = {
                    msg_type: "6",
                    msg_data: {
                        gameid: gameId,
                        saveid: openId
                    }
                };
                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                    var code = e.msg_data.error_code;
                    var data;
                    if (code == "0") {
                        console.log("\u67E5\u8BE2\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->", e.msg_data);
                        data = _this.decodeData(e.msg_data.saveinfo, key);
                    }
                    else {
                        var str = CommonTool.errorCodeTable[code];
                        console.warn("\u67E5\u8BE2\u952E\u4E3A " + key + " \u7684\u6570\u636E\u5931\u8D25:" + str);
                    }
                    if (callF) {
                        var obj = { code: code, key: key };
                        callF(obj);
                    }
                    resolve(data);
                }, function (e) { resolve(null); });
            });
        };
        GameInfoManager.prototype.saveInfo = function (key, isUseNet) {
            if (isUseNet === void 0) { isUseNet = false; }
            if (isUseNet) {
                this.saveInfoToNet(key);
            }
            else {
                var str = this.encodeData(key);
                var onlykey = key + "_" + GameData.getInstance().userInfo.openId;
                Laya.LocalStorage.setItem(onlykey, str);
                if (key != GameConst.BASE_INFO) {
                    console.log("\u4FDD\u5B58\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->");
                }
            }
        };
        GameInfoManager.prototype.saveInfoToNet = function (key, callF) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, new Promise(function (res, rej) {
                                var str = _this.encodeData(key);
                                var gameId = GameData.getInstance().gameId;
                                var openId = GameData.getInstance().userInfo.openId + "_" + key;
                                var msg = {
                                    msg_type: "8",
                                    msg_data: {
                                        "gameid": gameId,
                                        "saveid": openId,
                                        "saveinfo": str
                                    }
                                };
                                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                                    var code = e.msg_data.error_code;
                                    if (code == "0") {
                                        console.log("\u4FDD\u5B58\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->", e.msg_data);
                                    }
                                    else {
                                        var str_1 = CommonTool.errorCodeTable[code];
                                        console.warn("\u4FDD\u5B58\u952E\u4E3A " + key + " \u7684\u6570\u636E\u5931\u8D25\uFF1A" + str_1);
                                    }
                                    if (callF) {
                                        var obj = { code: code, key: key };
                                        callF(obj);
                                    }
                                    res();
                                }, function (e) { res(); });
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        GameInfoManager.prototype.selectAllGameInfo = function (canUseNet) {
            var _this = this;
            if (canUseNet === void 0) { canUseNet = false; }
            return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!canUseNet) return [3, 9];
                            return [4, this.selectSingleInfo(GameConst.BASE_INFO, false)];
                        case 1:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.SIGN_INFO, false)];
                        case 2:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.INVITE_INFO, false)];
                        case 3:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.FREE_INFO, false)];
                        case 4:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.LEVEL_INFO, false)];
                        case 5:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.COLOR_INFO, false)];
                        case 6:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.SKIN_INFO, false)];
                        case 7:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.BRUSH_INFO, false)];
                        case 8:
                            _a.sent();
                            return [3, 18];
                        case 9: return [4, this.selectInfo(GameConst.BASE_INFO)];
                        case 10:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.SIGN_INFO)];
                        case 11:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.INVITE_INFO)];
                        case 12:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.FREE_INFO)];
                        case 13:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.LEVEL_INFO)];
                        case 14:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.COLOR_INFO)];
                        case 15:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.SKIN_INFO)];
                        case 16:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.BRUSH_INFO)];
                        case 17:
                            _a.sent();
                            _a.label = 18;
                        case 18:
                            res();
                            return [2];
                    }
                });
            }); });
        };
        GameInfoManager.prototype.selectSingleInfo = function (key, isLoading) {
            var _this = this;
            if (isLoading === void 0) { isLoading = true; }
            return new Promise(function (res) {
                _this.selectInfoByNet(key, function (obj) {
                    if (obj.code == "0") {
                        res(obj.code);
                    }
                    else if (obj.code == "6" || obj.code == "25") {
                        _this.saveInfoToNet(key, function (obj1) {
                            if (obj1.code != "0") {
                                var str = CommonTool.errorCodeTable[obj1.code];
                            }
                            res(obj1.code);
                        });
                    }
                    else {
                        var str = CommonTool.errorCodeTable[obj.code];
                        res(obj.code);
                    }
                }, isLoading);
            });
        };
        GameInfoManager.prototype.deleteData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var i, msg_data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 1;
                            _a.label = 1;
                        case 1:
                            if (!(i <= 3)) return [3, 4];
                            msg_data = {
                                "msg_type": "18",
                                "msg_data": {
                                    "gameid": GameData.getInstance().gameId,
                                    "datatype": i + ""
                                }
                            };
                            return [4, HttpMgr.getInstance().sendHttp(GameData.getInstance().URL_DELETE_DATA, msg_data, function () {
                                    console.log("清理数据成功...");
                                })];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3, 1];
                        case 4: return [2];
                    }
                });
            });
        };
        GameInfoManager.prototype.decodeData = function (data, key) {
            var obj = JSON.parse(data);
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
        };
        GameInfoManager.prototype.encodeData = function (key) {
            var obj;
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
                console.log("\u7F16\u8BD1\u952E\u4E3A " + key + " \u7684\u6570\u636E ->", obj);
            }
            var str = JSON.stringify(obj);
            return str;
        };
        GameInfoManager.prototype.selectLevelDataById = function (level) {
            var onlykey = "Level_" + level + "_" + GameData.getInstance().userInfo.openId;
            var str = Laya.LocalStorage.getItem(onlykey);
            if (str) {
                return JSON.parse(str);
            }
            else {
                return null;
            }
        };
        GameInfoManager.prototype.saveLevelDataById = function (level, arr) {
            var onlykey = "Level_" + level + "_" + GameData.getInstance().userInfo.openId;
            var str = JSON.stringify(arr);
            Laya.LocalStorage.setItem(onlykey, str);
            console.log("\u4FDD\u5B58\u6210\u529F" + level);
        };
        return GameInfoManager;
    }());

    var MiniManeger = (function () {
        function MiniManeger() {
            this.hideTime = 0;
            this.showTime = 0;
            this.shareInfo = [];
            this.canShowBanner = true;
            this.maxMakeVideoTime = 120;
            this.moreGamesIsShow = false;
        }
        Object.defineProperty(MiniManeger, "instance", {
            get: function () {
                return MiniManeger.ins;
            },
            enumerable: true,
            configurable: true
        });
        MiniManeger.prototype.compareVersion = function (v1, v2) {
            var v1Arr = v1.split(".");
            var v2Arr = v2.split(".");
            var len = Math.max(v1Arr.length, v2Arr.length);
            while (v1Arr.length < len) {
                v1Arr.push("0");
            }
            while (v2Arr.length < len) {
                v2Arr.push("0");
            }
            for (var i = 0; i < len; i++) {
                var num1 = parseInt(v1Arr[i]);
                var num2 = parseInt(v2Arr[i]);
                if (num1 > num2) {
                    return 1;
                }
                else if (num1 < num2) {
                    return -1;
                }
            }
            return 0;
        };
        MiniManeger.prototype.initMiniGame = function () {
        };
        MiniManeger.prototype.loginGame = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2];
            }); });
        };
        MiniManeger.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2];
            }); });
        };
        MiniManeger.prototype.getToken = function () {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2];
            }); });
        };
        MiniManeger.prototype.getUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.userButtonSize = function (percentTop, pectendSize, percentLeft) {
        };
        MiniManeger.prototype.createUserButton = function (style, isFullScene) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.onShow = function (callBack) {
        };
        MiniManeger.prototype.onHide = function (callBack) {
        };
        MiniManeger.prototype.onAudioInterruptionBegin = function (callBack) {
        };
        MiniManeger.prototype.onAudioInterruptionEnd = function (callBack) {
        };
        MiniManeger.prototype.shareAppMessage = function (data) {
        };
        MiniManeger.prototype.playViderAd = function (data) {
            data.successFun && data.successFun();
        };
        MiniManeger.prototype.createBanner = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.showBannerAdSp = function () {
        };
        MiniManeger.prototype.showBannerAd = function (offset) {
        };
        MiniManeger.prototype.hideBanner = function () {
        };
        MiniManeger.prototype.showInsertAd = function (data) {
            data.closeFun && data.closeFun();
        };
        MiniManeger.prototype.showAppBoxAd = function (data) {
            data.closeFun && data.closeFun();
        };
        MiniManeger.prototype.vibrateShort = function (data) {
        };
        MiniManeger.prototype.vibrateLong = function () {
        };
        MiniManeger.prototype.adaptImgToClientRect = function (collec_img, stage) {
        };
        MiniManeger.prototype.sendDataToWxOpen = function (data) {
        };
        MiniManeger.prototype.removeOpenData = function (data) {
        };
        MiniManeger.prototype.addOpenWxData = function (data) {
        };
        MiniManeger.prototype.startGameRecord = function (data) { };
        MiniManeger.prototype.stopGameRecord = function (force) {
        };
        MiniManeger.prototype.shareGameVideo = function (data) { };
        MiniManeger.prototype.showMoreGamesModal = function (data) { };
        MiniManeger.prototype.showMoreGame = function (data) { };
        return MiniManeger;
    }());

    var ConfigManager = (function () {
        function ConfigManager() {
            this.randomVersion = "";
            this.URL = "resource/assets/configs/";
            if (!DeviceUtil.isNative()) {
                this.randomVersion = "?v=" + new Date().getTime();
            }
        }
        Object.defineProperty(ConfigManager, "instance", {
            get: function () {
                if (!ConfigManager.ins)
                    ConfigManager.ins = new ConfigManager();
                return ConfigManager.ins;
            },
            enumerable: true,
            configurable: true
        });
        ConfigManager.prototype.getSignConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.signConfig) return [3, 2];
                            _a = this;
                            return [4, this.loadCongigs(this.URL + "SignConfig.json")];
                        case 1:
                            _a.signConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.signConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getInviteConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.inviteConfig) return [3, 2];
                            _a = this;
                            return [4, this.loadCongigs(this.URL + "InviteConfig.json")];
                        case 1:
                            _a.inviteConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.inviteConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getFreePowerConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.freePowerConfig) return [3, 2];
                            _a = this;
                            return [4, this.loadCongigs(this.URL + "FreePowerConfig.json")];
                        case 1:
                            _a.freePowerConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.freePowerConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getPatternConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var configs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.patternConfig) return [3, 2];
                            return [4, this.loadCongigs(this.URL + "PatternConfig.json")];
                        case 1:
                            configs = (_a.sent());
                            configs.sort(function (a, b) {
                                return a.sort - b.sort;
                            });
                            this.patternConfig = this.arrToObjById(configs);
                            _a.label = 2;
                        case 2: return [2, this.patternConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getColorConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.colorConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, this.loadCongigs(this.URL + "ColorConfig.json")];
                        case 1:
                            _a.colorConfig = _b.apply(this, [_c.sent()]);
                            _c.label = 2;
                        case 2: return [2, this.colorConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getColorPriceConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.colorPriceConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, this.loadCongigs(this.URL + "ColorPriceConfig.json")];
                        case 1:
                            _a.colorPriceConfig = _b.apply(this, [_c.sent()]);
                            _c.label = 2;
                        case 2: return [2, this.colorPriceConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getVideoColorConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.videoColorConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, this.loadCongigs(this.URL + "VideoColorConfig.json")];
                        case 1:
                            _a.videoColorConfig = _b.apply(this, [_c.sent()]);
                            _c.label = 2;
                        case 2: return [2, this.videoColorConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getSkinConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.skinConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, this.loadCongigs(this.URL + "SkinConfig.json")];
                        case 1:
                            _a.skinConfig = _b.apply(this, [_c.sent()]);
                            _c.label = 2;
                        case 2: return [2, this.skinConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getBrushConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.brushConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, this.loadCongigs(this.URL + "BrushConfig.json")];
                        case 1:
                            _a.brushConfig = _b.apply(this, [_c.sent()]);
                            _c.label = 2;
                        case 2: return [2, this.brushConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getAniConf = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.aniConf) return [3, 2];
                            _a = this;
                            return [4, this.loadCongigs(this.URL + "game/type1/" + "aniConf.json")];
                        case 1:
                            _a.aniConf = _b.sent();
                            _b.label = 2;
                        case 2: return [2, this.aniConf];
                    }
                });
            });
        };
        ConfigManager.prototype.getLevelConf = function (level) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.loadCongigs(this.URL + "game/type1/" + "level" + level + ".json")];
                        case 1:
                            _a.levelConf = _b.sent();
                            return [2, this.levelConf];
                    }
                });
            });
        };
        ConfigManager.prototype.getLevelConf2 = function (level) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.loadCongigs(this.URL + "game/type2/" + "level" + level + ".json")];
                        case 1:
                            _a.levelConf2 = _b.sent();
                            return [2, this.levelConf2];
                    }
                });
            });
        };
        ConfigManager.prototype.initConfigs = function () {
            var _this = this;
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.initConfig()];
                        case 1:
                            _a.sent();
                            resolve();
                            return [2];
                    }
                });
            }); });
        };
        ConfigManager.prototype.initConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var conf;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.loadCongigs("configs/configs.json")];
                        case 1:
                            conf = _a.sent();
                            GameData.getInstance().defaultConfigs = conf.gameConf;
                            MiniManeger.instance.shareInfo = conf.shareInfo;
                            return [2];
                    }
                });
            });
        };
        ConfigManager.prototype.loadCongigs = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                var jsonUrl = url;
                Laya.loader.load(jsonUrl + _this.randomVersion, Laya.Handler.create(_this, function (res) {
                    resolve(Utils.copy(res));
                }));
            });
        };
        ConfigManager.prototype.arrToObjById = function (arr) {
            var obj = {};
            if (arr == null)
                return obj;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i].id) {
                    obj[arr[i].id] = arr[i];
                }
                else if (arr[i].ID) {
                    obj[arr[i].ID] = arr[i];
                }
                else if (arr[i].itemid) {
                    obj[arr[i].itemid] = arr[i];
                }
            }
            return obj;
        };
        return ConfigManager;
    }());

    var SignManager = (function () {
        function SignManager() {
        }
        Object.defineProperty(SignManager, "instance", {
            get: function () {
                if (SignManager.ins == null) {
                    SignManager.ins = new SignManager();
                }
                return SignManager.ins;
            },
            enumerable: true,
            configurable: true
        });
        SignManager.prototype.getSignDataUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var signConfig, signIn, curCanSign, len, dataArr, i, sign, canSign, signed, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getSignConfig()];
                        case 1:
                            signConfig = _a.sent();
                            signIn = GameData.getInstance().signIn;
                            curCanSign = this.checkSign();
                            len = signConfig.length;
                            if (curCanSign) {
                                if (signIn.total_count >= len) {
                                    signIn.total_count = 0;
                                }
                                GameData.getInstance().signIn = signIn;
                            }
                            dataArr = [];
                            for (i = 0; i < len; i++) {
                                sign = signConfig[i];
                                canSign = false;
                                signed = false;
                                if (i == signIn.total_count && curCanSign)
                                    canSign = true;
                                if (i < signIn.total_count)
                                    signed = true;
                                data = new localData.SignData();
                                data.id = sign.id;
                                data.name = sign.name;
                                data.reward = sign.reward;
                                data.canSign = canSign;
                                data.isSigned = signed;
                                dataArr.push(data);
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        SignManager.prototype.checkSign = function () {
            var signIn = GameData.getInstance().signIn;
            var lastTime = signIn.timeStamp;
            var currTime = (new Date()).getTime();
            var isOneDay = Utils.judgeIsOnTheSameDay(lastTime, currTime);
            return !isOneDay;
        };
        SignManager.prototype.updateSignDay = function () {
            GameData.getInstance().signIn.timeStamp += 24 * 3600 * 1000;
            GameInfoManager.getInstance().saveInfo(GameConst.SIGN_INFO);
        };
        return SignManager;
    }());
    window["SignManager"] = SignManager;

    var PatternMgr = (function () {
        function PatternMgr() {
        }
        Object.defineProperty(PatternMgr, "instance", {
            get: function () {
                if (!PatternMgr.ins)
                    PatternMgr.ins = new PatternMgr();
                return PatternMgr.ins;
            },
            enumerable: true,
            configurable: true
        });
        PatternMgr.prototype.getLevelData2Uglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var configs, config, netData, dataArr, i, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getPatternConfig()];
                        case 1:
                            configs = _a.sent();
                            config = configs["103"];
                            netData = GameData.getInstance().level["103"];
                            dataArr = [];
                            for (i = 0; i < config.maxnum; i++) {
                                data = new localData.LevelData2();
                                data.id = i + 1;
                                data.unlock = data.id <= netData.curLv;
                                data.isCur = data.id == netData.passLv + 1;
                                dataArr.push(data);
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        PatternMgr.prototype.getPatternConfBySort = function (sort) {
            return __awaiter(this, void 0, void 0, function () {
                var configs, key, element;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getPatternConfig()];
                        case 1:
                            configs = _a.sent();
                            for (key in configs) {
                                element = configs[key];
                                if (element.sort == sort) {
                                    return [2, element];
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        PatternMgr.prototype.getTotLevelUglify = function () {
            var data = GameData.getInstance().level;
            var num = 0;
            for (var key in data) {
                if (data[key].passLv)
                    num += data[key].passLv;
            }
            return num;
        };
        PatternMgr.prototype.unlockPatternUglify = function (curPattern, curLv) {
            return __awaiter(this, void 0, void 0, function () {
                var configs, config, nextP, pattern;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getPatternConfig()];
                        case 1:
                            configs = _a.sent();
                            config = configs[curPattern];
                            if (curLv < config.openLN)
                                return [2];
                            return [4, this.getPatternConfBySort(config.sort + 1)];
                        case 2:
                            nextP = _a.sent();
                            if (!nextP)
                                return [2];
                            pattern = nextP.ID;
                            if (GameData.getInstance().level[pattern])
                                return [2];
                            switch (pattern) {
                                case 101:
                                    GameData.getInstance().level[pattern] = { passLv: 0, curLv: 1 };
                                    break;
                                case 102:
                                    GameData.getInstance().level[pattern] = { passLv: 0, curLv: 1, lv: { 1: { star: 0 } } };
                                    break;
                                case 103:
                                    GameData.getInstance().level[pattern] = { passLv: 0, curLv: 1 };
                                    break;
                            }
                            return [2];
                    }
                });
            });
        };
        PatternMgr.prototype.updateLevelUglify = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var configs, config, next, pa1, pa2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getPatternConfig()];
                        case 1:
                            configs = _a.sent();
                            config = configs[data.pattern];
                            next = data.curLv + 1;
                            if (next > config.maxnum) {
                                next = config.maxnum;
                            }
                            switch (data.pattern) {
                                case 101:
                                case 103:
                                    pa1 = GameData.getInstance().level[data.pattern];
                                    if (data.curLv > pa1.passLv)
                                        GameData.getInstance().level[data.pattern] = { passLv: data.curLv, curLv: next };
                                    break;
                                case 102:
                                    pa2 = GameData.getInstance().level[data.pattern];
                                    pa2.passLv = data.curLv;
                                    pa2.curLv = next;
                                    if (pa2.lv[data.curLv]) {
                                        if (data.star > pa2.lv[data.curLv].star)
                                            pa2.lv[data.curLv].star = data.star;
                                    }
                                    else {
                                        pa2.lv[data.curLv] = { star: data.star };
                                    }
                                    if (!pa2.lv[next])
                                        pa2.lv[next] = { star: 0 };
                                    GameData.getInstance().level[data.pattern] = pa2;
                                    break;
                            }
                            return [4, this.unlockPatternUglify(data.pattern, data.curLv)];
                        case 2:
                            _a.sent();
                            GameInfoManager.getInstance().saveInfo(GameConst.LEVEL_INFO);
                            return [2, next];
                    }
                });
            });
        };
        return PatternMgr;
    }());
    window['PatternMgr'] = PatternMgr;

    var PowerMgr = (function () {
        function PowerMgr() {
            this.powerLimit = GameData.getInstance().defaultConfigs.rePowerLimit;
            this.powerRestoreTime = GameData.getInstance().defaultConfigs.rePowerCD * 1000;
        }
        Object.defineProperty(PowerMgr, "instance", {
            get: function () {
                if (!PowerMgr.ins)
                    PowerMgr.ins = new PowerMgr();
                return PowerMgr.ins;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PowerMgr.prototype, "power", {
            get: function () {
                return GameData.getInstance().playerData.power;
            },
            set: function (num) {
                GameData.getInstance().playerData.power = num;
                if (GameData.getInstance().playerData.power > GameData.getInstance().defaultConfigs.maxPower) {
                    GameData.getInstance().playerData.power = GameData.getInstance().defaultConfigs.maxPower;
                }
            },
            enumerable: true,
            configurable: true
        });
        PowerMgr.prototype.spaceTimeRestorePowerUglify = function () {
            var showTime = 0;
            if (this.power >= this.powerLimit) {
                GameData.getInstance().playerData.lastPowerTime = 0;
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                return showTime;
            }
            else {
                var powerTime = GameData.getInstance().playerData.lastPowerTime;
                if (powerTime != null && powerTime != 0) {
                    var nowTime = new Date().getTime();
                    var disTime = nowTime - powerTime;
                    if (disTime >= 0) {
                        var count = Math.floor(disTime / this.powerRestoreTime);
                        var diffTime = disTime % this.powerRestoreTime;
                        if (count > 0) {
                            this.power += count;
                        }
                        if (this.power >= this.powerLimit) {
                            console.warn("体力达自然恢复上限！");
                            GameData.getInstance().playerData.lastPowerTime = 0;
                        }
                        else {
                            showTime = this.powerRestoreTime - diffTime;
                        }
                    }
                }
                else {
                    showTime = this.powerRestoreTime;
                    GameData.getInstance().playerData.lastPowerTime = new Date().getTime();
                }
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                return showTime;
            }
        };
        PowerMgr.prototype.changePowerUglify = function (data) {
            var count = data.count;
            var isNatural = data.isNatural;
            if (count < 0) {
                if (this.power + count < 0) {
                    EventMgr.getInstance().sendEvent(GameEvent.OPEN_BUY_PROP, { type: 1 });
                    return;
                }
                else {
                    data.success && data.success();
                    if (this.power < this.powerLimit) {
                        this.power += count;
                    }
                    else {
                        if (this.power + count < this.powerLimit) {
                            console.warn("开始自然恢复");
                            this.power += count;
                            GameData.getInstance().playerData.lastPowerTime = new Date().getTime();
                            EventMgr.getInstance().sendEvent(GameEvent.POWER_REPLY_STATUS, 2);
                        }
                        else {
                            this.power += count;
                        }
                    }
                }
            }
            else {
                this.power += count;
                if (this.power >= this.powerLimit) {
                    console.warn("体力达自然恢复上限！");
                    GameData.getInstance().playerData.lastPowerTime = 0;
                    EventMgr.getInstance().sendEvent(GameEvent.POWER_REPLY_STATUS, 1);
                }
                else {
                    if (isNatural) {
                        GameData.getInstance().playerData.lastPowerTime = new Date().getTime();
                    }
                }
            }
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
        };
        PowerMgr.prototype.checkPowerIsOrNotEnoughUglify = function (value) {
            var isEnough = value <= this.power ? true : false;
            return isEnough;
        };
        PowerMgr.prototype.getFreePowerDataUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var configs, netData, dataArr, totLv, i, len, element, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getFreePowerConfig()];
                        case 1:
                            configs = _a.sent();
                            netData = GameData.getInstance().freePower;
                            dataArr = [];
                            totLv = PatternMgr.instance.getTotLevelUglify();
                            for (i = 0, len = configs.length; i < len; i++) {
                                element = configs[i];
                                data = new localData.FreePowerData();
                                data.id = element.id;
                                data.name = element.name;
                                data.rewardNum = element.reward;
                                data.icon = element.icon;
                                data.param = element.param;
                                data.isGeted = !!netData[data.id];
                                if (data.id == 1) {
                                    data.canGet = !SignManager.instance.checkSign();
                                }
                                else {
                                    data.canGet = totLv >= element.param;
                                }
                                dataArr.push(data);
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        return PowerMgr;
    }());

    var TopBar = (function (_super) {
        __extends(TopBar, _super);
        function TopBar() {
            var _this = _super.call(this) || this;
            _this.className_key = "TopBar";
            _this.name = "TopBar";
            _this.skin = "skins/uiView/TopBar.json";
            return _this;
        }
        TopBar.prototype.adaptationStage = function () {
            this.size(580, 77);
        };
        TopBar.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        TopBar.prototype.addEvent = function () {
            this.btn_power.on(Laya.Event.CLICK, this, this.onPower);
            this.btn_gold.on(Laya.Event.CLICK, this, this.onGold);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_TOP, this, this.refresh);
            EventMgr.getInstance().addEvent(GameEvent.POWER_REPLY_STATUS, this, this.updataShow);
            EventMgr.getInstance().addEvent(GameEvent.ONSHOW, this, this.updatePower);
        };
        TopBar.prototype.initView = function () {
            this.pos(30, 30);
            if (DeviceUtil.getIsIphoneX())
                this.y += GameData.getInstance().fullScreenOffSet;
            this.updatePower();
            this.refresh();
        };
        TopBar.prototype.refresh = function () {
            this.lab_power.text = PowerMgr.instance.power + "/" + GameData.getInstance().defaultConfigs.rePowerLimit;
            this.lab_gold.text = GameData.getInstance().playerData.gold + "";
        };
        TopBar.prototype.updatePower = function () {
            var surTime = PowerMgr.instance.spaceTimeRestorePowerUglify();
            this.surplusTime = Math.floor(surTime / 1000);
            console.log("updatePower", this.surplusTime);
            if (this.surplusTime) {
                this.lab_time.text = Utils.formatTime(this.surplusTime);
                this.downTime();
            }
            else {
                Laya.timer.clearAll(this);
                this.lab_time.text = "";
            }
        };
        TopBar.prototype.downTime = function () {
            var _this = this;
            Laya.timer.clearAll(this);
            Laya.timer.loop(1000, this, function () {
                _this.surplusTime--;
                if (_this.surplusTime) {
                    _this.lab_time.text = Utils.formatTime(_this.surplusTime);
                }
                else {
                    _this.lab_time.text = "";
                    Laya.timer.clearAll(_this);
                    PowerMgr.instance.changePowerUglify({ count: 1, isNatural: true });
                    _this.updatePower();
                }
            });
        };
        TopBar.prototype.updataShow = function (type) {
            if (type == 1) {
                this.lab_time.text = "";
                Laya.timer.clearAll(this);
            }
            else {
                this.updatePower();
            }
        };
        TopBar.prototype.onPower = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_BUY_PROP, { type: 1 });
        };
        TopBar.prototype.onGold = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_BUY_PROP, { type: 2 });
        };
        TopBar.prototype.removeEvent = function () {
            this.btn_power.off(Laya.Event.CLICK, this, this.onPower);
            this.btn_gold.off(Laya.Event.CLICK, this, this.onGold);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_TOP, this, this.refresh);
            EventMgr.getInstance().removeEvent(GameEvent.POWER_REPLY_STATUS, this, this.updataShow);
            EventMgr.getInstance().removeEvent(GameEvent.ONSHOW, this, this.updatePower);
        };
        TopBar.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return TopBar;
    }(BaseSceneUISkin));

    var PopManager = (function () {
        function PopManager() {
            this.isPoping = false;
            this.popArray = [];
        }
        Object.defineProperty(PopManager, "instance", {
            get: function () {
                if (!this.ins) {
                    this.ins = new PopManager();
                }
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        PopManager.prototype.showPopView = function (data) {
            if (data != null) {
                this.popArray.push(data);
            }
            if (this.isPoping) {
                return;
            }
            if (this.popArray.length == 0)
                return;
            var showData = this.popArray.shift();
            this.isPoping = true;
            ViewManager.getInstance().showView(showData.className, showData.data);
        };
        return PopManager;
    }());

    var PopBaseScene = (function (_super) {
        __extends(PopBaseScene, _super);
        function PopBaseScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'PopBaseScene';
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this.isResume = true;
            return _this;
        }
        PopBaseScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.showBackType = null;
            this.initView();
            this.addEvent();
        };
        PopBaseScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) ;
        };
        PopBaseScene.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        PopBaseScene.prototype.pauseTime = function () {
            EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        };
        PopBaseScene.prototype.initView = function () {
        };
        PopBaseScene.prototype.addEvent = function () {
        };
        PopBaseScene.prototype.resumeTime = function () {
            this.isResume && EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
        };
        PopBaseScene.prototype.removeSelf = function () {
            Laya.timer.clearAll(this);
            var node = _super.prototype.removeSelf.call(this);
            return node;
        };
        PopBaseScene.prototype.removeEvent = function () {
        };
        PopBaseScene.prototype.enableView = function (enable) {
            this.mouseEnabled = enable;
            ViewManager.getInstance().popLayer["mouseThrough"] = enable;
        };
        PopBaseScene.prototype.showCloseBtn = function (target) {
            target.visible = false;
            Laya.timer.once(3000, this, function () {
                target.visible = true;
            });
        };
        PopBaseScene.prototype.showBanner = function () {
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isMZMiniGame()) {
                var phone = MiniManeger.instance.systemInfo;
                var offset = { w: phone.screenWidth / 2, h: phone.screenHeight };
                MiniManeger.instance.showBannerAd(offset);
            }
        };
        PopBaseScene.prototype.hideBanner = function () {
            MiniManeger.instance.hideBanner();
        };
        return PopBaseScene;
    }(BaseSceneUISkinPopView));

    var PopLastScene = (function (_super) {
        __extends(PopLastScene, _super);
        function PopLastScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "PopScene";
            return _this;
        }
        PopLastScene.prototype.removeSelf = function () {
            var node = _super.prototype.removeSelf.call(this);
            PopManager.instance.isPoping = false;
            PopManager.instance.showPopView();
            return node;
        };
        return PopLastScene;
    }(PopBaseScene));

    var Prop;
    (function (Prop) {
        Prop[Prop["Power"] = 1001] = "Power";
        Prop[Prop["Gold"] = 1002] = "Gold";
    })(Prop || (Prop = {}));
    var GameMgr = (function () {
        function GameMgr() {
            this.autoShowSign = false;
            this.topBarIsShow = true;
            this.bannerIsShow = true;
        }
        Object.defineProperty(GameMgr, "instance", {
            get: function () {
                if (!GameMgr.ins)
                    GameMgr.ins = new GameMgr();
                return GameMgr.ins;
            },
            enumerable: true,
            configurable: true
        });
        GameMgr.prototype.initData = function () {
            return new Promise(function (resolve) {
                GameData.getInstance().playerData.loginCount += 1;
                var curTime = (new Date()).getTime();
                var isOneDay = Utils.judgeIsOnTheSameDay(GameData.getInstance().playerData.loginTime, curTime);
                if (!isOneDay) {
                    var canSign = SignManager.instance.checkSign();
                    GameData.getInstance().playerData.loginTime = curTime;
                    GameData.getInstance().freePower[1] = false;
                    GameData.getInstance().playerData.shareVideoCount = 0;
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                }
                resolve();
            });
        };
        GameMgr.prototype.updateBaseData = function (id, value) {
            switch (id) {
                case Prop.Gold:
                    GameData.getInstance().playerData.gold += value;
                    if (GameData.getInstance().playerData.gold >= Number.MAX_VALUE) {
                        GameData.getInstance().playerData.gold = Number.MAX_VALUE;
                    }
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                    break;
                case Prop.Power:
                    PowerMgr.instance.changePowerUglify({ count: value });
                    break;
                default:
                    console.warn("参数错误 ->", id);
            }
        };
        GameMgr.prototype.getIconUrlById = function (id) {
            if (id == Prop.Power) {
                return "resource/assets/imgs/public/mianinterface_icon_1.png";
            }
            else if (id == Prop.Gold) {
                return "resource/assets/imgs/public/mianinterface_icon_2.png";
            }
            return "";
        };
        return GameMgr;
    }());
    window['GameMgr'] = GameMgr;

    var BuyPropScene = (function (_super) {
        __extends(BuyPropScene, _super);
        function BuyPropScene(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "BuyPropScene";
            _this.viewData_ = data_;
            _this.skin = "skins/uiView/pop/BuyPropView.json";
            return _this;
        }
        BuyPropScene.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
            this.btn_get.off(Laya.Event.CLICK, this, this.onGetUglify);
        };
        BuyPropScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
        };
        BuyPropScene.prototype.showInsertAd = function () {
            MiniManeger.instance.showInsertAd({
                successFun: function () {
                },
                closeFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        BuyPropScene.prototype.onGetUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            var self = this;
            self.grp_center.mouseEnabled = false;
            if (GameData.getInstance().videoOpen || DeviceUtil.isMZMiniGame()) {
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        self.getAwardUglify();
                    },
                    failFun: function () {
                        self.grp_center.mouseEnabled = true;
                    },
                    errorFun: function () {
                        self.grp_center.mouseEnabled = true;
                    }
                });
            }
            else {
                MiniManeger.instance.shareAppMessage({
                    sucFun: function () {
                        self.getAwardUglify();
                    },
                    failFun: function () {
                        self.grp_center.mouseEnabled = true;
                    }
                });
            }
        };
        BuyPropScene.prototype.getAwardUglify = function () {
            var data = this.viewData_;
            if (data.type == 1) {
                GameMgr.instance.updateBaseData(Prop.Power, GameData.getInstance().defaultConfigs.videoBuyPower);
            }
            else {
                GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.videoBuyGold);
            }
            this.grp_center.mouseEnabled = true;
        };
        BuyPropScene.prototype.onCloseUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
            EventMgr.getInstance().sendEvent(GameEvent.ENABLED_TOP, true);
            this.removeSelf();
        };
        BuyPropScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            if (GameData.getInstance().videoOpen) {
                this.btn_get.getChildByName("icon").skin = "resource/assets/imgs/public/game_icon_4.png";
            }
            else {
                this.btn_get.getChildByName("icon").skin = "resource/assets/imgs/public/settlement_icon_5.png";
            }
        };
        BuyPropScene.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
            this.btn_get.on(Laya.Event.CLICK, this, this.onGetUglify);
        };
        BuyPropScene.prototype.initView = function () {
            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame())
                this.showInsertAd();
            this.showCloseBtn(this.btn_close);
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
            EventMgr.getInstance().sendEvent(GameEvent.ENABLED_TOP, false);
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            if (data.type == 1) {
                this.img_bg.skin = "resource/assets/imgs/home/main/buy_baseboard_1.png";
                this.lab_title.text = "来点体力吧！";
                this.img_icon.skin = "resource/assets/imgs/public/mianinterface_icon_1.png";
                this.lab_num.text = "+" + GameData.getInstance().defaultConfigs.videoBuyPower;
            }
            else {
                this.img_bg.skin = "resource/assets/imgs/home/main/buy_baseboard_2.png";
                this.lab_title.text = "来点金币吧！";
                this.img_icon.skin = "resource/assets/imgs/public/mianinterface_icon_2.png";
                this.lab_num.text = "+" + GameData.getInstance().defaultConfigs.videoBuyGold;
            }
        };
        return BuyPropScene;
    }(PopLastScene));

    var SignItem = (function (_super) {
        __extends(SignItem, _super);
        function SignItem(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "SignItem";
            _this.viewData_ = data;
            _this.skin = "skins/uiView/sign/SignItem.json";
            return _this;
        }
        SignItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.viewData_ = null;
        };
        SignItem.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        SignItem.prototype.initView = function () {
            var _this = this;
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            this.img_signed.visible = data.isSigned;
            this.lab_day.text = data.name;
            this.box_award1.visible = this.box_award2.visible = false;
            this.box_can.visible = data.canSign;
            if (data.id < 7) {
                this.size(255, 290);
                this.box_can.size(210, 290);
                this.img_bg.skin = data.canSign ? "resource/assets/imgs/home/sign/sign_baseboard_4.png" : "resource/assets/imgs/home/sign/sign_baseboard_3.png";
                this.box_award1.visible = true;
                var img_icon = this.box_award1.getChildByName("img_icon");
                img_icon.skin = GameMgr.instance.getIconUrlById(data.reward[0].type);
                this.box_award1.getChildByName("lab_num").text = "+" + data.reward[0].num;
            }
            else {
                this.size(790, 290);
                this.box_can.size(550, 290);
                this.img_bg.skin = data.canSign ? "resource/assets/imgs/home/sign/sign_baseboard_6.png" : "resource/assets/imgs/home/sign/sign_baseboard_5.png";
                this.box_award2.visible = true;
                data.reward.forEach(function (v, i) {
                    var img_icon = _this.box_award2.getChildByName("img_icon" + (i + 1));
                    var lab_num = _this.box_award2.getChildByName("lab_num" + (i + 1));
                    img_icon.skin = GameMgr.instance.getIconUrlById(v.type);
                    lab_num.text = "+" + v.num;
                });
            }
        };
        SignItem.prototype.adaptationStage = function () {
        };
        SignItem.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
            }
        };
        return SignItem;
    }(BaseSceneUISkin));

    var AnimationManager = (function () {
        function AnimationManager() {
        }
        Object.defineProperty(AnimationManager, "instance", {
            get: function () {
                if (AnimationManager.ins == null) {
                    AnimationManager.ins = new AnimationManager();
                }
                return AnimationManager.ins;
            },
            enumerable: true,
            configurable: true
        });
        AnimationManager.prototype.pendulumAni = function (target, caller, range, duration) {
            var ani = function () {
                Laya.Tween.to(target, { rotation: range }, duration, null, Laya.Handler.create(caller, function () {
                    Laya.Tween.to(target, { rotation: range * -1 }, duration * 2, null, Laya.Handler.create(caller, function () {
                        Laya.Tween.to(target, { rotation: 0 }, duration, null, Laya.Handler.create(caller, function () {
                            ani();
                        }));
                    }));
                }));
            };
            ani();
        };
        AnimationManager.prototype.runaroundTween = function (target, caller, duration) {
            if (duration === void 0) { duration = 2000; }
            target.visible = true;
            target.rotation = 0;
            var tw = Laya.Tween.to(target, { rotation: 360 }, duration, null, null, 0, false, false);
            tw.repeat = 0;
        };
        AnimationManager.prototype.btnScaleAniLoop = function (target, caller, startScale, endScale, duration, ease) {
            if (startScale === void 0) { startScale = 1; }
            if (endScale === void 0) { endScale = 1.2; }
            if (duration === void 0) { duration = 500; }
            target.scale(startScale, startScale);
            var fun = function () {
                Laya.Tween.to(target, { scaleX: endScale, scaleY: endScale }, duration, ease, Laya.Handler.create(caller, function () {
                    Laya.Tween.to(target, { scaleX: startScale, scaleY: startScale }, duration, ease, Laya.Handler.create(caller, function () {
                        fun();
                    }));
                }));
            };
            fun();
        };
        AnimationManager.prototype.tipPointShake = function (target, play) {
            var _this = this;
            if (play) {
                Laya.Tween.clearAll(target);
                Laya.timer.clearAll(target);
                target.rotation = 0;
                var ani_1 = function (num) {
                    Laya.Tween.to(target, { rotation: 10 }, 100, null, Laya.Handler.create(_this, function () {
                        Laya.Tween.to(target, { rotation: -10 }, 200, null, Laya.Handler.create(_this, function () {
                            Laya.Tween.to(target, { rotation: 0 }, 100, null, Laya.Handler.create(_this, function () {
                                num--;
                                if (num) {
                                    ani_1(num);
                                }
                                else {
                                    var time = Utils.getRandom(1000, 3000);
                                    Laya.timer.once(time, target, function () { ani_1(2); });
                                }
                            }));
                        }));
                    }));
                };
                var delay = Utils.getRandom(500, 1000);
                Laya.timer.once(delay, target, function () { ani_1(2); });
            }
            else {
                Laya.timer.clearAll(target);
                Laya.Tween.clearAll(target);
                target.rotation = 0;
            }
        };
        AnimationManager.prototype.scaleTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.visible = true;
            target.scale(0.8, 0.8);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.creatBoonAnimation = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                var boomAnimation = new Laya.Skeleton();
                boomAnimation.load(url, Laya.Handler.create(_this, function () {
                    if (!boomAnimation.player) {
                        resolve(null);
                    }
                    else {
                        boomAnimation.player.playbackRate = 1;
                        resolve(boomAnimation);
                    }
                }));
            });
        };
        AnimationManager.prototype.getAtlasAnimation = function (url, fex) {
            url = url + fex;
            return new Promise(function (resolve) {
                var roleAni = new Laya.Animation();
                roleAni.loadAtlas(url, Laya.Handler.create(null, function () {
                    resolve(roleAni);
                }));
            });
        };
        AnimationManager.prototype.scaleBTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.scale(1.1, 1.1);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.show2dBoonAnimation = function (url, dbBox, index, loop, rate, x, y, rotation) {
            var _this = this;
            return new Promise(function (resolve) {
                var self = _this;
                dbBox.removeChildren();
                var boomAnimation = new Laya.Skeleton();
                boomAnimation.load(url, Laya.Handler.create(self, function () {
                    if (!boomAnimation.player) {
                        resolve();
                        return;
                    }
                    boomAnimation.player.playbackRate = rate;
                    boomAnimation.player.once(Laya.Event.STOPPED, self, function () {
                        resolve();
                    });
                    boomAnimation.scale(2, 2);
                    dbBox.addChild(boomAnimation);
                    boomAnimation.x = x;
                    boomAnimation.y = y;
                    boomAnimation.rotation = rotation;
                    boomAnimation.play(index, loop);
                }));
            });
        };
        AnimationManager.prototype.displayTwinkle = function (target, prefix, caller) {
            var index = 1;
            Laya.timer.loop(500, caller, function () {
                target.skin = prefix + index + ".png";
                index = index == 1 ? 2 : 1;
            });
        };
        AnimationManager.prototype.frameAni = function (target, prefix, caller, frameNum, time) {
            if (time === void 0) { time = 100; }
            var index = 1;
            Laya.timer.loop(time, caller, function () {
                target.skin = prefix + index + ".png";
                index++;
                if (index > frameNum)
                    index = 1;
            });
        };
        return AnimationManager;
    }());

    var SignScene = (function (_super) {
        __extends(SignScene, _super);
        function SignScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "SignScene";
            _this.pointArr = [[0, 0], [260, 0], [520, 0], [0, 303], [260, 303], [520, 303], [0, 603]];
            _this.signData = [];
            _this.skin = "skins/uiView/sign/SignView.json";
            return _this;
        }
        SignScene.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
            this.btn_sign.off(Laya.Event.CLICK, this, this.onSignUglify);
            this.box_double.off(Laya.Event.CLICK, this, this.onSelectUglify);
        };
        SignScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.Tween.clearAll(this.btn_sign);
        };
        SignScene.prototype.refreshStateUglify = function () {
            var curCanSign = SignManager.instance.checkSign();
            if (curCanSign) {
                this.btn_sign.visible = true;
                this.lab_tip.visible = false;
                if (GameData.getInstance().isConVersion || !GameData.getInstance().videoOpen) {
                    this.showDoubleUglify(false);
                    this.box_double.visible = false;
                }
                else {
                    this.box_double.visible = true;
                    this.showDoubleUglify(GameData.getInstance().selectDoule);
                    AnimationManager.instance.btnScaleAniLoop(this.btn_sign, this);
                }
            }
            else {
                this.btn_sign.visible = this.box_double.visible = false;
                this.lab_tip.visible = true;
                Laya.Tween.clearAll(this.btn_sign);
            }
        };
        SignScene.prototype.refreshSignUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var signData, box_sign, count, i, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, SignManager.instance.getSignDataUglify()];
                        case 1:
                            signData = _a.sent();
                            this.signData = signData;
                            box_sign = this.box_sign;
                            count = signData.length;
                            for (i = 0; i < count; i++) {
                                item = this.box_sign.getChildAt(i);
                                if (item) {
                                    item.setData(this.signData[i]);
                                }
                                else {
                                    item = new SignItem(this.signData[i]);
                                    item.x = this.pointArr[i][0];
                                    item.y = this.pointArr[i][1];
                                    this.box_sign.addChild(item);
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        SignScene.prototype.showDoubleUglify = function (show) {
            this.img_select.visible = show;
            var desc = this.btn_sign.getChildByName("desc");
            desc.text = show ? "双倍奖励" : "单倍奖励";
        };
        SignScene.prototype.showInsertAd = function () {
            MiniManeger.instance.showInsertAd({
                successFun: function () {
                },
                closeFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        SignScene.prototype.onSignUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            var self = this;
            if (self.img_select.visible) {
                self.grp_center.mouseEnabled = false;
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        self.getAwardUglify(2);
                    },
                    failFun: function () {
                        self.grp_center.mouseEnabled = true;
                    },
                    errorFun: function () {
                        self.grp_center.mouseEnabled = true;
                    }
                });
            }
            else {
                self.getAwardUglify(1);
            }
        };
        SignScene.prototype.getAwardUglify = function (mul) {
            if (mul === void 0) { mul = 1; }
            for (var index = 0; index < this.signData.length; index++) {
                var element = this.signData[index];
                if (element.canSign) {
                    var data = element;
                    data.reward.forEach(function (v) {
                        var awardId = v.type;
                        if (awardId < 10000) {
                            GameMgr.instance.updateBaseData(awardId, v.num * mul);
                        }
                    });
                    GameData.getInstance().signIn.timeStamp = (new Date()).getTime();
                    GameData.getInstance().signIn.total_count += 1;
                    GameInfoManager.getInstance().saveInfo(GameConst.SIGN_INFO);
                    break;
                }
            }
            this.initView();
            this.grp_center.mouseEnabled = true;
        };
        SignScene.prototype.onSelectUglify = function () {
            if (this.img_select.visible) {
                this.showDoubleUglify(false);
            }
            else {
                this.showDoubleUglify(true);
            }
        };
        SignScene.prototype.onCloseUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        SignScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        SignScene.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
            this.btn_sign.on(Laya.Event.CLICK, this, this.onSignUglify);
            this.box_double.on(Laya.Event.CLICK, this, this.onSelectUglify);
        };
        SignScene.prototype.initView = function () {
            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame())
                this.showInsertAd();
            this.showCloseBtn(this.btn_close);
            this.refreshSignUglify();
            this.refreshStateUglify();
        };
        return SignScene;
    }(PopBaseScene));

    var AwardScene = (function (_super) {
        __extends(AwardScene, _super);
        function AwardScene(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "AwardScene";
            _this.clickCount = 0;
            _this.flag = false;
            _this.viewData_ = data_;
            _this.skin = "skins/uiView/pop/AwardView.json";
            return _this;
        }
        AwardScene.prototype.removeEvent = function () {
            this.btn_get.off(Laya.Event.CLICK, this, this.onVideoUglify);
            this.lab_get.off(Laya.Event.CLICK, this, this.onGetUglify);
            this.btn_open.off(Laya.Event.CLICK, this, this.onOpenUglify);
        };
        AwardScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_BOX, this.box_moreGame);
            if (this.viewData_.type == 1) ;
            this.viewData_ = null;
            Laya.Tween.clearAll(this.img_light);
            Laya.Tween.clearAll(this.btn_get);
            Laya.Tween.clearAll(this.btn_open);
        };
        AwardScene.prototype.onVideoUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            var self = this;
            self.grp_center.mouseEnabled = false;
            if (GameData.getInstance().videoOpen) {
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        self.getAwardUglify(2);
                    },
                    failFun: function () {
                        self.grp_center.mouseEnabled = true;
                    },
                    errorFun: function () {
                        self.grp_center.mouseEnabled = true;
                    }
                });
            }
            else {
                MiniManeger.instance.shareAppMessage({
                    sucFun: function () {
                        self.getAwardUglify(2);
                    },
                    failFun: function () {
                        self.grp_center.mouseEnabled = true;
                    }
                });
            }
        };
        AwardScene.prototype.onGetUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.getAwardUglify(1);
        };
        AwardScene.prototype.getAwardUglify = function (mult) {
            var data = this.viewData_;
            if (data.type == 1) {
                GameMgr.instance.updateBaseData(data.data.id, data.data.num * mult);
                if (data.data && data.data.fun)
                    data.data.fun();
            }
            this.grp_center.mouseEnabled = true;
            this.removeSelf();
        };
        AwardScene.prototype.onOpenUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            Laya.timer.clear(this, this.onTimerUglify);
            this.clickCount++;
            this.progressUglify();
            var viewData = this.viewData_.data;
            if (this.clickCount >= 10) {
                this.btn_open.mouseEnabled = false;
                this.btn_open.visible = false;
                Laya.timer.once(GameData.getInstance().bagBtnDelay, this, function () {
                    _this.removeSelf();
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 1,
                        data: {
                            id: Prop.Power,
                            num: GameData.getInstance().defaultConfigs.powerBag,
                            fun: viewData.fun,
                            flag: true
                        }
                    });
                });
            }
            else {
                Laya.timer.loop(700, this, this.onTimerUglify);
                if (this.clickCount == 6) {
                    if (this.flag) {
                        this.btn_open.visible = false;
                        if (DeviceUtil.isMZMiniGame()) {
                            MiniManeger.instance.showBannerAdSp();
                        }
                        else {
                            this.showBanner();
                            GameMgr.instance.bannerIsShow = true;
                        }
                        Laya.Tween.to(this.btn_open, { bottom: 425 }, 500, null, Laya.Handler.create(this, function () {
                            _this.btn_open.visible = true;
                        }));
                    }
                    this.flag = false;
                }
            }
        };
        AwardScene.prototype.onTimerUglify = function () {
            this.clickCount--;
            this.progressUglify();
            if (this.clickCount <= 0) {
                Laya.timer.clear(this, this.onTimerUglify);
            }
        };
        AwardScene.prototype.progressUglify = function () {
            this.img_prog.width = 840 * this.clickCount / 10;
            this.img_expression.skin = this.clickCount % 2 ? "resource/assets/imgs/home/reward/reward_icon_2.png" : "resource/assets/imgs/home/reward/reward_icon_3.png";
        };
        AwardScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.grp_center.width = Laya.stage.width;
            this.grp_center.height = Laya.stage.height;
            if (GameData.getInstance().videoOpen) {
                this.btn_get.getChildByName("icon").skin = "resource/assets/imgs/public/game_icon_4.png";
            }
            else {
                this.btn_get.getChildByName("icon").skin = "resource/assets/imgs/public/settlement_icon_5.png";
            }
        };
        AwardScene.prototype.addEvent = function () {
            this.btn_get.on(Laya.Event.CLICK, this, this.onVideoUglify);
            this.lab_get.on(Laya.Event.CLICK, this, this.onGetUglify);
            this.btn_open.on(Laya.Event.CLICK, this, this.onOpenUglify);
        };
        AwardScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.viewData_)
                                return [2];
                            this.btn_get.visible = this.btn_open.visible = this.lab_get.visible = false;
                            this.lab_num.visible = this.img_expression.visible = this.img_progdb.visible = false;
                            AnimationManager.instance.runaroundTween(this.img_light, this);
                            data = this.viewData_;
                            if (!(data.type == 1)) return [3, 1];
                            this.lab_title.text = "获得奖励";
                            this.img_icon.skin = GameMgr.instance.getIconUrlById(data.data.id);
                            this.img_icon.scale(3, 3);
                            this.lab_num.visible = true;
                            this.lab_num.text = "+" + data.data.num;
                            this.btn_get.visible = true;
                            this.showCloseBtn(this.lab_get);
                            AnimationManager.instance.btnScaleAniLoop(this.btn_get, this);
                            EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_BOX, this.box_moreGame);
                            if (DeviceUtil.isWXMiniGame() && GameData.getInstance().touchByMistake) {
                                this.hideBanner();
                                GameMgr.instance.bannerIsShow = false;
                                this.btn_get.bottom = 100;
                                this.lab_get.bottom = 25;
                                Laya.timer.once(1000, this, function () {
                                    _this.showBanner();
                                    GameMgr.instance.bannerIsShow = true;
                                    Laya.Tween.to(_this.btn_get, { bottom: 425 }, 500);
                                    Laya.Tween.to(_this.lab_get, { bottom: 350 }, 500);
                                });
                            }
                            return [3, 4];
                        case 1:
                            this.lab_title.text = "体力书包";
                            this.img_icon.skin = "resource/assets/imgs/home/reward/reward_icon_1.png";
                            this.img_icon.scale(1.5, 1.5);
                            this.img_expression.visible = true;
                            this.img_progdb.visible = true;
                            this.clickCount = 0;
                            this.progressUglify();
                            this.btn_open.bottom = 100;
                            this.btn_open.visible = true;
                            this.btn_open.mouseEnabled = true;
                            if (!(DeviceUtil.isMZMiniGame() && GameData.getInstance().touchByMistake)) return [3, 3];
                            this.flag = true;
                            this.hideBanner();
                            this.btn_open.bottom = 100;
                            this.btn_open.visible = false;
                            return [4, MiniManeger.instance.createBanner()];
                        case 2:
                            _a.sent();
                            this.btn_open.visible = true;
                            return [3, 4];
                        case 3:
                            if ((DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame() || DeviceUtil.isWXMiniGame()) &&
                                GameData.getInstance().touchByMistake) {
                                this.flag = true;
                                this.hideBanner();
                                GameMgr.instance.bannerIsShow = false;
                                this.btn_open.bottom = 100;
                            }
                            else {
                                this.flag = false;
                                this.btn_open.bottom = 425;
                            }
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        return AwardScene;
    }(PopLastScene));

    var PowerItem = (function (_super) {
        __extends(PowerItem, _super);
        function PowerItem(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "PowerItem";
            _this.viewData_ = data;
            _this.skin = "skins/uiView/power/PowerItem.json";
            return _this;
        }
        PowerItem.prototype.removeEvent = function () {
            this.btn_get.off(Laya.Event.CLICK, this, this.onGetUglify);
        };
        PowerItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
        };
        PowerItem.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        PowerItem.prototype.initView = function () {
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            this.img_icon.skin = data.id == 1 ? "resource/assets/imgs/home/main/mianinterface_icon_3.png" : "resource/assets/imgs/home/power/" + data.icon + ".png";
            this.lab_name.text = data.name;
            this.lab_num.text = "+" + data.rewardNum;
            this.btn_get.visible = false;
            this.img_geted.visible = this.lab_tip.visible = false;
            if (data.isGeted) {
                if (data.id == 1) {
                    this.lab_tip.visible = true;
                }
                else {
                    this.img_geted.visible = true;
                }
            }
            else {
                this.btn_get.visible = true;
                var desc = this.btn_get.getChildByName("desc");
                if (data.canGet) {
                    this.btn_get.skin = "resource/assets/imgs/public/free_button_1.png";
                    desc.text = "领取";
                    this.btn_get.mouseEnabled = true;
                }
                else {
                    this.btn_get.skin = "resource/assets/imgs/public/free_button_2.png";
                    desc.text = "未完成";
                    this.btn_get.mouseEnabled = false;
                }
            }
        };
        PowerItem.prototype.onGetUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            PopManager.instance.showPopView({
                className: AwardScene,
                data: {
                    type: 1,
                    data: {
                        id: Prop.Power,
                        num: this.viewData_.rewardNum,
                        fun: function () {
                            GameData.getInstance().freePower[_this.viewData_.id] = true;
                            GameInfoManager.getInstance().saveInfo(GameConst.FREE_INFO);
                            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_FREE_POWER);
                        }
                    }
                }
            });
        };
        PowerItem.prototype.adaptationStage = function () {
        };
        PowerItem.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        PowerItem.prototype.addEvent = function () {
            this.btn_get.on(Laya.Event.CLICK, this, this.onGetUglify);
        };
        return PowerItem;
    }(BaseSceneUISkin));

    var PowerScene = (function (_super) {
        __extends(PowerScene, _super);
        function PowerScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "PowerScene";
            _this.skin = "skins/uiView/power/PowerView.json";
            return _this;
        }
        PowerScene.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_FREE_POWER, this, this.refreshUIUglify);
        };
        PowerScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
        };
        PowerScene.prototype.showInsertAd = function () {
            MiniManeger.instance.showInsertAd({
                successFun: function () {
                },
                closeFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        PowerScene.prototype.refreshUIUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, count, i, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, PowerMgr.instance.getFreePowerDataUglify()];
                        case 1:
                            dataArr = _a.sent();
                            this.viewData_ = dataArr;
                            count = dataArr.length;
                            for (i = 0; i < count; i++) {
                                item = this.panel_free.getChildAt(i);
                                if (item) {
                                    item.setData(dataArr[i]);
                                }
                                else {
                                    item = new PowerItem(dataArr[i]);
                                    item.y = (27 + 138) * i;
                                    this.panel_free.addChild(item);
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        PowerScene.prototype.onCloseUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        PowerScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_free.vScrollBarSkin = "";
        };
        PowerScene.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_FREE_POWER, this, this.refreshUIUglify);
        };
        PowerScene.prototype.initView = function () {
            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame())
                this.showInsertAd();
            this.showCloseBtn(this.btn_close);
            this.refreshUIUglify();
        };
        return PowerScene;
    }(PopBaseScene));

    var SkinMgr = (function () {
        function SkinMgr() {
        }
        Object.defineProperty(SkinMgr, "instance", {
            get: function () {
                if (!SkinMgr.ins)
                    SkinMgr.ins = new SkinMgr();
                return SkinMgr.ins;
            },
            enumerable: true,
            configurable: true
        });
        SkinMgr.prototype.getBrushDataUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var configs, netData, dataArr, key, config, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getBrushConfig()];
                        case 1:
                            configs = _a.sent();
                            netData = GameData.getInstance().brush;
                            dataArr = [];
                            for (key in configs) {
                                config = configs[key];
                                data = {
                                    id: config.ID,
                                    icon: config.icon,
                                    unlock: netData.owns.indexOf(config.ID) > -1,
                                    use: netData.using == config.ID,
                                    weight: config.weight
                                };
                                dataArr.push(data);
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        SkinMgr.prototype.useBrushUglify = function (id) {
            GameData.getInstance().brush.using = id;
            GameInfoManager.getInstance().saveInfo(GameConst.BRUSH_INFO);
        };
        SkinMgr.prototype.unlockBrushUglify = function (id) {
            GameData.getInstance().brush.owns.push(id);
            GameInfoManager.getInstance().saveInfo(GameConst.BRUSH_INFO);
        };
        SkinMgr.prototype.getCurBrushDataUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var configs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getBrushConfig()];
                        case 1:
                            configs = _a.sent();
                            return [2, configs[GameData.getInstance().brush.using]];
                    }
                });
            });
        };
        return SkinMgr;
    }());

    var BrushItem = (function (_super) {
        __extends(BrushItem, _super);
        function BrushItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "BrushItem";
            _this.viewData_ = _data;
            _this.skin = "skins/game/type2/brush/BrushItem.json";
            return _this;
        }
        BrushItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.off(Laya.Event.CLICK, this, this.onUse);
            this.viewData_ = null;
        };
        BrushItem.prototype.initView = function () {
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            this.off(Laya.Event.CLICK, this, this.onUse);
            this.img_mask.visible = false;
            this.img_brush.skin = data.unlock ? "resource/assets/imgs/game/type2/brush/brush_brush/" + data.icon + "_2.png" : "resource/assets/imgs/game/type2/brush/brush_brush/" + data.icon + "_1.png";
            this.img_bg.skin = data.unlock ? "resource/assets/imgs/game/type2/brush/brush_baseboard_2.png" : "resource/assets/imgs/game/type2/brush/brush_baseboard_4.png";
            this.btn_use.visible = data.use;
            if (data.unlock)
                this.on(Laya.Event.CLICK, this, this.onUse);
        };
        BrushItem.prototype.showOrHideMask = function (isShow) {
            this.img_mask.visible = isShow;
        };
        BrushItem.prototype.onUse = function () {
            if (this.viewData_.use)
                return;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            SkinMgr.instance.useBrushUglify(this.viewData_.id);
            EventMgr.getInstance().sendEvent(GameEvent.USE_BRUSH);
        };
        BrushItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        BrushItem.prototype.adaptationStage = function () {
        };
        BrushItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
            }
        };
        BrushItem.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        return BrushItem;
    }(BaseSceneUISkin));

    var ObjectUtil = (function () {
        function ObjectUtil() {
        }
        ObjectUtil.isEmpty = function (obj, unsafe) {
            if (unsafe === void 0) { unsafe = true; }
            return unsafe && (obj === undefined || obj === null) ? true : this.isEqual({}, obj);
        };
        ObjectUtil.isEqual = function (oldVal, newVal) {
            return !this.compare(oldVal, newVal, { strict: true }).flag;
        };
        ObjectUtil.copy = function (obj) {
            return this.compare({}, obj).result;
        };
        ObjectUtil.minus = function (oldVal, newVal) {
            return this.compare(oldVal, newVal, { strict: false }).result;
        };
        ObjectUtil.merge = function (oldVal, newVal, data) {
            if (!data)
                data = { full: true, strict: true, repeat: true };
            var val = this.compare(oldVal, newVal, { strict: data.strict, merge: true, full: data.full, repeat: data.repeat });
            return (val.flag ? val.result : this.copy(oldVal));
        };
        ObjectUtil.compare = function (oldVal, newVal, data) {
            var _this = this;
            var result, flag = false;
            if (!data)
                data = { strict: false, merge: false, full: false, repeat: false };
            switch ([oldVal, newVal].filter(function (item) { return item instanceof Object; }).length) {
                case 2:
                    if (!data.strict && oldVal instanceof Array && newVal instanceof Array) {
                        result = data.merge && data.full ? this.copy(oldVal) : [];
                        newVal.forEach(function (item) {
                            if (data.merge) {
                                if (data.repeat) {
                                    result.push(_this.copy(item));
                                }
                                else {
                                    if (!result.some(function (res) { return _this.isEqual(res, item); })) {
                                        result.push(_this.copy(item));
                                    }
                                }
                                flag = true;
                            }
                            else {
                                if (!oldVal.some(function (old) { return _this.isEqual(old, item); })) {
                                    result.push(_this.copy(item));
                                    flag = true;
                                }
                            }
                        });
                    }
                    else {
                        var oldKey_1 = Object.keys(oldVal), newKey_1 = Object.keys(newVal);
                        switch ([oldVal, newVal].filter(function (item) { return item instanceof Array; }).length) {
                            case 1:
                                result = newVal instanceof Array ? [] : {};
                                newKey_1.forEach(function (item) {
                                    result[item] = _this.copy(newVal[item]);
                                });
                                flag = true;
                                break;
                            default:
                                result = data.merge && data.full ? this.copy(oldVal) : newVal instanceof Array ? [] : {};
                                (data.merge ? newKey_1 : oldKey_1).forEach(function (item) {
                                    if (data.merge && !data.full) {
                                        result[item] = _this.copy(newVal[item]);
                                        flag = true;
                                    }
                                    else {
                                        var temp = _this.compare(oldVal[item], newVal[item], { strict: data.strict, merge: data.merge, full: data.full, repeat: data.repeat });
                                        if (temp.flag) {
                                            if (newKey_1.indexOf(item) === -1) {
                                                delete result[item];
                                            }
                                            else {
                                                result[item] = temp.result;
                                            }
                                            flag = true;
                                        }
                                    }
                                });
                                !data.merge && newKey_1.forEach(function (item) {
                                    if (oldKey_1.indexOf(item) === -1) {
                                        result[item] = _this.copy(newVal[item]);
                                        flag = true;
                                    }
                                });
                        }
                    }
                    break;
                case 1:
                    result = newVal instanceof Object ? this.copy(newVal) : newVal;
                    flag = true;
                    break;
                default:
                    if (oldVal !== newVal) {
                        result = newVal;
                        flag = true;
                    }
            }
            return {
                result: result,
                flag: flag
            };
        };
        return ObjectUtil;
    }());

    var ArrayUtil = (function () {
        function ArrayUtil() {
        }
        ArrayUtil.upset = function (arr) {
            var newArr = arr.sort(function () { return 0.5 - Math.random(); });
            return newArr;
        };
        ArrayUtil.unique = function (arr) {
            var newArr = [];
            arr.forEach(function (item) {
                if (newArr.indexOf(item) < 0) {
                    newArr.push(item);
                }
            });
            return newArr;
        };
        ArrayUtil.getRandomUniqueArr = function (arr, num) {
            var newArr = ObjectUtil.copy(arr);
            var result = [];
            for (var i = 0; i < num; i++) {
                if (newArr.length > 0) {
                    var arrIndex = Math.floor(Math.random() * newArr.length);
                    result[i] = newArr[arrIndex];
                    newArr.splice(arrIndex, 1);
                }
                else {
                    break;
                }
            }
            return result;
        };
        ArrayUtil.getIndexByWeight = function (arr) {
            var sum = 0;
            var rand = 0;
            var result = 0;
            for (var i in arr) {
                sum += Number(arr[i]);
            }
            for (var i in arr) {
                rand = Math.floor(Math.random() * sum + 1);
                if (arr[i] >= rand) {
                    result = Number(i);
                    break;
                }
                else {
                    sum -= arr[i];
                }
            }
            return result;
        };
        return ArrayUtil;
    }());

    var PageRadio = (function (_super) {
        __extends(PageRadio, _super);
        function PageRadio(num, space) {
            var _this = _super.call(this) || this;
            _this.space = 0;
            _this._selectIndex = 0;
            _this.radioNum = num;
            _this.space = space;
            _this.initView();
            return _this;
        }
        Object.defineProperty(PageRadio.prototype, "selectIndex", {
            get: function () {
                return this._selectIndex;
            },
            set: function (value) {
                this._selectIndex = value;
                this.updateSelectIndex();
            },
            enumerable: true,
            configurable: true
        });
        PageRadio.prototype.initView = function () {
            for (var i = 0; i < this.radioNum; i++) {
                var box_radio = new Laya.Box();
                box_radio.size(39, 38);
                var selectImg = new Laya.Image();
                selectImg.skin = this.selectIndex == i ? "resource/assets/imgs/game/type2/brush/brush_round_1.png" : "resource/assets/imgs/game/type2/brush/brush_round_2.png";
                selectImg.autoSize = true;
                box_radio.addChild(selectImg);
                selectImg.centerX = selectImg.centerY = 0;
                box_radio.x = 0 + (this.space + 39) * i;
                this.addChild(box_radio);
            }
        };
        PageRadio.prototype.updateSelectIndex = function () {
            for (var i = 0; i < this.numChildren; i++) {
                var box_radio = this.getChildAt(i);
                var selectImg = box_radio.getChildAt(0);
                selectImg.skin = this.selectIndex == i ? "resource/assets/imgs/game/type2/brush/brush_round_1.png" : "resource/assets/imgs/game/type2/brush/brush_round_2.png";
            }
        };
        return PageRadio;
    }(Laya.Box));

    var BrushScene = (function (_super) {
        __extends(BrushScene, _super);
        function BrushScene(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "BrushScene";
            _this.showEnterType = null;
            _this.curPage = 1;
            _this.maxPage = 3;
            _this.aniArr = [];
            _this.lockArr = [];
            _this.curPageArr = [];
            _this.weightArr = [];
            _this.isPlaying = false;
            _this.distance = 773 + 20;
            _this.price = 100;
            _this.viewData_ = data;
            _this.skin = "skins/game/type2/brush/BrushView.json";
            return _this;
        }
        BrushScene.prototype.removeEvent = function () {
            this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
            this.btn_gold.off(Laya.Event.CLICK, this, this.onGoldUglify);
            this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
            this.box_brush.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.box_brush.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.box_brush.off(Laya.Event.MOUSE_OUT, this, this.mouseUp);
            EventMgr.getInstance().removeEvent(GameEvent.USE_BRUSH, this, this.useBrush);
        };
        BrushScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (this.viewData_.type == 1) {
                EventMgr.getInstance().sendEvent(GameEvent.CHANGE_POS, { _x: 30, _y: 30 });
            }
            else {
                if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                    this.hideBanner();
                    GameMgr.instance.topBarIsShow = false;
                    GameMgr.instance.bannerIsShow = false;
                }
                EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
            }
            this.brushData = null;
            this.viewData_ = null;
        };
        BrushScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var lab;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame())
                                this.showInsertAd();
                            if (this.viewData_.type == 1) ;
                            else if (this.viewData_.type == 2) {
                                if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                                    this.showBanner();
                                    GameMgr.instance.topBarIsShow = true;
                                    GameMgr.instance.bannerIsShow = true;
                                }
                            }
                            EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
                            EventMgr.getInstance().sendEvent(GameEvent.CHANGE_POS, { _x: 30, _y: 30 });
                            this.lab_test.visible = false;
                            this.img_baseBoard.visible = true;
                            this.img_baseBoard.mask = this.lab_test;
                            lab = this.btn_gold.getChildByName("num");
                            lab.text = "+" + GameData.getInstance().defaultConfigs.videoBuyGold;
                            return [4, this.refreshUIUglify()];
                        case 1:
                            _a.sent();
                            this.refreshPageUglify();
                            this.updateBrushUglify();
                            return [2];
                    }
                });
            });
        };
        BrushScene.prototype.showInsertAd = function () {
            MiniManeger.instance.showInsertAd({
                successFun: function () {
                },
                closeFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        BrushScene.prototype.updateBrushUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, SkinMgr.instance.getCurBrushDataUglify()];
                        case 1:
                            data = _a.sent();
                            if (!data)
                                return [2];
                            this.img_baseBoard.skin = "resource/assets/imgs/game/type2/brushs/" + data.icon + ".png";
                            return [2];
                    }
                });
            });
        };
        BrushScene.prototype.refreshUIUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, i, box_1, start, box, i, len, data, item;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, SkinMgr.instance.getBrushDataUglify()];
                        case 1:
                            _a.brushData = _b.sent();
                            this.maxPage = Math.ceil(this.brushData.length / 9);
                            for (i = 0; i < this.maxPage; i++) {
                                box_1 = this.box_brush.getChildAt(i);
                                if (!box_1) {
                                    box_1 = new Laya.Box();
                                    box_1.size(773, 700);
                                    box_1.x = (773 + 20) * i;
                                    this.box_brush.addChild(box_1);
                                }
                            }
                            start = (this.curPage - 1) * 9;
                            this.curPageArr = this.brushData.slice(start, start + 9);
                            this.weightArr = [];
                            this.lockArr = [];
                            box = this.box_brush.getChildAt(this.curPage - 1);
                            for (i = 0, len = this.curPageArr.length; i < len; i++) {
                                data = this.curPageArr[i];
                                if (!data.unlock) {
                                    this.weightArr.push(data.weight);
                                    this.lockArr.push(data);
                                }
                                item = box.getChildAt(i);
                                if (item) {
                                    item.setData(data);
                                }
                                else {
                                    item = new BrushItem(data);
                                    item.x = (i % 3) * (209 + 73);
                                    item.y = Math.floor(i / 3) * (230 + 5);
                                    box.addChild(item);
                                }
                            }
                            this.refreshBtnUglify();
                            return [2];
                    }
                });
            });
        };
        BrushScene.prototype.refreshBtnUglify = function () {
            if (this.lockArr.length) {
                this.btn_comp.visible = false;
                this.btn_get.visible = true;
                var lab = this.btn_get.getChildByName("num");
                lab.text = GameData.getInstance().defaultConfigs.unlockCost2 + "";
                this.price = GameData.getInstance().defaultConfigs.unlockCost2;
            }
            else {
                this.btn_comp.visible = true;
                this.btn_get.visible = false;
                this.btn_comp.disabled = true;
            }
        };
        BrushScene.prototype.refreshPageUglify = function () {
            if (!this.com_page) {
                this.com_page = new PageRadio(this.maxPage, 30);
                this.com_page.centerX = 0;
                this.com_page.y = 1350;
                this.box_content.addChild(this.com_page);
            }
            this.com_page.selectIndex = this.curPage - 1;
        };
        BrushScene.prototype.onGet = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (this.price <= GameData.getInstance().playerData.gold) {
                GameMgr.instance.updateBaseData(Prop.Gold, -this.price);
                this.enableView(false);
                var randIndex_1 = ArrayUtil.getIndexByWeight(this.weightArr);
                this.aniArr = [];
                console.log("随机到的画笔 = ", this.lockArr[randIndex_1]);
                var len = this.curPageArr.length;
                for (var i = 0; i < len - 1; i++) {
                    var index1 = this.getIndexByRandom();
                    this.aniArr.push(index1);
                }
                this.aniArr.push(randIndex_1);
                console.log("this.aniArr ->", this.aniArr);
                this.playAnimation().then(function () {
                    _this.aniArr = [];
                    var data = _this.lockArr[randIndex_1];
                    SkinMgr.instance.unlockBrushUglify(data.id);
                    _this.refreshUIUglify();
                    _this.enableView(true);
                });
            }
            else {
                TipsManager.getInstance().showDefaultTips("金币不足");
            }
        };
        BrushScene.prototype.playAnimation = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var index = 0;
                var len = _this.aniArr.length;
                var box = _this.box_brush.getChildAt(_this.curPage - 1);
                box.getChildAt(_this.aniArr[index]).showOrHideMask(true);
                Laya.timer.loop(150, _this.box_brush, function () {
                    box.getChildAt(_this.aniArr[index]).showOrHideMask(false);
                    index++;
                    if (index > len - 1) {
                        Laya.timer.clearAll(_this.box_brush);
                        resolve();
                    }
                    else {
                        box.getChildAt(_this.aniArr[index]).showOrHideMask(true);
                    }
                });
            });
        };
        BrushScene.prototype.getIndexByRandom = function () {
            var len = this.curPageArr.length;
            var index = Math.floor(Math.random() * len);
            var isHas = false;
            for (var i = 0; i < this.aniArr.length; i++) {
                if (index == this.aniArr[i]) {
                    isHas = true;
                    break;
                }
            }
            if (!isHas) {
                return index;
            }
            else {
                return this.getIndexByRandom();
            }
        };
        BrushScene.prototype.mouseDown = function (evt) {
            if (this.isPlaying || this.maxPage == 1)
                return;
            this.box_brush.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.box_brush.on(Laya.Event.MOUSE_OUT, this, this.mouseUp);
            this.startX = evt.stageX;
        };
        BrushScene.prototype.mouseUp = function (evt) {
            if (this.isPlaying || !this.startX)
                return;
            this.box_brush.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.box_brush.off(Laya.Event.MOUSE_OUT, this, this.mouseUp);
            var a = evt.stageX - this.startX;
            this.startX = null;
            if (a > 0 && Math.abs(a) >= 100) {
                if (this.curPage == 1)
                    return;
                this.listAni(1);
            }
            else if (a < 0 && Math.abs(a) >= 100) {
                if (this.curPage == this.maxPage)
                    return;
                this.listAni(-1);
            }
        };
        BrushScene.prototype.listAni = function (direction, time) {
            if (time === void 0) { time = 300; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.isPlaying = true;
                            this.enableView(false);
                            this.curPage += direction * -1;
                            return [4, this.refreshUIUglify()];
                        case 1:
                            _a.sent();
                            return [4, Promise.all(Array.apply(void 0, Array(this.maxPage)).map(function (v, i) {
                                    return _this.singleAni(i, direction, time);
                                }))];
                        case 2:
                            _a.sent();
                            this.refreshPageUglify();
                            this.isPlaying = false;
                            this.enableView(true);
                            return [2];
                    }
                });
            });
        };
        BrushScene.prototype.singleAni = function (index, direction, time) {
            var _this = this;
            return new Promise(function (resolve) {
                var item = _this.box_brush.getChildAt(index);
                var pos = { x: item.x + _this.distance * direction };
                Laya.Tween.to(item, pos, time, null, Laya.Handler.create(_this, function () {
                    resolve();
                }));
            });
        };
        BrushScene.prototype.useBrush = function () {
            this.refreshUIUglify();
            this.updateBrushUglify();
        };
        BrushScene.prototype.onGoldUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.enableView(false);
            if (GameData.getInstance().videoOpen) {
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.videoBuyGold);
                        _this.enableView(true);
                    },
                    failFun: function () {
                        _this.enableView(true);
                    },
                    errorFun: function () {
                        _this.enableView(true);
                    }
                });
            }
            else {
                MiniManeger.instance.shareAppMessage({
                    sucFun: function () {
                        GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.videoBuyGold);
                        _this.enableView(true);
                    },
                    failFun: function () {
                        _this.enableView(true);
                    }
                });
            }
        };
        BrushScene.prototype.onCloseUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        BrushScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.box_brush.scrollRect = new Laya.Rectangle(0, 0, 773, 700);
            if (GameData.getInstance().videoOpen) {
                this.btn_gold.getChildByName("icon").skin = "resource/assets/imgs/public/game_icon_4.png";
            }
            else {
                this.btn_gold.getChildByName("icon").skin = "resource/assets/imgs/public/settlement_icon_5.png";
            }
        };
        BrushScene.prototype.addEvent = function () {
            this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
            this.btn_gold.on(Laya.Event.CLICK, this, this.onGoldUglify);
            this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
            this.box_brush.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            EventMgr.getInstance().addEvent(GameEvent.USE_BRUSH, this, this.useBrush);
        };
        return BrushScene;
    }(PopBaseScene));

    var InviteItem = (function (_super) {
        __extends(InviteItem, _super);
        function InviteItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteItem";
            _this.viewData_ = _data;
            _this.skin = "skins/uiView/invite/InviteItem.json";
            return _this;
        }
        InviteItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        InviteItem.prototype.adaptationStage = function () {
        };
        InviteItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        InviteItem.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        InviteItem.prototype.addEvent = function () {
            this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
            this.img_null.on(Laya.Event.CLICK, this, this.onInvite);
        };
        InviteItem.prototype.initView = function () {
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            this.btn_get.visible = this.lab_tip.visible = this.img_geted.visible = false;
            this.img_headMask.visible = false;
            this.lab_index.text = data.id + "";
            var lab = this.box_award1.getChildAt(2);
            lab.text = "X" + data.reward[0].num;
            if (data.head && data.head != "") {
                this.img_head.skin = data.head;
                this.img_head.mask = this.img_headMask;
            }
            else {
                this.img_head.skin = "resource/assets/imgs/home/invite/invitation_headportrait.png";
            }
            if (data.lingqued) {
                this.img_geted.visible = true;
                this.img_null.visible = false;
                this.img_head.visible = true;
            }
            else {
                if (data.canLingqu) {
                    this.btn_get.visible = true;
                    this.img_null.visible = false;
                    this.img_head.visible = true;
                }
                else {
                    this.lab_tip.visible = true;
                    this.img_null.visible = true;
                    this.img_head.visible = false;
                }
            }
        };
        InviteItem.prototype.onGet = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            PopManager.instance.showPopView({
                className: AwardScene,
                data: {
                    type: 1,
                    data: {
                        id: Prop.Power,
                        num: this.viewData_.reward[0].num,
                        fun: function () {
                            GameData.getInstance().invite.inviteId.push(_this.viewData_.id);
                            GameInfoManager.getInstance().saveInfo(GameConst.INVITE_INFO);
                            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_INVITE);
                        }
                    }
                }
            });
        };
        InviteItem.prototype.onInvite = function () {
            MiniManeger.instance.shareAppMessage();
        };
        InviteItem.prototype.removeEvent = function () {
            this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
            this.img_null.off(Laya.Event.CLICK, this, this.onInvite);
        };
        InviteItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.viewData_ = null;
            this.removeEvent();
        };
        return InviteItem;
    }(BaseSceneUISkin));

    var InviteManager = (function () {
        function InviteManager() {
            this.URL = GameData.getInstance().URL_OF_INVITE;
            this.inviterInfo = new netData.Inviter();
            this.newPlayer = [];
        }
        InviteManager.getInstance = function () {
            if (!InviteManager.instance_) {
                InviteManager.instance_ = new InviteManager();
            }
            return InviteManager.instance_;
        };
        InviteManager.prototype.selectInfo = function (callF, obj) {
            var _this = this;
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            var gameId = GameData.getInstance().gameId;
            var openId = GameData.getInstance().userInfo.openId;
            var msg = {};
            msg.msg_type = "16";
            msg.msg_data = {
                "gameid": gameId,
                "openid": openId
            };
            console.log("查询受邀人列表 ->", msg);
            HttpMgr.getInstance().sendHttp(this.URL, msg, function (e) {
                var code = e["msg_data"]["error_code"];
                if (code == "0") {
                    console.log("查询受邀人列表成功 ->", e);
                    if (e["msg_data"]["index_list"] != "") {
                        _this.newPlayer = e["msg_data"]["index_list"];
                    }
                }
                else {
                    var str = CommonTool.errorCodeTable[code];
                    console.warn("查询受邀人列表失败：", str);
                }
                if (callF && obj) {
                    callF.call(obj, code);
                }
            }, function (e) { });
        };
        InviteManager.prototype.createInfo = function (callF, obj) {
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, new Promise(function (res, rej) {
                                var inviterOpenId = _this.inviterInfo.openId;
                                var tx_url = GameData.getInstance().userInfo.avatarUrl;
                                var nick = GameData.getInstance().userInfo.nick;
                                var gameId = GameData.getInstance().gameId;
                                var msg = {};
                                msg.msg_type = "14";
                                msg.msg_data = {
                                    "openid": inviterOpenId,
                                    "url": tx_url,
                                    "name": nick,
                                    "gameid": gameId
                                };
                                console.log("关联自己及邀请人 ->", msg);
                                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                                    var code = e["msg_data"]["error_code"];
                                    if (code == "0") {
                                        console.log("关联自己及邀请人成功...");
                                    }
                                    else {
                                        var str = CommonTool.errorCodeTable[code];
                                        console.warn("关联自己及邀请人失败：", str);
                                    }
                                    if (callF && obj) {
                                        callF.call(obj, code);
                                    }
                                    res();
                                }, function (e) { });
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        InviteManager.prototype.judgeInvite = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var res = MiniManeger.instance.launchOption;
                console.log("开始关联邀请人", res);
                console.log("自己信息", GameData.getInstance().userInfo);
                if (res) {
                    var scene = res.scene;
                    if (scene == 1007 || scene == 1008 || scene == 1044) {
                        if (GameData.getInstance().userInfo.openId && res.query && res.query["openid"]) {
                            _this.inviterInfo.nick = res.query["nick"];
                            _this.inviterInfo.openId = res.query["openid"];
                            if (GameData.getInstance().userInfo.openId != _this.inviterInfo.openId) {
                                console.log("关联邀请人", res.query);
                                _this.createInfo();
                            }
                        }
                    }
                    resolve();
                }
                else {
                    resolve();
                }
            });
        };
        InviteManager.prototype.getInviteAwardData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var inviteConfig, lingqu, invitePlayer, dataArr, i, len, invite, awardId, canLingqu, lingqued, player, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.instance.getInviteConfig()];
                        case 1:
                            inviteConfig = _a.sent();
                            lingqu = GameData.getInstance().invite.inviteId;
                            invitePlayer = this.newPlayer;
                            dataArr = [];
                            for (i = 0, len = inviteConfig.length; i < len; i++) {
                                invite = inviteConfig[i];
                                awardId = invite.id;
                                canLingqu = false;
                                lingqued = false;
                                player = invitePlayer[i];
                                if (lingqu.indexOf(awardId) > -1)
                                    lingqued = true;
                                if (player)
                                    canLingqu = true;
                                data = new localData.InviteData();
                                data.id = awardId;
                                data.head = player ? player["url"] : "";
                                data.reward = invite.reward;
                                data.lingqued = lingqued;
                                data.canLingqu = canLingqu;
                                dataArr.push(data);
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        return InviteManager;
    }());

    var InviteView = (function (_super) {
        __extends(InviteView, _super);
        function InviteView() {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteView";
            _this.skin = "skins/uiView/invite/InviteView.json";
            return _this;
        }
        InviteView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_invite.removeChildren();
            this.panel_invite.vScrollBarSkin = "";
            this.panel_invite.elasticEnabled = true;
            this.panel_invite.vScrollBar.elasticDistance = 100;
            this.panel_invite.vScrollBar.elasticBackTime = 100;
        };
        InviteView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_invite.on(Laya.Event.CLICK, this, this.onInvite);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_INVITE, this, this.refreshUI);
        };
        InviteView.prototype.initView = function () {
            this.showCloseBtn(this.btn_close);
            this.getInvitePlayer();
        };
        InviteView.prototype.getInvitePlayer = function () {
            var _this = this;
            InviteManager.getInstance().selectInfo(function (code) {
                if (code == '0') {
                    _this.refreshUI();
                }
            }, this);
        };
        InviteView.prototype.refreshUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, i, len, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, InviteManager.getInstance().getInviteAwardData()];
                        case 1:
                            dataArr = _a.sent();
                            console.log("InviteView >>>>>>> refreshUI", dataArr);
                            for (i = 0, len = dataArr.length; i < len; i++) {
                                item = this.panel_invite.getChildAt(i);
                                if (item) {
                                    item.setData(dataArr[i]);
                                }
                                else {
                                    item = new InviteItem(dataArr[i]);
                                    item.x = 0;
                                    item.y = (138 + 20) * i;
                                    this.panel_invite.addChild(item);
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        InviteView.prototype.onInvite = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            MiniManeger.instance.shareAppMessage();
        };
        InviteView.prototype.onClose = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        InviteView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_invite.off(Laya.Event.CLICK, this, this.onInvite);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_INVITE, this, this.refreshUI);
        };
        InviteView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return InviteView;
    }(PopBaseScene));

    var HomeScene = (function (_super) {
        __extends(HomeScene, _super);
        function HomeScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "HomeScene";
            _this.skin = "skins/uiView/HomeView.json";
            return _this;
        }
        HomeScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            var res = ["reward"];
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                res = ["channel", "reward"];
            }
            ResUtil.getIntance().loadGroups(res, function () {
                console.log("懒加载完成");
            });
            if (DeviceUtil.isWXMiniGame()) {
                this.img_title.skin = "resource/assets/imgs/home/main/mianinterface_logo_1_1.png";
            }
            else {
                this.img_title.skin = "resource/assets/imgs/home/main/mianinterface_logo_1.png";
            }
            if (DeviceUtil.isQQMiniGame()) {
                this.btn_moreGame.visible = this.btn_invite.visible = this.btn_share.visible = true;
                this.btn_power.centerX = -145;
                this.btn_sign.centerX = 145;
            }
            else {
                this.btn_power.centerX = -157;
                this.btn_sign.centerX = 156;
            }
            if (GameData.getInstance().isConVersion) {
                this.btn_power.visible = this.btn_sign.visible = false;
                this.btn_invite.visible = this.btn_share.visible = false;
            }
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_DRAWER);
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_EXIT_BTN);
        };
        HomeScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        HomeScene.prototype.initView = function () {
            MiniManeger.instance.showBannerAd(null);
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                GameMgr.instance.topBarIsShow = true;
                GameMgr.instance.bannerIsShow = true;
            }
            SoundManager.instance.playBgMusic(SoundConst.GameBgm2);
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
            AnimationManager.instance.btnScaleAniLoop(this.btn_start, this);
            this.rollBgUglify();
            this.showAniUglify();
            if (GameMgr.instance.autoShowSign) {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                ResUtil.getIntance().loadGroups(["sign"], function () {
                    GameMgr.instance.autoShowSign = false;
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                    ViewManager.getInstance().showView(SignScene);
                });
            }
        };
        HomeScene.prototype.addEvent = function () {
            this.btn_power.on(Laya.Event.CLICK, this, this.onPowerUglify);
            this.btn_sign.on(Laya.Event.CLICK, this, this.onSignUglify);
            this.btn_start.on(Laya.Event.CLICK, this, this.onStartUglify);
            this.btn_skin.on(Laya.Event.CLICK, this, this.onSkinUglify);
            if (DeviceUtil.isQQMiniGame()) {
                this.btn_moreGame.on(Laya.Event.CLICK, this, this.onMoreGame);
                this.btn_invite.on(Laya.Event.CLICK, this, this.onInvite);
                this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
            }
        };
        HomeScene.prototype.rollBgUglify = function () {
            var _this = this;
            Laya.timer.loop(50, this.box_bg, function () {
                for (var i = 0; i < 3; i++) {
                    var img = _this.box_bg.getChildAt(i);
                    img.y -= 5;
                }
                var start = _this.box_bg.getChildAt(0);
                var end = _this.box_bg.getChildAt(2);
                if (start.y <= -1920) {
                    _this.box_bg.removeChild(start);
                    start.y = end.y + 1920;
                    _this.box_bg.addChild(start);
                }
            });
        };
        HomeScene.prototype.showAniUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.mainSke) return [3, 2];
                            _a = this;
                            return [4, AnimationManager.instance.creatBoonAnimation("resource/assets/db/mianinterface.sk")];
                        case 1:
                            _a.mainSke = _b.sent();
                            this.box_ani.addChild(this.mainSke);
                            this.mainSke.scale(2, 2);
                            this.mainSke.pos(540, 400);
                            _b.label = 2;
                        case 2:
                            this.mainSke.play(0, true);
                            EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_BANNER, this.box_ani);
                            return [2];
                    }
                });
            });
        };
        HomeScene.prototype.onPowerUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(["power"], function () {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                ViewManager.getInstance().showView(PowerScene);
            });
        };
        HomeScene.prototype.onSignUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(["sign"], function () {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                ViewManager.getInstance().showView(SignScene);
            });
        };
        HomeScene.prototype.onStartUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            var modelId = GameData.getInstance().modelId;
            var classData;
            switch (modelId) {
                case 0:
                    classData = { type: 1 };
                    break;
            }
            EventMgr.getInstance().sendEvent(GameEvent.CHOOSE_MODEL, { type: modelId, data: classData });
        };
        HomeScene.prototype.onSkinUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(["skin2"], function () {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                ViewManager.getInstance().showView(BrushScene, { type: 1 });
            });
        };
        HomeScene.prototype.onMoreGame = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            MiniManeger.instance.showAppBoxAd({});
        };
        HomeScene.prototype.onInvite = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(["invite"], function () {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                ViewManager.getInstance().showView(InviteView);
            });
        };
        HomeScene.prototype.onShare = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            MiniManeger.instance.shareAppMessage();
        };
        HomeScene.prototype.removeEvent = function () {
            this.btn_power.off(Laya.Event.CLICK, this, this.onPowerUglify);
            this.btn_sign.off(Laya.Event.CLICK, this, this.onSignUglify);
            this.btn_start.off(Laya.Event.CLICK, this, this.onStartUglify);
            this.btn_skin.off(Laya.Event.CLICK, this, this.onSkinUglify);
            if (DeviceUtil.isQQMiniGame()) {
                this.btn_moreGame.off(Laya.Event.CLICK, this, this.onMoreGame);
                this.btn_invite.off(Laya.Event.CLICK, this, this.onInvite);
                this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
            }
        };
        HomeScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.Tween.clearAll(this.btn_start);
            Laya.timer.clearAll(this.box_bg);
            this.mainSke && this.mainSke.stop();
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_BANNER, this.box_ani);
        };
        return HomeScene;
    }(BaseSceneUISkin));

    var SettlementScene2 = (function (_super) {
        __extends(SettlementScene2, _super);
        function SettlementScene2(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "SettlementScene2";
            _this.showEnterType = null;
            _this.viewData_ = data;
            _this.skin = "skins/game/type2/SettlementView2.json";
            return _this;
        }
        SettlementScene2.prototype.removeEvent = function () {
            this.btn_home.off(Laya.Event.CLICK, this, this.onHomeUglify);
            this.box_double.off(Laya.Event.CLICK, this, this.onSelect);
            this.btn_restart.off(Laya.Event.CLICK, this, this.onRestartUglify);
            this.btn_get.off(Laya.Event.CLICK, this, this.onGetUglify);
            this.btn_shareVideo.off(Laya.Event.CLICK, this, this.onShareVideo);
            this.btn_next.off(Laya.Event.CLICK, this, this.onNextUglify);
            if (DeviceUtil.isQQMiniGame())
                this.btn_moreGame.off(Laya.Event.CLICK, this, this.onMoreGame);
        };
        SettlementScene2.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
            this.viewData_ = null;
        };
        SettlementScene2.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.hideBanner();
                            EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
                            EventMgr.getInstance().sendEvent(GameEvent.CHANGE_POS, { _x: 30, _y: 30 });
                            SoundManager.instance.playEffect(SoundConst.Win2);
                            if (!this.viewData_)
                                return [2];
                            data = this.viewData_;
                            this.btn_get.visible = true;
                            if (DeviceUtil.isQQMiniGame())
                                this.btn_moreGame.visible = false;
                            this.btn_restart.visible = this.btn_next.visible = false;
                            this.lab_award.text = "+" + GameData.getInstance().defaultConfigs.passGold2;
                            if (DeviceUtil.isTTMiniGame()) {
                                this.btn_shareVideo.visible = true;
                                this.btn_shareVideo.disabled = false;
                                this.btn_shareVideo.getChildByName("num").text = "+" + GameData.getInstance().defaultConfigs.shareRecordAward;
                                this.btn_get.centerX = -220;
                            }
                            else {
                                this.btn_shareVideo.visible = false;
                                this.btn_get.centerX = 0;
                            }
                            if (GameData.getInstance().isConVersion || !GameData.getInstance().videoOpen) {
                                this.showDouble(false);
                                this.box_double.visible = false;
                            }
                            else {
                                this.box_double.visible = true;
                                this.showDouble(GameData.getInstance().selectDoule);
                            }
                            _a = this;
                            return [4, PatternMgr.instance.updateLevelUglify({ pattern: 103, curLv: data.level })];
                        case 1:
                            _a.nextId = _b.sent();
                            if (!(DeviceUtil.isMZMiniGame() && GameData.getInstance().touchByMistake)) return [3, 3];
                            this.box_double.y = 46;
                            this.box_bottom.bottom = 150;
                            return [4, MiniManeger.instance.createBanner()];
                        case 2:
                            _b.sent();
                            Laya.timer.once(1000, this, function () {
                                MiniManeger.instance.showBannerAdSp();
                                Laya.Tween.to(_this.box_bottom, { bottom: 400 }, 500);
                            });
                            return [3, 4];
                        case 3:
                            if ((DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) &&
                                GameData.getInstance().touchByMistake) {
                                this.box_double.y = 46;
                                this.box_bottom.bottom = 150;
                                Laya.timer.once(1500, this, function () {
                                    _this.showBanner();
                                    Laya.Tween.to(_this.box_bottom, { bottom: 400 }, 500);
                                });
                            }
                            else {
                                this.box_double.y = 0;
                                this.box_bottom.bottom = 400;
                                this.showBanner();
                            }
                            _b.label = 4;
                        case 4:
                            this.showLevelAniUglify();
                            this.showAniUglify();
                            return [2];
                    }
                });
            });
        };
        SettlementScene2.prototype.showLevelAniUglify = function () {
            var _this = this;
            var lv = this.nextId;
            if (this.viewData_.level == lv) {
                this.lab_tip.visible = true;
                this.box_lvAni.visible = false;
            }
            else {
                this.lab_tip.visible = false;
                var url = "resource/assets/imgs/levels/type2/" + lv + "/level" + lv + ".sk";
                if (!this.levelSke) {
                    this.levelSke = new Laya.Skeleton();
                    this.box_lvAni.addChild(this.levelSke);
                }
                this.levelSke.load(url, Laya.Handler.create(this, function () {
                    if (!_this.levelSke.player)
                        return;
                    _this.levelSke.player.playbackRate = 1;
                    _this.levelSke.scale(1, 1);
                    _this.levelSke.pos(390, 350);
                    _this.box_lvAni.visible = true;
                    _this.levelSke.play(0, true);
                }));
            }
        };
        SettlementScene2.prototype.showAniUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.succSke) return [3, 2];
                            _a = this;
                            return [4, AnimationManager.instance.creatBoonAnimation("resource/assets/db/victory1.sk")];
                        case 1:
                            _a.succSke = _b.sent();
                            this.box_ani.addChild(this.succSke);
                            this.succSke.scale(2, 2);
                            this.succSke.pos(540, 400);
                            _b.label = 2;
                        case 2:
                            this.box_ani.visible = true;
                            this.succSke.player.once(Laya.Event.STOPPED, this, function () {
                                _this.box_ani.visible = false;
                            });
                            this.succSke.play(0, false);
                            return [2];
                    }
                });
            });
        };
        SettlementScene2.prototype.onHomeUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
            this.removeSelf();
        };
        SettlementScene2.prototype.onSelect = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (this.img_select.visible) {
                this.showDouble(false);
            }
            else {
                this.showDouble(true);
            }
        };
        SettlementScene2.prototype.showDouble = function (show) {
            this.img_select.visible = show;
            var mult = show ? 2 : 1;
            this.lab_award.text = "+" + GameData.getInstance().defaultConfigs.passGold1 * mult;
        };
        SettlementScene2.prototype.onGetUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (this.img_select.visible) {
                this.enableView(false);
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        _this.getAwardUglify(2);
                        _this.enableView(true);
                    },
                    failFun: function () {
                        _this.enableView(true);
                    },
                    errorFun: function () {
                        _this.enableView(true);
                    }
                });
            }
            else {
                this.getAwardUglify(1);
            }
        };
        SettlementScene2.prototype.getAwardUglify = function (mult) {
            GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.passGold1 * mult);
            this.btn_get.visible = this.box_double.visible = false;
            this.btn_shareVideo.visible = false;
            if (DeviceUtil.isQQMiniGame())
                this.btn_moreGame.visible = true;
            this.btn_restart.visible = this.btn_next.visible = true;
        };
        SettlementScene2.prototype.onRestartUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) {
                this.enableView(false);
                MiniManeger.instance.showInsertAd({
                    successFun: function () {
                    },
                    closeFun: function () {
                        _this.enableView(true);
                        _this.restartFun();
                    },
                    errorFun: function () {
                        _this.enableView(true);
                        _this.restartFun();
                    }
                });
            }
            else {
                this.restartFun();
            }
        };
        SettlementScene2.prototype.restartFun = function () {
            var _this = this;
            PowerMgr.instance.changePowerUglify({
                count: -GameData.getInstance().defaultConfigs.powerCost,
                success: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.Type2Restart);
                    EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
                    _this.removeSelf();
                }
            });
        };
        SettlementScene2.prototype.onShareVideo = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.enableView(false);
            MiniManeger.instance.shareGameVideo({
                successFun: function () {
                    GameData.getInstance().playerData.shareVideoCount += 1;
                    GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.shareRecordAward);
                    _this.btn_shareVideo.disabled = true;
                    _this.enableView(true);
                },
                failFun: function () {
                    _this.enableView(true);
                },
                errorFun: function () {
                    _this.enableView(true);
                }
            });
        };
        SettlementScene2.prototype.onNextUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) {
                this.enableView(false);
                MiniManeger.instance.showInsertAd({
                    successFun: function () {
                    },
                    closeFun: function () {
                        _this.enableView(true);
                        _this.nextFun();
                    },
                    errorFun: function () {
                        _this.enableView(true);
                        _this.nextFun();
                    }
                });
            }
            else {
                this.nextFun();
            }
        };
        SettlementScene2.prototype.nextFun = function () {
            var _this = this;
            PowerMgr.instance.changePowerUglify({
                count: -GameData.getInstance().defaultConfigs.powerCost,
                success: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.Type2Next, { level: _this.nextId });
                    _this.removeSelf();
                }
            });
        };
        SettlementScene2.prototype.onMoreGame = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            MiniManeger.instance.showAppBoxAd({});
        };
        SettlementScene2.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.box_lvAni.scrollRect = new Laya.Rectangle(0, 0, 770, 650);
        };
        SettlementScene2.prototype.addEvent = function () {
            this.btn_home.on(Laya.Event.CLICK, this, this.onHomeUglify);
            this.box_double.on(Laya.Event.CLICK, this, this.onSelect);
            this.btn_restart.on(Laya.Event.CLICK, this, this.onRestartUglify);
            this.btn_get.on(Laya.Event.CLICK, this, this.onGetUglify);
            this.btn_shareVideo.on(Laya.Event.CLICK, this, this.onShareVideo);
            this.btn_next.on(Laya.Event.CLICK, this, this.onNextUglify);
            if (DeviceUtil.isQQMiniGame())
                this.btn_moreGame.on(Laya.Event.CLICK, this, this.onMoreGame);
        };
        return SettlementScene2;
    }(PopBaseScene));

    var Type2GameLineToolMgr = (function () {
        function Type2GameLineToolMgr() {
            this.gestureUtil = new ur.DollarRecognizer();
            this.curentLinesPoints = [];
        }
        Type2GameLineToolMgr.getInstance = function () {
            if (!Type2GameLineToolMgr.instance) {
                Type2GameLineToolMgr.instance = new Type2GameLineToolMgr();
            }
            return Type2GameLineToolMgr.instance;
        };
        Type2GameLineToolMgr.prototype.dressingPoints = function (points) {
            if (points.length / 2 > 120) {
                for (var i = 0, len = points.length / 2; i < len; i++) {
                    if (i % 2 == 1) {
                        points.splice(i * 2, 2);
                        i--;
                        len--;
                    }
                }
            }
        };
        Type2GameLineToolMgr.prototype.addLinesPoints = function (templatLinesPoints) {
            this.clearCurentLinesPoints();
            console.log("增加模板数据--", templatLinesPoints);
            var points = [];
            for (var i = 0, len = templatLinesPoints.length; i < len; i++) {
                points = points.concat(templatLinesPoints[i].points);
            }
            this.addOneLinePoints(points);
        };
        Type2GameLineToolMgr.prototype.addOneLinePoints = function (points) {
            if (points.length < 4) {
                console.log("插入标准线段数据过少---");
                return;
            }
            var urPoints = [];
            for (var i = 0, len = points.length / 2; i < len; i++) {
                var urPoint = new ur.Point(points[i * 2], points[i * 2 + 1]);
                urPoints.push(urPoint);
            }
            var name = "level_temp_" + this.curentLinesPoints.length;
            var itemLine = new LinePoints();
            itemLine.name = name;
            itemLine.points = points;
            this.curentLinesPoints.push(itemLine);
            this.gestureUtil.AddGesture(name, urPoints);
        };
        Type2GameLineToolMgr.prototype.clearCurentLinesPoints = function () {
            this.curentLinesPoints = [];
        };
        Type2GameLineToolMgr.prototype.checkAllLinesPoints = function (checkLinesPoints, checkTypeScore) {
            if (checkTypeScore === void 0) { checkTypeScore = 0.1; }
            var points = [];
            for (var i = 0, len = checkLinesPoints.length; i < len; i++) {
                points = points.concat(checkLinesPoints[i].points);
            }
            console.log("点 >>>", JSON.stringify(points));
            var result = this.checkOneLine(points);
            console.log("result >>>", result);
            return result.Score >= checkTypeScore ? true : false;
        };
        Type2GameLineToolMgr.prototype.checkOneLine = function (points) {
            var urPoints = [];
            for (var i = 0, len = points.length / 2; i < len; i++) {
                var urPoint = new ur.Point(points[i * 2], points[i * 2 + 1]);
                urPoints.push(urPoint);
            }
            var result = this.gestureUtil.Recognize(urPoints, false);
            console.log(result.Name, result.Score, result.Time);
            return result;
        };
        Type2GameLineToolMgr.prototype.toGrayBinary = function (pixels, binary, value, sn) {
            var r, g, b, avg = 0, len = pixels.length, s = '';
            for (var i = 0; i < len; i += 4) {
                avg += (.299 * pixels[i] + .587 * pixels[i + 1] + .114 * pixels[i + 2]);
            }
            avg /= (len / 4);
            for (var i = 0; i < len; i += 4) {
                r = .299 * pixels[i];
                g = .587 * pixels[i + 1];
                b = .114 * pixels[i + 2];
                if (binary) {
                    if ((r + g + b) >= (value || avg)) {
                        g = 255;
                        if (sn)
                            s += '1';
                    }
                    else {
                        g = 0;
                        if (sn)
                            s += '0';
                    }
                    g = (r + g + b) > (value || avg) ? 255 : 0;
                }
                else {
                    g = r + g + b;
                }
                pixels[i] = g, pixels[i + 1] = g, pixels[i + 2] = g;
            }
            if (sn)
                return s;
            else
                return pixels;
        };
        Type2GameLineToolMgr.prototype.searchTexture = function (texture1, texture2) {
            var data1 = texture1.getPixels(0, 0, texture1.width, texture1.height);
            data1 = this.toGrayBinary(data1, true, null, false);
            console.log("data1", data1);
            var data2 = texture2.getPixels(0, 0, texture2.width, texture2.height);
            data2 = this.toGrayBinary(data2, true, null, false);
            console.log("data2", data2);
            var tw = texture1.width, th = texture1.height;
            var similar = 0;
            for (var i = 0, len = tw * th; i < len; i++) {
                if (data2[i] == data1[i])
                    similar++;
            }
            similar = (similar / (tw * th)) * 100;
            console.log("匹配比例：", similar);
            return similar;
        };
        Type2GameLineToolMgr.prototype.searchTexture1 = function (texture1, texture2) {
            var drawPixels = texture1.getPixels(0, 0, texture1.width, texture1.height);
            console.log("draw Pixels", drawPixels);
            var imgPixels = texture2.getPixels(0, 0, texture2.width, texture2.height);
            console.log("img Pixels", imgPixels);
            var tw = texture1.width, th = texture1.height;
            var similar = 0;
            var r = 0, g = 0, b = 0, a = 0;
            var r1 = 0, g1 = 0, b1 = 0, a1 = 0;
            for (var i = 0, len = tw * th * 4; i < len; i += 4) {
                r += drawPixels[i];
                g += drawPixels[i + 1];
                b += drawPixels[i + 2];
                a += drawPixels[i + 3];
                r1 += imgPixels[i];
                g1 += imgPixels[i + 1];
                b1 += imgPixels[i + 2];
                a1 += imgPixels[i + 3];
                var rgba1 = "" + drawPixels[i] + drawPixels[i + 1] + drawPixels[i + 2] + drawPixels[i + 3];
                var rgba2 = "" + imgPixels[i] + imgPixels[i + 1] + imgPixels[i + 2] + imgPixels[i + 3];
                if (rgba1 == rgba2)
                    similar++;
            }
            var ratio = (similar / (tw * th)) * 100;
            console.log("rgba draw：", r, g, b, a);
            console.log("rgba img：", r1, g1, b1, a1);
            console.log("匹配比例：", similar, ratio, tw * th);
            return ratio;
        };
        Type2GameLineToolMgr.prototype.test = function (parent) {
            var _this = this;
            Laya.loader.load("resource/assets/imgs/levels/type2/1/lv_1.png", Laya.Handler.create(this, function (texture1) {
                Laya.loader.load("resource/assets/imgs/levels/type2/2/lv_2.png", Laya.Handler.create(_this, function (texture2) {
                    var data1 = texture1.getPixels(0, 0, 256, 239);
                    var data2 = texture2.getPixels(0, 0, 256, 239);
                    var tw = 256, th = 239;
                    var similar = 0;
                    var r = 0, g = 0, b = 0, a = 0;
                    var r1 = 0, g1 = 0, b1 = 0, a1 = 0;
                    for (var i = 0, len = tw * th * 4; i < len; i += 4) {
                        r += data1[i];
                        g += data1[i + 1];
                        b += data1[i + 2];
                        a += data1[i + 3];
                        r1 += data2[i];
                        g1 += data2[i + 1];
                        b1 += data2[i + 2];
                        a1 += data2[i + 3];
                        var rgba1 = "" + data1[i] + data1[i + 1] + data1[i + 2] + data1[i + 3];
                        var rgba2 = "" + data2[i] + data2[i + 1] + data2[i + 2] + data2[i + 3];
                        if (rgba1 == rgba2)
                            similar++;
                    }
                    var ratio = (similar / (tw * th)) * 100;
                    console.log("rgba draw：", r, g, b, a);
                    console.log("rgba img：", r1, g1, b1, a1);
                    console.log("匹配比例：", similar, ratio, tw * th);
                }), null, Laya.Loader.TEXTURE2D);
            }), null, Laya.Loader.TEXTURE2D);
        };
        return Type2GameLineToolMgr;
    }());
    var LinePoints = (function () {
        function LinePoints() {
        }
        return LinePoints;
    }());

    var TipScene2 = (function (_super) {
        __extends(TipScene2, _super);
        function TipScene2(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "TipScene2";
            _this.viewData_ = data;
            _this.skin = "skins/game/type2/TipView2.json";
            return _this;
        }
        TipScene2.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
        };
        TipScene2.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                this.hideBanner();
                GameMgr.instance.bannerIsShow = false;
            }
            this.viewData_ = null;
        };
        TipScene2.prototype.onCloseUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        TipScene2.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        TipScene2.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
        };
        TipScene2.prototype.initView = function () {
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            this.img_tips.skin = "resource/assets/imgs/levels/type2/" + data.level + "/lv_" + data.level + ".png";
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                this.showBanner();
                GameMgr.instance.bannerIsShow = true;
            }
        };
        return TipScene2;
    }(PopBaseScene));

    var GameSceneType2 = (function (_super) {
        __extends(GameSceneType2, _super);
        function GameSceneType2(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "GameSceneType2";
            _this.isRecord = false;
            _this.playSound = false;
            _this.isSuccess = false;
            _this.isEnd = false;
            _this.currentAllPoints = [];
            _this.curentLineColor = "#ff0000";
            _this.deltaY = 0;
            _this.deltaX = 0;
            _this.viewData_ = data;
            _this.skin = "levels/type2/Type2GameScene.json";
            return _this;
        }
        GameSceneType2.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onBackUglify);
            this.btn_skin.off(Laya.Event.CLICK, this, this.onSkinUglify);
            this.btn_clear.off(Laya.Event.CLICK, this, this.onClearUglify);
            this.btn_tip.off(Laya.Event.CLICK, this, this.onTipUglify);
            this.btn_pass.off(Laya.Event.CLICK, this, this.onPassUglify);
            this.btn_record.off(Laya.Event.CLICK, this, this.onRecord);
            this.box_draw.off(Laya.Event.CLICK, this, this.onDraw);
            EventMgr.getInstance().removeEvent(GameEvent.USE_BRUSH, this, this.updateBrush);
            EventMgr.getInstance().removeEvent(GameEvent.Type2Next, this, this.onNextUglify);
            EventMgr.getInstance().removeEvent(GameEvent.Type2Restart, this, this.onRestartUglify);
        };
        GameSceneType2.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
            this.clearUglify();
            if (this.levelSke) {
                this.levelSke.offAll();
                this.levelSke.removeSelf();
                this.levelSke = null;
            }
            if (this.starSke) {
                this.starSke.offAll();
                this.starSke.removeSelf();
                this.starSke = null;
            }
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_BANNER, this.box_banner);
        };
        GameSceneType2.prototype.initView = function () {
            this.mouseEnabled = true;
            if (!this.grpDraw) {
                this.grpDraw = new Laya.Sprite();
                this.img_baseBoard.addChild(this.grpDraw);
            }
            this.img_baseBoard.visible = false;
            this.grpDraw.visible = false;
            this.deltaY = (Laya.stage.height - 1044 - 60);
            this.deltaX = (Laya.stage.width - 1036) / 2;
            this.startGame();
            this.updateBrush();
        };
        GameSceneType2.prototype.startGame = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                                MiniManeger.instance.hideBanner();
                                this.box_banner.visible = true;
                                EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_BANNER, this.box_banner);
                                GameMgr.instance.topBarIsShow = false;
                                GameMgr.instance.bannerIsShow = false;
                            }
                            if (DeviceUtil.isTTMiniGame()) {
                                MiniManeger.instance.hideBanner();
                            }
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            this.clearUglify();
                            return [4, this.updateLevel()];
                        case 1:
                            _a.sent();
                            this.addTemplate();
                            this.mouseEnabled = true;
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            this.initRecord();
                            return [2];
                    }
                });
            });
        };
        GameSceneType2.prototype.initRecord = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.btn_record.visible = true;
                this.isRecord = false;
                if (GameData.getInstance().autoMakeVideo) {
                    this.startGameRecord();
                }
                else {
                    this.btn_record.skin = "resource/assets/imgs/public/lz1.png";
                    this.btn_record.getChildByName("lab").text = "录制";
                }
            }
            else {
                this.btn_record.visible = false;
            }
        };
        GameSceneType2.prototype.onRecord = function () {
            var lab = this.btn_record.getChildByName("lab");
            if (!this.isRecord) {
                this.startGameRecord();
            }
            else {
                this.stopGameRecord();
            }
        };
        GameSceneType2.prototype.startGameRecord = function () {
            var _this = this;
            var lab = this.btn_record.getChildByName("lab");
            if (!this.isRecord) {
                this.isRecord = true;
                this.btn_record.skin = "resource/assets/imgs/public/lz2.png";
                lab.text = "录制中";
                MiniManeger.instance.startGameRecord({
                    startFun: function () { },
                    stopFun: function () {
                        _this.isRecord = false;
                        lab.text = "录制";
                        _this.btn_record.skin = "resource/assets/imgs/public/lz1.png";
                    }
                });
            }
        };
        GameSceneType2.prototype.stopGameRecord = function (force) {
            if (force === void 0) { force = false; }
            MiniManeger.instance.stopGameRecord(force);
        };
        GameSceneType2.prototype.addTemplate = function () {
            this.registPointsUglify();
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDownUglify);
        };
        GameSceneType2.prototype.registPointsUglify = function () {
            Type2GameLineToolMgr.getInstance().addLinesPoints([{ name: "templat_0", points: this.levelConf.points }]);
        };
        GameSceneType2.prototype.updateBrush = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, SkinMgr.instance.getCurBrushDataUglify()];
                        case 1:
                            data = _a.sent();
                            if (!data)
                                return [2];
                            this.img_baseBoard.skin = "resource/assets/imgs/game/type2/brushs/" + data.icon + ".png";
                            return [2];
                    }
                });
            });
        };
        GameSceneType2.prototype.updateLevel = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, ConfigManager.instance.getLevelConf2(this.viewData_.level)];
                        case 1:
                            _a.levelConf = _b.sent();
                            console.log("关卡配置", this.levelConf);
                            this.lab_level.text = "关卡" + this.viewData_.level;
                            this.lab_title.text = this.levelConf.title;
                            this.showLevelAni();
                            return [2];
                    }
                });
            });
        };
        GameSceneType2.prototype.showLevelAni = function () {
            var _this = this;
            var url = "resource/assets/imgs/levels/type2/" + this.viewData_.level + "/level" + this.viewData_.level + ".sk";
            if (!this.levelSke) {
                this.levelSke = new Laya.Skeleton();
                this.box_ani.addChild(this.levelSke);
            }
            this.levelSke.load(url, Laya.Handler.create(this, function () {
                if (!_this.levelSke.player)
                    return;
                _this.levelSke.player.playbackRate = 1;
                _this.levelSke.scale(_this.levelConf.idle.scaleX, _this.levelConf.idle.scaleY);
                _this.levelSke.pos(_this.levelConf.idle.x, _this.levelConf.idle.y);
                _this.box_ani.visible = true;
                _this.levelSke.play(_this.levelConf.idle.name, _this.levelConf.idle.loop);
            }));
        };
        GameSceneType2.prototype.showStarAni = function () {
            var _this = this;
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.starSke) return [3, 2];
                            _a = this;
                            return [4, AnimationManager.instance.creatBoonAnimation("resource/assets/imgs/levels/type2/type2_star.sk")];
                        case 1:
                            _a.starSke = _b.sent();
                            if (!this.starSke)
                                resolve();
                            _b.label = 2;
                        case 2:
                            this.box_ani.addChild(this.starSke);
                            this.starSke.pos(this.levelConf.star.x, this.levelConf.star.y);
                            this.starSke.player.once(Laya.Event.STOPPED, this, function () {
                                _this.starSke.visible = false;
                                _this.starSke.removeSelf();
                                resolve();
                            });
                            this.starSke.visible = true;
                            this.starSke.play(0, false);
                            return [2];
                    }
                });
            }); });
        };
        GameSceneType2.prototype.clearUglify = function () {
            this.btn_pass.visible = false;
            Laya.Tween.clearAll(this.btn_pass);
            this.btn_pass.scale(1, 1);
            this.btn_back.visible = this.btn_skin.visible = this.btn_tip.visible = this.btn_clear.visible = true;
            this.currDraw = null;
            this.grpDraw.removeChildren();
            this.currentAllPoints = [];
            this.img_baseBoard.visible = false;
            this.img_baseBoard.mask = null;
            this.timer.clearAll(this);
            this.lab_tip.text = "";
            this.isSuccess = false;
            this.isEnd = false;
        };
        GameSceneType2.prototype.onMouseDownUglify = function (evt) {
            if (evt.target != this.box_draw)
                return;
            this.timer.clearAll(this);
            if (!this.isSuccess)
                this.lab_tip.text = "绘图中";
            this.currentPoints = [];
            this.currentPoints.push(evt.stageX - this.deltaX);
            this.currentPoints.push(evt.stageY - this.deltaY);
            this.currDraw = new Laya.Sprite();
            this.grpDraw.addChild(this.currDraw);
            this.drawLinesUglify();
            this.img_baseBoard.visible = true;
            this.img_baseBoard.mask = this.grpDraw;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveUglify);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUpUglify);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUpUglify);
        };
        GameSceneType2.prototype.onMouseMoveUglify = function (evt) {
            if (evt.target != this.box_draw)
                return;
            if (!this.playSound) {
                this.playSound = true;
                SoundManager.instance.playEffect(SoundConst.Huaxian);
            }
            this.currentPoints.push(evt.stageX - this.deltaX);
            this.currentPoints.push(evt.stageY - this.deltaY);
            this.drawLinesUglify();
        };
        GameSceneType2.prototype.drawLinesUglify = function () {
            this.grpDraw.graphics.clear();
            this.currDraw.graphics.clear();
            this.currDraw.graphics.drawLines(0, 0, this.currentPoints, this.curentLineColor, 10);
        };
        GameSceneType2.prototype.onMouseUpUglify = function (evt) {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMoveUglify);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUpUglify);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUpUglify);
            this.playSound = false;
            this.addCurrentLine();
        };
        GameSceneType2.prototype.addCurrentLine = function () {
            var itemLine = new LinePoints();
            itemLine.name = "templat_" + this.currentAllPoints.length;
            itemLine.points = this.currentPoints;
            this.currentAllPoints.push(itemLine);
            console.log("添加当前线段的数据 >>>", this.currentAllPoints);
            if (this.isSuccess) {
                this.timer.once(2000, this, this.gameOverUglify, [3]);
            }
            else {
                this.lab_tip.text = "校验中";
                this.timer.once(2000, this, this.onCheckUglify);
            }
        };
        GameSceneType2.prototype.onCheckUglify = function () {
            var isSuc = Type2GameLineToolMgr.getInstance().checkAllLinesPoints(this.currentAllPoints, this.levelConf.perset);
            console.log("校验 >>>", this.currentAllPoints, isSuc);
            if (isSuc) {
                this.checkSucc();
            }
            else {
                this.isSuccess = false;
                this.lab_tip.text = "校验失败";
            }
        };
        GameSceneType2.prototype.checkSucc = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.isSuccess = true;
                            this.lab_tip.text = "校验成功";
                            this.btn_back.visible = this.btn_skin.visible = this.btn_tip.visible = this.btn_clear.visible = false;
                            this.btn_pass.visible = true;
                            EffectUtil.showScaleFix(this.btn_pass, 1.2, 500, true);
                            return [4, this.showStarAni()];
                        case 1:
                            _a.sent();
                            this.levelSke.stop();
                            this.levelSke.player.once(Laya.Event.STOPPED, this, function () {
                                !_this.isEnd && _this.timer.once(2000, _this, _this.gameOverUglify, [2]);
                            });
                            this.levelSke.play(this.levelConf.succ.name, this.levelConf.succ.loop);
                            return [2];
                    }
                });
            });
        };
        GameSceneType2.prototype.onNextUglify = function (data) {
            console.log("下一关 >>>", data);
            this.viewData_.level = data.level;
            this.startGame();
        };
        GameSceneType2.prototype.onRestartUglify = function () {
            console.log("重玩");
            this.startGame();
        };
        GameSceneType2.prototype.onBackUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.stopGameRecord(true);
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
        };
        GameSceneType2.prototype.onSkinUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            ViewManager.getInstance().showView(BrushScene, { type: 2 });
        };
        GameSceneType2.prototype.onClearUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.clearUglify();
        };
        GameSceneType2.prototype.onTipUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (GameData.getInstance().videoOpen) {
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        ViewManager.getInstance().showView(TipScene2, { level: _this.viewData_.level });
                    },
                    failFun: function () {
                    },
                    errorFun: function () {
                    }
                });
            }
            else {
                MiniManeger.instance.shareAppMessage({
                    sucFun: function () {
                        ViewManager.getInstance().showView(TipScene2, { level: _this.viewData_.level });
                    },
                    failFun: function () {
                    }
                });
            }
        };
        GameSceneType2.prototype.onPassUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.gameOverUglify(1);
        };
        GameSceneType2.prototype.gameOverUglify = function (id) {
            console.log("游戏结束", id);
            this.isEnd = true;
            this.timer.clearAll(this);
            this.mouseEnabled = false;
            this.stopGameRecord(true);
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDownUglify);
            EventMgr.getInstance().sendEvent(GameEvent.Type2GameOver, { level: this.viewData_.level });
            this.box_ani.visible = false;
            GameInfoManager.getInstance().saveLevelDataById(this.viewData_.level, this.currentAllPoints);
        };
        GameSceneType2.prototype.onDraw = function () {
        };
        GameSceneType2.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            if (DeviceUtil.getIsIphoneX()) {
                this.btn_back.top += GameData.getInstance().fullScreenOffSet;
                this.lab_level.top += GameData.getInstance().fullScreenOffSet;
            }
            if (GameData.getInstance().isConVersion) {
                this.btn_tip.visible = this.btn_skin.visible = false;
            }
            if (GameData.getInstance().videoOpen) {
                this.btn_tip.getChildByName("icon").skin = "resource/assets/imgs/public/game_icon_4.png";
            }
            else {
                this.btn_tip.getChildByName("icon").skin = "resource/assets/imgs/public/settlement_icon_5.png";
            }
            if (DeviceUtil.isTTMiniGame()) {
                this.img_tipbox.bottom = 80;
                this.btn_clear.bottom = 150;
                this.btn_tip.bottom = 150;
            }
        };
        GameSceneType2.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.addEvent();
            }
        };
        GameSceneType2.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        GameSceneType2.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onBackUglify);
            this.btn_skin.on(Laya.Event.CLICK, this, this.onSkinUglify);
            this.btn_clear.on(Laya.Event.CLICK, this, this.onClearUglify);
            this.btn_tip.on(Laya.Event.CLICK, this, this.onTipUglify);
            this.btn_pass.on(Laya.Event.CLICK, this, this.onPassUglify);
            this.btn_record.on(Laya.Event.CLICK, this, this.onRecord);
            this.box_draw.on(Laya.Event.CLICK, this, this.onDraw);
            EventMgr.getInstance().addEvent(GameEvent.USE_BRUSH, this, this.updateBrush);
            EventMgr.getInstance().addEvent(GameEvent.Type2Next, this, this.onNextUglify);
            EventMgr.getInstance().addEvent(GameEvent.Type2Restart, this, this.onRestartUglify);
        };
        return GameSceneType2;
    }(BaseSceneUISkin));

    var ChooseItem2 = (function (_super) {
        __extends(ChooseItem2, _super);
        function ChooseItem2(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ChooseItem2";
            _this.viewData_ = _data;
            _this.skin = "skins/game/type2/choose/ChooseItem2.json";
            return _this;
        }
        ChooseItem2.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.off(Laya.Event.CLICK, this, this.onSelect);
            this.viewData_ = null;
        };
        ChooseItem2.prototype.initView = function () {
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            this.off(Laya.Event.CLICK, this, this.onSelect);
            this.img_pass.visible = this.box_draw.visible = false;
            this.lab_level.text = data.id + "";
            this.img_bg.skin = data.unlock ? "resource/assets/imgs/game/type2/chapter2/checkpoint_baseboard_3.png" : "resource/assets/imgs/game/type2/chapter2/checkpoint_baseboard_4.png";
            this.img_title.skin = data.unlock ? "resource/assets/imgs/game/type2/chapter2/checkpoint_db2.png" : "resource/assets/imgs/game/type2/chapter2/checkpoint_db1.png";
            this.img_lock.visible = !data.unlock;
            if (data.unlock) {
                if (!data.isCur) {
                    this.img_pass.visible = this.box_draw.visible = true;
                    this.drawData = GameInfoManager.getInstance().selectLevelDataById(data.id);
                    this.onDraw();
                }
                this.on(Laya.Event.CLICK, this, this.onSelect);
            }
        };
        ChooseItem2.prototype.onDraw = function () {
            var _this = this;
            if (!this.drawData)
                return;
            if (!this.sp) {
                this.sp = new Laya.Sprite();
                this.box_draw.addChild(this.sp);
            }
            else {
                this.sp.graphics.clear();
            }
            this.drawData.forEach(function (item) {
                var sx = _this.box_draw.width / 1036;
                var sy = _this.box_draw.height / 1044;
                var tempArr = [];
                for (var i = 0; i < item.points.length; i += 2) {
                    tempArr.push(Math.round(item.points[i] * sx));
                    tempArr.push(Math.round(item.points[i + 1] * sy));
                }
                _this.sp.graphics.drawLines(0, 0, tempArr, "#000000", 4);
            });
        };
        ChooseItem2.prototype.onSelect = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.Type2Select, this.viewData_.id);
        };
        ChooseItem2.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        ChooseItem2.prototype.adaptationStage = function () {
        };
        ChooseItem2.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
            }
        };
        ChooseItem2.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        return ChooseItem2;
    }(BaseSceneUISkin));

    var ChooseScene2 = (function (_super) {
        __extends(ChooseScene2, _super);
        function ChooseScene2() {
            var _this = _super.call(this) || this;
            _this.className_key = "ChooseScene2";
            _this.showEnterType = null;
            _this.curPage = 1;
            _this.maxPage = 3;
            _this.isPlaying = false;
            _this.distance = 975 + 20;
            _this.skin = "skins/game/type2/choose/ChooseView2.json";
            return _this;
        }
        ChooseScene2.prototype.removeEvent = function () {
            this.btn_last.off(Laya.Event.CLICK, this, this.onLast);
            this.btn_next.off(Laya.Event.CLICK, this, this.onNext);
            this.btn_close.off(Laya.Event.CLICK, this, this.onCloseUglify);
            this.btn_skin.off(Laya.Event.CLICK, this, this.onSkinUglify);
            this.box_level.off(Laya.Event.MOUSE_DOWN, this, this.mouseDownUglify);
            this.box_level.off(Laya.Event.MOUSE_UP, this, this.mouseUpUglify);
            this.box_level.off(Laya.Event.MOUSE_OUT, this, this.mouseUpUglify);
            EventMgr.getInstance().removeEvent(GameEvent.Type2Select, this, this.enterGameUglify);
        };
        ChooseScene2.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.levelData = null;
        };
        ChooseScene2.prototype.showInsertAd = function () {
            MiniManeger.instance.showInsertAd({
                successFun: function () {
                },
                closeFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        ChooseScene2.prototype.refreshUIUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, i, box_1, start, dataArr, box, i, len, data, item;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.levelData) return [3, 2];
                            _a = this;
                            return [4, PatternMgr.instance.getLevelData2Uglify()];
                        case 1:
                            _a.levelData = _b.sent();
                            this.maxPage = Math.ceil(this.levelData.length / 10);
                            for (i = 0; i < this.maxPage; i++) {
                                box_1 = this.box_level.getChildAt(i);
                                if (!box_1) {
                                    box_1 = new Laya.Box();
                                    box_1.size(975, 397);
                                    box_1.x = (975 + 20) * i;
                                    this.box_level.addChild(box_1);
                                }
                            }
                            _b.label = 2;
                        case 2:
                            start = (this.curPage - 1) * 10;
                            dataArr = this.levelData.slice(start, start + 10);
                            box = this.box_level.getChildAt(this.curPage - 1);
                            for (i = 0, len = dataArr.length; i < len; i++) {
                                data = dataArr[i];
                                item = box.getChildAt(i);
                                if (item) {
                                    item.setData(data);
                                }
                                else {
                                    item = new ChooseItem2(data);
                                    item.x = (i % 5) * (179 + 20);
                                    item.y = Math.floor(i / 5) * (180 + 37);
                                    box.addChild(item);
                                }
                            }
                            this.refreshBtnUglify();
                            this.showLevelAniUglify();
                            return [2];
                    }
                });
            });
        };
        ChooseScene2.prototype.refreshBtnUglify = function () {
            this.btn_last.disabled = this.curPage == 1;
            this.btn_next.disabled = this.curPage == this.maxPage;
        };
        ChooseScene2.prototype.showLevelAniUglify = function () {
            var _this = this;
            var lv = 1 + 10 * (this.curPage - 1);
            var url = "resource/assets/imgs/levels/type2/" + lv + "/level" + lv + ".sk";
            if (!this.levelSke) {
                this.levelSke = new Laya.Skeleton();
                this.box_ani.addChild(this.levelSke);
            }
            this.levelSke.load(url, Laya.Handler.create(this, function () {
                if (!_this.levelSke.player)
                    return;
                _this.levelSke.player.playbackRate = 1;
                _this.levelSke.scale(1, 1);
                _this.levelSke.pos(390, 330);
                _this.box_ani.visible = true;
                _this.levelSke.play(0, true);
            }));
        };
        ChooseScene2.prototype.onLast = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.listAni(1);
        };
        ChooseScene2.prototype.onNext = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.listAni(-1);
        };
        ChooseScene2.prototype.onCloseUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        ChooseScene2.prototype.onSkinUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(["skin2"], function () {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                ViewManager.getInstance().showView(BrushScene, { type: 1 });
            });
        };
        ChooseScene2.prototype.mouseDownUglify = function (evt) {
            if (this.isPlaying || this.maxPage == 1)
                return;
            this.box_level.on(Laya.Event.MOUSE_UP, this, this.mouseUpUglify);
            this.box_level.on(Laya.Event.MOUSE_OUT, this, this.mouseUpUglify);
            this.startX = evt.stageX;
        };
        ChooseScene2.prototype.mouseUpUglify = function (evt) {
            if (this.isPlaying || !this.startX)
                return;
            this.box_level.off(Laya.Event.MOUSE_UP, this, this.mouseUpUglify);
            this.box_level.off(Laya.Event.MOUSE_OUT, this, this.mouseUpUglify);
            var a = evt.stageX - this.startX;
            this.startX = null;
            if (a > 0 && Math.abs(a) >= 100) {
                if (this.curPage == 1)
                    return;
                this.listAni(1);
            }
            else if (a < 0 && Math.abs(a) >= 100) {
                if (this.curPage == this.maxPage)
                    return;
                this.listAni(-1);
            }
        };
        ChooseScene2.prototype.listAni = function (direction, time) {
            if (time === void 0) { time = 300; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.isPlaying = true;
                            this.enableView(false);
                            this.curPage += direction * -1;
                            return [4, this.refreshUIUglify()];
                        case 1:
                            _a.sent();
                            return [4, Promise.all(Array.apply(void 0, Array(this.maxPage)).map(function (v, i) {
                                    return _this.singleAni(i, direction, time);
                                }))];
                        case 2:
                            _a.sent();
                            this.isPlaying = false;
                            this.enableView(true);
                            return [2];
                    }
                });
            });
        };
        ChooseScene2.prototype.singleAni = function (index, direction, time) {
            var _this = this;
            return new Promise(function (resolve) {
                var item = _this.box_level.getChildAt(index);
                var pos = { x: item.x + _this.distance * direction };
                Laya.Tween.to(item, pos, time, null, Laya.Handler.create(_this, function () {
                    resolve();
                }));
            });
        };
        ChooseScene2.prototype.enterGameUglify = function (data) {
            var _this = this;
            PowerMgr.instance.changePowerUglify({
                count: -GameData.getInstance().defaultConfigs.powerCost,
                success: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                    ResUtil.getIntance().loadGroups(["game2", "skin2"], function () {
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                        EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "GameSceneType2", data: { level: data } });
                        _this.removeSelf();
                    });
                }
            });
        };
        ChooseScene2.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.box_level.scrollRect = new Laya.Rectangle(0, 0, 975, 397);
            this.box_ani.scrollRect = new Laya.Rectangle(0, 0, 770, 650);
        };
        ChooseScene2.prototype.addEvent = function () {
            this.btn_last.on(Laya.Event.CLICK, this, this.onLast);
            this.btn_next.on(Laya.Event.CLICK, this, this.onNext);
            this.btn_close.on(Laya.Event.CLICK, this, this.onCloseUglify);
            this.btn_skin.on(Laya.Event.CLICK, this, this.onSkinUglify);
            EventMgr.getInstance().addEvent(GameEvent.Type2Select, this, this.enterGameUglify);
        };
        ChooseScene2.prototype.initView = function () {
            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame())
                this.showInsertAd();
            if (GameData.getInstance().isConVersion) {
                this.btn_skin.visible = false;
            }
            this.refreshUIUglify();
        };
        return ChooseScene2;
    }(PopBaseScene));

    var DYChannelMgr = (function () {
        function DYChannelMgr() {
            this.url = "https://zy.qkxz.com/WxApi/?webid=72";
            this.version = 1;
            this.nGameID = 0;
            this.gameListInfos = [];
            this.bannerInfos = [];
            this._moreGameList = [];
        }
        Object.defineProperty(DYChannelMgr, "instance", {
            get: function () {
                if (!DYChannelMgr.ins)
                    DYChannelMgr.ins = new DYChannelMgr();
                return DYChannelMgr.ins;
            },
            enumerable: true,
            configurable: true
        });
        DYChannelMgr.prototype.initConfig = function (res) {
            this.url = res.url;
            this.version = res.version;
        };
        DYChannelMgr.prototype.loginGame = function () {
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var userinfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!DeviceUtil.isWXMiniGame()) return [3, 2];
                            return [4, this.WXLogin()];
                        case 1:
                            userinfo = _a.sent();
                            return [3, 4];
                        case 2:
                            if (!DeviceUtil.isTTMiniGame()) return [3, 4];
                            return [4, this.TTLogin()];
                        case 3:
                            userinfo = _a.sent();
                            _a.label = 4;
                        case 4:
                            if (userinfo) {
                                this.openid = userinfo.openid;
                                GameData.getInstance().userInfo.openId = userinfo.openid;
                            }
                            resolve(userinfo);
                            return [2];
                    }
                });
            }); });
        };
        DYChannelMgr.prototype.WXLogin = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                wx.login({
                    success: function (res) {
                        if (res.code) {
                            console.log("code：", res.code);
                            var obj = {
                                code: res.code,
                                nickName: "",
                                avatarUrl: "",
                                gender: 0,
                                scene: encodeURIComponent(MiniManeger.instance.launchOption.scene)
                            };
                            HttpMgr.getInstance().sendHttp(_this.url + "&act=userinfo&version=" + _this.version + "&", obj, function (rev) {
                                var jsonRev = rev.data;
                                console.log("DY---> login success", rev);
                                resolve(jsonRev);
                            }, function (err) {
                                console.warn("DY---> login fail = ", err);
                                reject();
                            }, "get");
                        }
                        else {
                            console.warn("微信登录失败：", res);
                            reject();
                        }
                    },
                    fail: function (err) {
                        console.log("login调用失败", err);
                        reject();
                    }
                });
            });
        };
        DYChannelMgr.prototype.TTLogin = function () {
            return new Promise(function (resolve, reject) {
            });
        };
        DYChannelMgr.prototype.startGame = function () {
            var _this = this;
            return new Promise(function (resolve) {
                HttpMgr.getInstance().sendHttp(_this.url + "&act=index&version=" + _this.version + "&openid=" + _this.openid + "&", null, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> startGame rev = ", rev);
                    _this.nGameID = jsonRev.id;
                    resolve(jsonRev.id);
                }, null, "get");
            });
        };
        DYChannelMgr.prototype.endGame = function (obj) {
            var _this = this;
            return new Promise(function (resolve) {
                HttpMgr.getInstance().sendHttp(_this.url + "&act=end&version=" + _this.version + "&openid=" + _this.openid + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> endGame rev = ", rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        DYChannelMgr.prototype.clickGame = function (id) {
            HttpMgr.getInstance().sendHttp(this.url + "&act=game&version=" + this.version + "&id=" + id + "&openid=" + this.openid, null, function (rev) {
                console.log("DY---> clickGame rev = ", rev);
            }, null, "get");
        };
        DYChannelMgr.prototype.toGame = function (id) {
            HttpMgr.getInstance().sendHttp(this.url + "&act=cgame&version=" + this.version + "&id=" + id + "&openid=" + this.openid, null, function (rev) {
                console.log("DY---> toGame rev = ", rev);
            }, null, "get");
        };
        Object.defineProperty(DYChannelMgr.prototype, "moreGameList", {
            get: function () {
                return Utils.copy(this._moreGameList);
            },
            set: function (data) {
                this._moreGameList = data;
            },
            enumerable: true,
            configurable: true
        });
        DYChannelMgr.prototype.getGameList = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var url = _this.url + "&act=gamelist&version=" + _this.version + "&openid=" + _this.openid + "&v=" + Math.random();
                HttpMgr.getInstance().sendHttp(url, null, function (rev) {
                    console.log("DY---> getGameList rev = ", rev);
                    _this.bannerInfos = rev.data.banner;
                    _this.gameListInfos = rev.data.gamelist;
                    resolve(rev.data.gamelist);
                }, null, "get");
            });
        };
        DYChannelMgr.prototype.refreshGameList = function (reload) {
            var _this = this;
            if (reload === void 0) { reload = true; }
            return new Promise(function (resolve) {
                if (!reload && _this._moreGameList && _this._moreGameList.length > 0) {
                    resolve();
                    return;
                }
                _this.getGameList().then(function () {
                    _this._moreGameList = [];
                    var nLen = 0;
                    if (_this.gameListInfos)
                        nLen = _this.gameListInfos.length;
                    for (var i = 0; i < nLen; ++i) {
                        var stData = new MoreGameInfo();
                        stData.ad_id = _this.gameListInfos[i].id;
                        stData.ad_img = _this.gameListInfos[i].img;
                        stData.name = _this.gameListInfos[i].title;
                        stData.ad_appid = _this.gameListInfos[i].appid;
                        stData.url = _this.gameListInfos[i].url;
                        _this._moreGameList.push(stData);
                    }
                    console.log("refreshGameList = ", _this._moreGameList);
                    resolve();
                });
            });
        };
        DYChannelMgr.prototype.getRandomIndex = function (nMax) {
            if (!this._moreGameList || this._moreGameList.length <= 0) {
                return [];
            }
            var nRandom = Utils.random(0, this._moreGameList.length - 1);
            var nCount = this._moreGameList.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = this._moreGameList.length + nCount;
            if (nCount <= nMax) {
                nCount = nMax;
            }
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= this._moreGameList.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        return DYChannelMgr;
    }());
    var MoreGameInfo = (function () {
        function MoreGameInfo() {
            this.ad_id = "";
            this.ad_img = "";
            this.name = "";
            this.ad_appid = "";
            this.url = "";
        }
        return MoreGameInfo;
    }());

    var DYMoreGameDrawerItem = (function (_super) {
        __extends(DYMoreGameDrawerItem, _super);
        function DYMoreGameDrawerItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameDrawerItem";
            _this.data = data_;
            _this.size(210, 258);
            _this.createUI();
            return _this;
        }
        DYMoreGameDrawerItem.prototype.createUI = function () {
            this.img_db = new Laya.Image();
            this.img_db.sizeGrid = "15,15,55,15";
            this.img_db.skin = "resource/assets/channel/duyou/game_baseboard_1.png";
            this.img_db.size(210, 258);
            this.addChild(this.img_db);
            this.img_icon = new Laya.Image();
            this.img_icon.centerX = 0;
            this.img_icon.y = 6;
            this.img_icon.size(198, 198);
            this.addChild(this.img_icon);
            this.lab_name = new Laya.Label();
            this.lab_name.font = "SimHei";
            this.lab_name.fontSize = 30;
            this.lab_name.color = "#ffffff";
            this.lab_name.centerX = 0;
            this.lab_name.y = 215;
            this.addChild(this.lab_name);
        };
        DYMoreGameDrawerItem.prototype.setData = function (data_) {
            this.data = data_;
            this.addEvent();
            this.initView();
        };
        DYMoreGameDrawerItem.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameDrawerItem.prototype.initView = function () {
            var data = this.data;
            if (data < 0 || data >= DYChannelMgr.instance.moreGameList.length) {
                data = DYChannelMgr.instance.moreGameList.length - 1;
                if (data < 0)
                    return;
            }
            var gameInfo = DYChannelMgr.instance.moreGameList[data];
            this.lab_name.text = gameInfo.name;
            this.img_icon.skin = gameInfo.ad_img;
            this.gameInfo = gameInfo;
        };
        DYMoreGameDrawerItem.prototype.onMouseDown = function () {
            var _this = this;
            var startTime = (new Date()).getTime();
            var mouseUp = function (evt) {
                var endTime = (new Date()).getTime();
                if (endTime - startTime <= 150) {
                    _this.onPlay();
                }
                _this.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.off(Laya.Event.MOUSE_OUT, _this, mouseOut);
            };
            var mouseOut = function (evt) {
            };
            this.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
        };
        DYMoreGameDrawerItem.prototype.onPlay = function () {
            if (!this.gameInfo)
                return;
            var data = this.gameInfo;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                    EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, true);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMoreGameDrawerItem.prototype.removeEvent = function () {
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        DYMoreGameDrawerItem.prototype.onRemoved = function () {
            this.removeEvent();
            this.data = null;
            this.gameInfo = null;
            Laya.Pool.recover("DYMoreGameDrawerItem", this);
        };
        return DYMoreGameDrawerItem;
    }(Laya.Box));

    var DYMoreGameDrawer = (function (_super) {
        __extends(DYMoreGameDrawer, _super);
        function DYMoreGameDrawer() {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameDrawer";
            _this.isShow = false;
            _this.isPlaying = false;
            _this.autoMove = true;
            _this.nStartY = 0;
            _this.name = "DYMoreGameDrawer";
            _this.skin = "skins/channel/duyou/DYMoreGameDrawer.json";
            return _this;
        }
        DYMoreGameDrawer.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.box_db.width = Laya.stage.width;
            this.box_db.height = Laya.stage.height;
            this.mouseThrough = true;
        };
        DYMoreGameDrawer.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        DYMoreGameDrawer.prototype.addEvent = function () {
            this.btn_switch.on(Laya.Event.CLICK, this, this.onSwitch);
            this.box_db.on(Laya.Event.CLICK, this, this.onSwitch);
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameDrawer.prototype.initView = function () {
            this.box_db.visible = false;
            this.isPlaying = false;
            this.btn_switch.skin = "resource/assets/channel/duyou/game_button_2.png";
            this.box_content.right = -713;
            this.isShow = false;
            this.img_tips_p.visible = true;
            AnimationManager.instance.tipPointShake(this.img_tips_p, true);
        };
        DYMoreGameDrawer.prototype.onSwitch = function () {
            if (this.isPlaying)
                return;
            this.isShow = !this.isShow;
            this.switchShow(this.isShow);
        };
        DYMoreGameDrawer.prototype.switchShow = function (show, time) {
            var _this = this;
            if (time === void 0) { time = 300; }
            if (this.isPlaying)
                return;
            this.isShow = show;
            this.isPlaying = true;
            if (this.isShow) {
                this.box_db.visible = true;
                Laya.Tween.to(this.box_content, { right: 0 }, time, null, Laya.Handler.create(this, function () {
                    _this.initList();
                    _this.btn_switch.skin = "resource/assets/channel/duyou/game_button_3.png";
                    _this.img_tips_p.visible = false;
                    _this.isPlaying = false;
                }));
            }
            else {
                Laya.Tween.to(this.box_content, { right: -713 }, time, null, Laya.Handler.create(this, function () {
                    Laya.timer.clearAll(_this);
                    _this.btn_switch.skin = "resource/assets/channel/duyou/game_button_2.png";
                    _this.box_db.visible = false;
                    _this.img_tips_p.visible = true;
                    _this.isPlaying = false;
                }));
            }
        };
        DYMoreGameDrawer.prototype.initList = function () {
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = DYChannelMgr.instance.getRandomIndex(12);
            this.box_game1.removeChildren();
            this.box_game1.y = 0;
            for (var i = 0; i < aryInfo.length; ++i) {
                var item = this.box_game1.getChildAt(i);
                if (item) {
                    item.setData(aryInfo[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameDrawerItem", DYMoreGameDrawerItem);
                    item.setData(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    item.x = nXStart + item.width * nAddX + 15 * nAddX;
                    item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                    this.box_game1.addChild(item);
                    this.box_game1.height = item.y + item.height + 10;
                }
            }
            this.box_game2.y = this.box_game1.height;
            this.box_game2.removeChildren();
            for (var i = 0; i < aryInfo.length; ++i) {
                var item = this.box_game2.getChildAt(i);
                if (item) {
                    item.setData(aryInfo[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameDrawerItem", DYMoreGameDrawerItem);
                    item.setData(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    item.x = nXStart + item.width * nAddX + 15 * nAddX;
                    item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                    this.box_game2.addChild(item);
                    this.box_game2.height = item.y + item.height + 10;
                }
            }
            if (aryInfo.length) {
                this.autoMove = true;
                Laya.timer.frameLoop(1, this, this.onMove);
            }
            DYChannelMgr.instance.refreshGameList();
        };
        DYMoreGameDrawer.prototype.onMove = function () {
            if (!this.autoMove)
                return;
            var nHight = this.box_game1.height;
            this.box_game2.y -= 1.5;
            this.box_game1.y -= 1.5;
            if (this.box_game1.y <= -nHight) {
                this.box_game1.y = this.box_game2.y + nHight;
            }
            if (this.box_game2.y <= -nHight) {
                this.box_game2.y = this.box_game1.y + nHight;
            }
        };
        DYMoreGameDrawer.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            var mouseMove = function (evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.box_game1.y -= nYTemp;
                self.box_game2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.box_game1.y >= 0 && self.box_game2.y >= 0) {
                    self.box_game1.y = 0;
                    self.box_game2.y = self.box_game1.height;
                }
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        DYMoreGameDrawer.prototype.removeEvent = function () {
            this.btn_switch.off(Laya.Event.CLICK, this, this.onSwitch);
            this.box_db.off(Laya.Event.CLICK, this, this.onSwitch);
            this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameDrawer.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.isPlaying = false;
            this.isShow = false;
            Laya.timer.clearAll(this);
            AnimationManager.instance.tipPointShake(this.img_tips_p, false);
        };
        return DYMoreGameDrawer;
    }(BaseSceneUISkin));

    var DYMoreGameBanner = (function (_super) {
        __extends(DYMoreGameBanner, _super);
        function DYMoreGameBanner() {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameBanner";
            _this.itemW = 250;
            _this.autoMove = true;
            _this.nStartX = 0;
            _this.name = "DYMoreGameBanner";
            _this.skin = "skins/channel/duyou/DYMoreGameBanner.json";
            return _this;
        }
        DYMoreGameBanner.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        DYMoreGameBanner.prototype.adaptationStage = function () {
        };
        DYMoreGameBanner.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        DYMoreGameBanner.prototype.addEvent = function () {
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameBanner.prototype.initView = function () {
            var dataArr = DYChannelMgr.instance.moreGameList;
            this.box_view1.x = 0;
            this.box_view1.removeChildren();
            var len = dataArr.length;
            for (var i = 0; i < len; i++) {
                var item = this.box_view1.getChildAt(i);
                if (item) {
                    item.setData(dataArr[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameBannerItem", DYMoreGameBannerItem);
                    item.setData(dataArr[i]);
                    item.x = (this.itemW + 20) * i;
                    this.box_view1.addChild(item);
                }
            }
            this.box_view1.width = (this.itemW + 20) * len;
            this.box_view2.x = this.box_view1.width;
            this.box_view2.removeChildren();
            for (var i = 0; i < len; i++) {
                var item = this.box_view2.getChildAt(i);
                if (item) {
                    item.setData(dataArr[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameBannerItem", DYMoreGameBannerItem);
                    item.setData(dataArr[i]);
                    item.x = (this.itemW + 20) * i;
                    this.box_view2.addChild(item);
                }
            }
            this.box_view2.width = (this.itemW + 20) * len;
            if (len) {
                this.autoMove = true;
                Laya.timer.frameLoop(1, this, this.onMove);
            }
        };
        DYMoreGameBanner.prototype.onMove = function () {
            if (!this.autoMove)
                return;
            var nWidth = this.box_view1.width;
            this.box_view2.x -= 2;
            this.box_view1.x -= 2;
            if (this.box_view1.x <= -nWidth) {
                this.box_view1.x = this.box_view2.x + nWidth;
            }
            if (this.box_view2.x <= -nWidth) {
                this.box_view2.x = this.box_view1.x + nWidth;
            }
        };
        DYMoreGameBanner.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.nStartX = evt.currentTarget.mouseX;
            var self = this;
            var mouseMove = function (evt1) {
                var nXTemp = self.nStartX - evt1.currentTarget.mouseX;
                self.box_view1.x -= nXTemp;
                self.box_view2.x -= nXTemp;
                self.nStartX = evt1.currentTarget.mouseX;
                if (self.box_view1.x >= 0 && self.box_view2.x >= 0) {
                    self.box_view1.x = 0;
                    self.box_view2.x = self.box_view1.width;
                }
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        DYMoreGameBanner.prototype.removeEvent = function () {
            this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameBanner.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this);
        };
        return DYMoreGameBanner;
    }(BaseSceneUISkin));
    var DYMoreGameBannerItem = (function (_super) {
        __extends(DYMoreGameBannerItem, _super);
        function DYMoreGameBannerItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameBannerItem";
            _this.data = data_;
            _this.size(250, 250);
            _this.createUI();
            return _this;
        }
        DYMoreGameBannerItem.prototype.createUI = function () {
            this.img_icon = new Laya.Image();
            this.img_icon.centerX = 0;
            this.img_icon.y = 0;
            this.img_icon.size(250, 250);
            this.addChild(this.img_icon);
        };
        DYMoreGameBannerItem.prototype.setData = function (data_) {
            this.data = data_;
            this.addEvent();
            this.initView();
        };
        DYMoreGameBannerItem.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameBannerItem.prototype.initView = function () {
            if (!this.data)
                return;
            var data = this.data;
            this.img_icon.skin = data.ad_img;
        };
        DYMoreGameBannerItem.prototype.onMouseDown = function () {
            var _this = this;
            var startTime = (new Date()).getTime();
            var mouseUp = function (evt) {
                var endTime = (new Date()).getTime();
                if (endTime - startTime <= 150) {
                    _this.onPlay();
                }
                _this.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.off(Laya.Event.MOUSE_OUT, _this, mouseOut);
            };
            var mouseOut = function (evt) {
            };
            this.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
        };
        DYMoreGameBannerItem.prototype.onPlay = function () {
            if (!this.data)
                return;
            var data = this.data;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                    EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, true);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMoreGameBannerItem.prototype.removeEvent = function () {
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameBannerItem.prototype.onRemoved = function () {
            this.removeEvent();
            this.data = null;
            Laya.Pool.recover("DYMoreGameBannerItem", this);
        };
        return DYMoreGameBannerItem;
    }(Laya.Box));

    var DYMoreGameRandomItem = (function (_super) {
        __extends(DYMoreGameRandomItem, _super);
        function DYMoreGameRandomItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameRandomItem";
            _this.data = data_;
            _this.size(320, 390);
            _this.createUI();
            return _this;
        }
        DYMoreGameRandomItem.prototype.createUI = function () {
            this.img_db = new Laya.Image();
            this.img_db.sizeGrid = "15,15,95,15";
            this.img_db.skin = "resource/assets/channel/duyou/box_baseboard_1.png";
            this.img_db.size(320, 390);
            this.addChild(this.img_db);
            this.img_icon = new Laya.Image();
            this.img_icon.centerX = 0;
            this.img_icon.y = 9;
            this.img_icon.size(300, 300);
            this.addChild(this.img_icon);
            this.lab_name = new Laya.Label();
            this.lab_name.font = "SimHei";
            this.lab_name.fontSize = 40;
            this.lab_name.color = "#ffffff";
            this.lab_name.centerX = 0;
            this.lab_name.y = 325;
            this.addChild(this.lab_name);
        };
        DYMoreGameRandomItem.prototype.setData = function (data_) {
            this.data = data_;
            this.addEvent();
            this.initView();
        };
        DYMoreGameRandomItem.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameRandomItem.prototype.initView = function () {
            var data = this.data;
            if (data < 0 || data >= DYChannelMgr.instance.moreGameList.length) {
                data = DYChannelMgr.instance.moreGameList.length - 1;
                if (data < 0)
                    return;
            }
            var gameInfo = DYChannelMgr.instance.moreGameList[data];
            this.lab_name.text = gameInfo.name;
            this.img_icon.skin = gameInfo.ad_img;
            this.gameInfo = gameInfo;
        };
        DYMoreGameRandomItem.prototype.onMouseDown = function () {
            var _this = this;
            var startTime = (new Date()).getTime();
            var mouseUp = function (evt) {
                var endTime = (new Date()).getTime();
                if (endTime - startTime <= 150) {
                    _this.onPlay();
                }
                _this.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.off(Laya.Event.MOUSE_OUT, _this, mouseOut);
            };
            var mouseOut = function (evt) {
            };
            this.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
        };
        DYMoreGameRandomItem.prototype.onPlay = function () {
            if (!this.gameInfo)
                return;
            var data = this.gameInfo;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMoreGameRandomItem.prototype.removeEvent = function () {
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        DYMoreGameRandomItem.prototype.onRemoved = function () {
            this.removeEvent();
            this.data = null;
            this.gameInfo = null;
            Laya.Pool.recover("DYMoreGameRandomItem", this);
        };
        return DYMoreGameRandomItem;
    }(Laya.Box));

    var DYMoreGameRandom = (function (_super) {
        __extends(DYMoreGameRandom, _super);
        function DYMoreGameRandom(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameRandom";
            _this.autoMove = true;
            _this.nStartY = 0;
            _this.viewData_ = data;
            _this.name = "DYMoreGameRandom";
            _this.skin = "skins/channel/duyou/DYMoreGameRandom.json";
            return _this;
        }
        DYMoreGameRandom.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.btn_random.visible = false;
            this.addEvent();
            this.initView(this.viewData_.first);
        };
        DYMoreGameRandom.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.addEvent();
                this.initView(data.first);
            }
        };
        DYMoreGameRandom.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
            this.btn_continue.on(Laya.Event.CLICK, this, this.onContinue);
            this.btn_random.on(Laya.Event.CLICK, this, this.onRandom);
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameRandom.prototype.initView = function (init) {
            var _this = this;
            this.viewData_.showFun && this.viewData_.showFun();
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_EXIT_BTN);
            if (!init) {
                this.btn_random.visible = true;
                Laya.timer.once(5000, this, function () {
                    _this.btn_random.visible = false;
                });
            }
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = DYChannelMgr.instance.getRandomIndex(18);
            this.box_game1.removeChildren();
            this.box_game1.y = 0;
            for (var i = 0; i < aryInfo.length; ++i) {
                var item = this.box_game1.getChildAt(i);
                if (item) {
                    item.setData(aryInfo[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameRandomItem", DYMoreGameRandomItem);
                    item.setData(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    item.x = nXStart + item.width * nAddX + 30 * nAddX;
                    item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                    this.box_game1.addChild(item);
                    this.box_game1.height = item.y + item.height + 10;
                }
            }
            this.box_game2.y = this.box_game1.height;
            this.box_game2.removeChildren();
            for (var i = 0; i < aryInfo.length; ++i) {
                var item = this.box_game2.getChildAt(i);
                if (item) {
                    item.setData(aryInfo[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameRandomItem", DYMoreGameRandomItem);
                    item.setData(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    item.x = nXStart + item.width * nAddX + 30 * nAddX;
                    item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                    this.box_game2.addChild(item);
                    this.box_game2.height = item.y + item.height + 10;
                }
            }
            this.autoMove = true;
            Laya.timer.frameLoop(1, this, this.onMove);
            DYChannelMgr.instance.refreshGameList();
        };
        DYMoreGameRandom.prototype.onMove = function () {
            if (!this.autoMove)
                return;
            var nHight = this.box_game1.height;
            this.box_game2.y -= 2;
            this.box_game1.y -= 2;
            if (this.box_game1.y <= -nHight) {
                this.box_game1.y = this.box_game2.y + nHight;
            }
            if (this.box_game2.y <= -nHight) {
                this.box_game2.y = this.box_game1.y + nHight;
            }
        };
        DYMoreGameRandom.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            var mouseMove = function (evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.box_game1.y -= nYTemp;
                self.box_game2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.box_game1.y >= 0 && self.box_game2.y >= 0) {
                    self.box_game1.y = 0;
                    self.box_game2.y = self.box_game1.height;
                }
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        DYMoreGameRandom.prototype.onBack = function () {
            this.viewData_.backFun && this.viewData_.backFun();
        };
        DYMoreGameRandom.prototype.onContinue = function () {
            this.viewData_.continueFun && this.viewData_.continueFun();
            this.removeSelf();
        };
        DYMoreGameRandom.prototype.onRandom = function () {
            var dataArr = DYChannelMgr.instance.moreGameList;
            if (dataArr.length <= 0)
                return;
            var index = Utils.getRandom(0, dataArr.length - 1);
            var data = dataArr[index];
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMoreGameRandom.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
            this.btn_continue.off(Laya.Event.CLICK, this, this.onContinue);
            this.btn_random.off(Laya.Event.CLICK, this, this.onRandom);
            this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameRandom.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
            Laya.timer.clearAll(this);
        };
        return DYMoreGameRandom;
    }(BaseSceneUISkin));

    var DYMoreGameBox = (function (_super) {
        __extends(DYMoreGameBox, _super);
        function DYMoreGameBox() {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameBox";
            _this.itemW = 320;
            _this.itemH = 390;
            _this.name = "DYMoreGameBox";
            _this.skin = "skins/channel/duyou/DYMoreGameBox.json";
            return _this;
        }
        DYMoreGameBox.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        DYMoreGameBox.prototype.adaptationStage = function () {
        };
        DYMoreGameBox.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        DYMoreGameBox.prototype.addEvent = function () {
        };
        DYMoreGameBox.prototype.initView = function () {
            var dataArr = ArrayUtil.getRandomUniqueArr(DYChannelMgr.instance.moreGameList, 4);
            this.box_game.removeChildren();
            var len = dataArr.length;
            var select = Utils.getRandom(0, len - 1);
            for (var i = 0; i < len; i++) {
                var item = this.box_game.getChildAt(i);
                if (item) {
                    item.setData({ select: i == select, info: dataArr[i] });
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameBoxItem", DYMoreGameBoxItem);
                    item.setData({ select: i == select, info: dataArr[i] });
                    item.x = (i % 2) * (this.itemW + 50);
                    item.y = Math.floor(i / 2) * (this.itemH + 10);
                    this.box_game.addChild(item);
                }
            }
            DYChannelMgr.instance.refreshGameList();
        };
        DYMoreGameBox.prototype.removeEvent = function () {
        };
        DYMoreGameBox.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return DYMoreGameBox;
    }(BaseSceneUISkin));
    var DYMoreGameBoxItem = (function (_super) {
        __extends(DYMoreGameBoxItem, _super);
        function DYMoreGameBoxItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameBoxItem";
            _this.data = data_;
            _this.size(320, 390);
            _this.createUI();
            return _this;
        }
        DYMoreGameBoxItem.prototype.createUI = function () {
            this.img_db = new Laya.Image();
            this.img_db.sizeGrid = "15,15,95,15";
            this.img_db.skin = "resource/assets/channel/duyou/box_baseboard_1.png";
            this.img_db.size(320, 390);
            this.addChild(this.img_db);
            this.img_icon = new Laya.Image();
            this.img_icon.centerX = 0;
            this.img_icon.y = 9;
            this.img_icon.size(300, 300);
            this.addChild(this.img_icon);
            this.lab_name = new Laya.Label();
            this.lab_name.font = "SimHei";
            this.lab_name.fontSize = 40;
            this.lab_name.color = "#ffffff";
            this.lab_name.centerX = 0;
            this.lab_name.y = 325;
            this.addChild(this.lab_name);
            this.img_finger = new Laya.Image();
            this.img_finger.skin = "resource/assets/channel/duyou/failed_icon_1.png";
            this.img_finger.centerX = 50;
            this.img_finger.centerY = 50;
            this.img_finger.visible = false;
            this.addChild(this.img_finger);
        };
        DYMoreGameBoxItem.prototype.setData = function (data_) {
            this.data = data_;
            this.addEvent();
            this.initView();
        };
        DYMoreGameBoxItem.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameBoxItem.prototype.initView = function () {
            if (!this.data)
                return;
            var data = this.data.info;
            this.img_finger.visible = this.data.select;
            this.lab_name.text = data.name;
            this.img_icon.skin = data.ad_img;
        };
        DYMoreGameBoxItem.prototype.onMouseDown = function () {
            var _this = this;
            var startTime = (new Date()).getTime();
            var mouseUp = function (evt) {
                var endTime = (new Date()).getTime();
                if (endTime - startTime <= 150) {
                    _this.onPlay();
                }
                _this.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.off(Laya.Event.MOUSE_OUT, _this, mouseOut);
            };
            var mouseOut = function (evt) {
            };
            this.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
        };
        DYMoreGameBoxItem.prototype.onPlay = function () {
            if (!this.data)
                return;
            var data = this.data.info;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                    EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, true);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMoreGameBoxItem.prototype.removeEvent = function () {
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameBoxItem.prototype.onRemoved = function () {
            this.removeEvent();
            this.data = null;
            Laya.Pool.recover("DYMoreGameBannerItem", this);
        };
        return DYMoreGameBoxItem;
    }(Laya.Box));

    var DYSettlementScene2 = (function (_super) {
        __extends(DYSettlementScene2, _super);
        function DYSettlementScene2(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYSettlementScene2";
            _this.showEnterType = null;
            _this.viewData_ = data;
            _this.skin = "skins/game/type2/DYSettlementView2.json";
            return _this;
        }
        DYSettlementScene2.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.box_lvAni.scrollRect = new Laya.Rectangle(0, 0, 770, 650);
        };
        DYSettlementScene2.prototype.addEvent = function () {
            this.btn_home.on(Laya.Event.CLICK, this, this.onHomeUglify);
            this.box_double.on(Laya.Event.CLICK, this, this.onSelect);
            this.btn_restart.on(Laya.Event.CLICK, this, this.onRestartUglify);
            this.btn_get.on(Laya.Event.CLICK, this, this.onGetUglify);
            this.btn_next.on(Laya.Event.CLICK, this, this.onNextUglify);
        };
        DYSettlementScene2.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.hideBanner();
                            GameMgr.instance.bannerIsShow = false;
                            EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
                            EventMgr.getInstance().sendEvent(GameEvent.CHANGE_POS, { _x: 30, _y: 30 });
                            GameMgr.instance.topBarIsShow = true;
                            SoundManager.instance.playEffect(SoundConst.Win2);
                            if (!this.viewData_)
                                return [2];
                            data = this.viewData_;
                            this.btn_get.visible = true;
                            this.btn_restart.visible = this.btn_next.visible = false;
                            this.lab_award.text = "+" + GameData.getInstance().defaultConfigs.passGold2;
                            this.btn_get.centerX = 0;
                            if (GameData.getInstance().isConVersion || !GameData.getInstance().videoOpen) {
                                this.showDouble(false);
                                this.box_double.visible = false;
                            }
                            else {
                                this.box_double.visible = true;
                                this.showDouble(GameData.getInstance().selectDoule);
                            }
                            _a = this;
                            return [4, PatternMgr.instance.updateLevelUglify({ pattern: 103, curLv: data.level })];
                        case 1:
                            _a.nextId = _b.sent();
                            if (DeviceUtil.isWXMiniGame() && GameData.getInstance().touchByMistake) {
                                this.box_double.y = 46;
                                this.box_bottom.bottom = DeviceUtil.getIsIphoneX() ? 0 : 150;
                                Laya.timer.once(1000, this, function () {
                                    _this.showBanner();
                                    GameMgr.instance.bannerIsShow = true;
                                    Laya.Tween.to(_this.box_bottom, { bottom: 400 }, 500);
                                });
                            }
                            else {
                                this.box_double.y = 0;
                                this.box_bottom.bottom = 400;
                                this.showBanner();
                                GameMgr.instance.bannerIsShow = true;
                            }
                            this.showLevelAniUglify();
                            this.showAniUglify();
                            return [2];
                    }
                });
            });
        };
        DYSettlementScene2.prototype.showLevelAniUglify = function () {
            var _this = this;
            var lv = this.nextId;
            if (this.viewData_.level == lv) {
                this.lab_tip.visible = true;
                this.box_lvAni.visible = false;
            }
            else {
                this.lab_tip.visible = false;
                var url = "resource/assets/imgs/levels/type2/" + lv + "/level" + lv + ".sk";
                if (!this.levelSke) {
                    this.levelSke = new Laya.Skeleton();
                    this.box_lvAni.addChild(this.levelSke);
                }
                this.levelSke.load(url, Laya.Handler.create(this, function () {
                    if (!_this.levelSke.player)
                        return;
                    _this.levelSke.player.playbackRate = 1;
                    _this.levelSke.scale(1, 1);
                    _this.levelSke.pos(390, 350);
                    _this.box_lvAni.visible = true;
                    _this.levelSke.play(0, true);
                }));
            }
        };
        DYSettlementScene2.prototype.showAniUglify = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.succSke) return [3, 2];
                            _a = this;
                            return [4, AnimationManager.instance.creatBoonAnimation("resource/assets/db/victory1.sk")];
                        case 1:
                            _a.succSke = _b.sent();
                            this.box_ani.addChild(this.succSke);
                            this.succSke.scale(2, 2);
                            this.succSke.pos(540, 400);
                            _b.label = 2;
                        case 2:
                            this.box_ani.visible = true;
                            this.succSke.player.once(Laya.Event.STOPPED, this, function () {
                                _this.box_ani.visible = false;
                            });
                            this.succSke.play(0, false);
                            return [2];
                    }
                });
            });
        };
        DYSettlementScene2.prototype.onHomeUglify = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
            this.removeSelf();
        };
        DYSettlementScene2.prototype.onSelect = function () {
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (this.img_select.visible) {
                this.showDouble(false);
            }
            else {
                this.showDouble(true);
            }
        };
        DYSettlementScene2.prototype.showDouble = function (show) {
            this.img_select.visible = show;
            var mult = show ? 2 : 1;
            this.lab_award.text = "+" + GameData.getInstance().defaultConfigs.passGold1 * mult;
        };
        DYSettlementScene2.prototype.onGetUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (this.img_select.visible) {
                this.enableView(false);
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        _this.getAwardUglify(2);
                        _this.enableView(true);
                    },
                    failFun: function () {
                        _this.enableView(true);
                    },
                    errorFun: function () {
                        _this.enableView(true);
                    }
                });
            }
            else {
                this.getAwardUglify(1);
            }
        };
        DYSettlementScene2.prototype.getAwardUglify = function (mult) {
            var _this = this;
            GameMgr.instance.updateBaseData(Prop.Gold, GameData.getInstance().defaultConfigs.passGold1 * mult);
            var fun = function () {
                _this.btn_get.visible = _this.box_double.visible = false;
                _this.btn_restart.visible = _this.btn_next.visible = true;
            };
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_RANDOM, {
                showFun: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
                    _this.hideBanner();
                },
                backFun: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_LIST);
                },
                continueFun: function () {
                    var next = function () {
                        EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
                        EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_DRAWER);
                        EventMgr.getInstance().sendEvent(GameEvent.SHOW_EXIT_BTN);
                        _this.showBanner();
                        fun();
                    };
                    if (_this.viewData_.level > 1) {
                        EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_HOT, {
                            backFun: function () {
                                EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_LIST, {
                                    backFun: function () {
                                        EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_RANDOM, {
                                            backFun: function () {
                                                EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_LIST);
                                            },
                                            continueFun: function () {
                                                next();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                    else {
                        next();
                    }
                }
            });
        };
        DYSettlementScene2.prototype.onRestartUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_RANDOM, {
                showFun: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
                    _this.hideBanner();
                },
                backFun: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_LIST);
                },
                continueFun: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
                    EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_DRAWER);
                    EventMgr.getInstance().sendEvent(GameEvent.SHOW_EXIT_BTN);
                    _this.showBanner();
                    _this.restartFun();
                }
            });
        };
        DYSettlementScene2.prototype.restartFun = function () {
            var _this = this;
            PowerMgr.instance.changePowerUglify({
                count: -GameData.getInstance().defaultConfigs.powerCost,
                success: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.Type2Restart);
                    EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
                    _this.hideBanner();
                    _this.removeSelf();
                }
            });
        };
        DYSettlementScene2.prototype.onNextUglify = function () {
            var _this = this;
            SoundManager.instance.playEffect(SoundConst.BtnClick);
            if (DeviceUtil.isMZMiniGame() || DeviceUtil.isTTMiniGame()) {
                this.enableView(false);
                MiniManeger.instance.showInsertAd({
                    successFun: function () {
                    },
                    closeFun: function () {
                        _this.enableView(true);
                        _this.nextFun();
                    },
                    errorFun: function () {
                        _this.enableView(true);
                        _this.nextFun();
                    }
                });
            }
            else {
                this.nextFun();
            }
        };
        DYSettlementScene2.prototype.nextFun = function () {
            var _this = this;
            PowerMgr.instance.changePowerUglify({
                count: -GameData.getInstance().defaultConfigs.powerCost,
                success: function () {
                    EventMgr.getInstance().sendEvent(GameEvent.Type2Next, { level: _this.nextId });
                    _this.hideBanner();
                    _this.removeSelf();
                }
            });
        };
        DYSettlementScene2.prototype.removeEvent = function () {
            this.btn_home.off(Laya.Event.CLICK, this, this.onHomeUglify);
            this.box_double.off(Laya.Event.CLICK, this, this.onSelect);
            this.btn_restart.off(Laya.Event.CLICK, this, this.onRestartUglify);
            this.btn_get.off(Laya.Event.CLICK, this, this.onGetUglify);
            this.btn_next.off(Laya.Event.CLICK, this, this.onNextUglify);
        };
        DYSettlementScene2.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
            this.viewData_ = null;
        };
        return DYSettlementScene2;
    }(PopBaseScene));

    var DYMoreGameHotItem = (function (_super) {
        __extends(DYMoreGameHotItem, _super);
        function DYMoreGameHotItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameHotItem";
            _this.data = data_;
            _this.size(465, 538);
            _this.createUI();
            return _this;
        }
        DYMoreGameHotItem.prototype.createUI = function () {
            this.img_db = new Laya.Image();
            this.img_db.sizeGrid = "15,15,95,15";
            this.img_db.skin = "resource/assets/channel/duyou/box_baseboard_1.png";
            this.img_db.size(465, 538);
            this.addChild(this.img_db);
            this.img_icon = new Laya.Image();
            this.img_icon.centerX = 0;
            this.img_icon.y = 12;
            this.img_icon.size(440, 440);
            this.addChild(this.img_icon);
            this.lab_name = new Laya.Label();
            this.lab_name.font = "SimHei";
            this.lab_name.fontSize = 45;
            this.lab_name.color = "#ffffff";
            this.lab_name.centerX = 0;
            this.lab_name.y = 475;
            this.addChild(this.lab_name);
        };
        DYMoreGameHotItem.prototype.setData = function (data_) {
            this.data = data_;
            this.addEvent();
            this.initView();
        };
        DYMoreGameHotItem.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameHotItem.prototype.initView = function () {
            var data = this.data;
            if (data < 0 || data >= DYChannelMgr.instance.moreGameList.length) {
                data = DYChannelMgr.instance.moreGameList.length - 1;
                if (data < 0)
                    return;
            }
            var gameInfo = DYChannelMgr.instance.moreGameList[data];
            this.lab_name.text = gameInfo.name;
            this.img_icon.skin = gameInfo.ad_img;
            this.gameInfo = gameInfo;
        };
        DYMoreGameHotItem.prototype.onMouseDown = function () {
            var _this = this;
            var startTime = (new Date()).getTime();
            var mouseUp = function (evt) {
                var endTime = (new Date()).getTime();
                if (endTime - startTime <= 150) {
                    _this.onPlay();
                }
                _this.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.off(Laya.Event.MOUSE_OUT, _this, mouseOut);
            };
            var mouseOut = function (evt) {
            };
            this.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
        };
        DYMoreGameHotItem.prototype.onPlay = function () {
            if (!this.gameInfo)
                return;
            var data = this.gameInfo;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                    EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, false);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMoreGameHotItem.prototype.removeEvent = function () {
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        DYMoreGameHotItem.prototype.onRemoved = function () {
            this.removeEvent();
            this.data = null;
            this.gameInfo = null;
            Laya.Pool.recover("DYMoreGameHotItem", this);
        };
        return DYMoreGameHotItem;
    }(Laya.Box));

    var DYMoreGameHot = (function (_super) {
        __extends(DYMoreGameHot, _super);
        function DYMoreGameHot(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameHot";
            _this.autoMove = true;
            _this.nStartY = 0;
            _this.viewData_ = data;
            _this.name = "DYMoreGameHot";
            _this.skin = "skins/channel/duyou/DYMoreGameHot.json";
            return _this;
        }
        DYMoreGameHot.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.addEvent();
            this.initView();
        };
        DYMoreGameHot.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        DYMoreGameHot.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameHot.prototype.initView = function () {
            var _this = this;
            this.viewData_.showFun && this.viewData_.showFun();
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_EXIT_BTN);
            this.btn_back.visible = false;
            Laya.timer.once(3000, this, function () {
                _this.btn_back.visible = true;
            });
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 2;
            var aryInfo = [];
            aryInfo = DYChannelMgr.instance.getRandomIndex(18);
            this.panel_game1.removeChildren();
            this.panel_game1.y = 0;
            for (var i = 0; i < aryInfo.length; ++i) {
                var item = this.panel_game1.getChildAt(i);
                if (item) {
                    item.setData(aryInfo[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameHotItem", DYMoreGameHotItem);
                    item.setData(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    item.x = nXStart + item.width * nAddX + 50 * nAddX;
                    item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                    this.panel_game1.addChild(item);
                    this.panel_game1.height = item.y + item.height + 10;
                }
            }
            this.panel_game2.y = this.panel_game1.height;
            this.panel_game2.removeChildren();
            for (var i = 0; i < aryInfo.length; ++i) {
                var item = this.panel_game2.getChildAt(i);
                if (item) {
                    item.setData(aryInfo[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameHotItem", DYMoreGameHotItem);
                    item.setData(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    item.x = nXStart + item.width * nAddX + 50 * nAddX;
                    item.y = nYStart + item.height * nYAdd + 10 * nYAdd;
                    this.panel_game2.addChild(item);
                    this.panel_game2.height = item.y + item.height + 10;
                }
            }
            this.autoMove = true;
            Laya.timer.frameLoop(1, this, this.onMove);
            DYChannelMgr.instance.refreshGameList();
        };
        DYMoreGameHot.prototype.onMove = function () {
            if (!this.autoMove)
                return;
            var nHight = this.panel_game1.height;
            this.panel_game2.y -= 2;
            this.panel_game1.y -= 2;
            if (this.panel_game1.y <= -nHight) {
                this.panel_game1.y = this.panel_game2.y + nHight;
            }
            if (this.panel_game2.y <= -nHight) {
                this.panel_game2.y = this.panel_game1.y + nHight;
            }
        };
        DYMoreGameHot.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            var mouseMove = function (evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.panel_game1.y -= nYTemp;
                self.panel_game2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.panel_game1.y >= 0 && self.panel_game2.y >= 0) {
                    self.panel_game1.y = 0;
                    self.panel_game2.y = self.panel_game1.height;
                }
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        DYMoreGameHot.prototype.onBack = function () {
            this.viewData_.backFun && this.viewData_.backFun();
            this.removeSelf();
        };
        DYMoreGameHot.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
            this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameHot.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
            Laya.timer.clearAll(this);
        };
        return DYMoreGameHot;
    }(BaseSceneUISkin));

    var DYMyGameListItem = (function (_super) {
        __extends(DYMyGameListItem, _super);
        function DYMyGameListItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMyGameListItem";
            _this.index = 0;
            _this.viewData_ = data_;
            _this.skin = "skins/channel/duyou/DYMyGameListItem.json";
            return _this;
        }
        DYMyGameListItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        DYMyGameListItem.prototype.adaptationStage = function () {
        };
        DYMyGameListItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        DYMyGameListItem.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        DYMyGameListItem.prototype.addEvent = function () {
            this.btn_play.on(Laya.Event.CLICK, this, this.onPlay);
        };
        DYMyGameListItem.prototype.initView = function () {
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            this.img_icon.skin = data.ad_img;
            this.lab_title.text = data.name;
            this.lab_desc.text = Math.ceil(Math.random() * 100000) + "人正在玩";
            this.img_hot.visible = Math.random() > 0.5 ? true : false;
        };
        DYMyGameListItem.prototype.onPlay = function () {
            if (!this.viewData_)
                return;
            var data = this.viewData_;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                    EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, false);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMyGameListItem.prototype.removeEvent = function () {
            this.btn_play.off(Laya.Event.CLICK, this, this.onPlay);
        };
        DYMyGameListItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.viewData_ = null;
            this.removeEvent();
            Laya.Pool.recover("DYMyGameListItem", this);
        };
        return DYMyGameListItem;
    }(BaseSceneUISkin));

    var DYMyGameList = (function (_super) {
        __extends(DYMyGameList, _super);
        function DYMyGameList(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMyGameList";
            _this.itemH = 200;
            _this.autoMove = true;
            _this.speed = 2;
            _this.dir = -1;
            _this.viewData_ = data;
            _this.name = "DYMyGameList";
            _this.skin = "skins/channel/duyou/DYMyGameList.json";
            return _this;
        }
        DYMyGameList.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.addEvent();
            this.initView();
        };
        DYMyGameList.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        DYMyGameList.prototype.addEvent = function () {
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
            this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
        };
        DYMyGameList.prototype.initView = function () {
            this.viewData_.showFun && this.viewData_.showFun();
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
            EventMgr.getInstance().sendEvent(GameEvent.HIDE_EXIT_BTN);
            var canuseHeight = Laya.stage.height - 280 - 20;
            this.panel_list.height = canuseHeight;
            this.maxCount = Math.ceil(canuseHeight / this.itemH);
            this.dataArr = DYChannelMgr.instance.moreGameList;
            console.log(this.dataArr);
            var didnex = 0;
            this.panel_list.removeChildren();
            for (var i = 0; i < this.maxCount + 1; i++) {
                var item = Laya.Pool.getItemByClass("DYMyGameListItem", DYMyGameListItem);
                item.index = didnex;
                item.zOrder = 0;
                item.setData(this.dataArr[item.index]);
                didnex++;
                if (didnex >= this.dataArr.length) {
                    didnex = 0;
                }
                item.y = i * this.itemH;
                this.panel_list.addChild(item);
            }
            this.autoMove = true;
            Laya.timer.frameLoop(1, this, this.onMove);
            DYChannelMgr.instance.refreshGameList();
        };
        DYMyGameList.prototype.onMove = function (dt) {
            if (!this.autoMove)
                return;
            for (var i = 0; i < this.panel_list.numChildren; i++) {
                var item = this.panel_list.getChildAt(i);
                item.y += this.speed * this.dir;
            }
            this.refresh();
        };
        DYMyGameList.prototype.refresh = function () {
            var startItem = this.panel_list.getChildAt(0);
            var lastItem = this.panel_list.getChildAt(this.maxCount);
            if (this.dir == -1) {
                if (startItem.y < -this.itemH) {
                    startItem.y = lastItem.y + lastItem.height;
                    startItem.zOrder = lastItem.zOrder + 1;
                    startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                    startItem.setData(this.dataArr[startItem.index]);
                }
            }
            else {
                if (lastItem.y > this.maxCount * this.itemH) {
                    lastItem.y = startItem.y - startItem.height;
                    lastItem.zOrder = startItem.zOrder - 1;
                    lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                    lastItem.setData(this.dataArr[lastItem.index]);
                }
            }
        };
        DYMyGameList.prototype.getUpIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
        };
        DYMyGameList.prototype.getDownIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index + 1 < this.dataArr.length ? index + 1 : 0;
        };
        DYMyGameList.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.stx = evt.stageX;
            this.sty = evt.stageY;
            var mouseMove = function (evt1) {
                var dy = evt1.stageY - _this.sty;
                for (var i = 0; i < _this.panel_list.numChildren; i++) {
                    var item = _this.panel_list.getChildAt(i);
                    item.y += dy;
                }
                _this.sty = evt1.stageY;
                _this.dir = dy > 0 ? 1 : -1;
                _this.refresh();
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.dir = -1;
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        DYMyGameList.prototype.onBack = function () {
            this.viewData_.backFun && this.viewData_.backFun();
            this.removeSelf();
        };
        DYMyGameList.prototype.removeEvent = function () {
            this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
            this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
        };
        DYMyGameList.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
            Laya.timer.clearAll(this);
            this.panel_list.removeChildren();
        };
        return DYMyGameList;
    }(BaseSceneUISkin));

    var DYExitBtn = (function (_super) {
        __extends(DYExitBtn, _super);
        function DYExitBtn() {
            var _this = _super.call(this) || this;
            _this.className_key = "DYExitBtn";
            _this.size(260, 86);
            _this.createUI();
            _this.addEvent();
            return _this;
        }
        DYExitBtn.prototype.createUI = function () {
            this.img_icon = new Laya.Image();
            this.img_icon.skin = "resource/assets/channel/duyou/game_button.png";
            this.img_icon.size(260, 86);
            this.addChild(this.img_icon);
        };
        DYExitBtn.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYExitBtn.prototype.initView = function () {
        };
        DYExitBtn.prototype.onClick = function () {
            var _this = this;
            EventMgr.getInstance().sendEvent(GameEvent.OPEN_GAME_LIST, {
                showFun: function () {
                    _this.visible = false;
                    EventMgr.getInstance().sendEvent(GameEvent.HIDE_GAME_DRAWER);
                    EventMgr.getInstance().sendEvent(GameEvent.HIDE_TOP);
                    MiniManeger.instance.hideBanner();
                },
                backFun: function () {
                    _this.visible = true;
                    EventMgr.getInstance().sendEvent(GameEvent.SHOW_GAME_DRAWER);
                    GameMgr.instance.topBarIsShow && EventMgr.getInstance().sendEvent(GameEvent.SHOW_TOP);
                    GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
                }
            });
        };
        DYExitBtn.prototype.removeEvent = function () {
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
            this.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
        };
        DYExitBtn.prototype.onRemoved = function () {
            this.removeEvent();
        };
        return DYExitBtn;
    }(Laya.Box));

    var ViewMgr = (function () {
        function ViewMgr() {
            this.firstOpenMoreGamesRandom = true;
            this.addEvent();
        }
        Object.defineProperty(ViewMgr, "instance", {
            get: function () {
                if (!ViewMgr.ins)
                    ViewMgr.ins = new ViewMgr();
                return ViewMgr.ins;
            },
            enumerable: true,
            configurable: true
        });
        ViewMgr.prototype.addEvent = function () {
            EventMgr.getInstance().addEvent(GameEvent.BUFFER_LOAD, this, this.bufferLoading);
            EventMgr.getInstance().addEvent(GameEvent.SHOW_TOP, this, this.showTopBar);
            EventMgr.getInstance().addEvent(GameEvent.HIDE_TOP, this, this.hideTopBar);
            EventMgr.getInstance().addEvent(GameEvent.CHANGE_POS, this, this.changePos);
            EventMgr.getInstance().addEvent(GameEvent.ENABLED_TOP, this, this.enabledTopBar);
            EventMgr.getInstance().addEvent(GameEvent.OPEN_BUY_PROP, this, this.openBuyProp);
            EventMgr.getInstance().addEvent(GameEvent.OPEN_SCENE, this, this.openScene);
            EventMgr.getInstance().addEvent(GameEvent.Type2GameOver, this, this.gameOver2);
            EventMgr.getInstance().addEvent(GameEvent.CHOOSE_MODEL, this, this.chooseModel);
            EventMgr.getInstance().addEvent(GameEvent.SHOW_GAME_DRAWER, this, this.showMoreGamesDrawer);
            EventMgr.getInstance().addEvent(GameEvent.HIDE_GAME_DRAWER, this, this.hideMoreGamesDrawer);
            EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_DRAWER, this, this.openMoreGamesDrawer);
            EventMgr.getInstance().addEvent(GameEvent.SHOW_GAME_BANNER, this, this.showMoreGamesBanner);
            EventMgr.getInstance().addEvent(GameEvent.HIDE_GAME_BANNER, this, this.hideMoreGamesBanner);
            EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_RANDOM, this, this.openMoreGamesRandom);
            EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_HOT, this, this.openMoreGamesHot);
            EventMgr.getInstance().addEvent(GameEvent.OPEN_GAME_LIST, this, this.openMyGamesList);
            EventMgr.getInstance().addEvent(GameEvent.SHOW_GAME_BOX, this, this.showMoreGamesBox);
            EventMgr.getInstance().addEvent(GameEvent.HIDE_GAME_BOX, this, this.hideMoreGamesBox);
            EventMgr.getInstance().addEvent(GameEvent.NAV_GAME_FAIL, this, this.navigateToGameFail);
            EventMgr.getInstance().addEvent(GameEvent.SHOW_EXIT_BTN, this, this.showExitBtn);
            EventMgr.getInstance().addEvent(GameEvent.HIDE_EXIT_BTN, this, this.hideExitBtn);
        };
        ViewMgr.prototype.registerBufferLoading = function () {
            BufferLoadingManger.getInstance().registerOneBuffer("GameBufferLoading", new GameBufferLoading());
        };
        ViewMgr.prototype.bufferLoading = function (show) {
            if (show) {
                this.showBufferLoading();
            }
            else {
                this.hiddeBufferLoading();
            }
        };
        ViewMgr.prototype.showBufferLoading = function (info) {
            if (info === void 0) { info = ""; }
            BufferLoadingManger.getInstance().showBuffer("GameBufferLoading", info);
            Laya.timer.clear(this, this.hiddeBufferLoading);
            Laya.timer.once(60000, this, this.hiddeBufferLoading);
            BufferLoadingManger.getInstance().bufferGroup.mouseThrough = false;
        };
        ViewMgr.prototype.hiddeBufferLoading = function () {
            Laya.timer.clear(this, this.hiddeBufferLoading);
            BufferLoadingManger.getInstance().hiddBuffer("GameBufferLoading");
            BufferLoadingManger.getInstance().bufferGroup.mouseEnabled = true;
            BufferLoadingManger.getInstance().bufferGroup.mouseThrough = true;
        };
        ViewMgr.prototype.showTopBar = function () {
            if (!this.com_topBar) {
                this.com_topBar = new TopBar();
                BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_topBar);
            }
            this.com_topBar.visible = true;
        };
        ViewMgr.prototype.enabledTopBar = function (mouseEnabled) {
            if (mouseEnabled === void 0) { mouseEnabled = true; }
            this.com_topBar.mouseEnabled = mouseEnabled;
        };
        ViewMgr.prototype.changePos = function (pos) {
            this.com_topBar.pos(pos._x, pos._y);
            if (DeviceUtil.getIsIphoneX())
                this.com_topBar.y += GameData.getInstance().fullScreenOffSet;
        };
        ViewMgr.prototype.hideTopBar = function () {
            if (this.com_topBar) {
                this.com_topBar.visible = false;
            }
        };
        ViewMgr.prototype.openScene = function (evt) {
            ViewManager.getInstance().popLayer.removeChildren();
            switch (evt.name) {
                case "HomeScene":
                    this.openHome(evt.data);
                    break;
                case "GameSceneType2":
                    this.opneGameViewType2(evt.data);
                    break;
            }
        };
        ViewMgr.prototype.openHome = function (data) {
            var _this = this;
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                SceneManager.getInstance().openGameScene(HomeScene, data);
                if (GameData.getInstance().playerData.loginCount > 1 && !GameData.getInstance().isConVersion) {
                    var power_1 = function () {
                        _this.closeMoreGamesDrawer(0);
                        PopManager.instance.showPopView({
                            className: AwardScene,
                            data: {
                                type: 2,
                                data: {
                                    fun: function () {
                                        _this.openMyGamesList({
                                            showFun: function () {
                                                _this.hideTopBar();
                                                MiniManeger.instance.hideBanner();
                                            },
                                            backFun: function () {
                                                _this.showMoreGamesDrawer();
                                                _this.showExitBtn();
                                                GameMgr.instance.topBarIsShow && _this.showTopBar();
                                                GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
                                                _this.openMoreGamesDrawer();
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    };
                    this.openMoreGamesRandom({
                        showFun: function () {
                            _this.hideTopBar();
                            MiniManeger.instance.hideBanner();
                        },
                        backFun: function () {
                            _this.openMyGamesList({ only: true });
                        },
                        continueFun: function () {
                            _this.openMoreGamesDrawer();
                            GameMgr.instance.topBarIsShow && _this.showTopBar();
                            GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
                            _this.showExitBtn();
                            Laya.timer.once(300, _this, function () {
                                MiniManeger.instance.playViderAd({
                                    successFun: function () {
                                        power_1();
                                    },
                                    failFun: function () {
                                        power_1();
                                    },
                                    errorFun: function () {
                                        power_1();
                                    }
                                });
                            });
                        }
                    });
                }
            }
            else {
                SceneManager.getInstance().openGameScene(HomeScene, data);
            }
        };
        ViewMgr.prototype.opneGameViewType2 = function (data) {
            this.hideTopBar();
            var lv;
            if (DeviceUtil.isOnPC())
                lv = parseInt(Utils.getQueryString("lv"));
            if (!lv)
                lv = data.level;
            SceneManager.getInstance().openGameScene(GameSceneType2, { level: lv });
        };
        ViewMgr.prototype.openBuyProp = function (data) {
            PopManager.instance.showPopView({ className: BuyPropScene, data: { type: data.type } });
        };
        ViewMgr.prototype.chooseModel = function (data_) {
            var group = [];
            var className;
            var classData;
            switch (data_.type) {
                case 2:
                    group = ["choose2"];
                    className = ChooseScene2;
                    break;
                default:
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(group, function () {
                ViewManager.getInstance().showView(className, classData);
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            });
        };
        ViewMgr.prototype.gameOver2 = function (data) {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                this.DYGameOver2(data);
            }
            else {
                if (GameData.getInstance().isConVersion) {
                    ViewManager.getInstance().showView(SettlementScene2, data);
                }
                else {
                    if (data.level % 2 == 0) {
                        PopManager.instance.showPopView({
                            className: AwardScene,
                            data: {
                                type: 2,
                                data: {
                                    fun: function () {
                                        ViewManager.getInstance().showView(SettlementScene2, data);
                                    }
                                }
                            }
                        });
                    }
                    else {
                        ViewManager.getInstance().showView(SettlementScene2, data);
                    }
                }
            }
        };
        ViewMgr.prototype.DYGameOver2 = function (data) {
            var _this = this;
            var fun = function () {
                if (GameData.getInstance().isConVersion) {
                    ViewManager.getInstance().showView(DYSettlementScene2, data);
                }
                else {
                    if (data.level >= 3) {
                        PopManager.instance.showPopView({
                            className: AwardScene,
                            data: {
                                type: 2,
                                data: {
                                    fun: function () {
                                        ViewManager.getInstance().showView(DYSettlementScene2, data);
                                    }
                                }
                            }
                        });
                    }
                    else {
                        ViewManager.getInstance().showView(DYSettlementScene2, data);
                    }
                }
            };
            if (data.level >= 3) {
                this.openMyGamesList({
                    backFun: function () {
                        _this.showMoreGamesDrawer();
                        _this.showExitBtn();
                        fun();
                    }
                });
            }
            else {
                fun();
            }
        };
        ViewMgr.prototype.showMoreGamesDrawer = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 3];
                            if (!!this.com_moreGamesDrawer) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            _a.sent();
                            this.com_moreGamesDrawer = new DYMoreGameDrawer();
                            BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_moreGamesDrawer);
                            _a.label = 2;
                        case 2:
                            this.com_moreGamesDrawer.visible = true;
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        ViewMgr.prototype.hideMoreGamesDrawer = function () {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                if (this.com_moreGamesDrawer) {
                    this.com_moreGamesDrawer.visible = false;
                    this.com_moreGamesDrawer.switchShow(false, 0);
                }
            }
        };
        ViewMgr.prototype.openMoreGamesDrawer = function () {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                if (this.com_moreGamesDrawer) {
                    this.com_moreGamesDrawer.visible = true;
                    this.com_moreGamesDrawer.switchShow(true);
                }
            }
        };
        ViewMgr.prototype.closeMoreGamesDrawer = function (time) {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                if (this.com_moreGamesDrawer) {
                    this.com_moreGamesDrawer.switchShow(false, time);
                }
            }
        };
        ViewMgr.prototype.showMoreGamesBanner = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 3];
                            if (!!this.com_moreGamesBanner) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            _a.sent();
                            this.com_moreGamesBanner = new DYMoreGameBanner();
                            _a.label = 2;
                        case 2:
                            if (!parent.getChildByName("DYMoreGameBanner")) {
                                parent.addChild(this.com_moreGamesBanner);
                            }
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        ViewMgr.prototype.hideMoreGamesBanner = function (parent) {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                if (parent.getChildByName("DYMoreGameBanner") && this.com_moreGamesBanner) {
                    parent.removeChild(this.com_moreGamesBanner);
                }
            }
        };
        ViewMgr.prototype.openMoreGamesRandom = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            _a.sent();
                            if (!data)
                                data = {};
                            if (!data.only)
                                data.only = false;
                            data["first"] = this.firstOpenMoreGamesRandom;
                            ViewManager.getInstance().showView(DYMoreGameRandom, data, data.only);
                            this.firstOpenMoreGamesRandom = false;
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        ViewMgr.prototype.openMoreGamesHot = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            _a.sent();
                            if (!data)
                                data = {};
                            if (!data.only)
                                data.only = false;
                            ViewManager.getInstance().showView(DYMoreGameHot, data, data.only);
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        ViewMgr.prototype.openMyGamesList = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            _a.sent();
                            if (!data)
                                data = {};
                            if (!data.only)
                                data.only = false;
                            ViewManager.getInstance().showView(DYMyGameList, data, data.only);
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        ViewMgr.prototype.showMoreGamesBox = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 3];
                            if (!!this.com_moreGamesBox) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            _a.sent();
                            this.com_moreGamesBox = new DYMoreGameBox();
                            _a.label = 2;
                        case 2:
                            if (!parent.getChildByName("DYMoreGameBox")) {
                                parent.addChild(this.com_moreGamesBox);
                            }
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        ViewMgr.prototype.hideMoreGamesBox = function (parent) {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                if (parent.getChildByName("DYMoreGameBox") && this.com_moreGamesBox) {
                    parent.removeChild(this.com_moreGamesBox);
                }
            }
        };
        ViewMgr.prototype.navigateToGameFail = function (unit) {
            var _this = this;
            this.openMoreGamesRandom({
                showFun: function () {
                    _this.hideTopBar();
                    MiniManeger.instance.hideBanner();
                },
                backFun: function () {
                    _this.openMyGamesList({ only: true });
                },
                continueFun: function () {
                    if (unit) {
                        GameMgr.instance.topBarIsShow && _this.showTopBar();
                        GameMgr.instance.bannerIsShow && MiniManeger.instance.showBannerAd(null);
                        _this.showExitBtn();
                        _this.showMoreGamesDrawer();
                    }
                },
                only: !unit
            });
        };
        ViewMgr.prototype.showExitBtn = function () {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                var launch = MiniManeger.instance.launchOption;
                if (launch && launch.scene == 1037) {
                    if (!this.com_exitBtn) {
                        var systemInfo = MiniManeger.instance.systemInfo;
                        var rect = wx.getMenuButtonBoundingClientRect();
                        console.log("显示退出按钮", rect, systemInfo);
                        var x = systemInfo.pixelRatio * rect.left * Laya.stage.width / Laya.Browser.width;
                        var y = systemInfo.pixelRatio * (rect.top + rect.height) * Laya.stage.height / Laya.Browser.height + 10;
                        this.com_exitBtn = new DYExitBtn();
                        this.com_exitBtn.pos(x, y);
                        BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_exitBtn);
                    }
                    this.com_exitBtn.visible = true;
                }
            }
        };
        ViewMgr.prototype.hideExitBtn = function () {
            if (this.com_exitBtn) {
                this.com_exitBtn.visible = false;
            }
        };
        return ViewMgr;
    }());
    window['ViewMgr'] = ViewMgr;

    var GameLoadingView = (function (_super) {
        __extends(GameLoadingView, _super);
        function GameLoadingView() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameLoadingView";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.img_bg = new Laya.Image();
            _this.img_bg.skin = "resource/assets/loading/loading_background_1.png";
            _this.addChild(_this.img_bg);
            DeviceUtil.adaptationBgImg(_this.img_bg);
            _this.img_jdt_db = new Laya.Image();
            _this.img_jdt_db.skin = "resource/assets/loading/loading_baseboard_1.png";
            _this.img_jdt_db.sizeGrid = "0,26,0,26";
            _this.img_jdt_db.width = 882;
            _this.img_jdt_db.height = 54;
            _this.img_jdt_db.centerX = 0;
            _this.img_jdt_db.centerY = 0;
            _this.addChild(_this.img_jdt_db);
            _this.img_jdt = new Laya.Image();
            _this.img_jdt.skin = "resource/assets/loading/loading_baseboard_2.png";
            _this.img_jdt.sizeGrid = "0,20,0,20";
            _this.img_jdt.width = 500;
            _this.img_jdt.height = 40;
            _this.img_jdt.x = 5;
            _this.img_jdt.centerY = 0;
            _this.img_jdt_db.addChild(_this.img_jdt);
            var lab = new Laya.Label();
            lab.fontSize = 50;
            lab.font = "SimHei";
            lab.bold = true;
            lab.centerX = 0;
            lab.bottom = -90;
            lab.text = "我来了，我来了……";
            _this.img_jdt_db.addChild(lab);
            _this.box_loadAni = new Laya.Box();
            _this.box_loadAni.width = 150;
            _this.box_loadAni.height = 200;
            _this.box_loadAni.pos(0, -200);
            _this.img_jdt_db.addChild(_this.box_loadAni);
            _this.loadAni = new Laya.Skeleton();
            _this.loadAni.load("resource/assets/loading/loading.sk", Laya.Handler.create(_this, function () {
                _this.loadAni.pos(50, 80);
                _this.box_loadAni.addChild(_this.loadAni);
                _this.loadAni.play(0, true);
            }));
            _this.progress(1, 100);
            return _this;
        }
        GameLoadingView.prototype.childrenCreated = function () {
        };
        GameLoadingView.prototype.showAnimation = function () {
            var _this = this;
            this.box_ani = new Laya.Box();
            this.box_ani.width = Laya.stage.width;
            this.box_ani.height = Laya.stage.height;
            this.box_ani.bgColor = "#000000";
            this.addChild(this.box_ani);
            this.showAniUglify = new Laya.Skeleton();
            this.showAniUglify.load("resource/assets/db/opening.sk", Laya.Handler.create(this, function () {
                _this.showAniUglify.x = Laya.stage.width / 2;
                _this.showAniUglify.y = Laya.stage.height / 2;
                _this.showAniUglify.player && _this.showAniUglify.player.once(Laya.Event.STOPPED, _this, function () {
                    console.log("loadAni stop");
                    _this.box_ani.once(Laya.Event.CLICK, _this, function () {
                        console.log("loadAni click");
                        EventMgr.getInstance().sendEvent(GameEvent.OPEN_SCENE, { name: "HomeScene" });
                        _this.remove();
                    });
                });
                _this.showAniUglify.scale(2, 2);
                _this.box_ani.addChild(_this.showAniUglify);
                _this.showAniUglify.play(0, false);
            }));
        };
        GameLoadingView.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
        };
        GameLoadingView.prototype.progress = function (index, len) {
            if (this.img_jdt) {
                this.img_jdt.width = 872 * (index / len);
                this.box_loadAni.x = 810 * (index / len);
            }
        };
        GameLoadingView.prototype.remove = function () {
            if (this && this.parent)
                this.parent.removeChild(this);
            this.box_ani && this.box_ani.offAll();
            this.loadAni && this.loadAni.destroy();
            this.showAniUglify && this.showAniUglify.destroy();
        };
        return GameLoadingView;
    }(BaseSceneUISkin));

    var MZGameMgr = (function (_super) {
        __extends(MZGameMgr, _super);
        function MZGameMgr() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.url = "https://yxtest.32yx.com/MZMiniGame.fcgi";
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.canShowBanner = true;
            return _this;
        }
        MZGameMgr.prototype.initMiniGame = function () {
            this.systemInfo = qg.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
        };
        MZGameMgr.prototype.onShow = function (callBack) {
            var _this = this;
            mz.onShow(function (res) {
                callBack && callBack(res);
                _this.showTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
            });
        };
        MZGameMgr.prototype.onHide = function (callBack) {
            var _this = this;
            mz.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
            });
        };
        MZGameMgr.prototype.loginGame = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.login().then(function (res) {
                    res = JSON.parse(res);
                    console.log("loginGame success ", res);
                    GameData.getInstance().userInfo.openId = res.value.clientId;
                    GameData.getInstance().userInfo.nick = res.value.nickname;
                    GameData.getInstance().userInfo.avatarUrl = res.value.icon;
                    resolve();
                }).catch(function (err) {
                    _this.getToken().then(function (res) {
                        res = JSON.parse(res);
                        console.log("loginGame success ", res);
                        GameData.getInstance().userInfo.openId = res.value.clientId;
                        GameData.getInstance().userInfo.nick = res.value.nickname;
                        GameData.getInstance().userInfo.avatarUrl = res.value.icon;
                        resolve();
                    }).catch(function (err) {
                        reject();
                    });
                });
            });
        };
        MZGameMgr.prototype.login = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                mz.login({
                    success: function (res) {
                        console.log("login success ", res);
                        if (res.token) {
                            var urlappend = "access_token=" + res.token;
                            var data = {
                                msg_type: "10",
                                msg_data: {
                                    url_append: urlappend,
                                }
                            };
                            HttpMgr.getInstance().sendHttp(_this.url, data, function (res) {
                                console.log("getsisson 返回：", res);
                                resolve(res.msg_data);
                            }, function (err) {
                                console.warn("网络请求失败：", err);
                                reject();
                            }, "post");
                        }
                        else {
                            console.warn("登录失败：", res);
                            reject();
                        }
                    },
                    fail: function (res) {
                        console.warn("login fail ", res);
                        switch (res.code) {
                            case 4:
                                console.log("用户取消登录");
                                break;
                            case 20:
                                console.log("用户拒绝授权");
                                break;
                        }
                        reject();
                    }
                });
            });
        };
        MZGameMgr.prototype.getToken = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                mz.getToken({
                    success: function (res) {
                        console.log("getToken success ", res);
                        if (res.token) {
                            var urlappend = "access_token=" + res.token;
                            var data = {
                                msg_type: "10",
                                msg_data: {
                                    url_append: urlappend,
                                }
                            };
                            HttpMgr.getInstance().sendHttp(_this.url, data, function (res) {
                                console.log("getsisson 返回：", res);
                                resolve(res.msg_data);
                            }, function (err) {
                                console.warn("网络请求失败：", err);
                                reject();
                            }, "post");
                        }
                        else {
                            console.warn("登录失败：", res);
                            reject();
                        }
                    },
                    fail: function (res) {
                        console.warn("getToken fail ", res);
                        switch (res.code) {
                            case 4:
                                console.log("用户取消登录");
                                break;
                            case 20:
                                console.log("用户拒绝授权");
                                break;
                        }
                        reject();
                    }
                });
            });
        };
        MZGameMgr.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MZGameMgr.prototype.playViderAd = function (data) {
            var _this = this;
            if (!DeviceUtil.isMZMiniGame()) {
                data.successFun && data.successFun();
                return;
            }
            var videoId = GameData.getInstance().videoId;
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips("开发中");
                data.errorFun && data.errorFun();
                return;
            }
            if (!this.videoAd) {
                var adId = videoId[Math.floor(Math.random() * videoId.length)];
                this.videoAd = qg.createRewardedVideoAd({
                    adUnitId: adId
                });
                this.videoAd.onLoad(function (res) {
                    console.log("激励视频广告 加载成功", res);
                    _this.videoAd.show();
                });
            }
            var onCloseCall = function (res) {
                console.log("激励视频广告 关闭", res);
                data.successFun && data.successFun();
                _this.videoAd.offClose(onCloseCall);
                _this.videoAd.offError(onErrorCall);
            };
            var onErrorCall = function (err) {
                console.warn("激励视频广告 onError", err);
                data.errorFun && data.errorFun(err);
                _this.videoAd.offClose(onCloseCall);
                _this.videoAd.offError(onErrorCall);
            };
            this.videoAd.onClose(onCloseCall);
            this.videoAd.onError(onErrorCall);
            this.videoAd.load();
        };
        MZGameMgr.prototype.createBanner = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            _this.canShowBanner = true;
                            var bannerId = GameData.getInstance().bannerId;
                            if (bannerId.length <= 0) {
                                resolve(null);
                                return;
                            }
                            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
                            console.log("创建 banner 广告组件-->", adId);
                            var phone = _this.systemInfo;
                            var w = phone.screenWidth;
                            var h = phone.screenHeight;
                            var top = h - 161 - 30;
                            var bannerAd = qg.createBannerAd({
                                adUnitId: adId,
                                style: { top: top, left: 0, width: w, height: 60 }
                            });
                            var errorFun = function (err) {
                                console.warn("banner 广告 onError ", err);
                                resolve(null);
                            };
                            var closeFun = function (err) {
                                console.log("banner 广告 onClose ", err);
                            };
                            var resizeFun = function (res) {
                                bannerAd.style.left = (w - res.width) / 2;
                                bannerAd.style.height = res.height + 20;
                                bannerAd.style.top = h - res.height - 30;
                                console.log("banner 广告 onResize ", res, bannerAd);
                            };
                            var loadFun = function (res) {
                                console.log("banner 广告 onLoad 成功", res);
                                _this.bannerAd = bannerAd;
                                resolve(bannerAd);
                            };
                            bannerAd.onLoad(loadFun);
                            bannerAd.onResize(resizeFun);
                            bannerAd.onError(errorFun);
                            bannerAd.onClose(closeFun);
                            _this.clearBannerFun = function () {
                                if (_this.bannerAd) {
                                    _this.bannerAd.offLoad(loadFun);
                                    _this.bannerAd.offResize(resizeFun);
                                    _this.bannerAd.offError(errorFun);
                                    _this.bannerAd.offClose(closeFun);
                                }
                            };
                        })];
                });
            });
        };
        MZGameMgr.prototype.showBannerAdSp = function () {
            if (this.canShowBanner && this.bannerAd) {
                this.bannerAd.show();
            }
        };
        MZGameMgr.prototype.showBannerAd = function (offset) {
            var _this = this;
            this.canShowBanner = true;
            var bannerId = GameData.getInstance().bannerId;
            if (bannerId.length <= 0)
                return;
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            console.log("创建 banner 广告组件-->", adId);
            var phone = this.systemInfo;
            var w = phone.screenWidth;
            var h = phone.screenHeight;
            var top = h - 161 - 30;
            this.bannerAd = qg.createBannerAd({
                adUnitId: adId,
                style: { top: top, left: 0, width: w, height: 60 }
            });
            var errorFun = function (err) {
                console.warn("banner 广告 onError ", err);
            };
            var closeFun = function (err) {
                console.log("banner 广告 onClose ", err);
            };
            var resizeFun = function (res) {
                _this.bannerAd.style.left = (w - res.width) / 2;
                _this.bannerAd.style.height = res.height + 20;
                _this.bannerAd.style.top = h - res.height - 30;
                console.log("banner 广告 onResize ", res, _this.bannerAd);
            };
            var loadFun = function (res) {
                console.log("banner 广告 onLoad 成功", res);
                _this.bannerAd.show();
                if (!_this.canShowBanner) {
                    _this.bannerAd.hide();
                }
                if (offset) {
                    offset.callback && offset.callback();
                }
            };
            this.bannerAd.onLoad(loadFun);
            this.bannerAd.onResize(resizeFun);
            this.bannerAd.onError(errorFun);
            this.bannerAd.onClose(closeFun);
            this.clearBannerFun = function () {
                if (_this.bannerAd) {
                    _this.bannerAd.offLoad(loadFun);
                    _this.bannerAd.offResize(resizeFun);
                    _this.bannerAd.offError(errorFun);
                    _this.bannerAd.offClose(closeFun);
                }
            };
        };
        MZGameMgr.prototype.hideBanner = function () {
            console.log("隐藏 banner 广告组件-->");
            this.clearBannerFun && this.clearBannerFun();
            this.clearBannerFun = null;
            this.bannerAd && this.bannerAd.hide();
            this.canShowBanner = false;
        };
        MZGameMgr.prototype.showInsertAd = function (data) {
            var _this = this;
            this.canShowBanner = true;
            var intersId = GameData.getInstance().intersId;
            if (intersId.length <= 0)
                return;
            var adId = intersId[Math.floor(Math.random() * intersId.length)];
            console.log("创建插屏广告组件-->", adId);
            if (!this.insertAd) {
                this.insertAd = qg.createInsertAd({
                    adUnitId: adId
                });
                this.insertAd.onLoad(function () {
                    console.log("插屏广告 显示成功");
                    _this.insertAd.show();
                    data.successFun && data.successFun();
                });
            }
            var closeCall = function (res) {
                console.log("插屏广告关闭", res);
                data.closeFun && data.closeFun();
                _this.insertAd.offError(errorCall);
                _this.insertAd.offClose(closeCall);
            };
            var errorCall = function (err) {
                console.log("插屏广告错误", err);
                data.errorFun && data.errorFun();
                _this.insertAd.offError(errorCall);
                _this.insertAd.offClose(closeCall);
            };
            this.insertAd.onError(errorCall);
            this.insertAd.onClose(closeCall);
            this.insertAd.load();
        };
        MZGameMgr.prototype.vibrateShort = function (data) {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            mz.vibrateShort({});
        };
        MZGameMgr.prototype.vibrateLong = function () {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            mz.vibrateLong({});
        };
        return MZGameMgr;
    }(MiniManeger));

    var TTGameMgr = (function (_super) {
        __extends(TTGameMgr, _super);
        function TTGameMgr() {
            var _this = _super.call(this) || this;
            _this.appid = "ttab04ddb9343eae0c";
            _this.secret = "96041680ac7134161d59d18faec128ce44f4cbfb";
            _this.url = "https://yxtest.32yx.com/MiniGame.fcgi";
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.sucTime = 3000;
            _this.defaultMssage = {
                "title": "我被卡在了第一关，快来帮帮我",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/wx_res/share1.jpg",
                "query": ""
            };
            _this.shareInfo = [
                {
                    "title": "我被卡在了第一关，快来帮帮我",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/wx_res/share1.jpg",
                    "query": ""
                }
            ];
            _this.canShowBanner = true;
            _this.maxMakeVideoTime = 120;
            _this.startTime = 0;
            _this.initGameRecordListener();
            return _this;
        }
        TTGameMgr.prototype.initMiniGame = function () {
            var _this = this;
            this.launchOption = tt.getLaunchOptionsSync();
            console.log("launchOption >> ", this.launchOption);
            this.systemInfo = tt.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
            tt.setKeepScreenOn({ keepScreenOn: true });
            tt.showShareMenu({ withShareTicket: true });
            tt.onShareAppMessage(function () {
                return _this.defaultMssage;
            });
            this.getUpdateManager();
            this.initMoreGameAppInfos();
            Laya.timer.once(10000, this, function () {
                console.log("加速回收---");
                tt.triggerGC();
            });
        };
        TTGameMgr.prototype.onShow = function (callBack) {
            var _this = this;
            tt.onShow(function (res) {
                callBack && callBack(res);
                _this.showTime = new Date().getTime();
                if (_this.showTime - _this.hideTime >= _this.sucTime) {
                    _this.shareSucFun && _this.shareSucFun.call(_this.thisObj);
                }
                else {
                    _this.shareFailFun && _this.shareFailFun.call(_this.thisObj);
                }
                _this.shareSucFun = null;
                _this.shareFailFun = null;
                _this.thisObj = null;
                EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
            });
        };
        TTGameMgr.prototype.onHide = function (callBack) {
            var _this = this;
            tt.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
            });
        };
        TTGameMgr.prototype.loginGame = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.login().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                res = JSON.parse(res);
                                GameData.getInstance().userInfo.openId = res.openid;
                                GameData.getInstance().userInfo.sessionKey = res.session_key;
                                return [4, this.initUserInfo()];
                            case 1:
                                _a.sent();
                                resolve();
                                return [2];
                        }
                    });
                }); }).catch(function (err) {
                    resolve();
                });
            });
        };
        TTGameMgr.prototype.checkSession = function () {
            return new Promise(function (resolve) {
                tt.checkSession({
                    success: function (res) {
                        console.log("session未过期", res);
                        resolve(false);
                    },
                    fail: function (res) {
                        console.log("session已过期，需要重新登录", res);
                        resolve(true);
                    }
                });
            });
        };
        TTGameMgr.prototype.login = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                tt.login({
                    force: false,
                    success: function (res) {
                        if (res.code) {
                            console.log("code：", res.code);
                            var urlappend = "appid=" + _this.appid + "&secret=" + _this.secret + "&code=" + res.code + "&anonymous_code=" + res.anonymousCode;
                            tt.request({
                                url: _this.url,
                                method: "POST",
                                data: {
                                    msg_type: "5",
                                    msg_data: {
                                        url_append: urlappend,
                                    }
                                },
                                success: function (res2) {
                                    console.log("getsisson 返回：", res2);
                                    resolve(res2.data.msg_data);
                                },
                                fail: function (res3) {
                                    console.warn("网络请求失败：", res3);
                                    reject();
                                }
                            });
                        }
                        else {
                            console.warn("登录失败：", res);
                            reject();
                        }
                    },
                    fail: function (err) {
                        console.warn("login调用失败", err);
                        reject();
                    }
                });
            });
        };
        TTGameMgr.prototype.queryAuthorization = function (scope) {
            return new Promise(function (resolve) {
                tt.getSetting({
                    success: function (res) {
                        if (res.authSetting[scope]) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    },
                    fail: function (res) {
                        resolve(false);
                    }
                });
            });
        };
        TTGameMgr.prototype.getUserInfo = function () {
            return new Promise(function (resolve) {
                tt.getUserInfo({
                    withCredentials: false,
                    success: function (res) {
                        console.log("获取用户信息成功！", res);
                        resolve(res.userInfo);
                    },
                    fail: function (res) {
                        console.warn("用户未授权", res);
                        resolve(null);
                    }
                });
            });
        };
        TTGameMgr.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfo()];
                        case 1:
                            info = _a.sent();
                            console.log("获取用户的基本信息:", info);
                            if (info) {
                                GameData.getInstance().userInfo.nick = info.nickName;
                                GameData.getInstance().userInfo.avatarUrl = info.avatarUrl;
                                GameData.getInstance().userInfo.sex = info.gender;
                                this.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
                                tt.onShareAppMessage(function () {
                                    return _this.defaultMssage;
                                });
                            }
                            return [2];
                    }
                });
            });
        };
        TTGameMgr.prototype.getUpdateManager = function () {
            var updateManager = tt.getUpdateManager();
            updateManager.onCheckForUpdate(function (res) {
                console.log("是否有新版本:", res);
            });
            updateManager.onUpdateReady(function () {
                tt.showModal({
                    title: "更新提示",
                    showCancel: false,
                    content: "新版本已经准备好，是否重启应用？",
                    success: function (res) {
                        res.confirm && updateManager.applyUpdate();
                    }
                });
            });
            updateManager.onUpdateFailed(function (err) {
                console.warn("新版本更新失败:", err);
            });
        };
        TTGameMgr.prototype.getShareInfo = function (query) {
            var shareInfo = this.shareInfo;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GameData.getInstance().userInfo.openId;
                query["openid"] = openId;
            }
            info.query = Utils.querStr(query);
            return info;
        };
        TTGameMgr.prototype.shareAppMessage = function (data) {
            if (!data)
                data = {};
            this.shareSucFun = data.sucFun;
            this.shareFailFun = function () {
                TipsManager.getInstance().showDefaultTips("分享失败，请分享到群里");
                data.failFun && data.failFun();
            };
            this.thisObj = data.thisObj;
            this.sucTime = data.time || this.sucTime;
            if (!data.message) {
                data.message = this.getShareInfo({});
            }
            tt.shareAppMessage(data.message);
        };
        TTGameMgr.prototype.playViderAd = function (data) {
            var _this = this;
            var videoId = this.infos.videoId;
            if (data.isLongVideo) {
                videoId = this.infos.longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips("开发中");
                data.errorFun && data.errorFun();
                return;
            }
            tt.showLoading({ title: "广告加载中" });
            if (!this.videoAd) {
                var adId = videoId[Math.floor(Math.random() * videoId.length)];
                this.videoAd = tt.createRewardedVideoAd({
                    adUnitId: adId
                });
                this.videoAd.onLoad(function (res) {
                    console.log("激励视频广告 加载成功", res);
                });
            }
            var closeCall = function (res) {
                console.log("激励视频广告 关闭", res);
                if (res.isEnded) {
                    data.successFun && data.successFun();
                }
                else {
                    data.failFun && data.failFun();
                }
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                tt.hideLoading({});
            };
            var errorCall = function (err) {
                console.warn("激励视频广告 错误", err);
                data.errorFun && data.errorFun(err);
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                tt.hideLoading({});
            };
            this.videoAd.onClose(closeCall);
            this.videoAd.onError(errorCall);
            this.videoAd.load().then(function () {
                console.log("激励视频广告 加载成功");
                _this.videoAd.show().then(function () {
                    console.log("激励视频广告 显示成功");
                    tt.hideLoading({});
                }).catch(function (err) {
                    console.warn("激励视频广告 显示失败", err);
                    errorCall(err);
                });
            }).catch(function (err) {
                console.warn("激励视频广告 加载失败", err);
                errorCall(err);
            });
        };
        TTGameMgr.prototype.showBannerAd = function (offset) {
            var _this = this;
            if (!this.infos.bannerOpen)
                return;
            if (this.getAppName() == "Douyin") {
                return;
            }
            this.canShowBanner = true;
            var bannerId = this.infos.bannerId;
            if (bannerId.length <= 0)
                return;
            var errorFun = function (err) {
                console.warn("banner 广告 onError ", err);
            };
            var createFun = function () {
                var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
                console.log("创建 banner 广告组件-->", adId);
                var phone = _this.systemInfo;
                var w = phone.windowWidth;
                var h = phone.windowHeight;
                _this.clearBannerFun && _this.clearBannerFun();
                _this.clearBannerFun = null;
                var bannerAd = tt.createBannerAd({
                    adUnitId: adId,
                    adIntervals: 60,
                    style: { top: 0, left: 0, width: 200 }
                });
                var resizeFun = function (res) {
                    bannerAd.style.left = (w - res.width) / 2;
                    bannerAd.style.top = h - res.height;
                    console.log("banner 广告 onResize ", res, bannerAd);
                };
                var loadFun = function (res) {
                    console.log("banner 广告 onLoad 成功", res);
                    _this.bannerAd = bannerAd;
                    _this.bannerAd.offLoad(loadFun);
                    _this.bannerAd.offError(errorFun);
                    showFun();
                };
                bannerAd.onError(errorFun);
                bannerAd.onLoad(loadFun);
                bannerAd.onResize(resizeFun);
                _this.clearBannerFun = function () {
                    if (_this.bannerAd) {
                        _this.bannerAd.offLoad(loadFun);
                        _this.bannerAd.offResize(resizeFun);
                        _this.bannerAd.offError(resizeFun);
                    }
                };
            };
            var showFun = function () {
                if (_this.canShowBanner) {
                    _this.bannerAd.show().then(function () {
                        console.log("banner广告展示完成");
                        if (offset) {
                            offset.callback && offset.callback();
                        }
                    }).catch(function (err) {
                        errorFun(err);
                    });
                }
                else {
                    _this.bannerAd.hide();
                }
            };
            if (!this.bannerAd) {
                createFun();
            }
            else {
                showFun();
            }
        };
        TTGameMgr.prototype.hideBanner = function () {
            this.bannerAd && this.bannerAd.hide();
            this.canShowBanner = false;
        };
        TTGameMgr.prototype.destoryBanner = function () {
            this.bannerAd && this.bannerAd.destroy();
            this.clearBannerFun && this.clearBannerFun();
            this.clearBannerFun = null;
        };
        TTGameMgr.prototype.showInsertAd = function (data) {
            var _this = this;
            if (DeviceUtil.isIOS() || window["screenOrientation"].indexOf("landscape") > -1) {
                data.closeFun && data.closeFun();
                return;
            }
            if (this.getAppName() == "Toutiao" && this.infos.intersOpen) {
                var intersId = this.infos.intersId;
                if (intersId.length <= 0)
                    return;
                var adId = intersId[Math.floor(Math.random() * intersId.length)];
                console.log("创建插屏广告组件-->", adId);
                this.insertAd = tt.createInterstitialAd({
                    adUnitId: adId
                });
                var closeCall_1 = function (res) {
                    console.log("插屏广告关闭", res);
                    data.closeFun && data.closeFun();
                    _this.insertAd.offError(errorCall_1);
                    _this.insertAd.offClose(closeCall_1);
                    _this.insertAd.destroy && _this.insertAd.destroy();
                };
                var errorCall_1 = function (err) {
                    console.log("插屏广告错误", err);
                    data.errorFun && data.errorFun();
                    _this.insertAd.offError(errorCall_1);
                    _this.insertAd.offClose(closeCall_1);
                    _this.insertAd.destroy && _this.insertAd.destroy();
                };
                this.insertAd.onError(errorCall_1);
                this.insertAd.onClose(closeCall_1);
                this.insertAd.load().then(function () {
                    console.log("插屏广告 加载成功");
                    _this.insertAd.show().then(function () {
                        console.log("插屏广告 显示成功");
                        data.successFun && data.successFun();
                    }).catch(function (err) {
                        console.warn("插屏广告 显示失败", err);
                        errorCall_1(err);
                    });
                }).catch(function (err) {
                    console.warn("插屏广告 加载失败", err);
                    errorCall_1(err);
                });
            }
            else {
                data.closeFun && data.closeFun();
            }
        };
        TTGameMgr.prototype.initGameRecordListener = function () {
            var _this = this;
            if (!this.gameRecorder)
                this.gameRecorder = tt.getGameRecorderManager();
            this.gameRecorder.onStart(function (res) {
                console.log("录屏开始:", res);
                _this.startTime = (new Date()).getTime();
            });
            this.gameRecorder.onStop(function (res) {
                console.log("录屏结束:", res);
                _this.recordStopFun && _this.recordStopFun();
                _this.recordStopFun = null;
                var now = (new Date()).getTime();
                if (now - _this.startTime <= 3000) {
                    _this.tempVideoPath = null;
                    tt.showModal({
                        title: "系统提示", content: "需要录制3秒以上哟", showCancel: false, cancelText: "", confirmText: "确定",
                        success: function () {
                        }
                    });
                    return;
                }
                _this.tempVideoPath = res.videoPath;
            });
            this.gameRecorder.onError(function (err) {
                console.log("录屏错误:", err);
            });
            this.gameRecorder.onPause(function (res) {
                console.log("录屏已暂停:", res);
            });
            this.gameRecorder.onResume(function (res) {
                console.log("录屏已恢复:", res);
            });
            this.gameRecorder.onInterruptionBegin(function () {
                _this.gameRecorder.pause();
            });
            this.gameRecorder.onInterruptionEnd(function () {
                _this.gameRecorder.resume();
            });
        };
        TTGameMgr.prototype.startGameRecord = function (data) {
            if (!DeviceUtil.isTTMiniGame() || this.isRecording)
                return;
            if (!this.gameRecorder)
                this.initGameRecordListener();
            this.tempVideoPath = null;
            this.recordStopFun = data.stopFun;
            this.isRecording = true;
            this.indexTime = 0;
            this.gameRecorder.start({ duration: this.maxMakeVideoTime });
            Laya.timer.loop(1000, this, this.loopTime);
        };
        TTGameMgr.prototype.loopTime = function () {
            this.indexTime++;
            if (this.indexTime >= this.maxMakeVideoTime) {
                console.log("录制结束");
                this.stopGameRecord();
            }
        };
        TTGameMgr.prototype.stopGameRecord = function (force) {
            if (force === void 0) { force = false; }
            console.log("stopGameRecord  录制时长：", this.indexTime);
            if (this.isRecording) {
                if (force) {
                    Laya.timer.clear(this, this.loopTime);
                    this.isRecording = false;
                    this.gameRecorder.stop();
                    return;
                }
                if (this.indexTime <= 3) {
                    TipsManager.getInstance().showDefaultTips("录制视频时间不能小于3秒哦!");
                    this.tempVideoPath = null;
                    return;
                }
                Laya.timer.clear(this, this.loopTime);
                this.isRecording = false;
                this.gameRecorder.stop();
            }
        };
        TTGameMgr.prototype.shareGameVideo = function (data) {
            if (!DeviceUtil.isTTMiniGame())
                return;
            if (!this.tempVideoPath || this.tempVideoPath.length == 0) {
                data.failFun && data.failFun();
                TipsManager.getInstance().showDefaultTips("暂未录制视频哦!");
                return;
            }
            if (!data)
                data = {};
            console.log("分享游戏视频--");
            tt.shareAppMessage({
                channel: "video",
                title: "火柴人之奇葩画",
                desc: "火柴人之奇葩画",
                imageUrl: "",
                templateId: "",
                query: "openId=" + GameData.getInstance().userInfo.openId + "&nick=" + GameData.getInstance().userInfo.nick,
                extra: {
                    videoPath: this.tempVideoPath
                },
                success: function () {
                    console.log("分享视频成功");
                    data.successFun && data.successFun();
                },
                fail: function (err) {
                    console.log("分享视频失败", err);
                    data.failFun && data.failFun();
                    TipsManager.getInstance().showDefaultTips("视频分享失败！");
                }
            });
        };
        TTGameMgr.prototype.vibrateShort = function (data) {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isTTMiniGame()) {
                tt.vibrateShort(data);
            }
        };
        TTGameMgr.prototype.vibrateLong = function () {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isTTMiniGame()) {
                tt.vibrateLong({});
            }
        };
        TTGameMgr.prototype.initMoreGameAppInfos = function () {
            this.moreGameAppInfos = [];
            var res = [
                { "appid": "tt5c622adfc34851be", "title": "杠精大乱斗", "icon": "https://hs.yz061.com/res/down/public/icon/cd/pole_jump.png" },
                { "appid": "tt4e7138ccd15b7caa", "title": "巴掌王3D", "icon": "https://hs.yz061.com/res/down/public/icon/cd/slap_king.png" },
                { "appid": "tt7e0808b5e1224cd6", "title": "穿越空间", "icon": "https://hs.yz061.com/res/down/public/icon/cd/cykj.png" },
                { "appid": "tt9c09eab4032391c1", "title": "消消来了", "icon": "https://hs.yz061.com/res/down/public/icon/cd/xxll.jpg" },
                { "appid": "tt18956e2887bf2f24", "title": "篮球大作战", "icon": "https://hs.yz061.com/res/down/public/icon/cd/kltl.jpg" },
                { "appid": "ttfdfc8b4162d6c8ab", "title": "萌兵战争", "icon": "https://hs.yz061.com/res/down/public/icon/cd/mbzz.jpg" },
                { "appid": "tte3a3951e7c899dfd", "title": "疯狂跳床", "icon": "https://hs.yz061.com/res/down/public/icon/cd/jump.png" },
                { "appid": "tt546f22d2cb457cd0", "title": "超级购物狂", "icon": "https://hs.yz061.com/res/down/public/icon/cd/crazy_shopping.jpg" },
                { "appid": "tt8c7bfac613516af9", "title": "快来划水", "icon": "https://hs.yz061.com/res/down/public/icon/cd/klhs.jpg" },
                { "appid": "ttce8db83051a7f459", "title": "春节小火车", "icon": "https://hs.yz061.com/res/down/public/icon/cd/train.jpg" },
            ];
            for (var i = 0, len = res.length; i < len; i++) {
                if (res[i].appid != this.appid) {
                    this.moreGameAppInfos.push(res[i]);
                }
            }
        };
        TTGameMgr.prototype.showMoreGamesModal = function (data) {
            var _this = this;
            if (!data)
                data = {};
            var appLaunchOptions = [];
            for (var i = 0, len = this.moreGameAppInfos.length; i < len; i++) {
                appLaunchOptions.push({
                    appId: this.moreGameAppInfos[i].appid,
                    query: "",
                    extraData: {}
                });
            }
            var onMoreGamesModalClose = function () {
                _this.moreGamesIsShow = false;
                data.closeFun && data.closeFun();
                tt.offNavigateToMiniProgram();
                tt.offMoreGamesModalClose();
            };
            var onNavigateToMiniProgram = function (res) {
                console.log("跳转", res);
            };
            tt.onMoreGamesModalClose(onMoreGamesModalClose);
            tt.onNavigateToMiniProgram(onNavigateToMiniProgram);
            tt.showMoreGamesModal({
                appLaunchOptions: appLaunchOptions,
                success: function (res) {
                    console.log("success", res);
                    _this.moreGamesIsShow = true;
                    data.sucFun && data.sucFun();
                },
                fail: function (res) {
                    console.log("fail", res.errMsg);
                }
            });
        };
        TTGameMgr.prototype.showMoreGame = function (data) {
        };
        TTGameMgr.prototype.getAppName = function () {
            if (!this.systemInfo)
                this.systemInfo = tt.getSystemInfoSync();
            return this.systemInfo.appName;
        };
        return TTGameMgr;
    }(MiniManeger));

    var QQGameMgr = (function (_super) {
        __extends(QQGameMgr, _super);
        function QQGameMgr() {
            var _this = _super.call(this) || this;
            _this.appid = "1110516131";
            _this.secret = "2mpUZPZkxWa6AwuP";
            _this.token = "8c5d38c8b666d7d95e61bea8333b3eee";
            _this.url = "https://yxtest.32yx.com/QQMiniGame.fcgi";
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.sucTime = 3000;
            _this.defaultMssage = {
                "title": "魔性火柴人在线涂鸦！",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/qq_res/share1.jpg",
                "query": ""
            };
            _this.shareInfo = [
                {
                    "title": "魔性火柴人在线涂鸦！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/qq_res/share1.jpg",
                    "query": ""
                }
            ];
            _this.canShowBanner = true;
            return _this;
        }
        QQGameMgr.prototype.initMiniGame = function () {
            var _this = this;
            this.launchOption = qq.getLaunchOptionsSync();
            console.log("launchOption >> ", this.launchOption);
            this.systemInfo = qq.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
            qq.setKeepScreenOn({ keepScreenOn: true });
            qq.updateShareMenu({ withShareTicket: true });
            qq.showShareMenu({ withShareTicket: true });
            this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
            qq.onShareAppMessage(function () {
                return _this.defaultMssage;
            });
            this.getUpdateManager();
        };
        QQGameMgr.prototype.onShow = function (callBack) {
            var _this = this;
            qq.onShow(function (res) {
                callBack && callBack(res);
                _this.showTime = new Date().getTime();
                if (_this.showTime - _this.hideTime >= _this.sucTime) {
                    _this.shareSucFun && _this.shareSucFun.call(_this.thisObj);
                }
                else {
                    _this.shareFailFun && _this.shareFailFun.call(_this.thisObj);
                }
                _this.shareSucFun = null;
                _this.shareFailFun = null;
                _this.thisObj = null;
                EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
            });
        };
        QQGameMgr.prototype.onHide = function (callBack) {
            var _this = this;
            qq.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
            });
        };
        QQGameMgr.prototype.onAudioInterruptionBegin = function (callBack) {
            qq.onAudioInterruptionBegin(function () {
                callBack && callBack();
            });
        };
        QQGameMgr.prototype.onAudioInterruptionEnd = function (callBack) {
            qq.onAudioInterruptionEnd(function () {
                callBack && callBack();
            });
        };
        QQGameMgr.prototype.loginGame = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.login().then(function (res) {
                    res = JSON.parse(res);
                    GameData.getInstance().userInfo.openId = res.openid;
                    GameData.getInstance().userInfo.sessionKey = res.session_key;
                    _this.initUserInfo();
                    resolve();
                }).catch(function (err) {
                    reject();
                });
            });
        };
        QQGameMgr.prototype.checkSession = function () {
            return new Promise(function (resolve) {
                qq.checkSession({
                    success: function (res) {
                        console.log("session未过期", res);
                        resolve(false);
                    },
                    fail: function (res) {
                        console.log("session已过期，需要重新登录", res);
                        resolve(true);
                    }
                });
            });
        };
        QQGameMgr.prototype.login = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                qq.login({
                    success: function (res) {
                        if (res.code) {
                            console.log("code：", res.code);
                            var urlappend = "appid=" + _this.appid + "&secret=" + _this.secret + "&js_code=" + res.code + "&grant_type=authorization_code";
                            qq.request({
                                url: _this.url,
                                method: "POST",
                                data: {
                                    msg_type: "10",
                                    msg_data: {
                                        url_append: urlappend,
                                    }
                                },
                                success: function (res2) {
                                    console.log("getsisson 返回：", res2);
                                    resolve(res2.data.msg_data);
                                },
                                fail: function (res3) {
                                    console.warn("网络请求失败：", res3);
                                    reject();
                                }
                            });
                        }
                        else {
                            console.warn("登录失败：", res);
                            reject();
                        }
                    },
                    fail: function (err) {
                        console.log("login调用失败", err);
                        reject();
                    }
                });
            });
        };
        QQGameMgr.prototype.queryAuthorization = function (scope) {
            return new Promise(function (resolve) {
                qq.getSetting({
                    success: function (res) {
                        if (res.authSetting[scope]) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    },
                    fail: function (res) {
                        resolve(false);
                    }
                });
            });
        };
        QQGameMgr.prototype.getUserInfo = function () {
            return new Promise(function (resolve) {
                qq.getUserInfo({
                    withCredentials: false,
                    lang: 'zh_CN',
                    success: function (res) {
                        console.log("获取用户信息成功！", res);
                        resolve(res.userInfo);
                    },
                    fail: function (res) {
                        console.log("用户未授权", res);
                        resolve(null);
                    }
                });
            });
        };
        QQGameMgr.prototype.createUserInfoButton = function () {
            return new Promise(function (resolve, reject) {
                console.log("创建用户信息授权按钮");
                var button = qq.createUserInfoButton({
                    type: "text",
                    text: "",
                    style: {
                        left: -300,
                        top: 0,
                        width: 2000,
                        height: 4000,
                        backgroundColor: "#00000000",
                        borderColor: "#00000000",
                        borderWidth: 1,
                        borderRadius: 1,
                        color: "#00000000",
                        textAlign: 'center',
                        fontSize: 16,
                        lineHeight: 40
                    },
                    withCredentials: false,
                    lang: 'zh_CN'
                });
                button.onTap(function (res) {
                    console.log("用户授权成功！", res);
                    button.destroy();
                    resolve(res.userInfo);
                });
            });
        };
        QQGameMgr.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfo()];
                        case 1:
                            info = _a.sent();
                            if (!!info) return [3, 3];
                            return [4, this.createUserInfoButton()];
                        case 2:
                            info = _a.sent();
                            _a.label = 3;
                        case 3:
                            GameData.getInstance().userInfo.nick = info.nickName;
                            GameData.getInstance().userInfo.avatarUrl = info.avatarUrl;
                            GameData.getInstance().userInfo.sex = info.gender;
                            this.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
                            this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
                            InviteManager.getInstance().judgeInvite();
                            qq.onShareAppMessage(function () {
                                return _this.defaultMssage;
                            });
                            return [2];
                    }
                });
            });
        };
        QQGameMgr.prototype.getUpdateManager = function () {
            var updateManager = qq.getUpdateManager();
            updateManager.onCheckForUpdate(function (res) {
                console.log("是否有新版本:", res);
            });
            updateManager.onUpdateReady(function () {
                qq.showModal({
                    title: "更新提示",
                    showCancel: false,
                    content: "新版本已经准备好，是否重启应用？",
                    success: function (res) {
                        res.confirm && updateManager.applyUpdate();
                    }
                });
            });
            updateManager.onUpdateFailed(function (err) {
                console.warn("新版本更新失败:", err);
            });
        };
        QQGameMgr.prototype.getShareInfo = function (query) {
            var shareInfo = this.shareInfo;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GameData.getInstance().userInfo.openId;
                query["openid"] = openId;
            }
            info.imageUrl = info.imageUrl + "?v=" + new Date().getTime();
            info.query = Utils.querStr(query);
            return info;
        };
        QQGameMgr.prototype.shareAppMessage = function (data) {
            if (!data)
                data = {};
            this.shareSucFun = data.sucFun;
            this.shareFailFun = function () {
                TipsManager.getInstance().showDefaultTips("分享失败，请分享到群里");
                data.failFun && data.failFun();
            };
            this.thisObj = data.thisObj;
            this.sucTime = data.time || this.sucTime;
            if (!data.message) {
                data.message = this.getShareInfo({});
            }
            qq.shareAppMessage(data.message);
        };
        QQGameMgr.prototype.playViderAd = function (data) {
            var _this = this;
            if (!this.infos.videoOpen) {
                data.errorFun && data.errorFun();
                return;
            }
            var videoId = this.infos.videoId;
            if (data.isLongVideo) {
                videoId = this.infos.longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips("开发中");
                data.errorFun && data.errorFun();
                return;
            }
            qq.showLoading({ title: "广告加载中", mask: true });
            if (!this.videoAd) {
                var adId = videoId[Math.floor(Math.random() * videoId.length)];
                this.videoAd = qq.createRewardedVideoAd({
                    adUnitId: adId
                });
                this.videoAd.onLoad(function (res) {
                    console.log("激励视频广告 加载完成", res);
                });
            }
            var closeCall = function (res) {
                console.log("激励视频广告 关闭", res);
                if (res.isEnded) {
                    data.successFun && data.successFun();
                }
                else {
                    data.failFun && data.failFun();
                }
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                qq.hideLoading({});
            };
            var errorCall = function (err) {
                console.warn("激励视频广告 错误", err);
                data.errorFun && data.errorFun(err);
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                qq.hideLoading({});
            };
            this.videoAd.onClose(closeCall);
            this.videoAd.onError(errorCall);
            this.videoAd.load().then(function () {
                console.log("激励视频广告 加载成功");
                _this.videoAd.show().then(function () {
                    console.log("激励视频广告 显示成功");
                    qq.hideLoading({});
                }).catch(function (err) {
                    console.warn("激励视频广告 显示失败", err);
                    errorCall(err);
                });
            }).catch(function (err) {
                console.warn("激励视频广告 加载失败", err);
                errorCall(err);
            });
        };
        QQGameMgr.prototype.showBannerAd = function (offset) {
            var _this = this;
            var bannerId = this.infos.bannerId;
            if (!this.infos.bannerOpen || bannerId.length <= 0)
                return;
            this.canShowBanner = true;
            var errorFun = function (err) {
                console.warn("banner 广告 onError ", err);
            };
            var createFun = function () {
                var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
                console.log("创建 banner 广告组件-->", adId);
                var phone = _this.systemInfo;
                var w = phone.windowWidth;
                var h = phone.windowHeight;
                _this.clearBannerFun && _this.clearBannerFun();
                _this.clearBannerFun = null;
                var bannerAd = qq.createBannerAd({
                    adUnitId: adId,
                    style: { top: 0, left: 0, width: 300, height: 50 }
                });
                var resizeFun = function (res) {
                    bannerAd.style.left = (w - res.width) / 2;
                    bannerAd.style.top = h - res.height;
                    console.log("banner 广告 onResize ", res, bannerAd);
                };
                var loadFun = function (res) {
                    console.log("banner 广告 onLoad 成功", res);
                    _this.bannerAd = bannerAd;
                    _this.bannerAd.offLoad(loadFun);
                    _this.bannerAd.offError(errorFun);
                    showFun();
                };
                bannerAd.onError(errorFun);
                bannerAd.onLoad(loadFun);
                bannerAd.onResize(resizeFun);
                _this.clearBannerFun = function () {
                    if (_this.bannerAd) {
                        _this.bannerAd.offLoad(loadFun);
                        _this.bannerAd.offResize(resizeFun);
                        _this.bannerAd.offError(resizeFun);
                    }
                };
            };
            var showFun = function () {
                if (_this.canShowBanner) {
                    _this.bannerAd.show().then(function () {
                        console.log("banner广告展示完成");
                        if (offset) {
                            offset.callback && offset.callback();
                        }
                    }).catch(function (err) {
                        errorFun(err);
                    });
                }
                else {
                    _this.bannerAd.hide();
                }
            };
            if (!this.bannerAd) {
                createFun();
            }
            else {
                showFun();
            }
        };
        QQGameMgr.prototype.hideBanner = function () {
            console.log("隐藏banner");
            this.bannerAd && this.bannerAd.hide();
            this.canShowBanner = false;
        };
        QQGameMgr.prototype.destoryBanner = function () {
            this.clearBannerFun && this.clearBannerFun();
            this.clearBannerFun = null;
            this.bannerAd && this.bannerAd.destroy();
            this.bannerAd = null;
        };
        QQGameMgr.prototype.showInsertAd = function (data) {
            var _this = this;
            if (this.compareVersion(this.systemInfo.SDKVersion, "1.12.0") >= 0) {
                var intersId = this.infos.intersId;
                if (!this.infos.intersOpen || intersId.length <= 0) {
                    data.closeFun && data.closeFun();
                    return;
                }
                var adId_1 = intersId[Math.floor(Math.random() * intersId.length)];
                console.log("创建插屏广告组件-->", adId_1);
                var createCall = function () {
                    _this.insertAd = qq.createInterstitialAd({
                        adUnitId: adId_1
                    });
                    _this.insertAd.onError(errorCall_1);
                    _this.insertAd.onLoad(loadCall_1);
                };
                var loadCall_1 = function (res) {
                    console.log("插屏广告 加载成功", res);
                    _this.insertAd.offError(errorCall_1);
                    _this.insertAd.offLoad(loadCall_1);
                    showCall_1();
                };
                var showCall_1 = function () {
                    _this.insertAd.show().then(function () {
                        console.log("插屏广告 显示成功");
                        data.successFun && data.successFun();
                    }).catch(function (err) {
                        console.warn("插屏广告 显示失败", err);
                        errorCall_1(err);
                    });
                };
                var closeCall_1 = function (res) {
                    console.log("插屏广告关闭", res);
                    data.closeFun && data.closeFun();
                    _this.insertAd.offError(errorCall_1);
                    _this.insertAd.offClose(closeCall_1);
                };
                var errorCall_1 = function (err) {
                    console.log("插屏广告错误", err);
                    data.errorFun && data.errorFun();
                    _this.insertAd.offError(errorCall_1);
                    _this.insertAd.offClose(closeCall_1);
                    _this.insertAd.destroy && _this.insertAd.destroy();
                    _this.insertAd = null;
                };
                if (!this.insertAd) {
                    createCall();
                }
                else {
                    showCall_1();
                }
                this.insertAd.onClose(closeCall_1);
            }
            else {
                qq.showModal({
                    title: "提示",
                    content: "当前QQ版本过低，无法使用插屏广告，请升级到最新QQ版本后重试。"
                });
            }
        };
        QQGameMgr.prototype.showAppBoxAd = function (data) {
            var _this = this;
            if (this.compareVersion(this.systemInfo.SDKVersion, "1.7.1") >= 0) {
                var appBoxId = this.infos.appBoxId;
                if (!this.infos.appBoxOpen || appBoxId.length <= 0) {
                    data.closeFun && data.closeFun();
                    return;
                }
                var adId = appBoxId[Math.floor(Math.random() * appBoxId.length)];
                if (!this.appBoxAd) {
                    console.log("创建盒子广告组件-->", adId);
                    this.appBoxAd = qq.createAppBox({ adUnitId: adId });
                }
                var closeCall_2 = function (res) {
                    console.log("盒子广告关闭", res);
                    data.closeFun && data.closeFun();
                    _this.appBoxAd.offClose(closeCall_2);
                };
                var errorCall_2 = function (err) {
                    console.log("盒子广告错误", err);
                    data.errorFun && data.errorFun();
                    _this.appBoxAd.offClose(closeCall_2);
                    _this.appBoxAd.destroy && _this.appBoxAd.destroy();
                    _this.appBoxAd = null;
                };
                this.appBoxAd.onClose(closeCall_2);
                this.appBoxAd.load().then(function () {
                    console.log("盒子广告 加载成功");
                    _this.appBoxAd.show().then(function () {
                        console.log("盒子广告 显示成功");
                        data.successFun && data.successFun();
                    }).catch(function (err) {
                        console.warn("盒子广告 显示失败", err);
                        errorCall_2(err);
                    });
                }).catch(function (err) {
                    console.warn("盒子广告 加载失败", err);
                    errorCall_2(err);
                });
            }
            else {
                qq.showModal({
                    title: "提示",
                    content: "当前QQ版本过低，无法使用盒子广告，请升级到最新QQ版本后重试。"
                });
            }
        };
        QQGameMgr.prototype.vibrateShort = function (data) {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isQQMiniGame()) {
                qq.vibrateShort(data);
            }
        };
        QQGameMgr.prototype.vibrateLong = function () {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isQQMiniGame()) {
                qq.vibrateLong({});
            }
        };
        return QQGameMgr;
    }(MiniManeger));

    var WXGameMgr = (function (_super) {
        __extends(WXGameMgr, _super);
        function WXGameMgr() {
            var _this = _super.call(this) || this;
            _this.appid = "wx2947380262b38961";
            _this.secret = "2b7eb6a3f2f385fc2e2e8625aa642b95";
            _this.url = "https://yxtest.32yx.com/MiniGame.fcgi";
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.sucTime = 3000;
            _this.defaultMssage = {
                "title": "魔性火柴人在线涂鸦！",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/wx_res/share1.jpg",
                "query": ""
            };
            _this.shareInfo = [
                {
                    "title": "魔性火柴人在线涂鸦！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/firePeople2/wx_res/share1.jpg",
                    "query": ""
                }
            ];
            _this.canShowBanner = true;
            return _this;
        }
        WXGameMgr.prototype.initMiniGame = function () {
            var _this = this;
            this.launchOption = wx.getLaunchOptionsSync();
            console.log("launchOption >> ", this.launchOption);
            this.systemInfo = wx.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
            wx.setKeepScreenOn({ keepScreenOn: true });
            wx.updateShareMenu({ withShareTicket: true });
            wx.showShareMenu({ withShareTicket: true });
            this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
            wx.onShareAppMessage(function () {
                return _this.defaultMssage;
            });
            this.getUpdateManager();
            Laya.timer.once(10000, this, function () {
                console.log("加速回收---");
                wx.triggerGC();
            });
        };
        WXGameMgr.prototype.onShow = function (callBack) {
            var _this = this;
            wx.onShow(function (res) {
                callBack && callBack(res);
                _this.showTime = new Date().getTime();
                if (_this.showTime - _this.hideTime >= _this.sucTime) {
                    _this.shareSucFun && _this.shareSucFun.call(_this.thisObj);
                }
                else {
                    _this.shareFailFun && _this.shareFailFun.call(_this.thisObj);
                }
                _this.shareSucFun = null;
                _this.shareFailFun = null;
                _this.thisObj = null;
                EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
            });
        };
        WXGameMgr.prototype.onHide = function (callBack) {
            var _this = this;
            wx.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
            });
        };
        WXGameMgr.prototype.onAudioInterruptionBegin = function (callBack) {
            wx.onAudioInterruptionBegin(function () {
                callBack && callBack();
            });
        };
        WXGameMgr.prototype.onAudioInterruptionEnd = function (callBack) {
            wx.onAudioInterruptionEnd(function () {
                callBack && callBack();
            });
        };
        WXGameMgr.prototype.loginGame = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.login().then(function (res) {
                    res = JSON.parse(res);
                    GameData.getInstance().userInfo.openId = res.openid;
                    GameData.getInstance().userInfo.sessionKey = res.session_key;
                    _this.initUserInfo();
                    resolve();
                }).catch(function (err) {
                    reject();
                });
            });
        };
        WXGameMgr.prototype.checkSession = function () {
            return new Promise(function (resolve) {
                wx.checkSession({
                    success: function (res) {
                        console.log("session未过期", res);
                        resolve(false);
                    },
                    fail: function (res) {
                        console.log("session已过期，需要重新登录", res);
                        resolve(true);
                    }
                });
            });
        };
        WXGameMgr.prototype.login = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                wx.login({
                    success: function (res) {
                        if (res.code) {
                            console.log("code：", res.code);
                            var urlappend = "appid=" + _this.appid + "&secret=" + _this.secret + "&js_code=" + res.code + "&grant_type=authorization_code";
                            wx.request({
                                url: _this.url,
                                method: "POST",
                                data: {
                                    msg_type: "1",
                                    msg_data: {
                                        url_append: urlappend,
                                    }
                                },
                                success: function (res2) {
                                    console.log("getsisson 返回：", res2);
                                    resolve(res2.data.msg_data);
                                },
                                fail: function (res3) {
                                    console.warn("网络请求失败：", res3);
                                    reject();
                                }
                            });
                        }
                        else {
                            console.warn("登录失败：", res);
                            reject();
                        }
                    },
                    fail: function (err) {
                        console.log("login调用失败", err);
                        reject();
                    }
                });
            });
        };
        WXGameMgr.prototype.queryAuthorization = function (scope) {
            return new Promise(function (resolve) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[scope]) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    },
                    fail: function (res) {
                        resolve(false);
                    }
                });
            });
        };
        WXGameMgr.prototype.getUserInfo = function () {
            return new Promise(function (resolve) {
                wx.getUserInfo({
                    withCredentials: false,
                    lang: 'zh_CN',
                    success: function (res) {
                        console.log("获取用户信息成功！", res);
                        resolve(res.userInfo);
                    },
                    fail: function (res) {
                        console.log("用户未授权", res);
                        resolve(null);
                    }
                });
            });
        };
        WXGameMgr.prototype.createUserInfoButton = function () {
            return new Promise(function (resolve, reject) {
                console.log("创建用户信息授权按钮");
                var button = wx.createUserInfoButton({
                    type: "text",
                    text: "",
                    style: {
                        left: -300,
                        top: 0,
                        width: 2000,
                        height: 4000,
                        backgroundColor: "#00000000",
                        borderColor: "#00000000",
                        borderWidth: 1,
                        borderRadius: 1,
                        color: "#00000000",
                        textAlign: 'center',
                        fontSize: 16,
                        lineHeight: 40
                    },
                    withCredentials: false,
                    lang: 'zh_CN'
                });
                button.onTap(function (res) {
                    console.log("用户授权成功！", res);
                    button.destroy();
                    resolve(res.userInfo);
                });
            });
        };
        WXGameMgr.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfo()];
                        case 1:
                            info = _a.sent();
                            if (!!info) return [3, 3];
                            return [4, this.createUserInfoButton()];
                        case 2:
                            info = _a.sent();
                            _a.label = 3;
                        case 3:
                            console.log("获取用户的基本信息:", info);
                            GameData.getInstance().userInfo.nick = info.nickName;
                            GameData.getInstance().userInfo.avatarUrl = info.avatarUrl;
                            GameData.getInstance().userInfo.sex = info.gender;
                            this.defaultMssage.imageUrl = this.defaultMssage.imageUrl + "?v=" + new Date().getTime();
                            this.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
                            wx.onShareAppMessage(function () {
                                return _this.defaultMssage;
                            });
                            return [2];
                    }
                });
            });
        };
        WXGameMgr.prototype.getUpdateManager = function () {
            var updateManager = wx.getUpdateManager();
            updateManager.onCheckForUpdate(function (res) {
                console.log("是否有新版本:", res);
            });
            updateManager.onUpdateReady(function () {
                wx.showModal({
                    title: "更新提示",
                    showCancel: false,
                    content: "新版本已经准备好，是否重启应用？",
                    success: function (res) {
                        res.confirm && updateManager.applyUpdate();
                    }
                });
            });
            updateManager.onUpdateFailed(function (err) {
                console.warn("新版本更新失败:", err);
            });
        };
        WXGameMgr.prototype.getShareInfo = function (query) {
            var shareInfo = this.shareInfo;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GameData.getInstance().userInfo.openId;
                query["openid"] = openId;
            }
            info.imageUrl = info.imageUrl + "?v=" + new Date().getTime();
            info.query = Utils.querStr(query);
            return info;
        };
        WXGameMgr.prototype.shareAppMessage = function (data) {
            if (!data)
                data = {};
            this.shareSucFun = data.sucFun;
            this.shareFailFun = function () {
                TipsManager.getInstance().showDefaultTips("分享失败，请分享到群里");
                data.failFun && data.failFun();
            };
            this.thisObj = data.thisObj;
            this.sucTime = data.time || this.sucTime;
            if (!data.message) {
                data.message = this.getShareInfo({});
            }
            wx.shareAppMessage(data.message);
        };
        WXGameMgr.prototype.playViderAd = function (data) {
            var _this = this;
            if (!this.infos.videoOpen) {
                data.errorFun && data.errorFun();
                return;
            }
            var videoId = this.infos.videoId;
            if (data.isLongVideo) {
                videoId = this.infos.longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips("开发中");
                data.errorFun && data.errorFun();
                return;
            }
            wx.showLoading({ title: "广告加载中", mask: true });
            var createCall = function () {
                var adId = videoId[Math.floor(Math.random() * videoId.length)];
                _this.videoAd = wx.createRewardedVideoAd({
                    adUnitId: adId
                });
                _this.videoAd.onError(errorCall);
                _this.videoAd.onLoad(loadCall);
                _this.videoAd.onClose(closeCall);
            };
            var loadCall = function (res) {
                console.log("激励视频广告 加载成功", res);
                _this.videoAd.offError(errorCall);
                _this.videoAd.offLoad(loadCall);
                showCall(false);
            };
            var closeCall = function (res) {
                console.log("激励视频广告 关闭", res);
                if (res && res.isEnded) {
                    data.successFun && data.successFun();
                }
                else {
                    data.failFun && data.failFun();
                }
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                _this.videoAd.offLoad(loadCall);
            };
            var errorCall = function (err) {
                console.warn("激励视频广告 错误", err);
                data.errorFun && data.errorFun(err);
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                _this.videoAd.offLoad(loadCall);
                _this.videoAd.destroy && _this.videoAd.destroy();
                _this.videoAd = null;
                wx.hideLoading({});
            };
            var showCall = function (reload) {
                var fun = function () {
                    _this.videoAd.show().then(function () {
                        console.log("激励视频广告 显示成功");
                        wx.hideLoading({});
                    }).catch(function (err) {
                        errorCall(err);
                    });
                };
                if (reload) {
                    _this.videoAd.load().then(function () {
                        console.log("激励视频广告 加载成功");
                        fun();
                    }).catch(function (err) {
                        errorCall(err);
                    });
                }
                else {
                    fun();
                }
            };
            if (!this.videoAd) {
                createCall();
            }
            else {
                this.videoAd.onClose(closeCall);
                showCall(true);
            }
        };
        WXGameMgr.prototype.showBannerAd = function (offset) {
            var _this = this;
            var bannerId = this.infos.bannerId;
            if (!this.infos.bannerOpen || bannerId.length <= 0)
                return;
            this.canShowBanner = true;
            if (!this.bannerAd) {
                var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
                console.log("创建 banner 广告组件-->", adId);
                var phone = this.systemInfo;
                var w_1 = phone.windowWidth;
                var h_1 = phone.windowHeight;
                this.bannerAd = wx.createBannerAd({
                    adUnitId: adId,
                    adIntervals: 30,
                    style: { top: 0, left: 0, width: 300, height: 50 }
                });
                this.bannerAd.onResize(function (res) {
                    _this.bannerAd.style.left = (w_1 - res.width) / 2;
                    _this.bannerAd.style.top = h_1 - res.height;
                    console.log("banner 广告 onResize ", res, _this.bannerAd);
                });
                this.bannerAd.onError(function (err) {
                    console.warn("banner 广告 onError ", err);
                });
                this.bannerAd.hide();
            }
            this.bannerAd.show();
            if (!this.canShowBanner) {
                this.bannerAd.hide();
            }
            if (offset) {
                offset.callback && offset.callback();
            }
        };
        WXGameMgr.prototype.hideBanner = function () {
            this.bannerAd && this.bannerAd.hide();
            this.canShowBanner = false;
        };
        WXGameMgr.prototype.destoryBanner = function () {
            this.bannerAd && this.bannerAd.destroy();
            this.bannerAd = null;
            this.canShowBanner = false;
        };
        WXGameMgr.prototype.showInsertAd = function (data) {
            var _this = this;
            var intersId = this.infos.intersId;
            if (!this.infos.intersOpen || intersId.length <= 0) {
                data.closeFun && data.closeFun();
                return;
            }
            var adId = intersId[Math.floor(Math.random() * intersId.length)];
            console.log("创建插屏广告组件-->", adId);
            this.insertAd = wx.createInterstitialAd({
                adUnitId: adId
            });
            var closeCall = function (res) {
                console.log("插屏广告关闭", res);
                data.closeFun && data.closeFun();
                _this.insertAd.offError(errorCall);
                _this.insertAd.offClose(closeCall);
                _this.insertAd.destroy && _this.insertAd.destroy();
            };
            var errorCall = function (err) {
                console.log("插屏广告错误", err);
                data.errorFun && data.errorFun();
                _this.insertAd.offError(errorCall);
                _this.insertAd.offClose(closeCall);
                _this.insertAd.destroy && _this.insertAd.destroy();
            };
            this.insertAd.onError(errorCall);
            this.insertAd.onClose(closeCall);
            this.insertAd.load().then(function () {
                console.log("插屏广告 加载成功");
                _this.insertAd.show().then(function () {
                    console.log("插屏广告 显示成功");
                    data.successFun && data.successFun();
                }).catch(function (err) {
                    console.warn("插屏广告 显示失败", err);
                    errorCall(err);
                });
            }).catch(function (err) {
                console.warn("插屏广告 加载失败", err);
                errorCall(err);
            });
        };
        WXGameMgr.prototype.showGridAd = function () {
            var _this = this;
            if (this.compareVersion(this.systemInfo.SDKVersion, "2.9.2") >= 0) {
                var gridId = this.infos.gridId;
                if (gridId.length <= 0)
                    return;
                var adId = gridId[Math.floor(Math.random() * gridId.length)];
                console.log("创建格子广告组件-->", adId);
                this.gridAd = wx.createGridAd({
                    adUnitId: adId,
                    adTheme: "black",
                    gridCount: 5,
                    style: { left: 0, top: 0, width: 100, height: 100 }
                });
                this.gridAd.onError(function (err) {
                    console.log("格子广告错误", err);
                });
                this.gridAd.onResize(function (res) {
                    console.log("格子广告onResize ", res, _this.gridAd);
                });
                this.gridAd.show().then(function () {
                    console.log("格子广告 显示成功");
                }).catch(function (err) {
                    console.warn("格子广告 显示失败", err);
                });
            }
            else {
                wx.showModal({
                    title: "提示",
                    content: "当前微信版本过低，无法使用格子广告，请升级到最新微信版本后重试。"
                });
            }
        };
        WXGameMgr.prototype.hideGridAd = function () {
            if (this.gridAd) {
                this.gridAd.hide();
            }
        };
        WXGameMgr.prototype.vibrateShort = function (data) {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isWXMiniGame()) {
                wx.vibrateShort(data);
            }
        };
        WXGameMgr.prototype.vibrateLong = function () {
            if (!GameData.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isWXMiniGame()) {
                wx.vibrateLong({});
            }
        };
        WXGameMgr.prototype.sendDataToOpen = function (data) {
            Laya.MiniAdpter.window.wx.postMessage(data);
        };
        WXGameMgr.prototype.removeOpenData = function (data) {
            var wxOpenData = data.parent.getChildByName("wxOpenData");
            this.sendDataToOpen({ cmd: 'close', data: null });
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
        };
        WXGameMgr.prototype.addOpenData = function (data) {
            var shareData = this.getShareInfo({ id: GameData.getInstance().userInfo.openId });
            this.sendDataToOpen({ cmd: "share", data: JSON.stringify(shareData) });
            var wxOpenData = data.parent.getChildByName('wxOpenData');
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
            wxOpenData = new Laya.WXOpenDataViewer();
            wxOpenData.name = 'wxOpenData';
            wxOpenData.x = data.x || 0;
            wxOpenData.y = data.y || 0;
            wxOpenData.width = data.width;
            wxOpenData.height = data.height;
            if (data.isCenter) {
                wxOpenData.centerX = 0;
                wxOpenData.centerY = 0;
            }
            else {
                if (data.left != null) {
                    wxOpenData.left = data.left;
                }
                if (data.right != null) {
                    wxOpenData.right = data.right;
                }
                if (data.top != null) {
                    wxOpenData.top = data.top;
                }
                if (data.bottom != null) {
                    wxOpenData.bottom = data.bottom;
                }
            }
            if (data.parent) {
                data.parent.addChild(wxOpenData);
            }
            return wxOpenData;
        };
        return WXGameMgr;
    }(MiniManeger));

    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = _super.call(this, { width: 1080, height: 1920, exportSceneToJson: true }) || this;
            GameConfig.init();
            if (MiniManeger.ins == null) {
                if (DeviceUtil.isWXMiniGame()) {
                    MiniManeger.ins = new WXGameMgr();
                }
                else if (DeviceUtil.isTTMiniGame()) {
                    MiniManeger.ins = new TTGameMgr();
                }
                else if (DeviceUtil.isMZMiniGame()) {
                    MiniManeger.ins = new MZGameMgr();
                }
                else if (DeviceUtil.isQQMiniGame()) {
                    MiniManeger.ins = new QQGameMgr();
                }
                else {
                    MiniManeger.ins = new MiniManeger();
                }
            }
            _this.checkPlatform();
            var onShow = function (obj) {
                console.log("onShow obj = ", obj);
                SoundManager.instance.playBgMusic();
            };
            var onHide = function (obj) {
                console.log("onHide obj = ", obj);
                SoundManager.instance.pauseBgMusic();
            };
            var onAudioInterruptionBegin = function (res) {
                console.log("onAudioInterruptionBegin");
            };
            var onAudioInterruptionEnd = function (res) {
                console.log("onAudioInterruptionEnd");
            };
            if (DeviceUtil.isMZMiniGame()) {
                MiniManeger.instance.onShow(onShow);
                MiniManeger.instance.onHide(onHide);
                MiniManeger.instance.initMiniGame();
            }
            else if (DeviceUtil.isMiniGame()) {
                MiniManeger.instance.onShow(onShow);
                MiniManeger.instance.onHide(onHide);
                MiniManeger.instance.onAudioInterruptionBegin(onAudioInterruptionBegin);
                MiniManeger.instance.onAudioInterruptionEnd(onAudioInterruptionEnd);
                MiniManeger.instance.initMiniGame();
            }
            else {
                Laya.stage.on(Laya.Event.FOCUS, _this, function () {
                    console.log("获取焦点");
                    onShow(null);
                    EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
                });
                Laya.stage.on(Laya.Event.BLUR, _this, function () {
                    console.log("失去焦点");
                    onHide(null);
                    EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
                });
            }
            return _this;
        }
        Main.prototype.checkPlatform = function () {
            console.log("检验平台---");
            var self = this;
            if (window["loadingH5"]) {
                window["loadingH5"](100);
            }
            if (window["loadingView"]) {
                window["loadingView"].loading(100);
            }
            var resUrl = "./";
            GameData.getInstance().gameVersion = 1001;
            if (DeviceUtil.isWXMiniGame()) {
                GameData.getInstance().gameVersion = 1001;
                GameData.getInstance().resVersion = '1_9/';
                GameData.getInstance().MinigameResUrlRoot += "wx_res/";
                GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "wx_res_v_z_" + GameData.getInstance().resVersion;
                resUrl = GameData.getInstance().MinigameResAllUrl;
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
            }
            else if (DeviceUtil.isTTMiniGame()) {
                GameData.getInstance().gameVersion = 1001;
                GameData.getInstance().resVersion = '1_3/';
                GameData.getInstance().MinigameResUrlRoot += "tt_res/";
                GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "tt_res_v_z_" + GameData.getInstance().resVersion;
                resUrl = GameData.getInstance().MinigameResAllUrl;
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
            }
            else if (DeviceUtil.isMZMiniGame()) {
                GameData.getInstance().gameVersion = 1001;
                GameData.getInstance().resVersion = '1_4/';
                GameData.getInstance().MinigameResUrlRoot += "mz_res/";
                GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "mz_res_v_z_" + GameData.getInstance().resVersion;
                resUrl = GameData.getInstance().MinigameResAllUrl;
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
            }
            else if (DeviceUtil.isQQMiniGame()) {
                GameData.getInstance().gameVersion = 1001;
                GameData.getInstance().resVersion = '1_3/';
                GameData.getInstance().MinigameResUrlRoot += "qq_res/";
                GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "qq_res_v_z_" + GameData.getInstance().resVersion;
                resUrl = GameData.getInstance().MinigameResAllUrl;
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
            }
            self.initDebug();
            self.loadPreLoadRes(resUrl + 'configs/');
        };
        Main.prototype.loadPreLoadRes = function (resUrl) {
            var url = resUrl;
            _super.prototype.initInfos.call(this, url + "infos.json" + ConfigManager.instance.randomVersion);
        };
        Main.prototype.enableFileConfig = function () {
            var _this = this;
            GameData.getInstance().initConfig(BaseConst.infos);
            if (DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                MiniManeger.instance.infos = BaseConst.infos["platformInfos"];
            }
            Laya.AtlasInfoManager.enable("fileconfig.json" + ConfigManager.instance.randomVersion, Laya.Handler.create(this, function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!DeviceUtil.isMiniGame()) return [3, 5];
                            if (!DeviceUtil.isWXMiniGame()) return [3, 2];
                            DYChannelMgr.instance.initConfig(BaseConst.infos["channelInfos"]);
                            return [4, DYChannelMgr.instance.loginGame()];
                        case 1:
                            _a.sent();
                            return [3, 4];
                        case 2: return [4, MiniManeger.instance.loginGame()];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            console.log("用户信息 : ", GameData.getInstance().userInfo);
                            this.loadRes();
                            return [3, 6];
                        case 5:
                            this.loadRes();
                            _a.label = 6;
                        case 6: return [2];
                    }
                });
            }); }));
        };
        Main.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var strogeVersion, openId, resUrl, resArr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            strogeVersion = Laya.LocalStorage.getItem('strogeVersion');
                            if (GameData.getInstance().strogeVersion != strogeVersion) {
                                Laya.LocalStorage.clear();
                            }
                            Laya.LocalStorage.setItem('strogeVersion', GameData.getInstance().strogeVersion);
                            if (!GameData.getInstance().userInfo.openId) {
                                openId = Laya.LocalStorage.getItem("openId");
                                if (openId) {
                                    GameData.getInstance().userInfo.openId = openId;
                                }
                                else {
                                    openId = "fire2" + Utils.getRandom(10000, 99999);
                                    GameData.getInstance().userInfo.openId = openId;
                                    Laya.LocalStorage.setItem("openId", openId);
                                }
                                if (!GameData.getInstance().userInfo.nick)
                                    GameData.getInstance().userInfo.nick = openId;
                            }
                            ViewMgr.instance.loadingView = new GameLoadingView();
                            SceneManager.getInstance().openSceneInstance(ViewMgr.instance.loadingView);
                            if (!DeviceUtil.isMZMiniGame()) {
                                MiniManeger.instance.showBannerAd(null);
                                MiniManeger.instance.hideBanner();
                            }
                            resUrl = "";
                            if (DeviceUtil.isMiniGame()) {
                                resUrl = GameData.getInstance().MinigameResAllUrl;
                            }
                            console.log("loadRes---", resUrl);
                            return [4, ResUtil.getIntance().loadThms(resUrl + "resource/default.thm.json" + ConfigManager.instance.randomVersion)];
                        case 1:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig(resUrl + "resource/default.res.json" + ConfigManager.instance.randomVersion)];
                        case 2:
                            _a.sent();
                            ViewMgr.instance.registerBufferLoading();
                            return [4, ConfigManager.instance.initConfigs()];
                        case 3:
                            _a.sent();
                            return [4, GameInfoManager.getInstance().selectAllGameInfo()];
                        case 4:
                            _a.sent();
                            return [4, GameMgr.instance.initData()];
                        case 5:
                            _a.sent();
                            if (GameData.getInstance().isTestVersion) {
                                GameData.getInstance().level = { "103": { passLv: 50, curLv: 50 } };
                            }
                            resArr = ["panel", "public"];
                            this.enterHome(resArr);
                            return [2];
                    }
                });
            });
        };
        Main.prototype.enterHome = function (resArr) {
            var _this = this;
            console.log("enterHome", Laya.stage.width, Laya.stage.height, Laya.Browser.width, Laya.Browser.height);
            resArr.push("home");
            ResUtil.getIntance().loadGroups(resArr, function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log("res load completed!!!");
                    ViewMgr.instance.loadingView.showAnimation();
                    return [2];
                });
            }); }, function (index, len) {
                ViewMgr.instance.loadingView.progress(index, len);
            });
        };
        return Main;
    }(BaseContent));
    new Main();

}());
