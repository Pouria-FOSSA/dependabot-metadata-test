import axios from 'axios';
import { User } from '../types';

const API_URL = 'http://localhost:6017/api';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
