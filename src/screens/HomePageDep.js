import React from 'react'
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native'
import RoundButton from '../components/RoundButton'

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <View style={styles.upDown}>
          <RoundButton buttonText={'Button1'} buttonColor={styles.button1} />
        </View>
        <View style={styles.middle}>
          <View>
            <RoundButton buttonText={'Button2'} buttonColor={styles.button1} />
          </View>
          <View>
            <RoundButton buttonText={'Button3'} buttonColor={styles.button1} />
          </View>
          <View>
            <RoundButton buttonText={'Button4'} buttonColor={styles.button1} />
          </View>
        </View>
        <View style={styles.upDown}>
          <RoundButton buttonText={'Button5'} buttonColor={styles.button1} />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 20,
    backgroundColor: 'red'
  },
  upDown: {
    flex: 1
  },
  middle: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  button1: {
    backgroundColor: 'powderblue',
    flexDirection: 'row'
  }
})
export default HomePage
