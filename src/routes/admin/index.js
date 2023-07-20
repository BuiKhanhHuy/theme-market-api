import express from 'express';
import adminUserRoute from './user';
import verifyToken from '../../middlewares/verifyToken';
import { verifyAdminRole } from '../../middlewares/verifyRole';

const router = express.Router();

router.use(verifyToken);
router.use(verifyAdminRole);
router.use('/users', adminUserRoute);

export default router;
