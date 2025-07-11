import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationComponent from '../components/NavigationComponent'
import styles from '../styles/DashboardStyles'
import global from '../styles/Styles'
export default function DashboardScreen() {
  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}>
        <Text>Dashboard</Text>
      </View> 
      <NavigationComponent /> 
    </SafeAreaView>
  )
}