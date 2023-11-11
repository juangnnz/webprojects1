<template>
    <div class="game-history">
      <h2 id="playersGameTitle">Players Game History</h2>
      <table>
        <thead>
          <tr>
            <th class="column">Player Name</th>
            <th class="column">Games Played</th>
            <th class="column">Games Won</th>
            <th class="column">Show Games</th>
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
            {{ game.date }} - {{ game.outcome }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        players: [], // Aqui hay que hacer una llamada a la base de datos para obtener todos los jugadores
        selectedPlayerGames: [],
        selectedPlayerName: '',
      };
    },
    methods: {
      showPlayerGames(playerId) {
        //  Aqui hay que hacer una llamada a la base de datos para obtener los juegos del jugador en base al ID
    
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
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 5px;
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
  
.column {
  color: #3D5CFF;
  background: #ffffff;
}

#playedBy{
  color: black;
}
  button {
    background-color: #354a5e;
    color: #fff;
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
  }
  </style>
  