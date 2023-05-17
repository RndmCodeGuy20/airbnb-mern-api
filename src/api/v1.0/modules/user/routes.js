import { Router } from 'express';
import { api } from './controller';
import { methodNotAllowed, validateUser } from '#middlewares/index';


const router = new Router();

router.route('/user/register')
    .post(api.register)
    .all(methodNotAllowed);
router.route('/user/login')
    .post(validateUser, api.login)
    .all(methodNotAllowed);
router.route('/user/update')
    .post(api.updateUserById)
    .all(methodNotAllowed);
router.route('/user/delete')
    .post(api.deleteUser)
    .all(methodNotAllowed);
router.route('/user/:id')
    .get(api.getUserById)
    .all(methodNotAllowed);

module.exports = router;
