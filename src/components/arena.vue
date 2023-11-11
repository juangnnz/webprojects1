<template>
  <div>
    <h2>{{gameId}}</h2>
    <table id="gameTable">
      <tr v-for="row in rows" :key="row">
        <!-- Crear celdas en cada fila según la longitud de la tabla -->
        <td v-for="col in rows" :key="col" :class="{ 'cell': true, 'cursor-cell': row === currentRow && col === currentColumn }"></td>
      </tr>
    </table>

    <img src="../assets/arrow.png" alt="arrow" class="arrow" @click="up()"/>
    <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(90deg);" @click="right()"/>
    <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(180deg);" @click="down()"/>
    <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(-90deg);" @click="left()"/>

  </div>
</template>

<script>
export default {
   data() {
    return {
      gameId: '',
      rows: 0,
      hp: 0,
      currentPlayer: '',
      currentRow: 1,
      currentColumn: 1
    };
  },
  methods: {
    up() {
      this.currentRow--;
    },
    down() {
      this.currentRow++;
    },
    right() {
      this.currentColumn++;
    },
    left() {
      this.currentColumn--;
    },
  },
  mounted() {
    this.gameId = this.$route.params.gameId;
    this.rows = parseInt(this.$route.params.rows);
    console.log("this ", this.rows);
    this.hp = this.$route.params.hp;
    this.currentPlayer = this.$route.params.currentPlayer;
    
  },
};

</script>

<style>

#title{
    color: black;
}

h2{
    color: #3D5CFF;
}

#gameTable {
  border-collapse: collapse;
  width: 100%;
}

#gameTable td {
  border: 1px solid black;
 
}

.cell {
  width: 30px; /* Ajusta el ancho según tus necesidades */
  height: 30px; /* Ajusta la altura según tus necesidades */
  background-color: white;
}

#gameTable .cursor-cell {
    width: 30px; /* Ajusta el ancho según tus necesidades */
  height: 30px; 
  background-color: #E5E5FF; /* Cambiar el fondo a negro para la celda del cursor */
  border: 2px solid #3D5CFF;
}

.arrow{
    width: 60px;
    height: 90px;
}

</style>