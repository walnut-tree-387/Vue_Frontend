<template>
    <div>
        <NavBar />
        <div class="profile-container">
          <div>
            <ProfileAvatar 
                :src="avatarLink"
                :user="user" 
            />
          </div>
          <UserSummary />
        </div>
        <div class="user-tab">
          <UserTab />
        </div>
    </div>
  </template>
  
  <script>
  import UserTab from './UserComponents/UserTab.vue';
  import ProfileAvatar from './Utils/ProfileAvatar.vue';
  import UserSummary from './UserComponents/UserSummary.vue';
  import NavBar from './NavBar.vue';
  
  export default {
    components: {
      ProfileAvatar,
      UserSummary,
      NavBar,
      UserTab,
    },
    data() {
      return {
        avatarLink: require('@/assets/srj.jpg'),
        user : {
            userName : "Ataur Rahaman",
            occupation : "Software Engineer",
        }
      };
    }
  };
  </script>
  
  <style>
  .profile-container {
    display: flex;
    align-items: flex-start; /* Horizontally center the child components */
    text-align: center; /* Center content within child divs */
    margin-top: 20px; /* Add some space at the top */
  }
  </style>
  