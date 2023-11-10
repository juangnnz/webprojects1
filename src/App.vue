<template>
  <div class="login-form">
     <h2>Log In</h2>
     <input type="text" v-model="userId" placeholder="Enter ID" />
     <input type="password" v-model="password" placeholder="Enter password" />
     <button @click="login">Login</button>
 
     <h2>Sign Up</h2>
     <button @click="signup">Sign Up</button>
  </div>
 </template>
 
 <script>
 export default {
  data() {
     return {
       userId: '',
       password: '',
     };
  },
  methods: {
     login() {
       // 
       //
     },
     signup() {
       // 
       // 
     },
  },
 };
 </script>
 
 <style scoped>
 .login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 </style>
