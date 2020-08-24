export class TextFlowStyle {
    public text: string = "";
    public font?: string = Laya.Text.defaultFont;
    public fontSize?: number = Laya.Text.defaultFontSize;
    public color?: string = "#000000";
    public bold?: boolean = false;
    public italic?: boolean = false;
    public stroke?: number = 0;
    public strokeColor?: string = "#000000";
    public underline?: boolean = false;
    public underlineColor?: string = "#000000";
}

export enum Align {
    NONE = "",
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
    TOP = "top",
    MIDDLE = "moddle",
    BOTTOM = "bottom",
}

interface ILineElement {
    width: number;
    height: number;
    text: string;
}

export default class TextFlow extends Laya.UIComponent {

    public constructor(data?: TextFlowStyle[]) {
        super();
        this._textFlow = data;
        this.createUI();
        this.initView();
    }

    protected createChildren() {
        super.createChildren();
    }

    private box_content: Laya.Box;
    private box_bg: Laya.Box;
    private createUI() {
        this.box_bg = new Laya.Box();
        this.box_bg.bgColor = this._bgColor;
        this.addChild(this.box_bg);

        this.box_content = new Laya.Box();
        this.addChild(this.box_content);
    }

    private _bgColor: string = "";
    public get bgColor() {
        return this._bgColor;
    }
    public set bgColor(n: string) {
        this._bgColor = n;
        this.box_bg.bgColor = n;
    }

    private _setWidth: number = 0;
    private _width: number = 0;
    public get width() {
        return this._setWidth ? this._setWidth : this._width;
    }
    public set width(n: number) {
        this._width = n;
        this._setWidth = n;
        this.initView();
    }

    private _setHeight: number = 0;
    private _height: number = 0;
    public get height() {
        return this._setHeight ? this._setHeight : this._height;
    }
    public set height(n: number) {
        this._height = n;
        this._setHeight = n;
        this.initView();
    }

    private _textFlow: TextFlowStyle[];
    public get textFlow() {
        return this._textFlow;
    }
    public set textFlow(n: TextFlowStyle[]) {
        this._textFlow = n;
        this.initView();
    }

    private _wordWrap: boolean;
    public get wordWrap() {
        return this._wordWrap;
    }
    public set wordWrap(n: boolean) {
        this._wordWrap = n;
        this.initView();
    }

    private _leading: number = 0;
    public get leading() {
        return this._leading;
    }
    public set leading(n: number) {
        this._leading = n;
        this.setSize();
    }

    private _align: Align;
    public get align() {
        return this._align;
    }
    public set align(n: Align) {
        this._align = n;
        this.hLayout();
    }

    private _valign: Align;
    public get valign() {
        return this._valign;
    }
    public set valign(n: Align) {
        this._valign = n;
        this.vLayout();
    }

    private _lineIndex: number = 0;
    private get lineIndex() {
        return this._lineIndex;
    }
    private set lineIndex(n: number) {
        this._lineIndex = n;
        let line = this.getLinesArr()[n];
        if (!line) this.linesArr[n] = { width: 0, height: 0, text: "" };
    }

    private linesArr: ILineElement[];
    public getLinesArr(): ILineElement[] {
        return this.linesArr || [];
    }

    public get text() {
        let txt = "";
        this.getLinesArr().forEach(v => txt += v.text);
        return txt;
    }

    private _startX: number = 0;

    private init() {
        this._startX = 0;
        this.linesArr = [];
        this.lineIndex = 0;
        this._width = 0;
        this._height = 0;
        this.recovery();
    }

    private recovery() {
        for (let i = 0; i < this.box_content.numChildren; i++) {
            let box = <Laya.Box>this.box_content.getChildAt(i);
            for (let j = 0; j < box.numChildren; j++) {
                let lab = <Laya.Label>box.getChildAt(j);
                Laya.Pool.recover("_LineLabel", lab);
            }
            box.removeChildren();
            Laya.Pool.recover("_LineBox", box);
        }
        this.box_content.removeChildren();
    }

    private initView() {
        this.init();
        if (!this._textFlow || this._textFlow.length == 0) {
            // console.warn("textFlow is null");
            return;
        }
        // console.warn("textFlow initView", this._textFlow);
        let len = this._textFlow.length;
        let data = this._textFlow;
        for (let i = 0; i < len; i++) {
            let pro = this.parseStyle(data[i]);
            let lines = pro.text.replace(/\r\n/g, "\n").split("\n");
            // console.warn("textFlow replace", lines);
            if (!this._wordWrap || !this._setWidth) {
                for (let i = 0, len = lines.length; i < len; i++) {
                    this.createText(pro, lines[i], this._startX);
                    if (i + 1 < len) {
                        this.lineIndex++;
                        this._startX = 0;
                    }
                }
            } else {
                for (let i = 0, len = lines.length; i < len; i++) {
                    this.setLineText(pro, lines[i]);
                    if (i + 1 < len) {
                        this.lineIndex++;
                        this._startX = 0;
                    }
                    // console.log("next line", this.lineIndex, this._startX)
                }
            }
        }
        this.setSize();
    }

