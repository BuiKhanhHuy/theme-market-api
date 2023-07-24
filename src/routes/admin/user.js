import express from 'express';
import { adminUserController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminUserController.getUsers)
router.get("/:pk", adminUserController.getUserById)
router.post("/", adminUserController.addUser)
router.put("/:pk", adminUserController.updateUserById)
router.delete('/:pk', adminUserController.deleteUserById)
router.post("/delete-many", adminUserController.deleteUserWithIdList)

export default router;