const dataResponse = (res, options = {}) => {
  const { statusCode = 200, typeError = '', data = {}, errors = [] } = options;

  return res.status(statusCode).json({
    data: data,
    typeError: typeError,
    errors: errors,
  });
};

export default dataResponse;
