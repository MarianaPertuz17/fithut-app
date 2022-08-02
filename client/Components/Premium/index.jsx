import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles';
import star from '../../assets/images/star.png';


export function Premium ({navigation, updateUser, user}) {

  return (
    <TouchableOpacity style={styles.infoContainer} onPress={() => navigation.navigate('Payment', {updateUser, user})}>
      <View>
        <Text style={styles.title}>Become a Premium Member</Text>
        <View style={{flexDirection:'row', marginTop:20, maxWidth:250}}>
          <Text style={styles.h1}>Click here and enjoy unlimited routines!</Text>
        </View>
      </View>
      
      <Image source={star} style={{width:50, height:50, alignSelf:'center'}}/>
    </TouchableOpacity>
  )
}

/*
export function Premium ({navigation}) {

  const URL = 'https://buy.stripe.com/test_14k15GbC249j3IceUU';

  return (
    <TouchableOpacity style={styles.infoContainer} onPress={() => Linking.openURL(URL)}>
      <View>
        <Text style={styles.title}>Become a Premium Member</Text>
        <View style={{flexDirection:'row', marginTop:20, maxWidth:250}}>
          <Text style={styles.h1}>Click here and enjoy unlimited routines!</Text>
        </View>
      </View>
      
      <Image source={star} style={{width:50, height:50, alignSelf:'center'}}/>
    </TouchableOpacity>
  )
}

*/