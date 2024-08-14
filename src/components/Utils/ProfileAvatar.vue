<template>
  <div class="profile common-style">
    <div class="profile-avatar">
      <img :src="src" alt="Profile Avatar" class="avatar-img" />
    </div>
    <div class="username">{{ userData.name }}</div>
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
  watch: {
    user: {
      handler(newValue) {
        this.userData = newValue;
      },
      immediate: true
    }
  },
  data() {
    return {
      userData: {},
    }
  }
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  width: 100%;
}

.profile-avatar {
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.username, .occupation {
  font-family: 'proxima-neva';
  color: #555;
  text-align: center;
}

.username {
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
}

.occupation {
  margin-top: 10px;
  margin-bottom: 10px;
}

.common-style {
  border: 2px solid #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}
</style>
