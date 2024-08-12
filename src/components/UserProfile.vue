<template>
  <div>
    <NavBar />
    <div class="profile-container">
      <div class="user-info">
        <ProfileAvatar 
            :src="avatarLink"
            :user="user" 
        />
        <UserSummary :user="user"/>
      </div>
      <UserTab />
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
      user: {
        fullName: "Ataur Rahaman",
        occupation: "Software Engineer",
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
              this.user.occupation = data.occupation;
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
  flex-direction: column;
  align-items: flex-start;
  text-align: center; 
  width: 100%;
  height: 100%
}

.user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.profile {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 180px; 
  overflow: hidden;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}

.profile-avatar {
  width: 100%; 
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

</style>
