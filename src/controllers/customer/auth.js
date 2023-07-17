
import tryCatch from '../../utils/tryCatch';
import dataResponse from '../../utils/dataResponse';
import { authValidator } from '../../validators/customer';
import { authService } from '../../services/customer';

export const register = async (req, res) => {
  try {
    const response = await authService.register(req, res);

    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: error.message,
    });
  }
};

export const login = tryCatch(async (req, res) => {
  const bodyData = req.body;
  const { error, value } = authValidator.loginSchema.validate(bodyData);

  if (error) {
    throw error;
  }

  // service
  const loginData = await authService.login(bodyData);

  return dataResponse(res, {
    data: loginData,
  });
});

export const getRefreshToken = tryCatch(async (req, res) => {
  return dataResponse(res);
});

export const logout = tryCatch(async (req, res) => {
  return dataResponse(res);
});
