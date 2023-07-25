import db from '../../models';

export const getContactTypes = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.ContactType.findAndCountAll({
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

export const getContactTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const contactType = await db.ContactType.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(contactType);
    } catch (error) {
      reject(error);
    }
  });

export const addContactType = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const contactType = await db.ContactType.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateContactTypeById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteContactTypeById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteContactTypeWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
