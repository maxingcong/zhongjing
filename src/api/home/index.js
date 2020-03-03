import http from '@/api/'


// eslint-disable-next-line valid-jsdoc
/*首页列表 轮播图
 * @param {Object} params 参数
 */
export const queryHomeBanner = (params) => {
    return http.get('/home/banner', params)
}

/*首页列表全部游戏
 * @param {Object} params 参数
 */
export const queryHomeGame = (params) => {
    return http.get('/home/game', params)
}

/*首页列表 战队
 * @param {Object} params 参数
 */
export const queryHomeCombatTeam = (params) => {
    return http.get('/home/combatTeam', params)
}

/*首页列表 咨询
 * @param {Object} params 参数
 */
export const queryHomeConsultation = (params) => {
    return http.get('/home/info', params)
}

/*首页列表 赛事
 * @param {Object} params 参数
 */
export const queryHomeMatch = (params) => {
    return http.get('/home/match', params)
}

/*首页列表 战队介绍
 * @param {Object} params 参数
 */
export const queryHomeTeamIntroduction = (params) => {
    return http.get('/home/teamIntroduction', params)
}
