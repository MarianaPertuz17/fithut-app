import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import moment from 'moment';

export function RoutineItem ({routine, navigation}) {

  const { exercises, createdAt } = routine;
  const formattedDate = moment(createdAt).format('Do MMMM, YYYY');

  return(
    <View>
      <View style={{flexDirection:'row', marginLeft:'5%',marginBottom:'2%', justifyItems:'center'}}>  
        <View style={styles.circleIcon}></View>
        <Text style={styles.dateText}>{formattedDate.toUpperCase()}</Text>
      </View>
      {exercises.length > 0 && 
      <Pressable style={styles.exerciseContainer} onPress={() => navigation.navigate('LogExerciseInfo', {
        exercises,
        formattedDate
      })}> 
        <Text style={styles.routineName}>{exercises[0].routineName} Workout</Text>
        <View style={styles.extraInfoContainer}>
          <View>
            <Text style={styles.extraInfoText}>EXERCISES</Text>
            <Text style={{...styles.extraInfoText, fontWeight:'bold',color:'white'}}>{exercises.length}</Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Text style={styles.extraInfoText}>CALORIES</Text>
            <Text style={{...styles.extraInfoText, fontWeight:'bold',color:'white'}}>{exercises.length}</Text>
          </View>
        </View>
      </Pressable>}
    </View>
    
  )
}