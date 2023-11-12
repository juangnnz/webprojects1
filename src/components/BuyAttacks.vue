<template>
  <div id="sale-attacks">
    <h2 id="title">Attacks on Sale</h2>

    <!-- List displaying attacks available for sale -->
    <ul class="attack-list">
      <!-- Loop through attacksForSale array and create a list item for each attack -->
      <li v-for="(attack, index) in attacksForSale" :key="index" class="attack-item">
        <!-- Display attack information and a button to buy the attack -->
        <span class="attack-info">
          {{ attack.name }} (position: {{ attack.position }})
        </span>
        <button @click="buyAttack(index)" class="buy-button">
          Buy for {{ attack.askingPrice }} $
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    // Data properties for attacks available for sale and user's coins
    return {
      attacksForSale: [
        { name: 'Bola de fuego', position: 'Long Range', askingPrice: 30 },
        { name: 'Thunder ', position: 'Melee', askingPrice: 25 },
        { name: 'Tornadooo', position: 'Short Range', askingPrice: 40 },
      ],
      userCoins: 100, // Initial user coins
    };
  },
  methods: {
    // Method to handle buying an attack
    buyAttack(index) {
      const attack = this.attacksForSale[index];

      // Check if the user has enough coins to buy the attack
      if (this.userCoins >= attack.askingPrice) {
        // Deduct the asking price from the user's coins
        this.userCoins -= attack.askingPrice;
        // Perform API call to manage the purchase and update the user
        alert(`You have successfully purchased ${attack.name} for ${attack.askingPrice} coins.`);
      } else {
        // Alert the user if they have insufficient coins
        alert('Insufficient coins to buy this attack. You need more coins.');
      }
    },
  },
};
</script>

<style>
/* Styles for the Attacks on Sale component */
#title {
  color: #3D5CFF;
}

#sale-attacks{

  display:flex;
  flex-direction: column;
  align-items: center;
}
.attack-list {
  list-style: none;
  padding: 0;
}

/* Styles for each attack item in the list */
.attack-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
}

/* Styles for the buy button */
.buy-button {
  background-color: #3D5CFF; /*Button background color*/
  color: #ffffff; /* Button text color*/
  padding: 8px;
  border: none;
  cursor: pointer;
}

/* Styles for the buy button on hover */
.buy-button:hover {
  background-color: #3D5CFF; /
}

/* Styles for the disabled buy button */
.buy-button[disabled] {
  background-color: #a5d6a7; /*Disabled button background color*/
  cursor: not-allowed; /*Disabled cursor style*/
}
</style>
