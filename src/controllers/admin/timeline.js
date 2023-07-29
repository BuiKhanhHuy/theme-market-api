import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminTimelineValidator } from '../../validators/admin';
import { adminTimelineService } from '../../services/admin';
import { timelineFilter } from '../../filters/admin/timelineFilter';

export const getTimelines = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = timelineFilter(queryParams);

  const response = await adminTimelineService.getTimelines(filter);
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

  const { error, value } =
    adminTimelineValidator.addTimelineSchema.validate(bodyData);
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
  const bodyData = req.body;

  const { error, value } =
    adminTimelineValidator.updateTimelineSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminTimelineService.updateTimelineById(pk, value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteTimelineById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminTimelineService.deleteTimelineById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteTimelineWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminTimelineValidator.deleteTimelineWithIdListSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminTimelineService.deleteTimelineWithIdList(value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
