<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // aqui hay que hacer una llamada a la API para hacer login
        // si el login es correcto, se guarda el token en el local storage
        // y se redirige a la pagina de inicio
        // si el login es incorrecto, se muestra un mensaje de error
      },
    },
    };
  </script>
  
  <style scoped>
 
  </style>
  