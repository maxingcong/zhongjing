import * as types from '../mutation-types'
import {setAuth} from '@/utils/local'

const stort = {
    info: {
        photo: '',
        token: '',
        img: '',
        data: {}
    },
    bean: 0
}

export default {
    state: stort,
    mutations: {
        setBean(state, value) {
            state.bean = value;
        },
        [types.SET_AUTH](state, value) {
            setAuth(value)
            state.info = {...value}
        }
    }
}