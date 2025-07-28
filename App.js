import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddBorrowerScreen from './screens/AddBorrowerScreen';
import HistoryScreen from './screens/HistoryScreen';
import BorrowerScreen from './screens/BorrowerScreen';
import SettingsScreen from './screens/SettingsScreen';
import * as SQLite from 'expo-sqlite'
import { useEffect } from 'react';


export default function App() {

  const Stack = createStackNavigator()

  const initDB = async () =>{

    const db = await SQLite.openDatabaseAsync('/database/local.db')

    await db.execAsync(`
      PRAGMA foreign_keys = ON;
      CREATE TABLE IF NOT EXISTS borrower_tbl (
        borrwer_id INTEGER PRIMARY KEY NOT NULL,
        amount DOBULE NOT NULL,
        interest DOUBLE NOT NULL,
        time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        total_amount DOBULE NOT NULL,
        payment_iteration INTEGER NOT NULL,
        first_name VARCHAR(50) NOT NULL,
        middle_name VARCHAR(50),
        last_name VARCHAR(50) NOT NULL,
      );

      CREATE TABLE IF NOT EXISTS borrower_payment_tbl (
       borrwer_payment_id INTEGER PRIMARY KEY NOT NULL,
       borrwer_id INTEGER,
       FOREIGN KEY(borrwer_id) REFERENCES borrower_tbl(borrower_id)
      ); 
    `).then(results => {
      return console.log(results)
    });
  }


  useEffect(() => {
    
    initDB()
  
    return () => {
      
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }} initialRouteName='Dashboard' >
        <Stack.Screen name='Login' component={LoginScreen} /> 
        <Stack.Screen name='Register' component={RegisterScreen} /> 
        <Stack.Screen name='Dashboard' component={DashboardScreen} /> 
        <Stack.Screen name='AddBorrower' component={AddBorrowerScreen} />
        <Stack.Screen name='History' component={HistoryScreen} />
        <Stack.Screen name='Borrower' component={BorrowerScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

