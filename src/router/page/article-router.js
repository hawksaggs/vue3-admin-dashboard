export default [
    {
        path: '/article',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Article',
                component: () => import('@/views/article-view.vue')
            }
        ]
    }
]