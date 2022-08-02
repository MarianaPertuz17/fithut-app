import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import { EquipmentList } from '../../Components/EquipmentList';
import { TabSelector } from '../../Components/TabSelector';
import xIcon from '../../assets/images/x-icon.png'

const freeWeights = [
  {
    "equipment": "dumbbell",
    "added": false,
    'icon': require('../../assets/images/dumbbell.jpg')
  },
  {
    "equipment": "barbell",
    "added": false,
    'icon': require('../../assets/images/barbell.png') 
  },
  {
    "equipment": "ez barbell",
    "added": false,
    'icon': require('../../assets/images/ezbarbell.jpg')
  },
  {
    "equipment": "olympic barbell",
    "added": false,
    'icon': require('../../assets/images/olympicbarbell.jpg')
  },
  {
    "equipment": "kettlebell",
    "added": false,
    'icon': require('../../assets/images/kettlebell.jpg')
  },
  {
    "equipment": "trap bar",
    "added": false,
    'icon': require('../../assets/images/trapbar.jpg')
  },
  {
    "equipment": "medicine ball",
    "added": false,
    'icon': require('../../assets/images/medicineball.jpg')
  }
];


const machines = [
  {
    "equipment": "elliptical machine",
    'icon': require('../../assets/images/ellipticalmachine.jpg')
  },
  {
    "equipment": "cable",
    'icon': require('../../assets/images/cable.jpg')
  },
  {
    "equipment": "stepmill machine",
    'icon': require('../../assets/images/stepmill.jpg')
  },
  {
    "equipment": "leverage machine",
    'icon': require('../../assets/images/leveragemachine.jpg')
  },
  {
    "equipment": "skierg machine",
    'icon': require('../../assets/images/skierg.jpg')
  },
  {
    "equipment": "sled machine",
    'icon': require('../../assets/images/sledmachine.jpg')
  },
  {
    "equipment": "smith machine",
    'icon': require('../../assets/images/smithmachine.jpg')
  },
  {
    "equipment": "stationary bike",
    'icon': require('../../assets/images/stationarybike.jpg')
  },
  {
    "equipment": "upper body ergometer",
    'icon': require('../../assets/images/upperbodyergometer.jpg')
  }
];


const bandsAndMore = [
  {
    "equipment": "band",
    'icon': require('../../assets/images/band.jpg')
  },
  {
    "equipment": "bosu ball",
    'icon': require('../../assets/images/bosuball.jpg')
  },
  {
    "equipment": "rope",
    'icon': require('../../assets/images/rope.jpg')
  },
  {
    "equipment": "tire",
    'icon': require('../../assets/images/tire.jpg')
  },
  {
    "equipment": "stability ball",
    'icon': require('../../assets/images/stabilityball.jpg')
  },
  {
    "equipment": "wheel roller",
    'icon': require('../../assets/images/wheelroller.jpg')
  },
  ,
  {
    "equipment": "roller",
    'icon': require('../../assets/images/roller.jpg')
  },
  {
    "equipment": "resistance band",
    'icon': require('../../assets/images/resistancebar.jpg')
  },
  {
    "equipment": "hammer",
    'icon': require('../../assets/images/hammer.jpg')
  },
  {
    "equipment": "assisted",
    'icon': require('../../assets/images/assisted.png')
  },
  {
    "equipment": "weighted",
    'icon': require('../../assets/images/weighted.jpg')
  }
];

const tabs = [
  {
    text: 'FREE WEIGHTS',
    selected: true,
    childElements: freeWeights
  },
  {
    text: 'MACHINES',
    selected: false,
    childElements: machines,
  },
  {
    text: 'BANDS & MORE',
    selected: false,
    childElements: bandsAndMore
  }
]


export default function Equipment ({route, navigation}) {

  const { user, updateEquipment } = route.params;
  const [availableEquipment, setAvailableEquipment] = useState([]);
  const [tabsState, setTabsState] = useState(tabs)

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
      updateEquipment('62de1ccafceacff8700e6722',availableEquipment);
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


const styles = StyleSheet.create({
  equipmentContainer: {
    flexDirection:'column',
    backgroundColor: '#171724',
    borderRadius:10,
    width: '49%',
    height: 100,
    marginBottom:'2%',
    justifyContent:'center'
  },

  saveButton: {
    width:'15%',
    marginRight:'5%',
    height:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
  }
})