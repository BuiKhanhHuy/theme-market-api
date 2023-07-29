import Joi from 'joi';

export const addPaymentTypeSchema = Joi.object({
  name: Joi.string().required().max(100),
  desciption: Joi.string().default("").max(255)
});

export const updatePaymentTypeSchema = Joi.object({
  name: Joi.string().required().max(100),
});

export const deletePaymentTypeWithIdListSchema = Joi.object({
  idList: Joi.array().items(Joi.number())
});
