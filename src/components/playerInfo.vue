<template>
  <section class="player-info">
    <header class="player-info-header">
      <h1 class="info-title">Player Information</h1>
    </header>
    <main class="player-info-main">
      <div class="info-details">
        <div class="info-item">
          <dt>Name:</dt>
          <dd class="info-value">{{ playerName }}</dd>
        </div>
        <div class="info-item">
          <dt>Level:</dt>
          <dd class="info-value">{{ playerLevel }}</dd>
        </div>
        <div class="info-item">
          <dt>Experience:</dt>
          <dd class="info-value">{{ playerExperience }}</dd>
        </div>
        <div class="info-item">
          <dt>Coins:</dt>
          <dd class="info-value">{{ playerCoins }}</dd>
        </div>
        <div class="info-item">
          <dt>Backpacked Attacks:</dt>
          <dd class="info-value">{{ backpackedAttacks }}</dd>
          <!-- Button to toggle display of backpacked attacks -->
          <button @click="toggleBackpackedAttacks">
            {{ showBackpackedAttacks ? 'Hide' : 'Show' }} Backpacked Attacks
          </button>
          <!-- Display backpacked attacks if showBackpackedAttacks is true -->
          <div v-if="showBackpackedAttacks" class="backpacked-attacks">
            <dt>Backpacked Attacks:</dt>
            <dd class="info-value">{{ backpackedAttacks }}</dd>
          </div>
        </div>
        <div class="info-item">
          <dt>Equipped Attacks for the following games:</dt>
          <ul class="game-list">
            <li v-for="game in equippedAttacksGames" :key="game.id" class="game-item">
              <span class="game-name">{{ game.name }}:</span>
              <span class="game-attacks">{{ game.equippedAttacks }}</span>
            </li>
          </ul>
          <!-- Button to toggle display of equipped attacks -->
          <button @click="toggleEquippedAttacks">
            {{ showEquippedAttacks ? 'Hide' : 'Show' }} Equipped Attacks
          </button>
          <!-- Display equipped attacks if showEquippedAttacks is true -->
          <div v-if="showEquippedAttacks" class="equipped-attacks">
            <dt>Equipped Attacks for the following games:</dt>
            <ul class="game-list">
              <li v-for="game in equippedAttacksGames" :key="game.id" class="game-item">
                <span class="game-name">{{ game.name }}:</span>
                <span class="game-attacks">{{ game.equippedAttacks }}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- Button to delete account -->
        <button @click="deleteAccount" class="delete-account-btn">Delete Account</button>
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
  background-color: #222;
  color: #fff;
  padding: 20px;
  border: 2px solid #354a5e;
  border-radius: 10px;
}

.info-title {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.player-photo {
  max-width: 300px;
  border: 2px solid #354a5e;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
}

.info-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.info-item {
  margin: 10px;
  text-align: center;
  font-size: 18px;
}

.info-value {
  font-weight: bold;
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

.backpacked-attacks,
.equipped-attacks {
  margin: 10px;
  text-align: center;
  font-size: 18px;
}

.delete-account-btn {
  margin-top: 20px;
  background-color: #d9534f;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
