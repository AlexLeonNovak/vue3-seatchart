import { MainPage, ModalPage } from '@/pages'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[]  = [
  { path: '/', component: MainPage, name: 'Main'},
  { path: '/modal', component: ModalPage, name: 'Modal'},
]

export const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
