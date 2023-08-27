<template>
  <div class="chat-input">
    <input
      type="text"
      v-model="value"
      @input="$emit('input', value)"
      :placeholder="placeholder"
      class="input-field"
    />
    <div class="send-icon">
      <icon name="paper-plane" class="send-svg" />
    </div>
  </div>
</template>

<script>
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/paper-plane";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      value: "",
      placeholder: "Enter your message",
    };
  },
};
</script>

<style scoped>
.chat-input {
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  margin-left: 200px; 
  margin-right: 200px;/* Adjust the margin as needed */
  background-color: #eeeded;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-field {
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  outline: none;
}

.send-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.send-svg {
  width: 20px;
  height: 20px;
  fill: #2bff00; /* Adjust icon color as needed */
}
</style>
