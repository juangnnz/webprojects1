<template>
  <!-- Container for displaying player details and history -->
  <div class="Player-History">
    <!-- Title displaying the player's name and "Details" -->
    <h2>{{ player.name }} Details</h2>

    <!-- Player details displayed as key-value pairs -->
    <div>
      <strong>Experience:</strong> {{ player.experience }}
    </div>
    <div>
      <strong>Level:</strong> {{ calculateLevel(player.experience) }}
    </div>
    <div>
      <strong>Coins:</strong> {{ player.coins }}
    </div>
    <div>
      <strong>Games Played:</strong> {{ player.gamesPlayed }}
    </div>
    <div>
      <strong>Games Won:</strong> {{ player.gamesWon }}
    </div>

    <!-- Button to toggle the visibility of Backpacked Attacks -->
    <button @click="toggleBackpackAttacks">Show Backpacked Attacks</button>
    <div v-if="showBackpackAttacks">
      <h3>Backpacked Attacks:</h3>
      <ul>
        <!-- List each Backpacked Attack -->
        <li v-for="attack in player.backpackAttacks" :key="attack.id">
          {{ attack.name }}
        </li>
      </ul>
    </div>

    <!-- Button to toggle the visibility of Equipped Attacks -->
    <button @click="toggleEquippedAttacks">Show Equipped Attacks</button>
    <div v-if="showEquippedAttacks">
      <h3>Equipped Attacks:</h3>
      <ul>
        <!-- List each Equipped Attack -->
        <li v-for="attack in player.equippedAttacks" :key="attack.id">
          {{ attack.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sample player data
      player: {
        name: "John Doe",
        experience: 1500,
        coins: 200,
        gamesPlayed: 30,
        gamesWon: 15,
        backpackAttacks: [
          { id: 1, name: "Fireball" },
          { id: 2, name: "Ice Beam" },
          { id: 3, name: "Thunder Strike" },
        ],
        equippedAttacks: [
          { id: 4, name: "Slash" },
          { id: 5, name: "Healing Wave" },
        ],
      },
      // Flags to control the visibility of Backpacked and Equipped Attacks
      showBackpackAttacks: false,
      showEquippedAttacks: false,
    };
  },
  methods: {
    // Method to calculate the player's level (for demonstration purposes)
    calculateLevel(experience) {
      return experience;
    },
    // Toggle method for showing/hiding Backpacked Attacks
    toggleBackpackAttacks() {
      this.showBackpackAttacks = !this.showBackpackAttacks;
    },
    // Toggle method for showing/hiding Equipped Attacks
    toggleEquippedAttacks() {
      this.showEquippedAttacks = !this.showEquippedAttacks;
    },
  },
};
</script>

<style scoped>
/* Styling for the player details container */
.Player-History {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

/* Styling for buttons */
button {
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
