import { catchAsync } from '#utils/catchAsync';
import { hotelServices } from './hotel';

const hotelController = {
  list: catchAsync(async (req, res) => {
    const response = await hotelServices.getHotelList(req.body);

    res.jsend.success(response);
  }),

  updateHotelDetails: catchAsync(async (req, res) => {
    const response = await hotelServices.updateHotelDetails(req.body);

    res.jsend.success(response);
  }),
};

export { hotelController };
