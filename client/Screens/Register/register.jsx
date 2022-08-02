import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import image from '../../assets/images/3d_wallpaper.png';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { styles } from './styles';


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

