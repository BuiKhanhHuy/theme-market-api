import Joi from 'joi';

export const addProfessionSchema = Joi.object({
  name: Joi.string().required().max(255),
});

export const updateProfessionSchema = Joi.object({
  name: Joi.string().required().max(255),
});

export const deleteProfessionWithIdListSchema = Joi.object({
  idList: Joi.array().items(Joi.number())
});