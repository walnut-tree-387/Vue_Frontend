<template>
    <div class="container card login-root-container">
        <div class="card-title form-row">Change Passcode</div>
        <div class="row container form-row">
            <div class="col-md-6 mx-auto">
                <input v-model="passcode" class="form-control password-input" type="text"
                    placeholder="Enter Your Passcode">
            </div>
        </div>
        <div class="row container form-row">
            <div class="col-md-6 mx-auto">
                <input v-model="repeatPasscode" class="form-control password-input" type="text"
                    placeholder="Repeat Your Passcode">
                 <div v-if="passcodeNotMatched" style="color: red;">{{ passcodeNotMatched }}</div>
            </div>
        </div>
        <div class="row form-row">
            <button type="submit" @click="changePasscode()" class="btn btn-outline-success">Change Passcode</button>
        </div>
        <div v-if="emailSendingTimer" class="spinner"></div>
    </div>
</template>
<script>
import LoginService from '../LoginSection/LoginService';
export default {
    data() {
        return {
            passcode: '',
            repeatPasscode: '',
            passcodeNotMatched: '',
            emailSendingTimer: false,
        };
    },
    watch: {
        passcode: function(newValue){
            if(newValue !== ''){
               if(this.checkPasscodeValidity())this.passcodeNotMatched = '';
               else this.passcodeNotMatched = 'Passcode are different';
            }
        },
        repeatPasscode: function(newValue){
            if(newValue !== ''){
               if(this.checkPasscodeValidity())this.passcodeNotMatched = '';
               else this.passcodeNotMatched = 'Passcode are different';
            }
        }
    },
    methods: {
        checkPasscodeValidity() {
           return (this.passcode === this.repeatPasscode && this.passcode !== '') ? true : false;
        },
        changePasscode() {
            if(this.checkPasscodeValidity()){
                this.emailSendingTimer = true;
                const loginService = new LoginService('http://localhost:8083');
                loginService.passcodeChange(localStorage.getItem('userEmail'), this.passcode)
                .then(() => {
                    this.emailSendingTimer = false;
                    this.$router.push({name: 'Login', path: '/login', params: { passcodeResetMessage: 'Passcode reset attempt successful, Login to continue.' } });
                })
                .catch(error => {
                    this.emailSendingTimer = false;
                    console.log(error);
                })
            }
            else{
                this.passcodeNotMatched = 'Passcode are different';
            }
        },
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
    