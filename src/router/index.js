import { createRouter, createWebHistory } from 'vue-router';
import registration from '../components/registration.vue';
import playerInfo from '../components/playerInfo.vue';
import deletePlayer from '../components/deletePlayer.vue';
import attacks from '../components/attacks.vue';
import playerLists from '../components/playerLists.vue';
import gameHistory from '../components/gameHistory.vue';
import store from '../components/store.vue';
import createGame from '../components/createGame.vue';
import availableGames from '../components/availableGames.vue';
import gameFinder from '../components/gameFinder.vue';
import logo from '../components/Logo.vue';


const routes = [

  {
    path: '/',
    name: 'logo',
    component: logo,
  },
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
    path: '/store',
    name: 'Store',
    component: store,
  },
  {
    path: '/create-game',
    name: 'CreateGame',
    component: createGame,
  },
  {
    path: '/available-games',
    name: 'AvailableGames',
    component: availableGames,
  },
  {
    path: '/game-finder',
    name: 'GameFinder',
    component: gameFinder,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
