import { ImageBackground, StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import myGym from '../assets/images/mygym-icon.png';
import myGymNoColor from '../assets/images/mygym-icon-nocolor.png';
import clock from '../assets/images/clock.png';
import clockNoColor from '../assets/images/clock-nocolor.png';
import profile from '../assets/images/profile.png';
import profileNoColor from '../assets/images/profile-nocolor.png';
import MyGym from '../Screens/MyGym/equipment'
import Routine from '../Screens/Routine/routine';
import Profile from '../Screens/Profile/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export const TabNavigator = ({user, updateEquipment, findExercises, userEquipment}) => {

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

        if (route.name === 'Profile') {
          iconName = focused
          ? profile
          : profileNoColor;
        } 
        return <Image style={styles.tabIconStyle} source={iconName}/>;
     },})}>
      <Tab.Screen name="MyGym">{(props) => <MyGym {...props} user={user} updateEquipment={updateEquipment}/>}</Tab.Screen>
      <Tab.Screen name="Routine">{(props) => <Routine {...props} findExercises={findExercises} userEquipment={userEquipment}/>}</Tab.Screen>
      <Tab.Screen name="Profile">{(props) => <Profile/>}</Tab.Screen>
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