import { Request, Response } from 'express';
import { UserModel } from '../models/user';

export const createUser = (req: Request, res: Response): void => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      res.status(400).json({ error: 'Name and email are required' });
      return;
    }
    
    const newUser = UserModel.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};