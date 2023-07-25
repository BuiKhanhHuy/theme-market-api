import db from '../../models';

export const getServicePackages = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.ServicePackage.findAndCountAll({
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

export const getServicePackageById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const servicePackage = await db.ServicePackage.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(servicePackage);
    } catch (error) {
      reject(error);
    }
  });

export const addServicePackage = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const servicePackage = await db.ServicePackage.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateServicePackageById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteServicePackageById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteServicePackageWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
