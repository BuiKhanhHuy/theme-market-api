import 'dotenv/config';
import status from 'http-status';
import JWT, { decode } from 'jsonwebtoken';
import * as settings from '../config/settings';
import redisClient from './initRedis';
import AppError from '../AppError';

export const signAccessToken = (userId) =>
  new Promise((resolve, reject) => {
    const payload = {
      userId: userId,
    };
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {
      expiresIn: settings.JWT_ACCESS_TOKEN_EXPIRE_SECONDS,
    };

    JWT.sign(payload, secret, options, (error, encoded) => {
      if (error) {
        reject(error);
      }

      resolve(encoded);
    });
  });

export const signRefreshToken = (userId) =>
  new Promise((resolve, reject) => {
    const payload = {
      userId: userId,
    };
    const secret = process.env.REFRESH_TOKEN_SECRET;
    const options = {
      expiresIn: settings.JWT_REFRESH_TOKEN_EXPIRE_SECONDS,
    };

    JWT.sign(payload, secret, options, (error, encoded) => {
      if (error) {
        reject(error);
      }
      resolve(encoded);
    });
  });

export const verifyAccessToken = (token) =>
  new Promise((resolve, reject) => {
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
      if (error) {
        const errMessage =
          error.name === 'JsonWebTokenError' ? 'Unauthorized' : error.message;
        reject(new AppError(status.UNAUTHORIZED, errMessage));
      } else {
        const { userId } = decoded;
        resolve(userId);
      }
    });
  });

export const verifyRefreshToken = (refreshToken) =>
  new Promise((resolve, reject) => {
    JWT.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (error, decoded) => {
        if (error) {
          const errMessage =
            error.name === 'JsonWebTokenError' ? 'Unauthorized' : error.message;
          reject(new AppError(status.UNAUTHORIZED, errMessage));
        } else {
          const { userId } = decoded;
          const redisUserStr = await redisClient.GET(userId);
          const redisUser = JSON.parse(redisUserStr);

          if (refreshToken === redisUser?.refreshToken) {
            resolve(userId);
          } else {
            reject(new AppError(status.UNAUTHORIZED, 'Invalid refresh token'));
          }
        }
      }
    );
  });
