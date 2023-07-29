import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminContactTypeValidator } from '../../validators/admin';
import { adminContactTypeService } from '../../services/admin';
import { contactTypeFilter } from '../../filters/admin/contactTypeFilter';

export const getContactTypes = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = contactTypeFilter(queryParams);

  const response = await adminContactTypeService.getContactTypes(filter);
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

  const { error, value } =
    adminContactTypeValidator.addContactTypeSchema.validate(bodyData);
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
  const bodyData = req.body;

  const { error, value } =
    adminContactTypeValidator.updateContactTypeSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminContactTypeService.updateContactTypeById(
    pk,
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteContactTypeById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminContactTypeService.deleteContactTypeById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteContactTypeWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminContactTypeValidator.deleteContactTypeWithIdListSchema.validate(
      bodyData
    );
  if (error) {
    throw error;
  }

  const response = await adminContactTypeService.deleteContactTypeWithIdList(
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
