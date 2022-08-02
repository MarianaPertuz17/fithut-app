import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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