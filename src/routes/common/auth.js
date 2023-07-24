import express from 'express';
import verifyToken from '../../middlewares/verifyToken';
import { verifyAdminRole } from '../../middlewares/verifyRole';
import { commonAuthController } from '../../controllers/common';

const router = express.Router();

router.post('/token', commonAuthController.getToken);
router.post('/refresh-token', commonAuthController.getRefreshToken);
router.post('/revoke-token', commonAuthController.revokerToken);
router.get(
  '/current-user',
  [verifyToken, verifyAdminRole],
  commonAuthController.getCurrentUser
);

export default router;
