<template>
    <div class="contact-section">
      <div class="contact-info">
        <div class="hire-me">
          <button class="hire-button" @click="openPopup">Book now</button>
        </div>
         <div v-if="showPopup" class="popup">
            <div class="popup-content">
              <span class="close" @click="closePopup">&times;</span>
              <EventDetailsForm 
              @event-popup-cloased="closePopup"  
              />
            </div>
        </div>
        <div> 
          <ul class="icon-list">
            <a href="#"><font-awesome-icon icon="fa-solid fa-envelope" class="social-icons mail" /></a>
            <a href="#" ><font-awesome-icon icon="fa-solid fa-phone" class="social-icons phone" /></a>
            <a href="#" ><font-awesome-icon :icon="['fab', 'facebook']" class="social-icons fb" /></a>
            <a href="#" ><font-awesome-icon :icon="['fab', 'instagram']" class="social-icons insta" /></a>
            <a href="#" ><font-awesome-icon :icon="['fab', 'linkedin']" class="social-icons linkedin" /></a>
            <a href="#" ><font-awesome-icon :icon="['fab', 'youtube']" class="social-icons utube" /></a>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import EventDetailsForm from './EventDetailsForm.vue';

  export default {
    name: "ContactSection",
    components: {EventDetailsForm},
    data() {
      return {
        showPopup: false,
      };
    },
    methods: {
      openPopup() {
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>
.contact-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  border-radius: 8px;
  padding: 40px;
  margin: 20px;
}
.contact-info {
  flex: 1;
  padding-right: 20px;
  flex-direction: column;
}
.social-icons {
  font-size: 24px;
  margin-right: 15px;
}

.mail {
  color: rgb(236, 81, 42);
}

.phone {
  color: rgb(2, 236, 2);
}

.fb {
  color: #0056b3;
}

.insta {
  color: rgb(245, 78, 1);
}

.linkedin {
  color: #0056b3;
}

.utube {
  color: rgb(255, 0, 0);
}
  
.hire-me {
  text-align: center;
}
  
.hire-button {
  padding: 10px 20px;
  background-color: #007bff;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'proxima_neva';
}
  
.hire-button:hover {
  background-color: #0056b3;
}
  
  .popup {
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
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    color: black;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
  }
    
  .popup h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .popup p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  </style>
  