<template>
    <div class="list-players">
      <div class="block1">
        <h2>Player's Ranking</h2>
        <input v-model="searchQuery" placeholder="Search players" class="search-input" />
      </div>

      <div>
        <router-view></router-view>

        <table class="player-table">
          <thead>
            <tr>
              <th>Ranking according to Experience</th>
              <th>Player Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in filteredPlayers" :key="player.id" @click="showPlayerHistory(player.id)">
              <td>{{ player.experience }}</td>
              <td>{{ player.name }}</td>
            </tr>
          </tbody>
          <tfoot>
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
      searchQuery: '',
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
      return players.sort((a, b) => b.experience - a.experience);
    },
    showPlayerHistory(playerId) {
      this.$router.push({ name: 'PlayerHistory', params: { id: playerId } });
    },
  },
};
</script>

<style scoped>
.list-players {
  width: 800px;
  display: flex;
  flex-direction: column;
  margin-left:195px;
}

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

.player-table {
  width: 750px;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 10px;
}

.player-table th {
  background-color: white;
  color: #3D5CFF;
  padding: 20px;
  text-align: center;
}

.player-table td {
  padding: 10px;
  color: black;
}

.player-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.player-table tr:hover {
  background-color: #e0e0e0;
}

.block1{
  display:flex;
  flex-direction:row;
  width:100%;
  height:100%;
  margin-left:0px;
}
</style>
