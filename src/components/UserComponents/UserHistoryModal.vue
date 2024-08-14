<template>
    <div v-if="visible" class="modal-backdrop">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3" v-for="(value, key) in formData" :key="key">
                <label :for="key" class="form-label">{{ formatLabel(key) }}</label>
                <input
                  v-if="key !== 'bio'"
                  :type="inputType(key)"
                  class="form-control"
                  :id="key"
                  v-model="formData[key]"
                />
                <textarea
                  v-if="key === 'bio'"
                  class="form-control"
                  :id="key"
                  v-model="formData[key]"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      initialData: {
        type: Object,
        required: true,
      },
      visible: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        formData: { ...this.initialData },
      };
    },
    methods: {
      formatLabel(key) {
        return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
      },
      inputType(key) {
        return key === 'email' ? 'email' : 'text';
      },
      submitForm() {
        this.$emit('submit', this.formData);
        this.closeModal();
      },
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1050;
  }
  
  .modal-dialog {
    position: relative;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.9);
    padding: 20px;
    margin: 0 auto;
  }
  
  .modal-content {
    background: fixed;
    background-color: #050505; 
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
  }
  
  .modal-header {
    display: flex;
    color: #faf9f9;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  
  .modal-title {
    font-size: 1.5rem;
    font-weight: 500;
  }
  
  .btn-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
  }
  
  .form-label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-control {
    padding: 10px;
    font-size: 1rem;
  }
  </style>
  