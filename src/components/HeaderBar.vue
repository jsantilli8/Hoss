<template>
  <header class="header-bar">
    <div class="container">
      <!-- Cuadros de valores del dólar -->
      <div class="dollar-prices">
        <div class="price-box" v-for="(values, key) in dolar" :key="key">
          <p class="dollar-type">{{ key }}</p>
          <div class="price">
            <span class="price-buy">
              Compra: <span class="buy-value">${{ formatPrice(values.compra) }}</span>
            </span>
            <span class="price-sell">
              Venta: <span class="sell-value">${{ formatPrice(values.venta) }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    dolar: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(value) {
      return Number(value).toLocaleString('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
  },
};
</script>

<style scoped>
.header-bar {
  background: #ffffff;
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.dollar-prices {
  display: flex;
  gap: 15px;
}

.price-box {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 15px;
  text-align: center;
  min-width: 140px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.dollar-type {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #111827;
}

.price {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.price-buy .buy-value {
  color: #16a34a; /* Verde para compra */
  font-weight: bold;
}

.price-sell .sell-value {
  color: #dc2626; /* Rojo para venta */
  font-weight: bold;
}
</style>
