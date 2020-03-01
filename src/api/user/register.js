import http from '@/api/index'

/**
 * 注册
 * @param {Object} params 参数
 * @param {Function} success 成功
 * @param {Function} failure 失败
 * @param {Function} error 访问异常
 */
export const userLogin = ()=>{
    return http.post('/auth/login', params)
}
