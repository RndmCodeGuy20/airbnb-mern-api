import { catchAsync } from '#utils/index';
import { userService } from './user';

export const api = {
  register: catchAsync(async (req, res) => {
    const response = await userService.register(req.body);
    // console.log(response);
    res.jsend.success(response, {
      info: 'User registered successfully',
    });
  }),
  login: catchAsync(async (req, res) => {
    const response = await userService.login(req.body);

    res.jsend.success(response, {
      info: 'User logged in successfully',
    });
  }),
  getUserById: catchAsync(async (req, res) => {
    const response = await userService.getUserById(req.params);

    res.jsend.success(response, {
      data: 'User found successfully',
    });
  }),

  updateUserById: catchAsync(async (req, res) => {
    const response = await userService.updateUserById(req.body);

    res.jsend.success(response, {
      info: 'User updated successfully',
    });
  }),

  getUser: catchAsync(async (req, res) => {
    const response = await userService.getUser(req.body);

    res.jsend.success(response, {
      data: response,
    });
  }),

  deleteUser: catchAsync(async (req, res) => {
    const response = await userService.deleteUser(req.body);

    res.jsend.success(response, {
      info: response,
    });
  }),
};
