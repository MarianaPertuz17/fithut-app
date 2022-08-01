import { StyleSheet, Image } from 'react-native';
import myGym from '../assets/images/mygym-icon.png';
import myGymNoColor from '../assets/images/mygym-icon-nocolor.png';
import clock from '../assets/images/clock.png';
import clockNoColor from '../assets/images/clock-nocolor.png';
import calendar from '../assets/images/calendar.png';
import calendarNoColor from '../assets/images/calendar-nocolor.png';
import MyGym from '../Screens/MyGym/index.jsx'
import Routine from '../Screens/Routine/routine';
import History from '../Screens/History/history';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export const TabNavigator = ({user, updateEquipment, findExercises, userEquipment, routines, findUserRoutines}) => {

  return(
    <Tab.Navigator 
      initialRouteName='MyGym'     
      backBehavior="order"
      screenOptions={({ route }) => ({
        headerShown:false,
        keyboardHidesTabBar: true,
        tabBarActiveTintColor:'#9A9CE9',
        tabBarInactiveTintColor:'#9A9CE9',
        tabBarStyle: styles.tabTabStyle,
        tabBarIcon: ({ focused }) => {
        let iconName;
        if (route.name === 'MyGym') {
            iconName = focused
            ? myGym
            : myGymNoColor;
        } 
        if (route.name === 'Routine') {
            iconName = focused
            ? clock
            : clockNoColor;
        }

        if (route.name === 'History') {
          iconName = focused
          ? calendar
          : calendarNoColor;
        } 
        return <Image style={styles.tabIconStyle} source={iconName}/>;
     },})}>
      <Tab.Screen name="MyGym">{(props) => <MyGym {...props} user={user} updateEquipment={updateEquipment}/>}</Tab.Screen>
      <Tab.Screen name="Routine">{(props) => <Routine {...props} findExercises={findExercises} userEquipment={userEquipment}/>}</Tab.Screen>
      <Tab.Screen name="History">{(props) => <History {...props} routines={routines} findUserRoutines={findUserRoutines}/>}</Tab.Screen>
  </Tab.Navigator >
  )
}

   const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      position: 'relative',
    },
   
    tabIconStyle: {
      position: 'relative',
      width:30,
      height:30
    },

    tabTabStyle: {
      backgroundColor:'#171724',
      height:57,
      borderTopWidth: 0,
      paddingBottom:5
    },
  });