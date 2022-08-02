import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import image from '../../assets/images/homepage_wallpaper.png';
import logo from '../../assets/images/FT_LOGO.png';
import google_logo from '../../assets/images/google_logo.png';
import fingerprint from '../../assets/images/purple_fingerprint.png';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { styles } from './styles';


export default function HomePage({ navigation }) {

  let [fontsLoaded] = useFonts({
    'Epilogue-Bold': require('../../assets/fonts/Epilogue-Bold.ttf'),
    'Epilogue-Regular': require('../../assets/fonts/Epilogue-Regular.ttf'),
    'Epilogue-SemiBold': require('../../assets/fonts/Epilogue-SemiBold.ttf'),
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={logo}
        />

        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: 'Epilogue-Bold', fontSize: 40, color: 'white' }}>FITHUT</Text>
          <Text style={styles.welcomeMessage}>Welcome to the hut of health and life quality. Have access to workouts that work out.</Text>
          

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>LOGIN WITH ACCOUNT</Text>
            </TouchableOpacity>

            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:15, marginBottom: 25 }}>
              <TouchableOpacity style={styles.auxButton}>
                <Image style={styles.googleIcon} source={google_logo}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.auxButton}>
                <Image style={styles.fpIcon} source={fingerprint}/>
              </TouchableOpacity>            
            </View>

            <View style={{ flexDirection:'row', justifyContent:'center' }}>
              <Text style={styles.signUpText}>Don't have an account yet? </Text>

              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpPurpleText}>SIGN UP HERE</Text>
              </TouchableOpacity>
             
            </View>
            
       
          
        </View>
        
      </ImageBackground>
      
      <StatusBar style="light" />
    </View>
  );
}

