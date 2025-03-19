import { Request, Response } from 'express';
import { UserModel } from '../models/user';

export const updateUser = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    
    if (!name && !email) {
      res.status(400).json({ error: 'At least one field (name or email) is required' });
      return;
    }
    
    const updatedUser = UserModel.update(id, { name, email });
    
    if (!updatedUser) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};