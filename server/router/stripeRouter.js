const stripeRouter = require('express').Router();
const { getKey, postPayment } = require('../controllers/stripe');

stripeRouter.get('/', getKey);
stripeRouter.post('/create-payment-intent', postPayment);

exports.stripeRouter = stripeRouter;