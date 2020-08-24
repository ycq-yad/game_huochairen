/**
 * 画线的线性管理工具
 */
export default class Type2GameLineToolMgr {
    private static instance: Type2GameLineToolMgr;
    public static getInstance(): Type2GameLineToolMgr {
        if (!Type2GameLineToolMgr.instance) {
            Type2GameLineToolMgr.instance = new Type2GameLineToolMgr();
        }
        return Type2GameLineToolMgr.instance;
    }

    private constructor() {
        this.gestureUtil = new ur.DollarRecognizer();
        this.curentLinesPoints = [];
    }

    /** 当前的画线集成数据 */
    private curentLinesPoints: LinePoints[];

    /** 校验器 */
    private gestureUtil: ur.DollarRecognizer;

    /**
    * 筛选一些点列
    */
    private dressingPoints(points: number[]): void {
        if (points.length / 2 > 120) {
            for (let i = 0, len = points.length / 2; i < len; i++) {
                if (i % 2 == 1) {
                    points.splice(i * 2, 2);
                    i--; len--;
                }
            }
        }
    }

    /**
     * 增加模板数据
     * @param templatLinesPoints 
     */
    public addLinesPoints(templatLinesPoints: LinePoints[]) {
        this.clearCurentLinesPoints();
        console.log("增加模板数据--", templatLinesPoints);
        //整体添加
        let points = [];
        for (let i = 0, len = templatLinesPoints.length; i < len; i++) {
            points = points.concat(templatLinesPoints[i].points);
        }
        this.addOneLinePoints(points);
        /*
        //分段添加
        for (let i = 0, len = templatLinesPoints.length; i < len; i++) {
            this.addOneLinePoints(templatLinesPoints[i].points);
        }
        */
    }

    /**
     * 增加一段线段
     * @param points 
     */
    private addOneLinePoints(points: number[]): void {
        //
        // points = [
        //     314, 710, 312, 712, 310, 740, 310, 771, 325, 814, 341, 843, 350, 856, 371, 870, 400, 881, 432, 885, 453, 889, 480, 885, 502, 858, 521, 830, 533, 792, 539, 755, 539, 708, 539, 664, 539, 630, 539, 611, 539, 596, 527, 578, 518, 569, 514, 565, 502, 565, 487, 565, 460, 565, 436, 571, 411, 575, 381, 586, 344, 596, 312, 609, 293, 624, 289, 630, 285, 641, 284, 647, 284, 655, 284, 664, 284, 674, 284, 677, 285, 683, 289, 689, 295, 695, 299, 700, 303, 702, 304, 704, 310, 708, 314, 708, 192, 740, 196, 742, 204, 742, 219, 744, 247, 744, 293, 744, 363, 735, 460, 725, 571, 719, 660, 719, 715, 719, 740, 719, 750, 719, 411, 443, 409, 449, 407, 466, 407, 504, 407, 556, 407, 618, 421, 706, 453, 830, 481, 946, 489, 1010, 499, 1058, 500, 1092, 500, 1100, 500, 1113, 500, 1117
        // ]
        //
        // console.log(points.toString());
        // this.dressingPoints(points);
        if (points.length < 4) {
            console.log("插入标准线段数据过少---");
            return;
        }
        // console.log("插入点数--", points.length);
        //console.log(points.toString());
        let urPoints: ur.Point[] = [];
        for (let i = 0, len = points.length / 2; i < len; i++) {
            let urPoint = new ur.Point(points[i * 2], points[i * 2 + 1]);
            urPoints.push(urPoint);
        }
        //
        let name = "level_temp_" + this.curentLinesPoints.length;
        let itemLine = new LinePoints();
        itemLine.name = name;
        itemLine.points = points;
        this.curentLinesPoints.push(itemLine);
        this.gestureUtil.AddGesture(name, urPoints);
    }

    /**
     * 清理当前记录的线段数据
     */
    public clearCurentLinesPoints(): void {
        this.curentLinesPoints = [];
    }

