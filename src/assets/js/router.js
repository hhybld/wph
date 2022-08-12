import VueRouter from 'vue-router'
import login from '../../components/login.vue'
import sgin from '../../components/sgin.vue'
import my from '../../components/my.vue'
import index from '../../components/index.vue'
import kind from '../../components/kind.vue'
import list from '../../components/list.vue'


var router=new VueRouter({
    routes:[
        // {
        //     path:'/',
        //     component:first,
        //     children:[
        //         {
        //             path:'/login',
        //             component:login
        //         },
        //         {
        //             path:'/index',
        //             component:index
        //         },
        //         {
        //             path:'/shop',
        //             component:shop
        //         },
        //         {
        //             path:'/Sgin',
        //             component:Sgin
        //         }
        //     ],
        //     redirect:'/index'
        // },
        {
            path:'/',
            component:login
        },
        {
            path:'/sgin',
            component:sgin
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/index',
            component:index
        },
        {
            path:'/kind',
            component:kind
        },
        {
            path:'/list',
            component:list
        }
    ]
})
export default router