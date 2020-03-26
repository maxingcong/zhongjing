import http from '@/api/'

/*获取图片验证码
 * @param {Object} params 参数
 */
export const queryImgCode = (params) => {
    return http.get('/captchaImage', params)
}

/*获取手机验证码
 * @param {Object} params 参数
 */
export const queryPhoneCode = (params) => {
    return http.get('user/sendCode', {params})
}


/*获取邮箱验证码
 * @param {Object} params 参数
 */
export const queryEmailCode = (params) => {
    return http.get('/user/sendEmail', {params})
}
