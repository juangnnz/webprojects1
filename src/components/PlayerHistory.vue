<template>
    <div class="Player-History">
      <div class="info">
        <h2>Information on {{ player.name }}</h2>
    
        <div style="color: black;" >
          <strong >Experience:</strong> {{ player.experience }}
        </div>
        <div style="color: black;">
          <strong>Level:</strong> {{ calculateLevel(player.experience) }}
        </div>
        <div style="color: black;">
          <strong style="color: black;">Coins:</strong> {{ player.coins }}
        </div>
        <div style="color: black;">
          <strong style="color: black;">Games Played:</strong> {{ player.gamesPlayed }}
        </div>
        <div style="color: black;">
          <strong style="color: black;">Games Won:</strong> {{ player.gamesWon }}
        </div>
      </div>
  
      <div class="attacks">

          <div >
            <button @click="toggleBackpackAttacks">Show Backpacked Attacks</button>
            <div v-if="showBackpackAttacks">
              <h3>Backpacked Attacks:</h3>
              <ul style=" list-style-type: none;">
                <li v-for="attack in player.backpackAttacks" :key="attack.id">
                  {{ attack.name }}
                </li>
              </ul>
            </div>
          </div>
      
          <div >
            <button @click="toggleEquippedAttacks">Show Equipped Attacks</button>
            <div v-if="showEquippedAttacks">
              <h3>Equipped Attacks:</h3>
              <ul  style=" list-style-type: none;">
                <li v-for="attack in player.equippedAttacks" :key="attack.id">
                  {{ attack.name }}
                </li>
              </ul>
            </div>
          </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        player: {
          name: "Pol",
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

  .Player-History{

    display: flex;
    flex-direction: row;
  }

  .info{

    margin-left: 200px;
  }

  .attacks{
     margin-left: 90px;
     display: flex;
     flex-direction: row;
  }
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

  li{
    color: black;
}
  </style>
  