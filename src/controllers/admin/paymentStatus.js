import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminPaymentStatusValidator } from '../../validators/admin';
import { adminPaymentStatusService } from '../../services/admin';

export const getPaymentStatuses = tryCatch(async (req, res) => {
  const response = await adminPaymentStatusService.getPaymentStatuses();

  return dataResponse(res, {
    data: response,
  });
});

export const getPaymentStatusById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminPaymentStatusService.getPaymentStatusById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Payment status not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addPaymentStatus = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } = adminPaymentStatusValidator.addPaymentStatusSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminPaymentStatusService.addPaymentStatus(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updatePaymentStatusById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deletePaymentStatusById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deletePaymentStatusWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
