import { View, Text } from 'react-native'
import React, { use, useEffect, useState } from 'react'
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


  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');


  const [isFNameEmpty, setisFNameEmpty] = useState(false);
  const [isMNameEmpty, setisMNameEmpty] = useState(false);
  const [isLNameEmpty, setisLNameEmpty] = useState(false);
  const [isEmailEmpty, setisEmailEmpty] = useState(false);

  const next_is_email = () => {
    setisLoading(true)
    setTimeout(() => {
      setisFNameEmpty(false)
      setisMNameEmpty(false)
      setisLNameEmpty(false)
  
      if(FirstName.length == 0) setisFNameEmpty(true)
      if(MiddleName.length == 0) setisMNameEmpty(true)
      if(LastName.length == 0) setisLNameEmpty(true)
  
      if(!FirstName.length == 0 && !MiddleName.length == 0 && !LastName.length == 0){
        setisName(false)
        setisEmail(true)
      }
  
      return setisLoading(false)
    }, 1000);
    
  }


  const next_is_password = () => {
    setisLoading(true)
    setTimeout(() => {
      setisEmailEmpty(false)
      if(Email.length == 0) setisEmailEmpty(true)
      if(!Email.length == 0){

      } 
      return setisLoading(false)
    }, 1000);
  }

  useEffect(() => {
    setisLoading(true)
    setTimeout(() => {
      setisLoading(false)
    }, 1000);
  
    return () => {
      
    }
  }, []);


  useEffect(() => {
      setisFNameEmpty(false)
      setisMNameEmpty(false)
      setisLNameEmpty(false)
      setisEmailEmpty(false)
  
    return () => {
      
    }
  }, [FirstName, MiddleName, LastName, Email]);



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
                <InputTextComponent failed={isFNameEmpty} placeholder={'First Name'} onTextChange={e => setFirstName(e)} value={FirstName} />
                <InputTextComponent failed={isMNameEmpty} placeholder={'Middel Name'} onTextChange={e=> setMiddleName(e)} value={MiddleName} />
                <InputTextComponent failed={isLNameEmpty} placeholder={'Last Name'} onTextChange={e=> setLastName(e)} value={LastName} />
                <ButtonComponent name={'Next'} onPress={()=>next_is_email()} />
                <ButtonComponent name={'Back'} onPress={()=>navigation.goBack()} />
              </>
              :
              isEmail ? 
              <>
                <Text style={styles.name}>{FirstName} {MiddleName[0]}. {LastName}</Text>
                <InputTextComponent placeholder={'Email'} failed={isEmailEmpty} onTextChange={e => setEmail(e)} value={Email} />
                <ButtonComponent name={'Next'} onPress={()=> next_is_password()} />
                <ButtonComponent name={'Back'} onPress={()=>navigation.goBack()} />
              </>
              : 
              isPassowrd ? 
                <>
                  <Text style={styles.name}>{FirstName} {MiddleName[0]}. {LastName}</Text>
                   <Text style={styles.email}>{Email}</Text>
                  <InputTextComponent placeholder={'Password'} onTextChange={e => setPassword(e)} value={Password} />
                  <InputTextComponent placeholder={'Confirm Password'} onTextChange={e => setConfirmPassword(e)} value={ConfirmPassword} />
                  <ButtonComponent name={'Create Account'} />
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