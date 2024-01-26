import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fonts } from '@/constants/Fonts'
import { Colors } from '@/constants/Colors'
import { Link } from 'expo-router'
type propTypes = {
    OptionText: string;
    link: string;
}
const AccountOptionTouchable = ({OptionText, link} : propTypes) => {
  return (
    <Link href={`./${link}`} asChild>
    <TouchableOpacity style={styles.container}>
        <View style={styles.internalContainer}>
      <Text style={styles.optionText}>{`${OptionText}`}</Text>
      <MaterialCommunityIcons size={25} name='chevron-right'/>
      </View>
    </TouchableOpacity>
    </Link>

  )
}

export default AccountOptionTouchable

const styles = StyleSheet.create({
    
    container: {
        height: 50,
        width: '100%',
        
        paddingLeft: 15,

    },
    internalContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.lightGrey
    },
    chevron: {
    },
    optionText: { 
        fontSize: 22,
        fontFamily: Fonts.body,
        color: Colors.primary,
        textAlign: "center",

    },
})