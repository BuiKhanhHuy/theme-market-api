import { Op } from 'sequelize';
import db from '../models';

export const getUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({
        raw: true,
        attributes: ['id', 'email', 'firstName', 'lastName', 'professionId'],
        where: {
          [Op.or]: [
            { professionId: { [Op.eq]: 1 } },
            { firstName: { [Op.eq]: 'Một' } },
          ],
        },
      });

      resolve(users);
    } catch (error) {
      reject(error);
    }
  });

export const addUser = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.create(data);

      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
