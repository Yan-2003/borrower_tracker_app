import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const LoadingComponent = () => {
  return (
    <View>
     <Image style={styles.icon} source={require('../assets/gif/loading.gif')} autoplay={true} />
    </View>
  )
}

export default LoadingComponent

const styles = StyleSheet.create({
    icon : {
        width : 64,
        height : 64,
        alignSelf : 'center',
        margin : 10,
    }
})