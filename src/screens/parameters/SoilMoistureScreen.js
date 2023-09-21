import React from 'react'
import { View, Text } from 'react-native'

const SoilMoistureScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s screen</Text>
}

export default SoilMoistureScreen
