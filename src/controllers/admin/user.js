import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminUserValidator } from '../../validators/admin';
import { adminUserService } from '../../services/admin';

export const getUsers = tryCatch(async (req, res) => {
  const response = await adminUserService.getUsers();

  return dataResponse(res, {
    data: response,
  });
});

export const getUserById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminUserService.getUserById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'User not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addUser = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } = adminUserValidator.addUserSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminUserService.addUser(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateUserById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteUserById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteUserWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
