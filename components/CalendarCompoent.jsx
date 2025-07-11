import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const CalendarCompoent = () => {

    
    const [days, setdays] = useState([]);

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
        );
    };
    
    
    useEffect(() => {
        
        const now_date = new Date()
        const days_of_the_month = new Date(now_date.getFullYear(), now_date.getMonth()+1, 0).getDate()
    
        for(var i =0; i < days_of_the_month; i++){
            setdays(old_days =>[...old_days , i])
        }

        setdays(chunkArray(days, 7))
        return () => {
            
        }
    }, []);

  return (
    <View style={styles.box}>
        <View style={styles.header}>
            <Text style={styles.text_color}>Calendar Due</Text>
        </View>
        <View style={styles.table}>
            {
                days.map(row=>{
                    row.map(((col_index ,col) =>{
                        return (
                            <View key={col_index} style={styles.calendar_cell}>
                                <Text >{col}</Text>
                            </View>
                        )
                    }))
                })
            }
        </View>
    </View>
  )
}

export default CalendarCompoent

const styles = StyleSheet.create({
    box : {
        width : '100%',
        alignItems : 'center',

    },

    header: {
        width : '100%',
        alignItems : 'center',
        padding : 10,
        backgroundColor : 'blue',
    },

    text_color : {
        color : 'white',
        fontSize : 15,
        fontWeight : 900,
    },

    table : {
        flexDirection : 'row',
        flexGrow : 7,
    },

    calendar_cell : {
        padding : 10,
    }

})