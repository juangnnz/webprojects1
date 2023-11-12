<template>
  <!-- Main container for player information -->
  <div class="player-info">
    <!-- Section containing player details -->
    <section>
      <!-- Header with player's name -->
      <header class="player-info-header">
        <h1 class="info-title">Welcome {{ playerName }}!</h1>
      </header>
      <!-- Main section with player's statistics -->
      <main class="player-info-main">
        <!-- Container for player details -->
        <div class="info-details">
          <!-- Display player information -->
          <div class="info-value">Experience: {{ playerExperience }}</div>
          <div class="info-value">Level: {{ playerLevel }}</div>
          <div class="info-value">Coins: {{ playerCoins }}</div>
          <div class="info-value">Backpacked Attacks: {{ backpackedAttacks }}</div>
          <!-- Display equipped attacks for each game -->
          <div class="info-attacks">
            <div class="info-value">Equipped Attacks:</div>
            <ul class="game-list">
              <!-- Using <li> to represent each game -->
              <li v-for="game in equippedAttacksGames" :key="game.id" class="game-item">
                <span class="game-name">{{ game.name }}:</span>
                <span class="game-attacks">{{ game.equippedAttacks }}</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>

    <!-- Buttons for log out and delete account -->
    <div class="display-btn">
      <button @click="logOut" class="btn" style="margin-top: 40px;">Log Out</button>
      <button @click="deleteAccount" class="btn">Delete Account</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // Sample player data
      playerName: "Edou",
      playerExperience: 5000,
      playerLevel: 10,
      playerCoins: 1000,
      backpackedAttacks: "Attack A, Attack B, Attack C",
      equippedAttacksGames: [
        { id: 1, name: "Game 1", equippedAttacks: "Attack X, Attack Y" },
        { id: 2, name: "Game 2", equippedAttacks: "Attack Z" },
      ],
      // Toggle flags for displaying back packed and equipped attacks
      showBackpackedAttacks: false,
      showEquippedAttacks: false,
    };
  },
  methods: {
    // Toggle method for displaying/hiding backpacked attacks
    toggleBackpackedAttacks() {
      this.showBackpackedAttacks = !this.showBackpackedAttacks;
    },
    // Toggle method for displaying/hiding equipped attacks
    toggleEquippedAttacks() {
      this.showEquippedAttacks = !this.showEquippedAttacks;
    },
    // Method to delete the user's account
    deleteAccount() {
      alert("Account deleted successfully!");
      this.$router.push('/home');
    },
    // Method to log out the user
    logOut() {
      this.$router.push('/home');
    }
  },
};
</script>

<style scoped>
/* Styling for the main player information container */
.player-info {
  background-color: #ffffff;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  margin-left: 60px;
}

/* Styling for the header section containing player's name */
.player-info-header {
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  align-items: flex-start;
  background: #ffffff;
}

/* Styling for the title displaying player's name */
.info-title {
  font-size: 28px;
  text-align: left;
  color: #3D5CFF;
}

/* Styling for the main section containing player's statistics */
.player-info-main {
  background-color: #ffffff;
  color: #fff;
  display: flex;
  flex-direction: column;
}

/* Styling for the container of player details */
.info-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Styling for the buttons section */
.display-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 200px;
}

/* Styling for the section displaying equipped attacks */
.info-attacks {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  color: black;
}

/* Styling for the individual statistics values */
.info-value {
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
}

/* Styling for the list of equipped attacks */
.game-list {
  list-style: none;
  padding: 0;
}

/* Styling for each game item in the list */
.game-item {
  display: flex;
  align-items: center;
  margin: 5px;
}

/* Styling for the name of the game in the equipped attacks list */
.game-name {
  font-weight: bold;
  margin-right: 5px;
}

/* Styling for the equipped attacks in the list */
.game-attacks {
  font-style: italic;
}

/* Styling for the log out and delete account buttons */
.btn {
  border: 2px solid #3D5CFF;
  border-radius: 10px;
  background-color: #ffffff;
  color: #000000;
  padding: 10px 20px;
  font-size: 25px;
  margin-top: 10px;
  width: 300px;
}
</style>
