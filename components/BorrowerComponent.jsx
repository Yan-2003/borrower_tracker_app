import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BorrowerComponent = () => {
  return (
    <View style={styles.box}>
        <Image style={styles.icon} source={require('../assets/icons/user.png')} />
        <Text style={styles.text}>BorrowerComponent</Text>
    </View>
  )
}

export default BorrowerComponent

const styles = StyleSheet.create({
    box : {
        padding : 10, 
        backgroundColor : 'rgb(134,137,247)',
        marginTop : 10,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
    },

    text : {
        fontSize : 15,
        fontWeight : 700,
        color : 'white',
    },
    icon: {
        width : 24,
        height : 24,
    },
})