<template>
  <!-- The main container for the game finder component -->
  <div class="game-finder">
    <!-- Form for filters containing dropdown, date inputs, and search bar -->
    <form @submit.prevent="applyFilters" class="filter-form">
      <!-- Filter by Status -->
      <label for="filterStatus">Status:</label>
      <select v-model="filterStatus" id="filterStatus" class="selector">
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="available">Available</option>
      </select>

      <!-- Between Dates -->
      <label for="startDate">Start Date:</label>
      <input type="date" v-model="startDate" id="startDate" class="dates" />
      <label for="endDate">End Date:</label>
      <input type="date" v-model="endDate" id="endDate" class="dates" />

      <!-- Search by Name -->
      <label for="searchQuery">Search by Name:</label>
      <input v-model="searchQuery" type="text" id="searchQuery" class="search-input" placeholder="Search...">

      <!-- List of games displayed based on applied filters -->
      <ul class="game-list">
        <li v-for="game in filteredGames" :key="game.id" class="game-item">
          <span class="game-name">{{ game.name }} - {{ game.size }} with hp {{game.HP_max}},
            Period: {{game.startDate}} - {{game.endDate}} </span>
          <button v-if="game.status === 'finished'" @click="viewRecord(game)">View Record</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [],
      filterStatus: 'all',
      startDate: '',
      endDate: '',
      searchQuery: '',
      selectedGame: null,
    };
  },
  mounted() {
    // Fetch the list of games when the component is mounted
    this.fetchGames();
  },
  computed: {
    filteredGames() {
      return this.games.filter((game) => {
        const statusMatch = this.filterStatus === 'all' || game.finished === (this.filterStatus === 'finished');
        const dateMatch =
          (!this.startDate || new Date(game.creation_date) >= new Date(this.startDate)) &&
          (!this.endDate || new Date(game.creation_date) <= new Date(this.endDate));
        const searchMatch = game.game_ID.toLowerCase().includes(this.searchQuery.toLowerCase());
        return statusMatch && dateMatch && searchMatch;
      });
    },
  },
  methods: {
    async fetchGames() {
      try {
        const response = await fetch('https://balandrau.salle.url.edu/i3/arenas');
        if (response.ok) {
          const data = await response.json();
          this.games = data;
        } else {
          console.error('Error fetching games:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching games:', error.message);
      }
    },
    viewRecord(gameId) {
      console.log(`View Record for Game ID: ${gameId}`);
      //aqui vemos el record del juego
    },
    viewGameDetails(gameId) {
      this.selectedGame = this.games.find((game) => game.game_ID === gameId);
    },
  },
};
</script>


<style scoped>
  /* Styles for the game finder component */
  #searchGamesTitle {
    color: #3D5CFF;  /* Styling for the title color*/
  }
  .game-finder {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #ffffff;  /*Styling for the background color */
  }
  
  /* Styles for the filters section */
  .filters {
    margin-bottom: 20px;

  }
  
  .filters label {
    margin-right: 10px;
  }

  .selector{
    background: #3D5CFF;
  }

  .dates{
      color: white;
      background-color: black;
      padding: 10px;
      border: 1px solid white;
      border-radius: 5px;
      filter: invert(1); 
      width: 100px;

  }
  
  /* Styles for the game list */
  .game-list {
    list-style: none;
    padding: 0;
  }
  
  /* Styles for each game item in the list */
  .game-item {
    display: flex;
    text-align: left;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .game-name {
    flex: 1;
    color: black;
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
  
  /* Styles for the game details section */
  .game-details {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }

  /* Styles for the search bar */
  .search-container {
    position: relative;
  }

.search-input {
  padding-right: 40px; /* Espacio para el ícono de búsqueda */
  width: 200px; /* Ajusta el ancho según sea necesario */
}

  .search-input::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 20px; /* Adjust the size as needed */
    height: 20px; /* Adjust the size as needed */
    background: url('../assets/profilePicture.png') no-repeat center center; 
    background-size: cover;
    cursor: pointer;
  }
</style>

  

