import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationComponent from '../components/NavigationComponent'
import styles from '../styles/DashboardStyles'
import global from '../styles/Styles'
import { ScrollView } from 'react-native-gesture-handler'
import BorrowerComponent from '../components/BorrowerComponent'
export default function DashboardScreen() {
  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}>
        <Text>Dashboard</Text>
        <ScrollView style={styles.scroll_body}>
          <BorrowerComponent/>
          <BorrowerComponent/>
          <BorrowerComponent/>
          <BorrowerComponent/>
        </ScrollView>
      </View> 
      <NavigationComponent /> 
    </SafeAreaView>
  )
}