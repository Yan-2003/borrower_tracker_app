import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BorrowerComponent = ({id}) => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate('Borrower', {borrower_id: id})}>
        <Image style={styles.icon} source={require('../assets/icons/user.png')} />
        <Text style={styles.text}>BorrowerComponent</Text>
    </TouchableOpacity>
  )
}

export default BorrowerComponent

const styles = StyleSheet.create({
    box : {
        padding : 20, 
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