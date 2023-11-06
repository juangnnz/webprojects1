<template>
    <div class="list-players">
      <h2>List Players</h2>

      <input v-model="searchQuery" placeholder="Search players" class="search-input" />
  
      <table class="player-table">
        <thead>
          <tr>
            <th @click="sortPlayers('ranking')" class="sortable">Ranking</th>
            <th>Name</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in filteredPlayers" :key="player.id">
            <td>{{ player.ranking }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.experience }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total Players: {{ filteredPlayers.length }}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        players: [
          { id: 1, name: 'Player 1', ranking: 5, experience: 3 },
          { id: 2, name: 'Player 2', ranking: 2, experience: 5 },
        ],
        sortBy: 'ranking',
        sortDesc: false,
      };
    },
    computed: {
      filteredPlayers() {
        let filtered = this.players;
        if (this.searchQuery) {
          filtered = filtered.filter(player =>
            player.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        return this.sortPlayersBy(filtered);
      },
    },
    methods: {
      sortPlayersBy(players) {
        return players.sort((a, b) => {
          const valA = a[this.sortBy];
          const valB = b[this.sortBy];
          if (this.sortDesc) {
            return valB - valA;
          } else {
            return valA - valB;
          }
        });
      },
      sortPlayers(key) {
        if (this.sortBy === key) {
          this.sortDesc = !this.sortDesc;
        } else {
          this.sortBy = key;
          this.sortDesc = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .list-players {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  
  .search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .player-table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .player-table th {
    background-color: #354a5e;
    color: #fff;
    padding: 10px;
    text-align: left;
  }
  
  .player-table th.sortable:hover {
    cursor: pointer;
  }
  
  .player-table td {
    padding: 10px;
  }
  
  .player-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .player-table tr:hover {
    background-color: #e0e0e0;
  }
  </style>
  