    /**
     * 校验所有的线段
     * @param checkLinesPoints 
     */
    public checkAllLinesPoints(checkLinesPoints: LinePoints[], checkTypeScore: number = 0.1): boolean {
        // 整体检测
        let points: number[] = [];
        for (let i = 0, len = checkLinesPoints.length; i < len; i++) {
            points = points.concat(checkLinesPoints[i].points);
        }
        console.log("点 >>>", JSON.stringify(points));
        // let points = [317, 668, 319, 668, 325, 668, 329, 662, 337, 656, 343, 648, 351, 642, 356, 636, 364, 628, 370, 624, 376, 618, 384, 614, 390, 606, 396, 602, 402, 596, 406, 592, 410, 592, 416, 586, 418, 584, 424, 579, 430, 577, 436, 573, 440, 569, 444, 565, 448, 563, 454, 559, 461, 553, 469, 549, 473, 545, 481, 539, 485, 535, 493, 527, 499, 521, 509, 515, 515, 509, 521, 503, 525, 499, 533, 493, 537, 487, 545, 481, 549, 477, 557, 470, 561, 468, 563, 464, 572, 458, 578, 452, 584, 446, 594, 440, 600, 436, 604, 432, 612, 426, 618, 424, 624, 420, 632, 414, 638, 410, 644, 404, 650, 402, 652, 400, 660, 394, 664, 390, 668, 386, 673, 384, 677, 380, 685, 374, 693, 371, 697, 367, 701, 365, 705, 361, 711, 357, 715, 355, 719, 353, 721, 349, 725, 347, 727, 345, 729, 343, 733, 343, 735, 339, 737, 337, 739, 335, 743, 335, 747, 331, 753, 327, 757, 325, 763, 323, 765, 321, 769, 317, 771, 313, 775, 311, 780, 307, 784, 305, 788, 301, 790, 299, 794, 295, 798, 291, 802, 287, 804, 285, 806, 283, 808, 281, 812, 277, 814, 275, 818, 273, 820, 271, 824, 267, 826, 265, 828, 264]
        // for (let i = 0, len = points.length; i < len; i += 2) {
        //     points[i] += 100;
        // }

        let result = this.checkOneLine(points);
        console.log("result >>>", result);
        return result.Score >= checkTypeScore ? true : false;
        /*
        //分段检测
        let names: string[] = [];
        let scoreTotle: number = 0;
        let checkResults: ur.Result[] = [];
        for (let i = 0, len = checkLinesPoints.length; i < len; i++) {
            let result = this.checkOneLine(checkLinesPoints[i].points);
            scoreTotle += result.Score;
            names.push(result.Name);
            checkResults.push(result);
        }
        console.log(checkResults);
        //校验是否每个标准线段都存在
        let isAllHave: boolean = true;
        for (let i = 0, len = this.curentLinesPoints.length; i < len; i++) {
            let tempLineItemName = this.curentLinesPoints[i].name;
            if (names.indexOf(tempLineItemName) == -1) {
                isAllHave = false;
                break
            }
        }
        if (isAllHave) {
            if (scoreTotle / names.length >= checkTypeScore) {//都存在且比例大于需要校验的比例
                return true;
            }
        }
        return false;
    */
    }

    /**
     * 校验一个线段
     * 输出整体匹配度
     * @param points 
     */
    private checkOneLine(points: number[]): ur.Result {
        let urPoints: ur.Point[] = [];
        for (let i = 0, len = points.length / 2; i < len; i++) {
            let urPoint = new ur.Point(points[i * 2], points[i * 2 + 1]);
            urPoints.push(urPoint);
        }
        let result = this.gestureUtil.Recognize(urPoints, false);
        console.log(result.Name, result.Score, result.Time);
        return result;
    }




    /**
     * 像素数据，是否二值化（bool），二值化闵值（0-255），是否返回二值化后序列（bool）        
     * */
    public toGrayBinary(pixels, binary, value?, sn?) {
        let r, g, b, avg = 0, len = pixels.length, s = '';
        for (let i = 0; i < len; i += 4) {
            avg += (.299 * pixels[i] + .587 * pixels[i + 1] + .114 * pixels[i + 2]);
        }
        avg /= (len / 4);
        for (let i = 0; i < len; i += 4) {
            r = .299 * pixels[i];
            g = .587 * pixels[i + 1];
            b = .114 * pixels[i + 2];
            if (binary) {
                if ((r + g + b) >= (value || avg)) {
                    g = 255;
                    if (sn) s += '1';
                } else {
                    g = 0;
                    if (sn) s += '0';
                }
                g = (r + g + b) > (value || avg) ? 255 : 0;
            } else {
                g = r + g + b;
            }
            pixels[i] = g, pixels[i + 1] = g, pixels[i + 2] = g;
        }
        if (sn) return s;
        else return pixels;
    }

    /**
     * 校验纹理
     * @param txe1 
     * @param txe2 
     */
    public searchTexture(texture1: Laya.Texture, texture2: Laya.Texture): number {
        let data1 = texture1.getPixels(0, 0, texture1.width, texture1.height);
        data1 = this.toGrayBinary(data1, true, null, false);
        console.log("data1", data1);
        let data2 = texture2.getPixels(0, 0, texture2.width, texture2.height);
        data2 = this.toGrayBinary(data2, true, null, false);
        console.log("data2", data2);

        let tw = texture1.width, th = texture1.height;
        let similar = 0;
        for (let i = 0, len = tw * th; i < len; i++) {
            if (data2[i] == data1[i]) similar++;
        }
        similar = (similar / (tw * th)) * 100;
        console.log("匹配比例：", similar);
        return similar;
    }

