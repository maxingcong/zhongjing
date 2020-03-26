import axios from 'axios'
import {Message} from 'element-ui'
import {addPending, removePending} from './utils'
import store from './../store'
import * as filterDate from './apiFilterJson.js'

const baseURL = process.env.NODE_ENV == 'development' ? '/api' : 'http://netdj.com/api'
// const baseURL = 'http://netdj.com/api'
//
console.log(process.env.NODE_ENV);
const http = axios.create({
    baseURL,
    timeout: 15000,
    // 只作用于 params（手动拼接在 url 后的参数不走这里）
    // paramsSerializer,
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json'
    }
})
http.interceptors.request.use(config => {
    removePending(config)
    addPending(config)
    console.log(123123, config, filterDate)
    const token = store.state.auth.info.token
    if (token && !filterDate.data.includes(config.url)) {
        config.headers['Authorization'] = token
    }
    console.log(token, store, config.params)
    config.params = config.params || {}
    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    removePending(response)
    const data = response.data || {}
    if (data.code === 200) {
        response.succeed = true
        response.body = data.data || {}
    } else if (data.code === -1) { // 登录状态失效
        console.log("参数错误")
    } else {
        response.body = data.data || {}
    }
    return response
}, error => {
    removePending(error.response)
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