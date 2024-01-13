<template>
  <main class="attacks-management">
    <h2 class="title">Manage Equipped Attacks</h2>

    <section class="equipped-attacks" v-if="equippedAttacks.length > 0">
      <h3>Equipped Attacks</h3>
      <ul>
        <li v-for="attack in equippedAttacks" :key="attack.id" class="equipped-attack">
          <h4>{{ attack.attack_ID }}</h4>
          <p class="attack-description">{{ attack.power }}</p>
          <button @click="unequipAttack(attack)">Unequip</button>
        </li>
      </ul>
    </section>

    <section class="available-attacks" v-if="availableAttacks.length > 0">
      <h3>Available Attacks</h3>
      <ul>
        <li v-for="attack in availableAttacks" :key="attack.id" class="available-attack">
          <h4>{{ attack.attack_ID }}</h4>
          <p class="attack-description">{{ attack.power }}</p>
          <button @click="equipAttack(attack)">Equip</button>
        </li>
      </ul>
    </section>
    <div id="error-message"></div>
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
        const token = localStorage.getItem('token');

        // Fetch attacks information
        const attacksResponse = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${token}`,
          },
        });

        if (attacksResponse.ok) {
          const attacksData = await attacksResponse.json();
          console.log(attacksData);
          
          // Update attacks information
          this.availableAttacks = attacksData.filter(attack => !attack.equipped);;
          this.equippedAttacks = attacksData.filter(attack => attack.equipped);
          
        } else {
          const errorMessageDiv = document.getElementById('error-message');
          errorMessageDiv.textContent = 'Error fetching attacks';
          errorMessageDiv.style.color = 'red'; 
        }

      } catch (error) {
          const errorMessageDiv = document.getElementById('error-message');
          errorMessageDiv.textContent = 'Error with the server';
          errorMessageDiv.style.color = 'red'; 
      }
    },
    async equipAttack(attack) {
      
      try {
       
        const token = localStorage.getItem('token');
        const response = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks/${attack.attack_ID}`, {
          method: 'POST',
          headers: {
            'Bearer': `${token}`,
          },
        });
       
        if (response.ok){
          this.fetchAttacks();
        }
        else{
          const errorData = await response.json(); 
              
          if (errorData.error && errorData.error.message) {
            const errorMessage = errorData.error.message;
            const errorMessageDiv = document.getElementById('error-message');
            errorMessageDiv.textContent = errorMessage;
            errorMessageDiv.style.color = 'red'; 
          }  
        }
      } catch (error) {
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.textContent = 'Error with the server';
        errorMessageDiv.style.color = 'red'; 
      
      }
    },
    async unequipAttack(attack) {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks/${attack.attack_ID}`, {
          method: 'DELETE',
          headers: {
            'Bearer': `${token}`,
          },
        });

        if (response.ok){
          this.fetchAttacks();
        }
        else{
          const errorData = await response.json(); 
              
          if (errorData.error && errorData.error.message) {
            const errorMessage = errorData.error.message;
            const errorMessageDiv = document.getElementById('error-message');
            errorMessageDiv.textContent = errorMessage;
            errorMessageDiv.style.color = 'red'; 
          }  
        }
      } catch (error) {
        const errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.textContent = 'Error with the server';
        errorMessageDiv.style.color = 'red'; 
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

h4,
.attack-description,
button {
  color: #000000; /* Cambiado a negro */
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

  .available-attack h4,
  .available-attack .attack-description,
  .available-attack button {
    color: #000000; /* Cambiado a negro */
  }
}
</style>