import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import HomeScreen from "./Screens/HomePage/home";
import Login from './Screens/Login/login';
import Register from './Screens/Register/register'
import TodaysRoutine from './Screens/Routine/todaysroutine';
import { TabNavigator } from './Navigation/tabNavigator';
import { userService } from './Services/userService';
import { ExerciseInfo } from './Screens/Routine/exerciseInfo';
import LogExerciseDetail from './Screens/LogExerciseDetail/exerciseDetail';
import Equipment from './Screens/MyGym/equipment';
import { StripeProvider } from '@stripe/stripe-react-native';
import { fetchKeyService } from './Services/fetchKeyService';
import Payment from './Screens/PaymentScreen/payment';


const Stack = createNativeStackNavigator();


export default function App() {

  const [ userInfo, setUserInfo ] = useState([]);
  const [ exerciseList, setExerciseList ] = useState([]);
  const [ userEquipment, setUserEquipment ] = useState([]);
  const [ routinesList, setRoutinesList ] = useState([]);
  const [ publishableKey, setPublishableKey ] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      const {res, error} = await userService.getUser();
      if (!error) setUserInfo(res);
      else alert(res);
    }

    fetchUserInfo();

    const initialize = async () => {
      const {res, error} = await fetchKeyService.getKey();
      if (!error) setPublishableKey(res);      
      else alert(res);
    }

    initialize();
  }, []);


  const findUserRoutines = async() => {
    const {res, error} = await userService.getRoutines(userInfo._id);
    if (!error) setRoutinesList(res);
  }

  const updateEquipment = async (id, equipment) => {
    const {res, error} = await userService.putEquipment(id, equipment);
    if (!error) setUserEquipment(res);
  }

  const findExercises = async (bodyPart, equipment) => {
    const {res, error} = await userService.getExercises(bodyPart, equipment);
    if (!error) {
      const array = res.map(exe => exe).filter(ele => ele.equipment === 'body weight' || equipment.includes(ele.equipment));
      // Shuffle array
      const shuffled = array.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 12);

      setExerciseList(selected);

    }
  }

  const sendRoutine = async (routine) => {
    await userService.postRoutine(routine, userInfo._id);
    findUserRoutines();
  }

  return (
    <StripeProvider
      publishableKey={publishableKey}
      merchantIdentifier="merchant.com.stripe.react.native"
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          {exerciseList && <Stack.Screen name="TodaysRoutine">{(props) => <TodaysRoutine {...props} exerciseList={exerciseList} sendRoutine={sendRoutine}/>}</Stack.Screen>}
          <Stack.Screen name="ExerciseInfo">{(props) => <ExerciseInfo {...props} exerciseList={exerciseList}/>}</Stack.Screen>
          <Stack.Screen name="LogExerciseInfo">{(props) => <LogExerciseDetail {...props}/>}</Stack.Screen>
          <Stack.Screen name="Equipment">{(props) => <Equipment {...props}/>}</Stack.Screen>
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name='Main'>{(props) => <TabNavigator {...props} user={userInfo} updateEquipment={updateEquipment} findExercises={findExercises} userEquipment={userEquipment} routines={routinesList} findUserRoutines={findUserRoutines}/>}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}