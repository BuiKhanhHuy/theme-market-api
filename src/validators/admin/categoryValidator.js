import Joi from 'joi';

export const addCategorySchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateCategorySchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const deleteCategoryWithIdListSchema = Joi.object({
  idList: Joi.array().items(Joi.number())
});
