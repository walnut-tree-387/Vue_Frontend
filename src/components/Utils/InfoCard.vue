<template>
    <div class="info-card">
      <div class="info-header">
        <div class="degree">{{ degree }}</div>
        <div class="institution">{{ institution }}</div>
        <div class="date">{{ startDate }} - {{ endDate }}</div>
        <div class="address">{{ address }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfoCard',
    props: {
      id: Number,
      degree: String,
      institution: String,
      startDate: String,
      endDate: String,
      address: String
    }
  };
  </script>
  
  <style scoped>
  .info-card {
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'proxima-neva';
    color: black;
    width: 100%;
  }
  
  .info-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: rgb(230, 225, 225);

  }
  
  .degree {
    font-weight: bold;
    margin: 4px;
  }
  
  .institution {
    margin: 4px;
  }
  
  .date {
    margin: 4px;
  }
  
  .address {
    margin: 4px;
  }
  </style>
  