export default [
    {
        path: '/form-advanced',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Advanced Form',
                component: () => import('@/views/advanced-form-view.vue')
            }
        ]
    }
]