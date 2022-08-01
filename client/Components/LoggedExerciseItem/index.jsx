import { Text, View, Image, Pressable } from 'react-native';
import upperIcon from '../../assets/images/biceps-icon.png';
import lowerIcon from '../../assets/images/leg-icon.png';
import coreIcon from '../../assets/images/core-icon.png';
import checkmark from '../../assets/images/check_mark.png';
import { styles } from './styles';


export function LoggedExerciseItem ({navigation, exercise}) {

  console.log(exercise, 'solo exe')
  
  const {exerciseName, setsCompleted, realSets, repsPerSet, routineName} = exercise;
  return(
   <>
    <View style={styles.line}></View>
    <View style={styles.exerciseContainer}>
      <View style={styles.iconContainer} >
        {routineName === 'Upper Body' && <Image source={upperIcon} style={styles.icon}/>}
        {routineName === 'Lower Body' && <Image source={lowerIcon} style={styles.icon}/>}
        {routineName === 'Core' && <Image source={coreIcon} style={styles.icon}/>}
      </View>
      <Image source={checkmark} style={styles.checkMark}/>

      <View style ={{marginLeft: '2%'}}>
        <Text style={styles.exerciseName}>{exerciseName}</Text>
        <View style = {styles.spanContainer}>
          <Text style={styles.spanText}>{setsCompleted}/{realSets} SETS</Text>
          <Text style={styles.spanText}>{repsPerSet} REPS PER SET</Text>
        </View>
      </View>  
    </View>
   </>
    
  )
}