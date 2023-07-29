import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getProductTypes = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.ProductType.findAndCountAll({
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

export const getProductTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const productType = await db.ProductType.findByPk(pk, {
        attributes: ['id', 'name', 'createdAt', 'updatedAt'],
        raw: true,
      });

      resolve(productType);
    } catch (error) {
      reject(error);
    }
  });

export const addProductType = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // check name exist
      const productTypeCheck = await db.ProductType.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (productTypeCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const productType = await db.ProductType.create(data);
      resolve(productType);
    } catch (error) {
      reject(error);
    }
  });

export const updateProductTypeById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther product type
      const productTypeCheck = await db.ProductType.findOne({
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
      if (productTypeCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update product type
      const updateRows = await db.ProductType.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteProductTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.ProductType.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteProductTypeWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.ProductType.destroy({
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
