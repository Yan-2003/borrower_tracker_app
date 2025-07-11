import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const NavigationComponent = ({}) => {
  return (
    <View style={styles.nav_box}>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavigationComponent

const styles = StyleSheet.create({
    nav_box : {
        flex : 1,
        width : '100%',
        backgroundColor : "black"
    }
})