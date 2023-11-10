<script setup>
</script>

<template>
  <div>
    <header>
        <img src="../assets/logo.png" alt="logo" class="logo" />
      <nav>
        <ul>
          <li><router-link to="/">Game</router-link></li>
          <ul class="submenu">
            <li><router-link to="/create-game">Create an Arena</router-link></li>
            <li><router-link to="/available-games">Show Available Games (Not Started)</router-link></li>
            <li><router-link to="/game-finder">Search games</router-link></li>
          </ul>
          <li><router-link to="/">Players</router-link></li>
          <ul class="submenu">
            <li><router-link to="/">Player's History</router-link></li>
            <li><router-link to="/">Player's Ranking</router-link></li>
          </ul>
          <li><router-link to="/store">Store</router-link>
            <ul class="submenu">
              <li><router-link to="/">Sell/Create Attacks</router-link></li>
              <li><router-link to="/">Buy Attacks</router-link></li>
            </ul>
          </li>
          <li>
            <img src="../assets/profilePicture.png" alt="Profile" class="profile-icon" />
            <ul class="submenu">
              <li><router-link to="/player-info">Your Profile</router-link></li>
              <li><router-link to="/attacks">Manage Attacks</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #354a5e;
    color: #fff;
    text-align: center;
  }

  h1 {
    font-size: 28px;
  }

  nav ul {
    list-style: none;
    padding: 0;
    background-color: #354a5e;
    margin: 0;
    text-align: center;
  }

  nav li {
    display: inline;
    margin-right: 10px;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 10px 15px;
  }

  nav .submenu {
    display: none;
    position: absolute;
    background-color: #354a5e;
  }

  nav .submenu li {
    display: block;
  }

  nav .submenu a {
    padding: 10px 20px;
  }

  nav li:hover .submenu {
    display: block;
  }

  .submenu li:hover a {
    background-color: #2e3e4f;
  }

  router-view {
    margin: 20px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  header nav {
    background-color: #354a5e;
  }

  header nav ul {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  /* para pantallas pequeñas*/
  @media (max-width: 768px) {
    header {
      padding: 10px 0;
    }

    header h1 {
      font-size: 24px;
    }

    nav ul {
      text-align: center;
    }

    nav li {
      display: block;
      margin-right: 0;
      margin-bottom: 5px;
    }

    nav .submenu {
      display: none;
      position: static;
    }

    nav .submenu li {
      display: block;
    }

    nav .submenu a {
      padding: 10px 15px;
    }
    .profile-icon {
    width: 30px; 
    height: 30px; 
    cursor: pointer;
  }
  }
</style>