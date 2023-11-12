<template>
  <div class="available-games">
    <h2 id="availableGamesTitle">Available Arenas</h2>
    <table>
      <thead>
        <tr>
          <th class="column">Game ID</th>
          <th class="column">Size</th>
          <th class="column">HP-max</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="game in availableGames"
          :key="game.id"
          @click="toggleActionColumn(game.id)"
          :class="{ 'selected-row': selectedGame === game.id }"
        >
          <td :style="{ color: selectedGame === game.id ? 'blue' : 'black' }">{{ game.id }}</td>
          <td>{{ game.size }}</td>
          <td>{{ game.hpMax }}</td>
          <td v-if="selectedGame === game.id" class="action-column">
            <router-link :to="'/arena/' + game.id + '/' + game.size+ '/' + game.hpMax + '/player1'" class="game-link">
              Enter
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      availableGames: [
        { id: 1, name: "Game 1", size: "5x5", hpMax: 100 },
        { id: 2, name: "Game 2", size: "8x8", hpMax: 150 },
      ],
      selectedGame: null,
    };
  },
  methods: {
    toggleActionColumn(gameId) {
      // Set the selectedGame to the clicked row
      this.selectedGame = gameId;
    },
  },
};
</script>

<style scoped>
.available-games {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: black;
 
}

#availableGamesTitle {
  color: #3D5CFF;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}

.column {
  color: black;
}

.selected-row td {
  color: blue;
}

.action-column {
  visibility: hidden;
}

.selected-row .action-column {
  visibility: visible; /* when the selected row is clicked, only there the column where the button is will be visible*/
}

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

.game-link:hover {
  background-color: #007BFF;
  color: #fff;
}
</style>
