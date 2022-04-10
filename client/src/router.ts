import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorldPage from '@/pages/sample/HelloWorldPage.vue'
import HomePage from '@/pages/top/HomePage.vue'
import NotFound from '@/components/NotFound.vue'
import UserListPage from '@/pages/userlist/UserListPage.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/'
            , name: 'HomePage'
            , component: HomePage
        },
        {
            path: '/hello-world'
            , name: 'HelloWorldPage'
            , component: HelloWorldPage
        },
        {
            path: '/user-list'
            , name: 'UserList'
            , component: UserListPage
        },
        {
            path: '/*'
            , name: 'NotFound'
            , component: NotFound
        }
    ]
})
