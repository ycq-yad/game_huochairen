import GameConfig from "./GameConfig";
import ViewMgr from "./script/manager/ViewMgr";
import { MiniManeger } from "./script/minigame/MiniManeger";
import SoundManager from "./script/manager/SoundManager";
import { GameData } from "./script/common/GameData";
import GameEvent from "./script/common/GameEvent";
import ConfigManager from "./script/manager/ConfigManager";
import GameMgr from "./script/manager/GameMgr";
import GameLoadingView from "./script/loading/GameLoadingView";
import GameInfoManager from "./script/manager/GameInfoManager";
import { MZGameMgr } from "./script/minigame/MZGameMgr";
import { TTGameMgr } from "./script/minigame/TTGameMgr";
import { QQGameMgr } from "./script/minigame/QQGameMgr";
import { WXGameMgr } from "./script/minigame/WXGameMgr";
import DYChannelMgr from "./script/manager/channel/DYChannelMgr";

class Main extends BaseContent {

	constructor() {
		super({ width: 1080, height: 1920, exportSceneToJson: true });
		//
		GameConfig.init();

		if (MiniManeger.ins == null) {
			if (DeviceUtil.isWXMiniGame()) {
				MiniManeger.ins = new WXGameMgr();
			} else if (DeviceUtil.isTTMiniGame()) {
				MiniManeger.ins = new TTGameMgr();
			} else if (DeviceUtil.isMZMiniGame()) {
				MiniManeger.ins = new MZGameMgr();
			} else if (DeviceUtil.isQQMiniGame()) {
				MiniManeger.ins = new QQGameMgr();
			} else {
				MiniManeger.ins = new MiniManeger();
			}
		}

		//校验平台
		this.checkPlatform();

		let onShow = (obj) => {
			console.log("onShow obj = ", obj);
			SoundManager.instance.playBgMusic();
		}

		let onHide = (obj) => {
			console.log("onHide obj = ", obj);
			SoundManager.instance.pauseBgMusic();
		}

		let onAudioInterruptionBegin = (res) => {
			console.log("onAudioInterruptionBegin");
		};

		let onAudioInterruptionEnd = (res) => {
			console.log("onAudioInterruptionEnd");
		};

		if (DeviceUtil.isMZMiniGame()) {
			MiniManeger.instance.onShow(onShow);
			MiniManeger.instance.onHide(onHide);
			MiniManeger.instance.initMiniGame();
		} else if (DeviceUtil.isMiniGame()) {
			MiniManeger.instance.onShow(onShow);
			MiniManeger.instance.onHide(onHide);
			MiniManeger.instance.onAudioInterruptionBegin(onAudioInterruptionBegin);
			MiniManeger.instance.onAudioInterruptionEnd(onAudioInterruptionEnd);
			MiniManeger.instance.initMiniGame();
		} else {
			Laya.stage.on(Laya.Event.FOCUS, this, () => {
				console.log("获取焦点");
				onShow(null);
				EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
			});
			Laya.stage.on(Laya.Event.BLUR, this, () => {
				console.log("失去焦点");
				onHide(null);
				EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
			});
		}

		///计数count
		// Laya.timer.loop(1000, this, () => {
		// 	console.log(Laya.HashConst.count);
		// });
	}

	/**
	 * 检验平台
	 */
	private checkPlatform(): void {
		console.log("检验平台---");
		let self = this;
		//h5
		if (window["loadingH5"]) {
			window["loadingH5"](100);
			// 初始化
			// loadLib("vconsole.min.js");
		}
		if (window["loadingView"]) {
			window["loadingView"].loading(100);
		}

		//判断平台使用不同的地址资源
		let resUrl: string = "./";
		GameData.getInstance().gameVersion = 1001;
		if (DeviceUtil.isWXMiniGame()) {
			GameData.getInstance().gameVersion = 1001;
			GameData.getInstance().resVersion = '1_9/';
			GameData.getInstance().MinigameResUrlRoot += "wx_res/";
			GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "wx_res_v_z_" + GameData.getInstance().resVersion;
			resUrl = GameData.getInstance().MinigameResAllUrl;
			ResUtil.getIntance().defaultOriginUrl = resUrl;
			ResUtil.getIntance().addVersionPrefix(resUrl);
		} else if (DeviceUtil.isTTMiniGame()) {
			GameData.getInstance().gameVersion = 1001;
			GameData.getInstance().resVersion = '1_3/';
			GameData.getInstance().MinigameResUrlRoot += "tt_res/";
			GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "tt_res_v_z_" + GameData.getInstance().resVersion;
			resUrl = GameData.getInstance().MinigameResAllUrl;
			ResUtil.getIntance().defaultOriginUrl = resUrl;
			ResUtil.getIntance().addVersionPrefix(resUrl);
		} else if (DeviceUtil.isMZMiniGame()) {
			GameData.getInstance().gameVersion = 1001;
			GameData.getInstance().resVersion = '1_4/';
			GameData.getInstance().MinigameResUrlRoot += "mz_res/";
			GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "mz_res_v_z_" + GameData.getInstance().resVersion;
			resUrl = GameData.getInstance().MinigameResAllUrl;
			ResUtil.getIntance().defaultOriginUrl = resUrl;
			ResUtil.getIntance().addVersionPrefix(resUrl);
		} else if (DeviceUtil.isQQMiniGame()) {
			GameData.getInstance().gameVersion = 1001;
			GameData.getInstance().resVersion = '1_3/';
			GameData.getInstance().MinigameResUrlRoot += "qq_res/";
			GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "qq_res_v_z_" + GameData.getInstance().resVersion;
			resUrl = GameData.getInstance().MinigameResAllUrl;
			ResUtil.getIntance().defaultOriginUrl = resUrl;
			ResUtil.getIntance().addVersionPrefix(resUrl);
		} else {
			//剩余其他的平台
		}
		self.initDebug();
		self.loadPreLoadRes(resUrl + 'configs/');
	}

