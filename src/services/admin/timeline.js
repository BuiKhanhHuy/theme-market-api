import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getTimelines = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Timeline.findAndCountAll({
        raw: true,
        nest: true,
        attributes: ['id', 'name'],
        ...filter,
      });

      resolve({
        totalCount: count,
        results: rows,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getTimelineById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const timeline = await db.Timeline.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(timeline);
    } catch (error) {
      reject(error);
    }
  });

export const addTimeline = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // check name exist
      const timelineCheck = await db.Timeline.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (timelineCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const timeline = await db.Timeline.create(data);
      resolve(timeline);
    } catch (error) {
      reject(error);
    }
  });

export const updateTimelineById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther timeline
      const timelineCheck = await db.Timeline.findOne({
        where: {
          [Op.and]: [
            {
              name: {
                [Op.iLike]: name,
              },
              id: {
                [Op.ne]: pk,
              },
            },
          ],
        },
      });
      if (timelineCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update timeline 
      const updateRows = await db.Timeline.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteTimelineById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.Timeline.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteTimelineWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.Timeline.destroy({
        where: {
          id: {
            [Op.in]: idList,
          },
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });
