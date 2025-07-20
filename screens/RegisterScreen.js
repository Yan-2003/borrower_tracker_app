import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import global from '../styles/Styles'
import styles from '../styles/LoginStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputTextComponent from '../components/InputTextComponent'
import ButtonComponent from '../components/ButtonComponent'
import Checkbox from 'expo-checkbox'
import { useNavigation } from '@react-navigation/native'
import LoadingComponent from '../components/LoadingComponent'

export default function RegisterScreen() {


  const [isName, setisName] = useState(true);
  const [isEmail, setisEmail] = useState(false);
  const [isPassowrd, setisPassowrd] = useState(false);

  const [isLoading, setisLoading] = useState(false);


  const [FirstName, setFirstName] = useState();
  const [MiddleName, setMiddleName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [Passowrd, setPassowrd] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();


  const next = () => {
    setisLoading(true)
    setTimeout(()=>{
      if(isName == true){
        setisName(false)
        setisEmail(true)
        setisLoading(false)
      }
    }, 1000)
  }


  useEffect(() => {
    setisLoading(true)
    setTimeout(() => {
      setisLoading(false)
    }, 1000);
  
    return () => {
      
    }
  }, []);



  const navigation = useNavigation()

  return (
     <SafeAreaView style={global.container}>
        <Text style={styles.title}>Borrower Tracker</Text>
        <Text>Create your Account.</Text>
        <View style={styles.forms}>
            {
              isLoading ?
                  <LoadingComponent />
              :
              isName ?
              <>
                <InputTextComponent placeholder={'First Name'} />
                <InputTextComponent placeholder={'Middel Name'} />
                <InputTextComponent placeholder={'Last Name'} />
                <ButtonComponent name={'Next'} onPress={()=>next()} />
                <ButtonComponent name={'Back'} onPress={()=>navigation.goBack()} />
              </>
              :
              isEmail ? 
              <>
                <InputTextComponent placeholder={'Email'} />
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