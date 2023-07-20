import db from '../../models';

export const getUsers = () =>
  new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({
        // attributes:  ['id'],
        raw: true,
      });

      resolve(users);
    } catch (error) {
      reject(error);
    }
  });

export const getUserById = () =>
  new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      reject(error);
    }
  });

export const addUser = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.create(data)

      console.log('==> Usser: ', user);
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
