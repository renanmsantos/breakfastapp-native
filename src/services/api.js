import axios from 'axios';

const api = axios.create({
  // To use USB cable use IP Network address.
  baseURL: 'http://10.0.3.2:8080/server-java/api/v1',
});

export default api;
