import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  backIcon: {
    width: 35,
    height: 35,
    marginTop:50,
    marginLeft: 20
  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1.3,
    width:190,
    height:25,
    marginTop:'10%',
    position:'absolute',
    bottom:20,
    right:'4%',
    alignSelf:'flex-end'
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold',
    alignSelf:'center'
  },

  spanText: {
    fontSize: 14,
    color: 'white',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Light',
    alignSelf:'center',
    marginTop:10
  }
});