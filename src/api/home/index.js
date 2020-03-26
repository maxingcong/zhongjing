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
    return http.get('/home/hotTeam', params)
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
    return http.get('/home/hotMatch', params)
}

/*首页列表 战队介绍
 * @param {Object} params 参数
 */
export const queryHomeTeamIntroduction = (params) => {
    return http.get('/home/teamIntroduction', params)
}


/*首页列表 热门竞猜
 * @param {Object} params 参数
 */
export const queryGuessingCompetition = (params) => {
    return http.get('/home/guessingCompetition', params)
}

/*首页列表 竞猜列表
 * @param {Object} params 参数
 */
export const queryGuessingCompetitionInfo = (params) => {
    return http.get('/home/guessingCompetitionInfo', params)
}

/*首页列表 竞猜详情
 * @param {Object} params 参数
 */
export const queryGuessingDetails = (params) => {
    return http.get('/home/gcDetail', {params})
}


/*首页列表 今日热点
 * @param {Object} params 参数
 */
export const queryTodayHot = (params) => {
    return http.get('/home/todayHot', params)
}

/*首页列表 投标
 * @param {Object} params 参数
 */
export const postGuessing = (params) => {
    return http.post('/home/betting', params)
}

/*申请成为房主
 * @param {Object} params 参数
 */
export const postHouseOwner = (params) => {
    return http.post('/user/applyHouseOwner', params)
}
