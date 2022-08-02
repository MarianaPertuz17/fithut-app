import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { BodyList } from '../../Components/BodyList';

const bodyParts = [
  {
    name: 'Upper Body',
    icon: require('../../assets/images/biceps-icon.png'),
    selected: false
  },
  {
    name: 'Lower Body',
    icon: require('../../assets/images/leg-icon.png'),
    selected: false
  },
  {
    name: 'Core',
    icon: require('../../assets/images/core-icon.png'),
    selected: false
  },
  {
    name: 'Randomize',
    icon: require('../../assets/images/roulette-icon.png'),
    selected: false
  }
];

export default function Routine ({navigation, findExercises, userEquipment}) {


  const [ bodyPartOptions, setBodyPartOptions ] = useState(bodyParts);


  const onTap = (bodyPartName) => {
    setBodyPartOptions(prevBP => {
      return prevBP.map(ele => {
        if (ele.name === bodyPartName) {
          ele.selected = true;
        } else {
          ele.selected = false;
        }
        return ele;
      })
    })
  };

  const handleStartWorkout = () => {
    let bodyPart = (bodyPartOptions.find(part => part.selected === true)).name;
    if (bodyPart === 'Randomize') {
      const options = ['Upper Body', 'Lower Body', 'Core'];
      bodyPart = options[Math.floor(Math.random() * 3)];
      findExercises(bodyPart, userEquipment.map(equi => equi.equipment));
    }else{
      findExercises(bodyPart, userEquipment.map(equi => equi.equipment));
    }
    
    navigation.navigate('TodaysRoutine');
  }


  return (
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>
      
      <Text style={{ fontFamily: 'Epilogue-Bold', fontSize: 30, color: 'white', marginLeft:'5%',marginTop:'25%', marginBottom:'15%'}}>Today's routine</Text>

      <View style= {styles.iconsContainer}>
        {bodyParts.map((bodyPart, index) => <BodyList key={index} bodyPart={bodyPart} onTap={onTap}/>)}
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleStartWorkout}>
        <Text style={styles.text}>START WORKOUT</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({

  iconsContainer: {
    height:'40%',
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    justifyContent:'space-between', 
    paddingLeft:'5%', 
    paddingRight:'5%',
    alignItems:'center'
  },

  exerciseContainer: {
    alignItems: 'center',
    padding:10,
    backgroundColor: '#2E2E42',
    opacity: 1,
    borderColor: 'transparent',
    borderRadius:20,
    borderWidth: 1.3,
    width: '47%',
  },

  icon: {
    width: 60,
    height: 60,
  },

  backIcon: {
    width: 35,
    height: 35,
    marginTop:50,
    marginLeft: 20
  },

  exerciseName: {
    color: '#9A9CE9',
    marginBottom:'15%'
  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#10ECE4',
    borderColor: 'transparent',
    borderRadius:50,
    borderWidth: 1.3,
    width:'70%',
    marginTop:'10%',
    marginBottom:15
  },

  text: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0.25,
    fontFamily: 'Epilogue-Bold'
  },
});