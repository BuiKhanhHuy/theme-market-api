import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getCategories = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Category.findAndCountAll({
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

export const getCategoryById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const category = await db.Category.findByPk(pk, {
        attributes: ['id', 'name', 'createdAt', 'updatedAt'],
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
      const { name } = data;

      // check name exist
      const categoryCheck = await db.Category.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (categoryCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const category = await db.Category.create(data);
      resolve(category);
    } catch (error) {
      reject(error);
    }
  });

export const updateCategoryById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther category
      const categoryCheck = await db.Category.findOne({
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
      if (categoryCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update category
      const updateRows = await db.Category.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteCategoryById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.Category.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteCategoryWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.Category.destroy({
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
