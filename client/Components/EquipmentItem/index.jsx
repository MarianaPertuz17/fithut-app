import { Text, Pressable, Image, View} from 'react-native';
import { styles } from './styles';

export function EquipmentItem ({ listItem, onTapItem, userEquipment }) {
  let { equipment, added, icon } = listItem;
  const checkAdded = userEquipment.find(ele => ele.equipment === equipment);
  if (checkAdded) {
    listItem.added = true;
  } else {
    listItem.added = false;
  }
  

  return (
    <Pressable style={{...styles.equipmentContainer, backgroundColor: checkAdded ? '#97CBBF': '#171724'}} onPress={() => onTapItem(listItem)}>
      <Text style={{ fontFamily: 'Epilogue-Light', fontSize: 13, color: 'white', marginLeft:'4%', maxWidth:100, lineHeight:20}}>{equipment}</Text>
      <View style={styles.iconContainer}>
        <Image source={icon} style={{width:63, height:65}}/>
      </View>
    </Pressable>
  )
}