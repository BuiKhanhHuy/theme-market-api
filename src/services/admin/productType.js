import db from '../../models';

export const getProductTypes = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.ProductType.findAndCountAll({
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

export const getProductTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const productType = await db.ProductType.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
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
      const productType = await db.ProductType.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateProductTypeById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteProductTypeById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteProductTypeWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
