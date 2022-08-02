import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  exerciseContainer: {
    flexDirection:'row',
    height: 100,
    width:'95%',
    marginBottom:'10%',
    marginLeft:'4%'
  },

  icon: {
    height:'100%',
  },

  iconContainer: {
    padding:7,
    backgroundColor: '#171724',
    borderRadius:10,
    width:'29%',
    flexDirection:'column',
    alignItems:'center'
  },

  exerciseName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    maxWidth:255,  
  },

  spanContainer: {
    flexDirection: 'row',
  },

  spanText: {
  color: 'gray',
  fontWeight:'bold',
}
})