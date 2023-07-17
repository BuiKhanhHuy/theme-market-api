import express from 'express';
import { userController } from '../../controllers/customer';

const router = express.Router();

router.get('/', userController.getUser);
router.get('/:id', userController.getUserById)
router.post('/', userController.addUser);

export default router;