    /**
     * 校验纹理
     * @param txe1 
     * @param txe2 
     */
    public searchTexture1(texture1: Laya.Texture, texture2: Laya.Texture): number {
        let drawPixels = texture1.getPixels(0, 0, texture1.width, texture1.height);
        // drawPixels = this.toGrayBinary(drawPixels, true, null, false);
        console.log("draw Pixels", drawPixels);
        let imgPixels = texture2.getPixels(0, 0, texture2.width, texture2.height);
        // imgPixels = this.toGrayBinary(imgPixels, true, null, false);
        console.log("img Pixels", imgPixels);

        let tw = texture1.width, th = texture1.height;
        let similar = 0;
        let r = 0, g = 0, b = 0, a = 0;
        let r1 = 0, g1 = 0, b1 = 0, a1 = 0;
        for (let i = 0, len = tw * th * 4; i < len; i += 4) {
            r += drawPixels[i];
            g += drawPixels[i + 1];
            b += drawPixels[i + 2];
            a += drawPixels[i + 3];
            r1 += imgPixels[i];
            g1 += imgPixels[i + 1];
            b1 += imgPixels[i + 2];
            a1 += imgPixels[i + 3];
            let rgba1 = "" + drawPixels[i] + drawPixels[i + 1] + drawPixels[i + 2] + drawPixels[i + 3];
            let rgba2 = "" + imgPixels[i] + imgPixels[i + 1] + imgPixels[i + 2] + imgPixels[i + 3];
            if (rgba1 == rgba2) similar++;
            // tt1 += data1[i];
            // tt2 += data2[i];
            // if (data2[i] == data1[i]) similar++;
        }
        let ratio = (similar / (tw * th)) * 100;
        console.log("rgba draw：", r, g, b, a);
        console.log("rgba img：", r1, g1, b1, a1);
        console.log("匹配比例：", similar, ratio, tw * th);
        return ratio;
    }

    // public hexify(color: string) {
    //     // var myHex = hexify('rgba(255,232,186,0.4)'); // "#f5faf3"
    //     var values = color
    //         .replace(/rgba?\(/, '')
    //         .replace(/\)/, '')
    //         .replace(/[\s+]/g, '')
    //         .split(',');
    //     var a = parseFloat(values[3] || "1"),
    //         r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255),
    //         g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255),
    //         b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255);
    //     return "#" +
    //         ("0" + r.toString(16)).slice(-2) +
    //         ("0" + g.toString(16)).slice(-2) +
    //         ("0" + b.toString(16)).slice(-2);
    // }

    public test(parent: Laya.Sprite) {
        Laya.loader.load("resource/assets/imgs/levels/type2/1/lv_1.png", Laya.Handler.create(this, (texture1) => {
            Laya.loader.load("resource/assets/imgs/levels/type2/2/lv_2.png", Laya.Handler.create(this, (texture2) => {
                let data1 = texture1.getPixels(0, 0, 256, 239);
                // data1 = this.toGrayBinary(data1, false, null, true);
                let data2 = texture2.getPixels(0, 0, 256, 239);
                // data2 = this.toGrayBinary(data2, false, null, true);

                let tw = 256, th = 239;


                let similar = 0;
                let r = 0, g = 0, b = 0, a = 0;
                let r1 = 0, g1 = 0, b1 = 0, a1 = 0;
                for (let i = 0, len = tw * th * 4; i < len; i += 4) {
                    r += data1[i];
                    g += data1[i + 1];
                    b += data1[i + 2];
                    a += data1[i + 3];
                    r1 += data2[i];
                    g1 += data2[i + 1];
                    b1 += data2[i + 2];
                    a1 += data2[i + 3];
                    let rgba1 = "" + data1[i] + data1[i + 1] + data1[i + 2] + data1[i + 3];
                    let rgba2 = "" + data2[i] + data2[i + 1] + data2[i + 2] + data2[i + 3];
                    if (rgba1 == rgba2) similar++;
                    // tt1 += data1[i];
                    // tt2 += data2[i];
                    // if (data2[i] == data1[i]) similar++;
                }
                let ratio = (similar / (tw * th)) * 100;
                console.log("rgba draw：", r, g, b, a);
                console.log("rgba img：", r1, g1, b1, a1);
                console.log("匹配比例：", similar, ratio, tw * th);


                // let similar = 0;
                // for (let i = 0, len = tw * th; i < len; i++) {
                //     if (data2[i] == data1[i]) similar++;
                // }
                // similar = (similar / (tw * th)) * 100;
                // console.log("test >>>>>>>", similar);
                // //
                // // texture1.setPixels(data1);
                // let img = new Laya.Image();
                // img.source = texture1;
                // parent.addChild(img);
                // img.x = 200; img.y = 400;
            }), null, Laya.Loader.TEXTURE2D);
        }), null, Laya.Loader.TEXTURE2D);
    }

}

/**
 * 线段数据
 */
export class LinePoints {
    /**名称 */
    name: string;
    /**点列 */
    points: number[];
}