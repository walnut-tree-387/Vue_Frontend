<template>
  <div class="photo-grid-container">
    <div class="photo-grid" v-if="containerPage==='home'">
      <div class="photo-card" v-for="photo in visiblePhotos" :key="photo.id" @click="switchProfile(photo.route)" >
        <div class="photo-title"><h3> {{ photo.title }} </h3></div>
        <img v-if="containerMode === 'photo'" :src="photo.imageUrl" alt="Photo" class="photo-img" />
        <iframe
          v-if="containerMode === 'video'"
          width="560"
          height="315"
          :src="'https://www.youtube.com/embed/' + videoId"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div v-else>
      <h1>More Photos</h1>
    </div>
    <!-- <button v-if="canLoadMore" class="see-more-btn" @click="showLoginPopup">See more</button> -->
    <LoginModal ref="loginPopup"/>
  </div>
</template>


<script>
import LoginModal from './LoginModal.vue';

export default {
  props:{
    mode: {
      type : String, 
      default: ''
    },
    page: {
      type : String, 
      default: ''
    }
  },
  watch: {
    mode: {
      handler(newValue) {
        this.containerMode = newValue;
      },
      immediate: true
    },
    page: {
      handler(newVal) {
        this.containerPage = newVal;
      },
      immediate: true
    }
  },
  data() {
      return {
          containerMode : '',
          containerPage : '',
          photos: [{
                    id: 1,
                    imageUrl: require('@/assets/footballer.jpg'),
                    title: 'Sports Analytic',
                    description: 'Description for Picture 1.',
                    route: '/sports_analyst'
                },
                {
                    id: 2,
                    imageUrl: require('@/assets/developer.png'),
                    title: 'Developer',
                    description: 'Description for Picture 1.',
                    route: '/developer'
                },
                {
                    id: 3,
                    imageUrl: require('@/assets/film.jpg'),
                    title: 'Cinematographer',
                    description: 'Description for Picture 1.',
                    route: '/cinematographer'
                },
                {
                    id: 4,
                    imageUrl: require('@/assets/Photographer.jpg'),
                    title: 'Photographer',
                    description: 'Description for Picture 1.',
                    route: '/photographer_profile'
                },
                {
                    id: 5,
                    imageUrl: require('@/assets/cat.jpg'),
                    title: 'Photographer',
                    description: 'Description for Picture 1.',
                    route: '/photographer_profile'
                },
                {
                    id: 6,
                    imageUrl: require('@/assets/srj.jpg'),
                    title: 'Photographer',
                    description: 'Description for Picture 1.',
                    route: '/photographer_profile'
                }
              ],
          videoId : 'dQw4w9WgXcQ',
          itemsPerPage: 4,
          currentPage: 1,
        };
    },
    computed: {
        visiblePhotos() {
            const startingIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endingIndex = startingIndex + this.itemsPerPage;
            return this.photos.slice(startingIndex, endingIndex);
        },
        canLoadMore() {
            return this.currentPage * this.itemsPerPage < this.photos.length;
        },
    },
    methods: {
        loadMore() {
            this.currentPage++;
        },
        showLoginPopup() {
          this.$refs.loginPopup.togglePopup();
        },
        switchProfile(route){
          this.$router.push(route);
        }
    },
    components: { LoginModal }
};
</script>
<style scoped>
.photo-grid-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 100px; 
  color: #c0b9b9;
}

.photo-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #f5f5f5;
  margin-bottom: 10px;
}

.photo-card {
  width: calc(30.33% - 10px);
  height: 250px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border:2 px solid #0056b3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #f5f5f5;
  background-color: rgb(173, 121, 56);
}
.photo-title{
  color: #000;
}
.photo-img {
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px;
}

h3 {
  margin: 10px 0;
}

p {
  margin: 0;
}
.see-more-btn {
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'proxima_neva';
}

.see-more-btn:hover {
  background-color: #0056b3;
}
</style>

      
 