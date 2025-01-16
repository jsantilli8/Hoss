import { createRouter, createWebHistory } from 'vue-router';

// Importa solo el layout y las vistas necesarias
import MasterLayout from '@/layouts/MasterLayout.vue';
import DolarPrices from '@/components/DolarPrices.vue';
import Stocks from '@/components/Stocks.vue'; 

const routes = [
  {
    path: '/',
    component: MasterLayout, // Layout principal que incluye el menú lateral y la barra superior
    children: [
      { path: '',component: DolarPrices },
      { path: 'stock', component: Stocks },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
