import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { BodyList } from '../../Components/BodyList';
import { bodyParts } from './bodyParts';
import { styles } from './styles';


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

