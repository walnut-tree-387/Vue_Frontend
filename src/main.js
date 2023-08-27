import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faEnvelope, faPhone, faClose, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import VueRouter from 'vue-router';
import FilmsComponent from '../src/components/FilmsComponent.vue';
import HomePage from '../src/components/HomePage.vue';
import UserProfile from '../src/components/UserProfile.vue'

/* add icons to the library */
library.add(faUserSecret, faEnvelope, faPhone, faFacebook, faInstagram, faLinkedin, faYoutube, faClose, faPerson);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HompePage',
      component: HomePage
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
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, // Pass the router instance to the Vue app
}).$mount('#app');
