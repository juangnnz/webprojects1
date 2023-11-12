<template>
  <!-- The main container for the game finder component -->
  <div class="game-finder">
    <!-- Title for the game search section -->
    <h2 id="searchGamesTitle">Search Games</h2>

    <!-- Filters section containing dropdown, date inputs, and search bar -->
    <div class="filters">
      <select v-model="filterStatus">
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="available">Available</option>
      </select>

      <label>Between Dates:</label>
      <input type="date" v-model="startDate" />
      <input type="date" v-model="endDate" />

      <!-- Search bar with a search icon -->
      <div class="search-container">
        <input v-model="searchQuery" type="text" class="search-input" placeholder="Search...">
      </div>
    </div>

    <!-- List of games displayed based on applied filters -->
    <ul class="game-list">
      <li v-for="game in filteredGames" :key="game.id" class="game-item">
        <!-- Displaying game name and a button to view details -->
        <span class="game-name">{{ game.name }}</span>
        <button class="view-details-button" @click="viewGameDetails(game.id)">View Details</button>
      </li>
    </ul>

    <!-- Display game details when a game is selected -->
    <div v-if="selectedGame" class="game-details">
      <h3>Game Details</h3>
      <!-- Table showing specific details of the selected game -->
      <table>
        <thead>
          <tr>
            <th>Game ID</th>
            <th>Size</th>
            <th>HP_max</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedGame.id }}</td>
            <td>{{ selectedGame.size }}</td>
            <td>{{ selectedGame.HP_max }}</td>
            <!-- Button to view records for the selected game -->
            <td><button @click="viewRecord(selectedGame.id)">View Record</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
          size: 'Large',
          HP_max: 100,
        },
        {
          id: 2,
          name: 'Game 2',
          status: 'available',
          startDate: '2023-02-15',
          endDate: '2023-02-28',
          size: 'Medium',
          HP_max: 150,
        },
        {
          id: 3,
          name: 'Game 3',
          status: 'available',
          startDate: '2023-03-01',
          endDate: '2023-03-15',
          size: 'Small',
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
    // Method to view records for a specific game
    viewRecord(gameId) {
      console.log(`View Record for Game ID: ${gameId}`);
      // Perform actions to view the record for the specified game
    },
    // Method to view details of a specific game
    viewGameDetails(gameId) {
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
    background-color: #ffffff;  //*Styling for the background color */
  }
  
  /* Styles for the filters section */
  .filters {
    margin-bottom: 20px;
  }
  
  .filters label {
    margin-right: 10px;
  }
  
  /* Styles for the game list */
  .game-list {
    list-style: none;
    padding: 0;
  }
  
  /* Styles for each game item in the list */
  .game-item {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .game-name {
    flex: 1;
    color: black;
  }
  
  /* Styles for the button to view game details */
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
    padding-right: 40px; /* Space for the search icon */
    width: 200px; /* Adjust the width as needed */
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

  

