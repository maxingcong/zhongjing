import http from '@/api/'


/*
资讯列表分类
 */
export const queryInfoClass = (params) => {
    return http.get('/home/infoClass', {params})
}
/*
资讯列表
 */
export const queryInfoClassList = (params) => {
    return http.get('/home/information', {params})
}

/*
资讯详情
 */
export const queryInfoDetails = (params) => {
    return http.get('/home/infoDetail', {params})
}

/*
相关资讯
 */
export const queryInfomation = (params) => {
    return http.post('/home/matchInformation', {params})
}


