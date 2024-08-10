<template>
    <div class="container card login-root-container">
        <div class="card-title form-row"> <b>{{  title }}</b> </div>
        <div class="row card-body container form-row">
            <div class="row container form-row">
                <GlobalPhoneNumberComponent @PhoneNumberEvent="setPhone" />
            </div>
            <div class="col-md-6" style="margin-left: 1rem;">
                <GlobalCountryDropdown @CountryEvent="setCountry" />
            </div>
        </div>
        <button type="submit" @click="completeProfile()" class="btn btn-outline-success">Complete</button>
        <BottomBar />
    </div>
</template>
<script>
import BottomBar from '@/components/BottomBar.vue';
import LoginService from '../LoginSection/LoginService';
import GlobalCountryDropdown from '../components/Utils/GlobalCountryDropdown.vue';
import GlobalPhoneNumberComponent from '../components/Utils/GlobalPhoneNumberComponent.vue'
export default {
    components: {
        BottomBar,
        GlobalCountryDropdown,
        GlobalPhoneNumberComponent
    },
    data() {
        return {
            title: 'Complete Profile',
            completeProfileDto: {
                country: '',
                phoneNumber: '',
            },
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
        setPhone(data) {
            this.completeProfileDto.phoneNumber = data;
        },
        setCountry(data) {
            this.completeProfileDto.country = data;
        },
        completeProfile() {
            const loginService = new LoginService('http://walnuttree.hopto.org');
            loginService.completeProfile(this.$route.query.token, this.completeProfileDto)
                .then((res) => {
                    this.$router.push({
                        path: '/',
                        query: { loginResponse: res }
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
};
</script>
<style>

.form-row {
    padding: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    gap: 20px;
}
.login-root-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    justify-content: space-around;
    flex-wrap: wrap;
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