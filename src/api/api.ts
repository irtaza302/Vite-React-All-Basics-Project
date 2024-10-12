import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const createUser = async (userData: { name: string; email: string }) => {
  const response = await api.post('/users', userData);
  return response.data;
};
