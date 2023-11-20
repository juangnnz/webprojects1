<template>
  
  <div id="block2">
    <div class="block1">
        <h2>{{gameId}}</h2>
        <table id="gameTable">
            <tr v-for="row in rows" :key="row">
                <!-- Crear celdas en cada fila según la longitud de la tabla -->
                <td v-for="col in rows" :key="col" :class="{ 'cell': true, 'cursor-cell': row === currentRow && col === currentColumn }"></td>
            </tr>
        </table>
        <!-- Leave Game Button -->
        <div class="block4">
            <button @click="leaveGame" class="leave-game-btn">Leave Game</button>
        </div>
    </div>

    <!-- Attack Options -->
    <div class="block3">
      <h3>Attack with:</h3>
      <button @click="attack1">Attack 1</button>
      <button @click="attack2">Attack 2</button>
      <button @click="attack3">Attack 3</button>
    </div>
    <div class="block5">  
        <img src="../assets/arrow.png" alt="arrow" class="arrow" @click="up()"/>
        <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(180deg);" @click="down()"/>
        <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(90deg);" @click="right()"/>
        <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(-90deg);" @click="left()"/>
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
      this.$router.push('/available-games');
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

h3{
    color: black;
}

#block2{
    display: flex;
    flex-direction: row;
    max-width: 9000px;
}

.block1{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    margin-left: 80px;

}

.block3{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    margin-left: 100px;
}

.block4{
    margin-top: 20px;
}

.block5{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    margin-left: 120px;
}

#gameTable {
  border-collapse: collapse;
  width: 300px;
  height: 300px;
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

/* Added styles for the Attack buttons */
button {
  margin: 10px;
  padding: 8px;
  background-color: #3d5cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.leave-game-btn{
    width: 200px;
    height: 35px;
    border: 2px solid #3D5CFF; 
    border-radius: 4px;
    background-color: white;
    color: black;
}


</style>
