<template>
  <!-- The main container for displaying player game history -->
  <section class="game-history">
    <h2 id="playersGameTitle">Players Game History</h2>
    <!-- Table for displaying player information -->
    <table>
      <thead>
        <tr>
          <!-- Table header columns -->
          <th class="column">Player Name</th>
          <th class="column">Games Played</th>
          <th class="column">Games Won (%)</th>
          <th class="column"></th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through players and display information in table rows -->
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.name }}</td>
          <td>{{ player.gamesPlayed }}</td>
          <td>{{ player.gamesWon }}</td>
          <td>
            <!-- Button to show games played by a specific player -->
            <button @click="showPlayerGames(player.id)">Show Games</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Display selected player's games if available -->
    <div v-if="selectedPlayerGames" class="moreinfo">
      <h3 id="playedBy">Games Played by {{ selectedPlayerName }}</h3>
      <!-- List to display games played by the selected player -->
      <ul class="player-games">
        <li v-for="game in selectedPlayerGames" :key="game.id">
          {{ game.name }} - {{game.size}} - hpMax {{game.hpMax}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    // Data properties for player information, selected player's games, and selected player's name
    return {
      players: [
        { id: 1, name: "Pol", gamesPlayed: 5, gamesWon: "60%" },
        { id: 2, name: "Clara", gamesPlayed: 3, gamesWon: "66,67%" },
      ],
      selectedPlayerGames: null,
      selectedPlayerName: '',
    };
  },
  methods: {
    // Method to show the games played by a specific player
    showPlayerGames(playerId) {
      console.log("entra i playerID es ", playerId);
      // Simulate fetching player games from the database based on the player ID
      if (playerId === 1) {
        // Simulated games for player Pol
        this.selectedPlayerGames = [
          { id: 3, name: "Game 3", size: "5x5", hpMax: 100 },
          { id: 4, name: "Game 4", size: "5x5", hpMax: 200 },
        ];
        this.selectedPlayerName = "Pol";
      } else {
        // Simulated games for player Clara
        this.selectedPlayerGames = [
          { id: 8, name: "Game 8", size: "6x6", hpMax: 100 },
          { id: 9, name: "Game 9", size: "5x5", hpMax: 200 },
        ];
        this.selectedPlayerName = "Clara";
      }
    },
  },
};
</script>

<style scoped>
/* Scoped styles for the player game history component */
#playersGameTitle {
  color: #3D5CFF;
  margin-bottom: 50px;
}

.game-history {
  padding: 20px;
  background-color: white;
  max-width: 700px;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #354a5e;
  color: #fff;
}

td {
  color: black;
}

.column {
  color: #3D5CFF;
  background: #ffffff;
}

#playedBy {
  color: black;
}

/* Button styles */
button {
  background-color: #3D5CFF;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2e3e4f;
}

/* Styles for the list of player games */
.player-games {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.player-games li {
  margin-bottom: 5px;
  color: black;
}

.moreinfo {
  margin-top: 60px;
}

@media only screen and (max-width: 600px) {
  .game-history {
    padding: 10px;
  }

  table, .player-games-section {
    max-width: 100%;
    overflow-x: auto;
  }
}

</style>
