import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Alert, ImageBackground, Image} from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import { url } from '../../Config';
import { styles } from './styles';
import card from '../../assets/images/card-front.png'
import backCard from '../../assets/images/card-back.png'
import backArrow from '../../assets/images/back-arrow.png';
import { paymentService } from '../../Services/paymentService';


export default function Payment ({navigation, updateUser, user}) {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ cardDetails, setCardDetails ] = useState({});

  const [inputsAreValid, setInputsAreValid] = useState(false);

  const handlePayPress = async () => {
    const {res, error} = await paymentService.payPremium(
      cardDetails,
    );
    console.log(res, 'respuesta payment')
    if (!error) {
      updateUser(user._id);
      Alert.alert('Success', 'Payment successful', [
        { text: 'OK', onPress: () => {
          navigation.navigate('MyGym');
        }},
      ]);
    } else {
      Alert.alert(`Error: ${res}`);
    }
  };


  const handleCreditCardChange = (v) => {
    console.log(v, 'ajaaaaa')
    const {cvc, expiry, number, type} = v.values;
    setCardDetails({cvc, expiry, number, type});
    if (v.valid) {
      setInputsAreValid(true);
    } else {
      setInputsAreValid(false);
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

      <View style={{marginBottom:20, alignItems:'center'}}>  
        <Text style={styles.payText}>You're about to pay:</Text>
        <Text style={styles.priceTag}>10.00 USD</Text>
      </View>

      <View style={{ width:'95%', alignSelf:'center', marginBottom:20}}>
        <CreditCardInput onChange={handleCreditCardChange} inputStyle={{backgroundColor:'white', borderRadius:10, marginRight:25}} labelStyle={{color:'gray'}} cardImageFront={card} cardImageBack={backCard} inputContainerStyle={{marginLeft:15}}/>
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
