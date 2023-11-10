<template>
    <div class="attack-container">
      <h2>Create/Sell Attacks</h2>
  
      <!-- Aqui form para crear el ataque -->
      <form @submit.prevent="createAttack" class="attack-form">
        <label for="attackName">Attack Name:</label>
        <input v-model="newAttack.name" type="text" required>
  
        <label for="position">Position:</label>
        <input v-model="newAttack.position" type="text" required>
  
        <label for="askingPrice">Asking Price:</label>
        <input v-model="newAttack.askingPrice" type="number" required>
  
        <button type="submit">Create Attack</button>
      </form>
  
      <!-- Aqui se listean todos nuestros ataques -->
      <h3>Your Attacks</h3>
      <ul class="attack-list">
        <li v-for="(attack, index) in userAttacks" :key="index" class="attack-item">
          <span class="attack-info">
            {{ attack.name }} - Position: {{ attack.position }} - Asking Price: {{ attack.askingPrice }}
          </span>
          <button @click="sellAttack(index)" class="sell-button">Sell</button>
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
  
  button {
    background-color: #354a5e;
    color: #fff;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #2e3e4f;
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
  }
  
  .sell-button {
    background-color: #ff6347;
    color: #fff;
    padding: 8px;
    border: none;
    cursor: pointer;
  }
  
  .sell-button:hover {
    background-color: #d32f2f;
  }
  </style>
  