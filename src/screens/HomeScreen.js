import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import RoundButton from '../components/RoundButtonv2'
import Database from '../components/GetDatav2/Databasev2'
import TempScreen2 from './parameters/TempScreenv2'
import { Feather } from '@expo/vector-icons'

const tempVal = Database.Rain[0]
const rainVal = Database.Rain[0]
const humVal = Database.Hum[0]
const soilMVal = Database.SoilM[0]

const HomeScreen = ({ navigation, route }) => {
  const handleButtonPressTemp = () => {
    navigation.navigate('Temp', { name: 'Temp' })
  }
  const handleButtonPressRain = () => {
    navigation.navigate('Rain', { name: 'Rain' })
  }
  const handleButtonPressHum = () => {
    navigation.navigate('Humidity', { name: 'Humidity' })
  }
  const handleButtonPressSoilM = () => {
    navigation.navigate('Soil Moisture', { name: 'Soil Moisture' })
  }
  const image = { uri: '' }
  return (
    <View style={styles.container}>
      {/* <Button
        style={styles.buttonStyle}
        title={`Temp:  ${tempVal}`}
        color="#fa2d37"
        onPress={() => navigation.navigate('Temp', { name: 'Temp' })}
      />
      <Button
        title={`Rain: ${rainVal}`}
        color="#13b8eb"
        onPress={() => navigation.navigate('Rain', { name: 'Rain' })}
      />
      <Button
        title={`Humidity: ${humVal}`}
        color="#a6b1ed"
        onPress={() => navigation.navigate('Humidity', { name: 'Humidity' })}
      />
      <Button
        title={`Soil Moisture: ${soilMVal}`}
        onPress={() =>
          navigation.navigate('Soil Moisture', { name: 'Soil Moisture' })
        }
      /> */}
      <ImageBackground
        source={require('../../assets/clouds-background-home.jpg')}
        style={styles.imageLayout}
      >
        <TouchableOpacity
          style={[styles.button, styles.tempButton]}
          onPress={handleButtonPressTemp}
        >
          <View style={styles.iconContainer}>
            <Feather name={'thermometer'} size={24} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Temp</Text>
            <Text style={styles.value}>{tempVal}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.rainButton]}
          onPress={handleButtonPressRain}
        >
          <View style={styles.iconContainer}>
            <Feather name={'cloud-rain'} size={24} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Rain</Text>
            <Text style={styles.value}>{rainVal}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.humButton]}
          onPress={handleButtonPressHum}
        >
          <View style={styles.iconContainer}>
            <Feather name={'droplet'} size={24} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Humidity</Text>
            <Text style={styles.value}>{humVal}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.soilMButton]}
          onPress={handleButtonPressSoilM}
        >
          <View style={styles.iconContainer}>
            <Feather name={'align-center'} size={24} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Soil</Text>
            <Text style={styles.title}>Moisture</Text>
            <Text style={styles.value}>{soilMVal}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  /* button1: {
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  buttonStyle: {
    height: 100,
    width: 50,
    color: 'red',
    backgroundColor: '#fc7703'
  }, */
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 150,
    padding: 10,
    margin: 10,
    shadowColor: 'black'
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
  },
  tempButton: {
    backgroundColor: '#f70707'
  },
  rainButton: { backgroundColor: '#13b8eb' },
  humButton: { backgroundColor: '#a6b1ed' },
  soilMButton: { backgroundColor: '#2ce69b' }
})
export default HomeScreen
