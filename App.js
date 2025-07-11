import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';

export default function App() {

  const Stack = createStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name='Login' component={LoginScreen} /> 
        <Stack.Screen name='Register' component={RegisterScreen} /> 
        <Stack.Screen name='Dashboard' component={DashboardScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

