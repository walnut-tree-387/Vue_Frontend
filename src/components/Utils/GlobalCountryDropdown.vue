<template>
  <div class="col-md-6 dropdown-right country-dropdown">
    <b-dropdown v-model="selectedCountry" :text="selectedCountry">
      <b-dropdown-item
        @click="setSelectedCountry(country)"
        v-for="(country, index) in countries" 
        :key="index"
      >
        {{ country }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: 'Select your Country',
      countries: ['BAN', 'AUS', 'IND'] 
    };
  },
  methods:{
    setSelectedCountry(value){
      this.selectedCountry = value;
      this.$emit('CountryEvent', this.selectedCountry);
    }
  }
};
</script>

<style>
.country-dropdown{
  display: flex;
  margin-bottom: 3vh;
}
</style>
