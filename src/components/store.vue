<template>
    <div>
      <h2>Store</h2>
      <form @submit.prevent="createAttack">
        <label for="attackName">Attack Name:</label>
        <input type="text" id="attackName" v-model="newAttackName">
        
        <button type="submit">Create Attack</button>
      </form>
  
      <!-- List of User's Attacks -->
      <div v-for="attack in userAttacks" :key="attack.id">
        <span>{{ attack.name }} (Power: {{ attack.power }})</span>
        <button @click="sellAttack(attack)">Sell</button>
      </div>
  
      <!-- List of Available Attacks for Purchase -->
      <div v-for="attack in availableAttacks" :key="attack.id">
        <span>{{ attack.name }} (Power: { attack.power }) - Price: {{ attack.price }}</span>
        <button @click="buyAttack(attack)">Buy</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newAttackName: '',
        userAttacks: [], 
        availableAttacks: [], 
        userCoins: 100, 
      };
    },
    methods: {
      createAttack() {
        
        const power = this.getRandomPowerLevel();
        // Creando un objeto ataque
        const newAttack = {
          name: this.newAttackName,
          power,
            forSale: false,
        };
        // Añadir el ataque al array de ataques del usuario
        this.userAttacks.push(newAttack);
      },
      sellAttack(attack) {
        // Marcar para vender
        attack.forSale = true;
       // poner precio al ataque
        attack.price = 20;
      },
      buyAttack(attack) {
        if (attack.price <= this.userCoins) {
          // quitar las monedas del usuario
          this.userCoins -= attack.price;
          // Añadir el ataque a los ataques del usuario
          this.userAttacks.push(attack);
          // cuando lo has comprado ya no está disponible
          const index = this.availableAttacks.indexOf(attack);
          if (index !== -1) {
            this.availableAttacks.splice(index, 1);
          }
        } else {
          // sj no hay suficientes monedas
        }
      },
      getRandomPowerLevel() {
        // llamar a la api para obtener un nivel de poder 
        return 
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    font-size: 24px;
    margin-top: 20px;
    color: #354a5e;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    font-size: 18px;
    color: #354a5e;
  }
  
  .card-text {
    font-size: 14px;
    color: #666;
  }
  
  .btn {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
  }
  
  .btn-primary {
    background-color: #007BFF;
    color: #fff;
  }
  
  .btn-danger {
    background-color: #DC3545;
    color: #fff;
  }
  
  .btn-success {
    background-color: #28A745;
    color: #fff;
  }
  </style>