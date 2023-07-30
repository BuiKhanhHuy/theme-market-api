import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminTagValidator } from '../../validators/admin';
import { adminTagService } from '../../services/admin';
import { tagFilter } from '../../filters/admin/tagFilter';

export const getTags = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = tagFilter(queryParams);

  const response = await adminTagService.getTags(filter);
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
  const bodyData = req.body;

  const { error, value } = adminTagValidator.updateTagSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminTagService.updateTagById(pk, value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteTagById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminTagService.deleteTagById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteTagWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminTagValidator.deleteTagWithIdListSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminTagService.deleteTagWithIdList(value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
