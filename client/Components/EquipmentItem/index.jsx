import { Text, Pressable, Image, View} from 'react-native';
import { styles } from './styles';

export function EquipmentItem ({ listItem, onTapItem}) {
  const { equipment, added, icon } = listItem;
  return (
    <Pressable style={{...styles.equipmentContainer, backgroundColor: added ? '#97CBBF': '#171724'}} onPress={() => onTapItem(listItem)}>
      <Text style={{ fontFamily: 'Epilogue-Light', fontSize: 13, color: 'white', marginLeft:'4%', maxWidth:100, lineHeight:20}}>{equipment}</Text>
      <View style={styles.iconContainer}>
        <Image source={icon} style={{width:63, height:65}}/>
      </View>
    </Pressable>
  )
}