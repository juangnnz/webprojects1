<template>
  <div id="sale-attacks">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      attacksForSale: [],
      userCoins: null,
      authToken: null,
    };
  },
  mounted() {
    this.authToken = this.$route.query.token;
    this.fetchAttacksAndCoins();
  },
  methods: {
    async fetchAttacksAndCoins() {
      try {
        const response = await fetch('https://balandrau.salle.url.edu/i3/players/shop/attacks', {
          headers: {
            Authorization: `Bearer ${this.authToken}`,
          },
        });
        const data = await response.json();

        this.attacksForSale = data.attacksForSale;
        this.userCoins = data.userCoins;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async buyAttack(attack) {
      try {
        // Check if the user has enough coins
        if (this.userCoins >= attack.askingPrice) {
          // este link esta mal supongo, como no funciona la vpn no puedo comprobarlo
          const response = await fetch('https://balandrau.salle.url.edu/i3/players/shop/buy-attack', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.authToken}`,
            },
            body: JSON.stringify({ attackId: attack.id }),
          });
          const data = await response.json();

          this.userCoins = data.userCoins;

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