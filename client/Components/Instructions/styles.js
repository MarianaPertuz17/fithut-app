import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  infoContainer: {
    alignSelf:'center',
    backgroundColor: '#171724',
    borderColor:'#444444',
    borderTopWidth:1,
    width: '100%',
    height: 190,
    marginTop:40,
    paddingLeft:52,
  },

  title: {
    fontFamily: 'Epilogue-Light', 
    fontSize: 16,
    fontWeight:'bold', 
    fontStyle:'italic',
    color: 'white', 
    marginTop:25
  }, 

  h1: {
    fontFamily: 'Epilogue-Light', 
    fontSize: 15, 
    fontWeight:'bold',
    color: 'lightgray', 
  },

  h2: {
    fontFamily: 'Epilogue-Light', 
    fontSize: 14, 
    color: 'gray', 
  }
})