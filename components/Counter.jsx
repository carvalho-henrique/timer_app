import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av'

import stylesGlobal from '../styles/Styles';
import ButtonStart from './ButtonStart';
import { useEffect, useState } from 'react';


export default function Counter(props) {
    const [sound, setSound] = useState();

    let done = false;

    useEffect(() => {
        const timer = setInterval(() => {
            props.setSeg(props.seg - 1)
            if(props.seg <= 0){
                if(props.min > 0){
                    props.setMin(props.min - 1)
                    props.setSeg(59)
                } else {
                    if(!done){
                        done = true
                        props.setState('select')
                        props.setMin(0)
                        props.setSeg(1)
                        playSound()
                    }
                }
            }
        }, 1000);

        return () => clearInterval(timer)
    })

    async function playSound() {
        let alarm
        props.alarms.map((val) => {
            if(val.selected){
                alarm = val.file
            }
        })

        const { sound } = await Audio.Sound.createAsync(require('../assets/alarme1.mp3'));
        setSound(sound);
    
        await sound.playAsync();
    }

    function reset() {
        props.setState('select')
        props.setMin(0)
        props.setSeg(1)
    }

    function convertNumber(number){
        let finalNumber = ""
        if(number < 10){
            finalNumber = "0" + number
        } else {
            finalNumber = number
        }

        return finalNumber
    }

    let seg = convertNumber(props.seg)
    let min = convertNumber(props.min)

    return (
        <View style={stylesGlobal.container}>
            <StatusBar hidden />
            <LinearGradient 
                colors={['rgba(59, 29, 105, 1)', 'rgba(59, 29, 108, 0.8)']}
                style={stylesGlobal.gradient}
            />

            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textCounter}>{min} : </Text>
                <Text style={styles.textCounter}>{seg}</Text>
            </View>
            <ButtonStart text={'Resetar'} handlePress={() => reset()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textCounter: {
        color:'white',
        fontSize: 40
    }
})