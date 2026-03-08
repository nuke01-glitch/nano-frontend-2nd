import axios from 'axios';

const api = axios.create({
  // Use your live Render URL here
  baseURL: 'https://nano-backend-2nd.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;