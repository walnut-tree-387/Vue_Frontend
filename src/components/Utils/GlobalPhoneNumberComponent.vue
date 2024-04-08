<template>
    <div class="col-md-6 global-country-dropdown dropdown-right">
      <b-dropdown :text="selectedCountryCode" class="country-code-dropdown">
        <b-dropdown-item  @click="setSelectedCountryCode(countryCodePhone)" v-for="(countryCodePhone, index) in countryCodePhones" :key="index">{{ countryCodePhone }}</b-dropdown-item>
      </b-dropdown>
      <input v-model="selectedPhoneNumber" class="phone-number-input form-control"  @input="setPhoneNumber" type="phone" placeholder="Your Phone number">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        countryCodePhones: [
          "+880", "+776", "+654"
        ],
        selectedCountryCode: 'Select Country Code',
        selectedPhoneNumber: '',
      };
    },
    methods:{
      setSelectedCountryCode(value){
        this.selectedCountryCode = value;
      },
      setPhoneNumber(event){
        this.selectedPhoneNumber = event.target.value; 
        this.$emit('PhoneNumberEvent', this.selectedCountryCode + this.selectedPhoneNumber);
      }
    }
  };
  </script>
  
  <style scoped>
  .global-country-dropdown {
    display: flex;
    align-items: center;
  }
  .country-code-dropdown{
    background-color: rgb(196, 196, 13);
  }
  
  .phone-number-input {
    flex: 1;
    border: none !important;
    border: 1px solid black;
    border-radius: 2px;
    padding: 6px 12px;
  }
  
  /* Adjusting Bootstrap styles */
  .global-country-dropdown .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .global-country-dropdown .btn:first-child {
    border-right: none;
  }
  </style>
  