const Router = require('koa-router')
import User from '../server/user/user.controller';
const router = new Router();
// 获取所有用户信息
router.get('/allUsers', User.getAllUsers)
// 获取某个用户信息
router.get('/get/:id', User.getUser)
// 新增用户信息
router.post('/add', User.addUser)
// 删除用户信息
router.post('/delete/:id', User.deleteUser)

// 修改用户信息
router.post('/update', User.updateUser)
export default router;