import Joi from 'joi';

export const addProductTypeSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateProductTypeSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const deleteProductTypeWithIdListSchema = Joi.object({
  idList: Joi.array().items(Joi.number())
});
