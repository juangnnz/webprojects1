import { createRouter, createWebHistory } from 'vue-router';
import registration from '../components/registration.vue';
import playerInfo from '../components/playerInfo.vue';
import join from '../components/join.vue';
import deletePlayer from '../components/deletePlayer.vue';
import attacks from '../components/attacks.vue';
import playerLists from '../components/playerLists.vue';
import gameHistory from '../components/gameHistory.vue';
import arenas from '../components/arenas.vue';
import store from '../components/store.vue';

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
  {
    path: '/join',
    name: 'Join',
    component: join,
  },
  {
    path: '/delete',
    name: 'Delete',
    component: deletePlayer,
  },
  {
    path: '/attacks',
    name: 'Attacks',
    component: attacks,
  },
  {
    path: '/player-lists',
    name: 'PlayerLists',
    component: playerLists,
  },
  {
    path: '/game-history',
    name: 'GameHistory',
    component: gameHistory,
  },
  {
    path: '/arenas',
    name: 'Arenas',
    component: arenas,
  },
  {
    path: '/store',
    name: 'Store',
    component: store,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
