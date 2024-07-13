<template>
  <div>
    <div v-if="this.registerResponse === ''" class="container card login-root-container">
      <div class="card-title form-row"> <b>Sign Up</b> </div>
      <div class="row card-body container form-row">
        <div class="col-md-6">
          <input type="email" required v-model="userRegistrationDto.email" class="form-control"
            placeholder="Enter your email">
          <div v-if="emailError" style="color: red;">{{ emailError }}</div>
        </div>
        <div class="col-md-6">
          <input type="text" required v-model="userRegistrationDto.firstName" class="form-control"
            placeholder="Enter your firstname">
        </div>
      </div>
      <div class="row container form-row">
        <div class="col-md-6">
          <input type="text" required v-model="userRegistrationDto.lastName" class="form-control"
            placeholder="Enter your lastname">
        </div>
        <div class="col-md-6">
          <input type="text" required v-model="userRegistrationDto.userName" class="form-control" placeholder="Enter an username">
          <div v-if="userNameHintNegative" style="color: red;">{{ userNameHintNegative }}</div>
          <div v-if="userNameHintPositive" style="color: green;">{{ userNameHintPositive }}</div>
        </div>
      </div>
      <div class="row container form-row">
        <div class="col-md-6">
          <input v-model="userRegistrationDto.password" required class="form-control password-input" type="password"
            placeholder="Enter a passcode">
          <div v-if="passwordHintNegative" style="color: red;">{{ passwordHintNegative }}</div>
          <div v-if="passwordHintPositive" style="color: green;">{{ passwordHintPositive }}</div>
        </div>
        <GlobalCountryDropdown @CountryEvent="setCountry" />
      </div>
      <div class="row container form-row">
        <GlobalPhoneNumberComponent @PhoneNumberEvent="setPhone" />
      </div>
      <div style="color: red;" v-if="this.erroMessage !== ''"> {{ this.erroMessage }}</div>
      <div class="row form-row">
        <button type="submit" @click="processRegistration()" class="btn btn-outline-success">Register</button>
      </div>
      <BottomBar />
      <div v-if="emailSendingTimer" class="spinner"></div>
    </div>
    <div style="color: blue;" v-if="this.registerResponse !== ''">
      <p>{{ registerResponse }}</p>
    </div>
  </div>
</template>
  
<script>
import BottomBar from '@/components/BottomBar.vue';
import GlobalCountryDropdown from '../components/Utils/GlobalCountryDropdown.vue';
import GlobalPhoneNumberComponent from '../components/Utils/GlobalPhoneNumberComponent.vue'
import LoginService from '../LoginSection/LoginService';
export default {
  components: {
    GlobalCountryDropdown,
    GlobalPhoneNumberComponent,
    BottomBar
},
  data() {
    return {
      userRegistrationDto: {
        phoneNumber: '',
        email: '',
        password: '',
        userName: '',
        firstName: '',
        lastName: '',
        country: ''
      },
      registerResponse: '',
      erroMessage: '',
      emailError: '',
      emailSendingTimer: false,
      userNameHintPositive: '',
      userNameHintNegative: '',
      passwordHintPositive: '',
      passwordHintNegative: ''
    };
  },
  watch: {
    'userRegistrationDto.email': function (newValue) {
      if (!this.checkEmailValidity(newValue)) {
        this.emailError = 'Invalid address';
      }
      else {
        this.emailError = null;
      }
    },
    'userRegistrationDto.userName': function (newValue) {
      this.checkUserNameAvailability(newValue);
    },
    'userRegistrationDto.password': function (newValue) {
      this.checkPasswordValidity(newValue);
    }
  },
  methods: {
    checkPasswordValidity(){
      this.passwordHintPositive = '';
      this.passwordHintNegative = '';
      if(this.userRegistrationDto.password.length > 5){
        this.passwordHintPositive = 'Okay to continue';
      }
      else{
        this.passwordHintNegative = 'too short';
      }
    },
    setPhone(data) {
      this.userRegistrationDto.phoneNumber = data;
    },
    setCountry(data) {
      this.userRegistrationDto.country = data;
    },
    checkEmailValidity(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    },
    // https://spring-server-23-dec.onrender.com
    // http://localhost:8083
    processRegistration() {
      this.emailSendingTimer = true;
      const loginService = new LoginService('http://localhost:8083');
      loginService.register(this.userRegistrationDto)
        .then((data) => {
          this.emailSendingTimer = false;
          this.registerResponse = data.successfulResponse;
        })
        .catch(error => {
          this.emailSendingTimer = false;
          this.erroMessage = error;
        })
    },
    refreshUserNameFlags(){
      this.userNameHintPositive = '';
      this.userNameHintNegative = '';
    },
    checkUserNameAvailability(){
      this.refreshUserNameFlags();
      const loginService = new LoginService('http://localhost:8083');
      loginService.checkUserNameAvailability(this.userRegistrationDto.userName)
        .then((data) => {
          this.userNameHintPositive = data;
        })
        .catch(error =>{
          this.userNameHintNegative = error;
        })
    }
  }
};
</script>
  
<style>
.login-root-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.form-row {
  padding: 2vw;
}
.spinner {
  border: 4px solid rgba(0, 128, 0, 0.1);
  border-top: 4px solid #008000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-right: 25vh;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
  