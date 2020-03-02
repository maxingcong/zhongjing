import axios from 'axios'
import {Message} from 'element-ui'

const baseURL = '/api'

const http = axios.create({
    baseURL,
    timeout: 15000,
    // 只作用于 params（手动拼接在 url 后的参数不走这里）
    // paramsSerializer,
    headers: {
        'Accept': 'application/json'
    }
})
http.interceptors.request.use(config => {
    // const token = store.getters.auth.token
    // if (token) {
    //     config.headers['X-Auth-Token'] = token
    // }
    config.params = config.params || {}
    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    const data = response.data || {}
    // 将响应结果 `data.resultData` 挂载到 `response.body`
    if (data.resultCode === 1000) {
        response.succeed = true
        response.body = data.resultData || {}
    } else if (data.resultCode === 1003) { // 登录状态失效
        console.log("登录失效了")
    } else {
        response.body = data.resultData || {}
    }
    return response
}, error => {
    if (axios.isCancel(error)) {
        return new Promise(() => {
        })
    }
    if (error.response) {
        // removePending(error.response)
        if (error.response.status === 500) {
            Message.closeAll()
            Message.warning('网络正在开小差，请检查网络连接或稍后重试')
        } else if (error.response.data.resultMsg) {
            Message.closeAll()
            Message.warning(error.response.data.resultMsg)
        }
    }
    return Promise.reject(error)
})

export default http