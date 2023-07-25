import Joi from 'joi';

export const addPaymentTypeSchema = Joi.object({
  name: Joi.string().required().max(100),
  desciption: Joi.string().default("").max(255)
});

export const updatePaymentTypeSchema = Joi.object({});

export const deletePaymentTypeWithIdListSchema = Joi.object({});
