import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomePage';
import Favorite from '@/views/FavoriteCharacterPage';

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: Favorite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
