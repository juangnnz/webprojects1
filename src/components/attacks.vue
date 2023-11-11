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
      equippedAttacks: [
        { id: 1, name: "Attack 1" },
        { id: 2, name: "Attack 2" },
        { id: 3, name: "Attack 3" },
      ],
      availableAttacks: [
        { id: 4, name: "New Attack 1" },
        { id: 5, name: "New Attack 2" },
        { id: 6, name: "New Attack 3" },
      ],
    };
  },
  methods: {
    equipAttack(attack) {
      if (this.equippedAttacks.length < 3) {
        this.equippedAttacks.push(attack);
        this.availableAttacks = this.availableAttacks.filter((a) => a.id !== attack.id);
      }
    },
    unequipAttack(attack) {
      this.availableAttacks.push(attack);
      this.equippedAttacks = this.equippedAttacks.filter((a) => a.id !== attack.id);
    },
  },
};
</script>

<style scoped>
.attacks-management {
  text-align: center;
  padding: 20px;
}

.equipped-attacks {
  margin-top: 20px;
}

.equipped-attack {
  background-color: #DEEBFF;
  border: none;
  border-radius: 5px; 
  margin: 10px;
  padding: 10px;
  display: inline-block;
}

.available-attacks {
  margin-top: 20px;
}

.available-attack {
  background-color: #DEEBFF;
  border: none;
  border-radius: 5px; 
  margin: 10px;
  padding: 10px;
  display: inline-block;
}

button {
  background-color: #3D5CFF;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

.title {
  color: #3D5CFF;
}

h3{
  color: black;
}

h4{
  color: black;
}
</style>