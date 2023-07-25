import Joi from 'joi';

export const addContactTypeSchema = Joi.object({
  name: Joi.string().required().max(255)
});

export const updateContactTypeSchema = Joi.object({});

export const deleteContactTypeWithIdListSchema = Joi.object({});
