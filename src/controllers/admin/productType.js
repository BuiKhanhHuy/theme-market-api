import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminProductTypeValidator } from '../../validators/admin';
import { adminProductTypeService } from '../../services/admin';

export const getProductTypes = tryCatch(async (req, res) => {
  const response = await adminProductTypeService.getProductTypes();

  return dataResponse(res, {
    data: response,
  });
});

export const getProductTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminProductTypeService.getProductTypeById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Product type not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addProductType = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } = adminProductTypeValidator.addProductTypeSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminProductTypeService.addProductType(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateProductTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteProductTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteProductTypeWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
