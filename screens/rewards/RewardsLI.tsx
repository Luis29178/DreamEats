import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScrollingCatagorySelector from '@/components/ScrollingCatagorySelector'

const RewardsLI = () => {
  return (
    <View style={{flex:1}}>
      <ScrollingCatagorySelector/>
    </View>
  )
}

export default RewardsLI

const styles = StyleSheet.create({})