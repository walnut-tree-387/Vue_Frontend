<template>
  <div class="photo-grid-container">
    <div class="photo-grid">
      <div class="photo-card" v-for="photo in visiblePhotos" :key="photo.id">
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
    <button v-if="canLoadMore" class="see-more-btn" @click="showLoginPopup">See more</button>
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
    }
  },
  watch: {
    mode: {
      handler(newValue) {
        console.log(newValue);
        this.containerMode = newValue;
      },
      immediate: true // This ensures that the watch function runs immediately when the component is mounted
    }
    },
    data() {
        return {
            containerMode : '',
            photos: [{
                    id: 1,
                    imageUrl: require('@/assets/srj.jpg'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                },
                {
                    id: 2,
                    imageUrl: require('@/assets/flower.png'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                },
                {
                    id: 3,
                    imageUrl: require('@/assets/window.jpg'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                },
                {
                    id: 4,
                    imageUrl: require('@/assets/cat.jpg'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                },
                {
                    id: 5,
                    imageUrl: require('../assets/logo.png'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                },
                {
                    id: 6,
                    imageUrl: require('../assets/logo.png'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                },
                {
                    id: 7,
                    imageUrl: require('../assets/logo.png'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                },
                {
                    id: 8,
                    imageUrl: require('../assets/logo.png'),
                    title: 'Picture 1',
                    description: 'Description for Picture 1.'
                }],
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
        }
    },
    components: { LoginModal }
};
</script>
<style scoped>
.photo-grid-container {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 100px; 
  color: #f5f5f5;
}

.photo-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #f5f5f5;
}

.photo-card {
  width: calc(33.33% - 10px);
  height: 250px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #f5f5f5;
}

.photo-img {
  width: 100%;
  height: 100%;
  max-width: 100%;
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

      
 