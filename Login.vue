<!-- src/views/Login.vue -->
<template>
    <div class="auth-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
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
      handleLogin() {
        // Handle login logic here
        alert("Login successful!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling for Login */
  </style>
  