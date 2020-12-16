import vueRouter from 'vue-router'



import crear_usuario from './components/crear_usuario'

import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            
            {
                path: '/user/crear_usuario',
                name: "user_new",
                component: crear_usuario
            },
        ]
    })

export default router