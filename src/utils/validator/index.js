/**
 * 验证工具函数
 */
import validateCardNo from "./validateCardNo";
import validPositiveInteger from "./validPositiveInteger";
import validPositiveRealNumber from "./validPositiveRealNumber";

const REGULARS = {
    mobile: /^1[3456789]\d{9}$/,
    mobileTel: /^[+\-\s0-9]{6,20}$/,
    pwd: /^\S{6,16}$/
};
/**
 * 验证整数
 * @param {Object} opts
 * @returns {void}
 */
export function positiveInteger(opts) {
    return (rule, value, callback) => {
        opts.value = value;
        opts.required = rule.required;
        let msg = validPositiveInteger(opts);
        if (value === "" && !opts.required) {
            callback();
        } else if (msg) {
            callback(new Error(msg));
        } else {
            callback();
        }
    };
}

/**
 * 验证浮点数
 * @param {Object} opts
 * @returns {void}
 */
export function positiveRealNumber(opts) {
    return (rule, value, callback) => {
        opts.value = value;
        opts.required = rule.required;
        let msg = validPositiveRealNumber(opts);
        if (value === "" && !opts.required) {
            callback();
        } else if (msg) {
            callback(new Error(msg));
        } else {
            callback();
        }
    };
}

/**
 * 验证身份证
 * @param {Object} opts
 * @returns {void}
 */
export function validIDNo(opts = { required: false }) {
    return (rule, value, callback) => {
        opts.required = rule.required;
        if (value === "" && !opts.required) {
            callback();
        } else if (!validateCardNo(value)) {
            callback(new Error("请输入正确的身份证号"));
        } else {
            callback();
        }
    };
}

/**
 * 验证手机号码
 * @param {Object} opts
 * @returns {void}
 */
export function validMobile() {
    return (rule, value, callback) => {
        if (value === "" && !rule.required) {
            callback();
        } else if (!REGULARS.mobile.test(value)) {
            callback(new Error("请输入正确的手机号码"));
        } else {
            callback();
        }
    };
}

/**
 * 验证电话号码
 * @param {Object} opts
 * @returns {void}
 */
export function validMobileTel() {
    return (rule, value, callback) => {
        if (value === "" && !rule.required) {
            callback();
        } else if (!REGULARS.mobileTel.test(value)) {
            callback(new Error("请输入正确的电话号码"));
        } else {
            callback();
        }
    };
}
/**
 * 验证电话号码
 * @param {Object} opts
 * @returns {void}
 */
export function validNumber(opts) {
    return {
        required: opts.required,
        type: opts.type || "number",
        min: opts.min || 0,
        message: opts.message || "只能输入数字",
        trigger: opts.trigger || "change",
        transform(value) {
            value = String(value).trim();
            if (this.required && (value === "" || value === null)) {
                return value;
            } else {
                return value >= 0 ? Number(value) : value;
            }
        }
    };
}
