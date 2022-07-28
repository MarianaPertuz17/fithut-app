const rootRouter = require('express').Router();
const { exerciseRouter } = require('./exerciseRouter');
const { userRouter } = require('./userRouter');


rootRouter.use('/users', userRouter);
rootRouter.use('/exercises', exerciseRouter);


module.exports = rootRouter;
