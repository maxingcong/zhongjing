import http from '@/api/'


// eslint-disable-next-line valid-jsdoc
/*战队列表 轮播图
 * @param {Object} params 参数
 */
export const queryTeamList = (params) => {
    return http.get('/home/banner', params)
}
