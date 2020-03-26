import http from "../home";

//获取验证码
export const queryPhoneCaptchaImage = (params) => {
    return http.get('/captchaImage', params)
}

//获取手机验证码
export const queryPhoneCode = (params) => {
    debugger
    return http.get('/user/sendCode', {params})
}