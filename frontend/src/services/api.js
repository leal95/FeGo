import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.43.33:3333'
});

export default api;