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
    const { cardDetails } = req.body;
    const [expMonth, expYear] = cardDetails.expiry.split('/');
    const number = cardDetails.number.split(' ').join('');
    const { cvc } = cardDetails;

    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number,
        exp_month: parseInt(expMonth, 10),
        exp_year: parseInt(expYear, 10),
        cvc,
      },
    });

    console.log(paymentMethod, 'ready payment')
    res.status(200).send({res: 'Payment successful', error: false});
  } catch (e) {
    res.status(500).json({res: 'Server error', error: true});
  }
};
