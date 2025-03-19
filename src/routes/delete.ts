import { Request, Response } from 'express';
import { UserModel } from '../models/user';

export const deleteUser = (req: Request, res: Response): void => {
  try {
    const { id } = req.params;
    
    const deleted = UserModel.delete(id);
    
    if (!deleted) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};