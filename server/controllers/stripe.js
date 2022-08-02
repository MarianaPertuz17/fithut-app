require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);

exports.getKey = (req, res) => {
  try {
    res.status(200).send({res: process.env.STRIPE_PUBLISHABLE_KEY, error: false});
  } catch (e) {
    res.status(500).send({res: 'Server error', error: true});
  }
}

exports.postPayment = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: "usd",
      payment_method_types: ["card"],
    });

    const clientSecret = paymentIntent.client_secret;
    res.status(200).send({clientSecret: clientSecret, error: false});
  } catch (e) {
    res.status(500).send({res: 'Server error', error: true});
  }
}