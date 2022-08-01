import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { RoutineItem } from '../RoutineItem';


export function LogList ({routines, navigation}) {
  
  return (
    <ScrollView>
      {routines.map((exerciseArray, index) => <RoutineItem navigation={navigation} routine={exerciseArray} key={index}/>)}
    </ScrollView>
  )
}