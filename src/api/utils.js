/**
 * http 请求工具方法
 */
import axios from 'axios'
import qs from 'qs'

/**
 * 过滤空参数
 * @param {Object} params 查询参数对象
 * @return {String} 查询参数
 */
export const paramsSerializer = params => {
    const data = {}
    for (const k in params) {
        const value = params[k]
        if (value !== '' && value !== null && value !== undefined) {
            data[k] = value
        }
    }
    return qs.stringify(data, {arrayFormat: 'brackets'})
}

// 声明一个 Map 用于存储每个请求的 标识 和 取消函数
const pending = new Map()
/**
 * 添加请求
 * @param {Object} config
 */
export const addPending = (config) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&')
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
        if (!pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
            pending.set(url, cancel)
        }
    })
}
/**
 * 移除请求
 * @param {Object} config
 */
export const removePending = (config) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&')
    if (pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
        const cancel = pending.get(url)
        cancel(url)
        pending.delete(url)
    }
}
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 * @param {Object} config
 */
export const clearPending = () => {
    for (const [url, cancel] of pending) {
        cancel(url)
    }
    pending.clear()
}
