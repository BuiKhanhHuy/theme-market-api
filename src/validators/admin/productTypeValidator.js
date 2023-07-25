import Joi from 'joi';

export const addProductTypeSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateProductTypeSchema = Joi.object({});

export const deleteProductTypeWithIdListSchema = Joi.object({});
