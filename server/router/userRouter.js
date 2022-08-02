const userRouter = require('express').Router();
const { getUser, postUser, putEquipment, updateUser } = require('../controllers/user');

userRouter.put('/:id/equipment', putEquipment);
userRouter.put('/:id', updateUser);
userRouter.get('/', getUser);
userRouter.post('/', postUser);

exports.userRouter = userRouter;