import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorldPage from '@/pages/sample/HelloWorldPage.vue'
import HomePage from '@/pages/sample/HomePage.vue'
import NotFound from '@/components/NotFound.vue'
import UserList from '@/pages/userlist/UserList.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/'
            , name: 'HomePage'
            , component: HomePage
        },
        {
            path: '/user-list'
            , name: 'UserList'
            , component: UserList
        },
        {
            path: '/hello-world'
            , name: 'HelloWorldPage'
            , component: HelloWorldPage
        },
        {
            path: '/*'
            , name: 'NotFound'
            , component: NotFound
        }
    ]
})
