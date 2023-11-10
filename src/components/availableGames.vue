<template>
  <div class="available-games">
    <h2>Available Games (Not Started)</h2>
    <table>
      <thead>
        <tr>
          <th>Game ID</th>
          <th>Size</th>
          <th>HP-max</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in availableGames" :key="game.id">
          <td>{{ game.id }}</td>
          <td>{{ game.size }}</td>
          <td>{{ game.hpMax }}</td>
          <td>
            <router-link :to="'/game/' + game.id" class="game-link">
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
    };
  },
};
</script>

<style scoped>
.available-games {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
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
