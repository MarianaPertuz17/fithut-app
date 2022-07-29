import { Text, View, Image, Pressable, StyleSheet} from 'react-native';


export function ExerciseInfo ({navigation, route}) {
  const { setNumber, reps, name, target, gifUrl, bodyTarget, equipment } = route.params;

  return(
    <View style={styles.exerciseContainer}>
        {/* <Image source={{
          uri: gifUrl,
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '68a64c3a53mshfc50b2d0cf73e8ep1ca3d2jsnc62ca1751986',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          },
        }} style={{width:300, height:300}}/> */}
        <Image style={{width:300, height:300}} source={require('./homer.gif')}/>
        <Text>{setNumber} y {reps}</Text>
        <Image source={gifUrl} style={{backgroundColor:'red'}}/>
        <Pressable onPress={() => navigation.navigate('ExerciseInfo')} style={styles.button}>
          <Text style={{ fontWeight:'bold', color:'white', fontSize:20, fontStyle:'italic'}}>Log set</Text>
        </Pressable>

 
    </View>
  )
}

const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    backgroundColor: '#10ECE4',
    borderColor: 'transparent',
    borderRadius:50,
    borderWidth: 1.3,
    width:'50%',
    marginTop:'10%',
  }
});