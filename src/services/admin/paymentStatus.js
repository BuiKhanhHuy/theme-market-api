import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getPaymentStatuses = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.PaymentStatus.findAndCountAll({
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

export const getPaymentStatusById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const paymentStatus = await db.PaymentStatus.findByPk(pk, {
        attributes: [
          'id',
          'name', 
          'description',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(paymentStatus);
    } catch (error) {
      reject(error);
    }
  });

export const addPaymentStatus = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // check name exist
      const paymentStatusCheck = await db.PaymentStatus.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (paymentStatusCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const paymentStatus = await db.PaymentStatus.create(data);
      resolve(paymentStatus);
    } catch (error) {
      reject(error);
    }
  });

export const updatePaymentStatusById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther payment status
      const paymentStatusCheck = await db.PaymentStatus.findOne({
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
      if (paymentStatusCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update payment status
      const updateRows = await db.PaymentStatus.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentStatusById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.PaymentStatus.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentStatusWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.PaymentStatus.destroy({
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
