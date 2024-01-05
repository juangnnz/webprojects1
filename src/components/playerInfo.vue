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
          <div id="error-message"></div>
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
      playerName: '',
      playerExperience: 0,
      playerLevel: 0,
      playerCoins: 200,
      backpackedAttacks: '',
      equippedAttacksGames: [],
      showBackpackedAttacks: false,
      showEquippedAttacks: false,
    };
  },
  async mounted() {
    try {
      const token = this.$route.query.token;
      const playerId = this.$route.query.player_ID;

      // Fetch player data
      const playerResponse = await fetch(`https://balandrau.salle.url.edu/i3/players/${playerId}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Bearer': `${token}`,
        },
      });

      if (playerResponse.ok) {
        const playerData = await playerResponse.json();

        // Update player data
        this.playerName = playerData.player_ID;
        this.playerExperience = playerData.xp;
        this.playerLevel = playerData.level;
        this.playerCoins = playerData.coins;
      } else {
        throw new Error('Failed to fetch player data');
      }

      // Fetch attacks information
      const attacksResponse = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Bearer': `${token}`,
        },
      });

      if (attacksResponse.ok) {
        const attacksData = await attacksResponse.json();

        // Update attacks information
        this.backpackedAttacks = attacksData.backpackedAttacks;
        this.equippedAttacksGames = attacksData.equippedAttacksGames;
      } else {
        throw new Error('Failed to fetch attacks data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, show a message to the user, etc.
    }
  },
  methods: {
    toggleBackpackedAttacks() {
      this.showBackpackedAttacks = !this.showBackpackedAttacks;
    },
    toggleEquippedAttacks() {
      this.showEquippedAttacks = !this.showEquippedAttacks;
    },
    deleteAccount() {
      try {
        const token = this.$route.query.token;

        // Realizar la solicitud DELETE para eliminar la cuenta
        fetch(`https://balandrau.salle.url.edu/i3/players/`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Bearer': `${token}`,
          },
        }).then(async deleteResponse => {
          if (deleteResponse.ok) {
            alert("Account successfully deleted!");
            this.$router.push('/home');
          } else {
            const errorData = await deleteResponse.json();
              
            if (errorData.error && errorData.error.message) {
              const errorMessage = errorData.error.message;
              const errorMessageDiv = document.getElementById('error-message');
              errorMessageDiv.textContent = errorMessage;
              errorMessageDiv.style.color = 'red'; 
            }  
            
          }
        }).catch(error => {
          const errorMessageDiv = document.getElementById('error-message');
          errorMessageDiv.textContent = 'Error with the server';
          errorMessageDiv.style.color = 'red'; 
          
        });
      } catch (error) {
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.textContent = 'Error with the server';
        errorMessageDiv.style.color = 'red'; 
        
      }
    },

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
