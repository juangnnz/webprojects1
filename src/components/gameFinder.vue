<template>
  <!-- The main container for the game finder component -->
  <section class="game-finder">
    <!-- Form for filters containing dropdown, date inputs, and search bar -->
    <form @submit.prevent="applyFilters" class="filter-form">
      <!-- Filter by Status -->
      <section class="filters">
        <div class="filter-group">
          <label for="filterStatus">Status:</label>
          <select v-model="filterStatus" id="filterStatus" class="selector">
            <option value="all">All</option>
            <option value="finished">Finished</option>
            <option value="available">Available</option>
          </select>
        </div>

      <!-- Between Dates -->
      <div class="date-group">
          <div class="date-filter">
            <label for="startDate">Start Date:</label>
            <input type="date" v-model="startDate" id="startDate" class="dates" />
          </div>
          <div class="date-filter">
            <label for="endDate">End Date:</label>
            <input type="date" v-model="endDate" id="endDate" class="dates" />
          </div>
        </div> 
      
      
        <!-- Search by Name --> 
        <div class="search-group">
          <label for="searchQuery">Search by Name:</label>
          <input v-model="searchQuery" type="text" id="searchQuery" class="search-input" placeholder="Search...">
        </div>
      </section>
      <!-- List of games displayed based on applied filters -->
      <ul class="game-list">
        <li v-for="game in filteredGames" :key="game.id" class="game-item">
          <span class="game-name">{{ game.name }} - {{ game.size }} with hp {{game.HP_max}},
            Period: {{game.startDate}} - {{game.endDate}} </span>
          <button v-if="game.status === 'finished'" @click="viewRecord(game)">View Record</button>
        </li>
      </ul>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    // Data properties for storing games, filters, and selected game details
    return {
      games: [ {
          id: 1,
          name: 'Game 1',
          status: 'finished',
          startDate: '2023-01-01',
          endDate: '2023-01-10',
          size: '5',
          HP_max: 100,
        },
        {
          id: 2,
          name: 'Game 2',
          status: 'available',
          startDate: '2023-02-15',
          endDate: '2023-02-28',
          size: '3',
          HP_max: 150,
        },
        {
          id: 3,
          name: 'Game 3',
          status: 'available',
          startDate: '2023-03-01',
          endDate: '2023-03-15',
          size: '2',
          HP_max: 80,
        },
      ],  // An array of game objects
      filterStatus: 'all',  // Filter status (all, finished, available)
      startDate: '',  // Start date for filtering games
      endDate: '',  // End date for filtering games
      searchQuery: '',  // Search query for filtering games by name
      selectedGame: null,  // Details of the currently selected game
    };
  },
  computed: {
    // Computed property to filter games based on status, dates, and search query
    filteredGames() {
      return this.games.filter((game) => {
        const statusMatch = this.filterStatus === 'all' || game.status === this.filterStatus;
        const dateMatch = (!this.startDate || game.startDate >= this.startDate) &&
                         (!this.endDate || game.endDate <= this.endDate);
        const searchMatch = game.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return statusMatch && dateMatch && searchMatch;
      });
    },
  },
  methods: {
    viewRecord(gameId) {
      console.log(`View Record for Game ID: ${gameId}`);
      //aqui vemos el record del juego
    },
    viewGameDetails(gameId) {
      // aqui se ven los detalles del juego
      this.selectedGame = this.games.find((game) => game.id === gameId);
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
  
  .filter-group, .date-group, .search-group {
    margin-bottom: 10px;
  }

  /* Styles for the filters section */
  .filters {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    border-color: white;
  }
  
  .filters label {
    margin-right: 10px;
    color: #3D5CFF;
  }

  .selector, .search-input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
  }


  .dates{
      color: white;
      background-color: black;
      padding: 10px;
      border: 1px solid white;
      border-radius: 5px;
      filter: invert(1); 
      width: 100px
  }
  
  /* Styles for the game list */
  .game-list {
    list-style: none;
    padding: 0;
  }
  
  /* Styles for each game item in the list */
  .game-item {
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}

  
  .game-name {
    flex: 1;
    color: black;
    margin-bottom: 10px;
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

  @media only screen and (max-width: 600px) {
  .game-item {
    align-items: center;
  }
}

</style>

  

