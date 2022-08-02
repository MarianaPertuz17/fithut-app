import { url } from "../Config";

export const paymentService = {};

paymentService.getKey = () => {
  return fetch(`${url}/stripe`)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
}


paymentService.payPremium = (cardDetails) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({cardDetails})
  }; 

  return fetch(`${url}/stripe/payment`, requestOptions)
          .then(res => res.json())
          .then(data => data)
          .catch(e => e);
};