import { Router } from 'express';
import { validateSchema } from '../middleware/validate.middleware.js';
import {
  login,
  logout,
  registerNewUser,
  verifyToken,
  getAllClients,
  editCurrentUser,
  editPasswordByEmail,
} from '../controllers/user.controller.js';
import { loginSchema, registerSchema } from '../schemas/user.schema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), registerNewUser);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.post('/verify', verifyToken);

router.get('/', getAllClients);

router.patch('/edit/:id', editCurrentUser);

router.post('/forgot-password', editPasswordByEmail);

export default router;
