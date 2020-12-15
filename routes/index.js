const Router = require('koa-router');
import userRouter from './user';
const router = new Router()
router.use('/api/user',userRouter.routes());
export default router;