import express from 'express';
import { adminTagController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminTagController.getTags)
router.get("/:pk", adminTagController.getTagById)
router.post("/", adminTagController.addTag)
router.put("/:pk", adminTagController.updateTagById)
router.delete('/:pk', adminTagController.deleteTagById)
router.post("/delete-many", adminTagController.deleteTagWithIdList)

export default router;