<template>

  <div id="app">
    <header>
       <img src="src/assets/logo.png" alt="logo" />
    </header>

    <router-view></router-view>

     <footer>
      <!-- Pie de página común -->
    </footer>
  </div>
</template>

<script>
export default {
  // Otras configuraciones del componente, si es necesario
};
</script>

<style>
body, #app {
  margin: 0;
  padding: 0;
  height: 100vh;
  weight: 100vh;
}

header {
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: flex-start !important; /* Alinea a la izquierda */
  background-color: #ffffff !important; /* Fondo blanco */
  padding: 10px;

}

#logo {
  margin-right: auto; /* Mueve el logo hacia la izquierda lo máximo posible */
  width: 100px; /* Ajusta el tamaño según sea necesario */
}
</style>
