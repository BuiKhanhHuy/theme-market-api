import status from 'http-status';
import AppError from '../AppError';
import * as jwtHelper from '../helpers/jwtHelper';

export const register = () =>
  new Promise((resolve, reject) => {
    try {
      resolve({
        email: 'ahihia@gmail.com',
        user_name: 'Bùi Khánh Huy',
      });
    } catch (error) {
      reject(error);
    }
  });

export const login = (dataInput) =>
  new Promise(async (resolve, reject) => {
    try {
      const { email, password } = dataInput;

      if (email === 'email@gmail.com') {
        throw new AppError(
          status.BAD_REQUEST,
          'Đây là Email tôi không thích. OK!'
        );
      }
      const accessToken = await jwtHelper.signAccessToken(1);
      const refreshToken = await jwtHelper.signRefreshToken(1)

      const data = {
        userId: 1,
        email: email,
        fullName: "Bui Khanh Huy",
        accessToken: accessToken,
        refreshToken: refreshToken
      };
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
