import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminApproachValidator } from '../../validators/admin';
import { adminApproachService } from '../../services/admin';
import { approachFilter } from '../../filters/admin/approachFilter';

export const getApproaches = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = approachFilter(queryParams);

  const response = await adminApproachService.getApproaches(filter);
  return dataResponse(res, {
    data: response,
  });
});

export const getApproachById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminApproachService.getApproachById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Approach not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addApproach = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminApproachValidator.addProfessionSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminApproachService.addApproach(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateApproachById = tryCatch(async (req, res) => {
  const { pk } = req.params;
  const bodyData = req.body;

  const { error, value } =
    adminApproachValidator.updateApproachSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminApproachService.updateApproachById(pk, value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteApproachById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminApproachService.deleteApproachById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteApproachWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminApproachValidator.deleteApproachWithIdListSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminApproachService.deleteApproachWithIdList(value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
