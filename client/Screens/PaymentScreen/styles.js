import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textInput: {
    height:40,
    width:'90%',
    backgroundColor:'white',
    alignSelf:'center',
    marginBottom:20,
    borderRadius:10,
    padding:5
  },

  title:{
    color: 'white',
    fontSize:20,
    fontWeight:'bold',
  },

  creditCard:{
    marginTop:40,
    marginBottom:40,
    height:230,
    width:'90%',
    alignSelf:'center',
  },

  cardField: {
    width: '100%',
    height: 50,
    marginVertical: 30,
    backgroundColor:'transparent',
    opacity:0.5,
    position: 'absolute',
    bottom:0
  },

  titleText: {
    fontWeight:'bold',
    fontSize:20,
    marginTop:25,
    marginLeft:25
  },

  card: {
    height:230,
    width:'90%',

  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#10ECE4',
    borderColor: 'transparent',
    borderRadius:50,
    borderWidth: 1.3,
    width:'70%',
    marginTop:'10%',
    marginBottom:15
  },

  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold',
  },  

  backIcon: {
    width: 35,
    height: 35,
  },

  payText: {
    color:'gray',
    fontSize:14,
  },

  priceTag: {
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  }
})