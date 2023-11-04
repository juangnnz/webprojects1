<script setup>
</script>

<template>
  <div>
    <header>
      <h1>Welcome to Battle Arena!</h1>
    </header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Player Management</router-link>
          <ul class="submenu">
            <li><router-link to="/player-info">Player Information</router-link></li>
            <li><router-link to="/register">Register User</router-link></li>
            <li><router-link to="/join">Join User</router-link></li>
            <li><router-link to="/delete">Delete User</router-link></li>
          </ul>
        </li>
        <li><router-link to="/attacks">Management of Attacks</router-link></li>
        <li><router-link to="/players-list">List Players</router-link></li>
        <li><router-link to="/game-history">Players Game History</router-link></li>
        <li><router-link to="/arenas">Arenas Management</router-link></li>
        <li><router-link to="/store">Store</router-link></li>
      </ul>
    </nav>
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
    background-color: #354a5e;
    color: #fff;
    text-align: center;
    padding: 20px 0;
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
</style>
