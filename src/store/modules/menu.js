//我的关注
let concerned = [
    {
        name: 'concerned_team',
        path: 'concerned_team',
        meta: {
            title: '关注战队'
        },
        component: () => import("@/views/personalCenter/components/ConcernedTeam.vue")
    },
    {
        name: 'concerned_game',
        path: 'concerned_game',
        meta: {
            title: '关注比赛'
        },
        component: () => import("@/views/personalCenter/components/ConcernedGame.vue")
    },
    {
        name: 'concerned_player',
        path: 'concerned_player',
        meta: {
            title: '关注选手'
        },
        component: () => import("@/views/personalCenter/components/ConcernedPlayer.vue")
    }
]

//个人资料列表
let myCenter = [
    {
        name: 'my_info',
        path: 'my_info',
        meta: {
            title: '个人资料'
        },
        component: () => import("@/views/personalCenter/MyInfo.vue")
    },
    {
        name: 'my_guess',
        path: 'my_guess',
        meta: {
            title: '我的竞猜'
        },
        component: () => import("@/views/personalCenter/MyGuess.vue")
    },
    {
        name: 'my_order',
        path: 'my_order',
        meta: {
            title: '我的订单'
        },
        component: () => import("@/views/personalCenter/MyOrder.vue")
    },
    {
        name: 'my_concern',
        path: 'my_concern',
        redirect: 'my_concern/concerned_team',
        meta: {
            title: '我的关注'
        },
        component: () => import("@/views/personalCenter/MyConcern.vue"),
        children: [
            ...concerned
        ]
    },
    {
        name: 'agent_promotion',
        path: 'agent_promotion',
        meta: {
            title: '代理推广'
        },
        component: () => import("@/views/personalCenter/AgentPromotion.vue")
    },
    {
        name: 'system_message',
        path: 'system_message',
        meta: {
            title: '系统消息'
        },
        component: () => import("@/views/personalCenter/SystemMessage.vue")
    }
]

//header 列表
let store = [
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
            },
            {
                name: 'personal_center',
                path: '/personal_center',
                redirect: '/personal_center/my_info',
                meta: {
                    hide: true,
                    title: '个人中心'
                },
                component: () => import("@/views/personalCenter"),
                children: [
                    ...myCenter
                ]
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


export default {
    state: {
        data: store,
        myCenter,
        concerned
    },
    actions: {}
}