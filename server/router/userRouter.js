const userRouter = require('express').Router();
const { getUser, postUser, putEquipment } = require('../controllers/user');

userRouter.put('/:id/equipment', putEquipment);
userRouter.get('/', getUser);
userRouter.post('/', postUser);

exports.userRouter = userRouter;