import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import HomeScreen from "./Screens/HomePage/home";
import Login from './Screens/Login/login';
import Register from './Screens/Register/register'
import TodaysRoutine from './Screens/Routine/todaysroutine';
import { TabNavigator } from './Navigation/tabNavigator';
import { userService } from './Services/userService';

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
      //const myFilter = res.filter(exercise => exercise.equipment === equipment)
      // console.log(res.map(exe => {equipment.includes(exe.equipment) && exe}), 'el');
      // for (let exercise of res){
      //   for (let equip of equipment){
      //     if (exercise.equipment === equip) //hago el push 
      //   }
      // }

      setExerciseList(res.map(exe => exe).filter(ele => ele.equipment === 'body weight' || equipment.includes(ele.equipment)));

      //opcion 1 res.map(exe =>{if (equipment.includes(exe.equipment) || exe.equipment === 'body weight') return exe})
      //opcion 2 no funcion res.filter(exercise => equipment.map(equi => exercise.equipment === equi))
    }
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TodaysRoutine">{(props) => <TodaysRoutine {...props} exerciseList={exerciseList}/>}</Stack.Screen>
        <Stack.Screen name='Main'>{(props) => <TabNavigator {...props} updateEquipment={updateEquipment} findExercises={findExercises} userEquipment={userEquipment}/>}</Stack.Screen>
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