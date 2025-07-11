import { View, Text } from 'react-native'
import React from 'react'
import global from '../styles/Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationComponent from '../components/NavigationComponent'
export default function HistoryScreen() {
  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}> 
        <Text>HistoryScreen</Text>
      </View>
      <NavigationComponent />
    </SafeAreaView>
  )
}