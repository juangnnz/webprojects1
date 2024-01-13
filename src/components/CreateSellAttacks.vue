<template>
  <section class="attack-container">
    <div class="block1">
      <h2 id="titles">Create Attacks</h2>
      <form @submit.prevent="createAttack" class="attack-form">
        <input v-model="newAttack.name" type="text" placeholder="Enter attack name" class="input-field" required>
        <input v-model="newAttack.position" type="text" placeholder="Enter positions" class="input-field" required>
        <button class="button" type="submit">Create Attack</button>
      </form>
      <div id="error-message"></div>
    </div>
    <div class="block2">
      <h2 id="titleAttack">Your Attacks:</h2>
      <ul class="attack-list">
        <li v-for="(attack, index) in userAttacks" :key="index" class="attack-item">
          <span class="attack-info">
            {{ attack.name }} - Position: {{ attack.position }}
          </span>
          <form @submit.prevent="sellAttack(index)" class="sell-attack">
            <input v-if="attack.textButton !== 'In store'" v-model="attack.askingPrice" type="number" id="input-price" placeholder="Enter price" required>
            <button class="button">{{ attack.textButton }}</button>
          </form>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newAttack: {
        name: '',
        position: '',
        textButton: 'Sell',
        askingPrice: 0,
      },
      userAttacks: [],
    };
  },
  mounted() {
    this.fetchAttacks();
  },
  methods: {
    async fetchAttacks() {
          
      try {
        const token = localStorage.getItem('token');

        const response = await fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Bearer': `${token}`,
          },
        });

        const data = await response.json();
       
        this.userAttacks = data.map(attack => ({
            name: attack.attack_ID, 
            position: attack.positions, 
            textButton: attack.on_sale ? 'In store' : 'Sell', 
        }));

      } catch (error) {
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.textContent = 'Error with the server';
        errorMessageDiv.style.color = 'red'; 
      }
    },
    async createAttack() {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Bearer': `${token}`,
          },
          body: JSON.stringify({
            attack_ID: this.newAttack.name,
            positions: this.newAttack.position,
            img: 'https://www.shutterstock.com/image-vector/battle-game-cross-swords-concept-260nw-1888899151.jpg',
          }),
        });

        if (response.ok) {
          const errorMessageDiv = document.getElementById('error-message');
          errorMessageDiv.textContent = '';

        } else {
         
          const errorData = await response.json(); 
              
          if (errorData.error && errorData.error.message) {
              const errorMessage = errorData.error.message;
              const errorMessageDiv = document.getElementById('error-message');
              errorMessageDiv.textContent = errorMessage;
              errorMessageDiv.style.color = 'red'; 
          }
        }

        // Update userAttacks with the new list of attacks after creation
        await this.fetchAttacks();

        // Reset the newAttack object
        this.newAttack = {
          name: '',
          position: '',
          textButton: 'Sell',
        };
      } catch (error) {
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.textContent = 'Error with the server';
        errorMessageDiv.style.color = 'red'; 
      }
    },
    async sellAttack(index) {
      try {
        const token = localStorage.getItem('token');
        if (this.userAttacks[index].textButton === 'Sell') {
          
          const response = await fetch(`https://balandrau.salle.url.edu/i3/shop/attacks/${this.userAttacks[index].name}/sell`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Bearer': `${token}`,
            },
            body: JSON.stringify({
              price: this.userAttacks[index].askingPrice
            }),
          });
          
          if (response.ok){
            // Update userAttacks with the new list of attacks after selling
            await this.fetchAttacks();
            this.userAttacks[index].textButton = 'In store';
          }
          else{
            const errorData = await response.json(); 
              
            if (errorData.error && errorData.error.message) {
                const errorMessage = errorData.error.message;
                const errorMessageDiv = document.getElementById('error-message');
                errorMessageDiv.textContent = errorMessage;
                errorMessageDiv.style.color = 'red'; 
            }
          }
        }
      } catch (error) {
          const errorMessageDiv = document.getElementById('error-message');
          errorMessageDiv.textContent = 'Error with the server';
          errorMessageDiv.style.color = 'red'; 
      }
    },
  },
};
</script>
  
<style>

  #titles {
    color: #3D5CFF;
  }

  #title-attack{
    color: black;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 2px solid #3D5CFF; 
    border-radius: 5px; 
    background-color: #ffffff; 
    color: #000000; 
    outline: none;
  }

  #input-price{
    width: 80px;
    margin: 5px 0;
    border: 2px solid #3D5CFF; 
    border-radius: 5px; 
    background-color: #ffffff; 
    color: #000000; 
    outline: none;
  }

  .attack-container {
    margin: 20px auto;
    background-color: white;
    display: flex;
    flex-direction: row;
  }

  .block2{
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    width: 900px;
    align-items: center;
  }
  
  .attack-form {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  
  .attack-list {
    list-style: none;
  }
  
  .attack-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    max-width: 1000px;
  }
  
  .button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px; 
    background-color: #3D5CFF; 
    color: #ffffff;
    cursor: pointer;
    outline: none; 
    margin-top: 20px;
  }

/* Responsive Styles for Mobile */
@media only screen and (max-width: 600px) {
  .attack-container {
    flex-direction: column; 
  }

  .block1, .block2 {
    margin-left: 0;
    width: 100%; 
    height: 100px;
  }

  #titleAttack {
    margin-left: 30px;
    margin-top: 0%;
  }

  .button {
    width: 150px; 
    margin: 10px 0; 
  }
}

</style>
  