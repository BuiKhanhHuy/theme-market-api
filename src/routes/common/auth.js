import express from 'express';
import { commonAuthController } from '../../controllers/common';

const router = express.Router();

router.post("/token", commonAuthController.getToken)
router.post("/refresh-token", commonAuthController.getRefreshToken)
router.post("/revoke-token", commonAuthController.revokerToken)

export default router;
