import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import image from '../../assets/images/homepage_wallpaper.png';
import logo from '../../assets/images/FT_LOGO.png';
import google_logo from '../../assets/images/google_logo.png';
import fingerprint from '../../assets/images/purple_fingerprint.png';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


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
          

            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>LOGIN WITH ACCOUNT</Text>
            </Pressable>

            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:15, marginBottom: 25 }}>
              <Pressable style={styles.auxButton}>
                <Image style={styles.googleIcon} source={google_logo}/>
              </Pressable>
              <Pressable style={styles.auxButton}>
                <Image style={styles.fpIcon} source={fingerprint}/>
              </Pressable>            
            </View>

            <View style={{ flexDirection:'row', justifyContent:'center' }}>
              <Text style={styles.signUpText}>Don't have an account yet? </Text>

              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpPurpleText}>SIGN UP HERE</Text>
              </Pressable>
             
            </View>
            
       
          
        </View>
        
      </ImageBackground>
      
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  image: {
    flex: 1,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#9A9CE9',
    borderColor: 'transparent',
    borderRadius:50,
    borderWidth: 1.3,
    width:'100%'
  },

  auxButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'transparent',
    borderColor: '#9A9CE9',
    borderRadius:50,
    borderWidth: 1.3,
    height:50,
    width:140
  },

  infoContainer: {
    padding:40,
    height: '100%',
    marginTop: '55%'

  },

  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold'
  },

  signUpText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'gray',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold'
  },

  signUpPurpleText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#9A9CE9',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold'
  },

  tinyLogo: {
    width: 50,
    height: 50,
    margin:40
  },

  fpIcon: {
    width: 30,
    height: 40,
  },

  googleIcon: {
    width: 30,
    height: 30,
  },

  welcomeMessage: {
    fontFamily: 'Epilogue-Regular', 
    fontSize: 15, 
    color:'gray',
    marginTop: 30,
    marginBottom: 35
  }
});