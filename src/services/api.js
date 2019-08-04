import axios from 'axios';

const api = axios.create({
  // To use USB cable use IP Network address.
  baseURL: 'http://192.168.15.13:8080/server-java/api/v1',
});

export default api;