    private parseStyle(style: TextFlowStyle) {
        style.text = this.lang(style.text);
        style.font = style.font ? style.font : Laya.Text.defaultFont;
        style.fontSize = style.fontSize || Laya.Text.defaultFontSize;
        style.color = style.color ? style.color : "#000000";
        style.bold = !!style.bold;
        style.italic = !!style.italic;
        style.stroke = style.stroke || 0;
        style.strokeColor = style.strokeColor ? style.strokeColor : "#000000";
        style.underline = !!style.underline;
        style.underlineColor = style.underlineColor ? style.underlineColor : "#000000";
        return style;
    }

    private lang(text: string) {
        let arg1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        let arg2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        let arg3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        let arg4 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        let arg5 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        let arg6 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        let arg7 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
        let arg8 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
        let arg9 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
        let arg10 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
        text = Laya.Text.langPacks && Laya.Text.langPacks[text] ? Laya.Text.langPacks[text] : text;
        if (arguments.length < 2) {
            return text;
        } else {
            for (let i = 0, n = arguments.length; i < n; i++) {
                text = text.replace("{" + i + "}", arguments[i + 1]);
            }
            return text;
        }
    }

    private setSize() {
        if (!this._textFlow || this._textFlow.length == 0) return;
        this._width = 0;
        this._height = 0;
        let startY = 0;
        this._width = Math.max(...this.linesArr.map(v => { return v.width }));
        this.box_content.width = this._setWidth ? this._setWidth : this._width;
        this.linesArr.forEach((v, i) => {
            this._height += v.height;
            let box = <Laya.Box>this.box_content.getChildAt(i);
            box.y = startY;
            startY += (v.height + this._leading);
        });
        this._height += (this.linesArr.length - 1) * this._leading;
        this.box_content.height = this._height;
        this.box_bg.width = this._setWidth ? this._setWidth : this._width;
        this.box_bg.height = this._setHeight ? this._setHeight : this._height;
        this.hLayout();
        this.vLayout();
    }

    private hLayout() {
        this.linesArr.forEach((v, i) => {
            let box = <Laya.Box>this.box_content.getChildAt(i);
            switch (this._align) {
                case Align.LEFT:
                    box.x = 0;
                    break;
                case Align.CENTER:
                    box.x = (this.box_content.width - box.width) / 2;
                    break;
                case Align.RIGHT:
                    box.x = this.box_content.width - box.width;
                    break;
            }
        });
    }

    private vLayout() {
        switch (this._valign) {
            case Align.TOP:
                this.box_content.y = 0;
                break;
            case Align.MIDDLE:
                this.box_content.y = (this.height - this.box_content.height) / 2;
                break;
            case Align.BOTTOM:
                this.box_content.y = this.height - this.box_content.height;
                break;
        }
    }

    private setLineText(pro: TextFlowStyle, txt: string) {
        let _lines = this.parseLines(pro, txt);
        for (let i = 0; i < _lines.length; i++) {
            let sh = _lines.shift();
            if (this.checkOverLine(sh, pro)) {
                this.lineIndex++;
                this._startX = 0;
                let str = _lines.length ? sh + _lines.reduce((a, b) => a.concat(b)) : sh;
                this.setLineText(pro, str);
                break;
            } else {
                this.createText(pro, sh, this._startX);
            }
            i--;
        }
    }

    private createText(pro: TextFlowStyle, txt: string, xs: number) {
        // console.warn("textFlow createText", this.lineIndex, txt, xs);
        let box = <Laya.Box>this.box_content.getChildAt(this._lineIndex);
        if (!box) {
            box = Laya.Pool.getItemByClass("_LineBox", Laya.Box);
            this.box_content.addChild(box);
        }
        let label = <Laya.Label>Laya.Pool.getItemByClass("_LineLabel", Laya.Label);
        label.x = xs;
        label.bottom = 0;
        label.text = txt;
        label.font = pro.font;
        label.fontSize = pro.fontSize;
        label.color = pro.color;
        label.bold = pro.bold;
        label.italic = pro.italic;
        label.stroke = pro.stroke;
        label.strokeColor = pro.strokeColor;
        label.underline = pro.underline;
        label.underlineColor = pro.underlineColor;
        box.addChild(label);
        box.height = Math.max(box.height, label.height);
        this._startX += label.width;

        let line = this.getLinesArr()[this._lineIndex];
        line.width = line.width + label.width;
        line.height = box.height;
        line.text = line.text + label.text;
        // console.warn("textFlow createText", line);
    }

