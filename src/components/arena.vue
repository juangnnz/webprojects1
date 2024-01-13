<template>
  <section id="block2">
    <article class="block1">
      <h2>{{gameId}}</h2>
      <table id="gameTable">
        <tr v-for="row in rows" :key="row">
          <td
            v-for="col in rows"
            :key="col"
            :class="{
              'cell': true,
              'cursor-cell': player.currentRow === currentRow && player.currentColumn === currentColumn,
              'player1-cell': player.id === 1,
              'player2-cell': player.id === 2
            }"
            :style="{ backgroundColor: player.color }"
          ></td>
        </tr>
      </table>
      <footer class="block4">
        <button @click="leaveGame" class="leave-game-btn">Leave Game</button>
      </footer>
    </article>

    <aside class="block3">
      <h3>Attack with:</h3>
      <button @click="attack1">Attack 1</button>
      <button @click="attack2">Attack 2</button>
      <button @click="attack3">Attack 3</button>
    </aside>

    <nav class="block5">
      <img src="../assets/arrow.png" alt="arrow" class="arrow" @click="up()"/>
      <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(180deg);" @click="down()"/>
      <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(90deg);" @click="right()"/>
      <img src="../assets/arrow.png" alt="arrow" class="arrow" style="transform: rotate(-90deg);" @click="left()"/>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gameId: '',
      rows: 0,
      hp: 0,
      players: [
        { id: 1, color: '#6495ED', currentRow: 1, currentColumn: 1 },
        { id: 2, color: '#FF6347', currentRow: 1, currentColumn: 1 }
      ],
      activePlayerIndex: 0,
    };
  },
  methods: {
    up() {
      this.players[this.activePlayerIndex].currentRow--;
      this.switchPlayer();
    },
    down() {
      this.players[this.activePlayerIndex].currentRow++;
      this.switchPlayer();
    },
    right() {
      this.players[this.activePlayerIndex].currentColumn++;
      this.switchPlayer();
    },
    left() {
      this.players[this.activePlayerIndex].currentColumn--;
      this.switchPlayer();
    },
    leaveGame() {
      this.$router.push('/available-games');
    },
    attack1() {
      // Implement attack logic for player 1
    },
    attack2() {
      // Implement attack logic for player 1
    },
    attack3() {
      // Implement attack logic for player 1
    },
    switchPlayer() {
      this.activePlayerIndex = 1 - this.activePlayerIndex;
    },
  },
  mounted() {
    this.gameId = this.$route.params.gameId;
    this.rows = parseInt(this.$route.params.rows);
    this.hp = this.$route.params.hp;
    // Set initial active player based on currentPlayer parameter
    this.activePlayerIndex = this.$route.params.currentPlayer === 1 ? 0 : 1;
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

#block2 {
  display: flex;
  flex-direction: row;
  max-width: 900px;
}

.block1, .block3, .block5 {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  margin-left: 20px;
}

.block4 {
  margin-top: 20px;
}

#gameTable {
  border-collapse: collapse;
  width: 100%;
  height: 300px;
}

#gameTable td {
  border: 1px solid black;
  width: 30px;
  height: 30px;
}

.cell {
  background-color: white;
}

#gameTable .cursor-cell {
  background-color: #e5e5ff;
  border: 2px solid #3d5cff;
}

#gameTable .player1-cell {
  background-color: #6495ED; /* Light Blue */
}

#gameTable .player2-cell {
  background-color: #FF6347; /* Tomato Red */
}

.arrow {
  width: 60px;
  height: 90px;
}

button {
  margin: 10px;
  padding: 8px;
  background-color: #3d5cff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.leave-game-btn {
  width: 100px;
  height: 35px;
  border: 2px solid #3D5CFF;
  border-radius: 4px;
  background-color: white;
  color: black;
}

@media only screen and (max-width: 600px) {
  #block2 {
    flex-direction: column;
    align-items: center;
  }

  .block1, .block3, .block5 {
    width: 90%;
    margin-left: 0;
    margin-bottom: 20px;
  }

  #gameTable {
    width: 90%;
    height: auto;
  }

  #gameTable td {
    width: auto;
    height: auto;
  }

  .arrow {
    width: 40px;
    height: 60px;
  }
}
</style>
