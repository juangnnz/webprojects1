import { createRouter, createWebHistory } from 'vue-router';
import Registration from './components/Registration.vue';
import PlayerInfo from './components/PlayerInfo.vue';

const routes = [
  {
    path: '/register',
    name: 'Registration', 
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