    private checkOverLine(txt: string, pro: TextFlowStyle) {
        let line = this.getLinesArr()[this._lineIndex];
        let measureResult = null;
        if (Laya.Render.isConchApp) {
            window["conchTextCanvas"].font = pro.fontSize + "px " + pro.font;
            measureResult = window["conchTextCanvas"].measureText(txt);
        } else {
            Laya.Browser.context.font = pro.fontSize + "px " + pro.font;
            // console.log("checkOverLine >>>", txt, Laya.Browser.context.font, pro.fontSize, pro.font);
            measureResult = Laya.Browser.context.measureText(txt);
        }
        if (line.width + measureResult.width > this.width) {
            // console.log("checkOverLine true >>>", txt, line.width, measureResult.width, this.width);
            return true;
        }
        // console.log("checkOverLine false >>>", txt, line.width, measureResult.width, this.width);
        return false;
    }

    private _testWord = "游";
    private _charSize = {};

    private parseLines(pro: TextFlowStyle, txt: string) {
        this.disabled
        let measureResult = null;
        if (Laya.Render.isConchApp) {
            window["conchTextCanvas"].font = pro.fontSize + "px " + pro.font;
            measureResult = window["conchTextCanvas"].measureText(this._testWord);
        } else {
            // console.log("parseLines >>>", txt, Laya.Browser.context.font, pro.fontSize, pro.font);
            Laya.Browser.context.font = pro.fontSize + "px " + pro.font;
            measureResult = Laya.Browser.context.measureText(this._testWord);
        }
        if (!measureResult) measureResult = { width: 100 };
        this._charSize["width"] = measureResult.width;
        this._charSize["height"] = measureResult.height || pro.fontSize;

        let lines = txt.replace(/\r\n/g, "\n").split("\n");
        let _lines: string[] = [];
        for (let i = 0, n = lines.length; i < n; i++) {
            let line = lines[i];
            if (this._wordWrap) {
                let wordWrapWidth = this.getWordWrapWidth();
                _lines = _lines.concat(this.parseLine(line, wordWrapWidth));
            } else {
                _lines.push(line);
            }
        }
        return _lines;
    }

    private parseLine(line: string, wordWrapWidth: number) {
        let lines: string[] = [];
        let charsWidth = 0;
        charsWidth = this.getTextWidth(line);
        if (charsWidth <= wordWrapWidth) {
            lines.push(line);
            return lines;
        }
        let maybeIndex = 0;
        let wordWidth = 0;
        let startIndex = 0;
        charsWidth = this._charSize["width"];
        maybeIndex = Math.floor(wordWrapWidth / charsWidth);
        maybeIndex == 0 && (maybeIndex = 1);
        charsWidth = this.getTextWidth(line.substring(0, maybeIndex));
        wordWidth = charsWidth;
        let len = line.length;
        for (let j = maybeIndex; j < len; j++) {
            charsWidth = this.getTextWidth(line.charAt(j));
            wordWidth += charsWidth;
            if (wordWidth > wordWrapWidth) {
                if (this._wordWrap) {
                    let newLine = line.substring(startIndex, j);
                    if (newLine.charCodeAt(newLine.length - 1) < 255) {
                        let execResult = /(?:\w|-)+$/.exec(newLine);
                        if (execResult) {
                            j = execResult.index + startIndex;
                            if (execResult.index == 0) j += newLine.length;
                            else newLine = line.substring(startIndex, j);
                        }
                    }
                    lines.push(newLine);
                    startIndex = j;
                    if (j + maybeIndex < len) {
                        j += maybeIndex;
                        charsWidth = this.getTextWidth(line.substring(startIndex, j));
                        wordWidth = charsWidth;
                        j--;
                    } else {
                        lines.push(line.substring(startIndex, len));
                        startIndex = -1;
                        break;
                    }
                }
            }
        }
        if (this._wordWrap && startIndex != -1) {
            lines.push(line.substring(startIndex, len));
        }
        return lines;
    }

    private getWordWrapWidth() {
        let line = this.getLinesArr()[this._lineIndex];
        let w = this.width - line.width;
        if (w <= 0) {
            w = this._wordWrap ? 100 : Laya.Browser.width;
        }
        w <= 0 && (w = 100);
        return w;
    }

    private getTextWidth(text: string) {
        if (Laya.Render.isConchApp) {
            return window["conchTextCanvas"].measureText(text).width;
        } else {
            return Laya.Browser.context.measureText(text).width;
        }
    }

    public removeSelf() {
        return super.removeSelf();
    }

    public destroy() {
        this.init();
        super.destroy();
    }
}