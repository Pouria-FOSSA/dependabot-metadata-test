import { Request, Response } from 'express';
import { UserModel } from '../models/user';

export const getUsers = (req: Request, res: Response): void => {
  try {
    const users = UserModel.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUserById = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    
    const user = UserModel.findById(id);
    
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    
    res.json(user);
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};