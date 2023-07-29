import Joi from 'joi';

export const addTagSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateTagSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const deleteTagWithIdListSchema = Joi.object({
  idList: Joi.array().items(Joi.number())
});
