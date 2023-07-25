import express from 'express';
import { adminApproachController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminApproachController.getApproaches)
router.get("/:pk", adminApproachController.getApproachById)
router.post("/", adminApproachController.addApproach)
router.put("/:pk", adminApproachController.updateApproachById)
router.delete('/:pk', adminApproachController.deleteApproachById)
router.post("/delete-many", adminApproachController.deleteApproachWithIdList)

export default router;