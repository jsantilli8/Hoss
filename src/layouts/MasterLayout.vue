<template>
  <div class="layout">
    <!-- Menú lateral -->
    <SidebarMenu :menuItems="menuItems" />

    <!-- Contenido principal -->
    <div class="main-content">
      <HeaderBar :dolar="dolar" />
      <router-view /> <!-- Aquí se renderizan las vistas dinámicas -->
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import apiService from '@/services/externalServices/dolarPriceService';

export default {
  name: 'MasterLayout',
  components: { SidebarMenu, HeaderBar },
  data() {
    return {
      menuItems: [
        { name: 'Inicio', path: '/', icon: '🏠' },
        { name: 'Acciones', path: 'stock', icon: '✨' },
      ],
      dolar: {}, // Datos del dólar
    };
  },
  async created() {
    try {
      const response = await apiService.getFilteredDolarPrices();
      this.dolar = response.reduce((acc, item) => {
        acc[item.nombre] = { compra: item.compra, venta: item.venta };
        return acc;
      }, {});
    } catch (error) {
      console.error('Error al cargar los datos del dólar:', error);
    }
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: #f9fafb;
}
</style>
