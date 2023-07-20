import Joi from 'joi';

export const getTokenSchema = Joi.object({
  email: Joi.string().required().max(128).trim().email(),
  password: Joi.string().required().max(100).trim(),
});

export const getRefreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required().max(145),
});

export const revokeTokenSchema = Joi.object({
  refreshToken: Joi.string().required().max(145),
});
