import { Router } from 'express';
import { hotelController as api } from './controller';
import { methodNotAllowed } from '#middlewares/route.middleware';

const router = new Router();

router.route('/hotels/list').get(api.list).all(methodNotAllowed);
router.route('/hotels/:id').get(api.getHotelDetailsById).all(methodNotAllowed);
router.route('/hotels/update').get(api.updateHotelDetails).all(methodNotAllowed);

export default router;
