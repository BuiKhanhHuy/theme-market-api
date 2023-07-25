import express from 'express';
import { adminPaymentStatusController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminPaymentStatusController.getPaymentStatuses)
router.get("/:pk", adminPaymentStatusController.getPaymentStatusById)
router.post("/", adminPaymentStatusController.addPaymentStatus)
router.put("/:pk", adminPaymentStatusController.updatePaymentStatusById)
router.delete('/:pk', adminPaymentStatusController.deletePaymentStatusById)
router.post("/delete-many", adminPaymentStatusController.deletePaymentStatusWithIdList)

export default router;