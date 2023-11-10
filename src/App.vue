<template>
  <logo>
    <img src="./assets/logo.svg" alt="Logo" />
  </logo> 
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

import Logo from './components/logo.vue'; 
export default {
  components: {
    Logo, // Register the Logo component
  },
  data() {
    return {
      userId: '',
      password: '',
    };
  },
  methods: {
    login() {
     this.$router.push('/player-info');
    },
    signup() {
      this.$router.push('/register');
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
