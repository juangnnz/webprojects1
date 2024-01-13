<template>
  <!-- Main container for player information -->
  <section class="player-info">
      <!-- Header with player's name -->
      <header class="player-info-header">
        <h1 class="info-title">Welcome {{ playerName }}!</h1>
      </header>
      <!-- Main section with player's statistics -->
      <main class="player-info-main">
        <!-- Container for player details -->
        <section class="info-details">
          <!-- Display player information -->
          <p class="info-value">Experience: {{ playerExperience }}</p>
          <p class="info-value">Level: {{ playerLevel }}</p>
          <p class="info-value">Coins: {{ playerCoins }}</p>
        </section>

        <section class="info-attacks" v-if="backpackedAttacks.length > 0">
          <h2 class="info-value">Backpacked Attacks:</h2>
          <ul class="game-list">
            <!-- Using <li> to represent each game -->
            <li v-for="game in backpackedAttacks" :key="game.id" class="game-item">
              <span class="game-name">{{ game.attack_ID }}:</span>
              <span class="game-attacks">{{ game.power }}</span>
            </li>
          </ul>
        </section>
          <!-- Display equipped attacks for each game -->
          <section class="info-attacks" v-if="equippedAttacksGames.length > 0">
            <div class="info-value">Equipped Attacks:</div>
            <ul class="game-list">
              <!-- Using <li> to represent each game -->
              <li v-for="game in equippedAttacksGames" :key="game.id" class="game-item">
                <span class="game-name">{{ game.attack_ID }}:</span>
                <span class="game-attacks">{{ game.power }}</span>
              </li>
            </ul>
          </section>
          <div id="error-message"></div>
        </main>

    <!-- Buttons for log out and delete account -->
    <footer class="display-btn">
      <button @click="logOut" class="btn">Log Out</button>
      <button @click="deleteAccount" class="btn">Delete Account</button>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      playerName: '',
      playerExperience: 0,
      playerLevel: 0,
      playerCoins: 200,
      backpackedAttacks: [],
      equippedAttacksGames: [],
      showBackpackedAttacks: false,
      showEquippedAttacks: false,
    };
  },
  async mounted() {
    try {
      const token = localStorage.getItem('token');
      const playerId = localStorage.getItem('playerID');

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
        console.log(attacksData);
        
        // Update attacks information
        this.backpackedAttacks = attacksData;
        this.equippedAttacksGames = attacksData.filter(attack => attack.equipped);
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
        
        const token = localStorage.getItem('token');

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
  flex-direction: column;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
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
  padding: 10px 10px;
  font-size: 20px;
  width: 200px;
}
</style>
