import express from 'express';
import adminAuthRoute from './auth'
import adminUserRoute from './user'

const router = express.Router();

// router.use('/auth', adminAuthRoute);
// router.use('/users', adminUserRoute);

export default router;
