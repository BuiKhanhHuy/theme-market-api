import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getApproaches = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Approach.findAndCountAll({
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

export const getApproachById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const approach = await db.Approach.findByPk(pk, {
        attributes: ['id', 'name', 'createdAt', 'updatedAt'],
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
      const { name } = data;

      // check name exist
      const approachCheck = await db.Approach.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (approachCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const approach = await db.Approach.create(data);
      resolve(approach);
    } catch (error) {
      reject(error);
    }
  });

export const updateApproachById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther approach
      const approachCheck = await db.Approach.findOne({
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
      if (approachCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update approach
      const updateRows = await db.Approach.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteApproachById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.Approach.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteApproachWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.Approach.destroy({
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
