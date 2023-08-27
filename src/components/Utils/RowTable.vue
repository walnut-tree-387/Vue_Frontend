<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Review</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.review }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RowTable',
  data() {
    return {
      items: [
        { id: 1, title: 'Item 1', status: 'Active', review: 'Good' },
        { id: 2, title: 'Item 2', status: 'Pending', review: 'Needs improvement' },
        { id: 3, title: 'Item 1', status: 'Active', review: 'Good' },
        { id: 4, title: 'Item 2', status: 'Pending', review: 'Needs improvement' },
        { id: 5, title: 'Item 1', status: 'Active', review: 'Good' },
        { id: 6, title: 'Item 2', status: 'Pending', review: 'Needs improvement' },
        // Add more items here...
      ]
    };
  }
};
</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  width: 100%;
  background-color: transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  border-radius: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th, td {
  padding: 8px;
  border: 5px solid #fffdfd;
  font-family: 'proxima-neva';
  text-align: left;
  margin: 0;
  font-size: 16px;
  height: 40px;
  background-color: rgb(230, 225, 225);
}

th {
  font-weight: bold;
}

.table-container th,
.table-container td {
  color: black;
}
</style>
