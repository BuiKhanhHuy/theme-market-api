import status from 'http-status';

import AppError from '../AppError';
import dataResponse from '../utils/dataResponse';

const errorHandler = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return dataResponse(res, {
      statusCode: status.BAD_REQUEST,
      typeError: error.name,
      errors: error.details,
    });
  }

  if (error instanceof AppError) {
    return dataResponse(res, {
      statusCode: error.statusCode,
      typeError: 'AppError',
      errors: error.details,
    });
  }

  return res.status(status.INTERNAL_SERVER_ERROR).send('Internal Server Error');
};

export default errorHandler;
