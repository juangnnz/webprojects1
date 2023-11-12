<template>
  <div class="game-finder">
    <h2 id="searchGamesTitle">Search Games</h2>
    <div class="filters">
      <select v-model="filterStatus" class="selector">
        <option value="all">All</option>
        <option value="finished">Finished</option>
        <option value="available">Available</option>
      </select>


      <label id="datesLabel">Between Dates:</label>
      <input type="date" v-model="startDate" class="dates" />
      <input type="date" v-model="endDate" class="dates" />

      <div class="search-container">
        <input v-model="searchQuery" type="text" class="search-input" placeholder="Search...">
      </div>
    </div>

    <ul class="game-list">
      <li v-for="game in filteredGames" :key="game.id" class="game-item">
        <span class="game-name">{{ game.name }} - {{ game.size }} with hp {{game.HP_max}},
        Period: {{game.startDate}} - {{game.endDate}} </span>
        <button v-if="game.status === 'finished'" @click="viewRecord(game)">View Record</button>
      </li>
    </ul>

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
          size: '5',
          HP_max: 100,
        },
        {
          id: 2,
          name: 'Game 2',
          status: 'available',
          startDate: '2023-02-15',
          endDate: '2023-02-28',
          size: '3',
          HP_max: 150,
        },
        {
          id: 3,
          name: 'Game 3',
          status: 'available',
          startDate: '2023-03-01',
          endDate: '2023-03-15',
          size: '2',
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
    viewRecord(game) {
      this.$router.push({name: 'RecordGameById', params: { gameName: game.name, rows: game.size } });
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

  .selector{
    background: #3D5CFF;
  }

  .dates{
      color: white;
      background-color: black;
      padding: 10px;
      border: 1px solid white;
      border-radius: 5px;
      filter: invert(1); 
      width: 100px;

  }
  
  .game-list {
    list-style: none;
    padding: 0;
  }
  
  .game-item {
    display: flex;
    text-align: left;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .game-name {
    flex: 1;
    color: black;
  }
  
  #datesLabel{
    color: black;
    margin-top: 15px;
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
   width: 200px;
  height: 30px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  background: white;
  color: black;
  margin-top: 15px;
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
  

