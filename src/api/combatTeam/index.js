import http from '@/api/'


/*战队列表
 * @param {Object} params 参数
 */
export const queryTeamList = (params) => {
    return http.get('/home/combatTeam', params)
}

/*战队详情
 * @param {Object} params 参数
 */
export const queryTeamDetails = (params) => {
    return http.get('/home/teamIntroduction', {params})
}

/*关注战队
 * @param {Object} params 参数
 */
export const postTeam = (params) => {
    return http.get('/user/insertCombatTeam', {params})
}

/*取消关注战队
 * @param {Object} params 参数
 */
export const postCancelTeam = (params) => {
    return http.post('/user/cancelTeam', {params})
}

/*战队队员
 * @param {Object} params 参数
 */
export const queryTeamMenber = (params) => {
    return http.get('/home/teamIntroduction' + params.gameId, params)
}

/*关注战队队员
 * @param {Object} params 参数
 */
export const postTeamPlayer = (params) => {
    return http.post('/user/addFollowPlayer', params)
}

/*取消关注战队队员
 * @param {Object} params 参数
 */
export const postCancelPlayer = (params) => {
    return http.post('/user/cancelPlayer', params)
}
