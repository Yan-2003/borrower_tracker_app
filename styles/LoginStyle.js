import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
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

    name : {
        fontSize : 20,
        alignSelf : 'center',
        fontWeight : 700,
        marginTop : 20,
    },  

    email : {
        alignSelf : 'center',
        margin : 5,
        fontStyle : 'italic'
    }

})

module.exports = styles