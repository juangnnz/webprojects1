<template>
    <div class="game-history">
      <h2 id="playersGameTitle">Players Game History</h2>
      <table>
        <thead>
          <tr>
            <th class="column">Player Name</th>
            <th class="column">Games Played</th>
            <th class="column">Games Won (%)</th>
            <th class="column"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.id">
            <td>{{ player.name }}</td>
            <td>{{ player.gamesPlayed }}</td>
            <td>{{ player.gamesWon }}</td>
            <td>
              <button @click="showPlayerGames(player.id)">Show Games</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="selectedPlayerGames">
        <h3 id="playedBy">Games Played by {{ selectedPlayerName }}</h3>
        <ul class="player-games">
          <li v-for="game in selectedPlayerGames" :key="game.id">
            {{ game.name }} - {{game.size}} - hpMax {{game.hpMax}} 
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Aqui hay que hacer una llamada a la base de datos para obtener todos los jugadores
        players: [
        { id: 1, name: "Pol", gamesPlayed: 5, gamesWon: "60%" },
        { id: 2, name: "Clara", gamesPlayed: 3, gamesWon: "66,67%" },
        ], 
        selectedPlayerGames: null,
        selectedPlayerName: '',
      };
    },
    methods: {
      showPlayerGames(playerId) {
        console.log("entra i playerID es ", playerId);
        //  Aqui hay que hacer una llamada a la base de datos para obtener los juegos del jugador en base al ID
        if (playerId === 1){
          this.selectedPlayerGames = [
             { id: 3, name: "Game 3", size: "5x5", hpMax: 100 },
             { id: 4, name: "Game 4", size: "5x5", hpMax: 200 },
             { id: 5, name: "Game 5", size: "5x5", hpMax: 50 },
             { id: 6, name: "Game 6", size: "5x5", hpMax: 30 },
             { id: 7, name: "Game 7", size: "5x5", hpMax: 100 },
          ];
          this.selectedPlayerName = "Pol";
        }
        else{
          this.selectedPlayerGames = [
             { id: 8, name: "Game 8", size: "6x6", hpMax: 100 },
             { id: 9, name: "Game 9", size: "5x5", hpMax: 200 },
             { id: 10, name: "Game 10", size: "7x7", hpMax: 300 },
          ];
          this.selectedPlayerName = "Clara";
        }
      },
    },
  };
  </script>
  
<style scoped>

#playersGameTitle {
  color: #3D5CFF;
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

  td{
    color: black;
  }
  
.column {
  color: #3D5CFF;
  background: #ffffff;
}

#playedBy{
  color: black;
}
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
  
  .player-games {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }
  
  .player-games li {
    margin-bottom: 5px;
    color: black;
  }
  </style>
  