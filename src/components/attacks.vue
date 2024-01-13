<template>
  <main class="attacks-management">
    <h2 class="title">Manage Equipped Attacks</h2>

    <section class="equipped-attacks" v-if="equippedAttacks.length > 0">
      <h3>Equipped Attacks</h3>
      <div class="packs">
            <div v-for="attack in equippedAttacks" :key="attack.id" class="equipped-attack2">
              <h4>{{ attack.attack_ID }}</h4>
              <p class="attack-description">{{ attack.power }}</p>
              <button @click="unequipAttack(attack)">Unequip</button>
            </div>
      </div>
    </section>

    <section class="available-attacks" v-if="availableAttacks.length > 0">
      <h3>Available Attacks</h3>
      <div class="packs">
            <div v-for="attack in availableAttacks" :key="attack.id" class="available-attack2">
              <h4>{{ attack.attack_ID }}</h4>
              <p class="attack-description">{{ attack.power }}</p>
              <button @click="equipAttack(attack)">Equip</button>
            </div>
          </div>
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
.attacks-management {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
}

.title {
  color: #3D5CFF;
  margin-bottom: 40px;
}

.packs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  gap: 10px; 
}

.pack {
  display: flex;
  flex-direction: column; 
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  width: 150px; 
  margin-bottom: 10px;
  background-color: #eceff1; 
}

button {
  background-color: #3D5CFF; 
  color: #ffffff; 
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  outline: none; 
  width: 90px; 
}

button:hover {
  background-color: #1E88E5; 
}

button:disabled {
  background-color: #a5d6a7; 
  cursor: not-allowed; 
}

h4, .attack-description {
  color: #000000; 
  margin: 5px 0; 
}

.equipped-attack2, .available-attack2 {
  background-color: #b6d8f6;
  width:150px;
  border-radius: 10px;
  margin-bottom: 40px;
  margin-top: 10px;
}

/* Responsive Styles for Mobile */
@media only screen and (max-width: 600px) {
  .packs {
    justify-content: center;
  }

  .pack {
    width: calc(50% - 20px); 

  .equipped-attacks, .available-attacks {
    width: 100%; 
  }
}

}
</style>