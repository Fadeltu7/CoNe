<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/transactions">Transactions</router-link></li>
      <li><router-link to="/settings">Settings</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  background-color: #f4f4f4;
  width: 250px;
  padding: 20px;
}

ul {
  list-style-type: none;
}

li {
  margin: 15px 0;
}

a {
  color: #333;
  text-decoration: none;
}
</style>
