import db from '../../models';

export const getTimelines = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Timeline.findAndCountAll({
        raw: true,
        nest: true,
        attributes: ['id', 'name'],
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
      const timeline = await db.Timeline.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateTimelineById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteTimelineById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteTimelineWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
