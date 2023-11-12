<template>
  <!-- The main container for the login form -->
  <div class="login-form">
    <h2 id="logInTitle">Log In</h2>
    <!-- Form for user login -->
    <form @submit.prevent="submitForm">
      <!-- Input field for user ID -->
      <input type="text" id="id" v-model="userId" placeholder="Enter ID" class="input-field" required>
      <br>
      <!-- Input field for user password -->
      <input type="password" id="pwd" v-model="password" placeholder="Enter password" class="input-field" required>
      <br>
      <br>
      <!-- Submit button for the login form -->
      <button class="custom-button1">Enter</button>
    </form>

    <!-- Button to navigate to the signup page -->
    <button @click="signup" class="custom-button2">Sign Up</button>
  </div>
</template>

<script>
export default {
  data() {
    // Data properties for user ID, password, and mobile device detection
    return {
      userId: '',
      password: '',
      isMobile: window.innerWidth <= 768,
    };
  },
  mounted() {
    // Event listener for window resize to update isMobile property
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    // Method to handle form submission
    submitForm() {
      console.log('User Logged In');
      // Redirect to the player information page after successful login
      this.$router.push('/player-info');
    },
    // Method to handle navigation to the signup page
    signup() {
      console.log('User Signed Up');
      this.$router.push('/register');
    },
    // Method to handle window resize and update isMobile property
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
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
  padding: 20px; /* Extra padding for spacing between objects */
  background-color: #ffffff;
}

/* Styles for input fields */
.input-field {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 2px solid #3D5CFF; /* Border color */
  border-radius: 5px; /* Border radius */
  background-color: #ffffff; /* Background color */
  color: #000000; /* Text color */
  outline: none;
}

/* Styles for the password toggle button in WebKit browsers */
.input-field::-webkit-password-toggle-button {
  -webkit-filter: invert(100%); /* Invert the color of the eye icon */
  filter: invert(100%); /* Invert the color of the eye icon */
}

/* Styles for the login form submit button */
.custom-button1 {
  padding: 10px 15px;
  border: none;
  border-radius: 5px; /* Border radius */
  background-color: #3D5CFF; /* Button background color */
  color: #ffffff; /* Text color */
  cursor: pointer;
  outline: none; /* Remove default browser outline */
}

/* Styles for the signup button */
.custom-button2 {
  padding: 10px 15px;
  border: none;
  border-radius: 5px; /* Border radius */
  background-color: #ffffff; /* Button background color */
  color: #3D5CFF; /* Text color */
  cursor: pointer;
  outline: none; /* Remove default browser outline */
}

/* Styles for the login title */
#logInTitle {
  color: #3D5CFF; /* Title color */
}
</style>
