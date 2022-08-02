import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert, Text } from 'react-native';
import backArrow from '../../assets/images/back-arrow.png';
import { ExerciseList } from '../../Components/ExerciseList';

export default function TodaysRoutine ({navigation, exerciseList, sendRoutine}) {
  
  const [ routine, setRoutine ] = useState([]);

  const updateRoutine = (newRoutine) => {
    setRoutine(prevRoutine => [ ...prevRoutine, newRoutine]);
  }

  const handleSend = () => {
    if (routine.length > 0)  sendRoutine(routine);
    navigation.navigate('Routine');
  }

  const handleBack = () => {
    Alert.alert('', `Are you sure you want to finish this workout?`, [
      {
        text: 'NO',
      },
      { text: 'YES', onPress: () => navigation.navigate('Routine') },
    ]);
  }

 
  return (
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>

      <TouchableOpacity onPress={handleBack}>
        <Image source={backArrow} style={styles.backIcon}/>
      </TouchableOpacity>

      <View style={{borderBottomWidth:1, borderBottomColor:'gray', paddingBottom:5, width:'90%', alignSelf:'center', marginBottom:20}}>
        {exerciseList.length > 0 && <Text style={styles.text}>{(exerciseList[0].bodyTarget)} Workout</Text>}
      </View>

      <ExerciseList exerciseList={exerciseList} navigation={navigation} updateRoutine={updateRoutine}/>

      <TouchableOpacity onPress={handleSend} style={styles.button}>
        <Text style={{ fontWeight:'bold', color:'#9A9CE9', fontSize:19, fontStyle:'italic'}}>Finish workout</Text>
      </TouchableOpacity>
  
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
    color: 'gray',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold',
    alignSelf:'center'
  },
});