import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import global from '../styles/Styles'
import styles from '../styles/AddBorrowerStyles'
import NavigationComponent from '../components/NavigationComponent'
import InputTextComponent from '../components/InputTextComponent'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
export default function AddBorrowerScreen() {

  const navigation = useNavigation()

  const [FirstName, setFirstName] = useState();

  const [MiddleName, setMiddleName] = useState();

  const [LastName, setLastName] = useState();

  const [Amount, setAmount] = useState();

  const [Interest, setInterest] = useState();


  const add_borrower = ()=>{
    console.log(FirstName)
    console.log(MiddleName)
    console.log(LastName)
    console.log(Amount)
    console.log(Interest)
    navigation.replace('Dashboard')
  }

  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}>
        <Text>Add Borrower</Text>
        <ScrollView style={styles.add_borrower_form}>
          <InputTextComponent placeholder={'First Name'} value={FirstName} onTextChange={e=>setFirstName(e)} />
          <InputTextComponent placeholder={'Middle Name'} value={MiddleName} onTextChange={e=>setMiddleName(e)} />
          <InputTextComponent placeholder={'Last Name'} value={LastName} onTextChange={e=>setLastName(e)} />
          <InputTextComponent placeholder={'Amount Borrowed'} value={Amount} onTextChange={e=>setAmount(e)} />
          <InputTextComponent placeholder={'Interest Rate'} value={Interest} onTextChange={e=>setInterest(e)} />
        </ScrollView>

        <ButtonComponent onPress={()=>add_borrower()} name={'Add Borrower'} />
      </View>
      <NavigationComponent />
    </SafeAreaView>
  )
}