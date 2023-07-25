import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminCategoryValidator } from '../../validators/admin';
import { adminCategoryService } from '../../services/admin';

export const getCategories = tryCatch(async (req, res) => {
  const response = await adminCategoryService.getCategories();

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

  const { error, value } = adminCategoryValidator.addCategorySchema.validate(bodyData);
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

  return dataResponse(res);
});

export const deleteCategoryById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteCategoryWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
