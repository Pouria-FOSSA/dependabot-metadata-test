import axios from 'axios';
import { User } from '../types';

const API_URL = 'http://localhost:6017/api';

export const fetchUser = async (id: string): Promise<User> => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};
