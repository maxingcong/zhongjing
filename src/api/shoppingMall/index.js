import http from '@/api/'


/*商品列表
 * @param {Object} params 参数
 */
export const getmallList = (params) => {
    return http.get('/mall/commodity', {params})
}

/*商品分类列表
 * @param {Object} params 参数
 */
export const getCommodityCategory = (params) => {
    return http.get('/mall/commodityCategory', {params})
}

/*商品详情
 * @param {Object} params 参数
 */
export const getmallDetails = (params) => {
    return http.get('/mall/detail', {params})
}

/*购物车列表
 * @param {Object} params 参数
 */
export const getmallCard = (params) => {
    return http.get('/mall/cart', params)
}


/*添加购物车
 * @param {Object} params 参数
 */
export const postMallCard = (params) => {
    return http.post('/mall/addCart', params)
}

/*添加收获地址
 * @param {Object} params 参数
 */
export const postyAddress = (params) => {
    return http.post('/mall/addAddress', params)
}

/*删除收获地址
 * @param {Object} params 参数
 */
export const removeAddress = (params) => {
    return http.post('/mall/delAddress', params)
}

/*设置默认收获地址
 * @param {Object} params 参数
 */
export const defaultAddress = (params) => {
    return http.post('/mall/defaultAddress', params)
}


/*收获地址列表
 * @param {Object} params 参数
 */
export const getAddressList = (params) => {
    return http.get('/mall/address', params)
}


/*移除商品
 * @param {Object} params 参数
 */
export const deleteCard = (params) => {
    return http.post('/mall/deleteCart', params)
}




/*确认订单
 * @param {Object} params 参数
 */
export const confirmOrder = (params) => {
    return http.post('/user/confirmOrder',params)
}

/*支付
 * @param {Object} params 参数
 */
export const postPay = (params) => {
    return http.post('/pay',params)
}