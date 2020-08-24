/**
 * 弹窗管理器
 */
export class PopManager {
    private static ins: PopManager;

    public static get instance(): PopManager {
        if (!this.ins) {
            this.ins = new PopManager();
        }
        return this.ins;
    }


    public isPoping = false;

    public popArray = []
    /**
     * 展示弹窗
     * 处理连续弹窗的可能
     * 弹窗页面必须继承 PopScene
     */
    public showPopView(data?: { className: any, data: any }) {
        if (data != null) {
            this.popArray.push(data);
        }
        if (this.isPoping) {
            return;
        }
        if (this.popArray.length == 0) return;

        let showData = this.popArray.shift() as { className: any, data: any };
        this.isPoping = true;
        ViewManager.getInstance().showView(showData.className, showData.data);
    }
}