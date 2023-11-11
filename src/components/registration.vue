<template>
  <div class="registration">
     <h1 id="signUpTitle">Sign Up</h1>
     <form @submit.prevent="submitForm">
       <input type="url" id="url" v-model="url" placeholder="Enter URL profile pic" class="input-field" required>
       <br>
       <input type="text" id="id" v-model="id" placeholder="Enter ID" class="input-field" required>
       <br>
       <input type="password" id="pwd" v-model="password" placeholder="Enter password" class="input-field" required>
       <br>
       <input type="password" id="confirmpwd" v-model="confirmPassword"  placeholder="Confirm password" class="input-field" required>
       <br>
       <button class="custom-button1">Sign Up</button>
     </form>
     <button @click="login" class="custom-button2" >Log In</button>
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