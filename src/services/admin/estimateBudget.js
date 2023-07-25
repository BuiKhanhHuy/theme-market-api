import db from '../../models';

export const getEstimateBudgets = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.EstimateBudget.findAndCountAll({
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

export const getEstimateBudgetId = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const estimateBudget = await db.EstimateBudget.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
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
      const estimateBudget = await db.EstimateBudget.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateEstimateBudgetById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteEstimateBudgetById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteEstimateBudgetWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
