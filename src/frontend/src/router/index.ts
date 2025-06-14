// src/router/index.ts
// Vue Router 設定，包含首頁、倒數計時頁、設定頁、登入頁
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TimerView from '../views/TimerView.vue';
import SettingsView from '../views/SettingsView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView, meta: { requiresAuth: true } },
  { path: '/timer/:id', name: 'Timer', component: TimerView },
  { path: '/settings', name: 'Settings', component: SettingsView, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
