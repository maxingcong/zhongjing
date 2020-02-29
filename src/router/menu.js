let routeItem = [
    {
        name: '/',
        path: '/',
        redirect: {
            name: "home"
        },
        component: () => import("@/layout/index.vue"),
        children: [
            {
                name: 'home',
                path: '/home',
                meta: {
                    title: "首页",
                    englishTitle: 'Home'
                },
                component: () => import("@/views/home")
            },
            {
                name: 'consultation',
                path: '/consultation',
                meta: {
                    title: "咨询",
                    englishTitle: 'Information'
                },
                component: () => import("@/views/consultation")
            },
            {
                name: 'match',
                path: '/match',
                meta: {
                    title: "赛事",
                    englishTitle: 'Match'
                },
                component: () => import("@/views/match")
            },
            {
                name: 'combatTeam',
                path: '/combatTeam',
                meta: {
                    title: "战队",
                    englishTitle: 'Clan'
                },
                component: () => import("@/views/combatTeam")
            },
            {
                name: 'circle',
                path: '/circle',
                meta: {
                    title: "圈子",
                    englishTitle: 'Circle'
                },
                component: () => import("@/views/circle")
            },
            {
                name: 'shoppingMall',
                path: '/shoppingMall',
                meta: {
                    title: "商城",
                    englishTitle: 'Mall'
                },
                component: () => import("@/views/shoppingMall")
            },
            {
                name: 'login',
                path: '/login',
                meta: {
                    hide: true
                },
                component: () => import("@/views/Login.vue")
            }
        ]
    },
    {
        name: '*',
        path: '*',
        redirect: {
            name: "/"
        }
    }
]
export default routeItem