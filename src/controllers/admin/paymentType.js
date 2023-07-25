import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminPaymentTypeValidator } from '../../validators/admin';
import { adminPaymentTypeService } from '../../services/admin';

export const getPaymentTypes = tryCatch(async (req, res) => {
  const response = await adminPaymentTypeService.getPaymentTypes();

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

  const { error, value } = adminPaymentTypeValidator.addPaymentTypeSchema.validate(bodyData);
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

  return dataResponse(res);
});

export const deletePaymentTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deletePaymentTypeWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
