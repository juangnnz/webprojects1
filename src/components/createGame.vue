<template>
  <div class="create-game">
    <h2>Create an Arena</h2>
    <form @submit.prevent="createGame">
      <div class="form-group">
        <label for="gameId">Game ID:</label>
        <input type="text" v-model="gameId" id="gameId" required>
      </div>

      <div class="form-group">
        <label for="rows">Number of Rows:</label>
        <input type="number" v-model="rows" id="rows" required>
      </div>

      <div class="form-group">
        <label for="columns">Number of Columns:</label>
        <input type="number" v-model="columns" id="columns" required>
      </div>

      <div class="form-group">
        <label for="hp">Starting HP for Players:</label>
        <input type="number" v-model="hp" id="hp" required>
      </div>

      <button class="create-button" type="submit">Create Game</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameId: '',
      rows: 0,
      columns: 0,
      hp: 0,
    };
  },
  methods: {
    createGame() {
      const gameConfig = {
        gameId: this.gameId,
        rows: this.rows,
        columns: this.columns,
        hp: this.hp,
        currentPlayer: "player1",
      };

      this.$router.push({ name: '', params: { gameConfig } });
    },
  },
};
</script>

<style scoped>
.create-game {
  text-align: center;
  max-width: 400px;
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

.form-group {
  margin: 10px 0;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.create-button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-button:hover {
  background-color: #0056b3;
}
</style>
