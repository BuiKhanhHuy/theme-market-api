import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.get('/', userController.getUser);
router.post('/', userController.addUser);

export default router;
