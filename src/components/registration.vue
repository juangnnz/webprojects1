<template>
  <div class="registration">
   
    <h1 id="signUpTitle">Sign Up</h1>

    <!-- Form for user registration -->
    <form @submit.prevent="submitForm">
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
    </form>

    <!-- Button to navigate to the login page -->
    <button @clic.prevent="login" class="custom-button2">Log In</button>
  </div>
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
        console.log('User Signed Up');
        // Redirect to the player-info page if passwords match

        try {
            const dataToSend = {
              player_ID: this.id,
              password: this.password,
              img: this.url || 'string' // Si no se proporciona una imagen, se enviará 'string'
            };

            console.log('Data to send:', JSON.stringify(dataToSend));

            let response = await fetch('https://balandrau.salle.url.edu/i3/players', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
              console.log('Response:', response.ok);
              //let responseData = await response.json();
              // Guardar la respuesta del servidor
              //this.responseData = responseData;
              this.$router.push('/player-info');
            } else {
              throw new Error('Error en la solicitud');
            }
        } catch (error) {
            console.error('Ha ocurrido un error al enviar los datos:', error);
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
  
  .custom-button1 {
    padding: 10px 15px;
    border: none;
    border-radius: 5px; /* Bordes redondos */
    background-color: #3D5CFF; /* Fondo del color especificado */
    color: #ffffff; /* Texto blanco */
    cursor: pointer;
    outline: none; /* Elimina el contorno predeterminado del navegador */
  }
  
  .custom-button2 {
    padding: 10px 15px;
    border: none;
    border-radius: 5px; /* Bordes redondos */
    background-color: #ffffff; /* Fondo del color especificado */
    color: #3D5CFF; /* Texto blanco */
    cursor: pointer;
    outline: none; /* Elimina el contorno predeterminado del navegador */
  }
  
   #signUpTitle {
    color: #3D5CFF;
  }
  </style>