<template>
  <div class="login-form">
    <h2>Log In</h2>
    <logo></logo> 
    <input type="text" v-model="userId" placeholder="Enter ID" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button @click="login">Login</button>

    <h2>Sign Up</h2>
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>

import Logo from '@/components/logo.vue'; // Import the Logo component

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
      // Your login logic here
    },
    signup() {
      // Your signup logic here
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
