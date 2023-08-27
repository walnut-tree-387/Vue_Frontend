<template>
    <div class="user-info">
        <div class="bio">{{ user.bio }}</div>
        <div class="completed-events">Events Completed: {{ user.completedEvents }}</div>
    </div>
  </template>
  
  <script>
  
  export default {
    components: {
    },
    data() {
      return {
        user : {
            completedEvents : 21,
            bio : "I have experience of performance optimization techniques, caching, and versioning for static resources. Understanding of development lifecycle, including working experience with Git/GitFlow, Pull Requests and Code Reviews. Experience with Node.JS and Cloud-based architectures. Experience with Scrum methodology and a team player. Experience in setup and maintaining continuous integration & delivery (Jenkins / Pipelines/ TravisCI)."
        }
      };
    }
  };
  </script>
  
<style>
.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    background-color: transparent;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    margin-right: 30px;
}
.bio {
  font-size: 16px;
  font-weight: bold;
  font-family: 'proxima-neva';
  color: rgb(27, 27, 27);
  text-align: left;
}

.completed-events {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'proxima-neva';
  color: rgb(27, 27, 27);
}

  </style>
  