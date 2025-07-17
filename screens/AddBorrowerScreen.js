import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import global from '../styles/Styles'
import styles from '../styles/AddBorrowerStyles'
import NavigationComponent from '../components/NavigationComponent'
import InputTextComponent from '../components/InputTextComponent'
import ButtonComponent from '../components/ButtonComponent'
export default function AddBorrowerScreen() {
  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}>
        <Text>Add Borrower</Text>
        <ScrollView style={styles.add_borrower_form}>
          <InputTextComponent placeholder={'First Name'} />
          <InputTextComponent placeholder={'Middle Name'} />
          <InputTextComponent placeholder={'Last Name'} />
          <InputTextComponent placeholder={'Amount Borrowed'} />
          <InputTextComponent placeholder={'Interest Rate'} />
        </ScrollView>

        <ButtonComponent name={'Add Borrower'} />
      </View>
      <NavigationComponent />
    </SafeAreaView>
  )
}