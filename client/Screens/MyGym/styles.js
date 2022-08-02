import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  image: {
    flex: 1,
  },

  button: {
    width:'65%',
    padding:10,
    alignItems:'center',
    marginLeft:'4%',
    marginBottom:'5%',
    backgroundColor:'#9A9CE9',
    borderRadius:20
  },
  
  equipmentContainer: {
    flexDirection:'column',
    backgroundColor: '#171724',
    borderRadius:10,
    width: '49%',
    height: 100,
    marginBottom:'2%',
    justifyContent:'center'
  },

  saveButton: {
    width:'15%',
    marginRight:'5%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
  }
});