import Joi from 'joi';

export const addPaymentStatusSchema = Joi.object({
  name: Joi.string().required().max(100),
  desciption: Joi.string().default("").max(255)
});

export const updatePaymentStatusSchema = Joi.object({});

export const deletePaymentStatusWithIdListSchema = Joi.object({});
