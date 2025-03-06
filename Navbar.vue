<template>
  <nav class="navbar">
    <h1>Finance Tracker</h1>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #007bff;
  color: white;
  padding: 15px 20px;
}

.navbar ul {
  list-style: none;
  display: flex;
}

.navbar ul li {
  margin-left: 20px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.navbar ul li a:hover {
  text-decoration: underline;
}
</style>
