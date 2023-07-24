import status from 'http-status';
import { ADMIN_ROLE, CUSTOMER_ROLE } from '../config/settings';
import dataResponse from '../utils/dataResponse';

export const verifyAdminRole = (req, res, next) => {
  const { roleName } = req.user;

  if (roleName !== ADMIN_ROLE) {
    return dataResponse(res, {
      statusCode: status.FORBIDDEN,
      errors: ['You do not have permission to perform this function'],
    });
  }

  next();
};

export const verfifyCustomerRole = (req, res, next) => {
  const roleName = req.roleName;
  if (roleName !== CUSTOMER_ROLE) {
    return dataResponse(res, {
      statusCode: status.FORBIDDEN,
      errors: ['You do not have permission to perform this function'],
    });
  }

  next();
};
