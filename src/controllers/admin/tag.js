import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminTagValidator } from '../../validators/admin';
import { adminTagService } from '../../services/admin';

export const getTags = tryCatch(async (req, res) => {
  const response = await adminTagService.getTags();

  return dataResponse(res, {
    data: response,
  });
});

export const getTagById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminTagService.getTagById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Tag not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addTag = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } = adminTagValidator.addTagSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminTagService.addTag(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateTagById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteTagById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteTagWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
