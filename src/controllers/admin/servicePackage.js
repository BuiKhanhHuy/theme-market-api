import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../AppError';
import dataResponse from '../../utils/dataResponse';
import { adminServicePackageValidator } from '../../validators/admin';
import { adminServicePackageService } from '../../services/admin';

export const getServicePackages = tryCatch(async (req, res) => {
  const response = await adminServicePackageService.getServicePackages();

  return dataResponse(res, {
    data: response,
  });
});

export const getServicePackageById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminServicePackageService.getServicePackageById(pk);

  if (response === null) {
    throw new AppError(status.NOT_FOUND, 'Service package not found');
  }

  return dataResponse(res, {
    data: response,
  });
});

export const addServicePackage = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } = adminServicePackageValidator.addServicePackageSchema.validate(bodyData);
  if (error) {
    throw error;
  }
  const response = await adminServicePackageService.addServicePackage(value);

  return dataResponse(res, {
    data: response,
  });
});

export const updateServicePackageById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteServicePackageById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  return dataResponse(res);
});

export const deleteServicePackageWithIdList = tryCatch(async (req, res) => {
  return dataResponse(res);
});
