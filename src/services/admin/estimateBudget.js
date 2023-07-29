import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getEstimateBudgets = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.EstimateBudget.findAndCountAll({
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

export const getEstimateBudgetId = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const estimateBudget = await db.EstimateBudget.findByPk(pk, {
        attributes: ['id', 'name', 'createdAt', 'updatedAt'],
        raw: true,
      });

      resolve(estimateBudget);
    } catch (error) {
      reject(error);
    }
  });

export const addEstimateBudget = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // check name exist
      const estimateBudgetCheck = await db.EstimateBudget.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (estimateBudgetCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const estimateBudget = await db.EstimateBudget.create(data);
      resolve(estimateBudget);
    } catch (error) {
      reject(error);
    }
  });

export const updateEstimateBudgetById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther estimate budget
      const estimateBudgetCheck = await db.EstimateBudget.findOne({
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
      if (estimateBudgetCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update estimate budget
      const updateRows = await db.EstimateBudget.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteEstimateBudgetById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.EstimateBudget.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteEstimateBudgetWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.EstimateBudget.destroy({
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
