import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComponent = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    box :{
        padding : 20,
        marginTop : 10,
        backgroundColor : 'blue',
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
    },
    text : {
        fontSize : 20,
        color : 'white',
    }
})