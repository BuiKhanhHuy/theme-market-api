import db from '../../models';

export const getProfessions = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Profession.findAndCountAll({
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

export const getProfessionById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const profession = await db.Profession.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(profession);
    } catch (error) {
      reject(error);
    }
  });

export const addProfession = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const profession = await db.Profession.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateProfessionById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteProfessionById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteProfessionWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
