import Joi from 'joi';

export const addApproachSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateApproachSchema = Joi.object({});

export const deleteApproachWithIdListSchema = Joi.object({});
