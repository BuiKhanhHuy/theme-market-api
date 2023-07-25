import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminProfessionValidator } from '../../validators/admin';
import { adminProfessionService } from '../../services/admin';

export const getProfessions = tryCatch(async (req, res) => {
  const response = await adminProfessionService.getProfessions();

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

  const { error, value } = adminProfessionValidator.addProfessionSchema.validate(bodyData);
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

  return dataResponse(res);
});

export const deleteProfessionById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteProfessionWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
