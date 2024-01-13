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
          <td>{{ player.player_ID }}</td>
          <td>{{ player.gamesPlayed }}</td>
          <td>{{ player.gamesWon }}</td>
          <td>
            <!-- Button to show games played by a specific player -->
            <button @click="showPlayerGames(player.player_ID)">Show Games</button>
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
          {{ game.game_ID }} - {{game.size}} (size) - hpMax {{game.HP_max}}
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
      players: null,
      selectedPlayerGames: null,
      selectedPlayerName: '',
    };
  },
  mounted() {
    this.fetchListOfPlayers();
  },
  methods: {
    // Method to show the games played by a specific player
    async fetchListOfPlayers() {
      try {
        const token = localStorage.getItem('token');

          // Fetch player data
          const playerResponse = await fetch(`https://balandrau.salle.url.edu/i3/players`, {
            method: 'GET',
            headers: {
              'Bearer': `${token}`,
            },
          });

          if (playerResponse.ok) {
            const playerData = await playerResponse.json();
            this.players = playerData;
            for (let i = 0; i < this.players.length; i++) {
              await this.fetchStatistics(i);
            }
            

          } else {
            throw new Error('Failed to fetch player data');
          }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchStatistics(index){
        try {
          const playerId = this.players[index].player_ID;
          
          const token = localStorage.getItem('token');
          const response = await fetch(`https://balandrau.salle.url.edu/i3/players/${playerId}/statistics`, {
            method: 'GET',
            headers: {
              'Bearer': `${token}`,
            },
          });

          if (response.ok) {
            const statistics = await response.json();
            this.players[index] = {
              ...this.players[index],
              gamesPlayed: statistics.games_played,
              gamesWon: statistics.games_won,
            };
           
          } else {
            throw new Error('Failed to fetch player data');
          }
        } catch (error) {
          console.error('Error loading player data:', error);
        }
      },
    async showPlayerGames(playerId) {
      
      try {
          console.log(playerId);
          const token = localStorage.getItem('token');
          const response = await fetch(`https://balandrau.salle.url.edu/i3/players/${playerId}/games/finished`, {
            method: 'GET',
            headers: {
              'Bearer': `${token}`,
            },
          });

          if (response.ok) {
            const games = await response.json();
            this.selectedPlayerGames = games;
            this.selectedPlayerName = playerId;
           
          } else {
            throw new Error('Failed to fetch player data');
          }
        } catch (error) {
          console.error('Error loading player data:', error);
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
