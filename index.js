import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';      
import Register from '../views/Register.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login },    
  { path: '/register', component: Register }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
