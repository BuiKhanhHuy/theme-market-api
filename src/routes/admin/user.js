import express from 'express';
import { adminUserController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminUserController.getUsers)
router.get("/:id", adminUserController.getUserById)
router.post("/", adminUserController.addUser)
router.put("/:id", adminUserController.updateUserById)
router.delete('/:id', adminUserController.deleteUserById)
router.post("/delete-many", adminUserController.deleteUserWithIdList)

export default router;