<template>
  <div>
    <div
      class="container card login-root-container"
    >
      <div class="card-title form-row"><b>Sign Up</b></div>
      <div class="row card-body container form-row">
        <div class="col-md-6">
          <input
            type="email"
            required
            v-model="userRegistrationDto.email"
            class="form-control"
            placeholder="Enter your email"
          />
          <div v-if="emailError" style="color: red">{{ emailError }}</div>
        </div>
        <div class="col-md-6">
          <input
            type="text"
            required
            v-model="userRegistrationDto.firstName"
            class="form-control"
            placeholder="Enter your firstname"
          />
        </div>
      </div>
      <div class="row container form-row">
        <div class="col-md-6">
          <input
            type="text"
            required
            v-model="userRegistrationDto.lastName"
            class="form-control"
            placeholder="Enter your lastname"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            required
            v-model="userRegistrationDto.userName"
            class="form-control"
            placeholder="Enter an username"
          />
          <div v-if="userNameHintNegative" style="color: red">
            {{ userNameHintNegative }}
          </div>
        </div>
      </div>
      <div class="row container form-row">
        <div class="col-md-6">
          <input
            v-model="userRegistrationDto.password"
            required
            class="form-control password-input"
            type="password"
            placeholder="Enter a passcode"
          />
          <div v-if="passwordHintNegative" style="color: red">
            {{ passwordHintNegative }}
          </div>
        </div>
        <GlobalCountryDropdown @CountryEvent="setCountry" />
      </div>
      <div class="row container form-row">
        <div class="col-md-6 mx-auto">
          <input v-model="userRegistrationDto.occupation" class="form-control password-input" type="text"
            placeholder="Enter Your Occupation">
        </div>
        <GlobalPhoneNumberComponent @PhoneNumberEvent="setPhone" />
      </div>
      <div style="color: red" v-if="this.erroMessage !== ''">
        {{ this.erroMessage }}
      </div>
      <div v-if="!emailSendingTimer" class="row form-row">
        <button
          :disabled="!validEmail || !validEmail || !validPass"
          type="submit"
          @click="processRegistration()"
          class="btn btn-outline-success"
        >
          Register
        </button>
      </div>
      <div v-if="emailSendingTimer" class="spinner"></div>
      <BottomBar />
    </div>
    <PopUp
      v-if="popupVisible"
      :message="popupMessage"
      :type="popupType"
      :visible="popupVisible"
      @close="closePopup"
    />
  </div>
</template>

<script>
import BottomBar from "@/components/BottomBar.vue";
import GlobalCountryDropdown from "../components/Utils/GlobalCountryDropdown.vue";
import GlobalPhoneNumberComponent from "../components/Utils/GlobalPhoneNumberComponent.vue";
import LoginService from "../LoginSection/LoginService";
import PopUp from "@/components/Utils/PopUp.vue";
export default {
  components: {
    GlobalCountryDropdown,
    GlobalPhoneNumberComponent,
    BottomBar,
    PopUp,
  },
  data() {
    return {
      userRegistrationDto: {
        phoneNumber: "",
        email: "",
        password: "",
        userName: "",
        firstName: "",
        lastName: "",
        country: "",
        occupation: "",
      },
      popupVisible: false,
      popupMessage: "",
      popupType: "",
      erroMessage: "",
      emailError: "",
      validEmail: false,
      validPass: false,
      validUserName : false,
      emailSendingTimer: false,
      userNameHintNegative: "",
      passwordHintNegative: "",
    };
  },
  watch: {
    "userRegistrationDto.email": function (newValue) {
      if (!this.checkEmailValidity(newValue)) {
        this.emailError = "Invalid address";
      } else {
        this.emailError = null;
      }
    },
    "userRegistrationDto.userName": function (newValue) {
      this.checkUserNameAvailability(newValue);
    },
    "userRegistrationDto.password": function (newValue) {
      this.checkPasswordValidity(newValue);
    },
  },
  methods: {
    showSuccess(message) {
      this.popupMessage = message;
      this.popupType = "success";
      this.popupVisible = true;
    },
    showError(message) {
      this.popupMessage = message;
      this.popupType = "error";
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
      if (this.popupType === "success") {
        this.$router.push('/login');
      }
    },
    checkPasswordValidity() {
      this.passwordHintNegative = "";
      if (this.userRegistrationDto.password.length > 5) {
        this.validPass = true;
        this.passwordHintNegative = '';
      } else {
        this.passwordHintNegative = "too short";
        this.validPass = false;
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
      if(emailRegex.test(email)){
        this.validEmail = true;
        return true;
      }else{
        this.validEmail = false;
        return false;
      }
    },
    processRegistration() {
      this.emailSendingTimer = true;
      const loginService = new LoginService();
      loginService
        .register(this.userRegistrationDto)
        .then((data) => {
          this.emailSendingTimer = false;
          this.showSuccess(data.successfulResponse);
        })
        .catch((error) => {
          this.showError(error);
          this.emailSendingTimer = false;
        });
    },
    refreshUserNameFlags() {
      this.userNameHintNegative = "";
    },
    checkUserNameAvailability() {
      this.refreshUserNameFlags();
      const loginService = new LoginService("http://walnuttree.hopto.org");
      loginService
        .checkUserNameAvailability(this.userRegistrationDto.userName)
        .then(() => {
          this.validUserName = true;
        })
        .catch((error) => {
          this.userNameHintNegative = error.message;
          this.validUserName = false;
        });
    },
  },
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
