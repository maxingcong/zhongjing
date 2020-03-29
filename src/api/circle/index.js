import http from '@/api/'


// eslint-disable-next-line valid-jsdoc
/*查询全部
 * @param {Object} params 参数
 */
export const getCircleAll = (params) => {
    return http.get('/circle/all', params)
}
/*查询圈子动态
 * @param {Object} params 参数
 */
export const getCircleDynamic = (params) => {
    return http.get('/circle/info', params)
}
/*查询关注
 * @param {Object} params 参数
 */
export const getCircleFollow = (params) => {
    return http.get('/circle/followInfo', params)
}
/*发布动态
 * @param {Object} params 参数
 */
export const posyCircleAll = (params) => {
    return http.post('/circle/post', params)
}

/*我的粉丝
 * @param {Object} params 参数
 */
export const queryMyFans = (params) => {
    return http.get('/user/fans', params)
}

/*圈子个人信息
 * @param {Object} params 参数
 */
export const queryMyInfo = (params) => {
    return http.get('/circle/userStatistics', params)
}

/*圈子推荐
 * @param {Object} params 参数
 */
export const queryMyRecommend = (params) => {
    return http.get('/circle/recommend', params)
}

/*圈子关注
 * @param {Object} params 参数
 */
export const queryMyFollowCircle = (params) => {
    return http.post('/user/addFollowCircle', params)
}
/*取消圈子关注
 * @param {Object} params 参数
 */
export const queryCancelCircle = (params) => {
    return http.post('/user/cancelCircle', params)
}
