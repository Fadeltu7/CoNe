<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* Global Styling */
body {
  font-family: "Poppins", sans-serif;
  background-color: #f4f7f6;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Center container */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
</style>
