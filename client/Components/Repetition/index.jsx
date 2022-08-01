
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Animated, Image} from 'react-native';


const FadeInView = (props) => {
  const percentageFilled = new Animated.Value(0);
  const { check, setCheck } = useState(false);
  useEffect(() => {

    if (percentageFilled === 30) setCheck(true)
    Animated.timing(
      percentageFilled,
      {
        toValue: 40,
        duration: 1000,
        useNativeDriver: false
   
      }
    ).start();
  }, [percentageFilled])

  return (
      <Animated.View               
        style={{
          backgroundColor:'#97CBBF',
          width:30,
          height: percentageFilled,       
        }}
      >
        {props.children}
        {check &&<Image source={check}/>}
      </Animated.View>
  );
}

export function Repetition ({reps, counter, index, sets}) {

  return (
    <View>
      <View style={styles.container}>
      {index === counter && 
      (<View style={{...styles.icon, backgroundColor:'white'}}>
          <FadeInView style={{...styles.icon,width: '100%', height: '100%'}}/>
      </View>)
      }

      {index < counter && <View style={{...styles.icon, backgroundColor:'#97CBBF'}}></View>}
      {index > counter && <View style={{...styles.icon, backgroundColor:'white'}}></View>}
      
        <View style={{flexDirection:'row'}}>
          <Text style={{...styles.repsText, marginLeft:20, fontSize:30}}>{reps} </Text>
          <Text style={{...styles.repsText, marginTop:16, fontSize:15}}>REPS</Text>
        </View>
          
      </View>
      {index <= sets-2 && <View style={{width:1, height:30, backgroundColor:'gray', marginLeft:'16.5%'}}></View>}
    </View>
    

 );
}


const styles = StyleSheet.create({

  container:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:'13%',
    height:40

  },

  repsText:{
    fontWeight: 'bold',
    color: 'gray',
  },

  icon: {
    width: 30,
    height:40,
  }
})