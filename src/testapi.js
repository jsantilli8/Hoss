import axios from 'axios';

async function testApi() {
  try {
    const response = await axios.get('https://dolarapi.com/v1/dolares', {
      headers: { 'Cache-Control': 'no-cache' },
    });
    console.log('Prueba directa del API:', response.data);
  } catch (error) {
    console.error('Error en la prueba del API:', error.message);
  }
}

testApi();
