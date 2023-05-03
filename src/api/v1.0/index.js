import { Router } from 'express';
import userRoutes from './modules/user/routes';

const router = new Router();

router.get('/', (req, res) => {
  res.jsend.success('V1.0 API');
});

router.use(userRoutes);

export default router;
