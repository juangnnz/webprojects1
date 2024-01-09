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
    this.fetchAttacks();
  },
  methods: {
    async fetchAttacks() {
      try {
        const token = this.$route.query.token;
        const response = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks?token=${token}`);
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
          await this.performEquipAttack(attack.attack_ID);
        } catch (error) {
          console.error('Error equipping attack:', error);
        }
      }
    },
    async unequipAttack(attack) {
      try {
        await this.performUnequipAttack(attack.attack_ID);
      } catch (error) {
        console.error('Error unequipping attack:', error);
      }
    },
    async performEquipAttack(attackId) {
      try {
        const response = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks/equip/${attackId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            equipped: true, // Set to true for equip
          }),
        });

        const data = await response.json();

        this.equippedAttacks = data.equippedAttacks;
        this.availableAttacks = data.availableAttacks;
      } catch (error) {
        console.error('Error performing equip attack:', error);
      }
    },
    async performUnequipAttack(attackId) {
      try {
        const response = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks/unequip/${attackId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            equipped: false, // Set to false for unequip
          }),
        });

        const data = await response.json();

        this.equippedAttacks = data.equippedAttacks;
        this.availableAttacks = data.availableAttacks;
      } catch (error) {
        console.error('Error performing unequip attack:', error);
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
  background-color: #3D5CFF; /*Button background color*/
}

/* Styles for the disabled buy button */
.buy-button[disabled] {
  background-color: #a5d6a7; /*Disabled button background color*/
  cursor: not-allowed; /*Disabled cursor style*/
}

.attacks-management {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.equipped-attacks, .available-attacks {
  width: 100%; 
}

.equipped-attack, .available-attack {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
}

/* Responsive Styles for Mobile */
@media only screen and (max-width: 600px) {
  .attacks-management {
    flex-direction: column;
  }

  .equipped-attacks, .available-attacks {
    width: 90%; 
  }

  .equipped-attack, .available-attack {
    flex-direction: column; 
    align-items: flex-start;
  }

  button {
    width: 100%; 
    margin-top: 10px; 
  }
}
</style>