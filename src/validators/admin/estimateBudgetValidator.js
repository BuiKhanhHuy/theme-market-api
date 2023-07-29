import Joi from 'joi';

export const addEstimateBudgetSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateEstimateBudgetSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const deleteEstimateBudgetWithIdListSchema = Joi.object({
  idList: Joi.array().items(Joi.number())
});
