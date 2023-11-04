import { createRouter, createWebHistory } from 'vue-router';
import Registration from './components/Registration.vue';
import PlayerInfo from './components/PlayerInfo.vue';

const routes = [
  {
    path: '/',
    name: 'Home', // Change 'Home' to the name you prefer
    component: Registration, // Set the component for the root path
  },
  {
    path: '/player-info',
    name: 'PlayerInfo', // Change 'PlayerInfo' to the name you prefer
    component: PlayerInfo, // Set the component for the '/player-info' path
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
