<template>
  <div class="container-fluid card p-3 common-style">
    <div class="card-header d-flex justify-content-end">
      <button class="btn btn-success" @click="openPopup">Update Information</button>
    </div>
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="info-item mb-2">
            <strong>Phone : <span class="tab-space"></span> </strong> {{ user.occupation }}
          </div>
          <div class="info-item">
            <strong>Email : <span class="tab-space"></span> </strong> {{ user.email }}
          </div>
        </div>
        <div class="col-md-6">
          <div class="info-item mb-2">
            <strong>Country : <span class="tab-space"></span> </strong> {{ user.country }}
          </div>
          <div class="info-item">
            <strong>User Role : <span class="tab-space"></span> </strong> {{ user.role }}
          </div>
        </div>
      </div>
      <div class="row" style="text-align: left;">
        <div class="col-md-12">
          <strong>Bio : <span class="tab-space"></span> </strong> {{ user.role }}
          <div class="bio">{{ user.bio }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openPopup() {
      console.log('Popup opened');
    },
  },
};
</script>

<style scoped>
.bio {
  font-size: 16px;
  font-weight: bold;
  font-family: "proxima-neva";
  color: rgb(27, 27, 27);
  text-align: left;
}

.common-style {
  border: 2px solid #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  border-radius: 8px;
  margin-right: 30px;
  overflow: hidden;
}
.info-item{
  text-align: left;
}
.tab-space {
  display: inline-block;
  width: 1em; 
}
</style>
