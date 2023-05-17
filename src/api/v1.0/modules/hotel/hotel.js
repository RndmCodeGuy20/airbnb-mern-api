import { ERROR_CODES } from '#constants/index';
import { HotelApiError } from './error';
import HotelModel from './models';
import mongoose from 'mongoose';

/**
 * @class HotelServices
 * @description
 * @exports HotelServices
 * @version 1.0.0
 * @since 1.0.0
 */
class HotelServices {
  /**
	 * @method get list of hotels
	 * @description
	 * @param {Object} body
	 * @return {Promise<Object>}
	 * @throws {HotelApiError}
	 */
  async getHotelList(body) {
    try {
      const hotelList = await HotelModel.find();

      if (!hotelList) {
        throw new HotelApiError('No hotels found', ERROR_CODES.BAD_REQUEST, 'HOTEL_NOT_FOUND');
      }

      return hotelList;
    } catch (e) {
      throw e;
    }
  }

  /**
	 * @method get hotel details by id
	 * @param body
	 * @return {Promise<Object>}
	 */
  async getHotelDetailsById(body) {
    try {
      const hotelId = body.id;
      console.log(hotelId);

      const hotelData = await HotelModel.findOne({
        // eslint-disable-next-line new-cap
        _id: new mongoose.Types.ObjectId(hotelId),
      }, {
        name: 1, address: 1, description: 1, price_per_night: 1,
      });

      if (!hotelData) {
        throw new HotelApiError('No hotels found', ERROR_CODES.BAD_REQUEST, 'NO_HOTEL_FOUND');
      }

      return hotelData;
    } catch (error) {
      throw error;
    }
  }

  /**
	 *
	 * @return {Promise<Object>}
	 * @throws {HotelApiError}
	 */
  async updateHotelDetails(body) {
    try {
      const hotelId = body._id;

      const hotelData = await HotelModel.findOne(hotelId, {
        name: 1, address: 1, description: 1, price_per_night: 1,
      });

      return hotelData;
    } catch (error) {
      throw error;
    }
  }
}

export const hotelServices = new HotelServices();
