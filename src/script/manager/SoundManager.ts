/**
* 音频播放管理
*/
export default class SoundManager {

    private constructor() {

    }

    private static ins: SoundManager;
    public static get instance(): SoundManager {
        if (!SoundManager.ins) SoundManager.ins = new SoundManager();
        return SoundManager.ins;
    }

    /** 当前正在播放的背景音乐 */
    public curBgMusic: SoundConst;
    /** 背景音乐 */
    private soundChannel: laya.media.SoundChannel;

    private _musicOpen = true;
    /** 背景音乐开关 */
    set musicOpen(value: boolean) {
        this._musicOpen = value;
        if (value) {
            this.playBgMusic(this.curBgMusic);
        } else {
            this.stopBgMusic();
        }
    }
    get musicOpen(): boolean {
        return this._musicOpen;
    }

    private _soundOpen = true;
    /** 音效开关 */
    set soundOpen(_soundOpen: boolean) {
        this._soundOpen = _soundOpen;
    }
    get soundOpen(): boolean {
        return this._soundOpen;
    }

    /** 播放背景音乐 */
    public async playBgMusic(soundName?: SoundConst) {
        console.log("开始播放Bgm...", soundName, this.curBgMusic);
        if (!this._musicOpen) return;
        if (!soundName && !this.curBgMusic) return;
        // if (soundName) {
        //     // if (this.curBgMusic != soundName) {
        //     //     this.curBgMusic = soundName;
        //     //     // SoundUtil.getInstance().bgm = soundName;
        //     // } else {
        //     //     // SoundUtil.getInstance().playBgMusic();
        //     // }
        //     if (soundName && this.curBgMusic != soundName) this.curBgMusic = soundName;
        // } else {
        //     // SoundUtil.getInstance().bgm = this.curBgMusic;
        //     // SoundUtil.getInstance().playBgMusic();
        // }
        if (soundName) {
            this.curBgMusic = soundName;
            let _url = ResUtil.getIntance().defaultOriginUrl + "resource/assets/sound/" + this.curBgMusic + ".mp3";
            this.soundChannel = await Laya.SoundManager.playMusic(_url, 0);
        } else {
            if (this.soundChannel) this.soundChannel.resume();
        }
        // if (soundName && this.curBgMusic != soundName) this.curBgMusic = soundName;
        // let _url = ResUtil.getIntance().defaultOriginUrl + "resource/assets/sound/" + this.curBgMusic + ".mp3";
        // this.soundChannel = await Laya.SoundManager.playMusic(_url, 0);
        // console.log("url = " + _url, this.soundChannel.isStopped);
    }

    /** 暂停播放 */
    public pauseBgMusic() {
        if (this.soundChannel) this.soundChannel.pause();
    }

    /** 停止背景音乐 */
    public stopBgMusic() {
        // SoundUtil.getInstance().stopBgMusic();
        console.log("停止播放Bgm...");
        // Laya.SoundManager.stopMusic();
        if (this.soundChannel) this.soundChannel.stop();
    }

    /** 播放音效 */
    public playEffect(soundName: SoundConst) {
        // SoundUtil.getInstance().playEffect(soundName);
        if (!this._soundOpen || !soundName) return;
        let _url;
        if (DeviceUtil.isNative()) {
            _url = "resource/assets/sound/ogg/" + soundName + ".ogg";
        } else {
            _url = "resource/assets/sound/" + soundName + ".mp3";
        }
        Laya.SoundManager.playSound(_url, 1);
    }
}

export enum SoundConst {
    /** 背景音乐 */
    HomeBgm = "",
    /** 按钮点击音效 */
    BtnClick = "button",

    /************************** 划线解密 **************************/

    /** 摔杯达人音乐 */
    GameBgm2 = "bg",
    /** 画线 */
    Huaxian = "huaxian",
    Win2 = "win"
}