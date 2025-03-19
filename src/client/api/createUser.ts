import axios from 'axios';
import { User } from '../types';

const API_URL = 'http://localhost:6017/api';

export const createUser = async (userData: Partial<User>): Promise<User> => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

