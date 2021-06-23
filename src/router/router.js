import Home from '../page/admin/Admin'
import Login from '../page/login/Login'


let router = [
    {
        path: '/',
        name: '首页',
        components: Home,
        exact: true,
        children: [
            {
                path: '/login',
                name: '登录',
                components: Login
            } 
        ]
    },
    {
        path: '/login',
        name: '登录',
        components: Login
    }
];

export default router;