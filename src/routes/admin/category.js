import express from 'express';
import { adminCategoryController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminCategoryController.getCategories)
router.get("/:pk", adminCategoryController.getCategoryById)
router.post("/", adminCategoryController.addCategory)
router.put("/:pk", adminCategoryController.updateCategoryById)
router.delete('/:pk', adminCategoryController.deleteCategoryById)
router.post("/delete-many", adminCategoryController.deleteCategoryWithIdList)

export default router;