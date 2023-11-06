<template>
    <div class="game-finder">
      <h2>List of All Games</h2>
      
      <div class="filters">
        <label>Status:</label>
        <select v-model="filterStatus">
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="available">Available</option>
        </select>
  
        <label>Between Dates:</label>
        <input type="date" v-model="startDate" />
        <input type="date" v-model="endDate" />
  
        <label>Search:</label>
        <input type="text" v-model="searchQuery" @input="searchGames" />
      </div>
  
      <ul class="game-list">
        <li v-for="game in filteredGames" :key="game.id" class="game-item">
          <span class="game-name">{{ game.name }}</span>
          <button class="view-details-button" @click="viewGameDetails(game.id)">View Details</button>
        </li>
      </ul>
  
      <div v-if="selectedGame" class="game-details">
        <h3>Game Details</h3>
        <p><strong>Name:</strong> {{ selectedGame.name }}</p>
        <p><strong>Status:</strong> {{ selectedGame.status }}</p>
        <!-- aqui toda la info de los logs y game details del juego  -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        games: [], // aqui cogeremos todo de la API
        filterStatus: 'all',
        startDate: '',
        endDate: '',
        searchQuery: '',
        selectedGame: null,
      };
    },
    computed: {
      filteredGames() {
        // filtros aqui
        return this.games.filter((game) => {
          const statusMatch =
            this.filterStatus === 'all' || game.status === this.filterStatus;
          const dateMatch =
            (!this.startDate || game.startDate >= this.startDate) &&
            (!this.endDate || game.endDate <= this.endDate);
          const searchMatch = game.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          return statusMatch && dateMatch && searchMatch;
        });
      },
    },
    methods: {
      // Fetch the list of games from your API or data source here
      // Fetch game details based on game ID and set selectedGame
      // Implement game emulation based on logs
      // You can use methods to perform these actions
    },
  };
  </script>
  
  <style scoped>
  .game-finder {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .filters {
    margin-bottom: 20px;
  }
  
  .filters label {
    margin-right: 10px;
  }
  
  .game-list {
    list-style: none;
    padding: 0;
  }
  
  .game-item {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .game-name {
    flex: 1;
  }
  
  .view-details-button {
    background-color: #354a5e;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .view-details-button:hover {
    background-color: #2e3e4f;
  }
  
  .game-details {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }
  </style>
  