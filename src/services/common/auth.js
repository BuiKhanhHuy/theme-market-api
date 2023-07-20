import bcrypt from 'bcryptjs';
import status from 'http-status';
import { Op } from 'sequelize';
import * as settings from '../../config/settings';
import db from '../../models';
import AppError from '../../AppError';
import redisClient from '../../helpers/initRedis';
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from '../../helpers/jwtHelper';

export const getToken = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { email, password } = data;
      const simpleEmail = email.toLowerCase();

      // Check email exist
      const user = await db.User.findOne({
        raw: true,
        where: {
          email: {
            [Op.eq]: simpleEmail,
          },
        },
      });
      if (!user) {
        throw new AppError(
          status.BAD_REQUEST,
          'There are no accounts with this email'
        );
      }

      // Check password
      const isCheckPassword = bcrypt.compareSync(password, user.password);
      if (!isCheckPassword) {
        throw new AppError(status.BAD_REQUEST, 'Incorrect password');
      }

      // Create access token and refresh token
      const accessToken = await signAccessToken(user.id);
      const refreshToken = await signRefreshToken(user.id);

      // Save user and refresh token to redis
      await redisClient.SET(
        user.id,
        JSON.stringify({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          avatarUrl: user.avatarUrl,
          isActive: user.isActive,
          isEmailVerified: user.isEmailVerified,
          professionId: user.professionId,
          roleName: user.roleName,
          refreshToken: refreshToken,
        }),
        {
          EX: settings.JWT_REFRESH_TOKEN_EXPIRE_SECONDS,
        }
      );

      resolve({
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getRefreshToken = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { refreshToken } = data;
      const userId = await verifyRefreshToken(refreshToken);

      if (userId) {
        const newAccessToken = await signAccessToken(userId);

        resolve({
          accessToken: newAccessToken,
          refreshToken: refreshToken,
        });
      } else {
        reject(new AppError(status.FORBIDDEN, 'Invalid refresh token'));
      }
    } catch (error) {
      reject(error);
    }
  });

export const revokeToken = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const { refreshToken } = data;
      const userId = await verifyRefreshToken(refreshToken);

      if (userId) {
        try {
          await redisClient.DEL(userId);
          resolve({});
        } catch (err) {
          reject(err);
        }
      } else {
        reject(new AppError(status.FORBIDDEN, 'Invalid refresh token'));
      }
    } catch (error) {
      reject(error);
    }
  });
