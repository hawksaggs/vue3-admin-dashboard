export default [
    {
        path: '/tab',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Tab',
                component: () => import('@/views/tab-view.vue')
            }
        ]
    }
]