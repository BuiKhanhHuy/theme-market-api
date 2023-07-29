import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getServicePackages = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.ServicePackage.findAndCountAll({
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
      const { name } = data;

      // check name exist
      const servicePackageCheck = await db.ServicePackage.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (servicePackageCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const servicePackage = await db.ServicePackage.create(data);
      resolve(servicePackage);
    } catch (error) {
      reject(error);
    }
  });

export const updateServicePackageById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther service package
      const servicePackageCheck = await db.ServicePackage.findOne({
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
      if (servicePackageCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update service package
      const updateRows = await db.ServicePackage.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteServicePackageById = (pk) =>
  new Promise(async (resolve, reject) => {
    const deleteRows = await db.ServicePackage.destroy({
      where: {
        id: pk,
      },
    });
    resolve(deleteRows);
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteServicePackageWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.ServicePackage.destroy({
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
