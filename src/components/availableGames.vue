<template>
    <div class="available-games">
      <h2>Available Games (Not Started)</h2>
      <ul>
        <li v-for="game in availableGames" :key="game.id">
          <router-link :to="'/game/' + game.id" class="game-link">{{ game.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  

  <script>
  export default {
    data() {
      return {
        availableGames: [
          { id: 1, name: "Game 1" },
          { id: 2, name: "Game 2" },
          // ejemplos de como se veria la info de los juegos
        ],
      };
    },
  };
  </script>



  <style scoped>
  .available-games {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
  .game-link {
    text-decoration: none;
    color: #007BFF;
    font-size: 18px;
    display: inline-block;
    padding: 10px 20px;
    border: 2px solid #007BFF;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .game-link:hover {
    background-color: #007BFF;
    color: #fff;
  }
  </style>
  