import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Alert, ImageBackground, Image} from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import { url } from '../../Config';
import { styles } from './styles';
import card from '../../assets/images/mesh-card.jpg'
import backArrow from '../../assets/images/back-arrow.png';


export default function Payment ({navigation, updateUser, user}) {
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

    const clientSecret = await fetchPaymentIntentClientSecret();

    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
    });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else if (paymentIntent) {
      updateUser(user._id);
      Alert.alert('Success', 'Payment successful', [
        { text: 'OK', onPress: () => {
          navigation.navigate('MyGym');
        }},
      ]);
    }
  };


  return (
    <View style={{backgroundColor:'#171724', height:'100%', flexDirection:'column'}}>
      <View style={{flexDirection:'row',  marginLeft:'5%',  marginTop:'12%',marginBottom:'10%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('MyGym')}>
          <Image source={backArrow} style={styles.backIcon}/>
        </TouchableOpacity>
        <View style={{ width:'75%', flexDirection:'row', justifyContent:'center', alignSelf:'center'}}>
        <Text style={styles.title}>Payment</Text>
        </View>
        
      </View>
      

      <View style={styles.creditCard}>
        <ImageBackground source={card} style={{height:'100%', borderRadius:20}} imageStyle={{ borderRadius: 20}} blurRadius={0}>
          <Text style={styles.titleText}>TYPE CREDIT CARD HERE</Text>
          <CardField
            postalCodeEnabled={false}
            placeholder={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={styles.card}
            onCardChange={(cardDetails) => {
              setCardDetails(cardDetails);
            }}
            style={styles.cardField}
          />
        </ImageBackground>
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

        

        <TouchableOpacity style={styles.button} onPress={handlePayPress}>
          <Text style={styles.text}>PAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}