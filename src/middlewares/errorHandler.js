import status from 'http-status';

import dataResponse from '../utils/dataResponse';
import AppError from '../utils/AppError';
import ValidationError from '../utils/ValidationError';

const errorHandler = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    let errorList = [];

    error.details.forEach((err) => {
      const objError = {
        name: err?.context?.key,
        errors: [err?.message || ""]
      };
      errorList.push(objError);
    });
    console.log(error.details)

    return dataResponse(res, {
      statusCode: status.BAD_REQUEST,
      typeError: error.name,
      errors: errorList,
    });
  }

  if (error instanceof ValidationError) {
    return dataResponse(res, {
      statusCode: status.BAD_REQUEST,
      typeError: 'ValidationError',
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
