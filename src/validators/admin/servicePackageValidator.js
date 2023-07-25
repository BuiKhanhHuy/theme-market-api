import Joi from 'joi';

export const addServicePackageSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateServicePackageSchema = Joi.object({});

export const deleteServicePackageWithIdListSchema = Joi.object({});
