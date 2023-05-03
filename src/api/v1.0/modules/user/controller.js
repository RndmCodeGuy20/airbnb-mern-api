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
  getUser: catchAsync(async (req, res) => {
    const response = await userService.getUser();

    res.jsend.success(response, {
      info: 'user fetched',
    });
  }),
};
