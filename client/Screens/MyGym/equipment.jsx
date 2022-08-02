import { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import { EquipmentList } from '../../Components/EquipmentList';
import { TabSelector } from '../../Components/TabSelector';
import xIcon from '../../assets/images/x-icon.png'
import { styles } from './styles';
import { tabs } from './equipmentObjects';

export default function Equipment ({route, navigation}) {

  const { user, updateEquipment } = route.params;
  const [availableEquipment, setAvailableEquipment] = useState([]);
  const [tabsState, setTabsState] = useState(tabs);

  const handleTapItem = (ele) => {
    if (!ele.added) {
      ele.added = !ele.added;
      setAvailableEquipment(prevEq => [...prevEq, ele])
    } else {
      ele.added = !ele.added;
      setAvailableEquipment(availableEquipment.filter(el => el.equipment !== ele.equipment));
    }
  }

  const onTabPress = (text) => {
    setTabsState(prevTabs => {
      return prevTabs.map(tab => {
        if (tab.text === text) {
          tab.selected = true
        } else {
          tab.selected = false
        }
        return tab
      })
    })
  }

  const handleSave = () => {
    if (availableEquipment.length > 0) {
      updateEquipment(user._id, availableEquipment);
      navigation.navigate('MyGym');
    } else {
      Alert.alert('Saved!', `Now you have no equipment in your gym`, [
        { text: 'OK', onPress: () => navigation.navigate('MyGym') },
      ]);
    }
    
    
  }


  return (
    <View style={{ flex: 1, backgroundColor:'black' }}>
      <View style={{flexDirection:'row',  marginLeft:'5%',  marginTop:'12%',marginBottom:'10%', justifyContent:'space-between'}}>
        <TouchableOpacity onPress={() => navigation.navigate('MyGym')}>
          <Image source={xIcon} style={{width:20, height:30}}/>
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.saveButton} onPress={handleSave} >
          <Text style={{color:'gray', fontFamily: 'Epilogue-SemiBold', fontSize: 17, textAlign:'center'}}>Save</Text>
        </TouchableOpacity>
      </View>

      <Text style={{color:'gray', marginLeft:'5%'}}>Tap the equipment that is available to you.</Text>
      <TabSelector tabs={tabsState} onTabPress={onTabPress} />
      <EquipmentList list={tabsState.find(tab => tab.selected === true).childElements ?? []} onTapItem={handleTapItem} />
    </View>   
  )
}