export default [
    {
        path: '/form-standard',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Form Standard',
                component: () => import('@/views/standard-form-view.vue')
            }
        ]
    }
]