import { Text, View } from 'react-native';
import { styles } from './styles';

export function Instructions ({ target, equipment}) {
  return (
    <View style={styles.infoContainer} >
      <Text style={styles.title}>Additional Info +</Text>
      <View style={{flexDirection:'row', marginTop:20}}>
        <Text style={styles.h1}>Target:   </Text>
        <Text style={styles.h2}>{target}</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:20}}>
        <Text style={styles.h1}>Equipment:    </Text>
        <Text style={styles.h2}>{equipment}</Text>
      </View>
    </View>
  )
}