import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  exerciseContainer: {
    flexDirection:'row',
    height: 100,
    width:'95%',
    marginLeft:'4%',
  },

  icon: {
    height:'100%',
  },

  checkMark: {
    width:30,
    height:30,
    position: 'absolute',
    left:75,
    top:72
  },

  iconContainer: {
    padding:7,
    backgroundColor: '#171724',
    borderRadius:10,
  },

  exerciseName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    maxWidth:255,  
  },

  spanText: {
  color: 'gray',
  fontWeight:'bold',
  },

  line: {
    backgroundColor:'#444444',
    height:40,
    marginLeft:'15%',
    width:1,
    marginRight:30,
  }
})