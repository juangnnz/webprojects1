<template>
  <section class="registration">
   
    <h1 id="signUpTitle">Sign Up</h1>

    <!-- Form for user registration -->
    <form @submit.prevent="submitForm">
      <fieldset>
        <!-- Input field for URL profile picture -->
        <input type="url" id="url" v-model="url" placeholder="Enter URL profile pic" class="input-field" required>
        <br>

        <!-- Input field for user ID -->
        <input type="text" id="id" v-model="id" placeholder="Enter ID" class="input-field" required>
        <br>

        <!-- Input field for user password -->
        <input type="password" id="pwd" v-model="password" placeholder="Enter password" class="input-field" required>
        <br>

        <!-- Input field to confirm user password -->
        <input type="password" id="confirmpwd" v-model="confirmPassword" placeholder="Confirm password" class="input-field" required>
        <br>

        <!-- Button to submit the form -->
        <button class="custom-button1">Sign Up</button>
      </fieldset>
    </form>
    <div id="error-message"></div>
    <!-- Button to navigate to the login page -->
    <button @click.prevent="login" class="custom-button2">Log In</button>
  </section>
</template>

<script>
export default {
  data() {
    // Data properties for form input binding
    return {
      url: '',
      id: '',
      password: '',
      confirmPassword: '',
      responseData: null
    };
  },
  methods: {
    // Method to handle form submission
    async submitForm() {
      // Check if the entered passwords match
      if (this.password === this.confirmPassword) {
        // Check if the password length is between 1 and 20 characters
        if (this.password.length >= 1 && this.password.length <= 20) {
          
          // Redirect to the player-info page if passwords match
          try {
            const dataToSend = {
              player_ID: this.id,
              password: this.password,
              img: this.url || 'string'
            };

            let response = await fetch('https://balandrau.salle.url.edu/i3/players', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
              
              const errorMessageDiv = document.getElementById('error-message');
              errorMessageDiv.textContent = 'Registered';
              errorMessageDiv.style.color = 'black'; 
              setTimeout(() => {
                this.$router.push({
                  path: '/home',
                });
              }, 500);
              
              
            } else {
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
        } else {
          console.log('Password must be between 1 and 20 characters');
        }
      } else {
        console.log('Passwords do not match');
      }
    },

    // Method to handle navigation to the login page
    login() {
      // when login button is clicked, navigate to the login page
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>

  .registration {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px; /* extra padding para dar espacio entre objetos */
    background-color: #ffffff;
    max-width: 500px; /* Set a max-width for large screens */
    margin: auto; /* Center the form */
  }
  
   .input-field {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 2px solid #3D5CFF; /* Cambia el color del borde según tus preferencias */
    border-radius: 5px; /* Ajusta el radio según tus preferencias */
    background-color: #ffffff; /* Fondo blanco */
    color: #000000; /* Texto negro */
    outline: none;
  }
  
  .custom-button1, .custom-button2 {
    padding: 10px 15px;
    border: none;
    border-radius: 5px; /* Bordes redondos */
    cursor: pointer;
    outline: none; /* Elimina el contorno predeterminado del navegador */
  }

  .custom-button1 {
    margin-top: 30px;
    background-color: #3D5CFF;
    color: #ffffff;
  }

  .custom-button2 {
    background-color: #ffffff;
    color: #3D5CFF;
  }

   #signUpTitle {
    color: #3D5CFF;
  }

  fieldset {
    border: none; /* Remove the default border */
    padding: 10px; /* Add some padding inside the fieldset if needed */
    margin: 0; /* Adjust margin as needed */
  }


/* Responsive adjustments */
@media (max-width: 768px) {
  .registration {
    width: 95%; /* Use more of the screen on smaller devices */
  }

  .input-field, .custom-button1, .custom-button2 {
    padding: 8px; /* Slightly smaller padding on smaller screens */
  }

}

</style>