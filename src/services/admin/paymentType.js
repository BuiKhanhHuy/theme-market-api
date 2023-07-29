import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getPaymentTypes = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.PaymentType.findAndCountAll({
        raw: true,
        nest: true,
        attributes: ['id', 'name', 'description'],
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

export const getPaymentTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const paymentType = await db.PaymentType.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'description',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(paymentType);
    } catch (error) {
      reject(error);
    }
  });

export const addPaymentType = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // check name exist
      const paymentTypeCheck = await db.PaymentType.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (paymentTypeCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const paymentType = await db.PaymentType.create(data);
      resolve(paymentType);
    } catch (error) {
      reject(error);
    }
  });

export const updatePaymentTypeById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // check name exist with orther payment type
      const paymentTypeCheck = await db.PaymentType.findOne({
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
      if (paymentTypeCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update payment type 
      const updateRows = await db.PaymentType.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.PaymentType.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentTypeWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.PaymentType.destroy({
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
