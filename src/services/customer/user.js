import { Op } from 'sequelize';
import db from '../../models';

export const getUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const PAGE_SIZE = 2;
      const page = 1;

      const users = await db.User.findAll({
        raw: true,
        attributes: ['id', 'email', 'firstName', 'lastName', 'professionId'],
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE,
      });
      const totalUser = await db.User.count();

      resolve({
        count: totalUser,
        users: users,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getUserById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findByPk(id, {
        raw: true,
        attributes: ['id', 'email', 'firstName', 'lastName', 'professionId'],
      });

      resolve(user);
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
