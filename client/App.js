import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';

import { TabNavigator } from './Navigation/tabNavigator';
import { ExerciseInfo } from './Screens/Routine/exerciseInfo';
import HomeScreen from './Screens/HomePage/home';
import Login from './Screens/Login/login';
import Register from './Screens/Register/register'
import TodaysRoutine from './Screens/Routine/todaysroutine';
import LogExerciseDetail from './Screens/LogExerciseDetail/exerciseDetail';
import Equipment from './Screens/MyGym/equipment';
import Payment from './Screens/PaymentScreen/payment';

//importing services
import { userService } from './Services/userService';
import { paymentService } from './Services/paymentService';
import { routineService } from './Services/routineService';
import { exerciseService } from './Services/exerciseService';


const Stack = createNativeStackNavigator();


export default function App() {

  const [ userInfo, setUserInfo ] = useState([]);
  const [ exerciseList, setExerciseList ] = useState([]);
  const [ userEquipment, setUserEquipment ] = useState([]);
  const [ routinesList, setRoutinesList ] = useState([]);
  const [ publishableKey, setPublishableKey ] = useState('');

  const fetchUserInfo = async () => {
    const {res, error} = await userService.getUser();
    if (!error) setUserInfo(res);
    else alert(res);
  }

  useEffect(() => {

    fetchUserInfo();

    const initialize = async () => {
      const {res, error} = await paymentService.getKey();
      if (!error) setPublishableKey(res);      
      else alert(res);
    }

    initialize();
  }, []);


  const findUserRoutines = async() => {
    const {res, error} = await routineService.getRoutines(userInfo._id);
    if (!error) setRoutinesList(res);
  }

  const updateEquipment = async (id, equipment) => {
    const {res, error} = await userService.putEquipment(id, equipment);
    if (!error) setUserEquipment(res);
  }

  const findExercises = async (bodyPart, equipment) => {
    const {res, error} = await exerciseService.getExercises(bodyPart, equipment);
    if (!error) {
      const array = res.map(exe => exe).filter(ele => ele.equipment === 'body weight' || equipment.includes(ele.equipment));
      // Shuffle array
      const shuffled = array.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 12);

      setExerciseList(selected);

    }
  }

  const sendRoutine = async (routine) => {
    await routineService.postRoutine(routine, userInfo._id);
    findUserRoutines();
  }

  const updateUser = async (id) => {
    await userService.updateUser(id, true);
    fetchUserInfo();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        {exerciseList && <Stack.Screen name='TodaysRoutine'>{(props) => <TodaysRoutine {...props} exerciseList={exerciseList} sendRoutine={sendRoutine}/>}</Stack.Screen>}
        <Stack.Screen name='ExerciseInfo'>{(props) => <ExerciseInfo {...props} exerciseList={exerciseList}/>}</Stack.Screen>
        <Stack.Screen name='LogExerciseInfo'>{(props) => <LogExerciseDetail {...props}/>}</Stack.Screen>
        <Stack.Screen name='Equipment'>{(props) => <Equipment {...props}/>}</Stack.Screen>
        <Stack.Screen name='Payment'>{(props) => <Payment {...props} updateUser={updateUser} user={userInfo}/>}</Stack.Screen>
        <Stack.Screen name='Main'>{(props) => <TabNavigator {...props} user={userInfo} updateEquipment={updateEquipment} findExercises={findExercises} userEquipment={userEquipment} routines={routinesList} findUserRoutines={findUserRoutines}/>}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}