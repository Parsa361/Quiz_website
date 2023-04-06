import { createRouter, createWebHashHistory } from 'vue-router'
import QuizesView from "@/pages/QuizesView.vue"
import QuizView from "@/pages/QuizView.vue"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'quizes',
            component: QuizesView,
        },
        {
            path: '/quiz/:id',
            name: 'quiz',
            component: QuizView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import("@/pages/AboutView.vue"),
        },
    ]
})

export default router