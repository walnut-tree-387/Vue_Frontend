<template>
   <div> 
    <NavBar />
    <div style="color: brown;">
        <p v-if="popup != ''" class="pop-up"> {{ popup }}</p>
    </div>

    <PhotoGrid 
        :mode="'photo'"
        :page="'home'"
    />
    <ContactSection />
   </div>
</template>
<script>
    import ContactSection from '../components/ContactSection.vue';
    import NavBar from '../components/NavBar.vue'
    import PhotoGrid from '../components//PhotoGrid.vue'
    // import UserMessage from '../components/UserMessage.vue';
    import LoginService from '../LoginSection/LoginService';
    export default {
        name: 'App',
        components: {
            NavBar, PhotoGrid, ContactSection,
        },
        data() {
            return {
                popup : '',
                token : '',
                loginResponse: {
                    token : '',
                    loggedIn: false,
                    username : '',
                    loginErrorResponse: false,
                    userId: ''
                }
            };
        },
        mounted(){
            this.checkToken();
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                this.token = storedToken;
                this.getUserByToken();
            }
                this.fillLoginResponseFromCompleteProfile();
            },
        methods: {
            getUserByToken(){
                const loginService = new LoginService('http://localhost:8083');
                loginService.completeLoginByToken(this.token)
                    .then((res) => {
                        this.popup = "Hello " + res.username;
                        this.loginResponse = res;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            fillLoginResponseFromCompleteProfile(){
                if (this.$route.query && this.$route.query.loginResponse) {
                    this.loginResponse = this.$route.query.loginResponse;
                    if (this.loginResponse && this.loginResponse.username) {
                        this.popup = `Hello ${this.loginResponse.username}`;
                        localStorage.setItem('token', this.loginResponse.token);
                    } else {
                        console.log('Username property is missing in loginResponse');
                    }
                }
            },
            checkToken() {
            const checkInterval = setInterval(() => {
                if (this.$route.query.token) {
                        this.token = this.$route.query.token;
                        this.completeLogin();
                        clearInterval(checkInterval);
                    }
                }, 1); 
            },
            completeLogin(){
                const loginService = new LoginService('http://localhost:8083');
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