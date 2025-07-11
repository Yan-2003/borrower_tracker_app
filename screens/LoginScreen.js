import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/LoginStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputTextComponent from '../components/InputTextComponent'
import ButtonComponent from '../components/ButtonComponent'
import Checkbox from 'expo-checkbox'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {

  const navigation = useNavigation()


  const login_user = () => {
    navigation.navigate('Dashboard')
  }



  return (
    <SafeAreaView style={styles.view}>
        <Text style={styles.title}>Borrower Tracker</Text>
        <Text>Login your Account.</Text>
        <View style={styles.forms}>
            <InputTextComponent placeholder={'email'} />
            <InputTextComponent placeholder={'password'} />
            <View style={styles.show_pass}>
                <Checkbox />
                <Text>Show Passowrd.</Text>
            </View>
            <ButtonComponent name={'Login'} onPress={login_user} />
        </View>
        <TouchableOpacity style={styles.m1} onPress={()=>navigation.navigate('Register')}><Text>Click Here To Register.</Text></TouchableOpacity>
    </SafeAreaView>
  )
}