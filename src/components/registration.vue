<template>
    <div>
      <form @submit="submitForm">
        <h2>User Registration</h2>
        <label for="username">Username:</label>
        <input type="text" v-model="formData.username" required>
        <label for="password">Password:</label>
        <input type="password" v-model="formData.password" required>
        <label for="profile_picture">Profile Picture (URL):</label>
        <input type="url" v-model="formData.profile_picture" required>
        <input type="submit" value="Register">
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          username: "",
          password: "",
          profile_picture: "",
        },
      };
    },
  };
  </script>
  