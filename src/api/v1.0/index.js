import { Router } from 'express';
import userRoutes from './modules/user/routes';
import hotelRoutes from './modules/hotel/routes';

const router = new Router();

router.get('/', (req, res) => {
  res.jsend.success('V1.0 API');
});

router.use(userRoutes);
router.use(hotelRoutes);

export default router;
