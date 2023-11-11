<template>
  <div class="game-finder">
    <h2 id="searchGamesTitle">Search Games</h2>
    <div class="filters">
      <select v-model="filterStatus">
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="available">Available</option>
        </select>
  
        <label>Between Dates:</label>
        <input type="date" v-model="startDate" />
        <input type="date" v-model="endDate" />
  
        <div class="search-container">
          <input v-model="searchText" type="text" class="search-input" placeholder="Search...">
        </div>
    </div>

    <ul class="game-list">
      <li v-for="game in filteredGames" :key="game.id" class="game-item">
        <span class="game-name">{{ game.name }}</span>
        <button class="view-details-button" @click="viewGameDetails(game.id)">View Details</button>
      </li>
    </ul>

    <div v-if="selectedGame" class="game-details">
      <h3>Game Details</h3>
      <table>
        <thead>
          <tr>
            <th>Game ID</th>
            <th>Size</th>
            <th>HP_max</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedGame.id }}</td>
            <td>{{ selectedGame.size }}</td>
            <td>{{ selectedGame.HP_max }}</td>
            <td><button @click="viewRecord(selectedGame.id)">View Record</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<template>
  <div class="game-finder">
    <h2 id="searchGamesTitle">Search Games</h2>
    <div class="filters">
      <select v-model="filterStatus">
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="available">Available</option>
      </select>

      <label>Between Dates:</label>
      <input type="date" v-model="startDate" />
      <input type="date" v-model="endDate" />

      <div class="search-container">
        <input v-model="searchQuery" type="text" class="search-input" placeholder="Search...">
      </div>
    </div>

    <ul class="game-list">
      <li v-for="game in filteredGames" :key="game.id" class="game-item">
        <span class="game-name">{{ game.name }}</span>
        <button class="view-details-button" @click="viewGameDetails(game.id)">View Details</button>
      </li>
    </ul>

    <div v-if="selectedGame" class="game-details">
      <h3>Game Details</h3>
      <table>
        <thead>
          <tr>
            <th>Game ID</th>
            <th>Size</th>
            <th>HP_max</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedGame.id }}</td>
            <td>{{ selectedGame.size }}</td>
            <td>{{ selectedGame.HP_max }}</td>
            <td><button @click="viewRecord(selectedGame.id)">View Record</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          id: 1,
          name: 'Game 1',
          status: 'finished',
          startDate: '2023-01-01',
          endDate: '2023-01-10',
          size: 'Large',
          HP_max: 100,
        },
        {
          id: 2,
          name: 'Game 2',
          status: 'available',
          startDate: '2023-02-15',
          endDate: '2023-02-28',
          size: 'Medium',
          HP_max: 150,
        },
        {
          id: 3,
          name: 'Game 3',
          status: 'available',
          startDate: '2023-03-01',
          endDate: '2023-03-15',
          size: 'Small',
          HP_max: 80,
        },
      ],
      filterStatus: 'all',
      startDate: '',
      endDate: '',
      searchQuery: '',
      selectedGame: null,
    };
  },
  computed: {
    filteredGames() {
      return this.games.filter((game) => {
        const statusMatch =
          this.filterStatus === 'all' || game.status === this.filterStatus;
        const dateMatch =
          (!this.startDate || game.startDate >= this.startDate) &&
          (!this.endDate || game.endDate <= this.endDate);
        const searchMatch = game.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return statusMatch && dateMatch && searchMatch;
      });
    },
  },
  methods: {
    viewRecord(gameId) {
      console.log(`View Record for Game ID: ${gameId}`);
      //aqui vemos el record del juego
    },
    viewGameDetails(gameId) {
      // aqui se ven los detalles del juego
      this.selectedGame = this.games.find((game) => game.id === gameId);
    },
  },
};
</script>



<style scoped>

  #searchGamesTitle {
    color: #3D5CFF;
  }
  .game-finder {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #ffffff;
  }
  
  .filters {
    margin-bottom: 20px;
  }
  
  .filters label {
    margin-right: 10px;
  }
  
  .game-list {
    list-style: none;
    padding: 0;
  }
  
  .game-item {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .game-name {
    flex: 1;
  }
  
  .view-details-button {
    background-color: #354a5e;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .view-details-button:hover {
    background-color: #2e3e4f;
  }
  
  .game-details {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .search-container {
  position: relative;
}

.search-input {
  padding-right: 40px; /* Espacio para el ícono de búsqueda */
  width: 200px; /* Ajusta el ancho según sea necesario */
}

.search-input::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px; /* Ajusta el tamaño según sea necesario */
  height: 20px; /* Ajusta el tamaño según sea necesario */
  background: url('../assets/profilePicture.png') no-repeat center center; 
  background-size: cover;
  cursor: pointer;
}
  </style>
  

