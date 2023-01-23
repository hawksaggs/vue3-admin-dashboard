export default [
    {
        path: '/article',
        component: () => import('@/layouts/main/layout-bar.vue'),
        meta: {
            title: 'Swing :: Article Component'
        },
        children: [
            {
                path: '',
                name: 'Article',
                component: () => import('@/views/article-view.vue')
            }
        ]
    }
]