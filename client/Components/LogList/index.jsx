import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { RoutineItem } from '../RoutineItem';


export function LogList ({routines, findUserRoutines}) {
  
  // useEffect(() => {
  //   findUserRoutines();
  //   console.log('getting there')
  // }, []);

  return (
    <ScrollView>
      {routines.map((exerciseArray, index) => <RoutineItem routine={exerciseArray} key={index}/>)}
    </ScrollView>
  )
}