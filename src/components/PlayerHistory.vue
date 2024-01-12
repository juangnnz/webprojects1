<template>
    <section class="Player-History">
      <article class="info">
        <h2>Information on {{ player.name }}</h2>
    
        <p><strong>Experience:</strong> {{ player.experience }}</p>
        <p><strong>Level:</strong> {{ calculateLevel(player.experience) }}</p>
        <p><strong>Coins:</strong> {{ player.coins }}</p>
        <p><strong>Games Played:</strong> {{ player.gamesPlayed }}</p>
        <p><strong>Games Won:</strong> {{ player.gamesWon }}</p>
      </article>
  
      <article class="attacks">
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

        </article>
      </section>
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

  .Player-History {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .info, .attacks {
    max-width: 90%;
    margin: 10px;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
  }

  .attacks {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }

  li {
    color: black;
  }

  @media (max-width: 768px) {
    .Player-History {
      flex-direction: column;
    }

    .info, .attacks {
      width: 100%;
      margin: 5px 0;
    }

    .attacks {
      flex-direction: column;
    }
  }
</style>
  