import { Text, ImageBackground, TouchableOpacity, View } from 'react-native';
import image from '../../assets/images/exerciseScreen_wallpaper.png';
import { Premium } from '../../Components/Premium';
import { styles } from './styles';


export default function MyGym ({navigation, user, updateEquipment}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={{ fontFamily: 'Epilogue-Bold', fontSize: 30, color: 'white', marginLeft:'5%',marginTop:'60%', marginBottom:'10%'}}>Welcome back {user.userName}!</Text>
        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Equipment', {user, updateEquipment})} >
          <Text style={{color:'white', fontFamily: 'Epilogue-Light', fontSize: 15,}}>Change available equipment</Text>
        </TouchableOpacity>
        <Text style={{color:'gray', marginLeft:'5%'}}>If you want to start training, go right away to Routine.</Text>   
        {!user.premium && <Premium navigation={navigation}/>}
      </ImageBackground>   
    </View>

  )
}