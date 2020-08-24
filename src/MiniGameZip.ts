/**
 * 小游戏的压缩工具
 */
export class MiniGameZip {
    //设置cdn地址

    private static instance_: MiniGameZip = null;
    public static getIntance(): MiniGameZip {
        if (!MiniGameZip.instance_) {
            MiniGameZip.instance_ = new MiniGameZip();
        }
        return MiniGameZip.instance_;
    }

    public isZip: boolean = true;
    public async unLoadZip(baseURL: string, version: string) {

        let qq;
        if (window['qq']) {
            qq = window['qq']
        } else if (window['wx']) {
            qq = window['wx']
        } else {
            return;
        }
        //设置一个本地用户文件缓存目录
        //https://developers.weixin.qq.com/minigame/dev/tutorial/ability/file-system.html
        let cacheURL = qq.env.USER_DATA_PATH + '/resource/'
        //设置一个资源包的版本号，可以写死也可以联网热更新
        let bundleVer = 'resource';
        // 组装资源包路径
        let bundleURI = qq.env.USER_DATA_PATH + '/bundle' + bundleVer + '.zip'
        //挂载对象

        //本地资源加载后创建一个资源加载等待页面
        // let initialPage = new Laya.InitialPage()
        //资源包缓存主逻辑
        //https://developers.weixin.qq.com/minigame/dev/document/file/wx.getFileSystemManager.html
        let clientBundleVer = qq.getStorageSync('bundleVer')
        if (clientBundleVer == bundleVer) {
            console.log('素材包版本匹配');
        } else {
            let fs = qq.getFileSystemManager()
            let isCached = await new Promise((rs, rj) => {
                fs.access({
                    path: bundleURI,
                    success(evt) {
                        console.log('素材包已下载')
                        rs(true)
                    },
                    fail(evt) {
                        console.log('素材包不存在')
                        rs(false)
                    }
                })
            })
            if (!isCached) {
                console.log('素材包已开始下载')
                await new Promise((rs, rj) => {
                    function onProgressUpdate(res) {
                        console.log('下载进度', res.progress)
                        console.log('已经下载的数据长度', res.totalBytesWritten)
                        console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                    }
                    const downloadTask = qq.downloadFile({
                        url: baseURL,
                        // filePath: bundleURI,
                        success(evt) {
                            console.log('素材包下载完毕')
                            bundleURI = evt.tempFilePath
                            downloadTask.offProgressUpdate(onProgressUpdate)
                            rs()
                        },
                        fail(evt) {
                            console.log('素材包下载取消')
                            downloadTask.offProgressUpdate(onProgressUpdate)
                            rj()
                        }
                    })
                    downloadTask.onProgressUpdate(onProgressUpdate)
                })
            }
            let isDirExists = await new Promise((rs, rj) => {
                fs.access({
                    path: cacheURL,
                    success(evt) {
                        console.log('缓存目录已存在')
                        rs(true)
                    },
                    fail(evt) {
                        console.log('缓存目录不存在')
                        rs(false)
                    }
                })
            })
            if (isDirExists) {
                console.log('删除旧的缓存文件')
                let cleanDir = function (target) {
                    return new Promise(async (rs, rj) => {
                        let list = fs.readdirSync(target)
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].includes('.')) {
                                await new Promise((rs, rj) => {
                                    fs.unlink({
                                        filePath: target + list[i],
                                        complete() {
                                            rs()
                                        }
                                    })
                                })
                            } else {
                                await cleanDir(target + list[i] + '/')
                            }
                        }
                        fs.rmdirSync(target)
                        rs()
                    })
                }
                await cleanDir(cacheURL)
            }

            fs.mkdirSync(cacheURL)
            console.log('缓存目录已新建')
            await new Promise((rs, rj) => {
                fs.unzip({
                    zipFilePath: bundleURI,
                    targetPath: cacheURL,
                    success() {
                        console.log('资源包解压缩完毕')
                        rs()
                    },
                    fail(err) {
                        console.log('资源包解压缩失败', err)
                        rj(err)
                    }
                })
            })
            fs.unlink({
                filePath: bundleURI
            })
            qq.setStorageSync('bundleVer', bundleVer)
        }
        //此时修改basePath为本地的缓存路径
        //这时所有文件将从本地读取，这样做原因是laya.wxmini.js无法自动缓存除声音图片外的文件，
        //即使使用downloadfile缓存也无法通过loader加载
        //如果用微信本身的api播放声音，声音当然就无法自动缓存了。通过使用上述缓存方案可以统一缓存系统，两者api可以同时调用缓存的文件
        //总之就是在LayaLoader加载之前将素材转移到客户端，这样不用修改laya本身的文件，也解决了诸多问题
        // Laya.URL.basePath = qq.env.USER_DATA_PATH + '/';
    }

    public async unLoadZipTest(baseURL: string) {
        return new Promise((rs, rj) => {
            let wx;
            if (window['qq']) {
                wx = window['qq']
            } else if (window['wx']) {
                wx = window['wx']
            } else {
                rj();
                return;
            }

            var fileManager = wx.getFileSystemManager();
            var downloadTask = wx.downloadFile({
                url: baseURL,
                success: function (res) { // 下载成功
                    console.log(' 下载成功', res);
                    var filePath = res.tempFilePath; // 下载路径
                    fileManager.unzip({
                        zipFilePath: filePath,   // 资源下载后路径
                        targetPath: wx.env.USER_DATA_PATH,  // 解压资源存放路径
                        success: function (res) {// 解压成功
                            console.log(' 解压成功', res);
                            rs()
                        },
                        fail: function (res) {// 解压失败
                            console.log(' 解压失败', res);
                            rj();

                        },

                    })
                },

                fail: function (res) { // 下载失败
                    console.log(' 下载失败', res);
                    rj();

                },

            })

            // 下载资源进度

            downloadTask.onProgressUpdate((res) => {

                console.log(' 下载的进度', res);

            })


        })

    }
}