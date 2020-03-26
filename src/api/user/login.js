import http from '@/api'

/*
 * 用户登录
 * @param {Object} params 参数
 */
export const userLogin = (params) => {
    return http.post('/auth/login', params)
}
