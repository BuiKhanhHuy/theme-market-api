import status from 'http-status'
import tryCatch from '../../utils/tryCatch';
import dataResponse from '../../utils/dataResponse';
import { commonAuthValidator } from '../../validators/common';
import { commonAuthService } from '../../services/common';

export const getToken = tryCatch(async (req, res) => {
  const bodyData = req.body;
  const { error, value } =
    commonAuthValidator.getTokenSchema.validate(bodyData);

  if (error) {
    throw error;
  }

  const response = await commonAuthService.getToken(value);

  return dataResponse(res, {
    data: response,
  });
});

export const getRefreshToken = tryCatch(async (req, res) => {
  const bodyData = req.body;
  const { error, value } = commonAuthValidator.getRefreshTokenSchema.validate(bodyData);

  if (error) {
    throw error;
  }

  const response = await commonAuthService.getRefreshToken(value)

  return dataResponse(res, {
    data: response,
  });
});

export const revokerToken = tryCatch(async (req, res) => {
  const bodyData = req.body;
  const { error, value } = commonAuthValidator.revokeTokenSchema.validate(bodyData);

  if (error) {
    throw error;
  }

  const response = await commonAuthService.revokeToken(value)

  return dataResponse(res, {
    data: response,
    statusCode: status.NO_CONTENT
  });
});
