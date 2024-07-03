import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Education from '../components/Education.vue';
import Experience from '../components/Experience.vue';
import Stack from '../components/Stack.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/education', component: Education, meta: { title: 'Education' } },
  { path: '/experience', component: Experience, meta: { title: 'Experience' } },
  { path: '/stack', component: Stack, meta: { title: 'Stack' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const { title,  } = to.meta;
  const defaultTitle = 'Default Title';

  document.title = title || defaultTitle

});

export default router;
