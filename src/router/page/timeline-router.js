export default [
    {
        path: '/timeline',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Timeline',
                component: () => import('@/views/timeline-view.vue')
            }
        ]
    }
]