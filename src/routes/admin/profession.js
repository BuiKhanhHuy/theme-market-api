import express from 'express';
import { adminProfessionController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminProfessionController.getProfessions)
router.get("/:pk", adminProfessionController.getProfessionById)
router.post("/", adminProfessionController.addProfession)
router.put("/:pk", adminProfessionController.updateProfessionById)
router.delete('/:pk', adminProfessionController.deleteProfessionById)
router.post("/delete-many", adminProfessionController.deleteProfessionWithIdList)

export default router;