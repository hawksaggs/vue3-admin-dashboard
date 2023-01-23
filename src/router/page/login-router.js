export default [
    {
        path: '/login',
        component: () => import('@/views/login-view.vue'),
        meta: {
            title: 'Swing :: Login Page'
        },
    }
]