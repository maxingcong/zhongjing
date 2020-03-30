let shoppingMall = [
    {
        name: 'all_merchandise',
        path: 'all_merchandise',
        meta: {
            title: '全部商品'
        },
        component: () => import("@/views/shoppingMall/List.vue")
    },
    {
        path: ':post_id',
        meta: {
            title: '游戏手办'
        },
        component: () => import("@/views/shoppingMall/List.vue")
    }
    // {
    //     name: 'game_skin',
    //     path: 'game_skin',
    //     meta: {
    //         title: '游戏皮肤'
    //     },
    //     component: () => import("@/views/shoppingMall/List.vue")
    // },
    // {
    //     name: 'bonus_points',
    //     path: 'bonus_points',
    //     meta: {
    //         title: '积分红包'
    //     },
    //     component: () => import("@/views/shoppingMall/List.vue")
    // }
]

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
        name: 'my_room',
        path: 'my_room',
        meta: {
            title: '我的房间'
        },
        component: () => import("@/views/personalCenter/MyRoom.vue")
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
                redirect: {
                    name: "home_list"
                },
                component: () => import("@/views/home"),
                children: [
                    {
                        name: 'home_list',
                        path: '/home/home_list',
                        meta: {
                            title: "首页列表",
                            englishTitle: 'Home'
                        },
                        component: () => import("@/views/home/List")
                    },
                    {
                        name: 'guessing_competition_list',
                        path: '/home/guessing_competition_list',
                        meta: {
                            title: "竞猜列表"
                        },
                        component: () => import("@/views/home/GuessingCompetitionList")
                    }
                ]
            },
            {
                name: 'consultation',
                path: '/consultation',
                meta: {
                    title: "资讯",
                    englishTitle: 'Information'
                },
                redirect: {
                    name: "consultation_list"
                },
                component: () => import("@/views/consultation"),
                children: [
                    {
                        name: 'consultation_list',
                        path: 'consultation_list',
                        meta: {},
                        component: () => import("@/views/consultation/List")
                    },
                    {
                        name: 'consultation_details',
                        path: 'consultation_details',
                        meta: {},
                        component: () => import("@/views/consultation/components/ConsultationDetails.vue")
                    }
                ]
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
                name: 'match_details',
                path: '/match/details',
                meta: {
                    hide: true,
                    title: "赛事详情"
                },
                component: () => import("@/views/match/components/Details.vue")
            },
            {
                name: 'combatTeam',
                path: '/combatTeam',
                meta: {
                    title: "战队",
                    englishTitle: 'Clan'
                },
                component: () => import("@/views/combatTeam")
            }, {
                name: 'team_details',
                path: '/team_details',
                meta: {
                    hide: true,
                    title: "战队详情"
                },
                component: () => import("@/views/combatTeam/Details")
            },
            {
                name: 'team_member_details',
                path: '/team_member_details',
                meta: {
                    hide: true,
                    title: "战队队员详情"
                },
                component: () => import("@/views/combatTeam/MemberDetails")
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
                redirect: '/shoppingMall/0',
                meta: {
                    title: "商城",
                    englishTitle: 'Mall'
                },
                component: () => import("@/views/shoppingMall"),
                children: [
                    ...shoppingMall
                ]
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
            },
            {
                name: 'shoppinf_cart',
                path: '/shoppinf_cart',
                meta: {
                    hide: true,
                    title: '购物车'
                },
                component: () => import("@/views/shoppingMall/ShoppingCart.vue")
            },
            {
                name: 'edit_address',
                path: '/edit_address',
                meta: {
                    hide: true,
                    title: '修改地址'
                },
                component: () => import("@/views/shoppingMall/EditAddress.vue")
            }, {
                name: 'shopping_details',
                path: '/shopping_details',
                meta: {
                    hide: true,
                    title: '商品详情'
                },
                component: () => import("@/views/shoppingMall/ShoppingDetails.vue")
            },
            {
                name: 'forget_password',
                path: '/forget_password',
                meta: {
                    hide: true,
                    title: '忘记密码'
                },
                component: () => import("@/views/ForgetPassword.vue")
            },
            {
                name: 'register',
                path: '/register',
                meta: {
                    hide: true,
                    title: '注册'
                },
                component: () => import("@/views/Register.vue")
            },
            {
                name: 'verify_email',
                path: '/verify_email',
                meta: {
                    hide: true,
                    title: '验证邮箱'
                },
                component: () => import("@/views/VerifyEmail.vue")
            },
            {
                name: 'guessing_competition_details',
                path: 'guessing_competition_details',
                meta: {
                    hide: true,
                    title: "竞猜详情"
                },
                component: () => import("@/views/home/GuessingCompetitionDetails")
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
        concerned,
        shoppingMall
    },
    actions: {}
}