import db from '../../models';

export const getUsers = () =>
  new Promise(async (resolve, reject) => {
    try {
      const { count, rows } = await db.User.findAndCountAll({
        raw: true,
        nest: true,
        attributes: [
          'id',
          'email',
          'firstName',
          'lastName',
          'avatarUrl',
          'isActive',
          'isEmailVerified',
        ],
        include: [
          {
            model: db.Profession,
            as: 'profession',
            attributes: ['id', 'name'],
          },
        ],
      });

      resolve({
        totalCount: count,
        results: rows,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getUserById = (pk) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findByPk(pk, {
        attributes: [
          'id',
          'email',
          'firstName',
          'lastName',
          'avatarUrl',
          'isActive',
          'isEmailVerified',
          'deletedAt',
          'roleName',
          'professionId',
          'createdAt',
          'updatedAt',
        ],
        raw: true,
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

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });

export const updateUserById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteUserById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const deleteUserWithIdList = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });
