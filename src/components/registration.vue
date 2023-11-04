<template>
    <div class="registration-form">
      <form @submit="submitForm" class="form-container">
        <h2>User Registration</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="formData.username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required>
        </div>
        <div class="form-group">
          <label for="profile_picture">Profile Picture (URL):</label>
          <input type="url" id="profile_picture" v-model="formData.profile_picture" required>
        </div>
        <div class="form-group">
          <input type="submit" value="Register">
        </div>
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
  
  <style scoped>
  .registration-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-container {
    background-color: #f7f7f7;
    border: 1px solid #e1e1e1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
    width: 300px;
  }
  
  .form-container h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"],
  input[type="url"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  input[type="submit"] {
    background-color: #354a5e;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #293d50;
  }
  </style>
  
  