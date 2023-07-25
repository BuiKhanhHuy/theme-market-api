import express from 'express';
import { adminPaymentTypeController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminPaymentTypeController.getPaymentTypes)
router.get("/:pk", adminPaymentTypeController.getPaymentTypeById)
router.post("/", adminPaymentTypeController.addPaymentType)
router.put("/:pk", adminPaymentTypeController.updatePaymentTypeById)
router.delete('/:pk', adminPaymentTypeController.deletePaymentTypeById)
router.post("/delete-many", adminPaymentTypeController.deletePaymentTypeWithIdList)

export default router;