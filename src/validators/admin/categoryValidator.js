import Joi from 'joi';

export const addCategorySchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateCategorySchema = Joi.object({});

export const deleteCategoryWithIdListSchema = Joi.object({});
