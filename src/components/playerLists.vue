<template>
  <div class="list-players">
    <h2>Player's Ranking</h2>

    <input v-model="searchQuery" placeholder="Search players" class="search-input" />

    <table class="player-table">
      <thead>
        <tr>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in filteredPlayers" :key="player.id">
          <td>{{ player.experience }}</td>
          <td>{{ player.name }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total Players: {{ filteredPlayers.length }}</td>
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
        { id: 1, name: 'Player 1', ranking: 2, experience: 3 },
        { id: 2, name: 'Player 2', ranking: 1, experience: 5 },
      ],
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
      return this.sortPlayersByExperience(filtered);
    },
  },
  methods: {
    sortPlayersByExperience(players) {
      return players.sort((a, b) => a.experience - b.experience);
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
