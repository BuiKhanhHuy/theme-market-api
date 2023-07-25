import express from 'express';
import { adminContactTypeController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminContactTypeController.getContactTypes)
router.get("/:pk", adminContactTypeController.getContactTypeById)
router.post("/", adminContactTypeController.addContactType)
router.put("/:pk", adminContactTypeController.updateContactTypeById)
router.delete('/:pk', adminContactTypeController.deleteContactTypeById)
router.post("/delete-many", adminContactTypeController.deleteContactTypeWithIdList)

export default router;