<template>
    <section class="Player-History">
      <article class="info">
        <h2>Information on {{ player.player_ID }}</h2>
    
        <p><strong>Experience:</strong> {{ player.xp }}</p>
        <p><strong>Level:</strong> {{ player.level }}</p>
        <p><strong>Coins:</strong> {{ player.coins }}</p>
        <p><strong>Games Played:</strong> {{ player.gamesPlayed }}</p>
        <p><strong>Games Won:</strong> {{ player.gamesWon }}</p>
      </article>
  
      <article class="attacks" >
          <div >
            <button @click="toggleBackpackAttacks">Show Backpacked Attacks</button>
            <div v-if="showBackpackAttacks">
              <h3>Backpacked Attacks:</h3>
              <ul style=" list-style-type: none;">
                <li v-for="attack in player.backpackAttacks" :key="attack.id">
                  {{ attack.attack_ID }}
                </li>
              </ul>
            </div>
          </div>
      
          <div>
            <button @click="toggleEquippedAttacks">Show Equipped Attacks</button>
            <div v-if="showEquippedAttacks">
              <h3>Equipped Attacks:</h3>
              <ul  style=" list-style-type: none;">
                <li v-for="attack in player.equippedAttacks" :key="attack.id">
                  {{ attack.attack_ID }}
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
          player_ID: '',
          xp: 0,
          level: 0,
          coins: 0,
          gamesPlayed: 0,
          gamesWon: 0,
          backpackAttacks: [],
          equippedAttacks: [],
        },
        showBackpackAttacks: false,
        showEquippedAttacks: false,
      };
    },
    created() {
      this.loadPlayer();
    },
    methods: {
      async loadPlayer() {
        try {
          const playerId = this.$route.params.id;
          
          const token = localStorage.getItem('token');
          const response = await fetch(`https://balandrau.salle.url.edu/i3/players/${playerId}`, {
            method: 'GET',
            headers: {
              'Bearer': `${token}`,
            },
          });

          if (response.ok) {
            const playerData = await response.json();
            this.player = playerData;
            // Fetch statistics
            this.fetchStatistics();
            // Fetch attacks
            this.fetchAttacks();

          } else {
            throw new Error('Failed to fetch player data');
          }
        } catch (error) {
          console.error('Error loading player data:', error);
        }
      },
      async fetchAttacks(){
        try {
          const playerId = this.$route.params.id;
          
          const token = localStorage.getItem('token');
          const response = await fetch(`https://balandrau.salle.url.edu/i3/players/${playerId}/attacks`, {
            method: 'GET',
            headers: {
              'Bearer': `${token}`,
            },
          });

          if (response.ok) {
            const playerAttacks = await response.json();
            this.player.backpackAttacks = playerAttacks;
            this.player.equippedAttacks = playerAttacks.filter(attack => attack.equipped);
           
          } else {
            throw new Error('Failed to fetch player data');
          }
        } catch (error) {
          console.error('Error loading player data:', error);
        }
      },
      async fetchStatistics(){
        try {
          const playerId = this.$route.params.id;
          
          const token = localStorage.getItem('token');
          const response = await fetch(`https://balandrau.salle.url.edu/i3/players/${playerId}/statistics`, {
            method: 'GET',
            headers: {
              'Bearer': `${token}`,
            },
          });

          if (response.ok) {
            const statistics = await response.json();
            this.player.gamesPlayed = statistics.games_played;
            this.player.gamesWon = statistics.games_won;
           
          } else {
            throw new Error('Failed to fetch player data');
          }
        } catch (error) {
          console.error('Error loading player data:', error);
        }
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
  .info p {
  color: black;
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
  