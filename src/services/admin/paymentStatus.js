import db from '../../models';

export const getPaymentStatuses = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.PaymentStatus.findAndCountAll({
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
      const paymentStatus = await db.PaymentStatus.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updatePaymentStatusById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentStatusById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deletePaymentStatusWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
