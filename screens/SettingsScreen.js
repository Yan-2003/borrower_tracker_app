import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationComponent from '../components/NavigationComponent'
import global from '../styles/Styles'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

export default function SettingsScreen() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={global.view}>
      <View style={global.body}>
        <Text>Settings</Text>
        <ScrollView>
            <ButtonComponent name={'Logout'} onPress={()=>navigation.replace('Login')} />
        </ScrollView>
      </View>
      <NavigationComponent />
    </SafeAreaView>
  )
}