<template>
  <!-- Main container for the component -->
  <div class="list-players">
    <!-- Header block with title and search input -->
    <div class="block1">
      <!-- Heading for the player ranking section -->
      <h2>Player's Ranking</h2>
      <!-- Input for searching players -->
      <input v-model="searchQuery" placeholder="Search players" class="search-input" />
    </div>

    <!-- Player list display -->
    <div>
      <!-- Router view to display player details (if applicable) -->
      <router-view></router-view>

      <!-- Table displaying player ranking -->
      <table class="player-table">
        <thead>
          <tr>
            <th>Ranking according to Experience</th>
            <th>Player Name</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through filtered players and display in the table -->
          <tr v-for="player in filteredPlayers" :key="player.id" @click="showPlayerHistory(player.id)">
            <td>{{ player.experience }}</td>
            <td>{{ player.name }}</td>
          </tr>
        </tbody>
        <tfoot>
          <!-- Display total number of filtered players -->
          <tr>
            <td colspan="2">Total Players: {{ filteredPlayers.length }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Data property for search input
      searchQuery: '',
      // Array of player data
      players: [
        { id: 1, name: 'Player 1', experience: 3 },
        { id: 2, name: 'Player 2', experience: 5 },
        { id: 3, name: 'Player 3', experience: 2 },
        { id: 4, name: 'Player 4', experience: 7 },
        { id: 5, name: 'Player 5', experience: 4 },
      ],
    };
  },
  computed: {
    // Computed property for filtering and sorting players based on search query
    filteredPlayers() {
      let filtered = this.players;
      // Apply search filter
      if (this.searchQuery) {
        filtered = filtered.filter(player =>
          player.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      // Sort players by experience in descending order
      return this.sortPlayersByExperience(filtered);
    },
  },
  methods: {
    // Method to sort players by experience in descending order
    sortPlayersByExperience(players) {
      return players.sort((a, b) => b.experience - a.experience);
    },
    // Method to navigate to player history view
    showPlayerHistory(playerId) {
      this.$router.push({ name: 'PlayerHistory', params: { id: playerId } });
    },
  },
};
</script>

<style scoped>
/* Styling for the main container */
.list-players {
  width: 800px;
  display: flex;
  flex-direction: column;
  margin-left: 195px;
}

/* Styling for the search input */
.search-input {
  width: 200px;
  height: 30px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  background: white;
  color: black;
  margin-top: 5px;
  margin-left: 325px;
}

/* Styling for the player ranking table */
.player-table {
  width: 750px;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 10px;
}

/* Styling for table headers */
.player-table th {
  background-color: white;
  color: #3D5CFF;
  padding: 20px;
  text-align: center;
}

/* Styling for table data cells */
.player-table td {
  padding: 10px;
  color: black;
}

/* Styling for alternating row colors in the table */
.player-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Styling for hover effect on table rows */
.player-table tr:hover {
  background-color: #e0e0e0;
}

/* Styling for the header block containing the title and search input */
.block1 {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-left: 0px;
}
</style>
