import Joi from 'joi';

export const addUserSchema = Joi.object({
  email: Joi.string().required().max(128).email(),
  firstName: Joi.string().required().trim().max(50),
  lastName: Joi.string().required().trim().max(100),
  password: Joi.string().required().trim(),
  isActive: Joi.boolean(),
  roleName: Joi.string().required(),
  professionId: Joi.number().min(1),
});

export const updateUserSchema = Joi.object({});

export const deleteUserWithIdListSchema = Joi.object({});
