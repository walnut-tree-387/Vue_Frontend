<template>
  <div class="info-card card mb-4 p-3">
    <div class="card-body">
      <div class="info-header">
        <div class="degree">{{ degree }}</div>
        <div class="institution">{{ institution }}</div>
        <div class="date">{{ startDate }} - {{ endDate }}</div>
        <div class="address">{{ address }}</div>
      </div>
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'proxima-neva';
  color: black;
  width: 100%;
  max-width: 1000px; 
  height: 250px; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.info-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: rgb(230, 225, 225);
  padding: 15px;
  border-radius: 8px;
  flex-grow: 1;
}

.degree,
.institution,
.date,
.address {
  margin: 4px 0;
}
</style>
