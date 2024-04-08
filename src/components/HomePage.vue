<template>
   <div> 
    <NavBar />
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
    export default {
    name: 'App',
    components: {NavBar, PhotoGrid, ContactSection,}
}
</script>