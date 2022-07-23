import { ImageBackground, StyleSheet, Text, View, Pressable, Image } from 'react-native';
import upperBod from '../../assets/images/biceps-icon.png';
import lowerBod from '../../assets/images/leg-icon.png';
import coreBod from '../../assets/images/core-icon.png';
import roulette from '../../assets/images/roulette-icon.png';
import backArrow from '../../assets/images/back-arrow.png';


export default function TodaysRoutine ({navigation}) {
  return (
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>

      <Pressable onPress={() => navigation.navigate('Routine')}>
      <Image source={backArrow} style={styles.backIcon}/>
      </Pressable>
      
      
      <Text style={{ fontFamily: 'Epilogue-Bold', fontSize: 30, color: 'white', marginLeft:'8%',marginTop:'25%', marginBottom:'15%'}}>Upper body</Text>

      <View style= {styles.iconsContainer}>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'85%', marginBottom:'5%', height:'45%'}}>
          <Pressable style={styles.exerciseContainer} onPress={() => navigation.navigate('TodaysRoutine')}>
            <Text style={styles.exerciseName}>Upper Body</Text>
            <Image style={styles.icon} source={upperBod}/>
          </Pressable>
          <Pressable style={styles.exerciseContainer} onPress={() => navigation.navigate('TodaysRoutine')}>
            <Text style={styles.exerciseName}>Lower Body</Text>
            <Image style={styles.icon} source={lowerBod}/>
          </Pressable>
        </View>

        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'85%', height:'45%'}}>
          <Pressable style={styles.exerciseContainer} onPress={() => navigation.navigate('TodaysRoutine')}>
            <Text style={styles.exerciseName}>Core</Text>
            <Image style={styles.icon} source={coreBod}/>
          </Pressable>
          <Pressable style={styles.exerciseContainer} onPress={() => navigation.navigate('TodaysRoutine')}>
            <Text style={styles.exerciseName}>Randomize</Text>
            <Image style={styles.icon} source={roulette}/>
          </Pressable>
        </View>
      </View>
      

      <Pressable style={styles.button} onPress={() => navigation.navigate('Routine')}>
        <Text style={styles.text}>START WORKOUT</Text>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({

  iconsContainer: {
    height:'40%',
    alignItems:'center',
    justifySelf:'center'
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