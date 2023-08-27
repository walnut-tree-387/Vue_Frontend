<template>
    <div class="datepicker-holder">
        <form @submit.prevent="submit" class="form-horizontal">
        <div class="form-group row">
            <div class="col-md-9">
            <date-picker
                v-model="form.dob"
                name="form.dob"
                format="YYYY-MM-DD"
                date-format="YYYY-MM-DD"
                class="custom-date-picker"
                type="date"
                placeholder="Select a date"
                confirm
            ></date-picker>
            <div class="error" v-if="form.errors.has('dob')">{{ form.errors.get("dob") }}</div>
            </div>
        </div>
    </form>
    </div>
  </template>
  
  <script>
  import Form from "vform";
  import axios from "axios";
  import MockAdapter from "axios-mock-adapter";
  import DatePicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";
  
  // Mock the response
  const mockAdapter = new MockAdapter(axios);
  mockAdapter.onPost("/foo").reply(config => {
    const data = JSON.parse(config.data);
    if (data.dob) {
      return [200, {}];
    }
  
    return [
      422,
      {
        dob: ["You must pick a value"]
      }
    ];
  });
  
  export default {
    components: {
      DatePicker
    },
    data() {
      return {
        form: new Form({
          dob: ""
        })
      };
    },
    methods: {
      submit() {
        this.form.post("/foo");
      },
      reset() {
        this.form.clear();
        this.form.reset();
      }
    }
  };
  </script>
  
  <style>
  .error {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
  }

/* Adjust the width of the pop-up window */
.mx-datepicker-main {
  width: 500px;
  background-color: rgb(245, 238, 238);
}

.mx-datepicker-popup {
  width: 500px;
  height: 40%;
}
.custom-date-picker{
    width: 600px;
    margin : 15px;
}
.mx-calendar{
  width: 100%;
  height: 100%;
  font-family: 'proxima-neva';
  color: black;
  font-size: 18;
  font-weight: bolder;
}
.mx-datepicker-footer{
  margin-top: 80px;
  margin-right: 5px;
}
.mx-datepicker-btn-confirm{
  background-color: rgb(148, 148, 148);
  font-family: 'proxima-neva';
  font-weight: bold;
  color: black;
}
  </style>
  