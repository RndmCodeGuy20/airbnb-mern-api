import { ERROR_CODES } from 'http-errors';
import { HotelApiError } from './error';
import HotelModel from './models';

class HotelServices {
  async getHotelList(body) {
    const hotelList = await HotelModel.find();

    if (!hotelList) {
      throw new HotelApiError('No hotels found', ERROR_CODES.BAD_REQUEST, 'HOTEL_NOT_FOUND');
    }

    return hotelList;
  }

  async updateHotelDetails(body) {
    const hotelId = body._id;

    const hotelData = await HotelModel.findOne(hotelId, {
      name: 1, address: 1, description: 1, price_per_night: 1,
    });

    return hotelData;
  }
}

export const hotelServices = new HotelServices();
