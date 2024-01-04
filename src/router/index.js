import { createRouter, createWebHistory } from 'vue-router';
import registration from '../components/registration.vue';
import playerInfo from '../components/playerInfo.vue';
import MainMenu from '../components/MainMenu.vue';
import attacks from '../components/attacks.vue';
import playerLists from '../components/playerLists.vue';
import gameHistory from '../components/gameHistory.vue';
import createGame from '../components/createGame.vue';
import availableGames from '../components/availableGames.vue';
import gameFinder from '../components/gameFinder.vue';
import PlayerHistory from '../components/PlayerHistory.vue';
import arena from '../components/arena.vue';
import BuyAttacks from '../components/BuyAttacks.vue';
import CreateSellAttacks from '../components/CreateSellAttacks.vue';
import RecordGameById from '../components/RecordGameById.vue';
import home from '../components/home.vue';

const routes = [

  
  { path: '/', redirect: '/home' },
  {
    path: '/main-menu',
    name: 'MainMenu',
    component: MainMenu,
  },
  {
    path: '/register',
    name: 'registration',
    component: registration,
  },
  {
    path: '/arena/:gameId/:rows/:hp/:currentPlayer',
    name: 'arena',
    component: arena,
    props: true,
  },  
  {
    path: '/player-history',
    name: 'PlayerHistory',
    component: PlayerHistory,
  },
  {
    path: '/record-game-by-id/:gameName/:rows',
    name: 'RecordGameById',
    component: RecordGameById,
    props: true,
  },
  {
    path: '/buy-attacks',
    name: 'BuyAttacks',
    component: BuyAttacks,
    props: route => ({
      token: route.query.token,
      playerId: route.query.playerId,
      userCoins: route.query.userCoins,
    })
  },
  {
    path: '/create-sell-attacks',
    name: 'CreateSellAttacks',
    component: CreateSellAttacks,
    props: route => ({
      token: route.query.token,
      playerId: route.query.playerId,
      userCoins: route.query.userCoins,
    })
  },
  {
    path: '/player-info',
    name: 'PlayerInfo',
    component: playerInfo,
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
  },
  {
    path: '/home',
    name: 'HomeView',
    component: home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
