import { useState } from 'react';
import { Text, View, Image, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import backArrow from '../../assets/images/back-arrow.png';
import { Instructions } from '../../Components/Instructions';
import { Repetition } from '../../Components/Repetition';


export function ExerciseInfo ({navigation, route}) {
  const { setNumber, reps, formattedName, target, gifUrl, bodyTarget, equipment } = route.params;
  const [ counter, setCounter ] = useState(-1);

  const logSetClicked = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  const handleBack = () => {
    Alert.alert('', `You are not done with the exercises yet. Are you sure you want to finish this workout?`, [
      {
        text: 'NO',
      },
      { text: 'YES', onPress: () => navigation.navigate('Routine') },
    ]);
   }
  
  return(
    <View style={{backgroundColor:'black', height:'100%', flexDirection:'column'}}>
        {/* <Image source={{
          uri: gifUrl,
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '68a64c3a53mshfc50b2d0cf73e8ep1ca3d2jsnc62ca1751986',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          },
        }} style={{width:300, height:300}}/> */}
      <ScrollView>

      
        <View style={styles.headerContainer}>
          <Pressable onPress={handleBack}>
            <Image source={backArrow} style={styles.backIcon}/>
          </Pressable>
          <Text style={styles.exerciseName}>{formattedName}</Text>
        </View>
        
        <Image style={{width:300, height:300, flexDirection: 'column', alignSelf:'center'}} source={require('./homer.gif')}/>
        <Text style={styles.spanText}>{setNumber} SETS</Text>
        
        {[...Array(setNumber)].map((ele, index) => {
        return (
          <View>
            <Repetition reps={reps} counter={counter} key={index} index={index} setNumber={setNumber}/>
          </View>
          
        )})}

        <Instructions target={target} equipment={equipment} />
      
      </ScrollView>
        {counter < setNumber-1 ? (
          <Pressable onPress={logSetClicked} style={styles.button}>
            <Text style={{ fontWeight:'bold', color:'white', fontSize:20, fontStyle:'italic'}}>Log set</Text>
          </Pressable>
        ):
        (
          <Pressable onPress={logSetClicked} style={styles.buttonFinish}>
            <Text style={{ fontWeight:'bold', color:'white', fontSize:20, fontStyle:'italic'}}>Done</Text>
          </Pressable>
        )
        
        }
        
 
    </View>
  )
}

const styles = StyleSheet.create({

  headerContainer: {
    flexDirection:'row', 
    alignItems:'center', 
    marginTop:50, 
    marginBottom:30
  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#9A9CE9',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1.3,
    width:140,
    height:25,
    marginTop:'10%',
    position:'absolute',
    bottom:10,
    right:'4%',
    alignSelf:'flex-end'
  },

  buttonFinish: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#9A9CE9',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1.3,
    width:140,
    height:25,
    marginTop:'10%',
    position:'absolute',
    bottom:10,
    right:'4%',
    alignSelf:'flex-end'
  },

  iconsContainer: {
    height:'40%',
    flexWrap: 'wrap', 
    flexDirection: 'row', 
    justifyContent:'space-between', 
    paddingLeft:'5%', 
    paddingRight:'5%',
    alignItems:'center'
  },

  backIcon: {
    width: 35,
    height: 35,
    marginLeft: 20
  },

  exerciseName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    maxWidth:300,
    marginLeft: 20
  },

  spanText: {
    color: 'white',
    fontSize: 17,
    fontWeight:'bold',
    flexDirection: 'column',
    alignSelf:'center',
    marginTop:25,
    marginBottom:20
    },

  progressBar: {
    width: '10%',
    backgroundColor: '#AEEEE0',
    flexDirection:"column"
  },

});
