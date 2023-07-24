import status from 'http-status'

const dataResponse = (res, options = {}) => {
  const { statusCode = status.OK, typeError = '', data = {}, errors = [] } = options;

  return res.status(statusCode).json({
    data: data,
    typeError: typeError,
    errors: errors,
  });
};

export default dataResponse;
