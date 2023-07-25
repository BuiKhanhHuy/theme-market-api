import db from '../../models';

export const getApproaches = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Approach.findAndCountAll({
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

export const getApproachById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const approach = await db.Approach.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(approach);
    } catch (error) {
      reject(error);
    }
  });

export const addApproach = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const approach = await db.Approach.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateApproachById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteApproachById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteApproachWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
