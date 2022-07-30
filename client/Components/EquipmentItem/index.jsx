import { Text, Pressable } from 'react-native';
import { styles } from './styles';

export function EquipmentItem ({ listItem, onTapItem}) {
  const { equipment, added } = listItem;
  return (
    <Pressable style={{...styles.equipmentContainer, backgroundColor: added ? '#97CBBF': '#171724'}} onPress={() => onTapItem(listItem)}>
      <Text style={{ fontFamily: 'Epilogue-Light', fontSize: 13, color: 'white', marginLeft:'4%',}}>{equipment}</Text>
    </Pressable>
  )
}