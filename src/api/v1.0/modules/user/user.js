import { StatusCodes } from 'http-status-codes';
import { ERROR_CODES } from '#constants/index';
import { UserApiError } from './error';
import { User } from './model';
import {
  generateToken,
  generateRefreshToken,
  generateHash,
  compareHash,
} from '#utils/index';
import { logger } from '#helpers/index';

/**
 * @class UserService
 * @desc Class of user services
 */
class UserService {
  /**
	 *
	 * @param {{firstName: String,
	 * lastName: String,
	 * address: String,
	 * email : String,
	 * password: String,
	 * phoneNumber: String,
	 * }} body
	 * @return {Promise<void>}
	 */
  async register(body) {
    try {
      if (!body.firstName || !body.address || !body.email || !body.password) {
        throw new UserApiError('credentials not provided', StatusCodes.BAD_REQUEST, ERROR_CODES.INVALID);
      }

      const checkExistingUser = await User.findOne({ email: body.email }, { email: 1 });

      if (checkExistingUser !== null) {
        throw new UserApiError('User already exists', StatusCodes.BAD_REQUEST, ERROR_CODES.INVALID);
      }

      const hashedPassword = await generateHash(body.password);

      const registerUser = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        address: body.address,
        email: body.email,
        phoneNumber: body.phoneNumber || '',
        password: hashedPassword,
      });

      const user = {
        id: registerUser._id,
        firstName: registerUser.firstName,
        lastName: registerUser.lastName,
        email: registerUser.email,
        password: hashedPassword,
      };

      const response = {
        id: registerUser._id,
        token: generateToken(user),
        refresh_token: generateRefreshToken(user),
      };

      return response;
    } catch (error) {
      throw error;
    }
  }

  async login(body) {
    try {
      if (!body.email || !body.password) {
        throw new UserApiError('Credentials not provided', StatusCodes.BAD_REQUEST, ERROR_CODES.INVALID);
      }



    } catch (error) {
      throw error;
    }
  }

  /**
	 * @desc get all users
	 * @param {{}} body
	 * @return {Promise<Query<any, any, unknown, any>>}
	 */
  async getUser(body) {
    const user = await User.find({});

    return user;
  }
}

export const userService = new UserService();
