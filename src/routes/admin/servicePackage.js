import express from 'express';
import { adminServicePackageController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminServicePackageController.getServicePackages)
router.get("/:pk", adminServicePackageController.getServicePackageById)
router.post("/", adminServicePackageController.addServicePackage)
router.put("/:pk", adminServicePackageController.updateServicePackageById)
router.delete('/:pk', adminServicePackageController.deleteServicePackageById)
router.post("/delete-many", adminServicePackageController.deleteServicePackageWithIdList)

export default router;