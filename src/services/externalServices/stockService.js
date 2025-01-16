import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/cars',
  timeout: 10000,
});

export default {
  getCars() {
    return apiClient.get('/');
  },
  getCarById(id) {
    return apiClient.get(`/${id}`);
  },
};