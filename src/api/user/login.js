import http from '@/api/index'
import {Message} from 'element-ui'

/**
 * 用户登录
 * @param {Object} params 参数
 * @param {Function} success 成功
 * @param {Function} failure 失败
 * @param {Function} error 访问异常
 */
export const userLogin = (params, success, failure, error) => {
    if (Array.isArray(success)) {
        success = failure = error = success[0]
    }
    // user/login
    http.post('/auth/login', params).then(res => {
        const data = res.body || {}
        if (res.succeed) {
            success(data)
        } else {
            Message.closeAll()
            Message.warning(res.data.resultMsg)
            failure()
        }
    }).catch(err => {
        error()
        console.log(err.config && err.config.url, err.response || err.message)
    })
}
