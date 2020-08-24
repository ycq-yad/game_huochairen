export class ObjectUtil {

    /**
     * 判断是否空对象
     * @param obj 
     * @param unsafe 
     */
    public static isEmpty(obj, unsafe: boolean = true): boolean {
        return unsafe && (obj === undefined || obj === null) ? true : this.isEqual({}, obj);
    }

    /** 判断是否相等对象 */
    public static isEqual(oldVal, newVal): boolean {
        return !this.compare(oldVal, newVal, { strict: true }).flag;
    }

    /** 复制对象 */
    public static copy<T>(obj: T): T {
        return this.compare({}, obj).result;
    }

    /**
     * 对象相减
     * 1、新旧值不同类型情况下，那么将新值作为结果；
     * 2、新旧值想同类型情况下，如果新旧值不相等，那么以新值为基准过滤掉与旧值相同的值；
     */
    public static minus<T>(oldVal, newVal: T): T {
        return this.compare(oldVal, newVal, { strict: false }).result;
    }

    /**
     * 合并对象
     * @param oldVal 
     * @param newVal 
     * @param data .strict 严格比较模式(严格模式下两数组以键值形式合并)
     * @param data .full 合并参数：是否全合并(全合并模式会最大限度保留新旧值,非全合并以新值为基准合并)
     * @param data .repeat 合并参数：非严格模式下合并允许数组元素重复
     */
    public static merge<A, B>(oldVal: A, newVal: B, data?: { full?: boolean, strict?: boolean, repeat?: boolean }) {
        if (!data) data = { full: true, strict: true, repeat: true };
        let val = this.compare(oldVal, newVal, { strict: data.strict, merge: true, full: data.full, repeat: data.repeat });
        return <A & B>(val.flag ? val.result : this.copy(oldVal));
    };

    /**
     * 比较两个对象
     * @param oldVal 
     * @param newVal
     * @param data .strict 严格比较模式(严格模式下两数组以键值形式合并)
     * @param data .merge 合并参数：是否合并
     * @param data .full 合并参数：是否全合并(全合并模式会最大限度保留新旧值,非全合并以新值为基准合并)
     * @param data .repeat 合并参数：非严格模式下合并允许数组元素重复
     */
    private static compare<T>(oldVal, newVal: T, data?: { strict?: boolean, merge?: boolean, full?: boolean, repeat?: boolean }) {
        let result, flag = false;
        if (!data) data = { strict: false, merge: false, full: false, repeat: false };
        switch ([oldVal, newVal].filter(item => item instanceof Object).length) {
            // 新旧值都是Object的情况下，进行递归比较得到结果
            case 2:
                // 非严格模式下比较两数组
                if (!data.strict && oldVal instanceof Array && newVal instanceof Array) {
                    result = data.merge && data.full ? this.copy(oldVal) : [];
                    newVal.forEach(item => {
                        if (data.merge) {
                            if (data.repeat) {
                                result.push(this.copy(item));
                            } else {
                                if (!result.some(res => this.isEqual(res, item))) {
                                    result.push(this.copy(item));
                                }
                            }
                            flag = true;
                        } else {
                            if (!oldVal.some(old => this.isEqual(old, item))) {
                                result.push(this.copy(item));
                                flag = true;
                            }
                        }
                    });
                } else {
                    let oldKey = Object.keys(oldVal),
                        newKey = Object.keys(newVal);
                    switch ([oldVal, newVal].filter(item => item instanceof Array).length) {
                        case 1:
                            result = newVal instanceof Array ? [] : {};
                            newKey.forEach(item => {
                                result[item] = this.copy(newVal[item]);
                            });
                            flag = true;
                            break;
                        default:
                            result = data.merge && data.full ? this.copy(oldVal) : newVal instanceof Array ? [] : {};
                            (data.merge ? newKey : oldKey).forEach(item => {
                                if (data.merge && !data.full) {
                                    result[item] = this.copy(newVal[item]);
                                    flag = true;
                                } else {
                                    let temp = this.compare(oldVal[item], newVal[item], { strict: data.strict, merge: data.merge, full: data.full, repeat: data.repeat });
                                    if (temp.flag) {
                                        if (newKey.indexOf(item) === -1) {
                                            delete result[item];
                                        } else {
                                            result[item] = temp.result;
                                        }
                                        flag = true;
                                    }
                                }
                            });
                            !data.merge && newKey.forEach(item => {
                                if (oldKey.indexOf(item) === -1) {
                                    result[item] = this.copy(newVal[item]);
                                    flag = true;
                                }
                            });
                    }
                }
                break;
            // 只有其中一个值是Object的情况下，如果新值是Object，那么将新值的拷贝作为结果，否则直接将新值作为结果
            case 1:
                result = newVal instanceof Object ? this.copy(newVal) : newVal;
                flag = true;
                break;
            // 新旧值都不是Object的情况下，如果新旧值不相等，那么将新值作为结果
            default:
                if (oldVal !== newVal) {
                    result = newVal;
                    flag = true;
                }
        }
        return {
            result: <T>result,
            flag: flag
        };
    };
}