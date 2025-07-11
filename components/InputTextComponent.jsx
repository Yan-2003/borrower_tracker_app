import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputTextComponent = ({placeholder}) => {
  return (
    <View style={styles.box}>
      <TextInput style={styles.input} placeholder={placeholder} />
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
    }
})