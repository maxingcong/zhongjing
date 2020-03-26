import Vue from 'vue'
import Router from 'vue-router'
import store from '@store/modules/menu'
import {clearPending} from '@/api/utils'


/* 处理路由导航重复push同一个路由控制台抛出的异常 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};
/* 处理路由导航重复push同一个路由控制台抛出的异常 */

Vue.use(Router);
const createRouter = () => new Router({
    routes: [
        ...store.state.data
    ],
    scrollBehavior: function (to, from, savedPosition) {
        if (from.name == 'consultation_list' || from.name == 'consultation_details') {
            return savedPosition || {x: 0, y: 100}
        } else {
            return savedPosition || {x: 0, y: 0}
        }
    }
});

const router = createRouter()


router.beforeEach((to, from, next) => {
    clearPending()
    console.log(to, from)
    next()
})

export default router;
