import Vue from 'vue'
import Router from 'vue-router'
import store from '@store/modules/menu'


/* 处理路由导航重复push同一个路由控制台抛出的异常 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};
/* 处理路由导航重复push同一个路由控制台抛出的异常 */

Vue.use(Router);
const router = new Router({
    routes: [
        ...store.state.data
    ]
});
export default router;