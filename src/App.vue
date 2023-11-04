<script setup>
import HelloWorld from './components/HelloWorld.vue'
import PlayerInfo from './components/playerInfo.vue'
import Registration from './components/registration.vue'

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
            <li><router-link to="/player-info">Player Information</router-link></li>
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
