<template>
    <div>
      <h1>Player Information</h1>
      <p>Name: {{ playerName }}</p>
      <p>Photo: <img :src="playerPhoto" alt="Player Photo"></p>
      <p>Experience: {{ playerExperience }}</p>
      <p>Level: {{ playerLevel }}</p>
      <p>Coins: {{ playerCoins }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerName: "Edou is ugly",
        playerPhoto: "player_photo.jpg",
        playerExperience: 5000,
        playerLevel: 10,
        playerCoins: 1000,
      };
    },
  };
  </script>
  
  <style scoped>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  
    h1 {
      background-color: #333;
      color: #fff;
      padding: 20px;
    }
  
    p {
      margin: 10px;
    }
  
    img {
      max-width: 300px;
      border: 2px solid #333;
    }
  </style>
  