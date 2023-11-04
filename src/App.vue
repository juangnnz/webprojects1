<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <header>
      <h1>Welcome to Battle Arena!</h1>
    </header>
    <nav>
      <ul>
        <li>
          <a href="#">Player Management</a>
          <ul class="submenu">
            <li><a @click="loadPlayerInfo">Player Information</a></li>
            <li><a href="#">Register User</a></li>
            <li><a href="#">Join User</a></li>
            <li><a href="#">Delete User</a></li>
            <li><a href="#">Player Information</a></li>
          </ul>
        </li>
        <li><a href="#">Management of Attacks</a></li>
        <li><a href="#">List Players</a></li>
        <li><a href="#">Players Game History</a></li>
        <li><a href="#">Arenas Management</a></li>
        <li><a href="#">Store</a></li>
      </ul>
    </nav>
    <iframe ref="playerInfoFrame" width="100%" height="600" frameborder="0"></iframe>
  </div>
</template>



<style scoped>
</style>
<style scoped>

</style>
