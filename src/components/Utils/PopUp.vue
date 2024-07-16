<template>
    <div v-if="visible" class="popup" :class="type">
      <div class="popup-content">
        <font-awesome-icon :icon="['fas', 'circle-exclamation']" class="social-icons" :class="iconClass" />
        <span class="close" @click="close">&times;</span>
        <p class="message">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      visible: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      iconClass() {
        return this.type === 'success' ? 'success-color' : 'error-color';
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .message{
    margin: 2rem;
    color: black;
  }
  .social-icons {
    font-size: 28px;
    margin-right: 15px;
  }
  
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    position: relative;
  }
  
  .success-color {
    color: green;
  }
  
  .error-color {
    color: red;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: black;
  }
  </style>
  