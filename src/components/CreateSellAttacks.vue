<template>
  <div class="attack-container">
    <div class="block1">
      <h2 id="titles">Create Attacks</h2>
      <form @submit.prevent="createAttack" class="attack-form">
        <input v-model="newAttack.name" type="text" placeholder="Enter attack name" class="input-field" required>
        <input v-model="newAttack.position" type="text" placeholder="Enter positions" class="input-field" required>
        <button class="button" type="submit">Create Attack</button>
      </form>
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
  </div>
</template>

<script>
export default {
  props: ['token'],
  data() {
    return {
      newAttack: {
        name: '',
        position: '',
        textButton: 'Sell',
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
        const response = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks?token=${this.token}`);
        const data = await response.json();
        this.userAttacks = data.attacks;
      } catch (error) {
        console.error('Error fetching user attacks:', error);
      }
    },
    async createAttack() {
      try {
        const response = await fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.token}`,
          },
          body: JSON.stringify(this.newAttack),
        });
        const data = await response.json();

        // Update userAttacks with the new list of attacks after creation
        await this.fetchAttacks();

        // Reset the newAttack object
        this.newAttack = {
          name: '',
          position: '',
          textButton: 'Sell',
        };
      } catch (error) {
        console.error('Error creating attack:', error);
      }
    },
    async sellAttack(index) {
      try {
        if (this.userAttacks[index].textButton === 'Sell') {
          const response = await fetch(`https://balandrau.salle.url.edu/i3/shop/attacks/${this.userAttacks[index].id}/sell`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          });

          // Update userAttacks with the new list of attacks after selling
          await this.fetchAttacks();

          this.userAttacks[index].textButton = 'In store';
        }
      } catch (error) {
        console.error('Error selling attack:', error);
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
  border: 2px solid #3D5CFF; /* Cambia el color del borde según tus preferencias */
  border-radius: 5px; /* Ajusta el radio según tus preferencias */
  background-color: #ffffff; /* Fondo blanco */
  color: #000000; /* Texto negro */
  outline: none;
  }

  #input-price{
  width: 80px;
  margin: 5px 0;
  border: 2px solid #3D5CFF; /* Cambia el color del borde según tus preferencias */
  border-radius: 5px; /* Ajusta el radio según tus preferencias */
  background-color: #ffffff; /* Fondo blanco */
  color: #000000; /* Texto negro */
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
  
 
  </style>
  