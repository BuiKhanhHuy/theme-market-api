import Joi from 'joi';

export const addEstimateBudgetSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateEstimateBudgetSchema = Joi.object({});

export const deleteEstimateBudgetWithIdListSchema = Joi.object({});
