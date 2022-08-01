import { ScrollView } from 'react-native';
import { ExerciseItem } from '../ExerciseItem';
import { LoggedExerciseItem } from '../LoggedExerciseItem';


export function ExerciseList ({exerciseList, navigation, updateRoutine}) {
  
  return (
    <>
      {updateRoutine ? 
      <ScrollView>
        {exerciseList.map((exercise, index) => <ExerciseItem exercise={exercise} key={index} navigation={navigation} updateRoutine={updateRoutine}/>)}
      </ScrollView>:
      
      <ScrollView>
        {exerciseList.map((exercise, index) => <LoggedExerciseItem exercise={exercise} key={index}/>)}
      </ScrollView>}
    </>
    
  )
}