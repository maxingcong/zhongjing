import http from '@/api/'


// eslint-disable-next-line valid-jsdoc
/**
 * @param {Object} params 参数
 * @param {Function} success 成功
 * @param {Function} failure 失败
 * @param {Function} error 访问异常
 */
export const userLogin = (params)=>{
    return http.post('/auth/login', params)
}
