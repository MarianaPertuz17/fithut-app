const stripeRouter = require('express').Router();
const { getKey, postPayment } = require('../controllers/stripe');

stripeRouter.get('/', getKey);
stripeRouter.post('/payment', postPayment);

exports.stripeRouter = stripeRouter;