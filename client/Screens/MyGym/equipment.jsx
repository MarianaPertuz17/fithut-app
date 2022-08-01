import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { EquipmentList } from '../../Components/EquipmentList';
import { TabSelector } from '../../Components/TabSelector';

const freeWeights = [
  {
    "equipment": "dumbbell",
    "added": false
  },
  {
    "equipment": "barbell",
    "added": false    
  },
  {
    "equipment": "ez barbell",
    "added": false
  },
  {
    "equipment": "olympic barbell",
    "added": false
  },
  {
    "equipment": "kettlebell",
    "added": false
  },
  {
    "equipment": "trap bar",
    "added": false
  },
  {
    "equipment": "medicine ball",
    "added": false
  }
];


const machines = [
  {
    "equipment": "elliptical machine"
  },
  {
    "equipment": "cable"
  },
  {
    "equipment": "stepmill machine"
  },
  {
    "equipment": "leverage machine"
  },
  {
    "equipment": "skierg machine"
  },
  {
    "equipment": "sled machine"
  },
  {
    "equipment": "smith machine"
  },
  {
    "equipment": "stationary bike"
  },
  {
    "equipment": "upper body ergometer"
  }
];


const bandsAndMore = [
  {
    "equipment": "band"
  },
  {
    "equipment": "bosu ball"
  },
  {
    "equipment": "rope"
  },
  {
    "equipment": "tire"
  },
  {
    "equipment": "stability ball"
  },
  {
    "equipment": "wheel roller"
  },
  ,
  {
    "equipment": "roller"
  },
  {
    "equipment": "resistance band"
  },
  {
    "equipment": "hammer"
  },
  {
    "equipment": "assisted"
  },
  {
    "equipment": "weighted"
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


export default function MyGym ({navigation, user, updateEquipment}) {

  const [availableEquipment, setAvailableEquipment] = useState([]);
  const [tabsState, setTabsState] = useState(tabs)

  //console.log(user, 'el usuario')

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


  return (
    <View style={{ flex: 1, backgroundColor:'black' }}>
      <TouchableOpacity style = {styles.saveButton} onPress={() => updateEquipment('62de1ccafceacff8700e6722',availableEquipment)} >
        <Text style={{color:'gray', fontFamily: 'Epilogue-SemiBold', fontSize: 17,}}>Save</Text>
      </TouchableOpacity>
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
    marginTop:'15%',
    width:'15%',
    alignItems:'center',
    alignSelf:'flex-end',
    marginRight:'5%',
    marginBottom:'10%'
  }
})


  

 // "body weight" siempre debe estar

    
  
/*
onPress={() => setAvailableEquipment(prevEq => [...prevEq, ele])}
*/