import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminProfessionValidator } from '../../validators/admin';
import { adminProfessionService } from '../../services/admin';
import { professionListFilter } from '../../filters/admin/professionFilter';

export const getProfessions = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = professionListFilter(queryParams)

  const response = await adminProfessionService.getProfessions(filter);
  return dataResponse(res, {
    data: response,
  });
});

export const getProfessionById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminProfessionService.getProfessionById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Profession not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addProfession = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminProfessionValidator.addProfessionSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminProfessionService.addProfession(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateProfessionById = tryCatch(async (req, res) => {
  const { pk } = req.params;
  const bodyData = req.body;

  const { error, value } =
    adminProfessionValidator.updateProfessionSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminProfessionService.updateProfessionById(pk, value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteProfessionById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminProfessionService.deleteProfessionById(pk);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteProfessionWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminProfessionValidator.deleteProfessionWithIdListSchema.validate(
      bodyData
    );
  if (error) {
    throw error;
  }

  const response = await adminProfessionService.deleteProfessionWithIdList(
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
