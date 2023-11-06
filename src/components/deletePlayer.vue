<template>
    <div class="delete-user">
      <h2>Delete User</h2>
      <p>Are you sure you want to delete your account? This action is irreversible.</p>
      <button @click="confirmDelete">Delete User</button>
    </div>
  </template>
  
  <script>
export default {
  methods: {
    confirmDelete() {
      // llamar aquí a la API para borrar el usuario
    },
  },
};
</script>

  <style>
    .delete-user {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  
    h2 {
      font-size: 24px;
      margin: 0 0 15px;
    }
  
    p {
      font-size: 16px;
      color: #555;
      margin-bottom: 20px;
    }
  
    button {
      background-color: #f44336;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #d32f2f;
    }
  </style>
  