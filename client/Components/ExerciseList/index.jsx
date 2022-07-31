import { ScrollView } from 'react-native';
import { ExerciseItem } from '../ExerciseItem';

export function ExerciseList ({exerciseList, navigation, updateRoutine}) {
  
  return (
    <ScrollView>
      {exerciseList.map((exercise, index) => <ExerciseItem exercise={exercise} key={index} navigation={navigation} updateRoutine={updateRoutine}/>)}
    </ScrollView>
  )
}