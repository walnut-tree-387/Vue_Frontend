<template>
  <nav class="navbar">
    <div class="nav-logo">
      <img class="logo-image" src='@/assets/logo.png'/>
      <span class="logo-text">Walnut Tree</span>
    </div>
    <div class="empty-space"></div>
    <a href="/profile" ><font-awesome-icon icon="fa-solid fa-person" class="social-icons person" /></a>
    <ul class="nav-list">
      <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
        <a :href="item.link" class="nav-link">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "Films", link: "/films" },
        { text: "Services", link: "/services" },
        // Add more menu items as needed
      ],
    };
  },
};
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 0;
  z-index: 1000; /* Ensure the navbar is on top of other content */
}

.nav-logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;
  margin-left: 10px;
}

.logo-image {
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Maintain aspect ratio */
  margin-right: 10px; /* Add spacing between image and text */
}

.logo-text {
  font-weight: bold;
}

.empty-space {
  flex-grow: 1;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  text-decoration: none;
  color: white;
}

.social-icons {
  font-size: 24px;
  margin-right: 15px;
}
.person{
  color: white;
}
</style>
