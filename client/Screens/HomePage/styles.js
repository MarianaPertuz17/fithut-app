import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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