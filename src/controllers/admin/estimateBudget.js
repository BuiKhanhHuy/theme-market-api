import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminEstimateBudgetValidator } from '../../validators/admin';
import { adminEstimateBudgetService } from '../../services/admin';

export const getEstimateBudgets = tryCatch(async (req, res) => {
  const response = await adminEstimateBudgetService.getEstimateBudgets();

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

  const { error, value } = adminEstimateBudgetValidator.addEstimateBudgetSchema.validate(bodyData);
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

  return dataResponse(res);
});

export const deleteEstimateBudgetById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteEstimateBudgetWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
