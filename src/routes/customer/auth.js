import express from 'express';
import status from 'http-status';
import { authController } from '../../controllers/customer';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.getRefreshToken);
router.delete('/logout', authController.logout);

export default router;
