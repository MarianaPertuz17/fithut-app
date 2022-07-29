import { Text, View, Image, Pressable } from 'react-native';
import upperIcon from '../../assets/images/biceps-icon.png';
import lowerIcon from '../../assets/images/leg-icon.png';
import coreIcon from '../../assets/images/core-icon.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


export function ExerciseItem ({navigation, exercise}) {

  const { name, target, gifUrl, bodyTarget, equipment} = exercise;
  const setNumber = Math.round(Math.random()*2)+2;
  const reps = Math.round(Math.random()*20)+5;

  return(
    <View style={styles.exerciseContainer}>
      <View style={styles.iconContainer} >
        {bodyTarget === 'Upper Body' && <Image source={upperIcon} style={styles.icon}/>}
        {bodyTarget === 'Lower Body' && <Image source={lowerIcon} style={styles.icon}/>}
        {bodyTarget === 'Core' && <Image source={coreIcon} style={styles.icon}/>}
      </View>
      
      <View style ={{marginLeft: '4%'}}>
        <Text style={styles.exerciseName}>{name.slice(0,1).toUpperCase()+name.slice(1)}</Text>
        <View style = {styles.spanContainer}>
          <Text style={styles.spanText}>{setNumber} SETS - </Text>
          <Text style={styles.spanText}>{reps} REPS</Text>
        </View>

        <Pressable onPress={() => navigation.navigate('ExerciseInfo', {
          setNumber,
          reps,
          name, 
          target, 
          gifUrl, 
          bodyTarget, 
          equipment
        })}>
          <Text style={{...styles.spanText, fontWeight:'normal', fontStyle:'italic'}}>See instructions</Text>
        </Pressable>
      </View>  
    </View>
  )
}