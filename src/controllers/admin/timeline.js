import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminTimelineValidator } from '../../validators/admin';
import { adminTimelineService } from '../../services/admin';

export const getTimelines = tryCatch(async (req, res) => {
  const response = await adminTimelineService.getTimelines();

  return dataResponse(res, {
    data: response,
  });
});

export const getTimelineById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminTimelineService.getTimelineById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Timeline not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addTimeline = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } = adminTimelineValidator.addTimelineSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminTimelineService.addTimeline(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateTimelineById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteTimelineById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteTimelineWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
