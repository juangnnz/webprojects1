<template>
    <div class="player-info-container">
      <h1 class="info-title">Player Information</h1>
      <div class="info-content">
        <div class="info-item">
          <p>Name:</p>
          <p class="info-value">{{ playerName }}</p>
        </div>
        <div class="info-item">
          <p>Photo:</p>
          <img :src="playerPhoto" alt="Player Photo" class="player-photo">
        </div>
        <div class="info-item">
          <p>Experience:</p>
          <p class="info-value">{{ playerExperience }}</p>
        </div>
        <div class="info-item">
          <p>Level:</p>
          <p class="info-value">{{ playerLevel }}</p>
        </div>
        <div class="info-item">
          <p>Coins:</p>
          <p class="info-value">{{ playerCoins }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerName: "Edou is beautiful",
        playerPhoto: "player_photo.jpg",
        playerExperience: 5000,
        playerLevel: 10,
        playerCoins: 1000,
      };
    },
  };
  </script>
  
  <style scoped>
  .player-info-container {
    text-align: center;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  .info-title {
    background-color: #354a5e;
    color: #fff;
    padding: 10px;
    font-size: 24px;
  }
  
  .info-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .info-item {
    margin: 10px;
    text-align: left;
  }
  
  .info-value {
    font-weight: bold;
  }
  
  .player-photo {
    max-width: 300px;
    border: 2px solid #354a5e;
  }
  </style>
  