import axios from 'axios';

const baseService = axios.create({
  baseURL: 'https://api.quotable.io',
});

export default baseService;
