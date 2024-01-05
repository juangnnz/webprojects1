<template>
  <div class="create-game">
    <h2 id="createArenaTitle">Create an Arena</h2>
    <form @submit.prevent="createGame">
      <div class="form-group">
        <label id="createArenaTitle">Enter Game ID</label>
        <input type="text" v-model="gameId" id="gameId" required>
      </div>

      <div class="form-group">
        <label id="createArenaTitle">Enter size of Arena (2-10)</label>
        <input type="number" v-model="matrixSize" id="matrixSize" min="2" max="10" required>
      </div>

      <div class="form-group">
        <label id="createArenaTitle">Enter starting HP for players</label>
        <input type="number" v-model="hp" id="hp" required>
      </div>

      <button class="create-button" type="submit">Create</button>
      <div id="error-message"></div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameId: '',
      matrixSize: 2, // Default value, you can adjust as needed
      hp: 0,
    };
  },
  methods: {
    async createGame() {
      
      try {
        
        const token = localStorage.getItem('token');
       
        const response = await fetch('https://balandrau.salle.url.edu/i3/arenas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Bearer': `${token}`,
          },
          body: JSON.stringify({
            game_ID: this.gameId,
            size: this.matrixSize,
            HP_max: this.hp,
          }),
        });

        if (response.ok) {
          const responseData = await response.json();
          this.$router.push({ name: 'arena', params: { gameId: this.gameId, rows: this.matrixSize, hp: this.hp, currentPlayer: 'player1' } });

        } else {
          const errorData = await response.json(); 
              
          if (errorData.error && errorData.error.message) {
            const errorMessage = errorData.error.message;
            const errorMessageDiv = document.getElementById('error-message');
            errorMessageDiv.textContent = errorMessage;
            errorMessageDiv.style.color = 'red'; 
          }  
        }
      } catch (error) {
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.textContent = 'Error with the server';
        errorMessageDiv.style.color = 'red'; 
      }

    }
  }
};
</script>

<style scoped>
.create-game {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: white;
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
