<template>
  <aside class="sidebar">
    <ul>
      <li v-for="item in menuItems" :key="item.name">
        <router-link :to="item.path" class="menu-link">
          <span class="icon">{{ item.icon }}</span> {{ item.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SidebarMenu',
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 240px;
  background: #1e293b; /* Azul oscuro */
  color: #ffffff;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
}

ul {
  list-style: none;
  padding: 0;
}

.menu-link {
  color: #e5e7eb;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
}

.menu-link:hover {
  background: #334155; /* Azul más claro */
  color: #ffffff;
}

.icon {
  margin-right: 10px;
  font-size: 1.2rem;
}
</style>
