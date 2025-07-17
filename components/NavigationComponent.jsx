import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const NavigationComponent = () => {

    const navigation = useNavigation()

    return (
    <View style={styles.nav_box}>
        <TouchableOpacity style={styles.nav_btn} onPress={()=>navigation.replace('Dashboard')}>
        <Image style={styles.nav_img} source={require('../assets/icons/home.png')} />
        <Text style={styles.nav_text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nav_btn} onPress={()=>navigation.replace('AddBorrower')}>
        <Image style={styles.nav_img} source={require('../assets/icons/borrow.png')} />
        <Text style={styles.nav_text}>Add Borrower</Text>
        </TouchableOpacity>

                <TouchableOpacity style={styles.nav_btn} onPress={()=>navigation.replace('History')}>
        <Image style={styles.nav_img} source={require('../assets/icons/list.png')} />
        <Text style={styles.nav_text}>History</Text>
        </TouchableOpacity>

    <TouchableOpacity style={styles.nav_btn} onPress={()=>navigation.replace('Settings')}>
        <Image style={styles.nav_img} source={require('../assets/icons/settings.png')} />
        <Text style={styles.nav_text}>Settings</Text>
        </TouchableOpacity>
    </View>
    )
}

export default NavigationComponent

const styles = StyleSheet.create({
    nav_box : {
        width : '100%',
        padding : 40,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignContent : 'center',
    },
    nav_btn : {
        padding : 10,
        borderRadius : 10,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'rgb(227, 227, 227)',
    },

    nav_img : {
        width : 24,
        height : 24,
    }, 
    
    nav_text : {
        fontSize :10,
    }
})