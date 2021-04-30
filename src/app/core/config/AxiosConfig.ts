import axios from 'axios';

export const axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});
