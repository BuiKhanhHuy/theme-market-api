import 'dotenv/config';
import status from 'http-status';
import JWT from 'jsonwebtoken';
import AppError from '../AppError';

export const signAccessToken = (userId) =>
  new Promise((resolve, reject) => {
    const payload = {
      userId: userId,
      email: 'khuy220@gmail.com',
      fullName: 'Bùi Khánh Huy',
      role: 'ADMIN',
    };
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {
      expiresIn: '1h',
      issuer: 'pickurpage.com',
      audience: `${userId}`,
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
      email: 'khuy220@gmail.com',
      fullName: 'Bùi Khánh Huy',
      role: 'ADMIN',
    };
    const secret = process.env.REFRESH_TOKEN_SECRET;
    const options = {
      expiresIn: '1h',
      issuer: 'pickurpage.com',
      audience: `${userId}`,
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
        reject(new AppError(status.FORBIDDEN, errMessage));
      }
    });

    resolve(true);
  });
