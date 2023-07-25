import db from '../../models';

export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Category.findAndCountAll({
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

export const getCategoryById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const category = await db.Category.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(category);
    } catch (error) {
      reject(error);
    }
  });

export const addCategory = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const category = await db.Category.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateCategoryById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteCategoryById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteCategoryWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
