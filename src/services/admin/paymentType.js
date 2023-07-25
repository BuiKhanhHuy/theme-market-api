import db from '../../models';

export const getPaymentTypes = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.PaymentType.findAndCountAll({
        raw: true,
        nest: true,
        attributes: ['id', 'name', 'description'],
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
      const paymentType = await db.PaymentType.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updatePaymentTypeById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentTypeById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentTypeWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
