<template>
  <div id="app">
    <header id ="logoMenu">

      <img src="src/assets/logo.png" alt="logo" class="logo"/>
     
      <div v-if="!isHomeOrSignupRoute" class="menu">
        <nav >
          <ul class="menu">
            <li><router-link to="/" class="titles">Game</router-link>
              <ul class="submenu">
                <li><router-link to="/create-game" class="titles">Create an Arena</router-link></li>
                <li><router-link to="/available-games" class="titles">Show Available Games (Not Started)</router-link></li>
                <li><router-link to="/game-finder" class="titles">Search games</router-link></li>
                <li><router-link to="/game-history" class="titles">Game History</router-link></li>
              </ul>
            </li>
            <li><router-link to="/" class="titles">Players</router-link>
              <ul class="submenu">
                <li><router-link to="/player-lists" class="titles">Player's Ranking</router-link></li>
              </ul>
            </li>
            <li ><router-link to="/" class="titles">Store</router-link>
              <ul class="submenu">
                <li><router-link to="/create-sell-attacks" class="titles">Sell/Create Attacks</router-link></li>
                <li><router-link to="/buy-attacks" class="titles">Buy Attacks</router-link></li>
              </ul>
            </li>
            <li >
              <img src="src/assets/profilePicture.png" alt="Profile" class="profile-image" />
              <ul class="submenu">
                <li><router-link to="/player-info" class="titles">Your Profile</router-link></li>
                <li><router-link to="/attacks" class="titles">Manage Attacks</router-link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

    </header>
    <router-view></router-view>
    
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
    toggleSubMenu(menu) {
      this.showSubmenu[menu] = !this.showSubmenu[menu];
    },
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
  background: white;
}

#logoMenu {
  display: flex;
  align-items: row; /* Centra verticalmente */
  justify-content: flex-start ; /* Alinea a la izquierda */
  padding: 10px;
  background: #ffffff;
  flex-direction: row; 
}

.logo {
  margin-left: 60px; 
  margin-top: 30px;
  width: 300px; 
  height: 150px;
}

.titles{
  color: black;
}

.menu {
  margin-left: 390px; 
  background: white;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: white;
}

.menu li {
  display: inline-block;
  margin-right: 10px;
  background: white;
}

.titles:hover {
  color: blue; /* Color al pasar el mouse sobre el enlace */
  background: white;
}

.subsystem{
  background: white;
}
.logoDiv{
  width: 65px;
  height: 60px;
}
.profile-image {
  width: 65px;
  height: 60px;
  border-radius: 50%;
}

 router-view {
    margin: 20px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

#router-container:hover {
  
  background-color: #white;
}
</style>
