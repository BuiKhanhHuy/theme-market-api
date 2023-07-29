import { Op } from 'sequelize';
import db from '../../models';
import ValidationError from '../../utils/ValidationError';

export const getContactTypes = (filter) =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.ContactType.findAndCountAll({
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

export const getContactTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const contactType = await db.ContactType.findByPk(pk, {
        attributes: ['id', 'name', 'createdAt', 'updatedAt'],
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
      const { name } = data;

      // check name exist
      const contactTypeCheck = await db.ContactType.findOne({
        where: {
          name: {
            [Op.iLike]: name,
          },
        },
      });
      if (contactTypeCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // create
      const contactType = await db.ContactType.create(data);
      resolve(contactType);
    } catch (error) {
      reject(error);
    }
  });

export const updateContactTypeById = (pk, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      // check name exist with orther contact type
      const contactTypeCheck = await db.ContactType.findOne({
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
      if (contactTypeCheck) {
        throw new ValidationError([
          { name: 'name', errors: ['Name already exists'] },
        ]);
      }

      // update contact type
      const updateRows = await db.ContactType.update(data, {
        where: {
          id: pk,
        },
      });

      resolve(updateRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteContactTypeById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const deleteRows = await db.ContactType.destroy({
        where: {
          id: pk,
        },
      });
      resolve(deleteRows);
    } catch (error) {
      reject(error);
    }
  });

export const deleteContactTypeWithIdList = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { idList } = data;

      const deleteRows = await db.ContactType.destroy({
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
