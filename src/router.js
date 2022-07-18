import routes from "pages"
import { createRouter, createWebHistory, NavigationGuard, RouterMatcher } from "vue-router"
import AuthService from "./auth/authService"

export const router = createRouter({
    history: createWebHistory(),
    routes: routes.map((route) => {
        if (route.meta?.requiresAuth) {
            route.beforeEnter = [
                (to, from, next) => {
                    
                        next({ name: "Index" })
                    
                },
            ] 
        }
        return route
    }),
})
