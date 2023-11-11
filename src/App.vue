<template>
  <div id="app">
    <header>
      <img src="src/assets/logo.png" alt="logo" />
      <div v-if="!isHomeOrSignupRoute">
        <label class="menu" @click="toggleSubMenu('game')">Game</label>
          <div v-if="showSubmenu.game" class="submenu">
          <div @click="navigateTo('/create-game')">Create an Arena</div>
          <div @click="navigateTo('/available-games')">Enter Available Arena</div>
          <div @click="navigateTo('/game-finder')">Search Games</div>
          <div @click="navigateTo('/game-history')">Game history</div>
         
        </div>

        <div class="menu" @click="toggleSubMenu('players')">Players</div>
        <div v-if="showSubmenu.players" class="submenu">
          <div @click="navigateTo('/player-lists')">Player's ranking</div>
        </div>

        <div class="menu" @click="toggleSubMenu('store')">Store</div>
        <div v-if="showSubmenu.store" class="submenu">
          <div @click="navigateTo('/create-sell-attacks')">Sell/Create Attacks </div>
          <div @click="navigateTo('/buy-attacks')">Buy Attacks</div>
        </div>

        <div  @click="toggleSubMenu('profile')" class="profile-container">
          <img src="src/assets/profilePicture.png" alt="profile" class="profile-image" />
        </div>
        <div v-if="showSubmenu.profile" class="submenu">
          <div @click="navigateTo('/player-info')">Your profile</div>
          <div @click="navigateTo('/attacks')">Manage attacks</div>
         
        </div>

      </div>
    </header>

    <router-view></router-view>

    <footer>
      <!-- Pie de página común -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSubmenu: {
        game: false,
        players: false,
        store: false
      }
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    toggleSubMenu(menu) {
      // Alternar el estado del submenú al hacer clic en el menú correspondiente
      this.showSubmenu[menu] = !this.showSubmenu[menu];

      // Ocultar otros submenús cuando se abre uno
      for (const key in this.showSubmenu) {
        if (key !== menu) {
          this.showSubmenu[key] = false;
        }
      }
    }
  },
  computed: {
    isHomeOrSignupRoute() {
      return this.$route.path === '/home' || this.$route.path === '/register';
    }
  }
};
</script>


<style>
body, #app {
  margin: 0;
  padding: 0;
  height: 100vh;
  weight: 100vh;
}

header {
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: flex-start ; /* Alinea a la izquierda */
  background-color: #ffffff !important; /* Fondo blanco */
  padding: 10px;
}

#logo {
  margin-right: auto; /* Mueve el logo hacia la izquierda lo máximo posible */
  width: 100px; /* Ajusta el tamaño según sea necesario */
}

.menu {
  color: black; 
}

.submenu {
  display: inline-block;
  padding: 10px;
  background-color: #ddd;
  margin-top: 5px;
  color: black;
}

.profile-image {
  width: 65px;
  height: 60px;
  border-radius: 50%;
}
</style>
