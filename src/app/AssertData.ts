export default class Code {
    static runIf({ check, success, fail }: { check: boolean, success: () => any, fail?: () => any }) {
        if (check) {
            const successResponse = success();
        } else {
            if (fail != undefined) {
                fail();
            }
        }
    }

    static isFirstItemInArray(array: any[]): boolean {
        return array.length > 0 && typeof array[0] !== 'undefined';
    }

    static isUnexpectedBehavior(func: Function): boolean {
        try {
            func();
            return false;
        } catch (error) {
            return true;
        }
    }

    static isNullOrUndefined(value: any): boolean {
        return value === null || typeof value === 'undefined';
    }

    static isUndefined(value: any): boolean {
        return typeof value === 'undefined';
    }

    static isNaN(value: any): boolean {
        return typeof value === 'number' && isNaN(value);
    }

    static isEmptyObject(obj: object): boolean {
        return Object.keys(obj).length === 0;
    }

    static isEmptyString(str: string): boolean {
        return str.trim().length === 0;
    }
}