import { Text, Image, Pressable} from 'react-native';
import { styles } from './styles';

export function BodyList ({bodyPart, onTap}) {

  const { name, icon, selected } = bodyPart;

  return (
    <Pressable style={{...styles.exerciseContainer, backgroundColor: selected ? '#39395B': '#171724'}} onPress={() => onTap(name)}>
      <Text style={styles.exerciseName}>{name}</Text>
      <Image style={styles.icon} source={icon}/>
    </Pressable>

  )
}