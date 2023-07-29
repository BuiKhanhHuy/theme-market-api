import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminEstimateBudgetValidator } from '../../validators/admin';
import { adminEstimateBudgetService } from '../../services/admin';
import { estimateBudgetFilter } from '../../filters/admin/estimateBudgetFilter';

export const getEstimateBudgets = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = estimateBudgetFilter(queryParams);

  const response = await adminEstimateBudgetService.getEstimateBudgets(filter);
  return dataResponse(res, {
    data: response,
  });
});

export const getEstimateBudgetId = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminEstimateBudgetService.getEstimateBudgetId(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Estimate budget not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addEstimateBudget = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminEstimateBudgetValidator.addEstimateBudgetSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminEstimateBudgetService.addEstimateBudget(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateEstimateBudgetById = tryCatch(async (req, res) => {
  const { pk } = req.params;
  const bodyData = req.body;

  const { error, value } =
    adminEstimateBudgetValidator.updateEstimateBudgetSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminEstimateBudgetService.updateEstimateBudgetById(
    pk,
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteEstimateBudgetById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminEstimateBudgetService.deleteEstimateBudgetById(
    pk
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteEstimateBudgetWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminEstimateBudgetValidator.deleteEstimateBudgetWithIdListSchema.validate(
      bodyData
    );
  if (error) {
    throw error;
  }

  const response =
    await adminEstimateBudgetService.deleteEstimateBudgetWithIdList(value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
