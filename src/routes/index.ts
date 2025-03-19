import { Router } from 'express';
import { createUser } from './create';
import { getUsers, getUserById } from './read';
import { updateUser } from './update';
import { deleteUser } from './delete';

const router = Router();

// User routes
router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;