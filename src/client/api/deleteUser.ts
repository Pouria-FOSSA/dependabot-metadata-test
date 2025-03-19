import axios from 'axios';
import { User } from '../types';

const API_URL = 'http://localhost:6017/api';

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/users/${id}`);
};
