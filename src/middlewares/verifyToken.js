import status from 'http-status';
import db from '../models';
import dataResponse from '../utils/dataResponse';
import redisClient from '../helpers/initRedis';
import { signRefreshToken, verifyAccessToken } from '../helpers/jwtHelper';

const verifyToken = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const authorizationSplit = authorization.split(' ') || [];

    if (authorizationSplit.length !== 2) {
      return dataResponse(res, {
        statusCode: status.UNAUTHORIZED,
        errors: ['Unauthorized'],
      });
    }

    const token = authorizationSplit[1];
    const userId = await verifyAccessToken(token);

    if (userId) {
      let redisUser = {};
      const redisUserStr = await redisClient.GET(userId);

      if (redisUserStr) {
        // get user from redis
        redisUser = JSON.parse(redisUserStr);
      } else {
        // add user to redis
        const user = await db.User.findByPk(userId, {
          raw: true,
          attributes: [
            'id',
            'email',
            'firstName',
            'lastName',
            'avatarUrl',
            'isActive',
            'isEmailVerified',
            'professionId',
            'roleName',
          ],
        });
        if (!user) {
          return dataResponse(res, {
            statusCode: status.INTERNAL_SERVER_ERROR,
          });
        }

        redisUser = {
            ...user,
            refreshToken: await signRefreshToken(userId),
        };
        await redisClient.SET(userId, JSON.stringify(redisUser))
      }

      req.roleName = redisUser.roleName;
      next();
    } else {
      return dataResponse(res, {
        statusCode: status.UNAUTHORIZED,
        errors: ['Unauthorized'],
      });
    }
  } catch (error) {
    return dataResponse(res, {
      statusCode: error.status,
      errors: [error.message],
    });
  }
};

export default verifyToken;
