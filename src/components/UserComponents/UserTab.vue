<template>
  <div class="tab-bar">
    <div class="tab-buttons">
      <button
        :class="{ active: activeTab === 'events' }"
        @click="changeTab('events')"
      >
        Events Hosted
      </button>
      <button
        :class="{ active: activeTab === 'workexperience' }"
        @click="changeTab('workexperience')"
      >
        Work Experience
      </button>
      <button
        :class="{ active: activeTab === 'education' }"
        @click="changeTab('education')"
      >
        Education History
      </button>
      <div v-if="getActiveTabItems.length === 0" class="empty-state">
        <button @click="add()"><font-awesome-icon icon="plus" /> Add</button>
      </div>
    </div>
    <div class="tab-contents">
      <div class="card-container" v-if="activeTab === 'workexperience'">
        <div v-for="experience in experiences" :key="experience.id">
          <InfoCard
            :degree="experience.degree"
            :institution="experience.institution"
            :startDate="experience.startDate"
            :endDate="experience.endDate"
            :address="experience.address"
          />
        </div>
        <div v-if="experiences.length === 0" class="empty-state-text">
          No work experience found.
        </div>
      </div>
      <div class="card-container" v-if="activeTab === 'events'">
        <div class="card-container" v-for="event in events" :key="event.id">
          <InfoCard
            :degree="event.degree"
            :institution="event.institution"
            :startDate="event.startDate"
            :endDate="event.endDate"
            :address="event.address"
          />
        </div>
        <div v-if="events.length === 0" class="empty-state-text">
          No events found.
        </div>
      </div>
      <div class="card-container" v-if="activeTab === 'education'">
        <div v-for="education in educations" :key="education.id">
          <InfoCard
            :degree="education.degree"
            :institution="education.institution"
            :startDate="education.startDate"
            :endDate="education.endDate"
            :address="education.address"
          />
        </div>
        <div v-if="educations.length === 0" class="empty-state-text">
          No education history found.
        </div>
      </div>
    </div>
    <UserHistoryModal
      :title="modalTitle"
      :initialData="setModalObject()"
      :visible="isModalVisible"
      @submit="update"
      @close="hideModal"
    />
  </div>
</template>

<script>
import InfoCard from "../Utils/InfoCard.vue";
import UserHistoryModal from "./UserHistoryModal.vue";
export default {
  components: { InfoCard, UserHistoryModal },
  data() {
    return {
      activeTab: "workexperience",
      modalTitle: "",
      isModalVisible: false,
      experiences: [],
      educations: [],
      events: [],
    };
  },
  computed: {
    getActiveTabItems() {
      if (this.activeTab === "workexperience") return this.experiences;
      if (this.activeTab === "education") return this.educations;
      return this.events;
    },
  },
  mounted() {
    this.setModalTitle();
  },
  methods: {
    update(value) {
      if (this.activeTab === "workexperience") this.experiences.push(value);
      else if (this.activeTab === "education") this.educations.push(value);
      else this.events.push(value);
    },
    hideModal() {
      this.isModalVisible = false;
    },
    changeTab(tab) {
      this.activeTab = tab;
      this.setModalTitle();
    },
    add() {
      this.isModalVisible = true;
    },
    setModalTitle() {
      if (this.activeTab === "workexperience") this.modalTitle = "Add a work experience";
      if (this.activeTab === "education") this.modalTitle = "Add an education history";
      else this.modalTitle = "Host an event";
    },
    setModalObject() {
      if (this.activeTab === "workexperience") {
        return {
          companyName: "",
          jobTitle: "",
          startDate: null,
          endDate: null,
        };
      } else if (this.activeTab === "education") {
        return {
          degreeName: "",
          schoolName: "",
          startDate: null,
          endDate: null,
        };
      } else {
        return {
          eventName: "",
          eventDate: null,
          location: "",
        };
      }
    },
  },
};
</script>

<style scoped>
.tab-bar {
  margin: 30px;
}
.tab-contents {
  background-color: transparent;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 20px;
}
.tab-buttons {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}
.empty-state {
  margin-left: auto;
  padding-left: 20px;
}
.empty-state button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
}
.empty-state button:hover {
  background-color: #0056b3;
}
.empty-state-text {
  font-family: "proxima_neva";
  color: black;
  text-align: center;
  margin-top: 20px;
}
.tab-buttons button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "proxima_neva";
  border: 4px solid #ffffff;
}

.tab-buttons button.active {
  background-color: #007bff;
  color: white;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
