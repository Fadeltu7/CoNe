<!-- src/views/Register.vue -->
<template>
    <div class="auth-container">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleRegister() {
        // Handle registration logic here
        alert("Registered successfully!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling for Register */
  </style>
  