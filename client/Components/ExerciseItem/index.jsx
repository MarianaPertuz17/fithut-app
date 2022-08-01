import { Text, View, Image, Pressable } from 'react-native';
import upperIcon from '../../assets/images/biceps-icon.png';
import lowerIcon from '../../assets/images/leg-icon.png';
import coreIcon from '../../assets/images/core-icon.png';
import checkmark from '../../assets/images/check_mark.png';
import { styles } from './styles';


export function ExerciseItem ({navigation, exercise, updateRoutine}) {

  const { name, target, gifUrl, bodyTarget, equipment, sets, reps } = exercise;
  const formattedName = name.slice(0,1).toUpperCase() + name.slice(1);

  return(
   
    <Pressable style={styles.exerciseContainer} onPress={() => navigation.navigate('ExerciseInfo', {
      sets,
      reps,
      formattedName, 
      target, 
      gifUrl, 
      bodyTarget, 
      equipment,
      updateRoutine
    })}>
      <View style={styles.iconContainer} >
        {bodyTarget === 'Upper Body' && <Image source={upperIcon} style={styles.icon}/>}
        {bodyTarget === 'Lower Body' && <Image source={lowerIcon} style={styles.icon}/>}
        {bodyTarget === 'Core' && <Image source={coreIcon} style={styles.icon}/>}
      </View>
      <Image source={checkmark} style={styles.checkMark}/>

      <View style ={{marginLeft: '2%'}}>
        <Text style={styles.exerciseName}>{formattedName}</Text>
        <View style = {styles.spanContainer}>
          <Text style={styles.spanText}>{sets} SETS - </Text>
          <Text style={styles.spanText}>{reps} REPS</Text>
        </View>
        
        <Text style={{...styles.spanText, fontWeight:'normal', fontStyle:'italic'}}>See instructions</Text>
      </View>  
    </Pressable>
  )
}