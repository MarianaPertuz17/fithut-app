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

const Stack = createNativeStackNavigator();


export default function App() {

  const [ userInfo, setUserInfo ] = useState([]);
  const [ exerciseList, setExerciseList ] = useState([]);
  const [ userEquipment, setUserEquipment ] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const {res, error} = await userService.getUser();
      if (!error) setUserInfo(res);
      else alert(res);
    }

    fetchUserInfo();
  }, []);

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
      console.log(selected, 'eñe')

    }
  }

  const sendRoutine = async (routine) => {
    await userService.postRoutine(routine, userInfo._id);
  }
  console.log(exerciseList, 'exxxx')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {exerciseList && <Stack.Screen name="TodaysRoutine">{(props) => <TodaysRoutine {...props} exerciseList={exerciseList} sendRoutine={sendRoutine}/>}</Stack.Screen>}
        <Stack.Screen name="ExerciseInfo">{(props) => <ExerciseInfo {...props} exerciseList={exerciseList}/>}</Stack.Screen>
        <Stack.Screen name='Main'>{(props) => <TabNavigator {...props} user={userInfo} updateEquipment={updateEquipment} findExercises={findExercises} userEquipment={userEquipment}/>}</Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

/*
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomePage/home";
import Login from './Screens/Login/login';
import Register from './Screens/Register/register'
import MyGym from './Screens/MyGym/myGym'
import Routine from './Screens/Routine/routine';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MyGym" component={MyGym} />
        <Stack.Screen name="Routine" component={Routine} />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
*/