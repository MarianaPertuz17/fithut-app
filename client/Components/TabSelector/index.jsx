import { styles } from "./styles";
import { Text, Pressable, View, ScrollView} from 'react-native';
import { Tab } from "../Tab";

export function TabSelector ({ tabs, onTabPress }) {
  return (
    <ScrollView style = {styles.tabsContainer} horizontal={true}>
      <View style={{ flexDirection: "row" }}>
        {tabs.map(({ text, selected }) => <Tab text={text} selected={selected} onTabPress={onTabPress} />)}
      </View>
    </ScrollView>
  )
}