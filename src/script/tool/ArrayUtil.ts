import { ObjectUtil } from "./ObjectUtil";

export class ArrayUtil {

    /**
     * 打乱数组
     * @param arr 原始数组
     */
    public static upset<T>(arr: T[]): T[] {
        let newArr = arr.sort(() => 0.5 - Math.random());
        return newArr;
    }

    /**
     * 数组去重
     * @param arr 原始数组
     */
    public static unique<T>(arr: T[]): T[] {
        let newArr = [];
        arr.forEach((item) => {
            if (newArr.indexOf(item) < 0) { newArr.push(item); }
        });
        return newArr;
    }

    /**
     * 获取不重复随机数组
     * @param arr 原始数组
     * @param num 获取长度
     */
    public static getRandomUniqueArr<T>(arr: T[], num): T[] {
        let newArr = ObjectUtil.copy(arr);
        let result: T[] = [];
        for (let i = 0; i < num; i++) {
            if (newArr.length > 0) {
                let arrIndex = Math.floor(Math.random() * newArr.length);
                result[i] = newArr[arrIndex];
                newArr.splice(arrIndex, 1);
            } else {
                break;
            }
        }
        return result;
    }

    /**
     * 根据权重数组返回一个索引
     * @param arr 权重数组
     */
    public static getIndexByWeight(arr: number[]): number {
        let sum = 0;    // 总和
        let rand = 0;   // 每次循环产生的随机数
        let result = 0; // 返回的对象的index
        // 计算总和
        for (let i in arr) {
            sum += Number(arr[i]);
        }
        // 思路就是如果设置的数落在随机数内，则返回，否则减去本次的数
        for (let i in arr) {
            rand = Math.floor(Math.random() * sum + 1);
            if (arr[i] >= rand) {
                result = Number(i);
                break;
            } else {
                sum -= arr[i];
            }
        }
        return result;
    }
}