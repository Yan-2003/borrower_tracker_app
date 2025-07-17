import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationComponent from '../components/NavigationComponent'
import global from '../styles/Styles'
import styles from '../styles/BorrowerStyles'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderWithBackComponent from '../components/HeaderWithBackComponent'

export default function BorrowerScreen() {
  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}>
        <HeaderWithBackComponent title={'Borrower'} />
        <ScrollView>
        </ScrollView>
      </View> 
      <NavigationComponent /> 
    </SafeAreaView>
  )
}