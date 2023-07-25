import express from 'express';
import { adminEstimateBudgetController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminEstimateBudgetController.getEstimateBudgets)
router.get("/:pk", adminEstimateBudgetController.getEstimateBudgetId)
router.post("/", adminEstimateBudgetController.addEstimateBudget)
router.put("/:pk", adminEstimateBudgetController.updateEstimateBudgetById)
router.delete('/:pk', adminEstimateBudgetController.deleteEstimateBudgetById)
router.post("/delete-many", adminEstimateBudgetController.deleteEstimateBudgetWithIdList)

export default router;