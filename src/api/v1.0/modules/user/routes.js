import { Router } from 'express';
import { api } from './controller';
import { methodNotAllowed } from '#middlewares/index';


const router = new Router();

router.route('/user/register')
    .post(api.register).all(methodNotAllowed);
router.route('/user/getuser')
    .get(api.getUser).all(methodNotAllowed);

module.exports = router;
