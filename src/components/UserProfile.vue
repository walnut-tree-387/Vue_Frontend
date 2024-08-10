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
          <div class="user-tab">
            <UserSummary :user="user"/>
            <UserTab />
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import UserTab from './UserComponents/UserTab.vue';
  import ProfileAvatar from './Utils/ProfileAvatar.vue';
  import UserSummary from './UserComponents/UserSummary.vue';
  import LoginService from '../LoginSection/LoginService';
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
            fullName : "Ataur Rahaman",
            occupation : "Software Engineer",
            bio: ''
        }
      };
    },
    mounted() {
      this.getUserProfile();
    },
    methods: {
      getUserProfile(){
        const userId = localStorage.getItem('userId');
        const loginService = new LoginService();
        loginService.getUserProfile(userId)
            .then((data) => {
                this.user.fullName = data.name;
                this.user.bio = data.bio;
                console.log(data);
              })
                .catch(error => {
                  console.log(error);
                })
      }
    }
  };
  </script>
  
  <style>
  .profile-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: center; 
    margin-top: 20px;
  }
  </style>
  