<template>
    <div class="films-container">
      <NavBar />
      <PhotoGrid 
        :mode="'video'"
      />
      <ContactSection />
    </div>
</template>
<script>
  import ContactSection from '../components/ContactSection.vue';
  import NavBar from '../components/NavBar.vue'
import PhotoGrid from './PhotoGrid.vue';
  
  export default {
    name: 'App',
    components: { NavBar, ContactSection, PhotoGrid }
  }
</script>