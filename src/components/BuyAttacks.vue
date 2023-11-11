<template>
    <div>
      <h2 id="title"> Attacks for Sale</h2>
  
      <ul class="attack-list">
        <li v-for="(attack, index) in attacksForSale" :key="index" class="attack-item">
          <span class="attack-info">
            {{ attack.name }} - Position: {{ attack.position }} - Price: {{ attack.askingPrice }} coins
          </span>
          <button @click="buyAttack(index)" :disabled="userCoins < attack.askingPrice" class="buy-button">
            Buy
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        attacksForSale: [
          { name: 'Bola de fuego', position: 'Long Range', askingPrice: 30 },
          { name: 'Thunder ', position: 'Melee', askingPrice: 25 },
          { name: 'Tornadooo', position: 'Short Range', askingPrice: 40 },
        ],
        userCoins: 50,
      };
    },
    methods: {
      buyAttack(index) {
        const attack = this.attacksForSale[index];
  
        if (this.userCoins >= attack.askingPrice) {
          this.userCoins -= attack.askingPrice;
          // aqui API para gestionar la compra y actualizar el usuario
          alert(`You have successfully purchased ${attack.name} for ${attack.askingPrice} coins.`);
        } else {
          alert('Insufficient coins to buy this attack.');
        }
      },
    },
  };
  </script>
  
  <style>

  #title {
  color: #3D5CFF;
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
  
  .buy-button {
    background-color: #4caf50;
    color: #fff;
    padding: 8px;
    border: none;
    cursor: pointer;
  }
  
  .buy-button[disabled] {
    background-color: #a5d6a7;
    cursor: not-allowed;
  }
  </style>
  