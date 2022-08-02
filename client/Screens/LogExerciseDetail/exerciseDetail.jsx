import { View, TouchableOpacity, Image, Text } from 'react-native';
import backArrow from '../../assets/images/back-arrow.png';
import { ExerciseList } from '../../Components/ExerciseList';
import { styles } from './styles';


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
  
    </View>
  )
}

