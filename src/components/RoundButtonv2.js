import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const RoundButton = ({ navigation, route }) => {
  const { iconName, title, value, targetScreen, buttonColor } = route.params

  const handleButtonPress = () => {
    navigation.navigate(targetScreen)
  }

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: { buttonColor } }]}
      onPress={handleButtonPress}
    >
      <View style={styles.iconContainer}>
        <Feather name={iconName} size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 10,
    margin: 10
  },
  iconContainer: {
    marginRight: 10
  },
  textContainer: {
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  value: {
    color: 'white',
    fontSize: 14
  }
})

export default RoundButton
