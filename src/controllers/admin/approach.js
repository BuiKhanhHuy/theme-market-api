import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminApproachValidator } from '../../validators/admin';
import { adminApproachService } from '../../services/admin';

export const getApproaches = tryCatch(async (req, res) => {
  const response = await adminApproachService.getApproaches();

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

  const { error, value } = adminApproachValidator.addProfessionSchema.validate(bodyData);
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

  return dataResponse(res);
});

export const deleteApproachById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteApproachWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
