export default [
    {
        path: '/form-advanced',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Advanced Form'
        },
        children: [
            {
                path: '',
                name: 'Advanced Form',
                component: () => import('@/views/advanced-form-view.vue')
            }
        ]
    }
]