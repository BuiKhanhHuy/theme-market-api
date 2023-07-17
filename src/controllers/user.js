import status from 'http-status';
import tryCatch from '../utils/tryCatch';
import dataResponse from '../utils/dataResponse';
import { userService } from '../services';

export const getUser = tryCatch(async (req, res) => {
    const usersData = await userService.getUser()

    return dataResponse(res, {
        data: usersData
    })
})

export const addUser = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const userData = await userService.addUser(bodyData);

  return dataResponse(res, {
    statusCode: status.CREATED,
    data: userData,
  });
});
