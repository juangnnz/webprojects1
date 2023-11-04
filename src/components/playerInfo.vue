<template>
  <section class="player-info">
    <header class="player-info-header">
      <h1 class="info-title">Player Information</h1>
    </header>
    <main class="player-info-main">
      <dl class="info-list">
        <div class="info-item">
          <dt>Name:</dt>
          <dd class="info-value">{{ playerName }}</dd>
        </div>
        <div class="info-item">
          <dt>Photo:</dt>
          <dd class="info-value">
            <img :src="playerPhoto" alt="Player Photo" class="player-photo">
          </dd>
        </div>
        <div class="info-item">
          <dt>Experience:</dt>
          <dd class="info-value">{{ playerExperience }}</dd>
        </div>
        <div class="info-item">
          <dt>Level:</dt>
          <dd class="info-value">{{ playerLevel }}</dd>
        </div>
        <div class="info-item">
          <dt>Coins:</dt>
          <dd class="info-value">{{ playerCoins }}</dd>
        </div>
        <div class="info-item">
          <dt>Backpacked Attacks:</dt>
          <dd class="info-value">{{ backpackedAttacks }}</dd>
        </div>
        <div class="info-item">
          <dt>Equipped Attacks for the following games:</dt>
          <ul>
            <li v-for="game in equippedAttacksGames" :key="game.id">{{ game.name }} - {{ game.equippedAttacks }}</li>
          </ul>
        </div>
      </dl>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      playerName: "Edou is beautiful",
      playerPhoto: "player_photo.jpg",
      playerExperience: 5000,
      playerLevel: 10,
      playerCoins: 1000,
      backpackedAttacks: "Attack A, Attack B, Attack C",
      equippedAttacksGames: [
        { id: 1, name: "Game 1", equippedAttacks: "Attack X, Attack Y" },
        { id: 2, name: "Game 2", equippedAttacks: "Attack Z" },
      ],
    };
  },
};
</script>

<style scoped>
.player-info-container {
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
}

.info-title {
  background-color: #354a5e;
  color: #fff;
  padding: 10px;
  font-size: 24px;
}

.info-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.info-item {
  margin: 10px;
  text-align: left;
}

.info-value {
  font-weight: bold;
}

.player-photo {
  max-width: 300px;
  border: 2px solid #354a5e;
}
</style>
