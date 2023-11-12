<template>
  <!-- The main container for the app -->
  <div>
    <header>
      <!-- Logo and navigation section -->
      <img src="../assets/logo.png" alt="logo" class="logo" />
      <nav>
        <!-- Navigation links for the game section -->
        <ul>
          <li><router-link to="/">Game</router-link></li>
          <!-- Submenu for game-related links -->
          <ul class="submenu">
            <li><router-link to="/create-game">Create an Arena</router-link></li>
            <li><router-link to="/available-games">Show Available Games (Not Started)</router-link></li>
            <li><router-link to="/game-finder">Search games</router-link></li>
            <li><router-link to="/game-history">Game History</router-link></li>
          </ul>
          <!-- Navigation links for the Players section -->
          <li><router-link to="/">Players</router-link></li>
          <!-- Submenu for player-related links -->
          <ul class="submenu">
            <li><router-link to="/">Player's History</router-link></li>
            <li><router-link to="/player-lists">Player's Ranking</router-link></li>
          </ul>
          <!-- Navigation links for the Store section -->
          <li><router-link to="/Store">Store</router-link>
            <!-- Submenu for store-related links -->
            <ul class="submenu">
              <li><router-link to="/create-sell-attacks">Sell/Create Attacks</router-link></li>
              <li><router-link to="/buy-attacks">Buy Attacks</router-link></li>
            </ul>
          </li>
          <!-- Navigation links for user profile -->
          <li>
            <img src="../assets/profilePicture.png" alt="Profile" class="profile-icon" />
            <!-- Submenu for user profile-related links -->
            <ul class="submenu">
              <li><router-link to="/player-info">Your Profile</router-link></li>
              <li><router-link to="/attacks">Manage Attacks</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <!-- Display the current route's content -->
    <router-view></router-view>
  </div>
</template>


<style>
  /* Styling for the entire body of the page */
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }

  /* Styling for the header section */
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    background-color: #354a5e;
    color: #fff;
    text-align: center;
  }

  /* Styling for header h1 element */
  h1 {
    font-size: 28px;
  }

  /* Styling for the navigation menu */
  nav ul {
    list-style: none;
    padding: 0;
    background-color: #354a5e;
    margin: 0;
    text-align: center;
  }

  /* Styling for navigation list items */
  nav li {
    display: inline;
    margin-right: 10px;
  }

  /* Styling for navigation links */
  nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 10px 15px;
  }

  /* Styling for submenu items */
  nav .submenu {
    display: none;
    position: absolute;
    background-color: #354a5e;
  }

  /* Styling for submenu list items */
  nav .submenu li {
    display: block;
  }

  /* Styling for submenu links */
  nav .submenu a {
    padding: 10px 20px;
  }

  /* Display submenu when hovering over a navigation item */
  nav li:hover .submenu {
    display: block;
  }

  /* Highlight submenu item on hover */
  .submenu li:hover a {
    background-color: #2e3e4f;
  }

  /* Styling for the router-view (main content area) */
  router-view {
    margin: 20px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  /* Additional styling for the header and navigation on small screens */
  header nav {
    background-color: #354a5e;
  }

  header nav ul {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  /* Responsive styling for small screens */
  @media (max-width: 768px) {
    header {
      padding: 10px 0;
    }

    header h1 {
      font-size: 24px;
    }

    nav ul {
      text-align: center;
    }

    nav li {
      display: block;
      margin-right: 0;
      margin-bottom: 5px;
    }

    /* Adjust submenu for small screens */
    nav .submenu {
      display: none;
      position: static;
    }

    nav .submenu li {
      display: block;
    }

    nav .submenu a {
      padding: 10px 15px;
    }

    /* Styling for the profile icon on small screens */
    .profile-icon {
      width: 30px; 
      height: 30px; 
      cursor: pointer;
    }
  }
</style>
