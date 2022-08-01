import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import image from '../../assets/images/3d_wallpaper.png';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function Register({ navigation }) {
  let [fontsLoaded] = useFonts({
    'Epilogue-Bold': require('../../assets/fonts/Epilogue-Bold.ttf'),
    'Epilogue-Light': require('../../assets/fonts/Epilogue-Regular.ttf'),
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: 'Epilogue-Bold', fontSize: 35, color: 'white', marginBottom:'5%'}}>REGISTER</Text>
          <TextInput
            id="displayName"
            name="displayName"
            placeholder='Username'
            style={styles.textInput}
          ></TextInput>

          <TextInput
            id="displayName"
            name="displayName"
            placeholder='E-mail'
            style={styles.textInput}
          ></TextInput>

          <TextInput
            id="displayName"
            name="displayName"
            placeholder='Password'
            style={styles.textInput}
          ></TextInput>

          <TextInput
            id="displayName"
            name="displayName"
            placeholder='Repeat password'
            style={styles.textInput}
          ></TextInput>

          <TouchableOpacity style={{ width:'50%', alignSelf:'flex-end'}}>
            <Text style={styles.signUpPurpleText}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>SIGN UP</Text>
          </TouchableOpacity>

          <View style={{ flexDirection:'row', justifyContent:'center' }} >
              <Text style={styles.signUpText}>Already have an account? </Text>

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUpPurpleText}>LOGIN HERE</Text>
              </TouchableOpacity>
             
            </View>
        </View>
        
  
        
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#9A9CE9',
    borderColor: 'transparent',
    borderRadius:50,
    borderWidth: 1.3,
    width:'100%',
    opacity: 0.4,
    marginBottom: '5%',
    marginTop: '5%',
    color: 'lightgray'
  },



  infoContainer: {
    padding:40,
    height: '100%',
    marginTop: '40%'
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
    width:'100%',
    marginTop:'7%',
    marginBottom:15
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
    fontFamily: 'Epilogue-Bold',
    
  },

  signUpPurpleText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#9A9CE9',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold',
    alignSelf:'flex-end'
  },
});