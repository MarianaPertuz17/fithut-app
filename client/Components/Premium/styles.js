import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  infoContainer: {
    alignSelf:'center',
    backgroundColor: '#171724',
    borderRadius:10,
    width: '92%',
    height: 190,
    marginTop:40,
    padding:35,
    flexDirection:'row',
    justifyContent:'space-between'
  },

  title: {
    fontFamily: 'Epilogue-SemiBold', 
    fontSize: 16,
    color: 'white', 
  }, 

  h1: {
    fontFamily: 'Epilogue-Light', 
    fontSize: 14, 
    lineHeight:20,
    color: 'lightgray', 
  },
})