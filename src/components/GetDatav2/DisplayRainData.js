import React from 'react'
import Database from './Databasev2'
import { View, Text } from 'react-native'

function DisplayRainData() {
  const rainData = Database.Rain

  // Use the rainData array in your component

  return (
    <View>
      <Text>{rainData}</Text>
    </View>
  )
}

export default DisplayRainData
