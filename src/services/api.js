import axios from 'axios';

const api = axios.create({
  // To use USB cable use IP Network address.
  baseURL: __DEV__
    ? 'http://192.168.15.13:8082/api/v1'
    : 'https://breakfastapp-server.herokuapp.com/api/v1',
});

export default api;
