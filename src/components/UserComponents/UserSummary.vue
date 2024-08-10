<template>
    <div v-if="user.bio" class="user-info">
        <div class="bio">{{ user.bio }}</div>
    </div>
</template>
  
  <script>
  
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      }
    },
    components: {
    },
    data() {
      return {
      };
    }
  };
  </script>
  
<style>
.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    background-color: transparent;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    margin-right: 30px;
}
.bio {
  font-size: 16px;
  font-weight: bold;
  font-family: 'proxima-neva';
  color: rgb(27, 27, 27);
  text-align: left;
}

.completed-events {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'proxima-neva';
  color: rgb(27, 27, 27);
}

  </style>
  