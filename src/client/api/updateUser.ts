import axios from 'axios';
import { User } from '../types';

const API_URL = 'http://localhost:6017/api';

export const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
  const response = await axios.put(`${API_URL}/users/${id}`, userData);
  return response.data;
};
