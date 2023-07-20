import express from 'express';
import { customerUserController } from '../../controllers/customer';

const router = express.Router();

router.get('/', customerUserController.getUser);
router.get('/:id', customerUserController.getUserById)
router.post('/', customerUserController.addUser);

export default router;
