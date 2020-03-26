/**
 * 本地存储操作
 */
import Cookies from "js-cookie"

const COOKIE_AUTH = '89c3a95baea9b5940d25ab0e48c0f93b'


export const getAuth = () => {
    return Cookies.get(COOKIE_AUTH)
}

export const setAuth = value => {
    return Cookies.set(COOKIE_AUTH, value, {
        path: '/'
    })
}

export const removeAuth = () => {
    return Cookies.set(COOKIE_AUTH, '', {expires: -1, path: '/'})
}
