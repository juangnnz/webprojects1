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

    <!-- Leave Game Button -->
    <button @click="leaveGame">Leave Game</button>

    <!-- Attack Options -->
    <div>
      <h3>Choose Attack:</h3>
      <button @click="attack1">Attack 1</button>
      <button @click="attack2">Attack 2</button>
      <button @click="attack3">Attack 3</button>
    </div>

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
    leaveGame() {
      this.$router.push('/main-menu');
    },
    attack1() {
    
      
    },
    attack2() {
    
    },
    attack3() {
      
    },
  },
  mounted() {
    this.gameId = this.$route.params.gameId;
    this.rows = parseInt(this.$route.params.rows);
    this.hp = this.$route.params.hp;
    this.currentPlayer = this.$route.params.currentPlayer;
  },
};
</script>


<style>
#title {
  color: black;
}

h2 {
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
  width: 30px;
  height: 30px;
  background-color: white;
}

#gameTable .cursor-cell {
  width: 30px;
  height: 30px;
  background-color: #e5e5ff;
  border: 2px solid #3d5cff;
}

.arrow {
  width: 60px;
  height: 90px;
}

/* Added styles for the Leave Game button and Attack buttons */
button {
  margin: 10px;
  padding: 8px;
  background-color: #3d5cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #1c2d5a;
}

</style>
