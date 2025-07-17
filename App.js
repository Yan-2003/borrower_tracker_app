import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddBorrowerScreen from './screens/AddBorrowerScreen';
import HistoryScreen from './screens/HistoryScreen';
import BorrowerScreen from './screens/BorrowerScreen';

export default function App() {

  const Stack = createStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name='Login' component={LoginScreen} /> 
        <Stack.Screen name='Register' component={RegisterScreen} /> 
        <Stack.Screen name='Dashboard' component={DashboardScreen} /> 
        <Stack.Screen name='AddBorrower' component={AddBorrowerScreen} />
        <Stack.Screen name='History' component={HistoryScreen} />
        <Stack.Screen name='Borrower' component={BorrowerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

