import { StyleSheet, View, TouchableOpacity, Image, Alert, Text } from 'react-native';
import backArrow from '../../assets/images/back-arrow.png';
import { ExerciseList } from '../../Components/ExerciseList';


export default function LogExerciseDetail ({navigation, route}) {
  
  const { exercises, formattedDate } = route.params;
 
  return (
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>

      <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <Image source={backArrow} style={styles.backIcon}/>
      </TouchableOpacity>

      <View style={{borderBottomWidth:1, borderBottomColor:'#444444', paddingBottom:40, paddingTop:25, width:'90%', alignSelf:'center'}}>
        {exercises.length > 0 && <Text style={styles.text}>{(exercises[0].routineName)} Workout</Text>}
        <Text style={styles.spanText}>{formattedDate}</Text>
      </View>
      

      <ExerciseList exerciseList={exercises}/>

      {/* <TouchableOpacity onPress={handleSend} style={styles.button}>
        <Text style={{ fontWeight:'bold', color:'#9A9CE9', fontSize:19, fontStyle:'italic'}}>Finish workout</Text>
      </TouchableOpacity> */}
  
    </View>
  )
}

const styles = StyleSheet.create({

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