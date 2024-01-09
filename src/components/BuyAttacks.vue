<template>
  <main id="sale-attacks">
    <h2 id="title">Attacks on Sale</h2>

    <ul class="attack-list">
      <li v-for="(attack, index) in attacksForSale" :key="index" class="attack-item">
        <span class="attack-info">
          {{ attack.name }} (position: {{ attack.position }})
        </span>
        <button @click="buyAttack(attack)" class="buy-button">
          Buy for {{ attack.askingPrice }} $
        </button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: ['token', 'playerId', 'userCoins'],
  data() {
    return {
      attacksForSale: [],
    };
  },
  mounted() {
    this.fetchAttacksAndCoins();
  },
  methods: {
    async fetchAttacksAndCoins() {
      try {
        const response = await fetch('https://balandrau.salle.url.edu/i3/shop/attacks', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        const data = await response.json();
        this.attacksForSale = data;
      } catch (error) {
        console.error('Error fetching attacks:', error);
      }
    },
    async buyAttack(attack) {
      try {
        // Check if the user has enough coins
        if (this.userCoins >= attack.askingPrice) {
          const response = await fetch('https://balandrau.salle.url.edu/i3/shop/attacks/${attack.id}/buy', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify({ attackId: attack.id }),
          });
          const data = await response.json();

          // Update userCoins in the component
          this.userCoins -= attack.askingPrice;

          alert(`You have successfully purchased ${attack.name} for ${attack.askingPrice} coins.`);
        } else {
          // Alert the user if they have insufficient coins
          alert('Insufficient coins to buy this attack. You need more coins.');
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
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
  width: 100%;
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
  background-color: #3D5CFF; /*Button background color*/
}

/* Styles for the disabled buy button */
.buy-button[disabled] {
  background-color: #a5d6a7; /*Disabled button background color*/
  cursor: not-allowed; /*Disabled cursor style*/
}

/* Responsive Styles for Mobile */
@media only screen and (max-width: 600px) {
  .attack-item {
    flex-direction: column; /* Stack elements vertically */
    align-items: flex-start;
  }

  .buy-button {
    width: 100%; /* Full width button for easier interaction */
    margin-top: 10px; /* Extra margin for stacked layout */
  }
}

</style>