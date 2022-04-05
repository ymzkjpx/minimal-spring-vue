import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorldPage from '@/pages/HelloWorldPage.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
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
            path: '/*'
            , name: 'NotFound'
            , component: NotFound
        }
    ]
})

export default router
