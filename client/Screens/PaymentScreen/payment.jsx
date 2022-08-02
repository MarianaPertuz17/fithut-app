import { CardField, useStripe, useConfirmPayment } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { Text, ImageBackground, TouchableOpacity, View, TextInput, Alert} from 'react-native';
import { url } from '../../Config';
import { styles } from './styles';


export default function Payment () {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ cardDetails, setCardDetails ] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${url}/stripe/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethodType: 'card',
        currency: 'usd',
      }),
    });
    const {clientSecret} = await response.json();

    return clientSecret;
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete || !email) {
      Alert.alert('Missing fields');
      return;
    }

    const billingDetails = {
      email,
      name
    }
    // 1. fetch Intent Client Secret from backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      console.log('Payment confirmation error', error.message);
    } else if (paymentIntent) {
      Alert.alert('Success', 'Payment successful');
    }
  };


  return (
    <View>
      <View>
        <Text>Card container</Text>
      </View>
      <View>
        <TextInput
          id="email"
          name="email"
          placeholder='E-mail'
          style={styles.textInput}
          onChangeText={(e) => setEmail(e)}
        />

        <TextInput
          id="name"
          name="name"
          placeholder='Name on card'
          style={styles.textInput}
          onChangeText={(e) => setName(e)}
        />

        <CardField
          postalCodeEnabled={false}
          placeholder={{
            number: '4242 4242 4242 4242',
          }}
          cardStyle={styles.card}
          onCardChange={(cardDetails) => {
            console.log('cardDetails', cardDetails);
            setCardDetails(cardDetails);
          }}
          style={styles.cardField}
         />

         <TouchableOpacity onPress={handlePayPress}>
          <Text style={{color:'blue'}}>Pay</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}
