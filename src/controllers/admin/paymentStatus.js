import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminPaymentStatusValidator } from '../../validators/admin';
import { adminPaymentStatusService } from '../../services/admin';
import { paymentStatusFilter } from '../../filters/admin/paymentStatusFilter';

export const getPaymentStatuses = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = paymentStatusFilter(queryParams);

  const response = await adminPaymentStatusService.getPaymentStatuses(filter);
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

  const { error, value } =
    adminPaymentStatusValidator.addPaymentStatusSchema.validate(bodyData);
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
  const bodyData = req.body;

  const { error, value } =
    adminPaymentStatusValidator.updatePaymentStatusSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminPaymentStatusService.updatePaymentStatusById(
    pk,
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deletePaymentStatusById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminPaymentStatusService.deletePaymentStatusById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deletePaymentStatusWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminPaymentStatusValidator.deletePaymentStatusWithIdListSchema.validate(
      bodyData
    );
  if (error) {
    throw error;
  }

  const response =
    await adminPaymentStatusService.deletePaymentStatusWithIdList(value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
