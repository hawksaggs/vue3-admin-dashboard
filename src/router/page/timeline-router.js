export default [
    {
        path: '/timeline',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Timeline Component'
        },
        children: [
            {
                path: '',
                name: 'Timeline',
                component: () => import('@/views/timeline-view.vue')
            }
        ]
    }
]