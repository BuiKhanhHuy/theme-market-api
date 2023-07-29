import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import AppError from '../../utils/AppError';
import dataResponse from '../../utils/dataResponse';
import { adminServicePackageValidator } from '../../validators/admin';
import { adminServicePackageService } from '../../services/admin';
import { servicePackageFilter } from '../../filters/admin/servicePackageFilter';

export const getServicePackages = tryCatch(async (req, res) => {
  const queryParams = req?.query;
  const filter = servicePackageFilter(queryParams);

  const response = await adminServicePackageService.getServicePackages(filter);
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

  const { error, value } =
    adminServicePackageValidator.addServicePackageSchema.validate(bodyData);
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
  const bodyData = req.body;

  const { error, value } =
    adminServicePackageValidator.updateServicePackageSchema.validate(bodyData);
  if (error) {
    throw error;
  }

  const response = await adminServicePackageService.updateServicePackageById(
    pk,
    value
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Update failed');
  }

  return dataResponse(res);
});

export const deleteServicePackageById = tryCatch(async (req, res) => {
  const { pk } = req.params;

  const response = await adminServicePackageService.deleteServicePackageById(
    pk
  );
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});

export const deleteServicePackageWithIdList = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const { error, value } =
    adminServicePackageValidator.deleteServicePackageWithIdListSchema.validate(
      bodyData
    );
  if (error) {
    throw error;
  }

  const response =
    await adminServicePackageService.deleteServicePackageWithIdList(value);
  if (response.length > 0 && response[0] === 0) {
    throw new AppError(status.INTERNAL_SERVER_ERROR, 'Delete failed');
  }

  return dataResponse(res, {
    statusCode: status.NO_CONTENT,
  });
});
