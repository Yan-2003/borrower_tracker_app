import { View, Text, Image } from 'react-native'
import React from 'react'
import global from '../styles/Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationComponent from '../components/NavigationComponent'
export default function HistoryScreen() {
  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}> 
        <Text>Transaction History</Text>
        <View style={global.container}>
          <Image style={global.image} source={require('../assets/icons/sad.png')} />
          <Text>Not Available For Now.</Text>
        </View>
      </View>
      <NavigationComponent />
    </SafeAreaView>
  )
}