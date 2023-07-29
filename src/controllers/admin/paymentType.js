import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminPaymentTypeValidator } from '../../validators/admin';
import { adminPaymentTypeService } from '../../services/admin';
import { paymentTypeFilter } from '../../filters/admin/paymentTypeFilter';

export const getPaymentTypes = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = paymentTypeFilter(queryParams);

  const response = await adminPaymentTypeService.getPaymentTypes(filter);
  return dataResponse(res, {
    data: response,
  });
});

export const getPaymentTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminPaymentTypeService.getPaymentTypeById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Payment type not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addPaymentType = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminPaymentTypeValidator.addPaymentTypeSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminPaymentTypeService.addPaymentType(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updatePaymentTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;
  const bodyData = req.body;

  const { error, value } =
    adminPaymentTypeValidator.updatePaymentTypeSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminPaymentTypeService.updatePaymentTypeById(
    pk,
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deletePaymentTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminPaymentTypeService.deletePaymentTypeById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deletePaymentTypeWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminPaymentTypeValidator.deletePaymentTypeWithIdListSchema.validate(
      bodyData
    );
  if (error) {
    throw error;
  }

  const response = await adminPaymentTypeService.deletePaymentTypeWithIdList(
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
