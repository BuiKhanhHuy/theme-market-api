import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getTags = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Tag.findAndCountAll({
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
      const { name } = data;

      // check name exist
      const tagCheck = await db.Tag.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (tagCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const tag = await db.Tag.create(data);
      resolve(tag);
    } catch (error) {
      reject(error);
    }
  });

export const updateTagById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther tag
      const tagCheck = await db.Tag.findOne({
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
      if (tagCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update tag
      const updateRows = await db.Tag.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteTagById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.Tag.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteTagWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.Tag.destroy({
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
