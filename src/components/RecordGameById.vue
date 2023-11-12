<template>
    <div class="block2">
      <div class="block1">
        <h2>{{ gameId }}</h2>
        <p class="record-text">Record game ID</p>
        <table id="gameTable">
          <tr v-for="row in rows" :key="row">
            <td
              v-for="col in rows"
              :key="col"
              :class="{
                'cell': true,
                'cursor-cell': row === currentRow && col === currentColumn,
              }"
            ></td>
          </tr>
        </table>
      </div>
  
      <!-- Attack and Movement History -->
      <div class="block3">
        <h3>Attack History:</h3>
        <p>Example 1: Attack 1 used</p>
        <p>Example 2: Attack 2 used</p>
        <p>Example 3: Attack 3 used</p>
  
        <h3>Movement History:</h3>
        <p>Example 1: Moved up</p>
        <p>Example 2: Moved down</p>
        <p>Example 3: Moved right</p>
        <p>Example 4: Moved left</p>
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
        currentColumn: 1,
      };
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
  
  h3 {
    color: black;
  }
  
  .block1 {
    margin-left: 90px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
  }
  
  .record-text {
    color: #3D5CFF;
  }
  
  .block2 {
    display: flex;
    flex-direction: row;
  }
  
  .block3 {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    margin-left: 50px;
    width: 300px;
    height: 400px;
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
  
  </style>
  