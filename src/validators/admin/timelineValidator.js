import Joi from 'joi';

export const addTimelineSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const updateTimelineSchema = Joi.object({
  name: Joi.string().required().max(100)
});

export const deleteTimelineWithIdListSchema = Joi.object({
  idList: Joi.array().items(Joi.number())
});
