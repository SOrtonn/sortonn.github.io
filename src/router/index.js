import { createRouter, createWebHashHistory } from 'vue-router'; // Switch to hash mode
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projects', name: 'projects', component: ProjectsView }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
