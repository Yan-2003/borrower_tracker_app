import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/LoginStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputTextComponent from '../components/InputTextComponent'
import ButtonComponent from '../components/ButtonComponent'
import Checkbox from 'expo-checkbox'
import { useNavigation } from '@react-navigation/native'

export default function RegisterScreen() {


  const [isName, setisName] = useState(false);


  const navigation = useNavigation()

  return (
     <SafeAreaView style={styles.view}>
        <Text style={styles.title}>Borrower Tracker</Text>
        <Text>Create your Account.</Text>
        <View style={styles.forms}>
            {
              isName ?
              <>
                <InputTextComponent placeholder={'First Name'} />
                <InputTextComponent placeholder={'Middel Name'} />
                <InputTextComponent placeholder={'Last Name'} />
                <ButtonComponent name={'Next'} />
                <ButtonComponent name={'Back'} onPress={()=>navigation.goBack()} />
              </>
              : 
              <>
                <Text>Error While Creating Account Please Try Again Later.</Text>
                <ButtonComponent name={'Back'} onPress={()=>navigation.goBack()} />
              </>
            }
        </View>
    </SafeAreaView>
  )
}