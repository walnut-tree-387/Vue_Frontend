import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faEnvelope, faPhone, faClose, faPerson, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import VueRouter from 'vue-router';
import FilmsComponent from '../src/components/FilmsComponent.vue';
import HomePage from '../src/components/HomePage.vue';
import UserProfile from '../src/components/UserProfile.vue'
import PhotographerProfile from '../src/components/PhotographerProfile.vue'
import SportsAnalystProfile from '../src/components/SportsAnalyticProfile.vue'
import DeveloperProfile from '../src/components/DeveloperProfile.vue'
import CinematographerProfile from '../src/components/CinematographerProfile.vue'
import UserRegistrationComponent from '../src/LoginSection/UserRegistrationComponent.vue'
import LoginComponent from '../src/LoginSection/LoginComponent.vue'
import ResetPasscode from '../src/LoginSection/ResetPasscode.vue'
import CompleteProfileComponent from '../src/LoginSection/CompleteProfileComponent.vue'
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
const cors = require("cors");

library.add(faUserSecret, faEnvelope, faPhone, faFacebook, faInstagram, faLinkedin, faYoutube, faClose, faPerson, faExclamationCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(cors)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: UserRegistrationComponent
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/reset-passcode',
      name: 'Reset Passcode',
      component: ResetPasscode
    },
    {
      path: '/complete-profile',
      name: 'Complete Profile',
      component: CompleteProfileComponent
    },
    {
      path: '/',
      name: 'HompePage',
      component: HomePage,
      props: route => ({ loginResponse: route.query.loginResponse ? route.query.loginResponse : null })
    },
    {
      path: '/films',
      name: 'Film',
      component: FilmsComponent
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile
    },
    {
      path: '/photographer_profile',
      name: 'Photographer Profile',
      component: PhotographerProfile
    },
    {
      path: '/sports_analyst',
      name: 'Sports Analyst Profile',
      component: SportsAnalystProfile
    },
    {
      path: '/developer',
      name: 'Developer Profile',
      component: DeveloperProfile
    },
    {
      path: '/cinematographer',
      name: 'Cinematographer Profile',
      component: CinematographerProfile
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, // Pass the router instance to the Vue app
}).$mount('#app');
