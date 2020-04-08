import http from '@/api/index'

/*
 * 忘记密码
 * @param {Object} params 参数
 * @param {Function} success 成功
 * @param {Function} failure 失败
 * @param {Function} error 访问异常
 */
export const postForget = (params)=>{
    return http.post('/user/emailCheck', params)
}
