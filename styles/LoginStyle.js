import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    view : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },


    forms : {
        width : '75%'
    },

    title  :{
        fontSize : 30,
        fontWeight : 900,
        marginBottom : 40,
    },

    show_pass : {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 5,
        gap : 10,
        padding : 5,
    },

    m1 : {
        marginTop : 10,
    }
})

module.exports = styles