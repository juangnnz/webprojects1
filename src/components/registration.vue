<template>
  <div>
     <h1>Sign Up</h1>
     <form @submit.prevent="submitForm">
       <label for="url">Profile Picture URL:</label>
       <input type="url" id="url" v-model="url" required>
       <br>
       <label for="id">ID:</label>
       <input type="text" id="id" v-model="id" required>
       <br>
       <label for="pwd">Password:</label>
       <input type="password" id="pwd" v-model="password" required>
       <br>
       <label for="confirmpwd">Confirm Password:</label>
       <input type="password" id="confirmpwd" v-model="confirmPassword" required>
       <br>
       <button type="Sign Up">Submit</button>
     </form>
     <button @click="login">Log In</button>
  </div>
 </template>
 
 <script>
 export default {
  data() {
     return {
       url: '',
       id: '',
       password: '',
       confirmPassword: ''
     }
  },
  methods: {
     submitForm() {
       if (this.password === this.confirmPassword) {
         console.log('User Signed Up');
         this.$router.push('/player-info');
       } else {
         console.log('Passwords do not match');
       }
     },
     login() {
      //
     }
  }
 }
 </script>