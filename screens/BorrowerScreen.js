import { View, Text, Image } from 'react-native'
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
        <View style={styles.borrower_info_box}>
            <Image style={styles.profile} source={require('../assets/icons/user.png')} />
            <View style={styles.borrower_info}>
                <Text>Borrower Full Name</Text>
                <Text>Borrowed Amount:  ₱1,000</Text>
                <Text>Borrwed Interest: 10%</Text>
                <Text>Total:  ₱1,100</Text>
                <Text>Paid:  ₱200</Text>
            </View>
        </View>
        <ScrollView>
        </ScrollView>
      </View> 
    </SafeAreaView>
  )
}