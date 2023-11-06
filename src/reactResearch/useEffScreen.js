import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  SafeAreaView,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native'

const UseEffScreen = ({ navigation, route }) => {
  const [resourceType, setResourceType] = useState('posts')
  useEffect(() => {
    console.log('render')
  }, [resourceType])
  return (
    <View style={styles.mainContainer}>
      <View style={styles.ButtonContainer}>
        <Button title="Posts" onPress={() => setResourceType('posts')} />
        <Button title="Users" onPress={() => setResourceType('users')} />
        <Button title="Comments" onPress={() => setResourceType('comments')} />
      </View>
      <View style={styles.mainContainer}>
        <Text>{resourceType}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50
  }
})
export default UseEffScreen
