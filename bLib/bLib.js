(function () {
    'use strict';
    var extendStatics = function (d, b) {
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
        var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
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
    /**
     * 内容常量
     */
    var BaseConst = /** @class */ (function () {
        function BaseConst() {
        }
        return BaseConst;
    }());
    window.BaseConst = BaseConst;
    /**
     * 基础节点，
     */
    var BaseContent = /** @class */ (function () {
        /**
         *
         * @param data
         * width 宽
         * height高
         * exportSceneToJson 兼容微信不支持加载scene后缀场景，设置为true，则会把scene加载替换为json
         */
        function BaseContent(data) {
            this.initGame(data);
            this.initLayer();
        }
        /**
         * 初始debug
         *
         * @param url
         */
        BaseContent.prototype.initDebug = function (url) {
            if (url === void 0) { url = "configs/Debug.json"; }
            return __awaiter(this, void 0, void 0, function () {
                var debugInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ResUtil.getIntance().asyncLoadResByURL(url, 1)];
                        case 1:
                            debugInfo = _a.sent();
                            if (typeof (debugInfo) == "string") {
                                debugInfo = JSON.parse(debugInfo + "");
                            }
                            if (debugInfo) {
                                if (debugInfo.stat)
                                    Laya.Stat.show(0, 50);
                                if (debugInfo.debug || Laya.Utils.getQueryString("debug") == "true")
                                    Laya.enableDebugPanel();
                                if (debugInfo.physicsDebug && Laya["PhysicsDebugDraw"])
                                    Laya.PhysicsDebugDraw.enable();
                                Laya.alertGlobalError = debugInfo.alertGlobalError;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 初始化游戏
         * @param data
         * width 宽
         * height高
         * exportSceneToJson 兼容微信不支持加载scene后缀场景，设置为true，则会把scene加载替换为json
         */
        BaseContent.prototype.initGame = function (data) {
            if (window["Laya3D"])
                Laya3D.init(data.width, data.height);
            else
                Laya.init(data.width, data.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            //
            DeviceUtil.defaultSize = { w: data.width, h: data.height };
            DeviceUtil.autoStageScaleMode();
            //兼容微信不支持加载scene后缀场景
            Laya.URL.exportSceneToJson = data.exportSceneToJson;
        };
        /**
         * 初始化各个显示层级
         */
        BaseContent.prototype.initLayer = function () {
            var _root = Laya.stage;
            if (_root == null) {
                console.error("初始化未完成");
                return;
            }
            //初始化游戏层   
            var sceneGroup = new Laya.Box();
            sceneGroup.width = _root.width;
            sceneGroup.height = _root.height;
            _root.addChild(sceneGroup);
            sceneGroup.name = "sceneLayer";
            SceneManager.getInstance().sceneLayer = sceneGroup;
            //初始化游戏遮挡层   
            var sceneMaskGroup = new Laya.Box();
            sceneMaskGroup.width = _root.width;
            sceneMaskGroup.height = _root.height;
            _root.addChild(sceneMaskGroup);
            sceneMaskGroup.name = "sceneMaskGroup";
            SceneManager.getInstance().sceneMaskLayer = sceneMaskGroup;
            //初始化弹窗层   
            var popGroup = new Laya.Box();
            popGroup.mouseThrough = true;
            popGroup.width = _root.width;
            popGroup.height = _root.height;
            _root.addChild(popGroup);
            popGroup.name = "popLayer";
            ViewManager.getInstance().popLayer = popGroup;
            //初始化提示窗层  
            var bufferGroup = new Laya.Box();
            bufferGroup.mouseThrough = true;
            bufferGroup.width = _root.width;
            bufferGroup.height = _root.height;
            _root.addChild(bufferGroup);
            bufferGroup.name = "bufferGroup";
            BufferLoadingManger.getInstance().bufferGroup = bufferGroup;
            //初始化提示窗层  
            var tipGroup = new Laya.Box();
            tipGroup.mouseThrough = true;
            tipGroup.width = _root.width;
            tipGroup.height = _root.height;
            _root.addChild(tipGroup);
            tipGroup.name = "tipLayer";
            TipsManager.getInstance().tipLayer = tipGroup;
        };
        /**
         * 初始化 配置工具 后期会去enableFileConfig
         *
         * @param infosUrl infos.json资源地址
         */
        BaseContent.prototype.initInfos = function (infosUrl) {
            var self = this;
            console.log("加载infos.json--");
            Laya.loader.load(infosUrl, Laya.Handler.create(this, function (res) {
                console.log("infos.json = ", res);
                if (typeof (res) == "string") {
                    BaseConst.infos = JSON.parse(res);
                }
                else {
                    BaseConst.infos = res;
                }
                self.enableFileConfig();
            }));
        };
        /**
         *  启用文件配置
         *
         * 将在完成后加载资源loadRes
         * @param resUrl 资源地址前缀
         */
        BaseContent.prototype.loadFileConfig = function (resUrl) {
            var _this = this;
            Laya.AtlasInfoManager.enable(resUrl, Laya.Handler.create(this, function () {
                //阻碍检测
                if (!BaseConst.infos.isOpen) {
                    TipsManager.getInstance().showDefaultTips("游戏维护中！", false);
                    return;
                }
                /**
                 * 检测需要 有gameId platform versionCode
                 * gameId_platform_versionCode
                 */
                if (Md5.hashStr(BaseConst.infos.gameId + "_" + BaseConst.infos.platform + "_" + BaseConst.infos.versionCode) != BaseConst.infos.token) {
                    TipsManager.getInstance().showDefaultTips("游戏维护中！", false);
                    console.log("校验不通过---");
                    return;
                }
                _this.loadRes();
            }));
        };
        return BaseContent;
    }());
    window.BaseContent = BaseContent;
    /**
     * 一些固定的配置
     */
    var BaseInfosData = /** @class */ (function () {
        function BaseInfosData() {
        }
        return BaseInfosData;
    }());
    window.BaseInfosData = BaseInfosData;
    /**
     * 文本处理(模拟富文本)
     *
     */
    var BaseLabel = /** @class */ (function (_super) {
        __extends(BaseLabel, _super);
        function BaseLabel(data) {
            var _this = _super.call(this) || this;
            _this.desHeight = 0;
            _this.autoSize = true;
            _this.initView(data);
            return _this;
        }
        BaseLabel.prototype.initView = function (data) {
            var len = data.length;
            for (var i = 0; i < len; i++) {
                var xs = this.width;
                this.createLabel(data[i], xs, 0);
            }
            this.desHeight += this.height;
        };
        BaseLabel.prototype.createLabel = function (pro, xs, ys) {
            var label = new Laya.Label();
            label.dataSource = pro;
            this.addChild(label);
            label.x = xs;
            label.y = ys;
        };
        return BaseLabel;
    }(Laya.Box));
    window.BaseLabel = BaseLabel;
    /**
     * 弹窗的动画进入类型
     */
    var BasePopAnimationEnterType = /** @class */ (function () {
        function BasePopAnimationEnterType() {
        }
        /**
         * 缩放模式 由小到大
         */
        BasePopAnimationEnterType.SCALE_MODE = "SCALE_MODE";
        /**
         * 缩放模式 由大到小 透明度由 0 到 1
         */
        BasePopAnimationEnterType.SCALE_MODE_BACK = "SCALE_MODE_BACK";
        /**
         * 缩放模式 由大到小 scale 0-1.5 => 1.5-1
         */
        BasePopAnimationEnterType.SCALE_MODE_BACK_MORE = "SCALE_MODE_BACK_MORE";
        /**
         * 正常模式
         */
        BasePopAnimationEnterType.NOMORL_MODE = "NOMORL_MODE";
        return BasePopAnimationEnterType;
    }());
    window.BasePopAnimationEnterType = BasePopAnimationEnterType;
    /**
     * 抽象 基础UI--使用皮肤下 模拟egret的皮肤模式
     */
    var BaseSceneUISkin = /** @class */ (function (_super) {
        __extends(BaseSceneUISkin, _super);
        function BaseSceneUISkin(data) {
            var _this = _super.call(this) || this;
            /**
             * 切记注意是""
             */
            _this.className_key = "";
            /**
             * 是否创建完成
             */
            _this.isCreate = false;
            _this.viewData_ = data;
            //
            _this.on(Laya.Event.ADDED, _this, _this.onAddStage);
            _this.on(Laya.Event.REMOVED, _this, _this.onRemoved);
            return _this;
        }
        Object.defineProperty(BaseSceneUISkin.prototype, "skin", {
            /**
             * 皮肤路径
             */
            get: function () {
                return this.skin_;
            },
            /**
             * 皮肤路径
             */
            set: function (s) {
                this.skin_ = s;
                this.loadSkin();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 加载并设置皮肤
         */
        BaseSceneUISkin.prototype.loadSkin = function () {
            return __awaiter(this, void 0, void 0, function () {
                var json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            json = ResUtil.getIntance().thmsConfig.contents[this.skin_];
                            if (!json) return [3 /*break*/, 1];
                            json = JSON.parse(json);
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, ResUtil.getIntance().asyncLoadResByURL(this.skin_ + "?r=" + Math.random())];
                        case 2:
                            json = _a.sent();
                            if (typeof (json) == "string") {
                                json = JSON.parse(json);
                            }
                            _a.label = 3;
                        case 3:
                            // this.createView(json);
                            Laya.SceneUtils.createByData(this, json);
                            this.adaptationStage();
                            //
                            if (!this.isCreate) {
                                this.isCreate = true;
                                this.childrenCreated();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 适配舞台，将此视图对象适配到舞台尺寸
         */
        BaseSceneUISkin.prototype.adaptationStage = function () {
            //视图扩大到整个屏幕
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
        };
        /**
         * 添加到父节点
         */
        BaseSceneUISkin.prototype.onAddStage = function () { };
        /**
         * 当从父节点移除时候
         */
        BaseSceneUISkin.prototype.onRemoved = function () { };
        /**
         * 初始化数据
         * data   界面数据
         */
        BaseSceneUISkin.prototype.setData = function (data) {
            this.viewData_ = data;
        };
        /**
         * 初始化节点创建完成 使用皮肤配置时候调用
         */
        BaseSceneUISkin.prototype.childrenCreated = function () { };
        /**
         * 销毁时执行
         * 此方法为虚方法，使用时重写覆盖即可
         */
        BaseSceneUISkin.prototype.onDestroy = function () {
            _super.prototype.onDestroy.call(this);
            this.offAll();
        };
        return BaseSceneUISkin;
    }(Laya.Scene));
    window.BaseSceneUISkin = BaseSceneUISkin;
    /**
     * 弹窗 抽象 基础UI--使用皮肤下 模拟egret的皮肤模式
     */
    var BaseSceneUISkinPopView = /** @class */ (function (_super) {
        __extends(BaseSceneUISkinPopView, _super);
        function BaseSceneUISkinPopView(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "BaseSceneUISkinPopView";
            /**
             * 背景图片资源名
             */
            _this.bg_img_res = "game_panel_db_png";
            return _this;
        }
        /**
         * 初始化节点创建完成 使用皮肤配置时候调用
         */
        BaseSceneUISkinPopView.prototype.childrenCreated = function () {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            if (this.bg_img_res && !this.bg_img) {
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.addChildAt(this.bg_img, 0);
            }
            // this.showEnterAnimation();
            this.showBackType = this.showEnterType;
        };
        /**
         * 添加到父节点
         */
        BaseSceneUISkinPopView.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.showEnterAnimation();
            }
        };
        /**
         * 进入方式
         */
        BaseSceneUISkinPopView.prototype.showEnterAnimation = function () {
            // console.log("BasePopScene showEnterAnimation");
            if (this.grp_center) {
                this.grp_center.centerX = this.grp_center.centerY = 0;
                switch (this.showEnterType) {
                    case BasePopAnimationEnterType.SCALE_MODE:
                        this.grp_center.scale(0, 0);
                        Laya.Tween.to(this.grp_center, { scaleX: 1, scaleY: 1 }, BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                        break;
                    case BasePopAnimationEnterType.SCALE_MODE_BACK:
                        this.grp_center.scale(1.5, 1.5);
                        this.grp_center.alpha = 0;
                        Laya.Tween.to(this.grp_center, { scaleX: 1, scaleY: 1, alpha: 1 }, BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                        break;
                    case BasePopAnimationEnterType.SCALE_MODE_BACK_MORE:
                        this.grp_center.scale(0.5, 0.5);
                        Laya.Tween.to(this.grp_center, { scaleX: 1, scaleY: 1 }, BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backOut);
                        break;
                    default: break;
                }
            }
        };
        /**
         * 退出方式
         */
        BaseSceneUISkinPopView.prototype.showOutAnimation = function () {
            // console.log("BasePopScene showEnterAnimation");
            if (this.grp_center) {
                this.grp_center.centerX = this.grp_center.centerY = 0;
                switch (this.showBackType) {
                    case BasePopAnimationEnterType.SCALE_MODE:
                        Laya.Tween.to(this.grp_center, { scaleX: 0, scaleY: 0 }, BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                        break;
                    case BasePopAnimationEnterType.SCALE_MODE_BACK:
                        Laya.Tween.to(this.grp_center, { scaleX: 1.5, scaleY: 1.5, alpha: 0 }, BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                        break;
                    case BasePopAnimationEnterType.SCALE_MODE_BACK_MORE:
                        Laya.Tween.to(this.grp_center, { scaleX: 0.5, scaleY: 0.5 }, BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backIn);
                        break;
                    default: break;
                }
            }
        };
        /**
         * 移除自己
         */
        BaseSceneUISkinPopView.prototype.removeUs = function () {
            this.showOutAnimation();
            Laya.timer.once(BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, this, _super.prototype.removeSelf);
            // super.removeSelf();
        };
        /**
         * 销毁时执行
         * 此方法为虚方法，使用时重写覆盖即可
         */
        BaseSceneUISkinPopView.prototype.onDestroy = function () {
            if (ViewManager.getInstance().views["" + this.className_key]) {
                ViewManager.getInstance().views["" + this.className_key] = null;
            }
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
            this.off(Laya.Event.ADDED, this, this.onAddStage);
            _super.prototype.onDestroy.call(this);
            this.offAll();
        };
        ;
        /**
         * 默认的显示进入和消失时间
         *
         * 200ms
         */
        BaseSceneUISkinPopView.defaultSshowEnterBackAniTime = 200;
        return BaseSceneUISkinPopView;
    }(BaseSceneUISkin));
    window.BaseSceneUISkinPopView = BaseSceneUISkinPopView;
    /**
     * 提示效果
     */
    var BaseTips = /** @class */ (function (_super) {
        __extends(BaseTips, _super);
        function BaseTips() {
            var _this = _super.call(this) || this;
            /**
             * 类键名
             */
            _this.className_key = "BaseTips";
            return _this;
        }
        BaseTips.prototype.init = function (text, fontSize) {
            if (fontSize === void 0) { fontSize = 34; }
            var self = this;
            self.alpha = 1;
            if (self.bg_msg == null) {
                self.bg_msg = new Laya.Image();
                self.bg_msg.anchorX = self.bg_msg.anchorY = 0.5;
                // self.bg_msg.pivotX = self.bg_msg.width / 2;
                // self.bg_msg.pivotY = self.bg_msg.height / 2;
                self.bg_msg.skin = BaseTips.bg_msg_skin;
                self.addChild(self.bg_msg);
            }
            if (self.txt_msg == null) {
                self.txt_msg = new Laya.Text();
                self.txt_msg.color = "#ffffff";
                self.txt_msg.align = "center";
                self.txt_msg.valign = "middle";
                self.addChild(self.txt_msg);
            }
            self.txt_msg.fontSize = fontSize;
            self.txt_msg.text = text;
            self.x = (Laya.stage.width - self.txt_msg.width) / 2;
            self.y = (Laya.stage.height - self.txt_msg.height) / 2;
            self.bg_msg.x = self.txt_msg.width / 2;
            self.bg_msg.y = self.txt_msg.height / 2;
        };
        /**
         * 显示动画
         */
        BaseTips.prototype.showAnimation = function () {
            var _this = this;
            EffectUtil.flowOut(this, 2000, null, function () {
                _this.removeSelf();
            }, 500);
        };
        /**
         * 移除
         */
        BaseTips.prototype.removeSelf = function () {
            _super.prototype.removeSelf.call(this);
            Laya.Pool.recover(this.className_key, this);
        };
        /**
         * 当销毁时候
         */
        BaseTips.prototype.onDestroy = function () {
            Laya.Tween.clearAll(this);
        };
        /**
         * 默认的tips的背景资源
         *
         * default skin =  "resource/assets/base/tips_mengban.png"
         */
        BaseTips.bg_msg_skin = "resource/assets/base/tips_mengban.png";
        return BaseTips;
    }(Laya.Sprite));
    window.BaseTips = BaseTips;
    /**
     * 抽象 基础UI--使用皮肤下 模拟egret的皮肤模式
     *
     * 自定义提示内容
     */
    var BaseTipsUISkin = /** @class */ (function (_super) {
        __extends(BaseTipsUISkin, _super);
        function BaseTipsUISkin() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 显示动画
         *
         * 默认向上移动淡出（弹出框）
         */
        BaseTipsUISkin.prototype.showAnimation = function () {
            var _this = this;
            EffectUtil.flowOut(this, 2000, null, function () {
                _this.removeSelf();
            }, 500);
        };
        /**
         * 移除
         */
        BaseTipsUISkin.prototype.removeSelf = function () {
            _super.prototype.removeSelf.call(this);
            Laya.Pool.recover(this.className_key, this);
        };
        return BaseTipsUISkin;
    }(BaseSceneUISkin));
    window.BaseTipsUISkin = BaseTipsUISkin;
    /**
     * 位图字 工具
     */
    var BitmapLabelUtils = /** @class */ (function () {
        function BitmapLabelUtils() {
        }
        /**
         * 设置文本显示
         */
        BitmapLabelUtils.setLabel = function (label, text, prefix, gap, suffix, textAlgin) {
            if (suffix === void 0) { suffix = ".png"; }
            if (textAlgin === void 0) { textAlgin = "left"; }
            label.removeChildren();
            // let chars:string[] = text;
            var box = new Laya.Box();
            if (textAlgin == "center") {
                box = new Laya.Box();
                box.width = 0;
                label.addChild(box);
            }
            var _loop_1 = function (i, len) {
                var char = text.charAt(i);
                var imgChar = new Laya.Image();
                Laya.loader.load(prefix + char + suffix, Laya.Handler.create(null, function (tex) {
                    if (!tex) {
                        return;
                    }
                    imgChar.texture = tex;
                    if (textAlgin == "left") {
                        imgChar.x = (imgChar.texture.sourceWidth + gap) * i;
                        label.addChild(imgChar);
                    }
                    else if (textAlgin == "right") {
                        imgChar.x = label.width - (imgChar.texture.sourceWidth + gap) * (len) + (imgChar.texture.sourceWidth + gap) * i;
                        label.addChild(imgChar);
                    }
                    else {
                        imgChar.x = (imgChar.texture.sourceWidth + gap) * i;
                        if (box) {
                            box.addChild(imgChar);
                            box.width += (imgChar.texture.sourceWidth + gap);
                        }
                        if (i == len - 1) {
                            box.x = (label.width - box.width) / 2 + gap / 2;
                        }
                    }
                }));
            };
            for (var i = 0, len = text.length; i < len; i++) {
                _loop_1(i, len);
            }
        };
        return BitmapLabelUtils;
    }());
    window.BitmapLabelUtils = BitmapLabelUtils;
    /**
     * 自定义跟踪飞行组件
     *
     * 当到达目标附近回调方法 toTargetCall() 组件自动销毁
     */
    var CustomFlyComponent = /** @class */ (function (_super) {
        __extends(CustomFlyComponent, _super);
        function CustomFlyComponent() {
            var _this = _super.call(this) || this;
            /**
             * 飞行速度
             */
            _this.speed = 10;
            return _this;
        }
        CustomFlyComponent.prototype.onAwake = function () {
            this.content = this.owner;
        };
        CustomFlyComponent.prototype.onUpdate = function () {
            if (this.content && this.target) {
                var spx = this.target.x - this.content.x;
                var spy = this.target.y - this.content.y;
                var len = Math.sqrt(spx * spx + spy * spy); //开根号待优化
                if (len <= this.speed) {
                    //距离附近不足移动
                    this.content.y = this.target.y;
                    this.content.x = this.target.x;
                    this.enabled = false; //禁用
                    if (this.toTargetCall) {
                        this.toTargetCall(this.callObj);
                    }
                    return;
                }
                this.content.y += spy / len * this.speed;
                this.content.x += spx / len * this.speed;
            }
        };
        /**回调函数 传入回调对象 */
        CustomFlyComponent.prototype.toTargetCall = function (obj) {
        };
        return CustomFlyComponent;
    }(Laya.Script));
    window.CustomFlyComponent = CustomFlyComponent;
    /**
     * 带缩放效果 组件
     */
    var CustomScaleComponent = /** @class */ (function (_super) {
        __extends(CustomScaleComponent, _super);
        function CustomScaleComponent() {
            var _this = _super.call(this) || this;
            _this.scale_ = 0.95;
            _this.defaultScale_ = 1;
            _this.isInit = false;
            return _this;
            // console.log("CustomScaleComponent constructor");
        }
        CustomScaleComponent.prototype.onAwake = function () {
            // console.log("CustomScaleComponent onAwake");
            this.init();
        };
        CustomScaleComponent.prototype._onAdded = function () {
            // console.log("CustomScaleComponent _onAdded");
            this.init();
            this.addEvent();
        };
        CustomScaleComponent.prototype.onEnable = function () {
            // console.log("CustomScaleComponent onEnable");
            this.addEvent();
        };
        CustomScaleComponent.prototype._onDisable = function () {
        };
        /**
         * 初始化设定
         */
        CustomScaleComponent.prototype.init = function () {
            if (this.isInit) {
                return;
            }
            this.isInit = true;
            // console.log("CustomScaleComponent init");
            this.content = this.owner;
            this.content.scale(this.defaultScale_, this.defaultScale_);
            this.content.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        /**
         * 当移除舞台时候
         */
        CustomScaleComponent.prototype.onRemoved = function () {
            this.removeEvent();
        };
        /**
         * 添加事件
         */
        CustomScaleComponent.prototype.addEvent = function () {
            this.content.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.content.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        /**
         * 移除事件
         */
        CustomScaleComponent.prototype.removeEvent = function () {
            this.content.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        /**
         * 点下
         */
        CustomScaleComponent.prototype.mouseDown = function () {
            this.content.on(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            this.content.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.scale(this.defaultScale_, this.defaultScale_);
            Laya.Tween.to(this.content, { scaleX: this.scale_, scaleY: this.scale_ }, 80, Laya.Ease.backIn);
        };
        /**
         * 移开
         */
        CustomScaleComponent.prototype.mouseOut = function () {
            this.content.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            // this.scale(this.defaultScale_, this.defaultScale_);
            this.content.scale(this.scale_, this.scale_);
            Laya.Tween.to(this.content, { scaleX: this.defaultScale_, scaleY: this.defaultScale_ }, 100, Laya.Ease.backOut);
        };
        /**
         * 松开
         */
        CustomScaleComponent.prototype.mouseUp = function () {
            this.content.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            // this.scale(this.defaultScale_, this.defaultScale_);
            this.content.scale(this.scale_, this.scale_);
            Laya.Tween.to(this.content, { scaleX: this.defaultScale_, scaleY: this.defaultScale_ }, 100, Laya.Ease.backOut);
        };
        /**
         * 当销毁组件时候
         */
        CustomScaleComponent.prototype.onDestroy = function () {
            _super.prototype.onDestroy.call(this);
            this.removeEvent();
        };
        return CustomScaleComponent;
    }(Laya.Script));
    window.CustomScaleComponent = CustomScaleComponent;
    /**
     * 百页窗口模式
     *
     * 目前默认 500 毫秒时间
     */
    var HundredPagesWindowView = /** @class */ (function (_super) {
        __extends(HundredPagesWindowView, _super);
        function HundredPagesWindowView() {
            var _this = _super.call(this) || this;
            /**
             * 动画时间
             */
            _this.animationTime = 500;
            /**
             * 百页高度
             */
            _this.rectH = 300;
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            //
            _this.initView();
            return _this;
        }
        /**
         * 初始化
         */
        HundredPagesWindowView.prototype.initView = function () {
            var w = Laya.stage.width + this.rectH;
            w *= 1.5;
            var h = this.rectH;
            this.len = Laya.stage.height / h + 2;
            this.len *= 1.5;
            this.len = Math.floor(this.len) + 1;
            var x = -this.rectH / 2;
            var starty = -Laya.stage.width * 1.5;
            //
            for (var i = 0; i < this.len; i++) {
                var rect = new Laya.Sprite();
                rect.graphics.drawRect(0, 0, w, h, "#000000");
                rect.width = w, rect.height = h;
                rect.pivotY = h / 2;
                rect.rotation = 45;
                rect.scaleY = 0;
                rect.x = x;
                rect.y = h * i + starty;
                this.addChild(rect);
            }
        };
        /**
         * 开启
         * @param caller
         * @param method
         */
        HundredPagesWindowView.prototype.open = function (caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, { scaleY: 1 }, this.animationTime, Laya.Ease.sineIn, Laya.Handler.create(caller, method));
                }
                else {
                    Laya.Tween.to(item, { scaleY: 1 }, this.animationTime, Laya.Ease.sineIn);
                }
            }
        };
        /**
         * 关闭
         * @param caller
         * @param method
         */
        HundredPagesWindowView.prototype.close = function (caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, { scaleY: 0 }, this.animationTime, Laya.Ease.sineOut, Laya.Handler.create(caller, method));
                }
                else {
                    Laya.Tween.to(item, { scaleY: 0 }, this.animationTime, Laya.Ease.sineOut);
                }
            }
        };
        return HundredPagesWindowView;
    }(Laya.Sprite));
    window.HundredPagesWindowView = HundredPagesWindowView;
    /**
     * lodingView 的接口
     */
    var ILoadingView = /** @class */ (function (_super) {
        __extends(ILoadingView, _super);
        function ILoadingView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ILoadingView;
    }(Laya.Node));
    window.ILoadingView = ILoadingView;
    /**
     * buffer页面loading管理工具
     */
    var BufferLoadingManger = /** @class */ (function () {
        function BufferLoadingManger() {
            this.buffers = {};
        }
        BufferLoadingManger.getInstance = function () {
            if (BufferLoadingManger.ins == null) {
                BufferLoadingManger.ins = new BufferLoadingManger();
            }
            return BufferLoadingManger.ins;
        };
        /**
         * 注册某个buffer页面
         *
         * @param key
         * @param bufferLoading
         */
        BufferLoadingManger.prototype.registerOneBuffer = function (key, bufferLoading) {
            this.buffers[key] = bufferLoading;
        };
        /**
         * 显示某个buffer页面
         *
         * 回调 buffer.onShow();
         * @param key defualt  BufferLoading
         */
        BufferLoadingManger.prototype.showBuffer = function (key, info) {
            if (key === void 0) { key = "BufferLoading"; }
            if (info === void 0) { info = ""; }
            var currbuffer = this.buffers[key];
            if (currbuffer && !currbuffer.parent) {
                this.bufferGroup.addChild(currbuffer);
                if (currbuffer.onShow) {
                    currbuffer.onShow();
                }
            }
            if (currbuffer) {
                currbuffer.setLabelInfo(info);
            }
            this.bufferGroup.mouseEnabled = true;
        };
        /**
         * 隐藏某个buffer页面
         *
         * 回调 buffer.onHidd();
         * @param key defualt  BufferLoading
         */
        BufferLoadingManger.prototype.hiddBuffer = function (key) {
            if (key === void 0) { key = "BufferLoading"; }
            var currbuffer = this.buffers[key];
            if (currbuffer.parent) {
                this.bufferGroup.removeChild(currbuffer);
                if (currbuffer.onHidd) {
                    currbuffer.onHidd();
                }
            }
            this.bufferGroup.mouseEnabled = false;
        };
        /**
         * 销毁某个buffer页面
         *
         * 回调 buffer.onDestroy();
         * @param key
         */
        BufferLoadingManger.prototype.destroyBuffer = function (key) {
            var currbuffer = this.buffers[key];
            if (currbuffer.parent) {
                this.bufferGroup.removeChild(currbuffer);
                if (currbuffer.onDestroy) {
                    currbuffer.onDestroy();
                }
                this.buffers[key] = null;
            }
        };
        return BufferLoadingManger;
    }());
    window["BufferLoadingManger"] = BufferLoadingManger;
    /**
     * 场景管理器
     */
    var SceneManager = /** @class */ (function () {
        function SceneManager() {
        }
        SceneManager.getInstance = function () {
            if (this.ins == null) {
                this.ins = new SceneManager();
            }
            return this.ins;
        };
        /**
         * 增加游戏场景
         */
        SceneManager.prototype.openGameScene = function (className, viewData) {
            var _this = this;
            var classKey = ClassUtils.getClassKey(className);
            var clazz = Laya.Pool.getItemByClass(classKey, className); // ObjectPool.instance.createObjectByName(className, data);
            clazz.name = className.name;
            //数据操作
            if (clazz.setData) {
                clazz.setData(viewData);
            }
            this.sceneLayer.addChild(clazz);
            this.lastScene = this.currentScene;
            this.currentScene = clazz;
            Laya.timer.once(100, this, function () {
                if (_this.lastScene && !_this.lastScene.destroyed) {
                    _this.recoverBaseScene(_this.lastScene);
                }
            });
            return clazz;
        };
        /**
         * 获取一个场景实列
         *
         * @param name
         */
        SceneManager.prototype.getGameSceneByName = function (name) {
            var clazz = this.sceneLayer.getChildByName(name);
            return clazz;
        };
        /**
         * 打开一个场景
         *
         * @param scene
         */
        SceneManager.prototype.openSceneInstance = function (scene) {
            var _this = this;
            this.lastScene = this.currentScene;
            this.currentScene = scene;
            this.sceneLayer.addChild(scene);
            Laya.timer.once(100, this, function () {
                if (_this.lastScene && !_this.lastScene.destroyed) {
                    _this.recoverBaseScene(_this.lastScene);
                }
            });
        };
        /**
         * 回收场景
         *
         * @param scene
         */
        SceneManager.prototype.recoverBaseScene = function (scene) {
            scene.removeSelf();
            if (scene.className_key) {
                Laya.Pool.recover(scene.className_key, scene);
            }
        };
        return SceneManager;
    }());
    window["SceneManager"] = SceneManager;
    /**
     * 提示管理工具
     */
    var TipsManager = /** @class */ (function () {
        function TipsManager() {
            /**
             * 显示默认提示的字体大小
             */
            this.showDefualtTipsFontSize = 34;
        }
        TipsManager.getInstance = function () {
            if (TipsManager.ins == null) {
                TipsManager.ins = new TipsManager();
            }
            return TipsManager.ins;
        };
        /**
         * 显示一个提示
         *
         * @param text
         * @param isShowAnimation 是否显示动画
         */
        TipsManager.prototype.showDefaultTips = function (text, isShowAnimation) {
            if (isShowAnimation === void 0) { isShowAnimation = true; }
            var tip = Laya.Pool.getItemByClass("BaseTips", BaseTips);
            tip.init(text, this.showDefualtTipsFontSize);
            if (isShowAnimation) {
                tip.showAnimation();
            }
            this.tipLayer.addChild(tip);
        };
        /**
         * 显示一个自定义的提示
         *
         * @param class 自定义提示构造类名
         * @param text 提示内容
         *
         */
        TipsManager.prototype.showTips = function (className, text) {
            var classKey = className.toString(); // + "";
            classKey = (classKey.split("className_key=\"")[1]) == null ? (classKey.split("className_key = \"")[1]) : (classKey.split("className_key=\"")[1]);
            classKey = classKey.split("\"")[0]; //以上兼容发布
            var result = Laya.Pool.getItemByClass(classKey, className);
            result.init(text);
            this.tipLayer.addChild(result);
        };
        /**
         * 显示一个提示
         *
         * @param data
         */
        TipsManager.prototype.showTipInstance = function (object) {
            this.tipLayer.addChild(object);
        };
        /**
         * 移除一个提示实列
         *
         * @param object
         */
        TipsManager.prototype.removeTips = function (object) {
            object.removeSelf();
        };
        return TipsManager;
    }());
    window["TipsManager"] = TipsManager;
    /**
     * 视图弹窗管理工具
     */
    var ViewManager = /** @class */ (function () {
        function ViewManager() {
            this._views = {};
        }
        ViewManager.getInstance = function () {
            if (ViewManager.ins == null) {
                ViewManager.ins = new ViewManager();
            }
            return ViewManager.ins;
        };
        Object.defineProperty(ViewManager.prototype, "views", {
            /**
             * 所有的唯一弹窗显示总体
             */
            get: function () {
                return this._views;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 显示一个界面弹窗
         *
         * @param className 类名
         * @param data 数据源
         * @param only  是否唯一显示弹框
         */
        ViewManager.prototype.showView = function (className, data, only) {
            if (only === void 0) { only = true; }
            var panelKey = ClassUtils.getClassKey(className);
            var result = this._views["" + panelKey];
            if (only && result) {
                this.popLayer.addChild(result);
                result.setData(data);
                return result;
            }
            var clazz = Laya.ClassUtils.getRegClass(panelKey);
            if (clazz == null) {
                Laya.ClassUtils.regClass(panelKey, className);
                clazz = Laya.ClassUtils.getRegClass(panelKey);
            }
            result = new clazz(data);
            result.name = panelKey;
            if (only) {
                this._views["" + panelKey] = result;
            }
            this.popLayer.addChild(result);
            return result;
        };
        /**
         * 移除一个弹窗
         *
         * @param instance
         */
        ViewManager.prototype.removeViewInstance = function (instance) {
            var panelKey = instance.name;
            var result = this._views["" + panelKey];
            if (result) {
                result.removeSelf();
            }
        };
        /**
         * 检测弹窗是否显示
         *
         * @param name
         */
        ViewManager.prototype.popViewIsPop = function (name) {
            if (this.popLayer.getChildByName(name) != null) {
                return true;
            }
            return false;
        };
        /**
         * 显示弹窗实例
         */
        ViewManager.prototype.showViewInstance = function (pop) {
            this._views["" + pop.className_key] = pop;
            this.popLayer.addChild(pop);
        };
        /**
         * 销毁所有显示弹窗
         */
        ViewManager.prototype.destoryAllPopViews = function () {
            for (var key in this._views) {
                var panel = this._views["" + key];
                this.destroyPopView(panel);
            }
        };
        /**
         * 销毁一个弹窗
         *
         * @param panel 弹窗对象
         */
        ViewManager.prototype.destroyPopView = function (panel) {
            panel.destroy();
        };
        /**
         * 移除所有显示弹窗
         */
        ViewManager.prototype.closeAllPopViews = function () {
            var popLayer = this.popLayer;
            var len = popLayer.numChildren;
            for (var i = 0; i < len; i++) {
                var panel = popLayer.getChildAt(i);
                panel && panel.removeUs();
            }
        };
        /**
         * 是否已经存在View
         *
         * @param {any} viewKey 唯一标识
         * @return {boolean}
         */
        ViewManager.prototype.isExists = function (viewKey) {
            return !!this._views[viewKey];
        };
        return ViewManager;
    }());
    window["ViewManager"] = ViewManager;
    /**
     * http 管理网络工具
     */
    var HttpMgr = /** @class */ (function () {
        function HttpMgr() {
            /**
             * 是否打印日志
             */
            this.printLog = true;
            /**
             * 默认超时限制
             */
            this.defaultTimeOut = 5000;
        }
        HttpMgr.getInstance = function () {
            if (!HttpMgr.instance_) {
                HttpMgr.instance_ = new HttpMgr();
            }
            return HttpMgr.instance_;
        };
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
        HttpMgr.prototype.sendHttp = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            if (responseType === void 0) { responseType = "text"; }
            if (type == "get" && data) {
                url += Utils.querStr(data);
            }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest); //对象池处理
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log("ontimeout");
                ///////////////处理超时的情况  注意移除相关监听
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest); //对象池处理
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                // if (this.printLog) {
                //     let date: Date = new Date();
                //     console.log("HTTP Rev :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    rev data: " + rev);
                // }
                if (secces) {
                    // rev = rev >> 1;
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest); //对象池处理
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest); //对象池处理
            });
            if (type == "get") {
                httpRequest.send(url);
                return;
            }
            httpRequest.send(url, data ? jsonStr : null, "post", "text");
        };
        return HttpMgr;
    }());
    window.HttpMgr = HttpMgr;
    /**
     * websocket管理工具
     */
    var WebSocketMgr = /** @class */ (function () {
        function WebSocketMgr() {
            /**
             * 链接间隔时间
             * 默认 2000毫秒
             */
            this.connetWaitTime = 2000;
            /**
             * 心跳间隔时间
             * 默认 10000毫秒
             */
            this.heartbeatWaitTime = 10000;
            /**
             * 断线链接次数
             * 默认 5次
             */
            this.connetTime = 5;
            /**当前链接次数 */
            this.currentConnectTime = 0;
            /**是否存活 */
            this.isLive = false;
        }
        WebSocketMgr.getInstance = function () {
            if (!WebSocketMgr.instance_) {
                WebSocketMgr.instance_ = new WebSocketMgr();
            }
            return WebSocketMgr.instance_;
        };
        /**
         * 初始化
         */
        WebSocketMgr.prototype.init = function () {
            this.socket_ = new Laya.Socket();
            this.addEvent();
        };
        /**
         * 增加监听
         */
        WebSocketMgr.prototype.addEvent = function () {
            this.socket_.on(Laya.Event.OPEN, this, this.socketOpen);
            this.socket_.on(Laya.Event.MESSAGE, this, this.socketMessage);
            this.socket_.on(Laya.Event.CLOSE, this, this.socketClose);
            this.socket_.on(Laya.Event.ERROR, this, this.socketError);
        };
        /**
         * 移除监听
         */
        WebSocketMgr.prototype.removeEvent = function () {
            this.socket_.off(Laya.Event.OPEN, this, this.socketOpen);
            this.socket_.off(Laya.Event.MESSAGE, this, this.socketMessage);
            this.socket_.off(Laya.Event.CLOSE, this, this.socketClose);
            this.socket_.off(Laya.Event.ERROR, this, this.socketError);
        };
        /**
         * 链接
         */
        WebSocketMgr.prototype.connect = function () {
            console.log("链接网络-websocket--");
            this.socket_.connectByUrl(this.url_);
        };
        /**
         * 通讯打开
         */
        WebSocketMgr.prototype.socketOpen = function () {
            console.log("通讯打开-websocket--");
            this.isLive = true;
            if (this.onOpen) {
                this.onOpen();
            }
            this.stopRefuseConnect();
            this.starHeartbeat();
        };
        /**
         * 开始心跳
         */
        WebSocketMgr.prototype.starHeartbeat = function () {
            if (this.isLive) {
                if (this.send(this.heartbeatData)) {
                    this.isLive = false;
                    Laya.timer.once(this.heartbeatWaitTime, this, this.starHeartbeat);
                }
            }
            else {
                this.socket_.close();
            }
        };
        /**
         * 关闭通讯
         */
        WebSocketMgr.prototype.close = function () {
            if (!this.socket_) {
                console.log("sokect is closed");
                return;
            }
            this.removeEvent();
            this.stopRefuseConnect();
            this.stopHeartbeat();
            this.socket_.close();
            this.socket_ = null;
        };
        /**
         * 停止心跳
         */
        WebSocketMgr.prototype.stopHeartbeat = function () {
            Laya.timer.clearAll(this);
        };
        /**
         * 开始重连
         */
        WebSocketMgr.prototype.startRefuseConnect = function () {
            if (this.currentConnectTime >= this.connetTime) {
                console.log("重连次数达到...");
                return;
            }
            this.currentConnectTime++;
            Laya.timer.once(this.connetWaitTime, this, this.connect);
        };
        /**
         * 停止重连
         */
        WebSocketMgr.prototype.stopRefuseConnect = function () {
            this.currentConnectTime = 0;
            Laya.timer.clearAll(this);
        };
        /**
         * 通讯关闭
         */
        WebSocketMgr.prototype.socketClose = function (e) {
            console.error(e);
            if (this.onClose) {
                this.onClose();
            }
            this.stopHeartbeat();
            this.startRefuseConnect();
        };
        /**
         * 通讯异常
         */
        WebSocketMgr.prototype.socketError = function (e) {
            console.error(e);
        };
        /**
         * 将utf8 bytearray 转字符串 unicode
         * @param utf8Bytes
         */
        WebSocketMgr.prototype.utf8ByteToUnicodeStr = function (utf8Bytes) {
            var unicodeStr = "";
            for (var pos = 0; pos < utf8Bytes.length;) {
                var flag = utf8Bytes[pos];
                var unicode = 0;
                if ((flag >>> 7) === 0) {
                    unicodeStr += String.fromCharCode(utf8Bytes[pos]);
                    pos += 1;
                }
                else if ((flag & 0xFC) === 0xFC) {
                    unicode = (utf8Bytes[pos] & 0x3) << 30;
                    unicode |= (utf8Bytes[pos + 1] & 0x3F) << 24;
                    unicode |= (utf8Bytes[pos + 2] & 0x3F) << 18;
                    unicode |= (utf8Bytes[pos + 3] & 0x3F) << 12;
                    unicode |= (utf8Bytes[pos + 4] & 0x3F) << 6;
                    unicode |= (utf8Bytes[pos + 5] & 0x3F);
                    // unicodeStr += String.fromCodePoint(unicode);
                    pos += 6;
                }
                else if ((flag & 0xF8) === 0xF8) {
                    unicode = (utf8Bytes[pos] & 0x7) << 24;
                    unicode |= (utf8Bytes[pos + 1] & 0x3F) << 18;
                    unicode |= (utf8Bytes[pos + 2] & 0x3F) << 12;
                    unicode |= (utf8Bytes[pos + 3] & 0x3F) << 6;
                    unicode |= (utf8Bytes[pos + 4] & 0x3F);
                    // unicodeStr += String.fromCodePoint(unicode);
                    pos += 5;
                }
                else if ((flag & 0xF0) === 0xF0) {
                    unicode = (utf8Bytes[pos] & 0xF) << 18;
                    unicode |= (utf8Bytes[pos + 1] & 0x3F) << 12;
                    unicode |= (utf8Bytes[pos + 2] & 0x3F) << 6;
                    unicode |= (utf8Bytes[pos + 3] & 0x3F);
                    // unicodeStr += String.fromCodePoint(unicode);
                    pos += 4;
                }
                else if ((flag & 0xE0) === 0xE0) {
                    unicode = (utf8Bytes[pos] & 0x1F) << 12;
                    ;
                    unicode |= (utf8Bytes[pos + 1] & 0x3F) << 6;
                    unicode |= (utf8Bytes[pos + 2] & 0x3F);
                    unicodeStr += String.fromCharCode(unicode);
                    pos += 3;
                }
                else if ((flag & 0xC0) === 0xC0) { //110
                    unicode = (utf8Bytes[pos] & 0x3F) << 6;
                    unicode |= (utf8Bytes[pos + 1] & 0x3F);
                    unicodeStr += String.fromCharCode(unicode);
                    pos += 2;
                }
                else {
                    unicodeStr += String.fromCharCode(utf8Bytes[pos]);
                    pos += 1;
                }
            }
            return unicodeStr;
        };
        /**
         * 当消息来时候
         * @param data
         */
        WebSocketMgr.prototype.socketMessage = function (data) {
            //
            // let datastr = "", chunk = 8 * 1024, i;
            // for (i = 0; i < data.byteLength / chunk; i++) {
            //     datastr += String.fromCharCode.apply(null, new Uint8Array(data.slice(i * chunk, (i + 1) * chunk)));
            // }
            // datastr += String.fromCharCode.apply(null, new Uint8Array(data.slice(i * chunk)));
            // console.log(datastr);
            var datastr = this.utf8ByteToUnicodeStr(new Uint8Array(data.slice(0, data.byteLength)));
            // console.log(datastr);
            var dataObj = JSON.parse(datastr);
            if (DeviceUtil.isNative()) { //native 上直接打印消息内容
                console.log("socket rev : " + datastr);
            }
            else {
                console.log("socket rev : ", dataObj);
            }
            if (dataObj.msg_type == "63") {
                this.isLive = true;
                //心跳消息
                return;
            }
            if (this.onMessage) {
                this.onMessage(dataObj);
            }
        };
        /**
         * 发送消息
         * @param data
         */
        WebSocketMgr.prototype.send = function (data) {
            if (!this.socket_ || !this.socket_.connected) {
                console.warn("socket closed");
                return false;
            }
            this.socket_.send(data);
            this.socket_.flush();
            return true;
        };
        return WebSocketMgr;
    }());
    window.WebSocketMgr = WebSocketMgr;
    /**
     * 适配 尺寸 工具
     */
    var AdaptationUtil = /** @class */ (function () {
        function AdaptationUtil() {
        }
        /**
         * 适配某个物体在父节点
         *
         * 能全部放入显示 会有黑边
         *
         * @param obj 需要适配的对象
         * @param parent 适配对象父级
         * @param scaleFormat 适配比例 默认1
         */
        AdaptationUtil.adaptationObj = function (obj, parent, scaleFormat) {
            if (scaleFormat === void 0) { scaleFormat = 1; }
            var scale = 1;
            if (parent.width / parent.height > obj.width / obj.height) {
                scale = parent.height / obj.height;
            }
            else {
                scale = parent.width / obj.width;
            }
            scale *= scaleFormat;
            obj.scale(scale, scale);
        };
        /**
         * 适配某个物体在父节点
         *
         * 能全部放入显示 不会有黑边 但是会有些看不见
         *
         * @param obj 需要适配的对象
         * @param parent 适配对象父级
         * @param scaleFormat 适配比例 默认1
         */
        AdaptationUtil.adaptationMaxObj = function (obj, parent, scaleFormat) {
            if (scaleFormat === void 0) { scaleFormat = 1; }
            var scale = 1;
            if (parent.width / parent.height > obj.width / obj.height) {
                scale = parent.width / obj.width;
            }
            else {
                scale = parent.height / obj.height;
            }
            scale *= scaleFormat;
            obj.scale(scale, scale);
        };
        return AdaptationUtil;
    }());
    window.AdaptationUtil = AdaptationUtil;
    /**
     * 播放工具
     */
    var AnimatorUtls = /** @class */ (function () {
        function AnimatorUtls() {
        }
        /**
         * 3d 动画按照帧播放
         *
         * @param dis 增加进度值
         * @param animator 播放的播放器
         * @param playStates 播放状态
         */
        AnimatorUtls.playSTREF = function (dis, animator, playStates) {
            // dis *= 0.1;
            var controllerLayer = animator.getControllerLayer();
            var animatorState = controllerLayer._currentPlayState;
            var playStateInfo = controllerLayer._playStateInfo;
            var max = (playStates.clipEnd - playStates.clipStart) * playStates.clip.duration();
            //console.log("playSTREF  ", dis, "  _elapsedTime = ", playStateInfo._elapsedTime, "  max = ", max);
            if (dis + playStateInfo._elapsedTime > max) {
                // console.log("到达目的---");
                return { curent: max, max: max };
            }
            if (dis + playStateInfo._elapsedTime < 0) {
                dis = -playStateInfo._elapsedTime;
            }
            animator.speed = 0;
            var ani = animator;
            ani._updatePlayer(playStates, playStateInfo, dis, false);
            var addtive = false;
            ani._updateClipDatas(animatorState, addtive, playStateInfo, 1);
            ani._setClipDatasToNode(animatorState, addtive, controllerLayer.defaultWeight, false);
            ani._updateEventScript(animatorState, playStateInfo);
            //
            return { curent: playStateInfo._elapsedTime, max: max };
        };
        /**
         * 强制刷新骨骼
         * 例如对骨骼做操作了后
         * @param ani_Ske
         */
        AnimatorUtls.refulshSKE = function (ani_Ske) {
            ani_Ske._createGraphics();
        };
        return AnimatorUtls;
    }());
    window.AnimatorUtls = AnimatorUtls;
    /**
     * 描述AStar中的节点
     */
    var ANode = /** @class */ (function () {
        function ANode(point, endPoint, g) {
            if (g === void 0) { g = 0; }
            this.father = null; //父节点
            this.g = g || 0;
            this.point = point;
            this.father = null;
            this.h = (Math.abs(endPoint.c - point.c) + Math.abs(endPoint.r - point.r)) * 10;
        }
        return ANode;
    }());
    window.ANode = ANode;
    /**
     * 二维数组
     */
    var Array2D = /** @class */ (function () {
        /**
         *
         * @param w 行
         * @param h 列
         * @param num 默认数值0
         */
        function Array2D(w, h, num) {
            if (num === void 0) { num = 0; }
            this.default_num = 0;
            this.data = [];
            this.w = w;
            this.h = h;
            this.default_num = num || 0;
            for (var x = 0; x < w; x++) {
                var temp = [];
                for (var y = 0; y < h; y++) {
                    temp.push(this.default_num);
                }
                this.data.push(temp);
            }
        }
        /**
         * 打印
         */
        Array2D.prototype.showArray2D = function () {
            var s = "";
            for (var y = 0; y < this.h; y++) {
                for (var x = 0; x < this.w; x++) {
                    s += this.data[x][y] + " ";
                }
                s += "\n";
            }
            console.log(s);
        };
        return Array2D;
    }());
    window.Array2D = Array2D;
    /**
     *  功能：
            创建AStar对象，进行寻路
        参数：
            map2d:Array2D类型的地图数组
            startPoint:Point类型的寻路起点
            endPoint:Point类型的寻路终点
            passTag:int类型的可行走标记（若地图数据!=passTag即为障碍）0为可行
     */
    var AStar = /** @class */ (function () {
        /**
         *
         * @param map2d Array2D类型的地图数组
         * @param startPoint Point类型的寻路起点
         * @param endPoint Point类型的寻路终点
         * @param passTag int类型的可行走标记（若地图数据!=passTag即为障碍）0为可行
         */
        function AStar(map2d, startPoint, endPoint, passTag) {
            if (passTag === void 0) { passTag = 0; }
            var tag = passTag || 0;
            this.map2d = map2d;
            this.startPoint = startPoint;
            this.endPoint = endPoint;
            this.passTag = tag;
            this.openList = [];
            this.closeList = [];
        }
        /**
         * 获得openList中F值最小的节点
         */
        AStar.prototype.getMinNode = function () {
            var currentNode = this.openList[0];
            for (var _i = 0, _a = this.openList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.g + node.h < currentNode.g + currentNode.h)
                    currentNode = node;
            }
            return currentNode;
        };
        /**判断point是否在关闭表中*/
        AStar.prototype.pointInCloseList = function (point) {
            for (var _i = 0, _a = this.closeList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.point.eq(point))
                    return true;
            }
            return false;
        };
        /**判断point是否在开启表中*/
        AStar.prototype.pointInOpenList = function (point) {
            for (var _i = 0, _a = this.openList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.point.eq(point))
                    return node;
            }
            return null;
        };
        /**判断终点是否在关闭表中*/
        AStar.prototype.endPointInCloseList = function () {
            for (var _i = 0, _a = this.closeList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.point.eq(this.endPoint))
                    return node;
            }
            return null;
        };
        /**搜索节点周围的点*/
        ///isPassTag  属否忽略障碍物 true  能忽略  false  不能忽略
        AStar.prototype.searchNear = function (minF, offsetX, offsetY, isPassTag) {
            if (isPassTag === void 0) { isPassTag = false; }
            //越界检测
            if (minF.point.c + offsetX < 0 || minF.point.c + offsetX > this.map2d.w - 1 || minF.point.r + offsetY < 0 || minF.point.r + offsetY > this.map2d.h - 1)
                return null;
            //如果是障碍就忽略
            if (this.map2d.data[minF.point.c + offsetX][minF.point.r + offsetY] !== this.passTag && !isPassTag)
                return null;
            //如果在关闭表中就忽略
            var currentPoint = new Point(minF.point.c + offsetX, minF.point.r + offsetY);
            if (this.pointInCloseList(currentPoint))
                return null;
            //设置单位花费
            var step = 0;
            if (offsetX === 0 || offsetY === 0)
                step = 10;
            else
                step = 14;
            //如果不在openList中，就把它加入openList
            var currentNode = this.pointInOpenList(currentPoint);
            if (currentNode == null) {
                currentNode = new ANode(currentPoint, this.endPoint, minF.g + step);
                currentNode.father = minF;
                this.openList.push(currentNode);
                return null;
            }
            //如果在openList中，判断minF到当前点的G是否更小
            if (minF.g + step < currentNode.g) {
                currentNode.g = minF.g + step;
                currentNode.father = minF;
            }
        };
        /**
         * 开始寻路
         */
        AStar.prototype.start = function (isPassTag) {
            if (isPassTag === void 0) { isPassTag = false; }
            //1.将起点放入开启列表
            var startNode = new ANode(this.startPoint, this.endPoint);
            this.openList.push(startNode);
            //2.主循环逻辑
            while (true) {
                //找到F值最小的节点
                var minF = this.getMinNode();
                //把这个点加入closeList中，并且在openList中删除它
                this.closeList.push(minF);
                var index = this.openList.indexOf(minF);
                this.openList.splice(index, 1);
                //搜索这个节点的上下左右节点
                this.searchNear(minF, 0, -1, isPassTag);
                this.searchNear(minF, 0, 1, isPassTag);
                this.searchNear(minF, -1, 0, isPassTag);
                this.searchNear(minF, 1, 0, isPassTag);
                // 判断是否终止
                var point = this.endPointInCloseList();
                if (point) { //如果终点在关闭表中，就返回结果
                    var cPoint = point;
                    var pathList = [];
                    while (true) {
                        if (cPoint.father) {
                            pathList.push(cPoint.point);
                            cPoint = cPoint.father;
                        }
                        else {
                            return pathList.reverse();
                        }
                    }
                }
                //开启表为空
                if (this.openList.length === 0) {
                    console.log("this.openList");
                    return null;
                }
            }
        };
        return AStar;
    }());
    window.AStar = AStar;
    /**
     * A星算法工具类
     */
    var AStarUtils = /** @class */ (function () {
        function AStarUtils() {
        }
        AStarUtils.getInstance = function () {
            if (!AStarUtils.instance_) {
                AStarUtils.instance_ = new AStarUtils();
            }
            return AStarUtils.instance_;
        };
        /**
         * 设置2d地图数据
         * r  行
         * c  列
         * ObsArr 障碍物数组
         */
        AStarUtils.prototype.setMap2d = function (r, c, ObsArr) {
            this.map2d = new Array2D(c, r);
            for (var i = 0, len = ObsArr.length; i < len; i++) {
                this.map2d.data[ObsArr[i][0]][ObsArr[i][1]] = 1;
            }
            // this.map2d.showArray2D();
        };
        AStarUtils.prototype.showArray2D = function () {
            this.map2d.showArray2D();
        };
        /**
          * 设置2d地图数据障碍物
          * ObsArr 障碍物数组
          */
        AStarUtils.prototype.setMapObsArr = function (ObsArr) {
            if (this.map2d == null) {
                console.log("请先设置地图");
                return;
            }
            for (var i = 0, len = ObsArr.length; i < len; i++) {
                this.map2d.data[ObsArr[i][0]][ObsArr[i][1]] = 1;
            }
        };
        AStarUtils.prototype.removeMapObsArr = function (ObsArr) {
            for (var i = 0, len = ObsArr.length; i < len; i++) {
                this.map2d.data[ObsArr[i][0]][ObsArr[i][1]] = 0;
            }
        };
        /**
         * 清理地图2d数据
         */
        AStarUtils.prototype.clearMap2d = function () {
            this.map2d = new Array2D(this.map2d.w, this.map2d.h);
        };
        /**
         * 获取路径
         */
        AStarUtils.prototype.getPath = function (startPoint, endPoint, isPassTag) {
            if (isPassTag === void 0) { isPassTag = false; }
            if (startPoint.c == endPoint.c && startPoint.r == endPoint.r) {
                return [endPoint];
            }
            var aStar = new AStar(this.map2d, startPoint, endPoint);
            var pathList = aStar.start(isPassTag);
            var pathStr = "";
            if (pathList == null) {
                console.log("pathList>>>>", startPoint, endPoint);
                return null;
            }
            for (var _i = 0, pathList_1 = pathList; _i < pathList_1.length; _i++) {
                var point = pathList_1[_i];
                pathStr += "(" + point.c + "," + point.r + ") => ";
            }
            // console.log(pathStr);
            return pathList;
        };
        /**
         * 测试
         */
        AStarUtils.test = function () {
            var map2d = new Array2D(11, 15);
            map2d.data[4][2] = 1;
            map2d.data[4][3] = 1;
            map2d.data[4][4] = 1;
            map2d.data[4][5] = 1;
            map2d.data[4][6] = 1;
            map2d.data[4][7] = 1;
            map2d.data[6][2] = 1;
            map2d.data[6][3] = 1;
            map2d.data[6][4] = 1;
            map2d.data[6][5] = 1;
            map2d.data[6][6] = 1;
            map2d.data[6][7] = 1;
            map2d.data[7][7] = 1;
            map2d.data[8][7] = 1;
            map2d.showArray2D();
            // console.log(map2d.data[4][0]);
            var aStar = new AStar(map2d, new Point(5, 6), new Point(6, 4));
            var pathList = aStar.start();
            var pathStr = "";
            for (var _i = 0, pathList_2 = pathList; _i < pathList_2.length; _i++) {
                var point = pathList_2[_i];
                map2d.data[point.c][point.r] = 8;
                pathStr += "(" + point.c + "," + point.r + ") => ";
            }
            console.log(pathStr);
            map2d.showArray2D();
        };
        return AStarUtils;
    }());
    window.AStarUtils = AStarUtils;
    /**
     * 点
     */
    var Point = /** @class */ (function () {
        function Point(c, r) {
            this.c = c;
            this.r = r;
        }
        Point.prototype.eq = function (other) {
            return this.c === other.c && this.r === other.r;
        };
        return Point;
    }());
    window.Point = Point;
    /**
     * 类工具
     */
    var ClassUtils = /** @class */ (function () {
        function ClassUtils() {
        }
        /**
         * 获取类键值
         * @param className
         */
        ClassUtils.getClassKey = function (className, className_key) {
            if (className_key === void 0) { className_key = "className_key"; }
            var classKey = className.toString(); // + "";
            classKey = (classKey.split(className_key + "=\"")[1]) == null ? (classKey.split(className_key + " = \"")[1]) : (classKey.split(className_key + "=\"")[1]);
            classKey = classKey.split("\"")[0]; //以上兼容发布
            return classKey;
        };
        return ClassUtils;
    }());
    window.ClassUtils = ClassUtils;
    /**
     * 设备工具
     */
    var DeviceUtil = /** @class */ (function () {
        function DeviceUtil() {
        }
        /**
         * 适配场景中的背景图片
         *
         * @param bg 背景图片
         * @param sence 场景
         */
        DeviceUtil.adaptationBgImg = function (bg) {
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return;
            }
            bg.scaleX = bg.scaleY = DeviceUtil.getScalePix();
            bg.anchorX = bg.anchorY = 0.5;
            bg.x = Laya.stage.width / 2;
            bg.y = Laya.stage.height / 2;
        };
        /**
         * 获取最大缩放比例
         *
         * @param defaultSize 默认尺寸
         * @param size 变动尺寸
         */
        DeviceUtil.getMaxScale = function (defaultSize, size) {
            var scaleW = size.w / defaultSize.w;
            var scaleH = size.h / defaultSize.h;
            return scaleH > scaleW ? scaleH : scaleW;
        };
        /**
         * 获取缩放量
         * 支持 SCALE_SHOWALL  SCALE_FIXED_WIDTH SCALE_FIXED_HEIGHT
         *
         * @param defaultSize
         */
        DeviceUtil.getScalePix = function (defaultSize) {
            if (defaultSize === void 0) { defaultSize = DeviceUtil.defaultSize; }
            if (DeviceUtil.scale) {
                return DeviceUtil.scale;
            }
            DeviceUtil.scale = 1;
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return DeviceUtil.scale;
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH) {
                DeviceUtil.scale = (Laya.Browser.height / Laya.Browser.width) / (defaultSize.h / defaultSize.w);
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_HEIGHT) {
                DeviceUtil.scale = (defaultSize.h / defaultSize.w) / (Laya.Browser.height / Laya.Browser.width);
            }
            console.log(DeviceUtil.scale);
            return DeviceUtil.scale;
        };
        /**
         * 获取偏移量
         *
         * 支持 SCALE_SHOWALL  SCALE_FIXED_WIDTH SCALE_FIXED_HEIGHT
         */
        DeviceUtil.getAutoPix = function (defaultSize) {
            if (defaultSize === void 0) { defaultSize = DeviceUtil.defaultSize; }
            if (DeviceUtil.pix) {
                return DeviceUtil.pix;
            }
            DeviceUtil.pix = { x: 0, y: 0 };
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return DeviceUtil.pix;
            }
            var scale = (Laya.Browser.height / Laya.Browser.width) / (defaultSize.h / defaultSize.w);
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH) {
                DeviceUtil.pix.y = defaultSize.h * (scale - 1);
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_HEIGHT) {
                DeviceUtil.pix.x = defaultSize.w * (scale - 1);
            }
            console.log(DeviceUtil.pix);
            return DeviceUtil.pix;
        };
        /**
         * 是否是iphone X
         * 目前主要用分辨率来判断
         */
        DeviceUtil.getIsIphoneX = function () {
            var rato = Laya.Browser.clientHeight / Laya.Browser.clientWidth;
            if (DeviceUtil.defaultSize.w > DeviceUtil.defaultSize.h) {
                //横屏
                rato = 1 / rato;
            }
            if (rato >= 2) {
                return true;
            }
            else {
                return false;
            }
        };
        /**
         * 震动 屏幕
         */
        DeviceUtil.shockScreen = function (rota, frame) {
            if (rota === void 0) { rota = 0.03; }
            if (frame === void 0) { frame = 5; }
            Laya.stage.rotation = rota;
            Laya.timer.frameOnce(frame, {}, function () {
                Laya.stage.rotation = -rota;
                Laya.timer.frameOnce(frame, {}, function () {
                    Laya.stage.rotation = 0;
                    // Laya.stage.rotation = rota * 0.8;
                    // Laya.timer.frameOnce(frame, {}, () => {
                    //     Laya.stage.rotation = -rota * 0.8;
                    //     Laya.timer.frameOnce(frame, {}, () => {
                    //         Laya.stage.rotation = 0;
                    //     });
                    // });
                });
            });
        };
        /**
         * 自动适配舞台
         *
         * pc 上 SCALE_SHOWALL
         * mobile 上 SCALE_FIXED_WIDTH
         *
         * 屏幕方向 none
         */
        DeviceUtil.autoStageScaleMode = function () {
            var rato = Laya.Browser.clientHeight / Laya.Browser.clientWidth;
            var defalutRato = DeviceUtil.defaultSize.h / DeviceUtil.defaultSize.w; //默认高宽比例
            //横竖屏
            if (defalutRato >= 1) { //竖屏
                Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
                if (rato >= defalutRato && rato <= 2.3) {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
                }
                else {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                }
                //
                if (DeviceUtil.isOnPC()) { //竖屏pc上使用横屏方便直接查看
                    if (rato > 1) {
                        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
                    }
                    else {
                        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                    }
                }
            }
            else {
                Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                rato = 1 / rato;
                defalutRato = 1 / defalutRato;
                if (rato >= defalutRato && rato <= 2.3) {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
                }
                else {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
                }
            }
            // if (rato > defalutRato) {
            //     Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            // }
            // if (rato < 2.3) { // 2.3 以下比例适配
            //     Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            // }
            // if (rato < defalutRato) {
            //     Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            // }
            // if (Laya.Browser.onMobile) {
            //     if (Laya.Browser.onWeiXin) {
            //         Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            //     } else {
            //         Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
            //     }
            // } else {
            //     Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            // }
            // Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "middle";
            // Laya.stage.height *= DeviceUtil.getScalePix();
            console.log(Laya.stage.width, Laya.stage.height, Laya.Browser.width, Laya.Browser.height);
            // Laya.stage.width = Laya.Browser.width;
            // Laya.stage.height = Laya.Browser.height;
        };
        /**
         * 是否在native中
         */
        DeviceUtil.isNative = function () {
            return Laya.Render.isConchApp;
        };
        /**
         * 是否在小游戏平台
         *
         * wx qq tt vivo oppo uc baidu
         */
        DeviceUtil.isMiniGame = function () {
            return Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame || Laya.Browser.onVVMiniGame ||
                Laya.Browser.onQGMiniGame || window["ucMiniGame"] || Laya.Browser.onBDMiniGame || typeof (mz_jsb) != "undefined";
        };
        /**
         * 是否在微信MiniGame中
         */
        DeviceUtil.isWXMiniGame = function () {
            if (window["ttMiniGame"]) {
                return false;
            }
            return Laya.Browser.onMiniGame;
        };
        /**
         * 是否在QQMiniGame中
         */
        DeviceUtil.isQQMiniGame = function () {
            return Laya.Browser.onQQMiniGame;
        };
        /**
         * 是否在头条游戏
         */
        DeviceUtil.isTTMiniGame = function () {
            if (window["ttMiniGame"]) {
                return true;
            }
            return false;
        };
        /**
         * 是否在vivo游戏
         */
        DeviceUtil.isVIVOMiniGame = function () {
            return Laya.Browser.onVVMiniGame;
        };
        /**
         * 是否在oppo游戏
         */
        DeviceUtil.isOPPOMiniGame = function () {
            return Laya.Browser.onQGMiniGame;
        };
        /**
         * 是否在百度游戏
         */
        DeviceUtil.isBAIDUMiniGame = function () {
            return Laya.Browser.onBDMiniGame;
        };
        /**
         * 是否在魅族游戏
         */
        DeviceUtil.isMZMiniGame = function () {
            if (typeof (mz_jsb) != "undefined") {
                return true;
            }
            return false;
        };
        /**
         * 是否在IOS设备中
         */
        DeviceUtil.isIOS = function () {
            return Laya.Browser.onIOS;
        };
        /**
         * 是否在Android设备中
         */
        DeviceUtil.isAndroid = function () {
            return Laya.Browser.onAndroid;
        };
        /**
         * 是否在pc
         */
        DeviceUtil.isOnPC = function () {
            return Laya.Browser.onPC;
        };
        /**
         * 是否在UC小游戏
         */
        DeviceUtil.isUCMiniGame = function () {
            return window["ucMiniGame"];
        };
        /**
         * 获取设备号
         */
        DeviceUtil.getDeviceNo = function () {
            if (Laya.LocalStorage.getItem("DeviceNo")) {
                return Laya.LocalStorage.getItem("DeviceNo");
            }
            //
            var no = "";
            if (Laya.Browser.onMobile) {
                //移动平台
                // return "mobile";
            }
            // 不在移动平台
            // no = window.navigator.appVersion + "_" + window.navigator.appName + "_" + window.navigator.userAgent + "_" + window.navigator.appCodeName;
            no += (new Date().getTime()); //注册一个随机数
            Laya.LocalStorage.setItem("DeviceNo", no);
            return no;
        };
        /**设计尺寸 */
        DeviceUtil.defaultSize = { w: 1080, h: 1920 };
        return DeviceUtil;
    }());
    window["DeviceUtil"] = DeviceUtil;
    /**
     * 特效工具
     *
     * 抖动
     * 向上移动淡出
     * 文本数字增减效果
     * 开始闪烁
     */
    var EffectUtil = /** @class */ (function () {
        function EffectUtil() {
        }
        /**
         * 类似mac上图标上下抖动的效果
         *
         * @param {Sprite} obj 抖动对象
         * @param {number} initY 要抖动的对象的初始Y值，原始位置
         * @param {Function} callback 抖动动画完成回调函数
         * @param {any} thisObj 回调函数this对象
         * @param {any[]} args 回调函数args
         */
        EffectUtil.macIconShake = function (obj, initY, callback, thisObj, args) {
            //抖动频率[移动距离,时间]，可修改
            var arr = [
                [20, 300],
                [15, 300],
                [10, 300],
                [5, 300]
            ];
            var index = 0;
            toShake();
            function toShake() {
                if (index >= arr.length) {
                    (callback) && (callback.apply(thisObj, args));
                }
                else {
                    Laya.Tween.to(obj, { y: initY - arr[index][0] }, arr[index][1], null, Laya.Handler.create(null, function () {
                        Laya.Tween.to(obj, { y: initY }, arr[index][1], null, Laya.Handler.create(null, function () {
                            ++index;
                            toShake();
                        }));
                    }));
                }
            }
        };
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
        EffectUtil.flowOut = function (obj, time, ease, method, delay, thisObj, arrData) {
            if (time === void 0) { time = 500; }
            if (ease === void 0) { ease = null; }
            if (method === void 0) { method = null; }
            if (thisObj === void 0) { thisObj = null; }
            if (arrData === void 0) { arrData = null; }
            if (method) {
                Laya.Tween.to(obj, { y: obj.y - 150, alpha: 0 }, time, ease, Laya.Handler.create(thisObj, method, arrData), delay);
            }
            else {
                Laya.Tween.to(obj, { y: obj.y - 150, alpha: 0 }, time, ease, Laya.Handler.create(obj, obj.removeSelf, arrData), delay);
            }
        };
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
        EffectUtil.flowMoveOut = function (obj, time, ease, method, delay, thisObj, arrData) {
            if (time === void 0) { time = 500; }
            if (ease === void 0) { ease = null; }
            if (method === void 0) { method = null; }
            if (delay === void 0) { delay = null; }
            if (thisObj === void 0) { thisObj = null; }
            if (arrData === void 0) { arrData = null; }
            if (method) {
                Laya.Tween.to(obj, { y: obj.y - 150 }, time * 0.7, ease, Laya.Handler.create(obj, function () {
                    Laya.Tween.to(obj, { alpha: 0 }, time * 0.3, ease, Laya.Handler.create(thisObj, method, arrData));
                }), delay);
            }
            else {
                Laya.Tween.to(obj, { y: obj.y - 150 }, time * 0.7, ease, Laya.Handler.create(obj, function () {
                    Laya.Tween.to(obj, { alpha: 0 }, time * 0.3, ease, Laya.Handler.create(obj, obj.removeSelf, arrData));
                }), delay);
            }
        };
        /**
         * 文本数字增减效果
         *
         * @param {number} startNum 开始数值
         * @param {number} endNum 渐变到的数值
         * @param {Function} callback 淡出完成回调函数
         * @param {any} thisObj 回调函数this对象
         */
        EffectUtil.flowNum = function (startNum, endNum, callback, thisObj, completeCallBack) {
            Laya.timer.clearAll(this);
            var change = Math.abs(endNum - startNum);
            if (change <= 0)
                return;
            var everyChange = change / (endNum - startNum);
            if (change >= 1000) {
                everyChange = 1000;
            }
            else if (change >= 100) {
                everyChange = 100;
            }
            else if (change >= 50) {
                everyChange = 50;
            }
            else if (change >= 5) {
                everyChange = 5;
            }
            change = Math.ceil(change / everyChange);
            var currNum = startNum;
            var timer = new Laya.Timer();
            timer.loop(17, this, changeFun);
            function changeFun() {
                currNum += everyChange;
                --change;
                if (change < 0) {
                    timer.clearAll(this);
                    timer = null;
                    completeCallBack && completeCallBack.apply(thisObj);
                }
                else {
                    callback && callback.apply(thisObj, [endNum]);
                }
            }
        };
        /**
         * 开始闪烁
         *
         * @param {Sprite} obj
         * @param {number} alphaTime 闪烁频率
         */
        EffectUtil.startFlicker = function (obj, alphaTime) {
            if (alphaTime === void 0) { alphaTime = 700; }
            obj.alpha = 1;
            Laya.Tween.to(obj, { "alpha": 0 }, alphaTime, null, Laya.Handler.create(null, function () {
                Laya.Tween.to(obj, { "alpha": 1 }, alphaTime, null, Laya.Handler.create(this, this.startFlicker, [obj]));
            }.bind(this)));
        };
        /**
         * 停止动画所有动画后容器位置初始化到原位，否则可能出现位置改变的bug
         *
         * @param {Sprite} obj
         * @param {number} xPos
         * @param {number} yPos
         */
        EffectUtil.stopEffect = function (obj, xPos, yPos) {
            if (xPos === void 0) { xPos = null; }
            if (yPos === void 0) { yPos = null; }
            Laya.Tween.clearAll(obj);
            if (xPos !== null && yPos !== null) {
                obj.pos(xPos, yPos);
            }
        };
        /**
         * 缩放效果
         * @param spr
         * @param scale 1.3
         * @param time 1000ms
         * @param isLoop true
         */
        EffectUtil.showScaleFix = function (spr, scale, time, isLoop) {
            if (scale === void 0) { scale = 1.3; }
            if (time === void 0) { time = 1000; }
            if (isLoop === void 0) { isLoop = true; }
            Laya.Tween.clearAll(spr);
            Laya.Tween.to(spr, { scaleX: scale, scaleY: scale }, time, null, Laya.Handler.create(spr, function () {
                Laya.Tween.to(spr, { scaleX: 1, scaleY: 1 }, time, null, Laya.Handler.create(spr, function () {
                    if (isLoop) {
                        EffectUtil.showScaleFix(spr, scale, time, isLoop);
                    }
                }));
            }));
        };
        /**
         * 摇晃效果
         *
         * @param spr 摇晃的对象
         * @param duc 幅度角度 默认10度
         * @param time 摇晃的整体时间 1：2：1 默认400ms
         * @param intervalTime null 间隔时间在此运行 -1不间隔时间继续循环 0或null 不循环 大于0表示间隔多时间继续
         * @param onceCall 单次结束回调
         */
        EffectUtil.showWobbleEff = function (spr, duc, time, intervalTime, onceCall) {
            var _this = this;
            if (duc === void 0) { duc = 10; }
            if (time === void 0) { time = 400; }
            if (intervalTime === void 0) { intervalTime = null; }
            if (onceCall === void 0) { onceCall = null; }
            Laya.Tween.to(spr, { rotation: duc }, time / 4, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(spr, { rotation: -duc }, time / 2, null, Laya.Handler.create(_this, function () {
                    Laya.Tween.to(spr, { rotation: 0 }, time / 4, null, Laya.Handler.create(_this, function () {
                        onceCall && onceCall();
                        if (intervalTime > 0) {
                            Laya.timer.once(intervalTime, spr, EffectUtil.showWobbleEff, [spr, duc, time, intervalTime, onceCall]);
                            return;
                        }
                        if (intervalTime < 0) {
                            EffectUtil.showWobbleEff(spr, duc, time, intervalTime, onceCall);
                        }
                    }));
                }));
            }));
        };
        /**
         * 上下移动效果
         * @param spr
         * @param len
         * @param time 1000ms
         * @param isLoop true
         */
        EffectUtil.showUpDown = function (spr, len, time, isLoop) {
            if (time === void 0) { time = 1000; }
            if (isLoop === void 0) { isLoop = true; }
            Laya.Tween.clearAll(spr);
            var firstY = spr.y;
            Laya.Tween.to(spr, { y: firstY + len }, time, Laya.Ease.sineIn, Laya.Handler.create(spr, function () {
                Laya.Tween.to(spr, { y: firstY }, time, Laya.Ease.sineOut, Laya.Handler.create(spr, function () {
                    if (isLoop) {
                        EffectUtil.showUpDown(spr, len, time, isLoop);
                    }
                }));
            }));
        };
        /**
         * 先向上飞行一段距离在掉落并且会弹两下
         * @param spr
         * @param len 300 向上飞行的高度
         * @param durtion 500 默认的单次飞行时间向上或是向下
         * @param intervalTime null 间隔时间在此运行 -1不间隔时间继续循环 0或null 不循环 大于0表示间隔多时间继续
         * @param onceCall 单次结束回调
         */
        EffectUtil.toUpDownAni = function (spr, len, durtion, intervalTime, onceCall) {
            if (len === void 0) { len = 300; }
            if (durtion === void 0) { durtion = 500; }
            if (intervalTime === void 0) { intervalTime = null; }
            if (onceCall === void 0) { onceCall = null; }
            var starY = spr.y;
            Laya.Tween.to(spr, { y: spr.y - len }, durtion, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                Laya.Tween.to(spr, { y: starY - 25 }, durtion, Laya.Ease.circIn, Laya.Handler.create(spr, function () {
                    Laya.Tween.to(spr, { y: starY + 20 }, 50, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                        Laya.Tween.to(spr, { y: starY - 20 }, 50, Laya.Ease.circIn, Laya.Handler.create(spr, function () {
                            Laya.Tween.to(spr, { y: starY - 10 }, 50, Laya.Ease.circIn, Laya.Handler.create(spr, function () {
                                Laya.Tween.to(spr, { y: starY + 10 }, 50, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                                    Laya.Tween.to(spr, { y: starY - 5 }, 50, Laya.Ease.circIn, Laya.Handler.create(spr, function () {
                                        Laya.Tween.to(spr, { y: starY }, 50, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                                            onceCall && onceCall();
                                            if (intervalTime != 0 && intervalTime >= -1) {
                                                if (intervalTime == -1) {
                                                    EffectUtil.toUpDownAni(spr, len, durtion, intervalTime);
                                                }
                                                else {
                                                    Laya.timer.once(intervalTime, spr, EffectUtil.toUpDownAni, [spr, len, durtion, intervalTime]);
                                                }
                                            }
                                        }));
                                    }));
                                }));
                            }));
                        }));
                    }));
                }));
            }));
        };
        //
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
        EffectUtil.imitateUpDown = function (spr, scale, len, durtion, intervalTime, onceCall) {
            if (scale === void 0) { scale = 0.5; }
            if (len === void 0) { len = 300; }
            if (durtion === void 0) { durtion = 1000; }
            if (intervalTime === void 0) { intervalTime = null; }
            if (onceCall === void 0) { onceCall = null; }
            var starY = spr.y;
            Laya.Tween.to(spr, { scaleY: 1 - scale }, durtion * 0.3, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                Laya.Tween.to(spr, { scaleY: 1 + scale }, durtion * 0.4, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                    Laya.Tween.to(spr, { scaleY: 1 }, durtion * 0.4, Laya.Ease.sineIn);
                }));
                Laya.Tween.to(spr, { y: spr.y - len }, durtion * 0.4, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                    Laya.Tween.to(spr, { y: starY - 25 }, durtion * 0.4, Laya.Ease.cubicIn, Laya.Handler.create(spr, function () {
                        Laya.Tween.to(spr, { y: starY + 20 }, 50, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                            Laya.Tween.to(spr, { y: starY - 20 }, 50, Laya.Ease.circIn, Laya.Handler.create(spr, function () {
                                Laya.Tween.to(spr, { y: starY - 10 }, 50, Laya.Ease.circIn, Laya.Handler.create(spr, function () {
                                    Laya.Tween.to(spr, { y: starY + 10 }, 50, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                                        Laya.Tween.to(spr, { y: starY - 5 }, 50, Laya.Ease.circIn, Laya.Handler.create(spr, function () {
                                            Laya.Tween.to(spr, { y: starY }, 50, Laya.Ease.circOut, Laya.Handler.create(spr, function () {
                                                onceCall && onceCall();
                                                if (intervalTime != 0 && intervalTime >= -1) {
                                                    if (intervalTime == -1) {
                                                        EffectUtil.imitateUpDown(spr, scale, len, durtion, intervalTime, onceCall);
                                                    }
                                                    else {
                                                        Laya.timer.once(intervalTime, spr, EffectUtil.imitateUpDown, [spr, scale, len, durtion, intervalTime, onceCall]);
                                                    }
                                                }
                                            }));
                                        }));
                                    }));
                                }));
                            }));
                        }));
                    }));
                }));
            }));
        };
        return EffectUtil;
    }());
    window.EffectUtil = EffectUtil;
    /**
     * 自定义 事件管理 工具
     */
    var EventMgr = /** @class */ (function (_super) {
        __extends(EventMgr, _super);
        function EventMgr() {
            return _super.call(this) || this;
        }
        EventMgr.getInstance = function () {
            if (!EventMgr._instance) {
                EventMgr._instance = new EventMgr();
            }
            return EventMgr._instance;
        };
        /**
         * 添加监听
         *
         * @param eventType 事件类型
         * @param obj 监听对象
         * @param callFunc 监听函数
         */
        EventMgr.prototype.addEvent = function (eventType, obj, callFunc) {
            this.on(eventType, obj, callFunc);
        };
        /**
         * 移除监听
         *
         * @param eventType 事件类型
         * @param obj 监听对象
         * @param callFunc 监听函数
         */
        EventMgr.prototype.removeEvent = function (eventType, obj, callFunc) {
            this.off(eventType, obj, callFunc, false);
        };
        /**
         * 发送事件
         *
         * @param eventType 事件类型
         * @param args 传入参数
         */
        EventMgr.prototype.sendEvent = function (eventType) {
            var args = [];
            for (var _a = 1; _a < arguments.length; _a++) {
                args[_a - 1] = arguments[_a];
            }
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.event(eventType, args);
        };
        return EventMgr;
    }(Laya.EventDispatcher));
    window["EventMgr"] = EventMgr;
    /*
    
    TypeScript Md5
    ==============
    
    Based on work by
    * Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
    * André Cruz: https://github.com/satazor/SparkMD5
    * Raymond Hill: https://github.com/gorhill/yamd5.js
    
    Effectively a TypeScrypt re-write of Raymond Hill JS Library
    
    The MIT License (MIT)
    
    Copyright (C) 2014 Raymond Hill
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
    
    
                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004
    
     Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>
    
     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.
    
                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
    
      0. You just DO WHAT THE FUCK YOU WANT TO.
    
    
    */
    var Md5 = /** @class */ (function () {
        function Md5() {
            this._state = new Int32Array(4);
            this._buffer = new ArrayBuffer(68);
            this._buffer8 = new Uint8Array(this._buffer, 0, 68);
            this._buffer32 = new Uint32Array(this._buffer, 0, 17);
            this.start();
        }
        // One time hashing functions
        Md5.hashStr = function (str, raw) {
            if (raw === void 0) { raw = false; }
            return this.onePassHasher
                .start()
                .appendStr(str)
                .end(raw);
        };
        Md5.hashAsciiStr = function (str, raw) {
            if (raw === void 0) { raw = false; }
            return this.onePassHasher
                .start()
                .appendAsciiStr(str)
                .end(raw);
        };
        Md5._hex = function (x) {
            var hc = Md5.hexChars;
            var ho = Md5.hexOut;
            var n;
            var offset;
            var j;
            var i;
            for (i = 0; i < 4; i += 1) {
                offset = i * 8;
                n = x[i];
                for (j = 0; j < 8; j += 2) {
                    ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                    ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                }
            }
            return ho.join('');
        };
        Md5._md5cycle = function (x, k) {
            var a = x[0];
            var b = x[1];
            var c = x[2];
            var d = x[3];
            // ff()
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            // gg()
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            // hh()
            a += (b ^ c ^ d) + k[5] - 378558 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            // ii()
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;
            x[1] = b + x[1] | 0;
            x[2] = c + x[2] | 0;
            x[3] = d + x[3] | 0;
        };
        Md5.prototype.start = function () {
            this._dataLength = 0;
            this._bufferLength = 0;
            this._state.set(Md5.stateIdentity);
            return this;
        };
        // Char to code point to to array conversion:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
        // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
        Md5.prototype.appendStr = function (str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var code;
            var i;
            for (i = 0; i < str.length; i += 1) {
                code = str.charCodeAt(i);
                if (code < 128) {
                    buf8[bufLen++] = code;
                }
                else if (code < 0x800) {
                    buf8[bufLen++] = (code >>> 6) + 0xC0;
                    buf8[bufLen++] = code & 0x3F | 0x80;
                }
                else if (code < 0xD800 || code > 0xDBFF) {
                    buf8[bufLen++] = (code >>> 12) + 0xE0;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                else {
                    code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                    if (code > 0x10FFFF) {
                        throw new Error('Unicode standard supports code points up to U+10FFFF');
                    }
                    buf8[bufLen++] = (code >>> 18) + 0xF0;
                    buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                if (bufLen >= 64) {
                    this._dataLength += 64;
                    Md5._md5cycle(this._state, buf32);
                    bufLen -= 64;
                    buf32[0] = buf32[16];
                }
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.appendAsciiStr = function (str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (; ;) {
                i = Math.min(str.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = str.charCodeAt(j++);
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.appendByteArray = function (input) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (; ;) {
                i = Math.min(input.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = input[j++];
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        };
        Md5.prototype.getState = function () {
            var self = this;
            var s = self._state;
            return {
                buffer: String.fromCharCode.apply(null, self._buffer8),
                buflen: self._bufferLength,
                length: self._dataLength,
                state: [s[0], s[1], s[2], s[3]]
            };
        };
        Md5.prototype.setState = function (state) {
            var buf = state.buffer;
            var x = state.state;
            var s = this._state;
            var i;
            this._dataLength = state.length;
            this._bufferLength = state.buflen;
            s[0] = x[0];
            s[1] = x[1];
            s[2] = x[2];
            s[3] = x[3];
            for (i = 0; i < buf.length; i += 1) {
                this._buffer8[i] = buf.charCodeAt(i);
            }
        };
        Md5.prototype.end = function (raw) {
            if (raw === void 0) { raw = false; }
            var bufLen = this._bufferLength;
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var i = (bufLen >> 2) + 1;
            var dataBitsLen;
            this._dataLength += bufLen;
            buf8[bufLen] = 0x80;
            buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
            buf32.set(Md5.buffer32Identity.subarray(i), i);
            if (bufLen > 55) {
                Md5._md5cycle(this._state, buf32);
                buf32.set(Md5.buffer32Identity);
            }
            // Do the final computation based on the tail and length
            // Beware that the final length may not fit in 32 bits so we take care of that
            dataBitsLen = this._dataLength * 8;
            if (dataBitsLen <= 0xFFFFFFFF) {
                buf32[14] = dataBitsLen;
            }
            else {
                var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
                if (matches === null) {
                    return;
                }
                var lo = parseInt(matches[2], 16);
                var hi = parseInt(matches[1], 16) || 0;
                buf32[14] = lo;
                buf32[15] = hi;
            }
            Md5._md5cycle(this._state, buf32);
            return Md5._hex(this._state);
        };
        // Private Static Variables
        Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
        Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        Md5.hexChars = '0123456789abcdef';
        Md5.hexOut = [];
        // Permanent instance is to use for one-call hashing
        Md5.onePassHasher = new Md5();
        return Md5;
    }());
    if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        console.error('Md5 self test failed.');
    }
    window.Md5 = Md5;
    /**
     * 数值工具
     */
    var NumberTool = /** @class */ (function () {
        function NumberTool() {
        }
        /**
         * 获取随机整数 getRandomInt(3,6)返回3~6之间的任意整数
         * @param start 起始值
         * @param end 终止值
         * @returns 随机整数
         */
        NumberTool.getRandomInt = function (start, end) {
            return (Math.round(Math.random() * (end - start)) + start);
        };
        /**
         *  阿拉伯数字转换成中文数字
         *
         * @param num
         */
        NumberTool.formatCapital = function (num) {
            if (num <= 0 || num >= 10) {
                return "";
            }
            return (["一", "二", "三", "四", "五", "六", "七", "八", "九"])[num - 1];
        };
        /**
         * 当数字超过10万时，将数字进行转换。例如10万的金币，"117315"转换成"11.73万"。
         * @param num 待转换数字
         * @return 转换结果
         */
        NumberTool.formatMoney = function (num) {
            if (num >= 10000 || num <= -10000) {
                return Math.round(num / 100) / 100 + "万";
            }
            else {
                return num + "";
            }
        };
        /**
         * 获取分数的k，b单位str
         *
         * @param num 待转换数字
         * 1.2K 23M
         */
        NumberTool.getSoceNumberStr = function (numS) {
            var str = "";
            var score = numS;
            var index = 0;
            var func = function (num) {
                if (num / 1000 > 1) {
                    num = Math.floor(num / 10);
                    index++;
                    return func(num);
                }
                else {
                    return num;
                }
            };
            var showP = ["K", "M", "B", "T"];
            score = func(score);
            if (index > 0) {
                return score + "." + showP[index - 1];
            }
            else {
                return score + "";
            }
        };
        /**
         * 获取数字k效果 。例如112000->112k 1000->1000  10000->10k
         *
         * @param num 待转换数字
         */
        NumberTool.getSoceNumberStrType_K = function (num) {
            if (num > 9999) {
                num /= 1000;
                num = Math.floor(num);
                return num + "K";
            }
            return num + "";
        };
        /**
         * 三位分割
         *
         * 1234567  -> 1,234,567
         *
         * @param numS 待转换数字
         */
        NumberTool.getThreeTypeNumberStr = function (numS) {
            // console.log(numS);
            var str = "";
            var func = function (num) {
                if (num / 1000 > 1) {
                    str = "," + NumberTool.getThreeNumStr((num % 1000)) + str;
                    num = Math.floor(num / 1000);
                    return func(num);
                }
                else {
                    str = num + str;
                    return str;
                }
            };
            return func(numS);
        };
        /**
         * num 不超过3位数
         * 补齐三位数 12->012 1->001
         *
         * @param num 待转换数字
         *
         */
        NumberTool.getThreeNumStr = function (num) {
            if (num > 99) {
                return num + "";
            }
            else if (num > 9) {
                return "0" + num;
            }
            else {
                return "00" + num;
            }
        };
        /**
         * 获取时间字符串 00:00
         *
         * @param timeNum 待转换数字
         *
         */
        NumberTool.getShowTime = function (timeNum) {
            var fen = "";
            var funNum = Math.floor(timeNum / 60);
            if (funNum / 10 >= 1) {
                fen = "" + funNum;
            }
            else {
                fen = "0" + funNum;
            }
            //
            var miao = "";
            if (funNum > 0) {
                timeNum -= 60 * funNum;
            }
            var miaoNum = timeNum;
            if (miaoNum / 10 >= 1) {
                miao = "" + miaoNum;
            }
            else {
                miao = "0" + miaoNum;
            }
            return fen + ":" + miao;
        };
        /**
         * 获取时间字符串 00:00:00
         *
         * @param timeNum 待转换数字
         *
         */
        NumberTool.getShowTimeTwo = function (timeNum) {
            var hour = "";
            var hourNum = Math.floor(timeNum / 3600);
            if (hourNum / 10 >= 1) {
                hour = "" + hourNum;
            }
            else {
                hour = "0" + hourNum;
            }
            if (hourNum > 0) {
                timeNum -= 3600 * hourNum;
            }
            //
            var fen = "";
            var funNum = Math.floor(timeNum / 60);
            if (funNum / 10 >= 1) {
                fen = "" + funNum;
            }
            else {
                fen = "0" + funNum;
            }
            if (funNum > 0) {
                timeNum -= 60 * funNum;
            }
            //
            var miao = "";
            var miaoNum = timeNum;
            if (miaoNum / 10 >= 1) {
                miao = "" + miaoNum;
            }
            else {
                miao = "0" + miaoNum;
            }
            return hour + ":" + fen + ":" + miao;
        };
        /**
         * 获取时间字符串 10天02时27分23秒
         * 传入秒数
         *
         * @param timeNum 待转换数字
         *
         */
        NumberTool.getShowTimeThree = function (timeNum) {
            var timeStr = "";
            var day = timeNum / (3600 * 24);
            day = Math.floor(day);
            if (day >= 1) {
                //超过一天
                timeNum -= day * (3600 * 24);
            }
            //时
            var hour = timeNum / (3600);
            hour = Math.floor(hour);
            if (hour >= 1) {
                //超过一天
                timeNum -= hour * (3600);
            }
            //分
            var fen = timeNum / (60);
            fen = Math.floor(fen);
            if (fen >= 1) {
                //超过一天
                timeNum -= fen * (60);
            }
            timeStr = day + "天" + hour + "时" + fen + "分" + timeNum + "秒";
            return timeStr;
        };
        return NumberTool;
    }());
    window.NumberTool = NumberTool;
    /**
     * 位置转换工具
     */
    var PosTool = /** @class */ (function () {
        function PosTool() {
        }
        /**[SixGod]
         * 世界坐标转屏幕坐标
         *
         * @param {Laya.Camera} camera   参照相机
         * @param {Laya.Vector3} point   需要转换的点
         */
        PosTool.worldToScreen2 = function (camera, point) {
            var pointA = PosTool.inverseTransformPoint(camera.transform, point);
            var distance = pointA.z;
            var out = new Laya.Vector3();
            camera.viewport.project(point, camera.projectionViewMatrix, out);
            var value = new Laya.Vector3(out.x / Laya.stage.clientScaleX, out.y / Laya.stage.clientScaleY, distance);
            return value;
        };
        /**[SixGod]
         * 屏幕坐标转世界坐标
         *
         * @param {Laya.Camera} camera  参照相机
         * @param {Laya.Vector3} point  需要转换的点
         */
        PosTool.screenToWorld = function (camera, point) {
            var halfFOV = (camera.fieldOfView * 0.5) * Math.PI / 180;
            var height = point.z * Math.tan(halfFOV);
            var width = height * camera.aspectRatio;
            var lowerLeft = PosTool.getLowerLeft(camera.transform, point.z, width, height);
            var v = PosTool.getScreenScale(width, height);
            // 放到同一坐标系（相机坐标系）上计算相对位置
            var value = new Laya.Vector3();
            var lowerLeftA = PosTool.inverseTransformPoint(camera.transform, lowerLeft);
            value = new Laya.Vector3(-point.x / v.x, point.y / v.y, 0);
            Laya.Vector3.add(lowerLeftA, value, value);
            // 转回世界坐标系
            value = PosTool.transformPoint(camera.transform, value);
            return value;
        };
        /**[SixGod]
         * 获取三维场景和屏幕比例
         *
         * @param {Number} width     宽
         * @param {Number} height    长
         */
        PosTool.getScreenScale = function (width, height) {
            var v = new Laya.Vector3();
            v.x = Laya.stage.width / width / 2;
            v.y = Laya.stage.height / height / 2;
            return v;
        };
        /**[SixGod]
         * 获取相机在 distance距离的截面右下角世界坐标位置
         *
         * @param {Laya.Transform3D} transform    相机Transform3D
         * @param {Number} distance     距离
         * @param {Number} width        宽度
         * @param {Number} height       长度
         */
        PosTool.getLowerLeft = function (transform, distance, width, height) {
            // 相机在 distance距离的截面左下角世界坐标位置
            // LowerLeft
            var lowerLeft = new Laya.Vector3();
            // lowerLeft = transform.position - (transform.right * width);
            var right = new Laya.Vector3();
            transform.getRight(right);
            Laya.Vector3.normalize(right, right);
            var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
            Laya.Vector3.add(transform.position, xx, lowerLeft);
            // lowerLeft -= transform.up * height;
            var up = new Laya.Vector3();
            transform.getUp(up);
            Laya.Vector3.normalize(up, up);
            var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
            Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
            // lowerLeft += transform.forward * distance;
            var forward = new Laya.Vector3();
            transform.getForward(forward);
            Laya.Vector3.normalize(forward, forward);
            var zz = new Laya.Vector3(forward.x * distance, forward.y * distance, forward.z * distance);
            Laya.Vector3.subtract(lowerLeft, zz, lowerLeft);
            return lowerLeft;
        };
        /**[SixGod]
         * 世界坐标转相对坐标
         *
         * @param {Laya.Transform3D} origin   camera.transform
         * @param {Laya.Vector3} point      需要转换的点
         */
        PosTool.inverseTransformPoint = function (origin, point) {
            var xx = new Laya.Vector3();
            origin.getRight(xx);
            var yy = new Laya.Vector3();
            origin.getUp(yy);
            var zz = new Laya.Vector3();
            origin.getForward(zz);
            var zz1 = new Laya.Vector3(-zz.x, -zz.y, -zz.z);
            var x = PosTool.projectDistance(point, origin.position, xx);
            var y = PosTool.projectDistance(point, origin.position, yy);
            var z = PosTool.projectDistance(point, origin.position, zz1);
            var value = new Laya.Vector3(x, y, z);
            return value;
        };
        /**[SixGod]
         * 相对坐标转世界坐标
         *
         * @param {Laya.Transform3D} origin   camera.transform
         * @param {Laya.Vector3} point      需要转换的点
         */
        PosTool.transformPoint = function (origin, point) {
            var value = new Laya.Vector3();
            Laya.Vector3.transformQuat(point, origin.rotation, value);
            Laya.Vector3.add(value, origin.position, value);
            return value;
        };
        /**[SixGod]
         * 向量投影长度, 向量CA 在向量 CB 上的投影长度
         *
         * @param {Laya.Vector3} A
         * @param {Laya.Vector3} C
         * @param {Laya.Vector3} B
         */
        PosTool.projectDistance = function (A, C, B) {
            var CA = new Laya.Vector3();
            Laya.Vector3.subtract(A, C, CA);
            var angle = PosTool.angle2Vector(CA, B) * Math.PI / 180;
            var distance = Laya.Vector3.distance(A, C);
            distance *= Math.cos(angle);
            return distance;
        };
        /**[SixGod]
         * 向量夹角
         *
         * @param {Laya.Vector3} ma 向量A
         * @param {Laya.Vector3} mb 向量B
         */
        PosTool.angle2Vector = function (ma, mb) {
            var v1 = (ma.x * mb.x) + (ma.y * mb.y) + (ma.z * mb.z);
            var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
            var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
            var cosM = v1 / (ma_val * mb_val);
            if (cosM < -1)
                cosM = -1;
            if (cosM > 1)
                cosM = 1;
            var angleAMB = Math.acos(cosM) * 180 / Math.PI;
            return angleAMB;
        };
        return PosTool;
    }());
    window.PosTool = PosTool;
    /**
     * 资源加载工具
     */
    var ResUtil = /** @class */ (function () {
        function ResUtil() {
            //设置 资源前缀地址
            this.defaultOriginUrl = "";
            this.isSuccGroupNames = {};
            Laya.loader.maxLoader = 8;
        }
        ResUtil.getIntance = function () {
            if (!ResUtil.instance_) {
                ResUtil.instance_ = new ResUtil();
            }
            return ResUtil.instance_;
        };
        /**
         * 校验path
         * @param url
         */
        ResUtil.prototype.getOriginUrlPath = function (url) {
            return this.defaultOriginUrl + url.replace("./", "");
        };
        /**
         * 增加资源前缀
         * @param fix
         */
        ResUtil.prototype.addVersionPrefix = function (fix) {
            Laya.ResourceVersion.addVersionPrefix(fix);
            Laya.URL.basePath = fix;
        };
        /**
         * 加载resconfig文件
         *
         * @param resUrl res.json路径
         */
        ResUtil.prototype.loadRESConfig = function (resUrl) {
            var _this = this;
            if (resUrl === void 0) { resUrl = "./default.res.json"; }
            return new Promise(function (resolve) {
                Laya.loader.load(resUrl, Laya.Handler.create(_this, function (res) {
                    // if (!DeviceUtil.isNative()) {
                    //     res = JSON.parse(res);
                    // }
                    _this.resConfig = res;
                    //console.log(res);
                    if (!_this.resKeyValues) {
                        _this.resKeyValues = {};
                    }
                    for (var i = 0, len = res.resources.length; i < len; i++) {
                        _this.resKeyValues["" + res.resources[i].name] = res.resources[i];
                    }
                    //
                    if (!_this.groupsResKeys) {
                        _this.groupsResKeys = {};
                    }
                    for (var i = 0, len = res.groups.length; i < len; i++) {
                        _this.groupsResKeys["" + res.groups[i].name] = res.groups[i];
                    }
                    resolve();
                }), null, Laya.Loader.JSON);
            });
        };
        /**
         * 加载组
         *
         * @param groups 一些组
         * @param complet 加载完成时候
         * @param progress 加载过程中
         */
        ResUtil.prototype.loadGroups = function (groups, complet, progress) {
            if (groups.length == 0) {
                complet();
                return;
            }
            var allGroups = "";
            var resInfos = [];
            for (var i = 0, len = groups.length; i < len; i++) {
                allGroups += "_" + groups[i];
                //
                resInfos = resInfos.concat(this.getGroupResInfosByGroupName(groups[i]));
            }
            this.loadResByResInfos(resInfos, complet, progress);
        };
        /**
         * 对应组资源是否加载
         * @param group
         */
        ResUtil.prototype.groupIsLoad = function (group) {
            if (this.isSuccGroupNames[group]) {
                return true;
            }
            return false;
        };
        /**
         * 获取一些组还没加载的组
         * @param groups
         */
        ResUtil.prototype.getGroupsNotLoadArr = function (groups) {
            console.log("加载资源组 -> ", groups);
            var resArr = [];
            for (var i = 0, len = groups.length; i < len; i++) {
                if (!this.groupIsLoad(groups[i])) {
                    resArr.push(groups[i]);
                }
            }
            return resArr;
        };
        /**
         * 加载一些资源组
         *
         * @param resInfos
         * @param complet
         * @param progress
         */
        ResUtil.prototype.loadResByResInfos = function (resInfos, complet, progress) {
            return __awaiter(this, void 0, void 0, function () {
                var len, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            len = resInfos.length;
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3 /*break*/, 4];
                            if (progress) {
                                progress(i, len);
                            }
                            return [4 /*yield*/, this.asyncLoadResByResInfo(resInfos[i], 1, true)];
                        case 2:
                            _a.sent();
                            if (resInfos[i]["isLast_group"]) {
                                this.isSuccGroupNames[resInfos[i]["isLast_group"]] = true;
                            }
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (progress) {
                                progress(len, len);
                            }
                            if (complet) {
                                complet();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 异步加载一个资源
         *
         * @param resInfo
         * @param priority
         */
        ResUtil.prototype.asyncLoadResByResInfo = function (resInfo, priority, isLoadGrp) {
            var _this = this;
            if (isLoadGrp === void 0) { isLoadGrp = false; }
            if (!resInfo) {
                return null;
            }
            return new Promise(function (resolve) {
                if (isLoadGrp) {
                    Laya.loader.load(ResUtil.getIntance().getOriginUrlPath(resInfo.url), Laya.Handler.create(_this, function (res) {
                        resolve(res);
                    }), null, resInfo.type, priority, true, resInfo.group);
                    return;
                }
                Laya.loader.load(resInfo.url, Laya.Handler.create(_this, function (res) {
                    resolve(res);
                }), null, resInfo.type, priority, true, resInfo.group);
            });
        };
        /**
         * 异步加载一个资源
         *
         * @param url
         * @param priority
         */
        ResUtil.prototype.asyncLoadResByURL = function (url, priority) {
            var _this = this;
            if (priority === void 0) { priority = 1; }
            return new Promise(function (resolve) {
                Laya.loader.load(url, Laya.Handler.create(_this, function (res) {
                    resolve(res);
                }), null, null, priority, true, null);
            });
        };
        /**
         * 异步创建一个资源
         *
         * @param url
         */
        ResUtil.prototype.asyncCreateRes = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                Laya.loader.create(url, Laya.Handler.create(_this, function () {
                    resolve();
                }));
            });
        };
        /**
         * 根据组获取资源配置情况
         *
         * @param group
         */
        ResUtil.prototype.getGroupResInfosByGroupName = function (group) {
            var groupKeys = this.getKeysByGroup(group);
            if (!groupKeys) {
                return [];
            }
            var resInfos = [];
            for (var i = 0, len = groupKeys.length; i < len; i++) {
                var resInfo = this.getResInfoByName(groupKeys[i], group); //经量不要重复加载待图集的png
                resInfos.push(resInfo);
            }
            resInfos[resInfos.length - 1]["isLast_group"] = group;
            return resInfos;
        };
        /**
         * 根据资源名获取一个资源配置
         *
         * 目前支持 image json font sound 待类型扩展
         * @param name
         */
        ResUtil.prototype.getResInfoByName = function (name, group) {
            //console.log("getKeyRes:", name);
            var info = this.resKeyValues["" + name];
            if (info == null) {
                console.warn("key not found ", name);
                return null;
            }
            var resInfo = {};
            resInfo.url = "resource/" + info.url;
            switch (info.type) {
                case "image":
                    resInfo.type = Laya.Loader.IMAGE;
                    break;
                case "json":
                    resInfo.type = Laya.Loader.JSON;
                    break;
                case "font":
                    resInfo.type = Laya.Loader.FONT;
                    break;
                case "sound":
                    resInfo.type = Laya.Loader.SOUND;
                    break;
                case "atlas":
                case "sheet":
                    resInfo.type = Laya.Loader.ATLAS;
                    break;
            }
            if (info.url.indexOf("atlas") > -1) {
                resInfo.type = Laya.Loader.ATLAS;
            }
            resInfo.group = group;
            return resInfo;
        };
        /**
         * 根据组名获取资源量
         *
         * @param group
         */
        ResUtil.prototype.getKeysByGroup = function (group) {
            return this.groupsResKeys["" + group].keys.split(",");
        };
        /**
         * 销毁一个些组资源
         *
         * @param groups 组名s
         */
        ResUtil.prototype.destoryGroupArr = function (groups) {
            console.log("销毁资源组 -> ", groups);
            for (var i = 0, len = groups.length; i < len; i++) {
                this.destoryGroup(groups[i]);
            }
        };
        /**
         * 销毁一个组资源
         *
         * @param group 组名
         */
        ResUtil.prototype.destoryGroup = function (group) {
            console.log("销毁资源组 -> ", group);
            var resInfos = this.getGroupResInfosByGroupName(group);
            for (var i = 0, len = resInfos.length; i < len; i++) {
                Laya.loader.clearRes(resInfos[i].url);
                // Laya.loader.clearTextureRes(resInfos[i].url);
            }
            this.isSuccGroupNames[group] = null;
            // Laya.loader.clearResByGroup(group);
        };
        /**
         * 获取一个资源
         *
         * @param key
         */
        ResUtil.prototype.getRES = function (key) {
            var resInfo = this.getResInfoByName(key);
            if (resInfo == null) {
                console.warn("key  null", key);
                return null;
            }
            var res = Laya.loader.getRes(resInfo.url);
            if (res) {
                return res;
            }
            else {
                return null;
            }
        };
        /**
         * 异步加载一个资源s
         *
         * @param url
         */
        ResUtil.prototype.getAsyncRESByUrl = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                var resurl = url;
                if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1) {
                }
                else {
                    resurl = Laya.URL.basePath + url;
                }
                Laya.loader.load(resurl, Laya.Handler.create(_this, function (res) {
                    resolve(res);
                }));
            });
        };
        /**
         * 异步加载一个资源
         *
         * @param key
         */
        ResUtil.prototype.getAsyncRES = function (key) {
            var _this = this;
            var resInfo = this.getResInfoByName(key);
            return new Promise(function (resolve) {
                if (!resInfo) {
                    console.warn("not find key -->", key);
                    resolve(null);
                }
                else {
                    Laya.loader.load(Laya.URL.basePath + resInfo.url, Laya.Handler.create(_this, function (res) {
                        resolve(res);
                    }), null, resInfo.type, 1, true, resInfo.group);
                }
            });
        };
        /**
         * 加载一个资源
         *
         * @param resUrl 资源路径
         * @param type 资源类型
         * @param complet 加载完成
         */
        ResUtil.prototype.loadOneRes = function (resUrl, type, priority, group, complet) {
            Laya.loader.load(resUrl, Laya.Handler.create(this, complet), null, type, priority, true, group);
        };
        /****************************************3D************************************************** */
        /**
         * 根据url 和name获取一个模型
         */
        ResUtil.prototype.getModelByUrlAndName = function (url, name) {
            return new Promise(function (resolve) {
                url = "resource/assets/model/LayaScene_" + name + "/Conventional/" + name + ".lh";
                //console.log(url);
                Laya.loader.create(url, Laya.Handler.create(null, function (res) {
                    var sprite3d = Laya.Loader.getRes(url);
                    sprite3d.transform.localPosition = new Laya.Vector3(0, 0, 0);
                    var model = sprite3d; //.getChildByName(name) as Laya.Sprite3D;
                    var clone = model.clone();
                    resolve(clone);
                }));
            });
            // return 
        };
        /****************************************************************************************** */
        /**
        * 加载资源
        * @param {Array} resource: [{type: , url: }]
        * @param {Function} onResourceLoadComplete
        * @param {Function} onResourceLoadProgress
        * @param {any} onResourceLoadTarget
        */
        ResUtil.prototype.loadResource = function (resource, onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget) {
            Laya.loader.load(resource, Laya.Handler.create(onResourceLoadTarget, onResourceLoadComplete), Laya.Handler.create(onResourceLoadTarget, onResourceLoadProgress, null, false));
        };
        /**
         * 获取资源加载地址
         * @param {string} host 一类型资源放置位置
         * @param {string} name 资源名字
         * @param {string} resType 资源类型，默认png（png|jpg|sk|fnt|txt|json|mp4|mp3|wav）
         */
        ResUtil.prototype.getUrl = function (host, name, resType) {
            if (resType === void 0) { resType = Laya.Loader.IMAGE; }
            return host + "/" + name + "." + resType;
        };
        /**
         * 异步加载json文件
         * @param jsonUrl
         */
        ResUtil.prototype.asyncLoadJSON = function (jsonUrl) {
            var _this = this;
            return new Promise(function (resolve) {
                Laya.loader.load(jsonUrl, Laya.Handler.create(_this, function (jsonRes) {
                    resolve(jsonRes);
                }), Laya.Handler.create(_this, function (res) {
                }), Laya.Loader.JSON);
            });
        };
        /**
         * 加载皮肤文件
         */
        ResUtil.prototype.loadThms = function (thmUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, this.asyncLoadJSON(thmUrl)];
                        case 1:
                            _a.thmsConfig = _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ResUtil.instance_ = null;
        return ResUtil;
    }());
    window.ResUtil = ResUtil;
    /**
     * 常用工具库
     */
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        /**
         * 指定截取字符长度，返回截取后的显示字符
         *
         * @param {string} str
         * @param {number} cutNum
         * @returns {string}
         */
        Utils.cutOutStr = function (str, cutNum) {
            var reg = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
            var len = 0;
            var index = 0;
            for (var i = 0; i < str.length; i++) {
                var code = str.charCodeAt(i).toString(16);
                var oldLen = len;
                var oldIndex = index;
                // 计算长度和当前字符串下标
                if (code.length > 2) {
                    len += 2;
                }
                else {
                    len += 1;
                }
                ++index;
                // 判断emoji表情，一个emoji表现显示空间当做2个（实际是4个字符）
                if (reg.test(str.substr(i, 2))) {
                    ++i;
                    ++index;
                }
                // 和截取长度判断
                if (len > cutNum) {
                    index = oldIndex;
                    len = oldLen;
                    break;
                }
                else if (len == cutNum) {
                    break;
                }
            }
            var retStr = str.substr(0, index);
            if (index < str.length) {
                retStr = retStr + "...";
            }
            return retStr;
        };
        /****************************** Number工具 ******************************/
        /**
        * 获取从min-max之间的值
        *
        * @param min
        * @param max
        */
        Utils.random = function (min, max) {
            return Math.round(Math.random() * (max - min) + Number(min));
        };
        /**
         * 获取随机整数 getRandomInt(3,6)返回3~6之间的任意整数 向上取整的
         * @param start 起始值
         * @param end 终止值
         * @returns 随机整数
         */
        Utils.getRandomInCeil = function (start, end) {
            return (Math.ceil(Math.random() * (end - start)) + start);
        };
        /**
         * 将一个数分成几份
         *
         * @param total
         * @param len
         */
        Utils.getRandomArr = function (total, len) {
            var result = [];
            var pi = total / len;
            for (var i = 1; i < len; i++) {
                var ran = Math.random() * pi;
                var c1 = pi - ran;
                var c2 = pi + ran;
                if (c1 > 0 && c2 > 0) {
                    result[i - 1] = c1;
                    result[i] = c2;
                }
                else {
                    result[i - 1] = result[i] = pi;
                }
            }
            return result;
        };
        /**
         * 获取[start，end]的随机数，包含start，end
         *
         * @param start 起始值
         * @param end 结束值
         */
        Utils.getRandom = function (start, end) {
            return Math.floor(Math.random() * (end - start + 1) + start);
        };
        /**
         * 精确到小数点后多少位（舍尾）
         *
         * @param {number} 精确值
         * @param {number} 精确位数
         * @return {number}
         * */
        Utils.exactCount = function (exactValue, count) {
            if (count === void 0) { count = 0; }
            var num = Math.pow(10, count);
            var value = (exactValue * num) | 0;
            return value / num;
        };
        /**
        * 获取一个区间的随机数 (from, end)
        * @param {number} from 最小值
        * @param {number} end 最大值
        * @returns {number}
        */
        Utils.limit = function (from, end) {
            var min = Math.min(from, end);
            var max = Math.max(from, end);
            var range = max - min;
            return min + Math.random() * range;
        };
        /****************************** Time工具 ******************************/
        /**
         * 格式化时间获取 00:00:00
         * @param {number} time 时间戳差 秒
         */
        Utils.formatTime = function (time) {
            var str = "";
            var h = time / 3600;
            h = parseInt(h + "");
            var m = (time - h * 3600) / 60;
            m = parseInt(m + "");
            var s = time - h * 3600 - m * 60;
            s = parseInt(s + "");
            if (h > 0) {
                str += h + ":";
            }
            if (m > 9) {
                str += m + ":";
            }
            else {
                str += "0" + m + ":";
            }
            if (s > 9) {
                str += s + "";
            }
            else {
                str += "0" + s;
            }
            return str;
        };
        /**
         * 格式化时间获取 00天00时00分
         * @param {number} time 时间戳差 秒
         */
        Utils.formatTime2 = function (time) {
            var str = "";
            var d = time / 86400;
            d = parseInt(d + "");
            var h = (time - d * 86400) / 3600;
            h = parseInt(h + "");
            var m = (time - d * 86400 - h * 3600) / 60;
            m = parseInt(m + "");
            if (d > 0)
                str += d + "天";
            if (h > 9) {
                str += h + "时";
            }
            else {
                str += "0" + h + "时";
            }
            if (m > 9) {
                str += m + "分";
            }
            else {
                str += "0" + m + "分";
            }
            return str;
        };
        /**
         * 使用时间返回所需要的字符串格式"2016年06月12日"
         * @param {number} time 时间戳
         * @param {string} fmt 指定返回格式 "yyyy年MM月dd日" 或者 "yyyy-MM-dd hh:mm:ss" 或者 "dd-MM-yyyy hh:mm:ss"
         * @return {string} 指定指点格式字符串
         */
        Utils.millisecondsToDate = function (time, fmt) {
            var d = new Date(time);
            var o = {
                "M+": d.getMonth() + 1,
                "d+": d.getDate(),
                "h+": d.getHours(),
                "H+": d.getHours(),
                "m+": d.getMinutes(),
                "s+": d.getSeconds(),
                "q+": Math.floor((d.getMonth() + 3) / 3),
                "S": d.getMilliseconds() //毫秒
            };
            var week = {
                "0": "\u65e5",
                "1": "\u4e00",
                "2": "\u4e8c",
                "3": "\u4e09",
                "4": "\u56db",
                "5": "\u4e94",
                "6": "\u516d"
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            if (/(E+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[d.getDay() + ""]);
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        };
        /**
         * 比较两个时间戳是否处于同一天
         *
         * @param lastTime 时间戳1 毫秒
         * @param nowTime 时间戳2 毫秒
         */
        Utils.judgeIsOnTheSameDay = function (lastTime, nowTime) {
            if (!lastTime || !nowTime) {
                return false;
            }
            var a = 24 * 60 * 60 * 1000;
            var b = Math.floor(lastTime / a);
            var c = Math.floor(nowTime / a);
            if (b == c) {
                return true;
            }
            else {
                return false;
            }
        };
        /****************************** URL工具 ******************************/
        /**
         * 在url中获取参数值
         *
         * @param name 参数名
         */
        Utils.getQueryString = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(r[2]);
            return null;
        };
        /****************************** Array工具 ******************************/
        /**
         * 打乱数组中的元素
         *
         * @param {Array} arr
         */
        Utils.upset = function (arr) {
            var len = arr.length;
            var index;
            var tmp;
            for (var i = len - 1; i >= 0; i--) {
                index = (Math.random() * i) | 0;
                tmp = arr[i];
                arr[i] = arr[index];
                arr[index] = tmp;
            }
        };
        /**
         * 在一个数组中随机获取一个元素
         *
         * @param {Array} arr 数组
         * @returns 随机出来的结果
         */
        Utils.randomArray = function (arr) {
            var index = (Math.random() * arr.length) | 0;
            return arr[index];
        };
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
        Utils.ruleOutType = function (arr, ruleParam, outNull, ruleIndexArr, rpType, rPValue) {
            var newArr = arr.filter(function (value, index) {
                if (outNull)
                    if (!value)
                        return false;
                if (ruleIndexArr && ruleIndexArr.length != 0) {
                    for (var i = 0, len = ruleIndexArr.length; i < len; i++) {
                        if (ruleIndexArr[i] == index)
                            return false;
                    }
                }
                if (rpType) {
                    if (value[rpType] == rPValue)
                        return false;
                }
                if (value == ruleParam)
                    return false;
                return true;
            });
            return newArr;
        };
        /****************************** Object工具 ******************************/
        /**
         * 取出obj的长度
         * 元素数目
         */
        Utils.getObjLength = function (map) {
            var len = 0;
            for (var obj in map) {
                if (map[obj]) {
                    len++;
                }
            }
            return len;
        };
        /**
         * 复制一组数据(简单Object、string、number、Array、boolean)；
         * 不可复制显示对象和Function
         *
         * @param obj
         */
        Utils.copy = function (obj) {
            var result;
            if (obj instanceof Object) {
                result = obj instanceof Array ? [] : {};
                Object.keys(obj).forEach(function (item) {
                    result[item] = Utils.copy(obj[item]);
                    // result[item] = obj[item];
                });
            }
            else {
                result = obj;
            }
            return result;
        };
        /**
         * 将对象转换为get参数的url类型例如 {a:1,b:2} => "a=1&b=2"
         * 注意只能是一级的参数query
         *
         * @param query
         */
        Utils.querStr = function (query) {
            return Object.keys(query)
                .map(function (key) { return query[key] && encodeURIComponent(key) + "=" + encodeURIComponent(query[key]); })
                .join('&');
        };
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
        Utils.getOffestAngle = function (px, py, mx, my, offRoa) {
            if (offRoa === void 0) { offRoa = 0; }
            var x = Math.abs(px - mx);
            var y = Math.abs(py - my);
            var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            z = z == 0 ? 1 : z;
            var cos = y / z;
            var radina = Math.acos(cos); //用反三角函数求弧度
            var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度
            if (mx > px && my > py) { //鼠标在第四象限
                angle = 90 - angle;
            }
            if (mx == px && my > py) { //鼠标在y轴负方向上
                angle = 90;
            }
            if (mx == px && my < py) { //鼠标在y轴正方向上
                angle = 270;
            }
            if (mx > px && my == py) { //鼠标在x轴正方向上
                angle = 0;
            }
            if (mx < px && my > py) { //鼠标在第三象限
                angle = 90 + angle;
            }
            if (mx < px && my == py) { //鼠标在x轴负方向
                angle = 180;
            }
            if (mx < px && my < py) { //鼠标在第二象限
                angle = 270 - angle;
            }
            if (mx > px && my < py) {
                angle = 270 + angle;
            }
            return (angle + offRoa) % 360;
        };
        /**
         * 弧度制转换为角度值
         *
         * @param {number} radian
         * @returns {number}
         */
        Utils.getAngle = function (radian) {
            return 180 * radian / Math.PI;
        };
        /**
         * 角度值转换为弧度制
         *
         * @param {number} angle
         */
        Utils.getRadian = function (angle) {
            return angle / 180 * Math.PI;
        };
        /**
         * 获取两点间弧度
         * @param {Point} p1
         * @param {Point} p2
         * @returns {number}
         */
        Utils.getRadianTwoPoint = function (p1, p2) {
            var xdis = p2.x - p1.x;
            var ydis = p2.y - p1.y;
            return Math.atan2(ydis, xdis);
        };
        /**
         * 获取两点间旋转角度（顺时针）
         *
         * @param {Point} p1
         * @param {Point} p2
         * @returns {number}
         */
        Utils.getAngleTwoPoint = function (p1, p2) {
            var vy = p2.y - p1.y;
            var vx = p2.x - p1.x;
            var ang;
            if (vy == 0) {
                if (vx < 0) {
                    return 180;
                }
                return 0;
            }
            if (vx == 0) { //正切是vy/vx所以vx==0排除
                if (vy > 0) {
                    ang = 90;
                }
                else if (vy < 0) {
                    ang = 270;
                }
                return ang;
            }
            ang = this.getAngle(Math.atan(Math.abs(vy) / Math.abs(vx)));
            if (vx > 0) {
                if (vy < 0) {
                    ang = 360 - ang;
                }
            }
            else {
                if (vy > 0) {
                    ang = 180 - ang;
                }
                else {
                    ang = 180 + ang;
                }
            }
            return ang;
        };
        /**
         * 获取两点间距离
         *
         * @param {Point} p1
         * @param {Point} p2
         * @returns {number}
         */
        Utils.getDistance = function (p1, p2) {
            var disX = p2.x - p1.x;
            var disY = p2.y - p1.y;
            var disQ = Math.pow(disX, 2) + Math.pow(disY, 2);
            return Math.sqrt(disQ);
        };
        /**
         * 计算速度移动方向
         *
         * @param startPoint
         * @param endPoint
         * @param speed
         */
        Utils.getRunDirection = function (startPoint, endPoint, speed) {
            if (speed === void 0) { speed = 1; }
            var disX = endPoint.x - startPoint.x;
            var disY = endPoint.y - startPoint.y;
            var dis = this.getDistance(startPoint, endPoint);
            dis = dis == 0 ? 1 : dis;
            var v1 = disX / dis * speed;
            var v2 = disY / dis * speed;
            startPoint = null;
            endPoint = null;
            return [v1, v2];
        };
        /**
         * 将角度转换到0-360
         *
         * @param angle
         */
        Utils.randomTo360 = function (angle) {
            angle = angle % 360;
            if (angle < 0) {
                angle += 360;
            }
            return angle;
        };
        /*********************************向量相关  待运用测试 */
        /**
         * 求向量模
         *
         * @param v
         */
        Utils.getVertorModel = function (v) {
            return Math.sqrt(v.x * v.x + v.y * v.y);
        };
        /**
         * 求向量模向量
         *
         * @param v
         * @param isNewVertor 是否创建新向量返回
         */
        Utils.getModelVertor = function (v, isNewVertor) {
            if (isNewVertor === void 0) { isNewVertor = false; }
            var model = Utils.getVertorModel(v);
            if (isNewVertor) {
                return { x: v.x / model, y: v.y / model };
            }
            v.x /= model;
            v.y /= model;
            return v;
        };
        /**
         * 求向量垂直模向量
         *
         * @param v
         */
        Utils.getVerticalVertor = function (v) {
            var a = v.y * v.y / (v.x * v.x + v.y * v.y);
            a = Math.sqrt(a);
            var b = -(a * v.x) / v.y;
            return [{ x: a, y: b }, { x: -a, y: -b }];
        };
        /**
         * 向量点乘数
         *
         * @param v
         * @param num
         * @param isNewVertor 是否创建新向量返回
         */
        Utils.vertorMultiplyNumber = function (v, num, isNewVertor) {
            if (isNewVertor === void 0) { isNewVertor = false; }
            if (isNewVertor) {
                return { x: v.x * num, y: v.y * num };
            }
            v.x *= num;
            v.y *= num;
            return v;
        };
        return Utils;
    }());
    window["Utils"] = Utils;
    /**
     * 百页窗口模式
     *
     * 目前默认 500 毫秒时间
     */
    var RectViewLoad = /** @class */ (function (_super) {
        __extends(RectViewLoad, _super);
        function RectViewLoad() {
            var _this = _super.call(this) || this;
            /**
             * 动画时间
             */
            _this.animationTime = 500;
            /**
             * 百页高度
             */
            _this.rectH = 300;
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            //
            _this.initView();
            return _this;
        }
        /**
         * 初始化
         */
        RectViewLoad.prototype.initView = function () {
            var startY, startX;
            var w, h = this.rectH, whL;
            w = Laya.stage.width * 1.8; //宽度为屏幕宽度的1.414倍 1.8
            whL = Laya.stage.width > Laya.stage.height ? Laya.stage.width : Laya.stage.height; //最长的长度
            whL = Math.floor(whL * 1.5) + 1; //需要的覆盖的长度
            this.len = Math.floor(whL / h) + 2; //浮动2个
            startY = 0;
            startX = -this.rectH / 1.5;
            //
            for (var i = 0; i < this.len; i++) {
                var rect = new Laya.Sprite();
                rect.graphics.drawRect(0, 0, w, h, "#000000");
                rect.width = w, rect.height = h;
                rect.pivotY = h / 2;
                rect.rotation = -45;
                rect.scaleY = 0;
                rect.x = startX;
                rect.y = h * i + startY;
                this.addChild(rect);
            }
        };
        /**
         * 开启
         * @param caller
         * @param method
         */
        RectViewLoad.prototype.open = function (caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, { scaleY: 1 }, this.animationTime, Laya.Ease.sineIn, Laya.Handler.create(caller, method));
                }
                else {
                    Laya.Tween.to(item, { scaleY: 1 }, this.animationTime, Laya.Ease.sineIn);
                }
            }
        };
        /**
         * 关闭
         * @param caller
         * @param method
         */
        RectViewLoad.prototype.close = function (caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, { scaleY: 0 }, this.animationTime, Laya.Ease.sineOut, Laya.Handler.create(caller, method));
                }
                else {
                    Laya.Tween.to(item, { scaleY: 0 }, this.animationTime, Laya.Ease.sineOut);
                }
            }
        };
        return RectViewLoad;
    }(Laya.Sprite));
    window.RectViewLoad = RectViewLoad;
    /**
     * 窗口管理工具
     *
     * 目前支持
     *
     * 百叶窗模式
     */
    var ViewLoadTools = /** @class */ (function () {
        function ViewLoadTools() {
        }
        ViewLoadTools.getInstance = function () {
            if (!ViewLoadTools.instance_) {
                ViewLoadTools.instance_ = new ViewLoadTools();
            }
            return ViewLoadTools.instance_;
        };
        /**
         * 百叶窗切换场景
         *
         * @param complete 窗口切换完成调用
         */
        ViewLoadTools.prototype.showRectViewLoadSwitchScene = function (complete, content) {
            if (content === void 0) { content = Laya.stage; }
            if (!this.com_RectViewLoad)
                this.com_RectViewLoad = new RectViewLoad();
            this.com_RectViewLoad.mouseEnabled = true;
            content.addChild(this.com_RectViewLoad);
            this.com_RectViewLoad.open(this, function () {
                complete && complete();
            });
        };
        /**
         * 关闭百叶窗
         *
         * @param complete
         */
        ViewLoadTools.prototype.closeRectViewLoad = function (complete) {
            var _this = this;
            if (!this.com_RectViewLoad)
                return;
            this.com_RectViewLoad.close(this, function () {
                complete && complete();
                _this.com_RectViewLoad.removeSelf();
            });
        };
        return ViewLoadTools;
    }());
    window.ViewLoadTools = ViewLoadTools;
}());