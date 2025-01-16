import axios from 'axios';

const dolarPriceService = {
  async getFilteredDolarPrices() {
    try {
      const response = await axios.get('https://dolarapi.com/v1/dolares');
      const filteredData = response.data.filter(item => 
        ['Oficial', 'Blue', 'Bolsa', 'Contado con liquidación'].includes(item.nombre)
      );
      return filteredData;
    } catch (error) {
      console.error('Error al obtener los precios del dólar:', error.message);
      throw error;
    }
  },
};

export default dolarPriceService;
