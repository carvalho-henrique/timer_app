import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonStart({text, handlePress}) {
    return (
        <TouchableOpacity style={styles.btnStart} onPress={() => handlePress()}>
            <Text style={styles.textStart}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStart: {
        backgroundColor: 'rgb(116, 67, 191)',
        width: 100,
        height:100,
        borderRadius: 50,
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'white'
    },
    textStart: {
        textAlign:'center',
        paddingTop:30,
        color: 'white',
        fontSize: 25
    }
})