export class ImageCheckUtil {









    

    /** 图片压缩 */
    public static compressImg(imgSrc: string, imgWidth: number = 100): Promise<ImageData> {
        return new Promise((resolve, reject) => {
            if (!imgSrc) {
                reject('imgSrc can not be empty!');
            }
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                canvas.width = imgWidth;
                canvas.height = imgWidth;
                ctx.drawImage(img, 0, 0, imgWidth, imgWidth);
                const data = ctx.getImageData(0, 0, imgWidth, imgWidth) as ImageData;
                resolve(data);
            }
            img.src = imgSrc;
            console.log("img", img);
        });
    }

    /** 根据 RGBA 数组生成 ImageData */
    public static createImgData(dataDetail: number[]) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const imgWidth = Math.sqrt(dataDetail.length / 4);
        const newImageData = ctx.createImageData(imgWidth, imgWidth) as ImageData;
        for (let i = 0; i < dataDetail.length; i += 4) {
            let R = dataDetail[i]
            let G = dataDetail[i + 1]
            let B = dataDetail[i + 2]
            let Alpha = dataDetail[i + 3]

            newImageData.data[i] = R
            newImageData.data[i + 1] = G
            newImageData.data[i + 2] = B
            newImageData.data[i + 3] = Alpha
        }
        return newImageData
    }

    /** 图片灰度化 */
    public static createGrayscale(imgData: ImageData) {
        const newData: number[] = Array(imgData.data.length);
        newData.fill(0);
        imgData.data.forEach((_data, index) => {
            if ((index + 1) % 4 === 0) {
                const R = imgData.data[index - 3]
                const G = imgData.data[index - 2]
                const B = imgData.data[index - 1]

                const gray = ~~((R + G + B) / 3)
                newData[index - 3] = gray
                newData[index - 2] = gray
                newData[index - 1] = gray
                newData[index] = 255 // Alpha 值固定为255
            }
        })
        return this.createImgData(newData)
    }

    /********************* 平均哈希算法 *********************/

    public static async getAverageHash(imgSrc: string) {

    }

    /** 指纹提取 */
    public static getHashFingerprint(imgData: ImageData) {
        const grayList = imgData.data.reduce((pre: number[], cur, index) => {
            if ((index + 1) % 4 === 0) {
                pre.push(imgData.data[index - 1])
            }
            return pre
        }, [])
        const length = grayList.length
        const grayAverage = grayList.reduce((pre, next) => (pre + next), 0) / length
        return grayList.map(gray => (gray >= grayAverage ? 1 : 0)).join('')
    }

    /********************* 感知哈希算法 *********************/

    public static memoizeCosines(N: number, cosMap: any) {
        cosMap = cosMap || {}
        cosMap[N] = new Array(N * N)

        let PI_N = Math.PI / N

        for (let k = 0; k < N; k++) {
            for (let n = 0; n < N; n++) {
                cosMap[N][n + (k * N)] = Math.cos(PI_N * (n + 0.5) * k)
            }
        }
        return cosMap
    }

    public static dct(signal: number[], scale: number = 2) {
        let L = signal.length
        let cosMap: any = null

        if (!cosMap || !cosMap[L]) {
            cosMap = this.memoizeCosines(L, cosMap)
        }

        let coefficients = signal.map(function () { return 0 })

        return coefficients.map(function (_, ix) {
            return scale * signal.reduce(function (prev, cur, index) {
                return prev + (cur * cosMap[L][index + (ix * L)])
            }, 0)
        })
    }

    // 一维数组升维
    public static createMatrix(arr: number[]) {
        const length = arr.length
        const matrixWidth = Math.sqrt(length)
        const matrix = []
        for (let i = 0; i < matrixWidth; i++) {
            const _temp = arr.slice(i * matrixWidth, i * matrixWidth + matrixWidth)
            matrix.push(_temp)
        }
        return matrix
    }

    // 从矩阵中获取其“左上角”大小为 range × range 的内容
    public static getMatrixRange(matrix: number[][], range: number = 1) {
        const rangeMatrix = []
        for (let i = 0; i < range; i++) {
            for (let j = 0; j < range; j++) {
                rangeMatrix.push(matrix[i][j])
            }
        }
        return rangeMatrix
    }

    //复用之前在“平均哈希算法”中所写的灰度图转化函数createGrayscale()，我们可以获取“感知哈希算法”的特征值
    public static getPHashFingerprint(imgData: ImageData) {
        const dctData = this.dct(imgData.data as any)
        const dctMatrix = this.createMatrix(dctData)
        const rangeMatrix = this.getMatrixRange(dctMatrix, dctMatrix.length / 8)
        const rangeAve = rangeMatrix.reduce((pre, cur) => pre + cur, 0) / rangeMatrix.length
        return rangeMatrix.map(val => (val >= rangeAve ? 1 : 0)).join('')
    }

    /********************* 颜色分布法 *********************/

    public static getColorHash(imgData: ImageData) {
        let simp = this.simplifyColorData(imgData);
        let zone = this.seperateListToColorZone(simp);
        return this.getFingerprint(zone);
    }

    // 划分颜色区间，默认区间数目为4个
    // 把256种颜色取值简化为4种
    public static simplifyColorData(imgData: ImageData, zoneAmount: number = 4) {
        const colorZoneDataList: number[] = []
        const zoneStep = 256 / zoneAmount
        const zoneBorder = [0] // 区间边界
        for (let i = 1; i <= zoneAmount; i++) {
            zoneBorder.push(zoneStep * i - 1)
        }
        imgData.data.forEach((data, index) => {
            if ((index + 1) % 4 !== 0) {
                for (let i = 0; i < zoneBorder.length; i++) {
                    if (data > zoneBorder[i] && data <= zoneBorder[i + 1]) {
                        data = i
                    }
                }
            }
            colorZoneDataList.push(data)
        })
        return colorZoneDataList
    }

    // 把颜色取值进行简化以后，就可以把它们归类到不同的分组里面去：
    public static seperateListToColorZone(simplifiedDataList: number[]) {
        const zonedList: string[] = []
        let tempZone: number[] = []
        simplifiedDataList.forEach((data, index) => {
            if ((index + 1) % 4 !== 0) {
                tempZone.push(data)
            } else {
                zonedList.push(JSON.stringify(tempZone))
                tempZone = []
            }
        })
        return zonedList
    }

    // 最后只需要统计每个相同的分组的总数即可：
    public static getFingerprint(zonedList: string[], zoneAmount: number = 16) {
        const colorSeperateMap: {
            [key: string]: number
        } = {}
        for (let i = 0; i < zoneAmount; i++) {
            for (let j = 0; j < zoneAmount; j++) {
                for (let k = 0; k < zoneAmount; k++) {
                    colorSeperateMap[JSON.stringify([i, j, k])] = 0
                }
            }
        }
        zonedList.forEach(zone => {
            colorSeperateMap[zone]++
        })
        return Object.values(colorSeperateMap)
    }

    /********************* 内容特征法 *********************/

    public static async checkImgAndTextureByaaa(imgUrl: string, texture: Laya.Texture) {
        let imgData = await this.compressImg(imgUrl, 256);
        console.log("内容特征法 imgData", imgData);
        let textureData = texture.getPixels(0, 0, 256, 256);
        console.log("内容特征法 textureData", textureData);
        let chashcheck = ImageCheckUtil.bbb(imgData.data, textureData);
        return chashcheck;
    }

    public static bbb(pixel1: any, pixel2: any) {
        let threshold1 = this.OTSUAlgorithm1(pixel1);
        let threshold2 = this.OTSUAlgorithm1(pixel2);
        console.log("bbb1>>>", threshold1, threshold2);
        let newImageData1 = this.binaryzation1(pixel1, threshold1);
        let newImageData2 = this.binaryzation1(pixel2, threshold2);
        const grayList1 = newImageData1.data.reduce((pre: number[], cur, index) => {
            if ((index + 1) % 4 === 0) {
                pre.push(newImageData1.data[index - 1])
            }
            return pre
        }, [])
        const grayList2 = newImageData2.data.reduce((pre: number[], cur, index) => {
            if ((index + 1) % 4 === 0) {
                pre.push(newImageData2.data[index - 1])
            }
            return pre
        }, [])

        console.log("bbb3>>>", grayList1, grayList2);
        return this.cosineSimilarity(grayList1, grayList2);
    }

    public static OTSUAlgorithm1(imgData: ImageData) {
        const grayData = this.toGray1(imgData);
        let ptr = 0;
        let histData = Array(256).fill(0);
        let total = grayData.length;

        while (ptr < total) {
            let h = 0xFF & grayData[ptr++]
            histData[h]++
        }

        let sum = 0
        for (let i = 0; i < 256; i++) {
            sum += i * histData[i]
        }

        let wB = 0
        let wF = 0
        let sumB = 0
        let varMax = 0
        let threshold = 0

        for (let t = 0; t < 256; t++) {
            wB += histData[t]
            if (wB === 0) continue
            wF = total - wB
            if (wF === 0) break

            sumB += t * histData[t]

            let mB = sumB / wB
            let mF = (sum - sumB) / wF

            let varBetween = wB * wF * (mB - mF) ** 2

            if (varBetween > varMax) {
                varMax = varBetween
                threshold = t
            }
        }
        return threshold
    }

    public static toGray1(pixel: any) {
        const grayData = [];
        for (let i = 0; i < pixel.length; i += 4) {
            const gray = ~~(pixel[i] * .299 + pixel[i + 1] * .587 + pixel[i + 2] * .114)
            pixel[i] = pixel[i + 1] = pixel[i + 2] = gray
            grayData.push(gray)
        }
        return grayData
    }

    public static binaryzation1(pixel: number[], threshold: number) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const imgWidth = Math.sqrt(pixel.length / 4)
        const newImageData = ctx.createImageData(imgWidth, imgWidth) as ImageData
        for (let i = 0; i < pixel.length; i += 4) {
            let R = pixel[i]
            let G = pixel[i + 1]
            let B = pixel[i + 2]
            let Alpha = pixel[i + 3]
            let sum = (R + G + B) / 3

            newImageData.data[i] = sum > threshold ? 255 : 0
            newImageData.data[i + 1] = sum > threshold ? 255 : 0
            newImageData.data[i + 2] = sum > threshold ? 255 : 0
            newImageData.data[i + 3] = Alpha
        }
        return newImageData
    }







    public static aaaaaa(imgData1: ImageData, imgData2: ImageData) {
        let threshold1 = this.OTSUAlgorithm(imgData1);
        let threshold2 = this.OTSUAlgorithm(imgData2);
        console.log("aaaaaa1>>>", threshold1, threshold2);
        let newImageData1 = this.binaryzation(imgData1, threshold1);
        let newImageData2 = this.binaryzation(imgData2, threshold2);
        const grayList1 = newImageData1.data.reduce((pre: number[], cur, index) => {
            if ((index + 1) % 4 === 0) {
                pre.push(newImageData1.data[index - 1])
            }
            return pre
        }, [])
        const grayList2 = newImageData2.data.reduce((pre: number[], cur, index) => {
            if ((index + 1) % 4 === 0) {
                pre.push(newImageData2.data[index - 1])
            }
            return pre
        }, [])

        console.log("aaaaaa3>>>", grayList1, grayList2);
        return this.cosineSimilarity(grayList1, grayList2);
    }

    // 灰度处理
    public static toGray(imgData: ImageData) {
        const grayData = []
        const data = imgData.data

        for (let i = 0; i < data.length; i += 4) {
            const gray = ~~(data[i] * .299 + data[i + 1] * .587 + data[i + 2] * .114)
            data[i] = data[i + 1] = data[i + 2] = gray
            grayData.push(gray)
        }

        return grayData
    }

    // 使用“大津法”（Otsu’s method）去计算二值图的阈值
    // rewrite from http://www.labbookpages.co.uk/software/imgProc/otsuThreshold.html
    public static OTSUAlgorithm(imgData: ImageData) {
        const grayData = this.toGray(imgData);
        let ptr = 0;
        let histData = Array(256).fill(0);
        let total = grayData.length;

        while (ptr < total) {
            let h = 0xFF & grayData[ptr++]
            histData[h]++
        }

        let sum = 0
        for (let i = 0; i < 256; i++) {
            sum += i * histData[i]
        }

        let wB = 0
        let wF = 0
        let sumB = 0
        let varMax = 0
        let threshold = 0

        for (let t = 0; t < 256; t++) {
            wB += histData[t]
            if (wB === 0) continue
            wF = total - wB
            if (wF === 0) break

            sumB += t * histData[t]

            let mB = sumB / wB
            let mF = (sum - sumB) / wF

            let varBetween = wB * wF * (mB - mF) ** 2

            if (varBetween > varMax) {
                varMax = varBetween
                threshold = t
            }
        }

        return threshold
    }

    // OTSUAlgorithm() 函数接收一个 ImageData 对象，经过上一步的 toGray() 方法获取到灰度值列表以后，
    // 根据“大津法”算出最佳阈值然后返回。接下来使用这个阈值对原图进行处理，即可获取二值图。
    public static binaryzation(imgData: ImageData, threshold: number) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const imgWidth = Math.sqrt(imgData.data.length / 4)
        const newImageData = ctx.createImageData(imgWidth, imgWidth) as ImageData
        for (let i = 0; i < imgData.data.length; i += 4) {
            let R = imgData.data[i]
            let G = imgData.data[i + 1]
            let B = imgData.data[i + 2]
            let Alpha = imgData.data[i + 3]
            let sum = (R + G + B) / 3

            newImageData.data[i] = sum > threshold ? 255 : 0
            newImageData.data[i + 1] = sum > threshold ? 255 : 0
            newImageData.data[i + 2] = sum > threshold ? 255 : 0
            newImageData.data[i + 3] = Alpha
        }
        return newImageData
    }







    // 计算汉明距离的方法
    // 知道了汉明距离，也就可以知道两个等长字符串之间的相似度了（汉明距离越小，相似度越大）：
    // 相似度 = (字符串长度 - 汉明距离) / 字符串长度
    public static hammingDistance(str1: string, str2: string) {
        let distance = 0
        const str1Arr = str1.split('')
        const str2Arr = str2.split('')
        str1Arr.forEach((letter, index) => {
            if (letter !== str2Arr[index]) {
                distance++
            }
        })
        return distance
    }

    // 余弦相似度可以计算出两个向量之间的夹角，从而很直观地表示两个向量在方向上是否相似，
    // 这对于计算两个 N×N 的 0-1 矩阵的相似度来说非常有用
    public static cosineSimilarity(sampleFingerprint: number[], targetFingerprint: number[]) {
        // cosθ = ∑n, i=1(Ai × Bi) / (√∑n, i=1(Ai)^2) × (√∑n, i=1(Bi)^2) = A · B / |A| × |B|
        const length = sampleFingerprint.length
        let innerProduct = 0
        for (let i = 0; i < length; i++) {
            innerProduct += sampleFingerprint[i] * targetFingerprint[i]
        }
        let vecA = 0
        let vecB = 0
        for (let i = 0; i < length; i++) {
            vecA += sampleFingerprint[i] ** 2
            vecB += targetFingerprint[i] ** 2
        }
        const outerProduct = Math.sqrt(vecA) * Math.sqrt(vecB);
        console.log("余弦相似度", innerProduct, outerProduct);
        if (!outerProduct) return 0;
        else return innerProduct / outerProduct
    }

}