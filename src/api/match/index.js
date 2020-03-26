import http from '@/api/'

/*游戏赛事
 */
export const queryMathList = (params) => {
    return http.get('/home/match/' + params.gameId, params)
}

/*赛事详情
 */
export const queryMathDetails = (params) => {
    return http.get('/home/matchDetail', {params})
}

/*关注赛事
 */
export const postMath = (params) => {
    return http.get('/user/followMatch', {params})
}
