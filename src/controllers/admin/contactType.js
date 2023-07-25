import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminContactTypeValidator } from '../../validators/admin';
import { adminContactTypeService } from '../../services/admin';

export const getContactTypes = tryCatch(async (req, res) => {
  const response = await adminContactTypeService.getContactTypes();

  return dataResponse(res, {
    data: response,
  });
});

export const getContactTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminContactTypeService.getContactTypeById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Contact type not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addContactType = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } = adminContactTypeValidator.addContactTypeSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminContactTypeService.addContactType(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateContactTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteContactTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteContactTypeWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
