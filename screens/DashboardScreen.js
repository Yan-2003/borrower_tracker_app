import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationComponent from '../components/NavigationComponent'
import styles from '../styles/DashboardStyles'
export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.view}>
      <Text>DashboardScreen</Text>
      <Text>hehe</Text>
      <NavigationComponent /> 
    </SafeAreaView>
  )
}