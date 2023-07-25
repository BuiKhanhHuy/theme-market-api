import express from 'express';
import { adminTimelineController } from '../../controllers/admin';

const router = express.Router();

router.get("/", adminTimelineController.getTimelines)
router.get("/:pk", adminTimelineController.getTimelineById)
router.post("/", adminTimelineController.addTimeline)
router.put("/:pk", adminTimelineController.updateTimelineById)
router.delete('/:pk', adminTimelineController.deleteTimelineById)
router.post("/delete-many", adminTimelineController.deleteTimelineWithIdList)

export default router;