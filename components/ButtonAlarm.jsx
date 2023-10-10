import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonAlarm({text, selected, handlePress}) {
    const classButton = selected ? styles.btnSelected : styles.btn
    return (
        <TouchableOpacity style={classButton} onPress={() => handlePress()}>
            <Text style={{color: 'white'}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding:8,
        borderRadius: 10,
        backgroundColor: 'rgb(116, 67, 191)',
        marginRight:10,
        borderWidth: 1,
        borderColor: 'white'
    },
    btnSelected: {
        padding:8,
        borderRadius: 10,
        backgroundColor: 'rgba(116, 67, 191, 0.3)',
        marginRight:10,
        borderWidth: 1,
        borderColor: 'white'
    }
});