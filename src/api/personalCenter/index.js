import http from '@/api'


// eslint-disable-next-line valid-jsdoc
/**个人信息
 * @param {Object} params 参数
 * @return fn  promise
 */
export const queryMyInfo = (params) => {
    return http.get('/user/info', {params})
}

/*个人信息修改  修改手机号
 * @param {Object} params 参数
 * @return fn  promise
 */
export const postMyInfoPhoto = (params) => {
    return http.get('/user/editPhone', params)
}
/*个人信息修改  修改邮箱
 * @param {Object} params 参数
 * @return fn  promise
 */
export const postMyInfoEmail = (params) => {
    return http.get('/user/editEmail', {params})
}

/*个人头像
*  * @param {Object} params 参数
 * @return fn  promise
 */
export const postMyInfoImg = (params) => {
    return http.post('/user/updateUser', params)
}


/*
*充值
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const putRecharge = (params) => {
    return http.post('/recharge', params)
}


/*
*充值列表
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryRecharge = (params) => {
    return http.get('/user/beanRecharge', params)
}


/*
*京豆明细
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryDetailed = (params) => {
    return http.get('/user/beanDetailed', params)
}


/*
*竞猜列表
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryGuess = (params) => {
    return http.get('/user/mybetting', params)
}

/*
*订单列表
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryOrderList = (params) => {
    return http.get('/user/myOrder', params)
}


/*
*订单详情
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryOrderDetails = (params) => {
    return http.get('/user/orderDetail/' + params.id)
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
*我的比赛
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
    return http.get('/user/promotionDetails', params)
}
/*
*t推广明细
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryAgentDetails = (params) => {
    return http.get('/user/promotionDetails', params)
}

/*
*推广好友
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryAgentFriend = (params) => {
    return http.get('/user/friend', params)
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
export const getSystem = (params) => {
    return http.get('/user/message', params)
}

/*
*关注赛事
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const getFollowMatch = (params) => {
    return http.get('/user/followMatch', params)
}
/*
*关注战队
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const getFollowTeam = (params) => {
    return http.get('/user/followTeam', {params})
}


/*
*关注选手
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const getFollowPlayer = (params) => {
    return http.get('/user/followPlayer', params)
}

/*
*我的房间
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryMyRoom = (params) => {
    return http.get('/user/myRoom', {params})
}

/*
*关注游戏（个人中心我的关注）
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const getfollowGame = (params) => {
    return http.get('/user/followGame', {params})
}

/*
*获取推广吗
 * @param {Object} params 参数
 *  * @return fn  promise
 */
export const queryAgentCode = (params) => {
    return http.get('/user/promoCode', {params})
}