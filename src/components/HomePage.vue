<template>
    <div>
        <NavBar />
        <ToastComponent v-if="toast" :message="message" :color="color" :response-code="responseCode"/>
        <PhotoGrid :mode="'photo'" :page="'home'" />
        <ContactSection />
    </div>
</template>
<script>
import ContactSection from '../components/ContactSection.vue';
import NavBar from '../components/NavBar.vue'
import PhotoGrid from '../components//PhotoGrid.vue'
import ToastComponent from '@/components/Utils/ToastComponent.vue';
import LoginService from '../LoginSection/LoginService';
export default {
    name: 'App',
    components: {
        NavBar, PhotoGrid, ContactSection, ToastComponent
    },
    data() {
        return {
            toast : false,
            responseCode: 0,
            color: 'blue',
            message: 'Default message',
            popup: '',
            token: '',
            loginResponse: {
                token: '',
                loggedIn: false,
                username: '',
                loginErrorResponse: false,
                userId: ''
            }
        };
    },
    mounted() {
        const storedToken = localStorage.getItem('token');
        if(!this.storedToken)this.checkToken();
        if (storedToken) {
            this.token = storedToken;
            this.getUserByToken();
        }
        this.fillLoginResponseFromCompleteProfile();
    },
    methods: {
        getUserByToken() {
            const loginService = new LoginService('http://walnuttree.hopto.org');
            loginService.completeLoginByToken(this.token)
                .then((res) => {
                    this.popup = "Hello " + res.username;
                    this.loginResponse = res;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        fillLoginResponseFromCompleteProfile() {
            if (this.$route.query && this.$route.query.loginResponse) {
                this.loginResponse = this.$route.query.loginResponse;
                if (this.loginResponse && this.loginResponse.username) {
                    this.popup = `Hello ${this.loginResponse.username}`;
                    localStorage.setItem('userId', this.loginResponse.userId)
                    localStorage.setItem('token', this.loginResponse.token);
                    this.showCustomToast(this.popup, 'green', 200);
                } else {
                    this.showCustomToast('Username property is missing in loginResponse', 'red', 400);
                }
            }
        },
        showCustomToast(message, color, responseCode) {
            this.message = message;
            this.color = color;
            this.responseCode = responseCode;
            this.toast = true;
            setTimeout(() => {
                this.toast = false;
            }, 3000);
        },
        checkToken() {
            const maxWaitTime = 3000;
            const checkInterval = 1000;
            let elapsedTime = 0;
            const intervalId = setInterval(() => {
                elapsedTime += checkInterval;
                if (this.$route.query.token) {
                    this.token = this.$route.query.token;
                    this.completeLogin();
                    clearInterval(intervalId);
                } else if (elapsedTime >= maxWaitTime && !this.token) {
                    this.$router.push('/login');
                    clearInterval(intervalId);
                }
            }, checkInterval);
        },
        completeLogin() {
            const loginService = new LoginService('http://walnuttree.hopto.org');
            loginService.completeLoginByToken(this.token)
                .then((res) => {
                    this.popup = "Hello " + res.username;
                    this.loginResponse = res;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>
<style scoped>
.pop-up {
    position: fixed;
    top: 20px;
    left: 50%;
    margin-top: 3rem;
    transform: translateX(-50%);
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    animation: fadeInSlideDown 0.5s ease-in-out;
}

@keyframes fadeInSlideDown {
    0% {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}
</style>