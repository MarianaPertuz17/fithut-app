import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  exerciseContainer: {
    height: 150,
    width:'100%',
    marginBottom:'10%',
    backgroundColor: '#171724',
    paddingLeft:'15%'
  },

  circleIcon: {
    height: 10,
    width:10,
    borderRadius:5,
    backgroundColor:'gray',
    alignSelf:'center'
  },

  dateText: {
    color:'gray',
    fontSize:17,
    fontWeight: 'bold',
    marginLeft:'8%',
  },

  routineName: {
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    marginTop:'3%'
  },

  extraInfoContainer: {
    flexDirection: 'row',
    marginTop:'3%',
  },

  extraInfoText: {
    color:'gray',
    marginBottom:'2%',
    marginRight:30,
    fontSize:14
  },

  line: {
    backgroundColor:'#444444',
    height:'80%',
    alignSelf:'center',
    width:1,
    marginRight:30,
  }

})