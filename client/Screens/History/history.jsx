import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';

export default function History () {

  return (
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>
      
      <Text style={{ fontFamily: 'Epilogue-Bold', fontSize: 30, color: 'white', marginLeft:'5%',marginTop:'25%', marginBottom:'15%'}}>My profile</Text>

      
    </View>
  )
}

const styles = StyleSheet.create({

  iconsContainer: {
    height:'40%',
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    justifyContent:'space-between', 
    paddingLeft:'5%', 
    paddingRight:'5%',
    alignItems:'center'
  },

  exerciseContainer: {
    alignItems: 'center',
    padding:10,
    backgroundColor: '#2E2E42',
    opacity: 1,
    borderColor: 'transparent',
    borderRadius:20,
    borderWidth: 1.3,
    width: '47%',
  },

  icon: {
    width: 60,
    height: 60,
  },

  backIcon: {
    width: 35,
    height: 35,
    marginTop:50,
    marginLeft: 20
  },

  exerciseName: {
    color: '#9A9CE9',
    marginBottom:'15%'
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
    fontFamily: 'Epilogue-Bold'
  },
});