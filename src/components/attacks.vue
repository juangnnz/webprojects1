<template>
  <main class="attacks-management">
    <h2 class="title">Manage Equipped Attacks</h2>

    <section class="equipped-attacks">
      <h3>Equipped Attacks</h3>
      <ul>
        <li v-for="attack in equippedAttacks" :key="attack.id" class="equipped-attack">
          <h4>{{ attack.name }}</h4>
          <p class="attack-description">{{ attack.description }}</p>
          <button @click="unequipAttack(attack)">Unequip</button>
        </li>
      </ul>
    </section>

    <section class="available-attacks">
      <h3>Available Attacks</h3>
      <ul>
        <li v-for="attack in availableAttacks" :key="attack.id" class="available-attack">
          <h4>{{ attack.name }}</h4>
          <p class="attack-description">{{ attack.description }}</p>
          <button @click="equipAttack(attack)">Equip</button>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      equippedAttacks: [],
      availableAttacks: [],
    };
  },
  mounted() {
    // Fetch attacks when the component is mounted
    this.fetchAttacks();
  },
  methods: {
    async fetchAttacks() {
      try {
        const token = this.$route.query.token;
        const playerId = this.$route.query.player_ID;
        const response = await fetch(`https://your-api-url/players/${playerId}/attacks`);
        const data = await response.json();

        this.equippedAttacks = data.equippedAttacks;
        this.availableAttacks = data.availableAttacks;
      } catch (error) {
        console.error('Error fetching attacks:', error);
      }
    },
    async equipAttack(attack) {
      if (this.equippedAttacks.length < 3) {
        try {
          const response = await fetch(`https://your-api-url/players/attacks/${attack.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ equipped: true }),
          });

          // Assuming the API responds with the updated list of equipped and available attacks
          const data = await response.json();

          this.equippedAttacks = data.equippedAttacks;
          this.availableAttacks = data.availableAttacks;
        } catch (error) {
          console.error('Error equipping attack:', error);
        }
      }
    },
    async unequipAttack(attack) {
      try {
        const response = await fetch(`https://your-api-url/players/attacks/${attack.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ equipped: false }),
        });

        // Assuming the API responds with the updated list of equipped and available attacks
        const data = await response.json();

        this.equippedAttacks = data.equippedAttacks;
        this.availableAttacks = data.availableAttacks;
      } catch (error) {
        console.error('Error unequipping attack:', error);
      }
    },
  },
};
</script>