import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminCategoryValidator } from '../../validators/admin';
import { adminCategoryService } from '../../services/admin';
import { categoryFilter } from '../../filters/admin/categoryFilter';

export const getCategories = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = categoryFilter(queryParams);

  const response = await adminCategoryService.getCategories(filter);
  return dataResponse(res, {
    data: response,
  });
});

export const getCategoryById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminCategoryService.getCategoryById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Category not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addCategory = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminCategoryValidator.addCategorySchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminCategoryService.addCategory(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateCategoryById = tryCatch(async (req, res) => {
  const { pk } = req.params;
  const bodyData = req.body;

  const { error, value } =
    adminCategoryValidator.updateCategorySchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminCategoryService.updateCategoryById(pk, value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteCategoryById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminCategoryService.deleteCategoryById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteCategoryWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminCategoryValidator.deleteCategoryWithIdListSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminCategoryService.deleteCategoryWithIdList(value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
