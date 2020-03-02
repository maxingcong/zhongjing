import http from '@/api'


// eslint-disable-next-line valid-jsdoc
/**个人信息
 * @param {Object} params 参数
 * @return fn  promise
 */
export const queryMyInfo = (params) => {
    return http.get('/auth/login', params)
}

/*个人信息修改
 * @param {Object} params 参数
 * @return fn  promise
 */
export const postMyInfo = (params) => {
    return http.post('/auth/login', params)
}

/*
*充值
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const putRecharge = (params) => {
    return http.put('/auth/login', params)
}


/*
*充值列表
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryRecharge = (params) => {
    return http.get('/auth/login', params)
}


/*
*查询明细
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryDetailed = (params) => {
    return http.get('/auth/login', params)
}


/*
*竞猜列表
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryGuess = (params) => {
    return http.get('/auth/login', params)
}

/*
*订单列表
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryOrderList = (params) => {
    return http.get('/auth/login', params)
}


/*
*订单详情
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryOrderDetails = (params) => {
    return http.get('/auth/login', params)
}

/*
*我的游戏
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryInfoGame = (params) => {
    return http.get('/auth/login', params)
}

/*
*订我的比赛
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryInfoTeam = (params) => {
    return http.get('/auth/login', params)
}

/*
*我的战队
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryInfoPlayer = (params) => {
    return http.get('/auth/login', params)
}


/*
*代理推广
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryAgent = (params) => {
    return http.get('/auth/login', params)
}
/*
*t推广明细
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryAgentDetails = (params) => {
    return http.get('/auth/login', params)
}

/*
*推广好友
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryAgentFriend = (params) => {
    return http.get('/auth/login', params)
}

/*
*立即兑换查询
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryAgentExchange = (params) => {
    return http.get('/auth/login', params)
}

/*
*立即兑换提交
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const postAgentExchange = (params) => {
    return http.post('/auth/login', params)
}

/*
*消息列表
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const postSystem = (params) => {
    return http.get('/auth/login', params)
}