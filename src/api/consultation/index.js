import http from '@/api/'


/*
资讯列表
 */
export const queryInfoClass = (params) => {
    return http.get('/home/infoClass', {params})
}

/*
资讯详情
 */
export const queryInfoDetails = (params) => {
    return http.get('/home/infoDetail', {params})
}
