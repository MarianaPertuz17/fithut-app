import { styles } from "./styles";
import { Text, Pressable } from 'react-native';

export function Tab ({ text, selected, onTabPress }) {
  const selectedStyle = {
    color: 'white',
    borderBottomColor: '#10ECE4',
    borderBottomWidth:  2,
    paddingBottom: 4,
  }
  return (
    <Pressable onPress={() => onTabPress(text)} >
      <Text style={selected ? {...styles.tabsText, ...selectedStyle} : styles.tabsText}>{text}</Text>
    </Pressable>
  )
}