import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTextComponent = ({placeholder, onTextChange, value, failed=false}) => {
  return (
    <View style={ !failed ? styles.box : styles.warning_box}>
      <TextInput onChangeText={onTextChange} value={value} style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default InputTextComponent

const styles = StyleSheet.create({
    box : {
        padding : 10,
        borderColor : 'black',
        borderWidth : 1,
        margin : 5,
        borderRadius : 10,
    },
    input : {
        fontSize : 20,
    },

    warning_box : {
       padding : 10,
        borderColor : 'red',
        borderWidth : 1,
        margin : 5,
        borderRadius : 10,
    }
})