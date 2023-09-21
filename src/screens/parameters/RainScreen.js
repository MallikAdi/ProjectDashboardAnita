import React from 'react'
import { View, Text } from 'react-native'

const RainScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s screen</Text>
}

export default RainScreen
