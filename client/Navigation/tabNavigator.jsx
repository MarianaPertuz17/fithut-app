import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import myGym from '../assets/images/mygym-icon.png';
import myGymNoColor from '../assets/images/mygym-icon-nocolor.png';
import clock from '../assets/images/clock.png';
import clockNoColor from '../assets/images/clock-nocolor.png';
import MyGym from '../Components/MyGym/myGym'
import Routine from '../Components/Routine/routine';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
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
          } else if (route.name === 'Routine') {
            iconName = focused
            ? clock
            : clockNoColor;
          } 
        return <Image style={styles.tabIconStyle} source={iconName}/>;
     },})}>
      <Tab.Screen name="MyGym" component={MyGym} options={{ tabBarLabel: 'My Gym' }}/>
      <Tab.Screen name="Routine" component={Routine} options={{ tabBarLabel: 'Routine' }}/>
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