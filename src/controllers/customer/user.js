import status from 'http-status';
import tryCatch from '../../utils/tryCatch';
import dataResponse from '../../utils/dataResponse';
import { userService } from '../../services/customer';

export const getUser = tryCatch(async (req, res) => {
  const usersData = await userService.getUser();

  return dataResponse(res, {
    data: usersData,
  });
});

export const getUserById = tryCatch(async (req, res) => {
  const pk = req.params?.id;

  const userData = await userService.getUserById(pk);

  return dataResponse(res, {
    data: userData,
  });
});

export const addUser = tryCatch(async (req, res) => {
  const bodyData = req.body;

  const userData = await userService.addUser(bodyData);

  return dataResponse(res, {
    statusCode: status.CREATED,
    data: userData,
  });
});
