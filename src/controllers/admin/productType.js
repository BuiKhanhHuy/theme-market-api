import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminProductTypeValidator } from '../../validators/admin';
import { adminProductTypeService } from '../../services/admin';
import { productTypeFilter } from '../../filters/admin/productTypeFilter';

export const getProductTypes = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = productTypeFilter(queryParams);

  const response = await adminProductTypeService.getProductTypes(filter);
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

  const { error, value } =
    adminProductTypeValidator.addProductTypeSchema.validate(bodyData);
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
  const bodyData = req.body;

  const { error, value } =
    adminProductTypeValidator.updateProductTypeSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminProductTypeService.updateProductTypeById(
    pk,
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteProductTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminProductTypeService.deleteProductTypeById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteProductTypeWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminProductTypeValidator.deleteProductTypeWithIdListSchema.validate(
      bodyData
    );
  if (error) {
    throw error;
  }

  const response = await adminProductTypeService.deleteProductTypeWithIdList(
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
