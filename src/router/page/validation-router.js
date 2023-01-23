export default [
    {
        path: '/validation',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Validation Form'
        },
        children: [
            {
                path: '',
                name: 'Validation Form',
                component: () => import('@/views/validation-view.vue')
            }
        ]
    }
]