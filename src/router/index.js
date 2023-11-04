import { createRouter, createWebHistory } from 'vue-router';
import Registration from './components/registration.vue';
import PlayerInfo from './components/playerInfo.vue';

const routes = [
  {
    path: '/register',
    name: 'registration', 
    component: registration, 
  },
  {
    path: '/player-info',
    name: 'PlayerInfo', 
    component: playerInfo, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
