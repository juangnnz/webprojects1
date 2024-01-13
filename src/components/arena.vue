<template>
  
  <section id="block2">
    <article class="block1">
        <h2>{{gameId}}</h2>
        <table id="gameTable">
            <tr v-for="row in rows" :key="row">
                <!-- Crear celdas en cada fila según la longitud de la tabla -->
                <td v-for="col in rows" :key="col" :class="{ 'cell': true, 'cursor-cell': row === currentRow && col === currentColumn }"></td>
            </tr>
        </table>
        <!-- Leave Game Button -->
        <footer class="block4">
            <button @click="leaveGame" class="leave-game-btn">Leave Game</button>
        </footer>
    </article>

    <!-- Attack Options -->
    <aside class="block3">
      <h3>Attack with:</h3>
      <button v-for="button in attackButtons" :key="button.text" @click="attack(button.text)">
        {{ button.text }}
      </button>
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
      currentPlayer: '',
      currentRow: 1,
      currentColumn: 1,
      attackButtons: [],
    };
  },
  methods: {
    up() {
      //this.currentRow--;
      this.rotateCursor('cursor-rotate-up');
      this.paintCellsRedUpDown();
      this.fetchDirection('up');
    },
    down() {
      //this.currentRow++;
      this.rotateCursor('cursor-rotate-down');
      this.paintCellsRedUpDown();
      this.fetchDirection('down');
    },
    right() {
      //this.currentColumn++;
      this.rotateCursor('cursor-rotate-right');
      this.paintCellsRedLeftRight();
      this.fetchDirection('right');
    },
    left() {
      //this.currentColumn--;
      this.rotateCursor('cursor-rotate-left');
      this.paintCellsRedLeftRight();
      this.fetchDirection('left');
    },
    rotateCursor(rotationClass) {
      const cursorCell = document.querySelector(`#gameTable tr:nth-child(${this.currentRow}) td:nth-child(${this.currentColumn})`);
      if (cursorCell) {
        cursorCell.classList.remove('cursor-rotate-up', 'cursor-rotate-down', 'cursor-rotate-right', 'cursor-rotate-left');
        cursorCell.classList.add(rotationClass);
      }
    },
    getCellsInCursorDirection() {
      const cells = [];
     
      // Agregar celdas de la misma columna
      for (let i = 1; i <= this.rows; i++) {
          const cell = document.querySelector(`#gameTable tr:nth-child(${i}) td:nth-child(${this.currentColumn})`);
          if (cell) {
            cells.push(cell);
          }
      }

      return cells;
    },

    getCellsInCursorDirectionLeftRight() {
      const cells = [];
     
      // Agregar celdas de la misma fila
      for (let i = 1; i <= this.rows; i++) {
        const cell = document.querySelector(`#gameTable tr:nth-child(${this.currentRow}) td:nth-child(${i})`);
        if (cell) {
          cells.push(cell);
        }
      }

      return cells;
    },
    
    // Método para pintar las celdas en rojo
    paintCellsRedUpDown() {
      // Limpiar celdas resaltadas anteriores
      this.clearRedCells();

      // Obtener las celdas en la dirección del cursor
      const cells = this.getCellsInCursorDirection();
      cells.forEach((cell) => {
        if (!cell.classList.contains('cursor-cell')) {
          cell.classList.add('red-cell');
        }
      });
    },

    paintCellsRedLeftRight() {
      // Limpiar celdas resaltadas anteriores
      this.clearRedCells();

      // Obtener las celdas en la dirección del cursor
      const cells = this.getCellsInCursorDirectionLeftRight();
      cells.forEach((cell) => {
        if (!cell.classList.contains('cursor-cell')) {
          cell.classList.add('red-cell');
        }
      });
    },

    clearRedCells() {
      // Limpiar el color rojo de las celdas resaltadas anteriores
      const redCells = document.querySelectorAll('#gameTable .red-cell');
      redCells.forEach((cell) => {
        cell.classList.remove('red-cell');
      });
    },

    async fetchDirection(directionEntered){
      try {
        const token = localStorage.getItem('token');

        const response = await fetch(`https://balandrau.salle.url.edu/i3/arenas/direction`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Bearer': `${token}`,
          },
          body: JSON.stringify({
            direction: directionEntered,
          }),
        });

        if (!response.ok){
          const errorData = await response.json(); 
              
          if (errorData.error && errorData.error.message) {
            const errorMessage = errorData.error.message;
            alert(errorMessage);
          }  
        }
      } catch (error) {
        alert('Error with the server');
      }

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
    async fetchAttacks() {
      try {
        // Fetch attacks information
        const token = localStorage.getItem('token');
        const attacksResponse = await fetch(`https://balandrau.salle.url.edu/i3/players/attacks`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Bearer': `${token}`,
          },
        });

        if (attacksResponse.ok) {
          const attacksData = await attacksResponse.json();
          
          // Assign attack names to buttons
          this.attackButtons = (attacksData.filter(attack => attack.equipped)).map(attack => ({
            text: attack.attack_ID,
          }));
          console.log(this.attackButtons);
        } else {
          throw new Error('Failed to fetch attacks data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, show a message to the user, etc.
      }
    },
  },
  mounted() {
    this.gameId = this.$route.params.gameId;
    this.rows = parseInt(this.$route.params.rows);
    this.hp = this.$route.params.hp;
    this.currentPlayer = this.$route.params.currentPlayer;
    this.fetchAttacks();
    this.rotateCursor('cursor-rotate-up');
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
    max-width: 900px;
}

.block1, .block3, .block5 {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    margin-left: 20px;

}

.block4{
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
    background-image: url('../assets/cursor.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border: none;
    transition: transform 0.3s ease; 
  }

  .cursor-rotate-up { transform: rotate(0deg); }
  .cursor-rotate-down { transform: rotate(180deg); }
  .cursor-rotate-right { transform: rotate(90deg); }
  .cursor-rotate-left { transform: rotate(-90deg); }

  #gameTable .red-cell {
  background-color: red; 
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

.leave-game-btn{
    width: 100px;
    height: 35px;
    border: 2px solid #3D5CFF; 
    border-radius: 4px;
    background-color: white;
    color: black;
}

/* Responsive Styles for Mobile */
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