	/**
	 * 加载预加载资源
	 */
	private loadPreLoadRes(resUrl: string) {
		let url = resUrl;
		super.initInfos(url + "infos.json" + ConfigManager.instance.randomVersion);
	}

	protected enableFileConfig(): void {
		// console.log(BaseConst.infos);
		GameData.getInstance().initConfig(BaseConst.infos);
		if (DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
			MiniManeger.instance.infos = BaseConst.infos["platformInfos"];
		}

		Laya.AtlasInfoManager.enable("fileconfig.json" + ConfigManager.instance.randomVersion, Laya.Handler.create(this, async () => {
			if (DeviceUtil.isMiniGame()) {
				if (DeviceUtil.isWXMiniGame()) {
					DYChannelMgr.instance.initConfig(BaseConst.infos["channelInfos"]);
					await DYChannelMgr.instance.loginGame();
				} else {
					await MiniManeger.instance.loginGame();
				}
				console.log("用户信息 : ", GameData.getInstance().userInfo);
				this.loadRes();
			} else {
				this.loadRes();
			}
		}));
	}

	/**
	 * 加载资源
	 */
	protected async loadRes() {
		let strogeVersion = Laya.LocalStorage.getItem('strogeVersion');
		if (GameData.getInstance().strogeVersion != strogeVersion) {
			Laya.LocalStorage.clear();
		}
		Laya.LocalStorage.setItem('strogeVersion', GameData.getInstance().strogeVersion);

		if (!GameData.getInstance().userInfo.openId) {
			let openId = Laya.LocalStorage.getItem("openId");
			if (openId) {
				GameData.getInstance().userInfo.openId = openId;
			} else {
				openId = "fire2" + Utils.getRandom(10000, 99999);
				GameData.getInstance().userInfo.openId = openId;
				Laya.LocalStorage.setItem("openId", openId);
			}
			if (!GameData.getInstance().userInfo.nick)
				GameData.getInstance().userInfo.nick = openId;
		}
		//
		ViewMgr.instance.loadingView = new GameLoadingView();
		SceneManager.getInstance().openSceneInstance(ViewMgr.instance.loadingView);
		// return
		if (!DeviceUtil.isMZMiniGame()) {
			MiniManeger.instance.showBannerAd(null);
			MiniManeger.instance.hideBanner();
		}

		let resUrl = "";
		if (DeviceUtil.isMiniGame()) {
			resUrl = GameData.getInstance().MinigameResAllUrl;
		}

		console.log("loadRes---", resUrl);
		await ResUtil.getIntance().loadThms(resUrl + "resource/default.thm.json" + ConfigManager.instance.randomVersion);
		await ResUtil.getIntance().loadRESConfig(resUrl + "resource/default.res.json" + ConfigManager.instance.randomVersion);

		ViewMgr.instance.registerBufferLoading();
		await ConfigManager.instance.initConfigs();
		await GameInfoManager.getInstance().selectAllGameInfo();
		await GameMgr.instance.initData();
		if (GameData.getInstance().isTestVersion) {
			GameData.getInstance().level = { "103": { passLv: 50, curLv: 50 } };
		}
		let resArr = ["panel", "public"];
		this.enterHome(resArr);
	}

	private enterHome(resArr) {
		console.log("enterHome", Laya.stage.width, Laya.stage.height, Laya.Browser.width, Laya.Browser.height);
		resArr.push("home");
		ResUtil.getIntance().loadGroups(resArr, async () => {
			console.log("res load completed!!!");
			ViewMgr.instance.loadingView.showAnimation();
		}, (index, len) => {
			ViewMgr.instance.loadingView.progress(index, len);
		});
	}
}
//激活启动类
new Main();
