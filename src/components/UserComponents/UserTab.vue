<template>
    <div class="tab-bar">
        <div class="tab-buttons">
            <button :class="{ active: activeTab === 'events' }" @click="changeTab('events')">Events Hosted</button>
            <button :class="{ active: activeTab === 'workexperience' }" @click="changeTab('workexperience')">Work Experience</button>
            <button :class="{ active: activeTab === 'education' }" @click="changeTab('education')">Education</button>
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
            </div>
            <div class="card-container" v-if="activeTab === 'events'">
                <div class="card-container" v-for="experience in experiences" :key="experience.id">
                    <InfoCard 
                        :degree="experience.degree"
                        :institution="experience.institution"
                        :startDate="experience.startDate"
                        :endDate="experience.endDate"
                        :address="experience.address"
                    />
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
            </div>
        </div>
    </div>
</template>
<script>
  import InfoCard from '../Utils/InfoCard.vue';
  export default {
        components: {InfoCard},
        data() {
            return {
                activeTab: 'workexperience',
                experiences : [
                    {
                        id: 1,
                        degree : "Software Engineering Intern",
                        institution : "Tech Company Inc.",
                        startDate: "Jun 2020",
                        endDate: "Aug 2020",
                        address: "456 Tech Avenue, Tech City"
                    },
                    {
                        id: 2,
                        degree : "Software Engineering Intern",
                        institution : "Tech Company Inc.",
                        startDate: "Jun 2020",
                        endDate: "Aug 2020",
                        address: "456 Tech Avenue, Tech City"
                    }
                ], 
                educations : [
                {
                        id: 1,
                        degree : "B.Sc",
                        institution : "Jahangirnagar University",
                        startDate: "Jun 2020",
                        endDate: "Aug 2020",
                        address: "Savar, Dhaka City"
                    },
                    {
                        id: 2,
                        degree : "M.Sc",
                        institution : "Jahangirnagar University",
                        startDate: "Jun 2020",
                        endDate: "Aug 2020",
                        address: "456 Tech Avenue, Tech City"
                    }
                ]
            };
        },
        methods: {
            changeTab(tab) {
                this.activeTab = tab;
            },
        }
    };
</script>
<style scoped>
.tab-bar{ 
   margin: 30px; 
}
.tab-contents{
    background-color: transparent;
    display: flex;
    flex-direction: column-reverse;
    margin-right: 40px;
}
.tab-buttons {
  display: flex;
  align-items: center;
  width: 100%;
}

.tab-buttons button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'proxima_neva';
  border: 4px solid #ffffff;
  
}

.tab-buttons button.active {
  background-color: #007bff;
  color: white;
}
.card-container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

</style>