<template>
    <div class="films-container">
      <NavBar />
      <ContactSection />
    </div>
</template>
<script>
  import ContactSection from '../components/ContactSection.vue';
  import NavBar from '../components/NavBar.vue'
  
  export default {
    name: 'App',
    components: { NavBar, ContactSection }
  }
</script>