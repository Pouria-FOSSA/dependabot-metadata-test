import axios from 'axios';
import { User } from './types';

const API_URL = 'http://localhost:6017/api';

// Fetch all users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

// Fetch a single user by ID
export const fetchUser = async (id: string): Promise<User> => {
  const response = await axios.get(`${API_URL}/users/${id}`);
  return response.data;
};

// Create a new user
export const createUser = async (userData: Partial<User>): Promise<User> => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};

// Update an existing user
export const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
  const response = await axios.put(`${API_URL}/users/${id}`, userData);
  return response.data;
};

// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/users/${id}`);
};
