import { Text, View } from 'react-native';
import { styles } from './styles';
import moment from 'moment';


export function RoutineItem ({routine}) {

  const { exercises, createdAt } = routine;
  const formattedDate = moment(createdAt).format('Do MMMM');

  console.log(exercises, 'ejer')
  return(

    <View>
      <View style={{flexDirection:'row', marginLeft:'5%',marginBottom:'2%', justifyItems:'center'}}>  
        <View style={styles.circleIcon}></View>
        <Text style={styles.dateText}>{formattedDate.toUpperCase()}</Text>
      </View>
      {exercises.length > 0 && 
      <View style={styles.exerciseContainer}>
       
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
      
      </View>}
    </View>
    
  )
}