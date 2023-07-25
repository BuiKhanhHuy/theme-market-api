import express from 'express';
import { adminProductTypeController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminProductTypeController.getProductTypes)
router.get("/:pk", adminProductTypeController.getProductTypeById)
router.post("/", adminProductTypeController.addProductType)
router.put("/:pk", adminProductTypeController.updateProductTypeById)
router.delete('/:pk', adminProductTypeController.deleteProductTypeById)
router.post("/delete-many", adminProductTypeController.deleteProductTypeWithIdList)

export default router;