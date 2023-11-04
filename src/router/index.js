import { createRouter, createWebHistory } from 'vue-router';
import Registration from './components/Registration.vue';
import PlayerInfo from './components/PlayerInfo.vue';

const routes = [
  {
    path: '/register',
    name: 'Registration', 
    component: Registration, 
  },
  {
    path: '/player-info',
    name: 'PlayerInfo', 
    component: PlayerInfo, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
