import { ImageBackground, StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native';
import backArrow from '../../assets/images/back-arrow.png';
import { ExerciseList } from '../../Components/ExerciseList';

export default function TodaysRoutine ({navigation, updateEquipment, findExercises, exerciseList}) {


 const handleBack = () => {
  Alert.alert('', `You are not done with the exercises yet. Are you sure you want to finish this workout?`, [
    {
      text: 'NO',
    },
    { text: 'YES', onPress: () => navigation.navigate('Routine') },
  ]);
 }

 
  return (
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>

      <Pressable onPress={handleBack}>
        <Image source={backArrow} style={styles.backIcon}/>
      </Pressable>

      <ExerciseList exerciseList={exerciseList} navigation={navigation}/>

      
    </View>
  )
}

const styles = StyleSheet.create({

  iconsContainer: {
    height:'40%',
    alignItems:'center',
    justifySelf:'center'
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