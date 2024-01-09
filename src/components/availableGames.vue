<template>
  <!-- Container for available games component -->
  <main class="available-games">
    <h2 id="availableGamesTitle">Available Arenas</h2>
    <table>
      <!-- Table header -->
      <thead>
        <tr>
          <th class="column">Game ID</th>
          <th class="column">Size</th>
          <th class="column">HP-max</th>
        </tr>
      </thead>
      <!-- Table body with rows for each available game -->
      <tbody>
        <!-- Loop through availableGames array and create a row for each game -->
        <tr
          v-for="game in availableGames"
          :key="game.id"
          @click="toggleActionColumn(game.id)"
          :class="{ 'selected-row': selectedGame === game.id }"
        >
          <!-- Display game information in columns -->
          <td :style="{ color: selectedGame === game.id ? 'blue' : 'black' }">{{ game.id }}</td>
          <td>{{ game.size }}</td>
          <td>{{ game.hpMax }}</td>

          <!-- Display action column with Enter button for the selected game -->
          <td v-if="selectedGame === game.id" class="action-column">
            <router-link :to="'/arena/' + game.id + '/' + game.size+ '/' + game.hpMax + '/player1'" class="game-link">
              Enter
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  data() {
    // Data properties for available games and the selected game
    return {
      availableGames: [
        { id: 1, name: "Game 1", size: "5x5", hpMax: 100 },
        { id: 2, name: "Game 2", size: "8x8", hpMax: 150 },
      ],
      selectedGame: null, // Track the selected game
    };
  },
  methods: {
    // Method to toggle the visibility of the action column for a specific game
    toggleActionColumn(gameId) {
      // Set the selectedGame to the clicked row
      this.selectedGame = gameId;
    },
  },
};
</script>

<style scoped>
/* Styles for the available games component */
.available-games {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: black;
}

/* Styles for the title of the available games section */
#availableGamesTitle {
  color: #3D5CFF;
}

/* Styles for the table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

/* Styles for table headers and cells */
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

/* Styles for table header background */
th {
  background-color: #f2f2f2;
}

/* Styles for columns in the table */
.column {
  color: black;
}

/* Styles for the selected row */
.selected-row td {
  color: blue;
}

/* Styles for the action column initially hidden */
.action-column {
  visibility: hidden;
}

/* Styles for the action column when the row is selected */
.selected-row .action-column {
  visibility: visible; /* when the selected row is clicked, only there the column where the button is will be visible*/
}

/* Styles for the Enter button link */
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

/* Styles for the Enter button link on hover */
.game-link:hover {
  background-color: #007BFF;
  color: #fff;
}

/* Responsive Styles for Mobile */
@media only screen and (max-width: 600px) {
  .available-games {
    padding: 10px;
    max-width: 100%;
  }

  table {
    font-size: 14px; /* Smaller font size for better readability on mobile */
  }

  th, td {
    padding: 6px; /* Reduced padding for compact display */
  }

  .game-link {
    padding: 8px 16px; /* Slightly smaller padding for the button */
    font-size: 16px; /* Adjusted font size for mobile */
  }
}
</style>
