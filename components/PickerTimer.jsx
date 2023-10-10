import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';


export default function PickerTimer({value, handleValueChange, type, text}) {
    let number = []
    for(let i = 1; i <= 60; i++){
      number.push(i)
    }

    const pickerZero = () => {
        if(type === 'min'){
            return (<Picker.Item label={'0'} value={'0'}  />)
        }

    }

    return (
        <>
            <Text style={{color:'white', paddingTop: 16}}>{text}:</Text>
            <Picker 
                style={{height: 50, width: 100, color:'white'}}
                selectedValue={value}
                onValueChange={(itemValue) => handleValueChange(itemValue)}
            >
                {pickerZero()}
                { number.map((val) => {
                    return (
                        <Picker.Item label={val.toString()} value={val.toString()} key={val} />
                    )
                })}
            </Picker>
        </>
    )
}