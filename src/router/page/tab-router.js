export default [
    {
        path: '/tab',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Tab Component'
        },
        children: [
            {
                path: '',
                name: 'Tab',
                component: () => import('@/views/tab-view.vue')
            }
        ]
    }
]