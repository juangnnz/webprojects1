<template>
  <div class="create-game">
    <h2 id="createArenaTitle">Create an Arena</h2>
    <form @submit.prevent="createGame">
      <div class="form-group">
        <input type="text" v-model="gameId"  placeholder="Enter Game ID" id="gameId" required>
      </div>

      <div class="form-group">
        <input type="number" v-model="rows"  placeholder="Enter number of rows" id="rows" required>
      </div>

      <div class="form-group">
        <input type="number" v-model="columns"  placeholder="Enter number of columns" id="columns" required>
      </div>

      <div class="form-group">
        <input type="number" v-model="hp"  placeholder="Enter starting HP for players" id="hp" required>
      </div>

      <button class="create-button" type="submit">Create</button>
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
  margin: 5px 0;
  border: 2px solid #3D5CFF; /* Cambia el color del borde según tus preferencias */
  border-radius: 5px; /* Ajusta el radio según tus preferencias */
  background-color: #ffffff; /* Fondo blanco */
  color: #000000; /* Texto negro */
  outline: none;
}

.create-button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px; /* Bordes redondos */
  background-color: #3D5CFF; /* Fondo del color especificado */
  color: #ffffff; /* Texto blanco */
  cursor: pointer;
  outline: none; /* Elimina el contorno predeterminado del navegador */
}

.create-button:hover {
  background-color: #0056b3;
}

#createArenaTitle {
  color: #3D5CFF;
}
</style>
