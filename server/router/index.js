const rootRouter = require('express').Router();
const { stripeRouter } = require('./stripeRouter');
const { exerciseRouter } = require('./exerciseRouter');
const { routineRouter } = require('./routineRouter');
const { userRouter } = require('./userRouter');

rootRouter.use('/users', userRouter);
rootRouter.use('/exercises', exerciseRouter);
rootRouter.use('/routines', routineRouter);
rootRouter.use('/stripe', stripeRouter);


module.exports = rootRouter;
