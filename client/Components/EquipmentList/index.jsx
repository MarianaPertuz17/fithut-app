import { EquipmentItem } from '../EquipmentItem';
import { ScrollView } from 'react-native';

export function EquipmentList ({ list, onTapItem, itemWrapperStyles, availableEquipment }) {
  return (
    <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-between', paddingLeft:'5%', paddingRight:'5%'}}>
      {list.map((ele, index)=> {
        return (
          <EquipmentItem
            key={index}
            listItem={ele}
            onTapItem={onTapItem}
            itemWrapperStyles={itemWrapperStyles}
            userEquipment={availableEquipment}
          />
        )
      })}
  </ScrollView>
  )
}