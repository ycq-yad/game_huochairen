/**
 * 动画管理单列
 */
export default class AnimationManager {
    private constructor() {

    }

    private static ins: AnimationManager;
    public static get instance(): AnimationManager {
        if (AnimationManager.ins == null) {
            AnimationManager.ins = new AnimationManager();
        }
        return AnimationManager.ins;
    }

    /**
     * 钟摆动画
     * @param target 目标对象
     * @param caller 执行域(this)
     * @param range 摆动幅度
     * @param duration  单位幅度时间
     */
    public pendulumAni(target: laya.ui.UIComponent, caller: any, range: number, duration: number) {
        let ani = () => {
            Laya.Tween.to(target, { rotation: range }, duration, null, Laya.Handler.create(caller, () => {
                Laya.Tween.to(target, { rotation: range * -1 }, duration * 2, null, Laya.Handler.create(caller, () => {
                    Laya.Tween.to(target, { rotation: 0 }, duration, null, Laya.Handler.create(caller, () => {
                        ani();
                    }));
                }));
            }));
        }
        ani();
    }

    /**
     * 转圈圈光效动画
     * @param target 目标对象
     * @param caller 执行域(this)
     * @param duration ?花费的时间
     */
    public runaroundTween(target: laya.ui.UIComponent, caller: any, duration: number = 2000) {
        target.visible = true;
        target.rotation = 0;
        let tw = Laya.Tween.to(target, { rotation: 360 }, duration, null, null, 0, false, false);
        tw.repeat = 0;
    }

    public btnScaleAniLoop(target: laya.ui.UIComponent, caller: any, startScale: number = 1, endScale: number = 1.2, duration: number = 500, ease?: Function) {
        target.scale(startScale, startScale);
        let fun = () => {
            Laya.Tween.to(target, { scaleX: endScale, scaleY: endScale }, duration, ease, Laya.Handler.create(caller, () => {
                Laya.Tween.to(target, { scaleX: startScale, scaleY: startScale }, duration, ease, Laya.Handler.create(caller, () => {
                    fun();
                }));
            }));
        }
        fun();
    }

    public tipPointShake(target: laya.ui.UIComponent, play: boolean) {
        if (play) {
            Laya.Tween.clearAll(target);
            Laya.timer.clearAll(target);
            target.rotation = 0;
            let ani = (num: number) => {
                Laya.Tween.to(target, { rotation: 10 }, 100, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(target, { rotation: -10 }, 200, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(target, { rotation: 0 }, 100, null, Laya.Handler.create(this, () => {
                            num--;
                            if (num) {
                                ani(num);
                            } else {
                                let time = Utils.getRandom(1000, 3000);
                                Laya.timer.once(time, target, () => { ani(2); });
                            }
                        }));
                    }));
                }));
            }
            let delay = Utils.getRandom(500, 1000);
            Laya.timer.once(delay, target, () => { ani(2); });
        } else {
            Laya.timer.clearAll(target);
            Laya.Tween.clearAll(target);
            target.rotation = 0;
        }
    }

    /**
     * 缩放动画(主要用于正确图标的出现)
     * @param target 目标对象
     * @param caller 执行域(this)
     * @param duration ?花费的时间，单位毫秒
     * @param complete ?结束回调函数
     * @param props ?变化的属性列表
     * @param ease ?缓动类型，默认为匀速运动
     */
    public scaleTween(target: laya.ui.UIComponent, caller: any, duration: number = 500, complete?: Function, props?: any, ease?: Function) {
        target.visible = true;
        target.scale(0.8, 0.8);
        Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, () => {
            complete && complete();
        }));
    }

    public creatBoonAnimation(url: string) {
        return new Promise<Laya.Skeleton>((resolve) => {
            let boomAnimation = new Laya.Skeleton();
            boomAnimation.load(url, Laya.Handler.create(this, (): void => {
                if (!boomAnimation.player) {
                    resolve(null);
                } else {
                    boomAnimation.player.playbackRate = 1;
                    resolve(boomAnimation);
                }
            }));
        });
    }

    /**
     * 获取图集动画对象
     * 
     * @param url 
     */
    public getAtlasAnimation(url: string, fex: string): Promise<Laya.Animation> {
        url = url + fex;
        return new Promise<Laya.Animation>((resolve) => {
            let roleAni = new Laya.Animation();
            // 加载动画图集，加载成功后执行回调方法
            roleAni.loadAtlas(url, Laya.Handler.create(null, () => {
                resolve(roleAni);
            }));
        });
    }



    /**
     * 缩放动画(主要用于正确图标的出现)
     * @param target 目标对象
     * @param caller 执行域(this)
     * @param duration ?花费的时间，单位毫秒
     * @param complete ?结束回调函数
     * @param props ?变化的属性列表
     * @param ease ?缓动类型，默认为匀速运动
     */
    public scaleBTween(target: laya.ui.UIComponent, caller: any, duration: number = 500, complete?: Function, props?: any, ease?: Function) {
        target.scale(1.1, 1.1);
        Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, () => {
            complete && complete();
        }));
    }

    /**
     * 显示2d 骨骼动画
     * @param url	动画文件路径
     * @param dbBox	动画容器
     * @param index	动画索引
     * @param loop	是否循环播放
     * @param rate	播放速率
     */
    private show2dBoonAnimation(url: string, dbBox: Laya.Box, index: number, loop: boolean, rate: number, x: number, y: number, rotation: number) {
        return new Promise(resolve => {
            let self = this;
            dbBox.removeChildren();
            let boomAnimation = new Laya.Skeleton();
            boomAnimation.load(url, Laya.Handler.create(self, () => {
                if (!boomAnimation.player) {
                    resolve();
                    return;
                }
                boomAnimation.player.playbackRate = rate;
                //当skeleton.play(0,true) 第二个参数为true时，每播放完一遍龙骨动画，会自动触发Event.COMPLET事件
                //当skeleton.play(0,false) 第二个参数为false时，当前动画播放完成后，会自动触发Event.STOPED事件，而不是Event.COMPLETE事件
                boomAnimation.player.once(Laya.Event.STOPPED, self, () => {
                    // self.box_db.removeChild(boomAnimation);
                    resolve();
                });
                boomAnimation.scale(2, 2);
                dbBox.addChild(boomAnimation);
                boomAnimation.x = x; boomAnimation.y = y;
                boomAnimation.rotation = rotation;
                boomAnimation.play(index, loop);
            }));
        });
    }

    /**
     * 显示对象闪烁效果
     * @param target 目标对象
     * @param prefix 资源前缀
     * @param caller 执行域(this)
     */
    public displayTwinkle(target: Laya.Image | Laya.Button, prefix: string, caller: any) {
        let index = 1;
        Laya.timer.loop(500, caller, () => {
            target.skin = prefix + index + ".png";
            index = index == 1 ? 2 : 1;
        });
    }

    /**
     * 显示对象闪烁效果
     * @param target 目标对象
     * @param prefix 资源前缀
     * @param caller 执行域(this)
     */
    public frameAni(target: Laya.Image, prefix: string, caller: any, frameNum: number, time: number = 100) {
        let index = 1;
        Laya.timer.loop(time, caller, () => {
            target.skin = prefix + index + ".png";
            index++;
            if (index > frameNum) index = 1;
        });
    }
}