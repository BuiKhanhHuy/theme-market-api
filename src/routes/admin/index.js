import express from 'express';
import verifyToken from '../../middlewares/verifyToken';
import { verifyAdminRole } from '../../middlewares/verifyRole';

import adminUserRoute from './user';
import adminProfessionRoute from './profession';
import adminApproachRoute from './approach';
import adminEstimateBudgetRoute from './estimateBudget';
import adminServicePackageRoute from './servicePackage';
import adminTimelineRoute from './timeline';
import adminCategoryRoute from './category';
import adminProductTypeRoute from './productType';
import adminTagRoute from './tag';
import adminPaymentTypeRoute from './paymentType';
import adminPaymentStatusRoute from './paymentStatus';
import adminContactTypeRoute from './contactType';


const router = express.Router();

router.use([verifyToken, verifyAdminRole]);
router.use('/users', adminUserRoute);
router.use('/professions', adminProfessionRoute);
router.use('/approaches', adminApproachRoute);
router.use('/estimate-budgets', adminEstimateBudgetRoute);
router.use('/service-packages', adminServicePackageRoute);
router.use('/timelines', adminTimelineRoute);
router.use('/categories', adminCategoryRoute);
router.use('/product-types', adminProductTypeRoute);
router.use('/tags', adminTagRoute);
router.use('/payment-types', adminPaymentTypeRoute);
router.use('/payment-statuses', adminPaymentStatusRoute);
router.use('/contact-types', adminContactTypeRoute);


export default router;
