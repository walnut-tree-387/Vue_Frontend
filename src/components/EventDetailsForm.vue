<template>
    <div class="event-details-box">
        <a @click="closePopup"><span class="close"><font-awesome-icon icon="fa-solid fa-close" class="close-icon" /></span></a>
        <form>
          <h3>Event Details</h3> 
          <DatePicker />
          <input v-model="address" type="text" required class="input-field" placeholder="Enter your address">
          <br/>
          <button class="book-event-button" type="submit" @click="bookEvent()">Book event</button>
        </form>
    </div>
</template>
<script>
    import DatePicker from '../components/Utils/DatePicker.vue';
    export default {
        components : {DatePicker},
        props : {
        },
        data() {
            return {
                showPopup: false,
                address: ''

            };
        },
        methods: {
            closePopup() {
                this.showPopup = false;
                this.$emit('event-popup-closed');
            },
        }
    };
</script>
<style>
.close-icon {
  width: 30px;
  height: 30px;
  background-color: rgb(167, 166, 166);
  border-radius: 20%; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: red;
  position: absolute;
  top: 10px; 
  right: 10px;
}

.event-details-box {
  position: relative;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto;
}
.input-field {
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #dddddd;
  background-color: white;
  outline: none;
  width: 580px;
  height: 50px;
}
.book-event-button{
  background-color: #33dd11;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  font-family: 'proxima_neva';
}
</style>