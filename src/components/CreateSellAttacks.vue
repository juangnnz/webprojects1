<template>
    <div class="attack-container">
      <h2 id="titles">Create Attacks</h2>
  
      <form @submit.prevent="createAttack" class="attack-form">
        <input v-model="newAttack.name" type="text" placeholder="Enter attack name" class="input-field" required>
        <input v-model="newAttack.position" type="text" placeholder="Enter positions" class="input-field" required>
  
        <label for="askingPrice">Asking Price:</label>
        <input v-model="newAttack.askingPrice" type="number" required>
  
        <button class="button" type="submit">Create Attack</button>
      </form>
  
      <!-- Aqui se listean todos nuestros ataques -->
      <h3 id="titles">Your Attacks</h3>
      <ul class="attack-list">
        <li v-for="(attack, index) in userAttacks" :key="index" class="attack-item">
          <span class="attack-info">
            {{ attack.name }} - Position: {{ attack.position }} - Asking Price: {{ attack.askingPrice }}
          </span>
          <button @click="sellAttack(index)" class="button">Sell</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newAttack: {
          name: '',
          position: '',
          askingPrice: 0,
        },
        userAttacks: [],
      };
    },
    methods: {
      createAttack() {
        // aqui añadimos el ataque nuevo creado a la lista de ataques
        this.userAttacks.push({ ...this.newAttack });
        
        this.newAttack = {
          name: '',
          position: '',
          askingPrice: 0,
        };
      },
      sellAttack(index) {
        // aqui vendemos el ataque y ya usamos API para actualizar la info
        alert(`Selling attack: ${this.userAttacks[index].name}`);
      },
    },
  };
  </script>
  
<style>

  #titles {
    color: #3D5CFF;
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

  .attack-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    padding: 0;
  }
  
  .attack-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    color: black;
  }
  
  .button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px; 
    background-color: #3D5CFF; 
    color: #ffffff;
    cursor: pointer;
    outline: none; 
  }
  
 
  </style>
  