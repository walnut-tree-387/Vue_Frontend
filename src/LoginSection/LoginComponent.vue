<template>
    <div class="container card login-root-container">
        <div class="card-title form-row">  <b>{{  title }}</b> </div>
        <div v-if="!showEmailInput && successfulMailSent === 'false'" class="row card-body container form-row">
            <div class="row container form-row">
                <div class="col-md-6 mx-auto">
                    <input v-model="userLoginDto.username" class="form-control password-input" type="text"
                        placeholder="Enter Your Username">
                </div>
            </div>
            <div class="row container form-row">
                <div class="col-md-6 mx-auto">
                    <input v-model="userLoginDto.password" class="form-control password-input" type="password"
                        placeholder="Enter Your Passcode">
                </div>
            </div>
            <div class="col-md-3 mx-auto">
                <a href="#" @click.prevent="authenticateWithGoole">Log in with Google?</a>
            </div>
            <div class="col-md-3 mx-auto">
                <a href="#" @click="toggleEmailInputVisibility">Forgot Passcode?</a>
            </div>
        </div>
        <div v-if="!showEmailInput" class="row form-row">
            <button type="submit" @click="processLogin()" class="btn btn-outline-success">Login</button>
            <p v-if="passcodeResetMessage" style="color: green;">{{ passcodeResetMessage }}</p>
        </div>
        <div class="row container form-row" v-if="successfulMailSent !== 'success'">
            <div v-if="showEmailInput" class="col-md-6 mx-auto">
                <a href="">Login</a>
                <input v-model="userLoginDto.email" class="form-control password-input" type="email"
                    placeholder="Enter Your Email">
                <div v-if="emailError" style="color: red;">{{ emailError }}</div>
                <a href="" @click.prevent="requestNewPassword">Generate a temporary passcode</a>
                <div v-if="emailSendingTimer" class="spinner"></div>
            </div>
        </div>
        <p v-if="this.successfulMailSent === 'error'" style="color: red;">{{ changePasswordResponse }}</p>
        <p v-if="this.successfulMailSent === 'success'" style="color: blue;">{{ changePasswordResponse }}</p>
        <BottomBar />
    </div>
</template>
    
<script>
import BottomBar from '@/components/BottomBar.vue';
import LoginService from '../LoginSection/LoginService';
export default {
    components: {
        BottomBar
    },
    data() {
        return {
            userLoginDto: {
                email: '',
                password: '',
                username: '',
            },
            showEmailInput: false,
            emailError: '',
            changePasswordResponse: '',
            successfulMailSent: 'false',
            title: 'Login',
            emailSendingTimer : false,
            passcodeResetMessage: '',
        };
    },
    watch: {
        'userLoginDto.email': function (newValue) {
            if (!this.checkEmailValidity(newValue)) {
                this.emailError = 'Invalid address';
            }
            else {
                this.emailError = '';
            }
        }
    },
    mounted() {
        this.passcodeResetMessage = this.$route.params.passcodeResetMessage;
    },
    methods: {
        checkEmailValidity(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        },
        authenticateWithGoole() {
            const loginService = new LoginService('http://localhost:8083');
            loginService.authenticateWithGoogle()
                .then(() => {
                    this.$router.push('/');
                })
                .catch(error => {
                    console.log(error);
                })
        },
        processLogin() {
            const loginService = new LoginService('http://localhost:8083');
            loginService.login(this.userLoginDto)
                .then((res) => {
                    this.$router.push({
                        path: '/',
                        query: { loginResponse: res }
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        },
        toggleEmailInputVisibility() {
            this.title = 'Request For Passcode change';
            this.showEmailInput = !this.showEmailInput;
        },
        requestNewPassword() {
            this.emailSendingTimer = true;
            this.successfulMailSent = '';
            const loginService = new LoginService('http://localhost:8083');
            localStorage.setItem('userEmail', this.userLoginDto.email);
            loginService.forgotPasscode(this.userLoginDto.email)
                .then((data) => {
                    this.changePasswordResponse = data.successfulResponse;
                    this.successfulMailSent = 'success';
                    this.emailSendingTimer = false;
                })
                .catch(error => {
                    this.emailSendingTimer = false;
                    this.changePasswordResponse = error;
                    this.successfulMailSent = 'error';
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
    margin-top: 2rem;
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
  margin-left: 25vh;
  margin-top: 5vh;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
    