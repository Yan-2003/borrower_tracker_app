import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HeaderWithBackComponent = ({title}) => {

    const navigation = useNavigation()

  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.back_btn} onPress={()=>navigation.goBack()}>
            <Image style={styles.icon} source={require('../assets/icons/back.png')} />
    {/*         <Text style={styles.sm_text}>Back</Text> */}
        </TouchableOpacity>
        <Text>{title}</Text>
    </View>
  )
}

export default HeaderWithBackComponent

const styles = StyleSheet.create({

    header : {
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
    },
    icon : {
        width : 24, 
        height :24,
    },
    back_btn : {
        flexDirection : 'row',
        alignItems : 'center',
    }, 
    sm_text : {
        fontSize : 12
    }
})