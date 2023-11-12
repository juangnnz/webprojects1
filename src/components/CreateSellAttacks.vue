<template>
    <div class="attack-container">

      <div class = "block1">
        <h2 id="titles">Create Attacks</h2>
    
        <form @submit.prevent="createAttack" class="attack-form">
          <input v-model="newAttack.name" type="text" placeholder="Enter attack name" class="input-field" required>
          <input v-model="newAttack.position" type="text" placeholder="Enter positions" class="input-field" required>
          <button class="button" type="submit">Create Attack</button>
        </form>
      </div>

     
      <div class = "block2">
          <!-- Aqui se listean todos nuestros ataques -->

          <h2 id="titleAttack">Your Attacks:</h2>
          
          <ul class="attack-list">
            <li v-for="(attack, index) in userAttacks" :key="index" class="attack-item">
              <span class="attack-info">
                {{ attack.name }} - Position: {{ attack.position }} 
              </span>
              <form @submit.prevent="sellAttack(index)" class="sell-attack">
                <input v-if="attack.textButton !== 'In store'" v-model="attack.askingPrice" type="number" id = "input-price" placeholder = "Enter price" required>
                <button class="button">{{ attack.textButton }}</button>
              </form>
            </li>
          </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newAttack: {
          name: '',
          position: '',
          textButton: 'Sell',
        },
        userAttacks: []
      };
    },
    methods: {
      createAttack() {
        // aqui añadimos el ataque nuevo creado a la lista de ataques
        this.userAttacks.push({ ...this.newAttack});
        
        this.newAttack = {
          name: '',
          position: '',
          textButton: 'Sell',
        };
      },
      sellAttack(index) {
        if (this.userAttacks[index].textButton=='Sell'){
          // aqui vendemos el ataque y ya usamos API para actualizar la info
           const askingPrice = this.userAttacks[index].askingPrice;

            // Realiza alguna acción para actualizar la información utilizando la API
            // En este ejemplo, solo se muestra una alerta
            alert(`Selling Attack ${this.userAttacks[index].name} for $${askingPrice}`);
            this.userAttacks[index].textButton = 'In store';
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
  