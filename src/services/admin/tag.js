import db from '../../models';

export const getTags = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Tag.findAndCountAll({
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

export const getTagById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const tag = await db.Tag.findByPk(pk, {
        attributes: [
          'id',
          'name',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
      });

      resolve(tag);
    } catch (error) {
      reject(error);
    }
  });

export const addTag = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const tag = await db.Tag.create(data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateTagById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteTagById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteTagWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
