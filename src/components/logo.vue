<template>
    <div class="logo">
       <router-link to="/">
         <img src="./assets/logo.svg" alt="Logo">
       </router-link>
    </div>
   </template>
   
   <script>
   export default {
    name: 'Logo',
   };
   </script>
   
   <style scoped>
   .logo {
    width: 100px;
    height: 100px;
   }
   </style>