import axios from 'axios';

const apiClient = axios.create({
    baseURL:'http://localhost:5000/api/users',timeout:1000,
});

export default{
    getUsers(){
        return apiClient.get('/');
    },
    getUserById(id){
        return apiClient.get('/{id}');
    }
}
// const apiClient = axios.create({
//   baseURL: 'http://localhost:5000/api/cars',
//   timeout: 10000,
// });

// export default {
//   getCars() {
//     return apiClient.get('/');
//   },
//   getCarById(id) {
//     return apiClient.get(`/${id}`);
//   },
// };