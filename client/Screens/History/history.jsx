import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { LogList } from '../../Components/LogList';


export default function History ({routines, findUserRoutines, navigation}) {

  useEffect(() => {
    findUserRoutines();
  }, []);


  return (
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>
      
      <Text style={{ fontFamily: 'Epilogue-Bold', fontSize: 30, color: 'white', marginLeft:'5%',marginTop:'25%', marginBottom:'15%'}}>Log History</Text>

      <LogList routines={routines} findUserRoutines={findUserRoutines} navigation={navigation}/> 
      
    </View>
  )
}