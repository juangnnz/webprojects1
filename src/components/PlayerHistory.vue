<template>
    <div class="Player-History">
      <h2>{{ player.name }} Details</h2>
  
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
  
      <button @click="toggleBackpackAttacks">Show Backpacked Attacks</button>
      <div v-if="showBackpackAttacks">
        <h3>Backpacked Attacks:</h3>
        <ul>
          <li v-for="attack in player.backpackAttacks" :key="attack.id">
            {{ attack.name }}
          </li>
        </ul>
      </div>
  
      <button @click="toggleEquippedAttacks">Show Equipped Attacks</button>
      <div v-if="showEquippedAttacks">
        <h3>Equipped Attacks:</h3>
        <ul>
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
        showBackpackAttacks: false,
        showEquippedAttacks: false,
      };
    },
    methods: {
      calculateLevel(experience) {
        return experience;
      },
      toggleBackpackAttacks() {
        this.showBackpackAttacks = !this.showBackpackAttacks;
      },
      toggleEquippedAttacks() {
        this.showEquippedAttacks = !this.showEquippedAttacks;
      },
    },
  };
  </script>
  
  <style scoped>
  .player-details {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
  
  button {
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  