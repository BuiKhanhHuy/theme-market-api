import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getProfessions = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.Profession.findAndCountAll({
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

export const getProfessionById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const profession = await db.Profession.findByPk(pk, {
        attributes: ['id', 'name', 'createdAt', 'updatedAt'],
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
      const { name } = data;

      // check name exist
      const professionCheck = await db.Profession.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (professionCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const profession = await db.Profession.create(data);
      resolve(profession);
    } catch (error) {
      reject(error);
    }
  });

export const updateProfessionById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther profession
      const professionCheck = await db.Profession.findOne({
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
      if (professionCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update profession
      const updateRows = await db.Profession.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteProfessionById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.Profession.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteProfessionWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.Profession.destroy({
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
