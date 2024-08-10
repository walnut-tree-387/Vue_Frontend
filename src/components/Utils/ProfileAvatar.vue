<template>
    <div class="profile">
      <div class="profile-avatar">
        <img :src="src" alt="Profile Avatar" class="avatar-img" />
      </div>
      <div class="username">{{ userData.fullName }}</div>
      <div class="occupation">{{ userData.occupation }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      user: {
        type: Object,
        required: true,
      }
    },
    watch : {
      user : {
        handler(newValue) {
          this.userData = newValue;
        },
        immediate: true
      }
    },
    data() {
      return{
        userData : {},
      }
    }
  };
  </script>
  
  <style scoped>
  .profile{
    overflow: hidden;
    border: 2px solid #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    margin-right: 20px;
    height: 100%;
  }
 .profile-avatar {
    width: 150px; /* Adjust the width as needed */
    height: 150px; /* Adjust the height as needed */
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: center;
  }

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.username {
    font-size: 16px;
    font-weight: bold;
    font-family: 'proxima-neva';
    margin-top: 20px;
    color: #555;
}

.occupation {
    font-family: 'proxima-neva';
    color: #555;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
  
  