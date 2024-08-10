<template>
    <transition name="fade">
      <div v-if="visible" class="custom-toast-wrapper">
        <div class="response-code-circle" :style="{ backgroundColor: color }">
          <p class="text-class">{{ responseCode }}</p>
        </div>
        <div :style="{ backgroundColor: color }" class="custom-toast">
          <p class="text-class">{{ message }}</p>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      responseCode: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        default: 3000,
      },
    },
    data() {
      return {
        visible: false,
      };
    },
    mounted() {
      this.showToast();
    },
    methods: {
      showToast() {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, this.duration);
      },
    },
  };
  </script>
  
  <style>
  .text-class{
    margin-top: 10px;
  }
  .custom-toast-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 20px;
    left: 39%;
    transform: translateX(-50%);
    z-index: 9999;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .custom-toast {
    background-color: rgb(179, 71, 71); 
    padding: 16px;
    border-radius: 30px; 
    height: 30px;
    color: white; 
    font-style: italic;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease, transform 0.5s ease;
    opacity: 1;
  }
  
  .response-code-circle {
    background-color: rgb(55, 6, 6); /* Match background color */
    color: white; /* Contrasting text color */
    border-radius: 70%;
    text-align: center; /* Make it a circle */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }
  
  .fade-enter-active, .fade-leave-active {
    opacity: 1;
    transform: translateY(0);
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(20%);
  }
  </style>
  