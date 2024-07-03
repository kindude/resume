import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Education from '../components/Education.vue';
import Experience from '../components/Experience.vue';
import Stack from '../components/Stack.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/education', component: Education },
  { path: '/experience', component: Experience},
  { path: '/stack', component: Stack},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;