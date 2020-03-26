import http from '@/api/index'

/*
 * 注册
 * @param {Object} params 参数
 */
export const postRegistrt = (params)=>{
    return http.post('/user/register', params)
}
