<template>
  <div class="login-popup" v-if="showPopup">
    <div class="popup-content">
      <a @click="closePopup"><span class="close"><font-awesome-icon icon="fa-solid fa-close" class="close-icon" /></span></a>
      <div class="tab-buttons">
        <button :class="{ active: activeTab === 'login' }" @click="changeTab('login')">Login</button>
        <button :class="{ active: activeTab === 'register' }" @click="changeTab('register')">Register</button>
      </div>
      <div class="login-box">
        <form @submit.prevent="activeTab === 'login' ? login : register">
          <input v-if="activeTab === 'login'" type="text" v-model="username" required class="input-field" placeholder="Enter an username">
          <input v-if="activeTab === 'login'" type="password" v-model="password" required class="input-field" placeholder="Enter a password">
          <input type="email" v-model="email" required class="input-field" placeholder="Enter your email">
          <input v-if="activeTab === 'register'" type="text" v-model="firstName" required class="input-field" placeholder="Enter your first name">
          <input v-if="activeTab === 'register'" type="text" v-model="lastName" required class="input-field" placeholder="Enter your last name">
          <button type="submit">{{ activeTab === 'login' ? 'Login' : 'Register' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      activeTab: 'login', // 'login' or 'register'
      username: '',
      password: '',
      email : '',
      lastName: '',
      firstName: '',
    };
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    closePopup() {
      this.showPopup = false;
      this.activeTab = 'login'; // Reset to the login tab when closing
    },
    changeTab(tab) {
      this.activeTab = tab;
    },
    login() {
      console.log('Logging in with:', this.username, this.password);
      this.closePopup();
    },
    register() {
      console.log('Registering with:', this.username, this.password);
      this.closePopup();
    }
  }
};
</script>
  
  <style scoped>
 .login-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
.popup-content {
    position: relative; /* Needed for positioning the close icon */
    background-color: #e2d7d7;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 0 auto;
    width: 50%;
  }
.login-box {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  margin: 20px 60px;
}

.login-box form {
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 90%;
}

.login-box .input-field {
  padding: 15px;
  border: 2px solid #dddddd;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333333;
  height: 400px;
  width: 100%;
}

.login-box button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'proxima_neva';
  margin-left: 90px;
  margin-right: 70px;
}

.login-box button:hover {
  background-color: #0056b3;
}
.tab-buttons {
  display: flex;
  justify-content: center;
  margin: 20px 80px;
  width: 80%;
}

.tab-buttons button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'proxima_neva';
  border: 4px solid #ffffff;
  
}

.tab-buttons button.active {
  background-color: #007bff;
  color: white;
}
.close-icon {
  width: 30px;
  height: 30px;
  background-color: rgb(167, 166, 166); /* You can change the background color */
  border-radius: 20%; /* Makes the shape round */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: red;
  position: absolute;
  top: 10px; /* Adjust the top position to align vertically */
  right: 10px; /* Adjust the right position to align horizontally */
}
  </style>
  