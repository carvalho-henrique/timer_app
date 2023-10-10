import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import PickerTimer from './components/PickerTimer';
import ButtonAlarm from './components/ButtonAlarm';
import ButtonStart from './components/ButtonStart';
import Counter from './components/Counter';
import stylesGlobal from './styles/Styles';

export default function App() {

  const [state, setState] = useState('select')

  const [seg, setSeg] = useState(1)
  const [min, setMin] = useState(0)

  const [alarmSound, setAlarmSound] = useState([
    {
      id: 1,
      selected: true,
      sound: 'alarme 1',
      file: '../assets/alarme1.mp3'
    },
    {
      id: 2,
      selected: false,
      sound: 'alarme 2',
      file: '../assets/alarme2.mp3'
    },
    {
      id: 3,
      selected: false,
      sound: 'alarme 3',
      file: '../assets/alarme3.mp3'
    },
  ])

  const setAlarm = (id) => {
    let alarmSoundTemp = alarmSound.map((val) => {
      if(id != val.id){
        val.selected = false
      } else {
        val.selected = true
      }

      return val
    })

    setAlarmSound(alarmSoundTemp)
  }

  if(state === 'select'){
    return (
      <View style={stylesGlobal.container}>
        <StatusBar hidden />
        <LinearGradient 
          colors={['rgba(59, 29, 105, 1)', 'rgba(59, 29, 108, 0.8)']}
          style={stylesGlobal.gradient}
        />
        <Text style={{color:'white', fontSize:30}}>Selecione o seu Tempo:</Text>
        <View style={{flexDirection:'row'}}>
          <PickerTimer text={'Min'} type={'min'} value={min} handleValueChange={(val) => setMin(val)}/>
          <PickerTimer text={'Seg'} type={'seg'} value={seg} handleValueChange={(val) => setSeg(val)}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          {/* {
            alarmSound.map((val, i) => {
              return (
                <ButtonAlarm 
                  text={val.sound}
                  selected={val.selected}
                  handlePress={() => setAlarm(val.id)}
                  key={i}
                />
              )
            })
          } */}
        </View>
        <ButtonStart text={'Iniciar'} handlePress={() => setState('start')}/>
      </View>
    );
  } else {
    return (
      <Counter alarms={alarmSound} min={min} seg={seg} setState={setState} setSeg={setSeg} setMin={setMin}/>
    )
  }
}