<template>

  <div class="login-form">
    <h2 id="logInTitle">Log In</h2>
    <form @submit.prevent="submitForm">
       <input type="text" id="id" v-model="id" placeholder="Enter ID" class="input-field" required>
       <br>
       <input type="password" id="pwd" v-model="password" placeholder="Enter password" class="input-field" required>
       <br>
       <br>
       <button class="custom-button1">Enter</button>
     </form>
    
    <button @click="signup" class="custom-button2">Sign Up</button>
  </div>
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
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    submitForm() {
      console.log('User Logged In');
      this.$router.push('/player-info');
    },
    signup() {
      console.log('User Signed Up');
      this.$router.push('/register');
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
};
</script>


<style scoped>
.login-form {
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

.input-field::-webkit-password-toggle-button {
  -webkit-filter: invert(100%); /* Invertir el color del icono del ojo */
  filter: invert(100%); /* Invertir el color del icono del ojo */
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

#logInTitle {
  color: #3D5CFF;
}
</style>
