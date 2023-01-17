export default [
    {
        path: '/chat-box',
        component: () => import('@/layouts/main/layout-bar.vue'),
        children: [
            {
                path: '',
                name: 'Chat Box',
                component: () => import('@/views/chat-view.vue')
            }
        ]
    }
]