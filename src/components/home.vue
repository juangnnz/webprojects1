<template>
  <section class="login-form">
    <header>
      <h2 id="logInTitle">Log In</h2>
    </header>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="userId" placeholder="Enter ID" class="input-field" required>
      <br>
      <input type="password" v-model="password" placeholder="Enter password" class="input-field" required>
      <br>
      <br>
      <button class="custom-button1">Enter</button>
    </form>
    <footer>
      <div id="error-message"></div>
      <button @click="signup" class="custom-button2">Sign Up</button>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      password: '',
      isMobile: window.innerWidth <= 768,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://balandrau.salle.url.edu/i3/players/join', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            player_ID: this.userId,
            password: this.password,
          }),
        });

        if (response.ok) {
          const responseData = await response.json();
          //responseData is the token
          const token = responseData.token;
          localStorage.setItem('token', token);
          localStorage.setItem('playerID', this.userId);
          console.log(token);

          // Assuming the response contains some user information, you can redirect to the player information page
          this.$router.push({
            path: '/player-info',
          });
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
    },
    signup() {
      this.$router.push('/register');
    },
  },
};
</script>


<style scoped>

/* Scoped styles for the login form */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; 
  background-color: #ffffff;
  max-width: 400px;
  margin: auto;
}

/* Specific styles for the header */
.login-form header {
  width: 100%;
  background-color: #ffffff; 
  padding: 10px 0;
  text-align: center;
}

/* Media query for mobile devices */
@media screen and (max-width: 768px) {
  .login-form {
    width: 95%;
    max-width: none;
  }

  .input-field {
    width: calc(100% - 20px); 
  }
}

/* Styles for input fields */
.input-field {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 2px solid #3D5CFF; 
  border-radius: 5px; 
  background-color: #ffffff; 
  color: #000000; 
  outline: none;
}

/* Styles for the password toggle button in WebKit browsers */
.input-field::-webkit-password-toggle-button {
  -webkit-filter: invert(100%); 
  filter: invert(100%); 
}

/* Styles for the login form submit button */
.custom-button1 {
  padding: 10px 15px;
  border: none;
  border-radius: 5px; 
  background-color: #3D5CFF; 
  color: #ffffff;
  cursor: pointer;
  outline: none; 
}

/* Styles for the signup button */
.custom-button2 {
  padding: 10px 15px;
  border: none;
  border-radius: 5px; 
  background-color: #ffffff; 
  color: #3D5CFF;
  cursor: pointer;
  outline: none; 
}

/* Styles for the login title */
#logInTitle {
  color: #3D5CFF; 
}

</style>
