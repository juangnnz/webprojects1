<template>
  <section class="player-info">
    <header class="player-info-header">
      <h1 class="info-title">Welcome {{ playerName }} !</h1>
    </header>
    <main class="player-info-main">
      <div class="info-details">

          <dt class="info-value">Experience: {{ playerExperience }}</dt>
          <dt class="info-value">Level: {{ playerLevel }}</dt>
          <dt class="info-value">Coins: {{ playerCoins }}</dt>
          <dt class="info-value">Backpacked Attacks: {{ backpackedAttacks }}</dt>
        <div class="info-attacks">
          <dt class="info-value">Equipped Attacks:</dt>
          <ul class="game-list">
            <li v-for="game in equippedAttacksGames" :key="game.id" class="game-item">
              <span class="game-name">{{ game.name }}:</span>
              <span class="game-attacks">{{ game.equippedAttacks }}</span>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="display-btn">
        <button @click="logOut" class="btn">Log Out</button>
        <button @click="deleteAccount" class="btn">Delete Account</button>
      </div>
    </main>
  </section>
</template>


<script>
export default {
  data() {
    return {
      playerName: "Edou is beautiful",
      playerExperience: 5000,
      playerLevel: 10,
      playerCoins: 1000,
      backpackedAttacks: "Attack A, Attack B, Attack C",
      equippedAttacksGames: [
        { id: 1, name: "Game 1", equippedAttacks: "Attack X, Attack Y" },
        { id: 2, name: "Game 2", equippedAttacks: "Attack Z" },
      ],
      showBackpackedAttacks: false,
      showEquippedAttacks: false,
    };
  },
  methods: {
    // Muestra los ataques en la mochila
    toggleBackpackedAttacks() {
      this.showBackpackedAttacks = !this.showBackpackedAttacks;
    },
    // Mostar los ataques equipados
    toggleEquippedAttacks() {
      this.showEquippedAttacks = !this.showEquippedAttacks;
    },
    // Método para eliminar la cuenta del usuario
    deleteAccount() {
      alert("Account deleted successfully!");
    },
  },
};
</script>

<style scoped>
  .player-info {
    background-color: #ffffff;
    color: #fff;
    padding: 20px;
    border: 2px solid #354a5e;
    border-radius: 10px;
    display: flex;
    flex-direction: column; /* Cambio de dirección a columna */
    align-items: flex-start; /* Alinea a la izquierda */
  }

  .player-info-header {
    width: 100%; /* Ancho completo */
    margin-bottom: 20px; /* Espaciado entre el título y la información */
    display: flex;
    align-items: flex-start;
  }

  .info-title {
    font-size: 28px;
    text-align: left; /* Alinea el texto a la izquierda */
    color: #3D5CFF;
  }

  .player-info-main {
    background-color: #ffffff;
    color: #fff;
    display: flex;
    flex-direction: column; /* Cambio de dirección a columna */
  }

  .info-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .display-btn {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra verticalmente */
    justify-content: center; 
  }

  .info-attacks {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    color: black;
  }

  .info-value {
    font-weight: bold;
    margin-bottom: 5px; /* Añadido para separar cada pareja de dt y dd */
    color: black;
  }

  .game-list {
    list-style: none;
    padding: 0;
  }

  .game-item {
    display: flex;
    align-items: center;
    margin: 5px;
  }

  .game-name {
    font-weight: bold;
    margin-right: 5px;
  }

  .game-attacks {
    font-style: italic;
  }

  .btn {
    border: 2px solid #3D5CFF;
    border-radius: 10px;
    background-color: #ffffff;
    color: #000000;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 10px;
  }

</style>


