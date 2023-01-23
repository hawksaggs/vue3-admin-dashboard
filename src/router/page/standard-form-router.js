export default [
    {
        path: '/form-standard',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Standard Form'
        },
        children: [
            {
                path: '',
                name: 'Form Standard',
                component: () => import('@/views/standard-form-view.vue')
            }
        ]
    }
]