import http from "../home";

//获取验证码
export const queryPhoneCaptchaImage = (params) => {
    return http.get('/captchaImage', params)
}
//获取邮箱验证码
export const queryEmailCaptchaImage = (params) => {
    return http.get('/user/emailCheck', params)
}