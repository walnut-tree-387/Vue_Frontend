<template>
    <aside class="sidebar">
      <ul class="sidebar-list">
        <li v-for="(item, index) in menuItems" :key="index" class="sidebar-item">
          <a :href="item.link" class="sidebar-link">{{ item.text }}</a>
        </li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Services', link: '/services' },
          { text: 'Contact', link: '/contact' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #daf3e4; /* Greenish color */
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
    z-index: 999; /* Ensures it's on top of other content */
  }
  
  .sidebar-list {
    list-style-type: none;
    padding: 0;
  }
  
  .sidebar-item {
    margin: 10px 0;
    padding: 0 15px;
  }
  
  .sidebar-link {
    text-decoration: none;
    color: white;
    font-weight: bold;
    display: block;
    transition: color 0.3s ease;
  }
  
  .sidebar-link:hover {
    color: #ffd700; /* Gold color on hover */
  }
  </style>
  